/* ─── POPUP HOVER SYSTEM (JS-based so scroll works) ─── */
let _popupTimer=null;
function attachPopup(trigger, popup){
  // Remove old listeners by cloning
  const newTrigger=trigger.cloneNode(false);
  while(trigger.firstChild) newTrigger.appendChild(trigger.firstChild);
  trigger.parentNode.replaceChild(newTrigger,trigger);
  trigger=newTrigger;
  trigger.appendChild(popup);

  function showPopup(){
    clearTimeout(_popupTimer);
    // hide all others
    document.querySelectorAll('.hover-popup.popup-open').forEach(p=>{if(p!==popup)p.classList.remove('popup-open');});
    popup.classList.add('popup-open');
    // flip left/right if near edge
    const rect=popup.getBoundingClientRect();
    if(rect.right>window.innerWidth-10){
      popup.style.left='auto';popup.style.right='0';
    } else {
      popup.style.left='0';popup.style.right='auto';
    }
  }
  function scheduleHide(){
    _popupTimer=setTimeout(()=>popup.classList.remove('popup-open'),120);
  }
  trigger.addEventListener('mouseenter',showPopup);
  trigger.addEventListener('mouseleave',scheduleHide);
  popup.addEventListener('mouseenter',()=>clearTimeout(_popupTimer));
  popup.addEventListener('mouseleave',scheduleHide);
}

function buildPopupContent(headerText, rows){
  return `<div class="popup-header">${headerText}</div><div class="hover-popup-inner">${rows||'<div class="popup-row"><span class="popup-name" style="color:var(--text-dim);">No devices</span></div>'}</div>`;
}
function buildDeviceRows(data){
  if(!data.length) return '';
  return data.map(r=>`<div class="popup-row"><span class="popup-num">${r.id}</span><span class="popup-name">${r.name}</span><span class="popup-model">${r.model||'—'}</span></div>`).join('');
}

function makePopupEl(html){
  const p=document.createElement('div');
  p.className='hover-popup';
  p.innerHTML=html;
  return p;
}

function renderDashboard(){
  const b=branch();
  document.getElementById('d-total').textContent=b.data.length;
  document.getElementById('d-teams').textContent=b.teams.length;
  document.getElementById('d-branches').textContent=branches.length;
  const counts={};
  b.teams.forEach(t=>counts[t]=0);
  b.data.forEach(r=>{if(counts[r.team]!==undefined)counts[r.team]++;});
  const vals=b.teams.map(t=>counts[t]);
  const max=Math.max(...vals,1);
  const colors=['0,212,255','0,255,136','123,47,247','255,170,0','255,107,149','255,107,53'];
  document.getElementById('mini-chart').innerHTML=b.teams.map((t,i)=>{
    const h=Math.max(4,Math.round((vals[i]/max)*44));
    const abbr=t.split(' ').map(w=>w[0]).join('').slice(0,3);
    const rgb=colors[i%colors.length];
    return '<div class="mini-bar" style="height:'+h+'px;background:linear-gradient(to top,rgba('+rgb+',0.8),rgba('+rgb+',0.2));" title="'+t+': '+vals[i]+'">'
      +'<span class="mini-bar-val">'+vals[i]+'</span>'
      +'<span class="mini-bar-label">'+abbr+'</span></div>';
  }).join('');

  // ── Dash card popups ──
  const dashPanel=document.getElementById('dashboard-panel');
  const dashCards=dashPanel.querySelectorAll('.dash-card');

  // Card 0: All devices
  const allRows=buildDeviceRows(b.data)+(b.data.length===0?'<div class="popup-row"><span class="popup-name" style="color:var(--text-dim);">No devices</span></div>':'');
  attachPopup(dashCards[0], makePopupEl(buildPopupContent(`All Devices (${b.data.length})`, allRows)));

  // Card 1: Teams
  const teamRowsHtml=b.teams.map(t=>`<div class="popup-row"><span class="popup-num">${counts[t]||0}</span><span class="popup-name">${t}</span></div>`).join('');
  attachPopup(dashCards[1], makePopupEl(buildPopupContent(`Teams in ${b.name}`, teamRowsHtml)));

  // Card 2: Branches
  const branchRowsHtml=branches.map(br=>`<div class="popup-row"><span class="popup-name">${br.name}</span><span class="popup-model">${br.data.length} devices</span></div>`).join('');
  attachPopup(dashCards[2], makePopupEl(buildPopupContent('All Branches', branchRowsHtml)));

  // ── Stat card popups (per team device list) ──
  const statCards=document.querySelectorAll('#stats-bar .stat-card');
  statCards.forEach((card,i)=>{
    const team=b.teams[i];
    if(!team) return;
    const teamData=b.data.filter(r=>r.team===team);
    const rows=teamData.length
      ? teamData.map(r=>`<div class="popup-row"><span class="popup-num">${r.id}</span><span class="popup-name">${r.name}</span><span class="popup-model">${r.model||'—'}</span></div>`).join('')
      : '<div class="popup-row"><span class="popup-name" style="color:var(--text-dim);">No devices assigned</span></div>';
    attachPopup(card, makePopupEl(buildPopupContent(`${team} — ${teamData.length} device${teamData.length!==1?'s':''}`, rows)));
  });
}

