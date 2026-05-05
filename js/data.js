/* ─── DEFAULT / SEED DATA ─── */
const DEFAULT_TEAMS = ["SALES TEAM","COMPLIANCE TEAM","IP LAWYER","TRADE MARK","HR TEAM","NEW GM"];

const GUINDY_DATA = [
  {id:1,team:"SALES TEAM",name:"Gokulnath T",model:"Samsung M02s",imei:"351743853864095",sim:"R9ZR211K22P",phone:"9150054148",notes:""},
  {id:2,team:"SALES TEAM",name:"Ranjith V",model:"Samsung M02s",imei:"351743854169877",sim:"R9ZR80D2EGT",phone:"9150054149",notes:""},
  {id:3,team:"SALES TEAM",name:"Nikhil S",model:"Samsung M04",imei:"352968441293711",sim:"R9ZW1059MZX",phone:"9150090315",notes:""},
  {id:4,team:"SALES TEAM",name:"Aravindhan D",model:"Redmi 9i",imei:"862518052166657",sim:"MFBMXCLCFYWIMRVB",phone:"9150090316",notes:""},
  {id:5,team:"SALES TEAM",name:"Haripriya A",model:"Redmi 9i",imei:"862518052164124",sim:"7SGLW3J8NDNQMPJ5",phone:"9150090317",notes:""},
  {id:6,team:"SALES TEAM",name:"Rajeswari",model:"Samsung M02s",imei:"351743853866439",sim:"R9ZR211KCLX",phone:"8939835921",notes:""},
  {id:7,team:"SALES TEAM",name:"Shabaz Ahmed",model:"Redmi 9i",imei:"862518052192026",sim:"FMFENBSK7LKNIVVC",phone:"8939835920",notes:""},
  {id:8,team:"SALES TEAM",name:"Veena G",model:"Samsung M02s",imei:"359260573967210",sim:"R9ZR806TCZD",phone:"7305996491",notes:""},
  {id:9,team:"SALES TEAM",name:"Dhinesh R",model:"Redmi 9i",imei:"861919058552141",sim:"HEBATKTGOZCM9PKV",phone:"7904922195",notes:""},
  {id:10,team:"SALES TEAM",name:"Kaviya",model:"Redmi 9",imei:"869580055722723",sim:"VO6LWGEEQOUOHA9T",phone:"7824837662",notes:""},
  {id:11,team:"SALES TEAM",name:"Praneesh",model:"Redmi 9i",imei:"869580055716006",sim:"JN4HSOAQ6DSS5P8L",phone:"7824817041",notes:""},
  {id:12,team:"SALES TEAM",name:"NARESH P",model:"Redmi 9A",imei:"869170050170274",sim:"Z5O7HEPN79XG9DGU",phone:"9384810018",notes:""},
  {id:13,team:"SALES TEAM",name:"PRANEESH",model:"Redmi 9i",imei:"865600050087932",sim:"F6JUPJF6RKFUTKY5",phone:"7305958602",notes:""},
  {id:14,team:"SALES TEAM",name:"Antony vishva",model:"Redmi 9",imei:"868384053481593",sim:"GMHUP7CQPFORJVWS",phone:"8939850331",notes:""},
  {id:15,team:"SALES TEAM",name:"Samreen",model:"Redmi 9i",imei:"867332055862881",sim:"456T4HDIPNFQ4L8D",phone:"7824817041",notes:""},
  {id:16,team:"COMPLIANCE TEAM",name:"RANJEETHA DEVI M",model:"Redmi 9",imei:"869580055716006",sim:"JN4HSOAQ6DSS5P8L",phone:"8939850319",notes:""},
  {id:17,team:"COMPLIANCE TEAM",name:"ANDREW JASON",model:"Samsung",imei:"352968441299445",sim:"R9ZW105A97W",phone:"7397761346",notes:""},
  {id:18,team:"COMPLIANCE TEAM",name:"OMPRAKASH",model:"Samsung M02s",imei:"351743854187788",sim:"R9ZR30CCG1L",phone:"8939850328",notes:""},
  {id:19,team:"COMPLIANCE TEAM",name:"SAMIULLAH",model:"Redmi 9i",imei:"861038058594910",sim:"HQ7THEI7BENNMBLB",phone:"9566085834",notes:""},
  {id:20,team:"COMPLIANCE TEAM",name:"SESAN",model:"Redmi 9A",imei:"869170050625277",sim:"PZDURSTG75QCY55L",phone:"7824837665",notes:""},
  {id:21,team:"COMPLIANCE TEAM",name:"Available",model:"Redmi 9i",imei:"867332058657205",sim:"7TW4ZLW8TKM7NN4P",phone:"",notes:"Unassigned"},
  {id:22,team:"COMPLIANCE TEAM",name:"ABHI",model:"Samsung M02s",imei:"359260574440274",sim:"R9ZR80HEXQV",phone:"8939850943",notes:""},
  {id:23,team:"COMPLIANCE TEAM",name:"BASHEER",model:"Redmi 9i",imei:"867332055940828",sim:"",phone:"7558191182",notes:""},
  {id:24,team:"COMPLIANCE TEAM",name:"KAMESH",model:"Redmi 9i",imei:"865600051940410",sim:"",phone:"9150055323",notes:""},
  {id:25,team:"COMPLIANCE TEAM",name:"DEEPIKA",model:"Redmi 9i",imei:"869580057109465",sim:"EYDA9XY9IFMVBMGE",phone:"8925915482",notes:""},
  {id:26,team:"COMPLIANCE TEAM",name:"Desath",model:"Redmi 9i",imei:"",sim:"SWCIJNTWOZGASCMJ",phone:"8939850415",notes:""},
  {id:27,team:"COMPLIANCE TEAM",name:"LUBNA KAUSAR",model:"Redmi 9i",imei:"869580056524185",sim:"MZR8UG859HBMLRPR",phone:"8925915485",notes:""},
  {id:28,team:"COMPLIANCE TEAM",name:"Vandhana S",model:"Redmi 9i",imei:"867332058094342",sim:"",phone:"7530027146",notes:""},
  {id:29,team:"COMPLIANCE TEAM",name:"Manisha Murugan",model:"Redmi 9i",imei:"867332058463968",sim:"",phone:"7845102093",notes:""},
  {id:30,team:"COMPLIANCE TEAM",name:"Varsha",model:"Redmi 9i",imei:"867332055842727",sim:"EQXCEIRK4L5D5PCU",phone:"9150152229",notes:""},
  {id:31,team:"COMPLIANCE TEAM",name:"GUNAPUSHANI",model:"Redmi 9i",imei:"861919059947449",sim:"7PF6X8WGW8RCBQCA",phone:"8939850943",notes:""},
  {id:32,team:"COMPLIANCE TEAM",name:"AMRIN",model:"Redmi 9i",imei:"861405058936302",sim:"ZXVCLJMN45456XAA",phone:"8939835936",notes:""},
  {id:33,team:"IP LAWYER",name:"Aishvarya R",model:"Redmi 9i",imei:"",sim:"D6J75HXWBEQ4PZL7",phone:"9150054150",notes:""},
  {id:34,team:"IP LAWYER",name:"SHOBANA.N",model:"Redmi 9i",imei:"",sim:"85QCDQCIKJGEPRIF",phone:"9150085521",notes:""},
  {id:35,team:"IP LAWYER",name:"HEMADARSHINI",model:"Redmi 9i",imei:"86413005007210",sim:"JVAEHMCUJ76XWW7D",phone:"7397483575",notes:""},
  {id:36,team:"IP LAWYER",name:"Moufika",model:"Redmi 9i",imei:"",sim:"4XG6FAJZBACMA6Y5",phone:"9360951608",notes:""},
  {id:37,team:"IP LAWYER",name:"ANUSHA",model:"Redmi 9i",imei:"861038059298552",sim:"",phone:"6384404253",notes:""},
  {id:38,team:"IP LAWYER",name:"Anandhi B",model:"Redmi 9A",imei:"",sim:"BADQDASGZPW8FELR",phone:"7824844958",notes:""},
  {id:39,team:"IP LAWYER",name:"Adrian Keith Rodrigues",model:"Redmi 6A",imei:"864699040766135",sim:"",phone:"7824837668",notes:""},
  {id:40,team:"IP LAWYER",name:"Subraja L",model:"Redmi 9i",imei:"",sim:"BE17PBSKX4Qw0F89",phone:"8591201568",notes:""},
  {id:41,team:"IP LAWYER",name:"BHAKIYASRI",model:"Redmi 9A",imei:"",sim:"7HROGUEMPZHYAQLJ",phone:"8591200193",notes:""},
  {id:42,team:"IP LAWYER",name:"G B POOJITHA",model:"Redmi 9i",imei:"867332058501940",sim:"496PJ7LBJ7DUSCR8",phone:"9150090319",notes:""},
  {id:43,team:"IP LAWYER",name:"TAYYABA I",model:"Redmi 9i",imei:"",sim:"6XPNXCPRHYZXPVC6",phone:"9360137724",notes:""},
  {id:44,team:"IP LAWYER",name:"AHALYA .K",model:"Redmi 9i",imei:"",sim:"BYBUW0BEA7PQ059",phone:"6384498631",notes:""},
  {id:45,team:"IP LAWYER",name:"MITHRA",model:"Redmi 9A",imei:"869170050094334",sim:"",phone:"7806812709",notes:""},
  {id:46,team:"IP LAWYER",name:"PAVITHRA B",model:"Redmi 9i",imei:"861919059947449",sim:"7PF6X8WGW8RCBQCA",phone:"8939850322",notes:""},
  {id:47,team:"IP LAWYER",name:"abinandhana v k",model:"Redmi 9i",imei:"861038055089716",sim:"HET4AU7XDMJFXGC6",phone:"9360137722",notes:""},
  {id:48,team:"IP LAWYER",name:"NIRANJANA M",model:"Redmi 9i",imei:"869580055718283",sim:"BEORCMWS5LBYZ5FQ",phone:"8291565681",notes:""},
  {id:49,team:"IP LAWYER",name:"SWETHA",model:"Redmi 9i",imei:"861919059936244",sim:"8PWSGYNJXCHVIBXW",phone:"7806812683",notes:""},
  {id:50,team:"IP LAWYER",name:"SUBHALAKSHMI",model:"Redmi 9i",imei:"869580057535289",sim:"INMR8L4L8D7LGYU8",phone:"7845102284",notes:""},
  {id:51,team:"IP LAWYER",name:"HARINI",model:"Redmi 9i",imei:"869580056121149",sim:"KJNVXWVWXW7PV88X",phone:"8925817457",notes:""},
  {id:52,team:"IP LAWYER",name:"MAREESHWARI",model:"Redmi 6A",imei:"864699040746319",sim:"M1804C3CI",phone:"8939851339",notes:""},
  {id:53,team:"IP LAWYER",name:"Akshya",model:"Nokia",imei:"357891911192368",sim:"SZ18191941442044850",phone:"7824844965",notes:""},
  {id:54,team:"TRADE MARK",name:"Rahul SJ",model:"Redmi 9i",imei:"862518052200100",sim:"OJXSUODISOCMIRYP",phone:"7845101782",notes:""},
  {id:55,team:"TRADE MARK",name:"NIVETHA",model:"Samsung M04",imei:"352968441293133",sim:"R9ZW1059P3A",phone:"7397483574",notes:""},
  {id:56,team:"TRADE MARK",name:"HONEY GRACIA",model:"Redmi 9A",imei:"869170050201657",sim:"",phone:"7824837677",notes:""},
  {id:57,team:"TRADE MARK",name:"AMEER HAIDER",model:"Redmi 9i",imei:"869580055962006",sim:"4HLNHAPB4DAYXKQ4",phone:"8097454838",notes:""},
  {id:58,team:"TRADE MARK",name:"KEERTHI",model:"Redmi 9i",imei:"862518057702548",sim:"",phone:"9150085523",notes:""},
  {id:59,team:"TRADE MARK",name:"DIWAKAR S",model:"Redmi 9i",imei:"869580055726526",sim:"WGLJAQEQMZJ7U859",phone:"7824817049",notes:""},
  {id:60,team:"TRADE MARK",name:"SUJOY",model:"Redmi 9i",imei:"867332055753445",sim:"",phone:"8939840457",notes:""},
  {id:61,team:"TRADE MARK",name:"Rajesh Kumar Yadav",model:"Samsung m02s",imei:"",sim:"R9ZR3OCCF4R",phone:"8939840448",notes:""},
  {id:62,team:"TRADE MARK",name:"Kiran S",model:"Redmi 9i",imei:"869580058952509",sim:"L7GQCU4HU4EALROV",phone:"7824817047",notes:""},
  {id:63,team:"TRADE MARK",name:"Vinoth M",model:"Samsung M02s",imei:"351743853681864",sim:"",phone:"8939840442",notes:""},
  {id:64,team:"TRADE MARK",name:"Vinitha Mary S",model:"Redmi 9i",imei:"869805059949604",sim:"DUTCQGIBZPOB59DY",phone:"7806812704",notes:""},
  {id:65,team:"TRADE MARK",name:"Kaushi Sarkar",model:"Samsung M02s",imei:"351743853864171",sim:"",phone:"7338725979",notes:"Display Damage"},
  {id:66,team:"TRADE MARK",name:"Nithish S",model:"Redmi 9i",imei:"863857055725617",sim:"",phone:"9360951602",notes:""},
  {id:67,team:"TRADE MARK",name:"Sanju P",model:"Redmi 9i",imei:"",sim:"G157A6GUL7J7Yp9D",phone:"8925532572",notes:""},
  {id:68,team:"TRADE MARK",name:"Loki reddy venkata",model:"Redmi 9i",imei:"867332055862964",sim:"S2L77PJFR8S4D6FA",phone:"8925532564",notes:""},
  {id:69,team:"TRADE MARK",name:"Bindu anilkumar",model:"Samsung M02s",imei:"351743853864734",sim:"R9ZR211Q2XP",phone:"7558191180",notes:""},
  {id:70,team:"TRADE MARK",name:"Lavanya",model:"Redmi 9A",imei:"861625056240254",sim:"",phone:"8925518991",notes:""},
  {id:71,team:"TRADE MARK",name:"NANTHINI P",model:"Redmi 9i",imei:"861405059894401",sim:"NB55DY85XSCAIZVG",phone:"7904183009",notes:""},
  {id:72,team:"TRADE MARK",name:"john joshua",model:"Samsung M31",imei:"355604115777914",sim:"RZ8R20HWE7T",phone:"7558191187",notes:""},
  {id:73,team:"TRADE MARK",name:"Sandeep S",model:"Redmi 9i",imei:"867332055926066",sim:"",phone:"9384252062",notes:""},
  {id:74,team:"TRADE MARK",name:"YAMINI",model:"",imei:"861405050086908",sim:"CUFIKJXKIZEIH68P",phone:"7824844964",notes:""},
  {id:75,team:"TRADE MARK",name:"Kokila",model:"Redmi 9i",imei:"867332058547505",sim:"FQEMIJ99T8E6PJNN",phone:"8939840454",notes:""},
  {id:76,team:"TRADE MARK",name:"Lokesh N",model:"Redmi 9i",imei:"862518052224100",sim:"",phone:"8925532571",notes:""},
  {id:77,team:"TRADE MARK",name:"C.VIKRAM",model:"Redmi 9i",imei:"863073054775070",sim:"EAFUV8KRON55BEWO",phone:"7904183976",notes:""},
  {id:78,team:"TRADE MARK",name:"RAJESH BABU",model:"Samsung A05",imei:"350835033210662",sim:"R9ZX202WPTM",phone:"6385176219",notes:""},
  {id:79,team:"TRADE MARK",name:"Kaushi Sarkar 2",model:"Redmi 9i",imei:"867332055928781",sim:"",phone:"7338725979",notes:""},
  {id:80,team:"TRADE MARK",name:"ABDUL RASIM",model:"Redmi 9i",imei:"867332055703929",sim:"",phone:"8939840458",notes:""},
  {id:81,team:"TRADE MARK",name:"Aman",model:"Redmi 9i",imei:"8610380586376363",sim:"MN6LQ8BADUXWDICU",phone:"7823940506",notes:""},
  {id:82,team:"TRADE MARK",name:"SRIHARISH S",model:"Samsung m02s",imei:"351743853678811",sim:"R9ZR210P4LT",phone:"9384053924",notes:""},
  {id:83,team:"TRADE MARK",name:"ASWATHY",model:"Galaxy m02s",imei:"351743853863769",sim:"R9ZR211PZZR",phone:"6384404250",notes:""},
  {id:84,team:"TRADE MARK",name:"Vikram C",model:"Redmi 9i",imei:"867332058804963",sim:"",phone:"7305992008",notes:""},
  {id:85,team:"HR TEAM",name:"Smrithy",model:"Samsung A05",imei:"350835033256129",sim:"R9ZX2030WKX",phone:"8925518987",notes:""},
  {id:86,team:"HR TEAM",name:"Lavanya R",model:"Redmi 9i",imei:"861919059990068",sim:"YLRCHIUC69AQMFLV",phone:"8939835922",notes:""},
  {id:87,team:"HR TEAM",name:"Adrian Keith Rodrigues",model:"Redmi 9i",imei:"867332059514967",sim:"",phone:"7824864923",notes:""},
  {id:88,team:"HR TEAM",name:"RUPAVATHI KUMARI",model:"Samsung M04",imei:"352968441753938",sim:"",phone:"8925915481",notes:""},
  {id:89,team:"HR TEAM",name:"Raja Abraham",model:"Samsung M04",imei:"352968441928860",sim:"R9ZW10AKVGX",phone:"8939850411",notes:""},
  {id:90,team:"HR TEAM",name:"PRAVEEN RAJ",model:"Redmi 9A",imei:"861625059653354",sim:"NFZD5PNVZXNFBE4L",phone:"8939835930",notes:""},
  {id:91,team:"HR TEAM",name:"uma",model:"Redmi 9A",imei:"869170050376053",sim:"Q49TTOE69PB6LNBQ",phone:"7824864923",notes:""},
  {id:92,team:"NEW GM",name:"NAGIRIMADUGU VASANTHI",model:"Redmi 9i",imei:"863857055699713",sim:"EUMJPNVCQGRODYF6",phone:"7845102372",notes:""},
  {id:93,team:"NEW GM",name:"VENKAT BHARADWAJ G",model:"Redmi 9i",imei:"861919058386722",sim:"DEPRE6NJJNHQHAKN",phone:"9384053921",notes:""},
  {id:94,team:"NEW GM",name:"Rajesh Babu",model:"Galaxy M04",imei:"352968441293786",sim:"R9ZW1059R2B",phone:"6385176219",notes:""},
  {id:95,team:"NEW GM",name:"Lawrance",model:"Redmi 9i",imei:"863857055699713",sim:"EUMJPNVCQGRODYF6",phone:"9360137723",notes:""},
];

