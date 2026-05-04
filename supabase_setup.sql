-- ══════════════════════════════════════════════════════════════
--  IndiaFilings Inventory Manager — Supabase Database Setup
--  Run this entire file in: Supabase Dashboard → SQL Editor → Run
-- ══════════════════════════════════════════════════════════════


-- ─── 1. BRANCHES ──────────────────────────────────────────────
create table if not exists branches (
  id          text        primary key,
  name        text        not null,
  teams       jsonb       not null default '[]',
  created_at  timestamptz not null default now()
);


-- ─── 2. DEVICES ───────────────────────────────────────────────
create table if not exists devices (
  id          bigserial   primary key,
  branch_id   text        not null references branches(id) on delete cascade,
  team        text        not null default '',
  name        text        not null,
  model       text                 default '',
  imei        text                 default '',
  sim         text                 default '',
  phone       text                 default '',
  notes       text                 default '',
  created_at  timestamptz not null default now()
);

create index if not exists idx_devices_branch on devices(branch_id);


-- ─── 3. APP USERS ─────────────────────────────────────────────
--  Note: passwords stored as plain text here for simplicity.
--  For production, use Supabase Auth (supabase.com/docs/guides/auth)
--  and remove this table entirely.
create table if not exists app_users (
  id          bigserial   primary key,
  username    text        not null unique,
  password    text        not null,
  role        text        not null default 'Supervisor',
  initials    text                 default '',
  created_at  timestamptz not null default now()
);


-- ─── 4. ACTIVITY LOG ──────────────────────────────────────────
create table if not exists activity_log (
  id          bigserial   primary key,
  type        text,
  icon        text,
  action      text,
  detail      text,
  badge_class text,
  username    text,
  created_at  timestamptz not null default now()
);

create index if not exists idx_activity_log_created on activity_log(created_at desc);


-- ─── 5. ROW LEVEL SECURITY ────────────────────────────────────
--  Since you use your own app_users table (not Supabase Auth),
--  and the anon key is used from the browser, we allow all
--  operations via the anon role. Lock this down further if you
--  add Supabase Auth later.

alter table branches    enable row level security;
alter table devices     enable row level security;
alter table app_users   enable row level security;
alter table activity_log enable row level security;

-- Allow all operations for anon (browser) users
create policy "allow_all_branches"     on branches     for all using (true) with check (true);
create policy "allow_all_devices"      on devices      for all using (true) with check (true);
create policy "allow_all_app_users"    on app_users    for all using (true) with check (true);
create policy "allow_all_activity_log" on activity_log for all using (true) with check (true);


-- ─── 6. SEED: DEFAULT USERS ───────────────────────────────────
--  These match the hardcoded defaults in auth.js.
--  Change these passwords immediately after first login!

insert into app_users (username, password, role, initials) values
  ('admin',      'admin123',    'Administrator',  'AD'),
  ('manager',    'manager@123', 'Branch Manager', 'MG'),
  ('supervisor', 'super@123',   'Supervisor',     'SV')
on conflict (username) do nothing;


-- ─── 7. SEED: GUINDY BRANCH ───────────────────────────────────
insert into branches (id, name, teams) values (
  'guindy',
  'Guindy',
  '["SALES TEAM","COMPLIANCE TEAM","IP LAWYER","TRADE MARK","HR TEAM","NEW GM"]'
) on conflict (id) do nothing;


