/* ─── ENTER APP ─── */
function enterApp(){
  const ws=document.getElementById('welcome-screen');
  ws.classList.add('exit');
  setTimeout(()=>{
    ws.style.display='none';
    ws.classList.remove('exit');
    document.getElementById('main-app').style.display='block';
    document.getElementById('main-app').classList.add('visible');
    // Update header
    if(currentUser){
      document.getElementById('header-avatar').textContent=(currentUser.initials||currentUser.username.slice(0,2)).toUpperCase();
      document.getElementById('header-username').textContent=currentUser.username;
      document.getElementById('header-role').textContent=currentUser.role;
    }
    renderBranchTabs();
    render();
    loadTheme();
    applyPermissions();
    logActivity('login','🚀','Dashboard opened','Main App','ab-system');
  },800);
}

function goBackToWelcome(){
  document.getElementById('main-app').classList.remove('visible');
  document.getElementById('main-app').style.display='none';
  document.getElementById('welcome-screen').style.display='flex';
}

/* ─── PREVENT BROWSER SCROLL RESTORE ON REFRESH ─── */
if('scrollRestoration' in history) history.scrollRestoration = 'manual';