/* ─── IN-MEMORY STATE ─── */
let branches = [];
let activeBranchId = '';

/* ─── SUPABASE DB FUNCTIONS ─── */

async function loadData() {
  try {
    const { data: branchRows, error: bErr } = await db.from('branches').select('*').order('created_at');
    if (bErr) throw bErr;
    const { data: deviceRows, error: dErr } = await db.from('devices').select('*').order('id');
    if (dErr) throw dErr;
    if (!branchRows || branchRows.length === 0) return null;
    return branchRows.map(b => ({
      id: b.id, name: b.name,
      teams: Array.isArray(b.teams) ? b.teams : JSON.parse(b.teams || '[]'),
      data: (deviceRows || []).filter(d => d.branch_id === b.id).map(d => ({
        id: d.id, team: d.team, name: d.name, model: d.model||'',
        imei: d.imei||'', sim: d.sim||'', phone: d.phone||'', notes: d.notes||''
      }))
    }));
  } catch(e) { console.error('loadData:', e); return null; }
}

async function saveDeviceDB(rec, branchId) {
  const payload = { branch_id:branchId, team:rec.team, name:rec.name, model:rec.model||'', imei:rec.imei||'', sim:rec.sim||'', phone:rec.phone||'', notes:rec.notes||'' };
  try {
    if (rec.id) {
      const { data, error } = await db.from('devices').update(payload).eq('id', rec.id).select().single();
      if (error) throw error;
      return data;
    } else {
      const { data, error } = await db.from('devices').insert(payload).select().single();
      if (error) throw error;
      return data;
    }
  } catch(e) { console.error('saveDeviceDB:', e); showToast('❌ Save failed',''); return null; }
}