-- ─── 8. SEED: ALL 95 GUINDY DEVICES ──────────────────────────
insert into devices (branch_id,team,name,model,imei,sim,phone,notes) values
('guindy','SALES TEAM','Gokulnath T','Samsung M02s','351743853864095','R9ZR211K22P','9150054148',''),
('guindy','SALES TEAM','Ranjith V','Samsung M02s','351743854169877','R9ZR80D2EGT','9150054149',''),
('guindy','SALES TEAM','Nikhil S','Samsung M04','352968441293711','R9ZW1059MZX','9150090315',''),
('guindy','SALES TEAM','Aravindhan D','Redmi 9i','862518052166657','MFBMXCLCFYWIMRVB','9150090316',''),
('guindy','SALES TEAM','Haripriya A','Redmi 9i','862518052164124','7SGLW3J8NDNQMPJ5','9150090317',''),
('guindy','SALES TEAM','Rajeswari','Samsung M02s','351743853866439','R9ZR211KCLX','8939835921',''),
('guindy','SALES TEAM','Shabaz Ahmed','Redmi 9i','862518052192026','FMFENBSK7LKNIVVC','8939835920',''),
('guindy','SALES TEAM','Veena G','Samsung M02s','359260573967210','R9ZR806TCZD','7305996491',''),
('guindy','SALES TEAM','Dhinesh R','Redmi 9i','861919058552141','HEBATKTGOZCM9PKV','7904922195',''),
('guindy','SALES TEAM','Kaviya','Redmi 9','869580055722723','VO6LWGEEQOUOHA9T','7824837662',''),
('guindy','SALES TEAM','Praneesh','Redmi 9i','869580055716006','JN4HSOAQ6DSS5P8L','7824817041',''),
('guindy','SALES TEAM','NARESH P','Redmi 9A','869170050170274','Z5O7HEPN79XG9DGU','9384810018',''),
('guindy','SALES TEAM','PRANEESH','Redmi 9i','865600050087932','F6JUPJF6RKFUTKY5','7305958602',''),
('guindy','SALES TEAM','Antony vishva','Redmi 9','868384053481593','GMHUP7CQPFORJVWS','8939850331',''),
('guindy','SALES TEAM','Samreen','Redmi 9i','867332055862881','456T4HDIPNFQ4L8D','7824817041',''),
('guindy','COMPLIANCE TEAM','RANJEETHA DEVI M','Redmi 9','869580055716006','JN4HSOAQ6DSS5P8L','8939850319',''),
('guindy','COMPLIANCE TEAM','ANDREW JASON','Samsung','352968441299445','R9ZW105A97W','7397761346',''),
('guindy','COMPLIANCE TEAM','OMPRAKASH','Samsung M02s','351743854187788','R9ZR30CCG1L','8939850328',''),
('guindy','COMPLIANCE TEAM','SAMIULLAH','Redmi 9i','861038058594910','HQ7THEI7BENNMBLB','9566085834',''),
('guindy','COMPLIANCE TEAM','SESAN','Redmi 9A','869170050625277','PZDURSTG75QCY55L','7824837665',''),
('guindy','COMPLIANCE TEAM','Available','Redmi 9i','867332058657205','7TW4ZLW8TKM7NN4P','','Unassigned'),
('guindy','COMPLIANCE TEAM','ABHI','Samsung M02s','359260574440274','R9ZR80HEXQV','8939850943',''),
('guindy','COMPLIANCE TEAM','BASHEER','Redmi 9i','867332055940828','','7558191182',''),
('guindy','COMPLIANCE TEAM','KAMESH','Redmi 9i','865600051940410','','9150055323',''),
('guindy','COMPLIANCE TEAM','DEEPIKA','Redmi 9i','869580057109465','EYDA9XY9IFMVBMGE','8925915482',''),
('guindy','COMPLIANCE TEAM','Desath','Redmi 9i','','SWCIJNTWOZGASCMJ','8939850415',''),
('guindy','COMPLIANCE TEAM','LUBNA KAUSAR','Redmi 9i','869580056524185','MZR8UG859HBMLRPR','8925915485',''),
('guindy','COMPLIANCE TEAM','Vandhana S','Redmi 9i','867332058094342','','7530027146',''),
('guindy','COMPLIANCE TEAM','Manisha Murugan','Redmi 9i','867332058463968','','7845102093',''),
('guindy','COMPLIANCE TEAM','Varsha','Redmi 9i','867332055842727','EQXCEIRK4L5D5PCU','9150152229',''),
('guindy','COMPLIANCE TEAM','GUNAPUSHANI','Redmi 9i','861919059947449','7PF6X8WGW8RCBQCA','8939850943',''),
('guindy','COMPLIANCE TEAM','AMRIN','Redmi 9i','861405058936302','ZXVCLJMN45456XAA','8939835936',''),
('guindy','IP LAWYER','Aishvarya R','Redmi 9i','','D6J75HXWBEQ4PZL7','9150054150',''),
('guindy','IP LAWYER','SHOBANA.N','Redmi 9i','','85QCDQCIKJGEPRIF','9150085521',''),
('guindy','IP LAWYER','HEMADARSHINI','Redmi 9i','86413005007210','JVAEHMCUJ76XWW7D','7397483575',''),
('guindy','IP LAWYER','Moufika','Redmi 9i','','4XG6FAJZBACMA6Y5','9360951608',''),
('guindy','IP LAWYER','ANUSHA','Redmi 9i','861038059298552','','6384404253',''),
('guindy','IP LAWYER','Anandhi B','Redmi 9A','','BADQDASGZPW8FELR','7824844958',''),
('guindy','IP LAWYER','Adrian Keith Rodrigues','Redmi 6A','864699040766135','','7824837668',''),
('guindy','IP LAWYER','Subraja L','Redmi 9i','','BE17PBSKX4Qw0F89','8591201568',''),
('guindy','IP LAWYER','BHAKIYASRI','Redmi 9A','','7HROGUEMPZHYAQLJ','8591200193',''),
('guindy','IP LAWYER','G B POOJITHA','Redmi 9i','867332058501940','496PJ7LBJ7DUSCR8','9150090319',''),
('guindy','IP LAWYER','TAYYABA I','Redmi 9i','','6XPNXCPRHYZXPVC6','9360137724',''),
('guindy','IP LAWYER','AHALYA .K','Redmi 9i','','BYBUW0BEA7PQ059','6384498631',''),
('guindy','IP LAWYER','MITHRA','Redmi 9A','869170050094334','','7806812709',''),
('guindy','IP LAWYER','PAVITHRA B','Redmi 9i','861919059947449','7PF6X8WGW8RCBQCA','8939850322',''),
('guindy','IP LAWYER','abinandhana v k','Redmi 9i','861038055089716','HET4AU7XDMJFXGC6','9360137722',''),
('guindy','IP LAWYER','NIRANJANA M','Redmi 9i','869580055718283','BEORCMWS5LBYZ5FQ','8291565681',''),
('guindy','IP LAWYER','SWETHA','Redmi 9i','861919059936244','8PWSGYNJXCHVIBXW','7806812683',''),
('guindy','IP LAWYER','SUBHALAKSHMI','Redmi 9i','869580057535289','INMR8L4L8D7LGYU8','7845102284',''),
('guindy','IP LAWYER','HARINI','Redmi 9i','869580056121149','KJNVXWVWXW7PV88X','8925817457',''),
('guindy','IP LAWYER','MAREESHWARI','Redmi 6A','864699040746319','M1804C3CI','8939851339',''),
('guindy','IP LAWYER','Akshya','Nokia','357891911192368','SZ18191941442044850','7824844965',''),
('guindy','TRADE MARK','Rahul SJ','Redmi 9i','862518052200100','OJXSUODISOCMIRYP','7845101782',''),
('guindy','TRADE MARK','NIVETHA','Samsung M04','352968441293133','R9ZW1059P3A','7397483574',''),
('guindy','TRADE MARK','HONEY GRACIA','Redmi 9A','869170050201657','','7824837677',''),
('guindy','TRADE MARK','AMEER HAIDER','Redmi 9i','869580055962006','4HLNHAPB4DAYXKQ4','8097454838',''),
('guindy','TRADE MARK','KEERTHI','Redmi 9i','862518057702548','','9150085523',''),
('guindy','TRADE MARK','DIWAKAR S','Redmi 9i','869580055726526','WGLJAQEQMZJ7U859','7824817049',''),
('guindy','TRADE MARK','SUJOY','Redmi 9i','867332055753445','','8939840457',''),
('guindy','TRADE MARK','Rajesh Kumar Yadav','Samsung m02s','','R9ZR3OCCF4R','8939840448',''),
('guindy','TRADE MARK','Kiran S','Redmi 9i','869580058952509','L7GQCU4HU4EALROV','7824817047',''),
('guindy','TRADE MARK','Vinoth M','Samsung M02s','351743853681864','','8939840442',''),
('guindy','TRADE MARK','Vinitha Mary S','Redmi 9i','869805059949604','DUTCQGIBZPOB59DY','7806812704',''),
('guindy','TRADE MARK','Kaushi Sarkar','Samsung M02s','351743853864171','','7338725979','Display Damage'),
('guindy','TRADE MARK','Nithish S','Redmi 9i','863857055725617','','9360951602',''),
('guindy','TRADE MARK','Sanju P','Redmi 9i','','G157A6GUL7J7Yp9D','8925532572',''),
('guindy','TRADE MARK','Loki reddy venkata','Redmi 9i','867332055862964','S2L77PJFR8S4D6FA','8925532564',''),
('guindy','TRADE MARK','Bindu anilkumar','Samsung M02s','351743853864734','R9ZR211Q2XP','7558191180',''),
('guindy','TRADE MARK','Lavanya','Redmi 9A','861625056240254','','8925518991',''),
('guindy','TRADE MARK','NANTHINI P','Redmi 9i','861405059894401','NB55DY85XSCAIZVG','7904183009',''),
('guindy','TRADE MARK','john joshua','Samsung M31','355604115777914','RZ8R20HWE7T','7558191187',''),
('guindy','TRADE MARK','Sandeep S','Redmi 9i','867332055926066','','9384252062',''),
('guindy','TRADE MARK','YAMINI','','861405050086908','CUFIKJXKIZEIH68P','7824844964',''),
('guindy','TRADE MARK','Kokila','Redmi 9i','867332058547505','FQEMIJ99T8E6PJNN','8939840454',''),
('guindy','TRADE MARK','Lokesh N','Redmi 9i','862518052224100','','8925532571',''),
('guindy','TRADE MARK','C.VIKRAM','Redmi 9i','863073054775070','EAFUV8KRON55BEWO','7904183976',''),
('guindy','TRADE MARK','RAJESH BABU','Samsung A05','350835033210662','R9ZX202WPTM','6385176219',''),
('guindy','TRADE MARK','Kaushi Sarkar 2','Redmi 9i','867332055928781','','7338725979',''),
('guindy','TRADE MARK','ABDUL RASIM','Redmi 9i','867332055703929','','8939840458',''),
('guindy','TRADE MARK','Aman','Redmi 9i','8610380586376363','MN6LQ8BADUXWDICU','7823940506',''),
('guindy','TRADE MARK','SRIHARISH S','Samsung m02s','351743853678811','R9ZR210P4LT','9384053924',''),
('guindy','TRADE MARK','ASWATHY','Galaxy m02s','351743853863769','R9ZR211PZZR','6384404250',''),
('guindy','TRADE MARK','Vikram C','Redmi 9i','867332058804963','','7305992008',''),
('guindy','HR TEAM','Smrithy','Samsung A05','350835033256129','R9ZX2030WKX','8925518987',''),
('guindy','HR TEAM','Lavanya R','Redmi 9i','861919059990068','YLRCHIUC69AQMFLV','8939835922',''),
('guindy','HR TEAM','Adrian Keith Rodrigues','Redmi 9i','867332059514967','','7824864923',''),
('guindy','HR TEAM','RUPAVATHI KUMARI','Samsung M04','352968441753938','','8925915481',''),
('guindy','HR TEAM','Raja Abraham','Samsung M04','352968441928860','R9ZW10AKVGX','8939850411',''),
('guindy','HR TEAM','PRAVEEN RAJ','Redmi 9A','861625059653354','NFZD5PNVZXNFBE4L','8939835930',''),
('guindy','HR TEAM','uma','Redmi 9A','869170050376053','Q49TTOE69PB6LNBQ','7824864923',''),
('guindy','NEW GM','NAGIRIMADUGU VASANTHI','Redmi 9i','863857055699713','EUMJPNVCQGRODYF6','7845102372',''),
('guindy','NEW GM','VENKAT BHARADWAJ G','Redmi 9i','861919058386722','DEPRE6NJJNHQHAKN','9384053921',''),
('guindy','NEW GM','Rajesh Babu','Galaxy M04','352968441293786','R9ZW1059R2B','6385176219',''),
('guindy','NEW GM','Lawrance','Redmi 9i','863857055699713','EUMJPNVCQGRODYF6','9360137723','')
on conflict do nothing;
