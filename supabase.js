/* ─── SUPABASE CONFIG ─── */
/* 
  STEP 1: Replace the two values below with your real Supabase project credentials.
  Get them from: https://supabase.com → your project → Settings → API
*/
const SUPABASE_URL  = 'https://ofwfgrinppiatxpkckgc.supabase.co';   // ← paste your Project URL
const SUPABASE_KEY  = 'sb_publishable_hjoipvYNMfH3Y48KlvGgRA_4cd4M_gU';  // ← paste your anon/public key

/* Do not edit below this line */
const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