async function deleteDeviceDB(id) {
  try {
    const { error } = await db.from('devices').delete().eq('id', id);
    if (error) throw error;
  } catch(e) { console.error('deleteDeviceDB:', e); showToast('❌ Delete failed',''); }
}

async function saveTeamsDB(branchId, teams) {
  try {
    const { error } = await db.from('branches').update({ teams }).eq('id', branchId);
    if (error) throw error;
  } catch(e) { console.error('saveTeamsDB:', e); showToast('❌ Teams save failed',''); }
}

async function createBranchDB(id, name, teams) {
  try {
    const { error } = await db.from('branches').insert({ id, name, teams });
    if (error) throw error;
  } catch(e) { console.error('createBranchDB:', e); showToast('❌ Branch create failed',''); }
}

async function renameBranchDB(id, name) {
  try {
    const { error } = await db.from('branches').update({ name }).eq('id', id);
    if (error) throw error;
  } catch(e) { console.error('renameBranchDB:', e); showToast('❌ Rename failed',''); }
}

async function deleteBranchDB(id) {
  try {
    const { error } = await db.from('branches').delete().eq('id', id);
    if (error) throw error;
  } catch(e) { console.error('deleteBranchDB:', e); showToast('❌ Branch delete failed',''); }
}

async function loadActivityLogDB() {
  try {
    const { data, error } = await db.from('activity_log').select('*').order('created_at', { ascending:false }).limit(200);
    if (error) throw error;
    return data || [];
  } catch(e) { return []; }
}

