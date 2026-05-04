/* ─── AUTH SYSTEM (Supabase) ─── */
let users = [];          /* loaded from Supabase app_users table */
let currentUser = null;
let loginAttempts = 0;
const MAX_ATTEMPTS = 5;

/* Load users from Supabase on page load */
(async function initUsers(){
  try {
    const { data, error } = await db.from('app_users').select('*');
    if(error) throw error;
    if(data && data.length){
      users = data;
    } else {
      /* First-time: seed default users */
      const defaults = [
        {username:'admin',    password:'admin123',    role:'Administrator',  initials:'AD'},
        {username:'manager',  password:'manager@123', role:'Branch Manager', initials:'MG'},
        {username:'supervisor',password:'super@123',  role:'Supervisor',     initials:'SV'},
      ];
      for(const u of defaults){
        await db.from('app_users').insert(u);
      }
      users = defaults;
    }
  } catch(e){
    console.error('initUsers:', e);
    /* Fallback so app doesn't break if DB unreachable */
    users = [
      {username:'admin',password:'admin123',role:'Administrator',initials:'AD'},
    ];
  }
})();

async function doLogin(){
  const u=document.getElementById('login-user').value.trim();
  const p=document.getElementById('login-pass').value;
  const errEl=document.getElementById('login-error');
  if(loginAttempts>=MAX_ATTEMPTS){
    errEl.style.display='block';
    errEl.textContent='🔒 Too many failed attempts. Refresh to try again.';
    return;
  }
  /* Query Supabase directly for extra security */
  try {
    const { data, error } = await db.from('app_users').select('*').eq('username',u).eq('password',p).single();
    if(data){
      currentUser=data;
      sessionStorage.setItem('inv_session',JSON.stringify({username:data.username}));
      loginAttempts=0;
      errEl.style.display='none';
      logActivity('login','🔐','Logged in','System','ab-system');
      showWelcomeScreen();
    } else {
      loginAttempts++;
      errEl.style.display='block';
      errEl.textContent=`⚠ Invalid credentials. Attempt ${loginAttempts}/${MAX_ATTEMPTS}.`;
      document.getElementById('login-pass').value='';
      document.getElementById('login-pass').focus();
    }
  } catch(e){
    loginAttempts++;
    errEl.style.display='block';
    errEl.textContent='⚠ Login error. Check connection.';
  }
}

function doLogout(){
  logActivity('login','🚪','Logged out','System','ab-system');
  currentUser=null;
  sessionStorage.removeItem('inv_session');
  document.getElementById('main-app').classList.remove('visible');
  document.getElementById('main-app').style.display='none';
  document.getElementById('welcome-screen').style.display='none';
  document.getElementById('login-screen').style.display='flex';
  document.getElementById('login-user').value='';
  document.getElementById('login-pass').value='';
  document.getElementById('login-error').style.display='none';
  closeUserMenu();
}

function showWelcomeScreen(){
  document.getElementById('login-screen').style.display='none';
  document.getElementById('welcome-screen').style.display='flex';
  document.getElementById('welcome-username-label').textContent=currentUser.username;
  initNetworkCanvas();
}

/* ─── ACTIVITY LOG ─── */
let activityLog=[];

function logActivity(type,icon,action,detail,badgeClass){
  const now=new Date();
  const time=now.toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit',second:'2-digit'});
  const date=now.toLocaleDateString('en-IN');
  activityLog.unshift({type,icon,action,detail,time,date,user:currentUser?currentUser.username:'System',badgeClass});
  if(activityLog.length>200) activityLog=activityLog.slice(0,200);
  /* Also persist to Supabase (non-blocking) */
  if(typeof saveActivityLogDB==='function'){
    saveActivityLogDB(type,icon,action,detail,badgeClass,currentUser?currentUser.username:'System');
  }
}

async function openActivityLog(){
  if(!can('canViewLogs')){showToast('🔒 No permission: View Logs','');return;}
  closeUserMenu();
  /* Reload from DB for latest cross-device logs */
  try {
    const dbLogs=await loadActivityLogDB();
    if(dbLogs.length){
      activityLog=dbLogs.map(a=>({
        type:a.type, icon:a.icon, action:a.action, detail:a.detail,
        badgeClass:a.badge_class, user:a.username,
        time: new Date(a.created_at).toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit',second:'2-digit'}),
        date: new Date(a.created_at).toLocaleDateString('en-IN')
      }));
    }
  } catch(e){}
  renderActivityLog();
  document.getElementById('activity-overlay').classList.add('open');
}
function closeActivityLog(){document.getElementById('activity-overlay').classList.remove('open');}
async function clearActivityLog(){
  activityLog=[];
  try { await db.from('activity_log').delete().neq('id',0); } catch(e){}
  renderActivityLog();
  showToast('Activity log cleared','success');
}
function renderActivityLog(){
  const el=document.getElementById('activity-list');
  if(!activityLog.length){el.innerHTML='<div class="activity-empty">📭 No activity recorded yet.</div>';return;}
  el.innerHTML=activityLog.map(a=>`
    <div class="activity-item">
      <div class="activity-icon ai-${a.type}">${a.icon}</div>
      <div class="activity-content">
        <div class="activity-action">${a.action} <span class="activity-badge ${a.badgeClass}">${a.type.toUpperCase()}</span></div>
        <div class="activity-meta">${a.detail} &nbsp;|&nbsp; ${a.user} &nbsp;|&nbsp; ${a.date} ${a.time}</div>
      </div>
    </div>`).join('');
}

