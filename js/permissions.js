/* ─── PERMISSION SYSTEM ─── */
const DEFAULT_PERMISSIONS = {
  'Administrator': {
    canAddDevice:true, canEditDevice:true, canDeleteDevice:true,
    canManageTeams:true, canManageBranches:true, canExport:true,
    canManageUsers:true, canViewLogs:true, canChangePassword:true,
    canClearData:true, canViewSettings:true, canPrint:true
  },
  'Branch Manager': {
    canAddDevice:true, canEditDevice:true, canDeleteDevice:true,
    canManageTeams:true, canManageBranches:false, canExport:true,
    canManageUsers:false, canViewLogs:true, canChangePassword:true,
    canClearData:false, canViewSettings:true, canPrint:true
  },
  'Supervisor': {
    canAddDevice:true, canEditDevice:true, canDeleteDevice:false,
    canManageTeams:false, canManageBranches:false, canExport:true,
    canManageUsers:false, canViewLogs:true, canChangePassword:true,
    canClearData:false, canViewSettings:false, canPrint:true
  },
  'Supervisor': {
    canAddDevice:true, canEditDevice:true, canDeleteDevice:false,
    canManageTeams:false, canManageBranches:false, canExport:true,
    canManageUsers:false, canViewLogs:true, canChangePassword:true,
    canClearData:false, canViewSettings:false, canPrint:true
  }
};

const PERM_LABELS = {
  canAddDevice:'Add Device', canEditDevice:'Edit Device', canDeleteDevice:'Delete Device',
  canManageTeams:'Manage Teams', canManageBranches:'Manage Branches', canExport:'Export CSV',
  canManageUsers:'Manage Users', canViewLogs:'View Logs', canChangePassword:'Change Password',
  canClearData:'Clear Data', canViewSettings:'Settings Access', canPrint:'Print'
};

let rolePermissions = JSON.parse(localStorage.getItem('inv_role_perms') || 'null') || JSON.parse(JSON.stringify(DEFAULT_PERMISSIONS));

function savePermissions(){ localStorage.setItem('inv_role_perms', JSON.stringify(rolePermissions)); }

function can(perm){
  if(!currentUser) return false;
  const role = currentUser.role;
  const rp = rolePermissions[role];
  if(!rp) return true; // unknown role gets full access (admin fallback)
  return rp[perm] === true;
}

function getRoleBadgeClass(role){
  if(role==='Administrator') return 'admin';
  if(role==='Branch Manager') return 'manager';
  if(role==='Supervisor') return 'supervisor';
  if(role==='IT Staff') return 'itstaff';
  return 'manager'; // fallback
}

function applyPermissions(){
  if(!currentUser) return;
  // Add Device button
  const addBtn = document.querySelector('button[onclick="openModal(\'add-device\')"]');
  if(addBtn){ if(!can('canAddDevice')){addBtn.classList.add('locked-btn');}else{addBtn.classList.remove('locked-btn');} }
  // Teams button
  const teamsBtn = document.querySelector('button[onclick="openModal(\'manage-teams\')"]');
  if(teamsBtn){ if(!can('canManageTeams')){teamsBtn.classList.add('locked-btn');}else{teamsBtn.classList.remove('locked-btn');} }
  // Branch buttons
  const branchBtns = document.querySelectorAll('.branch-actions button');
  branchBtns.forEach(b=>{ if(!can('canManageBranches')){b.classList.add('locked-btn');}else{b.classList.remove('locked-btn');} });
  // Export/Print
  const exportBtn = document.querySelector('button[onclick="exportCSV()"]');
  if(exportBtn){ if(!can('canExport')){exportBtn.classList.add('locked-btn');}else{exportBtn.classList.remove('locked-btn');} }
  const printBtn = document.querySelector('button[onclick="printTable()"]');
  if(printBtn){ if(!can('canPrint')){printBtn.classList.add('locked-btn');}else{printBtn.classList.remove('locked-btn');} }
  // Settings / Logs in dropdown
  const settingsItem = document.querySelector('.user-dropdown-item[onclick="openSettings()"]');
  if(settingsItem){ settingsItem.style.display = can('canViewSettings')?'flex':'none'; }
  const logsItem = document.querySelector('.user-dropdown-item[onclick="openActivityLog()"]');
  if(logsItem){ logsItem.style.display = can('canViewLogs')?'flex':'none'; }
  // Perm settings panel visibility (admin only)
  const permSection = document.getElementById('perm-settings-section');
  if(permSection){ permSection.style.display = can('canManageUsers')?'block':'none'; }
  // User management section
  const userMgmt = document.getElementById('user-list');
  if(userMgmt){ const addUserBtn = userMgmt.nextElementSibling; if(addUserBtn){ addUserBtn.style.display = can('canManageUsers')?'':'none'; } }
  // Update dropdown perm summary
  updatePermSummary();
}

function updatePermSummary(){
  const el = document.getElementById('dd-perm-summary');
  if(!el || !currentUser) return;
  const role = currentUser.role;
  const cls = getRoleBadgeClass(role);
  const rp = rolePermissions[role] || {};
  const allowed = Object.entries(rp).filter(([k,v])=>v).length;
  const total = Object.keys(PERM_LABELS).length;
  el.innerHTML = `<span class="perm-badge ${cls}">${role}</span> <span style="font-size:10px;color:var(--text-dim);font-family:'Share Tech Mono',monospace;margin-left:4px;">${allowed}/${total} perms</span>`;
}