async function saveActivityLogDB(type, icon, action, detail, badgeClass, username) {
  try { await db.from('activity_log').insert({ type, icon, action, detail, badge_class:badgeClass, username }); }
  catch(e) { /* non-critical */ }
}

/* ─── UI HELPERS (unchanged) ─── */
function branch() { return branches.find(b => b.id === activeBranchId); }

function setBranch(id) {
  activeBranchId = id;
  sessionStorage.setItem('inv_activeBranch', id);
  resetFilters(); renderBranchTabs(); render();
}

function renderBranchTabs() {
  if(!branches || branches.length === 0) return;
  if(!activeBranchId || !branches.find(b=>b.id===activeBranchId)) activeBranchId = branches[0].id;
  document.getElementById('branch-tabs').innerHTML =
    branches.map(b=>`<button class="branch-tab${b.id===activeBranchId?' active':''}" onclick="setBranch('${b.id}')">${b.name}</button>`).join('');
  const cur = branch();
  if(cur) document.getElementById('branch-sub').textContent = cur.name + ' Branch';
}

function tc(team) {
  const t = team.toUpperCase();
  if(t.includes('SALES'))      return 't-sales';
  if(t.includes('COMPLIANCE')) return 't-compliance';
  if(t.includes('IP'))         return 't-iplawyer';
  if(t.includes('TRADE'))      return 't-trademark';
  if(t.includes('HR'))         return 't-hr';
  if(t.includes('GM')||t.includes('NEW')) return 't-newgm';
  return 't-custom';
}
function teamBadge(team) { return `<span class="team-badge ${tc(team)}">${team}</span>`; }