/* ─── SETTINGS ─── */
function openSettings(){
  if(!can('canViewSettings')){showToast('🔒 No permission: Settings Access','');return;}
  closeUserMenu();
  renderSettingsBranchList();
  renderUserList();
  renderPermRoleList();
  document.getElementById('settings-overlay').classList.add('open');
}
function closeSettings(){document.getElementById('settings-overlay').classList.remove('open');}

function setTheme(mode){
  if(mode==='light'){document.body.classList.add('light-theme');document.getElementById('theme-dark').classList.remove('active');document.getElementById('theme-light').classList.add('active');}
  else{document.body.classList.remove('light-theme');document.getElementById('theme-dark').classList.add('active');document.getElementById('theme-light').classList.remove('active');}
  localStorage.setItem('inv_theme',mode);
  logActivity('settings','🎨','Theme changed to '+mode,'Appearance','ab-system');
}
function loadTheme(){const t=localStorage.getItem('inv_theme');if(t==='light')setTheme('light');}
function applyCompact(on){document.querySelectorAll('td').forEach(td=>{td.style.padding=on?'5px 14px':'10px 14px';});localStorage.setItem('inv_compact',on?'1':'0');}
function applyImeiToggle(show){document.querySelectorAll('.imei-col').forEach(el=>{el.style.display=show?'':'none';});localStorage.setItem('inv_showimei',show?'1':'0');}

/* Branch list in settings */
function renderSettingsBranchList(){
  document.getElementById('settings-branch-list').innerHTML=branches.map(b=>`
    <div class="user-item">
      <div class="user-item-avatar" style="background:linear-gradient(135deg,#ff6b35,#ffaa00);">🏢</div>
      <div class="user-item-info"><div class="user-item-name">${b.name}</div><div class="user-item-role">${b.data.length} devices · ${b.teams.length} teams</div></div>
      <div class="user-item-actions">
        <button class="icon-btn" onclick="closeSettings();activeBranchId='${b.id}';renderBranchTabs();render();openModal('rename-branch');" title="Rename">✎</button>
        <button class="icon-btn del" onclick="deleteBranchById('${b.id}')" title="Delete Branch">✕</button>
      </div>
    </div>`).join('');
}

async function deleteBranchById(id){
  if(branches.length<=1){showToast('Cannot delete the only branch','');return;}
  if(!confirm('Delete this branch and ALL its data? This cannot be undone.'))return;
  const name=branches.find(b=>b.id===id)?.name||id;
  await deleteBranchDB(id);
  branches=branches.filter(b=>b.id!==id);
  if(activeBranchId===id)activeBranchId=branches[0].id;
  renderSettingsBranchList();renderBranchTabs();render();
  logActivity('branch','🏢','Branch deleted: '+name,'Branch Management','ab-delete');
  showToast('Branch deleted','');
}

async function confirmClearData(){
  if(!can('canClearData')){showToast('🔒 No permission: Clear Data','');return;}
  if(!confirm('Clear ALL data from current branch? This cannot be undone!'))return;
  try {
    await db.from('devices').delete().eq('branch_id',activeBranchId);
    branch().data=[];
    render();
    logActivity('settings','🗑','Cleared all data','Branch: '+branch().name,'ab-delete');
    showToast('Branch data cleared','');
    closeSettings();
  } catch(e){ showToast('❌ Clear failed',''); }
}

/* User management */
function renderUserList(){
  document.getElementById('user-list').innerHTML=users.map((u,i)=>`
    <div class="user-item">
      <div class="user-item-avatar">${(u.initials||u.username.slice(0,2)).toUpperCase()}</div>
      <div class="user-item-info"><div class="user-item-name">${u.username}</div><div class="user-item-role">${u.role}</div></div>
      <div class="user-item-actions">
        <button class="icon-btn del" onclick="deleteUser(${i})" title="Delete" ${u.username==='admin'?'disabled style="opacity:0.3;cursor:not-allowed"':''}>✕</button>
      </div>
    </div>`).join('');
}