/* ─── TOAST ─── */
function showToast(msg,type){
  const t=document.getElementById('toast');
  const m=document.getElementById('toast-msg');
  if(!t||!m)return;
  m.textContent=msg;
  t.className='show'+(type==='success'?' success-toast':'');
  clearTimeout(t._tid);
  t._tid=setTimeout(()=>{t.className='';},2800);
}

/* ─── RECORD COUNT ─── */
function updateRecordCount(n){
  const el=document.getElementById('rec-count');
  if(el) el.textContent=n;
}

/* ─── EXPORT CSV ─── */
function exportCSV(){
  if(!can('canExport')){showToast('🔒 No permission: Export','');return;}
  const rows=filtered();
  const b=branch();
  const headers=['#','Name','Team','Model','IMEI','SIM/Serial','Phone','Notes'];
  const lines=[headers.join(',')];
  rows.forEach((r,i)=>{lines.push([i+1,'"'+r.name+'"','"'+r.team+'"','"'+(r.model||'')+'"',r.imei||'',r.sim||'',r.phone||'','"'+(r.notes||'')+'"'].join(','));});
  const blob=new Blob([lines.join('\n')],{type:'text/csv'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  a.download='IndiaFilings_'+b.name+'_Inventory.csv';
  a.click();
  logActivity('settings','⬇','Exported CSV','Branch: '+b.name,'ab-system');
  showToast('CSV exported successfully!','success');
}

/* ─── PRINT ─── */
function printTable(){
  const rows=filtered();
  const b=branch();
  const w=window.open('','_blank');
  w.document.write('<html><head><title>IndiaFilings - '+b.name+'</title><style>body{font-family:Arial,sans-serif;font-size:12px;}table{width:100%;border-collapse:collapse;}th,td{border:1px solid #ccc;padding:6px 8px;}th{background:#f0f0f0;}.hdr{display:flex;justify-content:space-between;margin-bottom:12px;}</style></head><body>'
    +'<div class="hdr"><h2>IndiaFilings &middot; '+b.name+' Device Inventory</h2><span>'+new Date().toLocaleDateString('en-IN')+'</span></div>'
    +'<table><thead><tr><th>#</th><th>Name</th><th>Team</th><th>Model</th><th>IMEI</th><th>SIM/Serial</th><th>Phone</th><th>Notes</th></tr></thead><tbody>'
    +rows.map((r,i)=>'<tr><td>'+(i+1)+'</td><td>'+r.name+'</td><td>'+r.team+'</td><td>'+(r.model||'—')+'</td><td>'+(r.imei||'—')+'</td><td>'+(r.sim||'—')+'</td><td>'+(r.phone||'—')+'</td><td>'+(r.notes||'')+'</td></tr>').join('')
    +'</tbody></table></body></html>');
  w.document.close();w.print();
}