function populateTeamFilter() {
  const b = branch(), sel = document.getElementById('team-filter'), cur = sel.value;
  sel.innerHTML = '<option value="">All Teams</option>' +
    b.teams.map(t=>`<option value="${t}"${t===cur?' selected':''}>${t}</option>`).join('');
}

function filtered() {
  const b=branch(), tf=document.getElementById('team-filter').value;
  const s=(document.getElementById('search').value||'').toLowerCase();
  return b.data.filter(r=>{
    if(tf&&r.team!==tf) return false;
    if(s&&!([r.name,r.model,r.imei,r.sim,r.phone,r.notes].join(' ').toLowerCase().includes(s))) return false;
    return true;
  });
}

function resetFilters() {
  document.getElementById('team-filter').value='';
  document.getElementById('search').value='';
  render();
}

function render() {
  populateTeamFilter();
  const b=branch(), counts={};
  b.teams.forEach(t=>counts[t]=0);
  b.data.forEach(r=>{ if(counts[r.team]!==undefined) counts[r.team]++; });
  document.getElementById('stats-bar').innerHTML=b.teams.map(t=>`
    <div class="stat-card" style="cursor:pointer;" title="Hover to see ${t} devices">
      <div class="stat-label">${t}</div>
      <div class="stat-value">${counts[t]||0}</div>
    </div>`).join('');
  const rows=filtered();
  document.getElementById('table-body').innerHTML=rows.length?rows.map((r,i)=>`
    <tr>
      <td>${i+1}</td><td><strong>${r.name}</strong></td>
      <td>${teamBadge(r.team)}</td><td>${r.model||'—'}</td>
      <td class="imei imei-col">${r.imei||'—'}</td>
      <td class="imei">${r.sim||'—'}</td>
      <td>${r.phone||'—'}</td>
      <td style="color:var(--text-dim);font-size:12px;">${r.notes||''}</td>
      <td><div class="action-btns">
        <button class="icon-btn${can('canEditDevice')?'':' locked-btn'}" onclick="${can('canEditDevice')?"openModal('edit-device',"+r.id+")":'showToast("🔒 No permission: Edit Device","")'}" title="Edit">✎</button>
        <button class="icon-btn del${can('canDeleteDevice')?'':' locked-btn'}" onclick="${can('canDeleteDevice')?"deleteDevice("+r.id+")":'showToast("🔒 No permission: Delete Device","")'}" title="Delete">✕</button>
      </div></td>
    </tr>`).join(''):`<tr><td colspan="9" class="empty">📭 No devices found</td></tr>`;
  renderDashboard();
  updateRecordCount(rows.length);
  const compact=localStorage.getItem('inv_compact')==='1';
  const showImei=localStorage.getItem('inv_showimei')!=='0';
  if(compact) applyCompact(true);
  if(!showImei) applyImeiToggle(false);
}