async function deleteUser(idx){
  if(!can('canManageUsers')){showToast('🔒 No permission: Manage Users','');return;}
  if(users[idx].username===currentUser?.username){showToast("Can't delete current user",'');return;}
  if(!confirm('Delete user "'+users[idx].username+'"?'))return;
  const uname=users[idx].username;
  try {
    await db.from('app_users').delete().eq('username',uname);
    logActivity('settings','👤','User deleted: '+uname,'User Management','ab-delete');
    users.splice(idx,1);
    renderUserList();
    showToast('User deleted','');
  } catch(e){ showToast('❌ Delete failed',''); }
}

function showAddUserModal(){
  closeSettings();
  document.getElementById('modal-container').innerHTML=`
    <div class="modal-bg" onclick="if(event.target===this)closeModal()">
      <div class="modal">
        <div class="modal-title">Add New User</div>
        <div class="field"><label>Username</label><input id="nu-user" type="text" placeholder="username"/></div>
        <div class="field"><label>Password</label><input id="nu-pass" type="password" placeholder="password"/></div>
        <div class="field"><label>Role</label>
          <select id="nu-role"><option>Administrator</option><option>Branch Manager</option><option>Supervisor</option></select>
        </div>
        <div class="modal-actions">
          <button class="btn" onclick="closeModal()">Cancel</button>
          <button class="btn primary" onclick="saveNewUser()">Create User</button>
        </div>
      </div>
    </div>`;
}

async function saveNewUser(){
  const u=(document.getElementById('nu-user').value||'').trim();
  const p=(document.getElementById('nu-pass').value||'').trim();
  const r=document.getElementById('nu-role').value;
  if(!u||!p){alert('Username and password are required.');return;}
  if(users.find(x=>x.username===u)){alert('Username already exists.');return;}
  try {
    const newUser={username:u,password:p,role:r,initials:u.slice(0,2).toUpperCase()};
    const {error}=await db.from('app_users').insert(newUser);
    if(error) throw error;
    users.push(newUser);
    logActivity('settings','👤','User created: '+u,'Role: '+r,'ab-add');
    closeModal();
    showToast('User "'+u+'" created','success');
  } catch(e){ alert('Failed to create user: '+(e.message||e)); }
}

function showChangePassword(){
  document.getElementById('modal-container').innerHTML=`
    <div class="modal-bg" onclick="if(event.target===this)closeModal()">
      <div class="modal">
        <div class="modal-title">Change Password</div>
        <div class="field"><label>Current Password</label><input id="cp-cur" type="password" placeholder="Current password"/></div>
        <div class="field"><label>New Password</label><input id="cp-new" type="password" placeholder="New password"/></div>
        <div class="field"><label>Confirm New Password</label><input id="cp-con" type="password" placeholder="Confirm password"/></div>
        <div class="modal-actions">
          <button class="btn" onclick="closeModal()">Cancel</button>
          <button class="btn primary" onclick="saveChangePassword()">Update Password</button>
        </div>
      </div>
    </div>`;
}

async function saveChangePassword(){
  const cur=document.getElementById('cp-cur').value;
  const nw=document.getElementById('cp-new').value;
  const con=document.getElementById('cp-con').value;
  if(cur!==currentUser.password){alert('Current password is incorrect.');return;}
  if(nw.length<6){alert('New password must be at least 6 characters.');return;}
  if(nw!==con){alert('Passwords do not match.');return;}
  try {
    const {error}=await db.from('app_users').update({password:nw}).eq('username',currentUser.username);
    if(error) throw error;
    currentUser.password=nw;
    const idx=users.findIndex(u=>u.username===currentUser.username);
    if(idx>-1)users[idx].password=nw;
    logActivity('settings','🔑','Password changed','Security','ab-system');
    closeModal();
    showToast('Password updated successfully','success');
  } catch(e){ alert('Failed to update password.'); }
}

/* User menu */
function toggleUserMenu(){
  document.getElementById('user-dropdown').classList.toggle('open');
  if(currentUser){
    document.getElementById('header-avatar').textContent=(currentUser.initials||currentUser.username.slice(0,2)).toUpperCase();
    document.getElementById('header-username').textContent=currentUser.username;
    document.getElementById('header-role').textContent=currentUser.role;
    document.getElementById('dd-username').textContent=currentUser.username;
    document.getElementById('dd-role').textContent=currentUser.role;
  }
}
function closeUserMenu(){document.getElementById('user-dropdown').classList.remove('open');}
document.addEventListener('click',function(e){
  if(!document.getElementById('user-menu-wrap')&&!e.target.closest('.user-menu-wrap'))closeUserMenu();
});
