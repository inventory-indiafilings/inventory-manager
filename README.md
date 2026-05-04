# 📱 Mobile & SIM Inventory Manager — Supabase Edition
### IndiaFilings Pvt Ltd

All data (devices, branches, users, activity logs) is now stored in **Supabase** instead of localStorage.  
This means data persists across browsers and devices — anyone with login access sees the same live data.

---

## 🗂️ Project Structure

```
inventory-manager/
├── index.html              # HTML shell
├── supabase_setup.sql      # ← Run this FIRST in Supabase SQL Editor
├── css/
│   └── styles.css
└── js/
    ├── supabase.js         # ← Paste your URL + key here
    ├── permissions.js      # Role permission system
    ├── auth.js             # Login, users, activity log (now uses Supabase)
    ├── data.js             # Branches, devices, modals (now uses Supabase)
    ├── canvas.js           # Animated background
    ├── render.js           # Dashboard popups, toast, export
    └── app.js              # App flow (enter/back)
```

---

## 🚀 Setup: 4 Steps

### Step 1 — Create a Supabase project
1. Go to [supabase.com](https://supabase.com) → **New project**
2. Choose a name, set a database password, pick a region close to India (e.g. Singapore)
3. Wait ~2 minutes for it to provision

### Step 2 — Run the SQL setup
1. In your Supabase dashboard → **SQL Editor** → **New query**
2. Open `supabase_setup.sql` from this project
3. Paste the entire contents → click **Run**
4. This creates all 4 tables + seeds 95 Guindy devices + 3 default users

### Step 3 — Add your credentials to `js/supabase.js`
1. In Supabase → **Settings** → **API**
2. Copy **Project URL** and **anon / public key**
3. Open `js/supabase.js` and paste them:

```js
const SUPABASE_URL = 'https://xxxxxxxxxxxx.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
```

### Step 4 — Open the app
Use a local server (not `file://`):

```bash
cd inventory-manager
python3 -m http.server 8080
# Open http://localhost:8080
```

Or deploy to **GitHub Pages** — works perfectly since it's fully static.

---

## 🔐 Default Login Credentials

| Username     | Password      | Role             |
|-------------|---------------|------------------|
| `admin`     | `admin123`    | Administrator    |
| `manager`   | `manager@123` | Branch Manager   |
| `supervisor`| `super@123`   | Supervisor       |

> ⚠️ Change passwords immediately after first login — they are stored in plain text in this version.

---

## 💾 Supabase Tables

| Table          | What it stores                              |
|----------------|---------------------------------------------|
| `branches`     | Branch name, id, teams array (jsonb)        |
| `devices`      | All device records linked to a branch       |
| `app_users`    | Login credentials and roles                 |
| `activity_log` | Full audit trail (cross-device)             |

---

## ✅ What changed from the localStorage version

| Feature              | Before (localStorage) | After (Supabase)         |
|----------------------|----------------------|--------------------------|
| Data storage         | Browser only         | Cloud database           |
| Multi-device access  | ✗ No                 | ✓ Yes — shared live data |
| Data survives clear  | ✗ No                 | ✓ Yes                    |
| Activity log shared  | ✗ No                 | ✓ Yes                    |
| Add/Edit/Delete      | Sync, local          | Async, persisted to DB   |