async function deleteDevice(id) {
  if(!can('canDeleteDevice')){showToast('🔒 No permission: Delete Device','');return;}
  if(!confirm('Delete this device record?')) return;
  const b=branch(), rec=b.data.find(r=>r.id===id);
  await deleteDeviceDB(id);
  logActivity('delete','🗑','Device deleted: '+(rec?rec.name:'#'+id),'Branch: '+b.name,'ab-delete');
  /* Reload fresh from Supabase so dashboard stays in sync */
  const refreshed=await loadData();
  if(refreshed&&refreshed.length) branches=refreshed;
  render(); showToast('Device deleted','');
}

/* ─── MODALS ─── */
function openModal(mode,id) {
  if(mode==='add-device'    &&!can('canAddDevice'))     {showToast('🔒 No permission: Add Device','');return;}
  if(mode==='edit-device'   &&!can('canEditDevice'))    {showToast('🔒 No permission: Edit Device','');return;}
  if(mode==='manage-teams'  &&!can('canManageTeams'))   {showToast('🔒 No permission: Manage Teams','');return;}
  if(mode==='add-branch'    &&!can('canManageBranches')){showToast('🔒 No permission: Manage Branches','');return;}
  if(mode==='rename-branch' &&!can('canManageBranches')){showToast('🔒 No permission: Manage Branches','');return;}
  const b=branch(), rec=id!=null?b.data.find(r=>r.id===id):null;
  let inner='';
  if(mode==='manage-teams'){
    inner=`<div class="modal-title">Manage Teams — ${b.name}</div>
      <div class="team-list-editor" id="team-editor">
        ${b.teams.map((t,i)=>`<div class="team-item-row"><input class="team-item-input" value="${t}" id="team-inp-${i}"/><button class="team-remove-btn" onclick="removeTeamRow(${i})">✕</button></div>`).join('')}
      </div>
      <div class="team-add-row"><input class="team-add-input" id="new-team-input" placeholder="New team name…"/><button class="team-add-btn" onclick="addTeamRow()">＋ Add</button></div>
      <div class="modal-actions"><button class="btn" onclick="closeModal()">Cancel</button><button class="btn primary" onclick="saveTeams()">Save Teams</button></div>`;
  } else if(mode==='add-branch'){
    inner=`<div class="modal-title">Add New Branch</div>
      <div class="field"><label>Branch Name</label><input id="m-bname" type="text" placeholder="e.g. Anna Nagar"/></div>
      <div class="field"><label>Teams (one per line)</label>
        <textarea id="m-bteams" rows="6" style="width:100%;font-size:13px;padding:8px;border:1px solid var(--border);border-radius:4px;background:var(--bg);color:var(--text);font-family:'Rajdhani',sans-serif;resize:vertical;outline:none;">${DEFAULT_TEAMS.join('\n')}</textarea>
      </div>
      <div class="modal-actions"><button class="btn" onclick="closeModal()">Cancel</button><button class="btn primary" onclick="saveBranch()">Create Branch</button></div>`;
  } else if(mode==='rename-branch'){
    inner=`<div class="modal-title">Edit Branch</div>
      <div class="field"><label>Branch Name</label><input id="m-rname" type="text" value="${b.name}"/></div>
      <div class="modal-actions"><button class="btn" onclick="closeModal()">Cancel</button><button class="btn primary" onclick="renameBranch()">Save Changes</button></div>`;
  } else {
    inner=`<div class="modal-title">${rec?'Edit Device':'Add Device'} — ${b.name}</div>
      <div class="field"><label>Team</label><select id="m-team">${b.teams.map(t=>`<option value="${t}"${rec&&rec.team===t?' selected':''}>${t}</option>`).join('')}</select></div>
      <div class="field"><label>Name</label><input id="m-name" type="text" value="${rec?rec.name:''}" placeholder="Employee name"/></div>
      <div class="field"><label>Model</label><input id="m-model" type="text" value="${rec?rec.model:''}" placeholder="e.g. Redmi 9i"/></div>
      <div class="field"><label>IMEI</label><input id="m-imei" type="text" value="${rec?rec.imei:''}" placeholder="IMEI number"/></div>
      <div class="field"><label>SIM / Serial</label><input id="m-sim" type="text" value="${rec?rec.sim:''}" placeholder="SIM or serial number"/></div>
      <div class="field"><label>Phone Number</label><input id="m-phone" type="text" value="${rec?rec.phone:''}" placeholder="Contact number"/></div>
      <div class="field"><label>Notes</label><input id="m-notes" type="text" value="${rec?rec.notes:''}" placeholder="Any remarks"/></div>
      <div class="modal-actions"><button class="btn" onclick="closeModal()">Cancel</button><button class="btn primary" onclick="saveDevice('${mode}',${id||'null'})">${rec?'Save Changes':'Add Device'}</button></div>`;
  }
  document.getElementById('modal-container').innerHTML=`<div class="modal-bg" onclick="if(event.target===this)closeModal()"><div class="modal">${inner}</div></div>`;
  setTimeout(()=>{const f=document.querySelector('.modal input');if(f)f.focus();},50);
}
function closeModal(){document.getElementById('modal-container').innerHTML='';}