function renderPermRoleList(){
  const el = document.getElementById('perm-role-list');
  if(!el) return;
  el.innerHTML = Object.entries(rolePermissions).map(([role, perms])=>{
    const cls = getRoleBadgeClass(role);
    const allowed = Object.entries(perms).filter(([k,v])=>v).map(([k])=>`<span style="color:var(--green);font-size:10px;">✓ ${PERM_LABELS[k]||k}</span>`).join(', ');
    const denied = Object.entries(perms).filter(([k,v])=>!v).map(([k])=>`<span style="color:#ff4757;font-size:10px;">✗ ${PERM_LABELS[k]||k}</span>`).join(', ');
    return `<div class="role-card">
      <div class="role-card-header">
        <span class="perm-badge ${cls}">${role}</span>
        <span style="font-size:10px;color:var(--text-dim);font-family:'Share Tech Mono',monospace;">${Object.values(perms).filter(Boolean).length}/${Object.keys(PERM_LABELS).length} perms</span>
      </div>
      <div style="font-size:11px;line-height:1.7;">${allowed||'<span style="color:var(--text-dim);">No permissions</span>'}${denied?'<br>'+denied:''}</div>
    </div>`;
  }).join('');
}

function openEditPermModal(){
  closeSettings();
  const roles = Object.keys(DEFAULT_PERMISSIONS);
  const rows = roles.map(role=>{
    const rp = rolePermissions[role] || {};
    const cls = getRoleBadgeClass(role);
    const checks = Object.keys(PERM_LABELS).map(k=>`
      <div class="perm-check-row">
        <input type="checkbox" id="perm-${role.replace(/\s/g,'_')}-${k}" ${rp[k]?'checked':''} ${role==='Administrator'?'disabled checked':''} />
        <label for="perm-${role.replace(/\s/g,'_')}-${k}">${PERM_LABELS[k]}</label>
      </div>`).join('');
    return `<div style="margin-bottom:20px;">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;padding-bottom:6px;border-bottom:1px solid var(--border);">
        <span class="perm-badge ${cls}">${role}</span>
        ${role==='Administrator'?'<span style="font-size:10px;color:var(--text-dim);font-family:\'Share Tech Mono\',monospace;">Full access (locked)</span>':''}
      </div>
      <div class="perm-modal-grid">${checks}</div>
    </div>`;
  }).join('');

  document.getElementById('modal-container').innerHTML = `
    <div class="modal-bg" onclick="if(event.target===this)closeModal()">
      <div class="modal" style="max-width:600px;">
        <div class="modal-title">⚙ Role Permission Matrix</div>
        <div style="font-size:11px;color:var(--text-dim);margin-bottom:16px;font-family:'Share Tech Mono',monospace;">Configure access for each role. Administrator always has full access.</div>
        <div style="max-height:55vh;overflow-y:auto;padding-right:4px;">${rows}</div>
        <div class="modal-actions">
          <button class="btn" onclick="closeModal()">Cancel</button>
          <button class="btn" onclick="resetDefaultPerms()" style="color:#ffaa00;">↺ Reset Defaults</button>
          <button class="btn primary" onclick="savePermMatrix()">💾 Save Permissions</button>
        </div>
      </div>
    </div>`;
}

function savePermMatrix(){
  const roles = Object.keys(DEFAULT_PERMISSIONS);
  roles.forEach(role=>{
    if(role==='Administrator'){ rolePermissions[role] = {...DEFAULT_PERMISSIONS['Administrator']}; return; }
    if(!rolePermissions[role]) rolePermissions[role] = {};
    Object.keys(PERM_LABELS).forEach(k=>{
      const cb = document.getElementById('perm-'+role.replace(/\s/g,'_')+'-'+k);
      if(cb) rolePermissions[role][k] = cb.checked;
    });
  });
  savePermissions();
  applyPermissions();
  closeModal();
  showToast('Permissions updated!','success');
  logActivity('settings','🔐','Role permissions updated','Permission Matrix','ab-system');
}

function resetDefaultPerms(){
  if(!confirm('Reset all role permissions to defaults?')) return;
  rolePermissions = JSON.parse(JSON.stringify(DEFAULT_PERMISSIONS));
  savePermissions();
  applyPermissions();
  closeModal();
  showToast('Permissions reset to defaults','success');
}

function showMyPermissions(){
  if(!currentUser) return;
  const role = currentUser.role;
  const rp = rolePermissions[role] || {};
  const cls = getRoleBadgeClass(role);
  const rows = Object.entries(PERM_LABELS).map(([k,label])=>`
    <div class="perm-check-row" style="margin-bottom:4px;">
      <div class="perm-dot ${rp[k]?'allow':'deny'}"></div>
      <label style="cursor:default;">${label}</label>
      <span style="font-size:10px;font-family:'Share Tech Mono',monospace;color:${rp[k]?'var(--green)':'#ff4757'};">${rp[k]?'ALLOWED':'DENIED'}</span>
    </div>`).join('');
  document.getElementById('modal-container').innerHTML = `
    <div class="modal-bg" onclick="if(event.target===this)closeModal()">
      <div class="modal" style="max-width:420px;">
        <div class="modal-title">🔐 My Permissions</div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;padding:10px 12px;background:var(--surface2);border-radius:6px;border:1px solid var(--border);">
          <div class="user-avatar" style="width:36px;height:36px;font-size:14px;">${(currentUser.initials||currentUser.username.slice(0,2)).toUpperCase()}</div>
          <div>
            <div style="font-family:'Orbitron',monospace;font-size:13px;font-weight:700;color:var(--text);">${currentUser.username}</div>
            <span class="perm-badge ${cls}" style="margin-top:4px;display:inline-flex;">${role}</span>
          </div>
        </div>
        <div style="max-height:50vh;overflow-y:auto;">${rows}</div>
        <div class="modal-actions"><button class="btn primary" onclick="closeModal()">Close</button></div>
      </div>
    </div>`;
}