function removeTeamRow(i){const rows=document.getElementById('team-editor').querySelectorAll('.team-item-row');if(rows[i])rows[i].remove();}
function addTeamRow(){
  const val=(document.getElementById('new-team-input').value||'').trim().toUpperCase();
  if(!val)return;
  const editor=document.getElementById('team-editor');
  const idx=editor.querySelectorAll('.team-item-row').length;
  const div=document.createElement('div');div.className='team-item-row';
  div.innerHTML=`<input class="team-item-input" value="${val}" id="team-inp-${idx}"/><button class="team-remove-btn" onclick="this.parentElement.remove()">✕</button>`;
  editor.appendChild(div);document.getElementById('new-team-input').value='';
}

async function saveTeams(){
  const teams=[...document.querySelectorAll('.team-item-input')].map(i=>i.value.trim().toUpperCase()).filter(Boolean);
  if(!teams.length){alert('At least one team required.');return;}
  await saveTeamsDB(activeBranchId, teams);
  branch().teams=teams;
  logActivity('settings','⚙️','Teams updated','Branch: '+branch().name,'ab-system');
  closeModal();render();
}

async function saveBranch(){
  const name=(document.getElementById('m-bname').value||'').trim();
  if(!name){alert('Branch name is required.');return;}
  const teams=document.getElementById('m-bteams').value.split('\n').map(t=>t.trim().toUpperCase()).filter(Boolean);
  if(!teams.length){alert('Add at least one team.');return;}
  const id='branch_'+Date.now();
  await createBranchDB(id,name,teams);
  branches.push({id,name,teams,data:[]});
  activeBranchId=id;
  logActivity('branch','🏢','Branch created: '+name,'Branch Management','ab-add');
  closeModal();renderBranchTabs();render();
}

async function renameBranch(){
  const name=(document.getElementById('m-rname').value||'').trim();
  if(!name){alert('Branch name is required.');return;}
  const old=branch().name;
  await renameBranchDB(activeBranchId,name);
  branch().name=name;
  logActivity('branch','✎','Branch renamed: '+old+' → '+name,'Branch Management','ab-edit');
  closeModal();renderBranchTabs();render();
}

async function saveDevice(mode,id){
  const get=i=>document.getElementById(i).value.trim();
  const rec={team:get('m-team'),name:get('m-name'),model:get('m-model'),imei:get('m-imei'),sim:get('m-sim'),phone:get('m-phone'),notes:get('m-notes')};
  if(!rec.name){alert('Name is required.');return;}
  const b=branch();
  if(mode==='edit-device'){
    rec.id=id;
    const saved=await saveDeviceDB(rec,activeBranchId);
    if(!saved)return;
    logActivity('edit','✏️','Device edited: '+rec.name,'Team: '+rec.team,'ab-edit');
  } else {
    const saved=await saveDeviceDB(rec,activeBranchId);
    if(!saved)return;
    logActivity('add','➕','Device added: '+saved.name,'Team: '+saved.team,'ab-add');
  }
  /* Always reload fresh from Supabase so dashboard stays in sync */
  const refreshed=await loadData();
  if(refreshed&&refreshed.length) branches=refreshed;
  closeModal();render();
  showToast(mode==='edit-device'?'Device updated!':'Device added!','success');
}

/* ─── SESSION RESTORE ON REFRESH ─── */
async function restoreSession(){
  const saved=sessionStorage.getItem('inv_session');
  if(!saved)return;
  try{
    const sess=JSON.parse(saved);
    /* Wait until auth.js has finished loading users from Supabase */
    let waited=0;
    while((!users||users.length===0)&&waited<5000){
      await new Promise(r=>setTimeout(r,100));
      waited+=100;
    }
    const found=users.find(u=>u.username===sess.username);
    if(!found){sessionStorage.removeItem('inv_session');return;}
    currentUser=found;
    /* Load data from Supabase — never auto-seed (SQL file handles seeding) */
    const loaded=await loadData();
    branches=loaded||[{id:'guindy',name:'Guindy',teams:[...DEFAULT_TEAMS],data:[]}];
    activeBranchId=sessionStorage.getItem('inv_activeBranch')||'guindy';
    if(!branches.find(b=>b.id===activeBranchId))activeBranchId=branches[0].id;
    document.getElementById('login-screen').style.display='none';
    document.getElementById('welcome-screen').style.display='none';
    const app=document.getElementById('main-app');
    app.style.display='block';app.classList.add('visible');
    document.getElementById('header-avatar').textContent=(found.initials||found.username.slice(0,2)).toUpperCase();
    document.getElementById('header-username').textContent=found.username;
    document.getElementById('header-role').textContent=found.role;
    renderBranchTabs();render();loadTheme();applyPermissions();
    window.scrollTo(0,0);
  }catch(e){sessionStorage.removeItem('inv_session');}
}
/* Small delay so auth.js initUsers() runs first */
setTimeout(restoreSession, 300);
