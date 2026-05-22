
const STORAGE_KEY = 'elevateClientOS_v7';

// Supabase backend sync configuration.
// Fill these values with your Supabase project details to enable remote persistence.
const SUPABASE_URL = 'https://hhsxqdwtdrmpnjutevfq.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhoc3hxZHd0ZHJtcG5qdXRldmZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk0NTkwNTksImV4cCI6MjA5NTAzNTA1OX0.8HT7gwGBi485zjNtWUfJHtEv2715-K4QQraDyIrW2vo';
const SUPABASE_TABLE = 'tracker_state';
const SUPABASE_STATE_ID = 1;
const supabaseLib = typeof supabase !== 'undefined' ? supabase : (typeof Supabase !== 'undefined' ? Supabase : null);
const supabaseEnabled = SUPABASE_URL && SUPABASE_ANON_KEY && supabaseLib;
const supabaseClient = supabaseEnabled ? supabaseLib.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;


const CLIENT_COLORS = {
  'time-is-wealth-usa': { bg: '#FFF7E6', accent: '#B45309', initial: '#FFE4A8' },
  'same-24-hours': { bg: '#E6F4FF', accent: '#1D4ED8', initial: '#BFDBFE' },
  'dos-santos': { bg: '#FFEEF0', accent: '#BE185D', initial: '#FBCFE8' },
  'holy-spirit-co': { bg: '#F3EBFF', accent: '#6D28D9', initial: '#DDD6FE' },
  'art-shordy': { bg: '#FFF0E6', accent: '#C2410C', initial: '#FED7AA' },
  'forever-situated': { bg: '#EBFAEF', accent: '#047857', initial: '#A7F3D0' },
  'umbra-rare': { bg: '#EBF1FA', accent: '#374151', initial: '#CBD5E1' },
  'outflow-clothing': { bg: '#FFF4F0', accent: '#9F1239', initial: '#FECDD3' }
};

const DEFAULT_CLIENTS = [
  { id: 'time-is-wealth-usa', name: 'Time Is Wealth USA', archived: false, status: 'Active', service: 'META', contact: 'Luis Garcia', email: 'luis@timeiswealth.co', channel: 'WhatsApp', profitMargin: 60, feeOnRevenue: 5, feeOnProfit: 0, billingDay: 1, targetRevenue: 0, targetRoas: 3.5, nextDropDate: '', nextDropName: '', nextDropTime: '', roadmap: [], profileNote: '', notes: '', logo: null, agreementPdf: null, agreementName: null },
  { id: 'same-24-hours', name: 'Same 24 Hours', archived: false, status: 'Active', service: 'SMS', contact: 'Tykwon Wade', email: 'same24hoursapparel@gmail.com', channel: 'WhatsApp', profitMargin: 60, feeOnRevenue: 10, feeOnProfit: 0, billingDay: 1, targetRevenue: 0, targetRoas: 0, nextDropDate: '', nextDropName: '', nextDropTime: '', roadmap: [], profileNote: 'SMS-only client. 10% of Postscript-attributed revenue only. No Meta tracking, no Shopify cut.', notes: '', logo: null, agreementPdf: null, agreementName: null },
  { id: 'dos-santos', name: 'Dos Santos Collective', archived: false, status: 'Active', service: 'META', contact: 'Louis Dos Santos', email: 'Dossantoscollective@gmail.com', channel: 'WhatsApp', profitMargin: 60, feeOnRevenue: 10, feeOnProfit: 0, billingDay: 1, targetRevenue: 0, targetRoas: 3.5, nextDropDate: '', nextDropName: '', nextDropTime: '', roadmap: [], profileNote: '', notes: '', logo: null, agreementPdf: null, agreementName: null },
  { id: 'holy-spirit-co', name: 'Holy Spirit Co', archived: false, status: 'Active', service: 'SMS', contact: 'Christian Graves', email: 'hspiritclothing@gmail.com', channel: 'WhatsApp', profitMargin: 60, feeOnRevenue: 10, feeOnProfit: 0, billingDay: 1, targetRevenue: 0, targetRoas: 0, nextDropDate: '', nextDropName: '', nextDropTime: '', roadmap: [], profileNote: '', notes: '', logo: null, agreementPdf: null, agreementName: null },
  { id: 'art-shordy', name: 'Art Shordy', archived: false, status: 'Active', service: 'META', contact: 'Tievin Walker', email: 'shordy@artshordy.com', channel: 'WhatsApp', profitMargin: 60, feeOnRevenue: 10, feeOnProfit: 0, billingDay: 1, targetRevenue: 0, targetRoas: 3.5, nextDropDate: '', nextDropName: '', nextDropTime: '', roadmap: [], profileNote: '', notes: '', logo: null, agreementPdf: null, agreementName: null },
  { id: 'forever-situated', name: 'Forever Situated', archived: false, status: 'Active', service: 'META', contact: 'Jahlil', email: 'foreversituated60@gmail.com', channel: 'WhatsApp', profitMargin: 60, feeOnRevenue: 10, feeOnProfit: 0, billingDay: 1, targetRevenue: 0, targetRoas: 3.5, nextDropDate: '', nextDropName: '', nextDropTime: '', roadmap: [], profileNote: '', notes: '', logo: null, agreementPdf: null, agreementName: null },
  { id: 'umbra-rare', name: 'Umbra Rare', archived: false, status: 'Active', service: 'META', contact: 'Alberto Flores', email: 'umbrareclothing@gmail.com', channel: 'WhatsApp', profitMargin: 60, feeOnRevenue: 10, feeOnProfit: 0, billingDay: 1, targetRevenue: 0, targetRoas: 3.5, nextDropDate: '', nextDropName: '', nextDropTime: '', roadmap: [], profileNote: '', notes: '', logo: null, agreementPdf: null, agreementName: null },
  { id: 'outflow-clothing', name: 'Outflow Clothing', archived: false, status: 'Active', service: 'META', contact: 'Brady Lemon', email: 'outflowandclothing@gmail.com', channel: 'WhatsApp', profitMargin: 60, feeOnRevenue: 10, feeOnProfit: 0, billingDay: 1, targetRevenue: 0, targetRoas: 3.5, nextDropDate: '', nextDropName: '', nextDropTime: '', roadmap: [], profileNote: '', notes: '', logo: null, agreementPdf: null, agreementName: null }
];

const DEFAULT_SOP_CATEGORIES = [
  { id: 'onboarding', name: 'Onboarding', emoji: '📥', bg: '#EEEDFE', accent: '#3C3489', initial: '#CECBF6' },
  { id: 'client-calls', name: 'Client Calls', emoji: '📞', bg: '#E6F1FB', accent: '#0C447C', initial: '#B5D4F4' },
  { id: 'drop-days', name: 'Drop Days', emoji: '🚀', bg: '#FAECE7', accent: '#712B13', initial: '#F5C4B3' },
  { id: 'client-reads', name: 'Client Reads', emoji: '🧠', bg: '#EAF3DE', accent: '#27500A', initial: '#C0DD97' }
];

const DEFAULT_SOPS = [
  {
    id: 'sop_new_client', title: 'New client setup', categoryId: 'onboarding', expanded: false, createdAt: Date.now(),
    steps: [
      { id: 's1', text: 'Send welcome email within 24 hours of signed contract', checked: false, template: "Hey [name],\n\nStoked to have you on the Elevate Media roster. I'm Orlando, COO. Quick rundown of next steps:\n\n1. I'll drop a Dropbox folder for our shared assets\n2. We lock in a 30-min kickoff call within the week\n3. By call time, you'll get an intake sheet to fill out\n\nReply with your best email for the Dropbox invite and 3 time slots that work this week. Let's get to it.\n\nOrlando" },
      { id: 's2', text: 'Create Dropbox folder named after the brand', checked: false },
      { id: 's3', text: 'Add client to ClickUp Active Roster board', checked: false },
      { id: 's4', text: 'Update CLAUDE.md with the new client in the Active Clients list', checked: false },
      { id: 's5', text: 'Create Context and Call Recap subfolders inside the client folder', checked: false },
      { id: 's6', text: 'Schedule kickoff call (Calendly link or WhatsApp it)', checked: false },
      { id: 's7', text: 'Send confirmation message after call is booked', checked: false, template: "Locked in. Kickoff call set for [day] at [time] EST. Link in your inbox.\n\nBefore the call:\n- Fill out the intake sheet I sent\n- Send over any existing creative, brand guides, or analytics access\n\nTalk soon." },
      { id: 's8', text: 'Review intake form 24 hours before call so you walk in prepped', checked: false }
    ]
  },
  {
    id: 'sop_discovery_call', title: 'Discovery call agenda', categoryId: 'client-calls', expanded: false, createdAt: Date.now() + 1,
    steps: [
      { id: 's1', text: 'Pre-call prep: 5 minutes researching their Instagram, website, last 3 drops', checked: false },
      { id: 's2', text: 'Open with rapport. Where they at, how their week is going. Keep it human.', checked: false },
      { id: 's3', text: 'Hard numbers: ask for current AOV, monthly revenue, profit margin, biggest expense', checked: false },
      { id: 's4', text: 'Identify the biggest 90-day problem. Could be revenue, retention, creative, ops. Pick the one.', checked: false },
      { id: 's5', text: 'Walk through the percentage model. We only get paid when they get paid. Match risk on both sides.', checked: false },
      { id: 's6', text: 'Lock cadence and comms channel. Weekly WhatsApp check-in or biweekly Zoom. Their pick.', checked: false },
      { id: 's7', text: 'Send recap message within 2 hours of call ending', checked: false, template: "Hey [name],\n\nStoked we got on. Quick recap of what we covered:\n\nPain point: [biggest 90-day problem]\nWhat we're attacking first: [angle]\nNext step from your side: [intake form / pixel access / brand guide]\nNext step from mine: [avatar blueprint / creative brief]\n\nI'll have [deliverable] in your inbox by [day]. Talk soon.\n\nOrlando" }
    ]
  },
  {
    id: 'sop_drop_day', title: 'Drop day timeline', categoryId: 'drop-days', expanded: false, createdAt: Date.now() + 2,
    steps: [
      { id: 's1', text: 'T-7 days: confirm exact drop date and time with client. Lock it in EST.', checked: false },
      { id: 's2', text: 'T-5 days: lock creative and copy. No more changes after this.', checked: false },
      { id: 's3', text: 'T-3 days: final review call with client. Walk through every asset, every message.', checked: false },
      { id: 's4', text: 'T-2 days: schedule SMS blast in Postscript for exact drop time', checked: false, template: "Drop incoming.\n\n[Product] live tomorrow at [time] EST.\n\nLimited run. Set your alarm.\n\nLink locked until launch." },
      { id: 's5', text: 'T-1 day: test SMS flow with internal numbers. Confirm pixel firing.', checked: false },
      { id: 's6', text: 'T-0 launch hour: fire SMS blast at exact drop time', checked: false, template: "It's live.\n\n[Product] available now.\n[link]\n\nLimited drop. Don't sleep." },
      { id: 's7', text: 'T+1 hour: monitor for technical issues. Site speed, checkout flow, pixel.', checked: false },
      { id: 's8', text: 'T+2 days: pull 24-hour and 48-hour performance numbers', checked: false },
      { id: 's9', text: 'T+3 days: send post-launch report', checked: false, template: "Drop recap.\n\nRevenue: [X]\nROAS: [X]\nSMS open rate: [X]\nClick rate: [X]\nKillers: [the angle/creative/segment that performed best]\nLosers: [what to cut next drop]\n\nNext drop prep starts [date]. Talk soon." }
    ]
  }
];

const DEFAULT_NAV_ORDER = ['dashboard', 'clients', 'meta', 'goals', 'feedback', 'sops'];
const NAV_LABELS = {
  dashboard: { icon: '📊', label: 'Dashboard' },
  clients: { icon: '👥', label: 'Clients' },
  meta: { icon: '📣', label: 'Meta Tracking' },
  goals: { icon: '🎯', label: 'Goals' },
  feedback: { icon: '💬', label: 'Feedback' },
  sops: { icon: '📚', label: 'SOPs' }
};

let state = loadState();
let currentPage = state.navOrder[0];
let currentSub = state.currentSub || { clients: 'roster', meta: 'inputs' };
let chartRefs = {};
let pendingLogoTarget = null;
let pendingPdfTarget = null;
let toastTimer = null;
let pendingUndo = null;
let dp = { open: false, selStart: null, selEnd: null, pickingEnd: false, viewYear: null, viewMonth: null };

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const s = JSON.parse(raw);
      s.clients = s.clients || [];
      s.clients.forEach(c => {
        if (c.profileNote === undefined) c.profileNote = '';
        if (c.notes === undefined) c.notes = '';
        if (c.archived === undefined) c.archived = false;
        if (c.agreementPdf === undefined) c.agreementPdf = null;
        if (c.agreementName === undefined) c.agreementName = null;
        if (c.profitMargin === undefined) c.profitMargin = 60;
        if (c.feeOnRevenue === undefined) c.feeOnRevenue = c.cutPercent || 10;
        if (c.feeOnProfit === undefined) c.feeOnProfit = 0;
        if (c.nextDropEndDate === undefined) c.nextDropEndDate = '';
      });
      s.feedback = s.feedback || [];
      s.fbFilter = s.fbFilter || { clientId: '', status: '' };
      s.sops = s.sops || JSON.parse(JSON.stringify(DEFAULT_SOPS));
      s.sopCategories = s.sopCategories || JSON.parse(JSON.stringify(DEFAULT_SOP_CATEGORIES));
      s.sopUi = s.sopUi || { activeFilter: 'all', editMode: false, search: '' };
      s.assets = s.assets || [];
      s.navOrder = s.navOrder || [...DEFAULT_NAV_ORDER];
      s.currentSub = s.currentSub || { clients: 'roster', meta: 'inputs' };
      s.dateRange = s.dateRange || defaultRange();
      s.dashboardWeek = s.dashboardWeek || weekStartISO(new Date());
      return s;
    }
  } catch (e) { console.warn(e); }
  return {
    clients: JSON.parse(JSON.stringify(DEFAULT_CLIENTS)),
    drops: [], weeklyData: {}, feedback: [], fbFilter: { clientId: '', status: '' },
    sops: JSON.parse(JSON.stringify(DEFAULT_SOPS)),
    sopCategories: JSON.parse(JSON.stringify(DEFAULT_SOP_CATEGORIES)),
    sopUi: { activeFilter: 'all', editMode: false, search: '' },
    assets: [],
    navOrder: [...DEFAULT_NAV_ORDER],
    currentSub: { clients: 'roster', meta: 'inputs' },
    currentWeek: weekStartISO(new Date()),
    dashboardWeek: weekStartISO(new Date()),
    sortBy: 'cut', showBillingDetails: false, companyLogo: null,
    dateRange: defaultRange()
  };
}
function saveStateLocal() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) { console.warn(e); } }
function saveState() {
  saveStateLocal();
  if (supabaseEnabled) {
    saveStateRemote().catch(err => console.warn('Supabase save failed', err));
  }
}

async function loadStateRemote() {
  if (!supabaseClient) return null;
  try {
    const { data, error } = await supabaseClient
      .from(SUPABASE_TABLE)
      .select('state')
      .eq('id', SUPABASE_STATE_ID)
      .maybeSingle();
    if (error) {
      console.warn('Supabase load error', error);
      return null;
    }
    return data?.state || null;
  } catch (err) {
    console.warn('Supabase load failed', err);
    return null;
  }
}

async function saveStateRemote() {
  if (!supabaseClient) return;
  try {
    const { error } = await supabaseClient
      .from(SUPABASE_TABLE)
      .upsert({ id: SUPABASE_STATE_ID, state }, { onConflict: 'id' });
    if (error) {
      console.warn('Supabase save error', error);
    }
  } catch (err) {
    console.warn('Supabase save failed', err);
  }
}

async function refreshStateOnFocus() {
  if (!supabaseEnabled) return;
  try {
    const remoteState = await loadStateRemote();
    if (!remoteState) return;
    if (JSON.stringify(remoteState) !== JSON.stringify(state)) {
      state = remoteState;
      currentPage = state.navOrder[0] || currentPage;
      currentSub = state.currentSub || { clients: 'roster', meta: 'inputs' };
      saveStateLocal();
      showPage();
    }
  } catch (err) {
    console.warn('Supabase focus refresh failed', err);
  }
}

// Helpers
function weekStartISO(d) { const dt = new Date(d); const day = dt.getDay(); const diff = dt.getDate() - day + (day === 0 ? -6 : 1); const monday = new Date(dt.setDate(diff)); monday.setHours(0, 0, 0, 0); return monday.toISOString().split('T')[0]; }
function addDays(iso, n) { const d = new Date(iso); d.setDate(d.getDate() + n); return d.toISOString().split('T')[0]; }
function todayISO() { return new Date().toISOString().split('T')[0]; }
function daysBetween(a, b) { return Math.round((new Date(b) - new Date(a)) / 86400000); }
function defaultRange() { return { start: addDays(todayISO(), -6), end: todayISO(), preset: '7d' }; }
function fmt(n) { if (n === null || n === undefined || isNaN(n)) return '—'; return Number(n).toLocaleString('en-US'); }
function fmtMoney(n) { if (n === null || n === undefined || isNaN(n)) return '—'; return '$' + Number(n).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 }); }
function fmtRoas(n) { if (!n || isNaN(n)) return '—'; return Number(n).toFixed(2) + 'x'; }
function fmtPct(n) { if (n === null || n === undefined || isNaN(n)) return '—'; return Number(n).toFixed(1) + '%'; }
function fmtDate(iso) { if (!iso) return '—'; const d = new Date(iso + 'T00:00:00'); return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }); }
function fmtDateShort(iso) { if (!iso) return '—'; const d = new Date(iso + 'T00:00:00'); return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }); }
function fmtTime12(t) { if (!t) return ''; const [h, m] = t.split(':').map(Number); if (isNaN(h)) return ''; const ampm = h >= 12 ? 'PM' : 'AM'; const h12 = h % 12 || 12; return `${h12}:${String(m || 0).padStart(2, '0')} ${ampm} EST`; }
function slugify(s) { return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }
function escAttr(s) { return (s || '').replace(/"/g, '&quot;'); }
function escHtml(s) { return (s || '').replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m])); }
function generateColor(seed) { let hash = 0; for (let i = 0; i < seed.length; i++) hash = ((hash << 5) - hash) + seed.charCodeAt(i); const hue = Math.abs(hash) % 360; return { bg: `hsl(${hue}, 65%, 95%)`, accent: `hsl(${hue}, 55%, 35%)`, initial: `hsl(${hue}, 65%, 82%)` }; }
function clientColor(id) { return CLIENT_COLORS[id] || generateColor(id); }
function clientInitial(name) { return name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase(); }

// Profit calculations
function calcBreakEvenRoas(c) { const margin = (c.profitMargin || 0) / 100; const fee = (c.feeOnRevenue || 0) / 100; const denom = margin - fee; return denom > 0 ? 1 / denom : 0; }
function breakEvenRoas(c) { if (c.customBreakEvenRoas && c.customBreakEvenRoas > 0) return c.customBreakEvenRoas; return calcBreakEvenRoas(c); }
function clientTakeHome(c, spend, revenue) { const margin = (c.profitMargin || 0) / 100; const feeRev = (c.feeOnRevenue || 0) / 100; const feeProfit = (c.feeOnProfit || 0) / 100; const grossProfit = revenue * margin; const profitAfterAds = grossProfit - spend; const ourCut = revenue * feeRev + Math.max(0, profitAfterAds) * feeProfit; return profitAfterAds - ourCut; }
function ourCut(c, spend, revenue) { const margin = (c.profitMargin || 0) / 100; const feeRev = (c.feeOnRevenue || 0) / 100; const feeProfit = (c.feeOnProfit || 0) / 100; const profitAfterAds = revenue * margin - spend; return revenue * feeRev + Math.max(0, profitAfterAds) * feeProfit; }

function rankMetric(c) { const agg = aggregateClient(c.id, state.dateRange.start, state.dateRange.end); if (state.sortBy === 'cut') return ourCut(c, agg.spend, agg.revenue); return agg.revenue || 0; }
function activeClients() { return state.clients.filter(c => !c.archived); }
function archivedClients() { return state.clients.filter(c => c.archived); }
function sortedClients() { return activeClients().sort((a, b) => rankMetric(b) - rankMetric(a)); }
function clientById(id) { return state.clients.find(c => c.id === id); }

function aggregateClient(cid, startISO, endISO) {
  const result = { spend: 0, revenue: 0, launched: 0, optimized: 0, killed: 0, weeks: 0 };
  Object.entries(state.weeklyData).forEach(([key, data]) => {
    const [weekStart, kcid] = key.split('|');
    if (kcid !== cid) return;
    const weekEnd = addDays(weekStart, 6);
    if (weekStart <= endISO && weekEnd >= startISO) {
      result.spend += data.spend || 0;
      result.revenue += data.revenue || 0;
      result.launched += data.launched || data.ads || 0;
      result.optimized += data.optimized || 0;
      result.killed += data.killed || 0;
      result.weeks++;
    }
  });
  return result;
}

function countdownClass(days) {
  if (days < 0 || days <= 3) return 'pill-cd-red';
  if (days <= 7) return 'pill-cd-amber';
  return 'pill-cd-green';
}
function countdownText(days, drop) {
  if (drop && drop.nextDropTime && drop.nextDropDate) {
    const target = new Date(drop.nextDropDate + 'T' + drop.nextDropTime);
    const ms = target - new Date();
    if (ms < 0) { const hr = Math.floor(-ms / 3600000); if (hr < 48) return hr + 'h LATE'; return Math.floor(hr / 24) + ' DAYS LATE'; }
    if (ms < 86400000) { const h = Math.floor(ms / 3600000); const m = Math.floor((ms % 3600000) / 60000); return h + 'h ' + m + 'm LEFT'; }
  }
  if (days < 0) return Math.abs(days) + ' DAYS OVERDUE';
  if (days === 0) return 'DROPS TODAY';
  if (days === 1) return '1 DAY LEFT';
  return days + ' DAYS LEFT';
}

// Toast
function showToast(msg, undoFn) { pendingUndo = undoFn; document.getElementById('toast-msg').textContent = msg; document.getElementById('toast').classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => { document.getElementById('toast').classList.remove('show'); pendingUndo = null; }, 8000); }
document.getElementById('toast-undo').addEventListener('click', () => { if (pendingUndo) pendingUndo(); document.getElementById('toast').classList.remove('show'); pendingUndo = null; clearTimeout(toastTimer); });

// Logos
document.getElementById('brand-logo').addEventListener('click', () => { pendingLogoTarget = 'company'; document.getElementById('upload-company').click(); });
document.getElementById('upload-company').addEventListener('change', (e) => { const f = e.target.files[0]; if (!f) return; const r = new FileReader(); r.onload = () => { state.companyLogo = r.result; saveState(); renderCompanyLogo(); }; r.readAsDataURL(f); });
document.getElementById('upload-client').addEventListener('change', (e) => { const f = e.target.files[0]; if (!f || !pendingLogoTarget) return; const r = new FileReader(); r.onload = () => { const c = clientById(pendingLogoTarget); if (c) { c.logo = r.result; saveState(); renderAll(); } }; r.readAsDataURL(f); });
function renderCompanyLogo() { document.getElementById('brand-logo').innerHTML = state.companyLogo ? `<img src="${state.companyLogo}" alt="logo">` : 'E'; }
function logoHtml(c, size) { const col = clientColor(c.id); const cls = size === 'lg' ? 'lg' : (size === 'sm' ? 'sm' : ''); const inner = c.logo ? `<img src="${c.logo}" alt="">` : clientInitial(c.name); return `<div class="client-logo ${cls}" data-logo-cid="${c.id}" style="background:${col.initial};color:${col.accent}">${inner}</div>`; }
function attachLogoClicks(scope) { scope.querySelectorAll('[data-logo-cid]').forEach(el => el.addEventListener('click', (e) => { e.stopPropagation(); pendingLogoTarget = el.dataset.logoCid; document.getElementById('upload-client').click(); })); }

// PDF
document.getElementById('upload-pdf').addEventListener('change', (e) => { const f = e.target.files[0]; if (!f || !pendingPdfTarget) return; if (f.size > 5 * 1024 * 1024) { alert('PDF too large. Max 5MB.'); return; } const r = new FileReader(); r.onload = () => { const c = clientById(pendingPdfTarget); if (c) { const oldP = c.agreementPdf, oldN = c.agreementName; c.agreementPdf = r.result; c.agreementName = f.name; saveState(); renderAll(); showToast(`Agreement uploaded for ${c.name}`, () => { c.agreementPdf = oldP; c.agreementName = oldN; saveState(); renderAll(); }); } }; r.readAsDataURL(f); });
function uploadAgreement(cid) { pendingPdfTarget = cid; document.getElementById('upload-pdf').value = ''; document.getElementById('upload-pdf').click(); }
function downloadAgreement(cid) { const c = clientById(cid); if (!c || !c.agreementPdf) return; const a = document.createElement('a'); a.href = c.agreementPdf; a.download = c.agreementName || (c.name + '_agreement.pdf'); a.click(); }

// Copy field
function copyFieldHtml(text) { return `<span class="copy-field" data-copy="${escAttr(text)}"><span class="cf-text">${escHtml(text)}</span><span style="font-size:11px;">📋</span></span>`; }
function attachCopyHandlers(scope) { scope.querySelectorAll('.copy-field').forEach(el => el.addEventListener('click', (e) => { e.stopPropagation(); const text = el.dataset.copy; navigator.clipboard.writeText(text).then(() => { el.classList.add('copied'); const orig = el.innerHTML; el.innerHTML = `<span class="cf-text">Copied!</span><span style="font-size:11px;">✓</span>`; setTimeout(() => { el.classList.remove('copied'); el.innerHTML = orig; }, 1200); }).catch(() => { }); })); }

// Modal
function closeModal() { document.getElementById('modal-backdrop').classList.remove('open'); }
document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-backdrop').addEventListener('click', (e) => { if (e.target.id === 'modal-backdrop') closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeModal(); closeDatePicker(); } });
function setModal(title, sub, bodyHtml, footHtml) { document.getElementById('modal-title').textContent = title; document.getElementById('modal-sub').textContent = sub; document.getElementById('modal-body').innerHTML = bodyHtml; const foot = document.getElementById('modal-foot'); if (footHtml) { foot.innerHTML = footHtml; foot.classList.remove('hidden'); } else { foot.classList.add('hidden'); foot.innerHTML = ''; } attachLogoClicks(document.getElementById('modal-body')); attachCopyHandlers(document.getElementById('modal-body')); }
function openModalWith(title, sub, bodyHtml, footHtml) { setModal(title, sub, bodyHtml, footHtml); document.getElementById('modal-backdrop').classList.add('open'); }

// ============ Renameable labels (sidebar + sub-tabs). Double-click to rename.
function labelFor(key, fallback) { return (state.customLabels && state.customLabels[key]) || fallback; }
function setCustomLabel(key, label) {
  state.customLabels = state.customLabels || {};
  if (label && label.trim()) state.customLabels[key] = label.trim();
  else delete state.customLabels[key];
  saveState();
}
function attachLabelEditing(scope) {
  scope.querySelectorAll('[data-sublabel]').forEach(el => {
    if (el.dataset.labelBound) return;
    el.dataset.labelBound = '1';
    el.addEventListener('dblclick', (e) => {
      e.stopPropagation();
      const key = el.dataset.sublabel;
      const current = el.textContent;
      const inp = document.createElement('input');
      inp.value = current;
      inp.className = 'inp';
      inp.style.cssText = 'width: 130px; font-size: 13px; padding: 3px 8px;';
      el.replaceChildren(inp);
      inp.focus();
      inp.select();
      const commit = () => { setCustomLabel(key, inp.value); renderAll(); };
      const cancel = () => { renderAll(); };
      inp.addEventListener('blur', commit);
      inp.addEventListener('keydown', (ke) => { if (ke.key === 'Enter') { ke.preventDefault(); commit(); } if (ke.key === 'Escape') { ke.preventDefault(); cancel(); } });
    });
  });
}

// Init phase 1: render sidebar shell, set up date and orchestration
function renderSidebar() {
  const nav = document.getElementById('sidebar-nav');
  nav.innerHTML = state.navOrder.map(p => {
    const l = NAV_LABELS[p]; const active = p === currentPage;
    const labelText = labelFor('nav.' + p, l.label);
    let badge = '';
    if (p === 'feedback') { const open = state.feedback.filter(f => f.status === 'Open').length; if (open > 0) badge = `<span class="nav-badge">${open}</span>`; }
    return `<div class="nav-item ${active ? 'active' : ''}" draggable="true" data-page="${p}"><span class="nav-handle">⋮⋮</span><span>${l.icon}</span><span data-sublabel="nav.${p}" title="Double-click to rename">${labelText}</span>${badge}</div>`;
  }).join('');
  nav.querySelectorAll('.nav-item').forEach(el => {
    el.addEventListener('click', () => { currentPage = el.dataset.page; showPage(); });
    el.addEventListener('dragstart', (e) => { el.classList.add('dragging'); e.dataTransfer.effectAllowed = 'move'; e.dataTransfer.setData('text/plain', el.dataset.page); });
    el.addEventListener('dragend', () => { el.classList.remove('dragging'); nav.querySelectorAll('.nav-item').forEach(n => n.classList.remove('drag-over')); });
    el.addEventListener('dragover', (e) => { e.preventDefault(); el.classList.add('drag-over'); });
    el.addEventListener('dragleave', () => el.classList.remove('drag-over'));
    el.addEventListener('drop', (e) => { e.preventDefault(); const from = e.dataTransfer.getData('text/plain'); const to = el.dataset.page; if (from === to) return; const order = [...state.navOrder]; const i = order.indexOf(from); const j = order.indexOf(to); order.splice(i, 1); order.splice(j, 0, from); state.navOrder = order; saveState(); renderSidebar(); });
  });
  attachLabelEditing(nav);
}

function showPage() {
  ['dashboard', 'clients', 'meta', 'goals', 'feedback', 'sops'].forEach(p => document.getElementById('page-' + p).classList.toggle('hidden', p !== currentPage));
  renderSidebar();
  renderAll();
}

function renderAll() {
  renderCompanyLogo();
  if (currentPage === 'dashboard') renderDashboard();
  else if (currentPage === 'clients') renderClientsPage();
  else if (currentPage === 'meta') renderMetaPage();
  else if (currentPage === 'goals') renderGoalsPage();
  else if (currentPage === 'feedback') renderFeedback();
  else if (currentPage === 'sops') renderSops();
}

// ============ Date Range Picker
const DP_PRESETS = [
  { group: 'Last', items: [{ label: 'Last 7 days', key: '7d' }, { label: 'Last 30 days', key: '30d' }, { label: 'Last 90 days', key: '90d' }, { label: 'Last 365 days', key: '365d' }] },
  { group: 'Calendar', items: [{ label: 'This week', key: 'this-week' }, { label: 'Last week', key: 'last-week' }, { label: 'This month', key: 'this-month' }, { label: 'Last month', key: 'last-month' }, { label: 'Last quarter', key: 'last-quarter' }, { label: 'Last 12 months', key: 'last-12m' }, { label: 'Last year', key: 'last-year' }] }
];
function applyPreset(key) {
  const today = todayISO(); const now = new Date(); let start, end;
  if (key === '7d') { start = addDays(today, -6); end = today; }
  else if (key === '30d') { start = addDays(today, -29); end = today; }
  else if (key === '90d') { start = addDays(today, -89); end = today; }
  else if (key === '365d') { start = addDays(today, -364); end = today; }
  else if (key === 'this-week') { start = weekStartISO(now); end = addDays(start, 6); }
  else if (key === 'last-week') { start = addDays(weekStartISO(now), -7); end = addDays(start, 6); }
  else if (key === 'this-month') { start = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().split('T')[0]; end = today; }
  else if (key === 'last-month') { start = new Date(now.getFullYear(), now.getMonth() - 1, 1).toISOString().split('T')[0]; end = new Date(now.getFullYear(), now.getMonth(), 0).toISOString().split('T')[0]; }
  else if (key === 'last-quarter') { start = new Date(now.getFullYear(), now.getMonth() - 3, 1).toISOString().split('T')[0]; end = today; }
  else if (key === 'last-12m') { start = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate()).toISOString().split('T')[0]; end = today; }
  else if (key === 'last-year') { start = new Date(now.getFullYear() - 1, 0, 1).toISOString().split('T')[0]; end = new Date(now.getFullYear() - 1, 11, 31).toISOString().split('T')[0]; }
  dp.selStart = start; dp.selEnd = end;
  document.getElementById('dp-start-input').value = fmtDate(start);
  document.getElementById('dp-end-input').value = fmtDate(end);
  renderDpCalendars(); renderDpPresets(key);
}
function presetLabelFromRange() { if (!state.dateRange.preset || state.dateRange.preset === 'custom') return fmtDate(state.dateRange.start) + ' → ' + fmtDate(state.dateRange.end); const found = DP_PRESETS.flatMap(g => g.items).find(p => p.key === state.dateRange.preset); return found ? found.label : 'Custom'; }
function openDatePicker() { dp.open = true; dp.selStart = state.dateRange.start; dp.selEnd = state.dateRange.end; dp.pickingEnd = false; const d = new Date(dp.selStart + 'T00:00:00'); dp.viewYear = d.getFullYear(); dp.viewMonth = d.getMonth(); document.getElementById('dp-start-input').value = fmtDate(dp.selStart); document.getElementById('dp-end-input').value = fmtDate(dp.selEnd); renderDpPresets(state.dateRange.preset); renderDpCalendars(); document.getElementById('dp-overlay').classList.add('open'); document.getElementById('dp-popover').classList.add('open'); }
function closeDatePicker() { dp.open = false; document.getElementById('dp-overlay').classList.remove('open'); document.getElementById('dp-popover').classList.remove('open'); }
function renderDpPresets(activeKey) { const wrap = document.getElementById('dp-presets'); wrap.innerHTML = DP_PRESETS.map(g => `<div class="dp-preset-group-label">${g.group}</div>` + g.items.map(p => `<button class="dp-preset ${activeKey === p.key ? 'active' : ''}" data-preset="${p.key}">${p.label}</button>`).join('')).join(''); wrap.querySelectorAll('[data-preset]').forEach(b => b.addEventListener('click', () => applyPreset(b.dataset.preset))); }
function renderDpCalendars() { renderDpMonth(document.getElementById('dp-cal-left'), dp.viewYear, dp.viewMonth, 'left'); const rd = new Date(dp.viewYear, dp.viewMonth + 1, 1); renderDpMonth(document.getElementById('dp-cal-right'), rd.getFullYear(), rd.getMonth(), 'right'); }
function renderDpMonth(container, year, month, side) {
  const first = new Date(year, month, 1); const days = new Date(year, month + 1, 0).getDate(); const fw = first.getDay(); const today = todayISO();
  let html = `<div class="dp-cal-head">`;
  html += side === 'left' ? `<button class="dp-cal-nav" id="dp-prev">‹</button>` : `<div style="width:30px;"></div>`;
  html += `<span>${first.toLocaleString('en-US', { month: 'long', year: 'numeric' })}</span>`;
  html += side === 'right' ? `<button class="dp-cal-nav" id="dp-next">›</button>` : `<div style="width:30px;"></div>`;
  html += `</div><div class="dp-cal-week">`;
  ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].forEach(d => html += `<div class="dp-weekday">${d}</div>`);
  for (let i = 0; i < fw; i++) html += '<div class="dp-day empty"></div>';
  for (let d = 1; d <= days; d++) {
    const iso = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    const cls = ['dp-day'];
    if (iso > today) cls.push('disabled');
    if (iso === today) cls.push('today');
    if (dp.selStart && dp.selEnd && iso >= dp.selStart && iso <= dp.selEnd) cls.push('in-range');
    if (iso === dp.selStart) cls.push('selected', 'start');
    if (iso === dp.selEnd) cls.push('selected', 'end');
    html += `<div class="${cls.join(' ')}" data-day-iso="${iso}">${d}</div>`;
  }
  html += `</div>`;
  container.innerHTML = html;
  container.querySelectorAll('[data-day-iso]').forEach(el => { if (el.classList.contains('disabled') || el.classList.contains('empty')) return; el.addEventListener('click', () => onDayClick(el.dataset.dayIso)); });
  if (side === 'left') document.getElementById('dp-prev').addEventListener('click', () => { const d = new Date(dp.viewYear, dp.viewMonth - 1, 1); dp.viewYear = d.getFullYear(); dp.viewMonth = d.getMonth(); renderDpCalendars(); });
  if (side === 'right') document.getElementById('dp-next').addEventListener('click', () => { const d = new Date(dp.viewYear, dp.viewMonth + 1, 1); dp.viewYear = d.getFullYear(); dp.viewMonth = d.getMonth(); renderDpCalendars(); });
}
function onDayClick(iso) { if (!dp.pickingEnd) { dp.selStart = iso; dp.selEnd = iso; dp.pickingEnd = true; } else { if (iso < dp.selStart) { dp.selEnd = dp.selStart; dp.selStart = iso; } else { dp.selEnd = iso; } dp.pickingEnd = false; } document.getElementById('dp-start-input').value = fmtDate(dp.selStart); document.getElementById('dp-end-input').value = fmtDate(dp.selEnd); document.querySelectorAll('#dp-presets .dp-preset.active').forEach(el => el.classList.remove('active')); renderDpCalendars(); }
document.getElementById('dp-overlay').addEventListener('click', closeDatePicker);
document.getElementById('dp-cancel').addEventListener('click', closeDatePicker);
document.getElementById('dp-apply').addEventListener('click', () => { if (!dp.selStart || !dp.selEnd) return; const ap = document.querySelector('#dp-presets .dp-preset.active'); state.dateRange = { start: dp.selStart, end: dp.selEnd, preset: ap ? ap.dataset.preset : 'custom' }; saveState(); closeDatePicker(); renderAll(); });

// ============ Placeholder render functions (filled in by remaining chunks)
function renderFeedback() { renderFeedbackImpl(); }
function renderSops() { renderSopsImpl(); }

// ============ Drop Schedule helpers (shared between Dashboard and Clients > Drops)
function scheduleListItemsHtml(opts) {
  opts = opts || {};
  const today = todayISO();
  let list = activeClients().filter(c => c.nextDropDate);
  if (opts.maxDaysAhead) list = list.filter(c => daysBetween(today, c.nextDropDate) <= opts.maxDaysAhead);
  list.sort((a, b) => (a.nextDropDate + (a.nextDropTime || '')).localeCompare(b.nextDropDate + (b.nextDropTime || '')));
  if (list.length === 0) return '<div class="modal-empty" style="padding:24px;">No upcoming drops scheduled. Click + Schedule Drop to add one.</div>';
  return list.map(c => {
    const days = daysBetween(today, c.nextDropDate);
    const d = new Date(c.nextDropDate + 'T00:00:00');
    const endDate = c.nextDropEndDate ? new Date(c.nextDropEndDate + 'T00:00:00') : null;
    const endStr = endDate ? endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : '';
    const endPast = c.nextDropEndDate && c.nextDropEndDate < today;
    const editCol = opts.inlineEdit !== false ? `<div class="sr-edit"><input type="date" class="inp" value="${c.nextDropDate}" data-f="nextDropDate"><input type="time" class="inp" value="${c.nextDropTime || ''}" data-f="nextDropTime"></div>` : '';
    const completeBtn = opts.completeButton !== false ? `<button class="btn btn-sm" data-complete-cid="${c.id}" style="background:#10b981; color:#fff; border:none;">✓ Complete</button>` : '';
    const bg = endPast ? '#fef9c3' : '#ecfdf5';
    const borderL = endPast ? '4px solid #eab308' : '4px solid #10b981';
    return `<div class="schedule-row" style="background:${bg}; border-left:${borderL}; cursor:pointer;" data-drop-cid="${c.id}" title="Click for details">
      <div class="sr-date" style="background:rgba(255,255,255,0.7);">
        <div class="sr-day">${d.getDate()}</div>
        <div class="sr-month">${d.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}</div>
        <div class="sr-time" style="font-size:11px;">${c.nextDropTime ? fmtTime12(c.nextDropTime) : 'NO TIME'}</div>
        ${endStr ? `<div class="sr-time" style="font-size:10px; color:#6b7280;">ends ${endStr}</div>` : ''}
      </div>
      ${logoHtml(c)}
      <div class="sr-info">
        <div class="sr-name">${escHtml(c.name)}</div>
        <div class="sr-detail">${escHtml(c.nextDropName || 'Drop')} · ${c.service}</div>
      </div>
      <div class="sr-countdown">
        <span class="pill ${endPast ? 'pill-cd-amber' : countdownClass(days)}">${endPast ? 'WINDOW CLOSED' : countdownText(days, c)}</span>
        ${endPast ? '<div class="sr-countdown-sub">Hit Complete to bill</div>' : ''}
      </div>
      ${completeBtn}
      ${editCol}
    </div>`;
  }).join('');
}
function attachScheduleHandlers(wrap, opts) {
  opts = opts || {};
  wrap.querySelectorAll('.schedule-row').forEach(row => {
    const cid = row.dataset.dropCid;
    row.addEventListener('click', (e) => { if (e.target.closest('input') || e.target.closest('button') || e.target.closest('.client-logo')) return; openDropDetailModal(cid); });
    if (opts.inlineEdit !== false) {
      row.querySelectorAll('[data-f]').forEach(inp => inp.addEventListener('change', (e) => { e.stopPropagation(); clientById(cid)[inp.dataset.f] = e.target.value; saveState(); renderAll(); }));
    }
  });
  wrap.querySelectorAll('[data-complete-cid]').forEach(b => b.addEventListener('click', (e) => { e.stopPropagation(); openCompleteDropModal(b.dataset.completeCid); }));
  attachLogoClicks(wrap);
}

function openCompleteDropModal(cid) {
  const c = clientById(cid); if (!c || !c.nextDropDate) return;
  const col = clientColor(c.id);
  openModalWith('Complete Drop & Bill', 'Mark this drop as done. We will create an unpaid invoice in the billing cycle.', `
    <div style="background:${col.bg}; padding:14px; border-radius:12px; margin-bottom:14px; display:flex; align-items:center; gap:12px;">
      ${logoHtml(c, 'lg')}
      <div><div style="font-weight:800; font-size:17px;">${escHtml(c.name)}</div><div class="small muted">${escHtml(c.nextDropName || 'Drop')} · ${fmtDate(c.nextDropDate)}</div></div>
    </div>
    <div class="form-grid">
      <div class="full"><label>Final revenue from this drop</label><input type="number" class="inp" id="cd-amount" placeholder="0" autofocus></div>
      <div><label>Pay due</label><input type="date" class="inp" id="cd-paydue"></div>
    </div>
    <div class="small muted" style="margin-top:10px;">Pay due auto-fills from the client's billing day if blank. You can edit the invoice later in the Billing Cycle section.</div>
  `, `<button class="btn btn-ghost" id="cd-cancel">Cancel</button><button class="btn" id="cd-save" style="background:#10b981;">✓ Complete & Bill</button>`);
  document.getElementById('cd-cancel').addEventListener('click', closeModal);
  document.getElementById('cd-save').addEventListener('click', () => {
    const amount = parseFloat(document.getElementById('cd-amount').value) || 0;
    let payDue = document.getElementById('cd-paydue').value;
    if (!payDue) { const n = new Date(c.nextDropDate); n.setMonth(n.getMonth() + 1); n.setDate(c.billingDay || 1); payDue = n.toISOString().split('T')[0]; }
    const snapshot = { date: c.nextDropDate, time: c.nextDropTime, name: c.nextDropName, end: c.nextDropEndDate };
    const inv = { id: 'd_' + Date.now(), clientId: cid, dropDate: c.nextDropDate, dropName: c.nextDropName || 'Drop', products: '', expectedRevenue: amount, payDue, status: 'Unpaid', invoiceType: 'drop' };
    state.drops.push(inv);
    c.nextDropDate = ''; c.nextDropTime = ''; c.nextDropName = ''; c.nextDropEndDate = '';
    saveState(); closeModal(); renderAll();
    showToast(`Drop completed for ${c.name}`, () => { state.drops = state.drops.filter(d => d.id !== inv.id); c.nextDropDate = snapshot.date; c.nextDropTime = snapshot.time; c.nextDropName = snapshot.name; c.nextDropEndDate = snapshot.end; saveState(); renderAll(); });
  });
}

function openScheduleDropModal(preCid) {
  const opts = activeClients().map(c => `<option value="${c.id}" ${preCid === c.id ? 'selected' : ''}>${escHtml(c.name)}</option>`).join('');
  const defaultEnd = addDays(todayISO(), 7);
  openModalWith('Schedule a Drop', 'Set the launch window. Drop flips to the billing cycle when the end date passes or you click Complete.', `
    <div class="form-grid">
      <div><label>Client *</label><select class="sel" id="sd-client"><option value="">Pick a client...</option>${opts}</select></div>
      <div><label>Drop name *</label><input class="inp" id="sd-name" placeholder="e.g. Spring Capsule"></div>
      <div><label>Drop start date *</label><input type="date" class="inp" id="sd-date" value="${todayISO()}"></div>
      <div><label>Drop time (EST)</label><input type="time" class="inp" id="sd-time"></div>
      <div class="full"><label>Drop end date (when window closes)</label><input type="date" class="inp" id="sd-end" value="${defaultEnd}"></div>
    </div>
    <div class="small muted" style="margin-top:10px;">After scheduling, click the drop card to edit details. After the end date passes (or you hit Complete), the client moves into Billing Cycle.</div>
  `, `<button class="btn btn-ghost" id="sd-cancel">Cancel</button><button class="btn" id="sd-save">Schedule</button>`);
  document.getElementById('sd-cancel').addEventListener('click', closeModal);
  document.getElementById('sd-save').addEventListener('click', () => {
    const cid = document.getElementById('sd-client').value;
    const date = document.getElementById('sd-date').value;
    const time = document.getElementById('sd-time').value;
    const name = document.getElementById('sd-name').value.trim();
    const end = document.getElementById('sd-end').value;
    if (!cid || !date || !name) { alert('Need client, date, and drop name.'); return; }
    const c = clientById(cid);
    const old = { date: c.nextDropDate, time: c.nextDropTime, name: c.nextDropName, end: c.nextDropEndDate };
    c.nextDropDate = date; c.nextDropTime = time; c.nextDropName = name; c.nextDropEndDate = end;
    saveState(); closeModal(); renderAll();
    showToast(`${name} scheduled for ${c.name}`, () => { c.nextDropDate = old.date; c.nextDropTime = old.time; c.nextDropName = old.name; c.nextDropEndDate = old.end; saveState(); renderAll(); });
  });
}

function openDropDetailModal(cid) {
  const c = clientById(cid); if (!c) return;
  const col = clientColor(c.id);
  const days = c.nextDropDate ? daysBetween(todayISO(), c.nextDropDate) : 0;
  const cdCls = c.nextDropDate ? countdownClass(days) : 'pill-cd-grey';
  const cdText = c.nextDropDate ? countdownText(days, c) : 'NO DATE SET';
  const be = breakEvenRoas(c);
  const body = `
    <div style="background:${col.bg}; padding:18px; border-radius:14px; margin-bottom:14px; display:flex; align-items:center; gap:16px;">
      ${logoHtml(c, 'lg')}
      <div style="flex:1; min-width:0;">
        <div style="font-weight:800; font-size:20px;">${escHtml(c.name)}</div>
        <div class="small muted" style="margin-top:3px;">${c.service} · ${escHtml(c.contact)} · ${c.feeOnRevenue}% fee on revenue</div>
      </div>
      <div style="text-align:right; flex-shrink:0;">
        <div style="font-weight:800; font-size:18px;">${c.nextDropDate ? fmtDate(c.nextDropDate) : '—'}</div>
        <div class="small muted" style="margin-top:3px;">${c.nextDropTime ? fmtTime12(c.nextDropTime) : 'no time set'}</div>
        <div style="margin-top:6px;"><span class="pill ${cdCls}">${cdText}</span></div>
      </div>
    </div>
    <div class="form-grid">
      <div class="full"><label>Drop name</label><input class="inp" id="dd-name" value="${escAttr(c.nextDropName || '')}"></div>
      <div><label>Drop start date</label><input type="date" class="inp" id="dd-date" value="${c.nextDropDate || ''}"></div>
      <div><label>Drop time (EST)</label><input type="time" class="inp" id="dd-time" value="${c.nextDropTime || ''}"></div>
      <div class="full"><label>Drop end date (window closes)</label><input type="date" class="inp" id="dd-end" value="${c.nextDropEndDate || ''}"></div>
    </div>
    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; margin-top:16px;">
      <div class="card" style="margin:0; background:#f9fafb;"><div class="small muted" style="font-weight:600; text-transform:uppercase; letter-spacing:0.04em;">Profile note</div><div style="font-size:12px; color:#374151; margin-top:6px; line-height:1.5;">${escHtml(c.profileNote || 'No profile note yet.')}</div></div>
      <div class="card" style="margin:0; background:#f9fafb;"><div class="small muted" style="font-weight:600; text-transform:uppercase; letter-spacing:0.04em;">Quick stats</div><div style="font-size:12px; color:#374151; margin-top:6px; line-height:1.7;">Margin: <b>${c.profitMargin}%</b><br>Break-even ROAS: <b>${be > 0 ? fmtRoas(be) : '—'}</b><br>Target ROAS: <b>${c.targetRoas ? fmtRoas(c.targetRoas) : '—'}</b></div></div>
    </div>
  `;
  const foot = c.nextDropDate ? `<button class="btn btn-red" id="dd-cancel-drop">Unschedule</button><div style="flex:1;"></div><button class="btn btn-ghost" id="dd-close">Close</button><button class="btn" id="dd-save">Save</button>` : `<button class="btn btn-ghost" id="dd-close">Close</button><button class="btn" id="dd-save">Save</button>`;
  openModalWith('Drop Details', `Click and edit. ${c.name}.`, body, foot);
  document.getElementById('modal-foot').style.alignItems = 'center';
  document.getElementById('dd-close').addEventListener('click', closeModal);
  document.getElementById('dd-save').addEventListener('click', () => {
    c.nextDropName = document.getElementById('dd-name').value;
    c.nextDropDate = document.getElementById('dd-date').value;
    c.nextDropTime = document.getElementById('dd-time').value;
    c.nextDropEndDate = document.getElementById('dd-end').value;
    saveState(); closeModal(); renderAll();
  });
  const cancelBtn = document.getElementById('dd-cancel-drop');
  if (cancelBtn) cancelBtn.addEventListener('click', () => {
    const old = { date: c.nextDropDate, time: c.nextDropTime, name: c.nextDropName, end: c.nextDropEndDate };
    c.nextDropDate = ''; c.nextDropTime = ''; c.nextDropName = ''; c.nextDropEndDate = '';
    saveState(); closeModal(); renderAll();
    showToast(`Drop unscheduled for ${c.name}`, () => { c.nextDropDate = old.date; c.nextDropTime = old.time; c.nextDropName = old.name; c.nextDropEndDate = old.end; saveState(); renderAll(); });
  });
}

// ============ KPI Breakdown Modal (clickable everywhere)
function kpiRowHtml(c, rightHtml, rowAction) {
  const col = clientColor(c.id);
  return `<div class="modal-row" style="background:${col.bg}; cursor:pointer;" data-row-cid="${c.id}" data-row-action="${rowAction || 'profile'}">${logoHtml(c)}<div class="mr-info"><div class="mr-name" style="text-decoration:underline; text-decoration-color:rgba(0,0,0,0.2); text-underline-offset:3px;">${escHtml(c.name)}</div><div class="mr-sub">${c.service} · ${escHtml(c.contact)}</div></div><div>${rightHtml}</div></div>`;
}
function attachKpiRowClicks(scope) {
  scope.querySelectorAll('[data-row-cid]').forEach(row => {
    row.addEventListener('click', (e) => {
      if (e.target.closest('button') || e.target.closest('input') || e.target.closest('.client-logo')) return;
      const cid = row.dataset.rowCid;
      const action = row.dataset.rowAction;
      closeModal();
      setTimeout(() => { if (action === 'drop') openDropDetailModal(cid); else openProfileModal(cid); }, 120);
    });
  });
}

function openKpiBreakdownModal(kpi) {
  const wk = state.dashboardWeek || weekStartISO(new Date());
  const today = todayISO();
  let title = '', sub = '', rows = '', rowAction = 'profile';

  if (kpi === 'dd-scheduled') {
    title = 'Total Scheduled Drops';
    sub = 'All active clients with a drop date on the calendar. Click any to open.';
    rowAction = 'drop';
    const list = activeClients().filter(c => c.nextDropDate).sort((a, b) => a.nextDropDate.localeCompare(b.nextDropDate));
    if (list.length === 0) rows = '<div class="modal-empty">No drops scheduled.</div>';
    else rows = list.map(c => { const days = daysBetween(today, c.nextDropDate); const right = `<div class="mr-value" style="font-size:13px;">${escHtml(c.nextDropName || 'Drop')}</div><div class="mr-foot"><span class="pill ${countdownClass(days)}">${countdownText(days, c)}</span></div>`; return kpiRowHtml(c, right, 'drop'); }).join('');
  } else if (kpi === 'dd-past') {
    title = 'Drops Past Date';
    sub = 'Scheduled drops whose date has passed. Unschedule or log them to Billing.';
    rowAction = 'drop';
    const list = activeClients().filter(c => c.nextDropDate && c.nextDropDate < today).sort((a, b) => a.nextDropDate.localeCompare(b.nextDropDate));
    if (list.length === 0) rows = '<div class="modal-empty">No drops past their date. Clean schedule. 🎉</div>';
    else rows = list.map(c => { const days = daysBetween(today, c.nextDropDate); const right = `<div class="mr-value" style="font-size:13px;">${escHtml(c.nextDropName || 'Drop')}</div><div class="mr-foot"><span class="pill pill-cd-red">${Math.abs(days)} DAYS PAST</span></div>`; return kpiRowHtml(c, right, 'drop'); }).join('');
  } else if (kpi === 'dd-thisweek') {
    title = 'Drops This Week';
    sub = 'Clients with scheduled drops in the last 3 days or next 7. Click any row to open the drop.';
    rowAction = 'drop';
    const start = addDays(today, -3), end = addDays(today, 7);
    const list = activeClients().filter(c => c.nextDropDate && c.nextDropDate >= start && c.nextDropDate <= end).sort((a, b) => a.nextDropDate.localeCompare(b.nextDropDate));
    if (list.length === 0) rows = '<div class="modal-empty">No drops scheduled in this window.</div>';
    else rows = list.map(c => { const days = daysBetween(today, c.nextDropDate); const right = `<div class="mr-value" style="font-size:13px;">${escHtml(c.nextDropName || 'Drop')}</div><div class="mr-foot"><span class="pill ${countdownClass(days)}">${countdownText(days, c)}</span></div>`; return kpiRowHtml(c, right, 'drop'); }).join('');
  } else if (kpi === 'dash-revenue' || kpi === 'dash-spend' || kpi === 'dash-cut' || kpi === 'dash-takehome') {
    const map = {
      'dash-revenue': { t: 'Revenue This Week', s: 'Clients ranked by revenue for the selected week.', get: (c, w) => w.revenue, f: fmtMoney },
      'dash-spend': { t: 'Spend This Week', s: 'Clients ranked by ad spend for the selected week.', get: (c, w) => w.spend, f: fmtMoney },
      'dash-cut': { t: 'Our Cut This Week', s: 'Clients ranked by what they paid Elevate.', get: (c, w) => ourCut(c, w.spend, w.revenue), f: fmtMoney },
      'dash-takehome': { t: 'Client Take-Home This Week', s: 'Clients ranked by what they kept after spend and fees.', get: (c, w) => clientTakeHome(c, w.spend, w.revenue), f: fmtMoney }
    };
    const m = map[kpi]; title = m.t; sub = m.s;
    const list = activeClients().map(c => ({ c, w: getWeekData(c.id, wk) })).sort((a, b) => m.get(b.c, b.w) - m.get(a.c, a.w));
    if (list.every(x => m.get(x.c, x.w) === 0)) rows = '<div class="modal-empty">No data for this week yet. Log weekly numbers in Meta Tracking → Weekly Inputs.</div>';
    else rows = list.map((x, i) => kpiRowHtml(x.c, `<div class="mr-value">${m.f(m.get(x.c, x.w))}</div><div class="mr-foot">#${i + 1}</div>`, 'profile')).join('');
  } else if (kpi === 'dash-alerts') {
    title = 'Asset Alerts';
    sub = 'CBO assets past day 7 still on minimum budget. Flip min off to let them scale.';
    const alerts = alertedAssets();
    if (alerts.length === 0) rows = '<div class="modal-empty">No alerts. All assets on schedule.</div>';
    else rows = alerts.map(a => { const c = clientById(a.clientId); if (!c) return ''; const col = clientColor(c.id); const days = assetDaysLive(a); return `<div class="modal-row" style="background:${col.bg};">${logoHtml(c)}<div class="mr-info"><div class="mr-name">${escHtml(a.name)}</div><div class="mr-sub">${escHtml(c.name)} · launched ${fmtDateShort(a.launchDate)}</div></div><div><div class="mr-value">${days} days</div><div class="mr-foot"><span class="pill pill-cd-red">FLIP MIN OFF</span></div></div></div>`; }).join('');
  }

  openModalWith(title, sub, rows);
  attachLogoClicks(document.getElementById('modal-body'));
  attachKpiRowClicks(document.getElementById('modal-body'));
}

// ============ Dashboard
function getWeekData(cid, wk) { const k = wk + '|' + cid; return state.weeklyData[k] || { spend: 0, revenue: 0, launched: 0, optimized: 0, killed: 0, notes: '' }; }
function assetDaysLive(a) { return Math.max(0, daysBetween(a.launchDate, todayISO())); }
function alertedAssets() { return state.assets.filter(a => assetDaysLive(a) >= 7 && a.minBudgetOn); }

function renderDashboard() {
  const page = document.getElementById('page-dashboard');
  const wk = state.dashboardWeek;
  let totalSpend = 0, totalRev = 0, totalCut = 0, totalTakeHome = 0;
  activeClients().forEach(c => { const w = getWeekData(c.id, wk); totalSpend += w.spend || 0; totalRev += w.revenue || 0; totalCut += ourCut(c, w.spend || 0, w.revenue || 0); totalTakeHome += clientTakeHome(c, w.spend || 0, w.revenue || 0); });
  const alerts = alertedAssets();
  page.innerHTML = `
    <div class="page-header">
      <div><h1 class="page-title">Dashboard</h1><div class="page-sub">Current week snapshot. Profitability per client. Asset alerts.</div></div>
      <div class="flex-row">
        <div class="small muted">Week of</div>
        <input type="date" id="dash-week-picker" class="inp inp-sm" style="width:150px;" value="${wk}">
        <button class="btn btn-ghost btn-sm" id="dash-week-prev">◀ Prev</button>
        <button class="btn btn-ghost btn-sm" id="dash-week-next">Next ▶</button>
        <button class="btn btn-sm" id="dash-week-this">This Week</button>
      </div>
    </div>
    ${alerts.length ? `<div class="alert-card"><div class="ac-icon">!</div><div class="ac-text"><div class="ac-title">${alerts.length} asset${alerts.length === 1 ? '' : 's'} past day 7 still on minimum budget</div><div class="ac-sub">Flip min off in Meta Tracking → Asset Budgets to let them scale</div></div></div>` : ''}
    <div class="kpis">
      <div class="kpi" data-kpi="dash-revenue"><div class="kpi-head"><span>Total Revenue</span><span class="kpi-icon">↑</span></div><div class="kpi-value">${fmtMoney(totalRev)}</div><div class="kpi-foot">Meta + SMS attributed</div></div>
      <div class="kpi" data-kpi="dash-spend"><div class="kpi-head"><span>Total Spend</span><span class="kpi-icon">$</span></div><div class="kpi-value">${fmtMoney(totalSpend)}</div><div class="kpi-foot">ad spend</div></div>
      <div class="kpi green" data-kpi="dash-cut"><div class="kpi-head"><span>Our Cut</span><span class="kpi-icon">%</span></div><div class="kpi-value">${fmtMoney(totalCut)}</div><div class="kpi-foot">agency revenue</div></div>
      <div class="kpi" data-kpi="dash-takehome"><div class="kpi-head"><span>Client Take-Home</span><span class="kpi-icon">→</span></div><div class="kpi-value">${fmtMoney(totalTakeHome)}</div><div class="kpi-foot">after spend + fees</div></div>
      <div class="kpi ${alerts.length ? 'red' : ''}" data-kpi="dash-alerts"><div class="kpi-head"><span>Asset Alerts</span><span class="kpi-icon">!</span></div><div class="kpi-value">${alerts.length}</div><div class="kpi-foot">past day 7 on min</div></div>
    </div>

    <div class="toolbar">
      <div><h3 style="margin:0;">Upcoming Drops</h3><div class="small muted">Click any drop card for the full Notion-style detail view. All times EST.</div></div>
      <button class="btn" id="btn-schedule-drop">+ Schedule Drop</button>
    </div>
    <div class="card schedule-card" id="dash-schedule-list" style="margin-bottom:18px;"></div>

    <div class="toolbar">
      <div><h3 style="margin:0;">Upcoming Invoices</h3><div class="small muted">Bills due in the next 14 days plus anything overdue. Click any row to open the client profile.</div></div>
    </div>
    <div class="card schedule-card" id="dash-invoices-list" style="margin-bottom:18px;"></div>

    <div class="toolbar"><div><h3 style="margin:0;">Profitability This Week</h3><div class="small muted">Ranked by Our Cut. Green = above break-even.</div></div></div>
    <div class="card" style="padding:0; overflow:hidden;">
      <table class="tbl" id="dash-table">
        <thead><tr><th>Client</th><th>Spend</th><th>Revenue</th><th>ROAS</th><th>Break-Even</th><th>Take-Home</th><th>Status</th></tr></thead>
        <tbody></tbody>
      </table>
    </div>
  `;
  document.getElementById('btn-schedule-drop').addEventListener('click', () => openScheduleDropModal());
  const dsl = document.getElementById('dash-schedule-list');
  dsl.innerHTML = scheduleListItemsHtml({ inlineEdit: false });
  attachScheduleHandlers(dsl, { inlineEdit: false });

  // Upcoming Invoices on dashboard
  const todayD = todayISO();
  const in14 = addDays(todayD, 14);
  const upcomingInvoices = state.drops.filter(d => d.status !== 'Paid' && d.payDue && d.payDue <= in14).sort((a, b) => a.payDue.localeCompare(b.payDue));
  const invWrap = document.getElementById('dash-invoices-list');
  if (upcomingInvoices.length === 0) {
    invWrap.innerHTML = '<div class="modal-empty">No upcoming or overdue invoices. All clear.</div>';
  } else {
    invWrap.innerHTML = upcomingInvoices.map(d => {
      const c = clientById(d.clientId); if (!c) return '';
      const col = clientColor(c.id);
      const days = daysBetween(todayD, d.payDue);
      const isOverdue = days < 0;
      const cdCls = isOverdue ? 'pill-cd-red' : (days <= 3 ? 'pill-cd-red' : (days <= 7 ? 'pill-cd-amber' : 'pill-cd-green'));
      const cdText = isOverdue ? Math.abs(days) + ' DAYS LATE' : (days === 0 ? 'DUE TODAY' : (days === 1 ? 'DUE TOMORROW' : days + ' DAYS LEFT'));
      const cut = (d.expectedRevenue || 0) * (cutFor(c.id) / 100);
      const typePill = d.invoiceType === 'recurring' ? '<span class="pill" style="background:#dbeafe; color:#1d4ed8;">RECURRING</span>' : '<span class="pill" style="background:#fef3c7; color:#b45309;">DROP</span>';
      const d2 = new Date(d.payDue + 'T00:00:00');
      return `<div class="schedule-row" style="background:${col.bg}; cursor:pointer;" data-inv-cid="${c.id}"><div class="sr-date"><div class="sr-day">${d2.getDate()}</div><div class="sr-month">${d2.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}</div><div class="sr-time" style="font-size:11px;">PAY DUE</div></div>${logoHtml(c)}<div class="sr-info"><div class="sr-name">${escHtml(c.name)}</div><div class="sr-detail">${escHtml(d.dropName || 'Invoice')} · ${typePill}</div></div><div class="sr-countdown"><span class="pill ${cdCls}">${cdText}</span><div class="sr-countdown-sub">${fmtMoney(cut)} our cut</div></div></div>`;
    }).join('');
    invWrap.querySelectorAll('[data-inv-cid]').forEach(row => {
      const cid = row.dataset.invCid;
      row.addEventListener('click', () => openProfileModal(cid));
    });
    attachLogoClicks(invWrap);
  }

  page.querySelectorAll('.kpis .kpi[data-kpi]').forEach(k => k.addEventListener('click', () => openKpiBreakdownModal(k.dataset.kpi)));

  document.getElementById('dash-week-picker').addEventListener('change', (e) => { state.dashboardWeek = weekStartISO(e.target.value); saveState(); renderDashboard(); });
  document.getElementById('dash-week-prev').addEventListener('click', () => { state.dashboardWeek = addDays(state.dashboardWeek, -7); saveState(); renderDashboard(); });
  document.getElementById('dash-week-next').addEventListener('click', () => { state.dashboardWeek = addDays(state.dashboardWeek, 7); saveState(); renderDashboard(); });
  document.getElementById('dash-week-this').addEventListener('click', () => { state.dashboardWeek = weekStartISO(new Date()); saveState(); renderDashboard(); });

  const tbody = document.querySelector('#dash-table tbody');
  const rows = activeClients().sort((a, b) => { const ag = getWeekData(a.id, wk); const bg = getWeekData(b.id, wk); return ourCut(b, bg.spend, bg.revenue) - ourCut(a, ag.spend, ag.revenue); });
  tbody.innerHTML = rows.map(c => {
    const col = clientColor(c.id); const w = getWeekData(c.id, wk);
    const roas = w.spend > 0 ? w.revenue / w.spend : 0;
    const be = breakEvenRoas(c);
    const take = clientTakeHome(c, w.spend, w.revenue);
    const profitable = c.service === 'SMS' ? w.revenue > 0 : (be > 0 && roas >= be);
    const pillCls = profitable ? 'pill-profit' : 'pill-loss';
    const pillText = c.service === 'SMS' ? (w.revenue > 0 ? 'EARNING' : 'NO DATA') : (be > 0 ? (profitable ? 'PROFITABLE' : 'BELOW BREAK-EVEN') : 'NO TARGET');
    return `<tr style="background:${col.bg}"><td><div class="name-with-logo">${logoHtml(c)}<button class="client-name-btn" data-profile="${c.id}"><span class="cn-link">${escHtml(c.name)}</span></button></div></td><td>${fmtMoney(w.spend)}</td><td>${fmtMoney(w.revenue)}</td><td>${fmtRoas(roas)}</td><td>${be > 0 ? fmtRoas(be) : '—'}</td><td><b>${fmtMoney(take)}</b></td><td><span class="pill ${pillCls}">${pillText}</span></td></tr>`;
  }).join('');
  attachLogoClicks(tbody);
  tbody.querySelectorAll('[data-profile]').forEach(b => b.addEventListener('click', () => openProfileModal(b.dataset.profile)));
}

// ============ Clients Page (4 sub-tabs: Roster, Drops, Growth, Archive)
function renderClientsPage() {
  const page = document.getElementById('page-clients');
  const sub = currentSub.clients || 'roster';
  page.innerHTML = `
    <div class="page-header"><div><h1 class="page-title">Clients</h1><div class="page-sub">Master roster, drops, growth plans, and archive.</div></div></div>
    <div class="subtabs" data-group="clients">
      <div class="subtab ${sub === 'roster' ? 'active' : ''}" data-sub="roster" data-sublabel="clients.roster">${labelFor('clients.roster', 'Roster')}</div>
      <div class="subtab ${(sub === 'drops' || sub === 'billing') ? 'active' : ''}" data-sub="dropsbilling" data-sublabel="clients.dropsbilling">${labelFor('clients.dropsbilling', 'Drops & Billing')}</div>
      <div class="subtab ${sub === 'archive' ? 'active' : ''}" data-sub="archive" data-sublabel="clients.archive">${labelFor('clients.archive', 'Archive')}</div>
    </div>
    <div id="clients-content"></div>
  `;
  page.querySelectorAll('[data-sub]').forEach(el => el.addEventListener('click', () => { currentSub.clients = el.dataset.sub; state.currentSub = currentSub; saveState(); renderClientsPage(); }));
  attachLabelEditing(page);
  const wrap = document.getElementById('clients-content');
  if (sub === 'roster') renderRosterTab(wrap);
  else if (sub === 'dropsbilling' || sub === 'drops' || sub === 'billing') renderDropsBillingTab(wrap);
  else if (sub === 'archive') renderArchiveTab(wrap);
}

// ============ Goals page (was Growth Plan inside Clients)
function renderGoalsPage() {
  const page = document.getElementById('page-goals');
  page.innerHTML = `
    <div class="page-header"><div><h1 class="page-title">Goals</h1><div class="page-sub">Per-client monthly targets and next scale moves. Where the strategy lives.</div></div></div>
    <div id="goals-grid-wrap"></div>
  `;
  renderGrowthTab(document.getElementById('goals-grid-wrap'));
}

const ROSTER_COLS = [
  { id: 'name', label: 'Client', cls: 'col-name' },
  { id: 'status', label: 'Status', cls: 'col-status' },
  { id: 'service', label: 'Service', cls: 'col-service' },
  { id: 'owner', label: 'Owner', cls: 'col-owner' },
  { id: 'email', label: 'Email', cls: 'col-email' },
  { id: 'feeRev', label: 'Agency Fee %', cls: 'col-feeRev' },
  { id: 'breakEven', label: 'Break-Even ROAS', cls: 'col-breakEven' },
  { id: 'agreement', label: 'Agreement', cls: 'col-agreement' },
  { id: 'actions', label: '', cls: 'col-actions' }
];

function rosterCellHtml(col, c) {
  const be = breakEvenRoas(c);
  switch (col.id) {
    case 'name': return `<div class="name-with-logo">${logoHtml(c)}<button class="client-name-btn" data-profile="${c.id}"><span class="cn-link">${escHtml(c.name)}</span></button></div>`;
    case 'status': return `<select class="sel" data-f="status"><option ${c.status === 'Active' ? 'selected' : ''}>Active</option><option ${c.status === 'Paused' ? 'selected' : ''}>Paused</option><option ${c.status === 'Inactive' ? 'selected' : ''}>Inactive</option></select>`;
    case 'service': return `<select class="sel" data-f="service"><option ${c.service === 'META' ? 'selected' : ''}>META</option><option ${c.service === 'SMS' ? 'selected' : ''}>SMS</option><option ${c.service === 'Both' ? 'selected' : ''}>Both</option></select>`;
    case 'owner': return `<input class="inp" data-f="contact" value="${escAttr(c.contact)}">`;
    case 'email': return copyFieldHtml(c.email);
    case 'feeRev': return `<input class="inp inp-sm" type="number" data-f="feeOnRevenue" value="${c.feeOnRevenue}">`;
    case 'breakEven': { const auto = calcBreakEvenRoas(c); const isCustom = c.customBreakEvenRoas && c.customBreakEvenRoas > 0; return `<div style="display:flex; align-items:center; gap:4px; justify-content:center;"><input class="inp inp-sm" type="number" step="0.01" data-f-be="${c.id}" value="${(c.customBreakEvenRoas || auto).toFixed(2)}" style="width:70px; text-align:center; font-weight:700; ${isCustom ? 'background:#fffbeb; border-color:#fde68a;' : ''}" title="${isCustom ? 'Custom override. Click ↻ to revert.' : 'Calculated from margin and fee. Edit to override.'}">${isCustom ? `<button class="btn btn-ghost btn-sm" data-f-be-reset="${c.id}" title="Reset to calculated" style="padding:2px 6px; font-size:11px;">↻</button>` : ''}</div>`; }
    case 'agreement': return c.agreementPdf ? `<button class="agreement-pdf" data-view-pdf="${c.id}">📄 View</button>` : `<button class="agreement-upload" data-upload-pdf="${c.id}">Upload PDF</button>`;
    case 'actions': return `<div style="display:flex; gap:4px;"><button class="btn btn-amber btn-sm" data-archive="${c.id}" title="Archive">⌧</button><button class="btn btn-red btn-sm" data-del="${c.id}" title="Delete">×</button></div>`;
  }
  return '';
}

function renderRosterTab(wrap) {
  // Migrate column order: remove deprecated columns, append any new ones not in saved order
  const valid = new Set(ROSTER_COLS.map(c => c.id));
  let order = (state.rosterColumnOrder || []).filter(id => valid.has(id));
  ROSTER_COLS.forEach(c => { if (!order.includes(c.id)) order.push(c.id); });
  state.rosterColumnOrder = order;
  const cols = order.map(id => ROSTER_COLS.find(c => c.id === id)).filter(Boolean);
  const activeList = activeClients().filter(c => c.status === 'Active');
  const inactiveList = activeClients().filter(c => c.status !== 'Active');
  const collapsed = state.rosterCollapsed || { active: false, inactive: false };
  state.rosterCollapsed = collapsed;

  const rowHtml = c => { const col = clientColor(c.id); return `<tr data-cid="${c.id}" style="background:${col.bg}">${cols.map(co => `<td class="${co.cls}">${rosterCellHtml(co, c)}</td>`).join('')}</tr>`; };
  const groupHeader = (label, count, key, pillCls) => `<tr class="roster-group-header ${collapsed[key] ? 'collapsed' : ''}" data-group="${key}"><td colspan="${cols.length}"><span class="rgh-chevron">▼</span><span class="rgh-pill ${pillCls}">${label} ${count}</span></td></tr>`;
  const activeRows = collapsed.active ? '' : (activeList.length ? activeList.map(rowHtml).join('') : `<tr><td colspan="${cols.length}" style="text-align:center; color:#6b7280; padding:24px;">No active clients.</td></tr>`);
  const inactiveRows = collapsed.inactive ? '' : (inactiveList.length ? inactiveList.map(rowHtml).join('') : `<tr><td colspan="${cols.length}" style="text-align:center; color:#6b7280; padding:24px;">No inactive clients.</td></tr>`);

  wrap.innerHTML = `
    <div class="toolbar">
      <div><h3 style="margin:0;">Roster</h3><div class="small muted">Inline edit margin and fees. Drag column headers to reorder. Click name for profile.</div></div>
      <button class="btn" id="btn-add-client">+ Add Client</button>
    </div>
    <div class="roster-wrap">
      <table class="roster-tbl" id="roster-table">
        <thead><tr>${cols.map(co => `<th class="${co.cls}" draggable="true" data-colid="${co.id}">${co.label}</th>`).join('')}</tr></thead>
        <tbody>
          ${groupHeader('ACTIVE', activeList.length, 'active', 'active')}
          ${activeRows}
          ${groupHeader('NOT ACTIVE', inactiveList.length, 'inactive', 'inactive')}
          ${inactiveRows}
        </tbody>
      </table>
    </div>
    <div class="card" style="margin-top:14px; background:#fffbeb; border-color:#fde68a;">
      <h3 style="margin:0;">How Break-Even ROAS is calculated</h3>
      <div style="font-size:12px; color:#4b5563; margin-top:6px;">Break-Even ROAS = 1 ÷ (profit margin % − agency fee on revenue %).<br>Example: 60% margin and 5% fee on revenue gives 1 ÷ 0.55 = 1.82x. Hit that ROAS and the client breaks even. Below it, they're losing money on every dollar spent.</div>
    </div>
  `;

  const tbody = document.querySelector('#roster-table tbody');
  attachLogoClicks(tbody); attachCopyHandlers(tbody);
  tbody.querySelectorAll('[data-profile]').forEach(b => b.addEventListener('click', () => openProfileModal(b.dataset.profile)));
  tbody.querySelectorAll('[data-upload-pdf]').forEach(b => b.addEventListener('click', () => uploadAgreement(b.dataset.uploadPdf)));
  tbody.querySelectorAll('[data-view-pdf]').forEach(b => b.addEventListener('click', () => downloadAgreement(b.dataset.viewPdf)));
  tbody.querySelectorAll('[data-archive]').forEach(b => b.addEventListener('click', () => archiveClient(b.dataset.archive)));
  tbody.querySelectorAll('[data-del]').forEach(b => b.addEventListener('click', () => deleteClient(b.dataset.del)));
  tbody.querySelectorAll('tr[data-cid]').forEach(tr => { const cid = tr.dataset.cid; tr.querySelectorAll('[data-f]').forEach(inp => inp.addEventListener('change', () => { const c = clientById(cid); c[inp.dataset.f] = inp.type === 'number' ? parseFloat(inp.value) : inp.value; saveState(); renderClientsPage(); })); });
  tbody.querySelectorAll('[data-f-be]').forEach(inp => inp.addEventListener('change', () => { const c = clientById(inp.dataset.fBe); const v = parseFloat(inp.value); const auto = calcBreakEvenRoas(c); if (!isNaN(v) && v > 0 && Math.abs(v - auto) > 0.005) c.customBreakEvenRoas = v; else delete c.customBreakEvenRoas; saveState(); renderClientsPage(); }));
  tbody.querySelectorAll('[data-f-be-reset]').forEach(b => b.addEventListener('click', () => { const c = clientById(b.dataset.fBeReset); delete c.customBreakEvenRoas; saveState(); renderClientsPage(); }));
  document.getElementById('btn-add-client').addEventListener('click', openAddClientModal);

  // Group collapse toggles
  tbody.querySelectorAll('.roster-group-header').forEach(gh => {
    gh.addEventListener('click', () => { const k = gh.dataset.group; collapsed[k] = !collapsed[k]; state.rosterCollapsed = collapsed; saveState(); renderClientsPage(); });
  });

  // Column drag-to-reorder
  const ths = wrap.querySelectorAll('#roster-table thead th');
  ths.forEach(th => {
    th.addEventListener('dragstart', (e) => { th.classList.add('dragging'); e.dataTransfer.effectAllowed = 'move'; e.dataTransfer.setData('text/plain', th.dataset.colid); });
    th.addEventListener('dragend', () => { th.classList.remove('dragging'); ths.forEach(x => x.classList.remove('drag-over')); });
    th.addEventListener('dragover', (e) => { e.preventDefault(); th.classList.add('drag-over'); });
    th.addEventListener('dragleave', () => th.classList.remove('drag-over'));
    th.addEventListener('drop', (e) => {
      e.preventDefault();
      const from = e.dataTransfer.getData('text/plain'); const to = th.dataset.colid;
      if (from === to) return;
      const ord = [...state.rosterColumnOrder]; const i = ord.indexOf(from); const j = ord.indexOf(to);
      ord.splice(i, 1); ord.splice(j, 0, from);
      state.rosterColumnOrder = ord; saveState(); renderClientsPage();
    });
  });
}

function openProfileModal(cid) {
  const c = clientById(cid); if (!c) return;
  const col = clientColor(c.id);
  const be = breakEvenRoas(c);
  const agreementBlock = c.agreementPdf ? `<button class="agreement-pdf" id="profile-pdf-view">📄 ${escHtml(c.agreementName || 'Agreement.pdf')}</button>` : '<span class="muted small">No PDF uploaded</span>';
  const dropDays = c.nextDropDate ? daysBetween(todayISO(), c.nextDropDate) : null;
  const dropBlock = c.nextDropDate
    ? `<div class="schedule-row" style="background:${col.bg}; cursor:pointer; border-radius:10px; margin:0; padding:10px 12px;" id="profile-drop-row"><div class="sr-date" style="width:80px; padding:6px 8px;"><div class="sr-day" style="font-size:16px;">${new Date(c.nextDropDate + 'T00:00:00').getDate()}</div><div class="sr-month">${new Date(c.nextDropDate + 'T00:00:00').toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}</div><div class="sr-time" style="font-size:11px;">${c.nextDropTime ? fmtTime12(c.nextDropTime) : 'no time'}</div></div><div style="flex:1;"><div style="font-weight:700; font-size:14px;">${escHtml(c.nextDropName || 'Drop')}</div><div class="small muted" style="margin-top:2px;">Click to edit drop details</div></div><span class="pill ${countdownClass(dropDays)}">${countdownText(dropDays, c)}</span></div>`
    : `<button class="agreement-upload" id="profile-schedule-drop" style="width:100%; padding:10px;">+ Schedule a drop</button>`;
  const body = `<div style="display:flex; align-items:center; gap:14px; margin-bottom:14px; padding:14px; border-radius:12px; background:${col.bg};">${logoHtml(c, 'lg')}<div><div style="font-weight:800; font-size:20px;">${escHtml(c.name)}</div><div class="small muted">${c.service} · ${c.profitMargin}% margin · ${c.feeOnRevenue}% fee/rev · Break-even ${be > 0 ? fmtRoas(be) : '—'}</div></div></div>
    <div style="margin-bottom:14px;">
      <div class="small muted" style="font-weight:600; text-transform:uppercase; letter-spacing:0.04em; margin-bottom:6px;">Next drop</div>
      ${dropBlock}
    </div>
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:14px;">
      <div><div class="small muted">Owner</div><div><b>${escHtml(c.contact)}</b></div></div>
      <div><div class="small muted">Email</div>${copyFieldHtml(c.email)}</div>
      <div style="grid-column:1/-1;"><div class="small muted">Agreement PDF</div>${agreementBlock}</div>
    </div>
    <div class="card" style="margin:0 0 14px; background:#fffbeb; border-color:#fde68a;">
      <h3 style="margin:0 0 4px; font-size:13px;">Profit math (hidden from roster)</h3>
      <div class="small muted" style="margin-bottom:8px;">These power the Break-Even ROAS calc. Edit here, see the result everywhere.</div>
      <div class="form-grid">
        <div><label>Profit Margin %</label><input class="inp" type="number" id="pm-margin" value="${c.profitMargin}"></div>
        <div><label>Fee on Profit % (rarely used)</label><input class="inp" type="number" id="pm-feeprofit" value="${c.feeOnProfit}"></div>
      </div>
    </div>
    <div style="margin-bottom:14px;"><div class="small muted" style="font-weight:600; text-transform:uppercase; letter-spacing:0.04em; margin-bottom:6px;">Profile Note</div><textarea class="inp" id="profile-note-input" style="min-height:70px;">${escHtml(c.profileNote || '')}</textarea></div>
    <div><div class="small muted" style="font-weight:600; text-transform:uppercase; letter-spacing:0.04em; margin-bottom:6px;">General Notes</div><textarea class="inp" id="profile-notes-input" style="min-height:100px;">${escHtml(c.notes || '')}</textarea></div>`;
  openModalWith('Client Profile', 'Quick reference card. Click the drop card to edit drop details.', body, `<button class="btn btn-ghost" id="profile-cancel">Close</button><button class="btn" id="profile-save">Save</button>`);
  document.getElementById('profile-cancel').addEventListener('click', closeModal);
  document.getElementById('profile-save').addEventListener('click', () => {
    c.profileNote = document.getElementById('profile-note-input').value;
    c.notes = document.getElementById('profile-notes-input').value;
    const pm = parseFloat(document.getElementById('pm-margin').value); if (!isNaN(pm)) c.profitMargin = pm;
    const fp = parseFloat(document.getElementById('pm-feeprofit').value); if (!isNaN(fp)) c.feeOnProfit = fp;
    saveState(); closeModal(); renderAll();
  });
  if (c.agreementPdf) document.getElementById('profile-pdf-view').addEventListener('click', () => downloadAgreement(c.id));
  const dropRow = document.getElementById('profile-drop-row');
  if (dropRow) dropRow.addEventListener('click', () => { closeModal(); setTimeout(() => openDropDetailModal(c.id), 100); });
  const schedBtn = document.getElementById('profile-schedule-drop');
  if (schedBtn) schedBtn.addEventListener('click', () => { closeModal(); setTimeout(() => openScheduleDropModal(c.id), 100); });
}

function openAddClientModal() {
  const body = `<div class="form-grid">
    <div class="full"><label>Client name *</label><input class="inp" id="nc-name"></div>
    <div><label>Brand owner *</label><input class="inp" id="nc-contact"></div>
    <div><label>Email *</label><input class="inp" id="nc-email"></div>
    <div><label>Service</label><select class="sel" id="nc-service"><option>META</option><option>SMS</option><option>Both</option></select></div>
    <div><label>Status</label><select class="sel" id="nc-status"><option>Active</option><option>Paused</option><option>Inactive</option></select></div>
    <div><label>Profit Margin %</label><input class="inp" id="nc-margin" type="number" value="60"></div>
    <div><label>Fee on Revenue %</label><input class="inp" id="nc-fee-rev" type="number" value="10"></div>
    <div><label>Fee on Profit %</label><input class="inp" id="nc-fee-profit" type="number" value="0"></div>
    <div><label>Target ROAS</label><input class="inp" id="nc-target-roas" type="number" step="0.1" value="3.5"></div>
    <div class="full"><label>Profile note</label><textarea class="inp" id="nc-note"></textarea></div>
  </div>`;
  openModalWith('Add New Client', 'Fields marked * are required.', body, `<button class="btn btn-ghost" id="nc-cancel">Cancel</button><button class="btn" id="nc-save">Add</button>`);
  document.getElementById('nc-cancel').addEventListener('click', closeModal);
  document.getElementById('nc-save').addEventListener('click', () => {
    const name = document.getElementById('nc-name').value.trim();
    const contact = document.getElementById('nc-contact').value.trim();
    const email = document.getElementById('nc-email').value.trim();
    if (!name || !contact || !email) { alert('Need name, owner, email.'); return; }
    let id = slugify(name); let i = 1; while (state.clients.some(c => c.id === id)) { id = slugify(name) + '-' + (++i); }
    state.clients.push({ id, name, contact, email, archived: false, status: document.getElementById('nc-status').value, service: document.getElementById('nc-service').value, channel: 'WhatsApp', profitMargin: parseFloat(document.getElementById('nc-margin').value) || 60, feeOnRevenue: parseFloat(document.getElementById('nc-fee-rev').value) || 10, feeOnProfit: parseFloat(document.getElementById('nc-fee-profit').value) || 0, billingDay: 1, targetRevenue: 0, targetRoas: parseFloat(document.getElementById('nc-target-roas').value) || 3.5, nextDropDate: '', nextDropName: '', nextDropTime: '', roadmap: [], profileNote: document.getElementById('nc-note').value, notes: '', logo: null, agreementPdf: null, agreementName: null });
    saveState(); closeModal(); renderAll();
    showToast(`${name} added`, () => { state.clients = state.clients.filter(c => c.id !== id); saveState(); renderAll(); });
  });
}

function archiveClient(cid) { const c = clientById(cid); if (!c) return; c.archived = true; saveState(); renderAll(); showToast(`${c.name} archived`, () => { c.archived = false; saveState(); renderAll(); }); }
function restoreClient(cid) { const c = clientById(cid); if (!c) return; c.archived = false; saveState(); renderAll(); showToast(`${c.name} restored`, () => { c.archived = true; saveState(); renderAll(); }); }
function deleteClient(cid) {
  const c = clientById(cid); if (!c) return;
  const snap = { client: JSON.parse(JSON.stringify(c)), drops: state.drops.filter(d => d.clientId === cid), feedback: state.feedback.filter(f => f.clientId === cid), weekly: Object.fromEntries(Object.entries(state.weeklyData).filter(([k]) => k.endsWith('|' + cid))), assets: state.assets.filter(a => a.clientId === cid) };
  state.clients = state.clients.filter(x => x.id !== cid);
  state.drops = state.drops.filter(d => d.clientId !== cid);
  state.feedback = state.feedback.filter(f => f.clientId !== cid);
  state.assets = state.assets.filter(a => a.clientId !== cid);
  Object.keys(state.weeklyData).forEach(k => { if (k.endsWith('|' + cid)) delete state.weeklyData[k]; });
  saveState(); renderAll();
  showToast(`${c.name} deleted`, () => { state.clients.push(snap.client); state.drops.push(...snap.drops); state.feedback.push(...snap.feedback); state.assets.push(...snap.assets); Object.assign(state.weeklyData, snap.weekly); saveState(); renderAll(); });
}

// ============ Drops & Billing (combined, green + yellow sections)
function renderDropsBillingTab(wrap) {
  const today = todayISO(); const in7 = addDays(today, 7);
  const start = addDays(today, -3); const end = addDays(today, 7);
  const dropsThisWeek = activeClients().filter(c => c.nextDropDate && c.nextDropDate >= start && c.nextDropDate <= end).length;
  let overdue = 0, due7 = 0, totalOwed = 0;
  state.drops.forEach(d => {
    if (d.status !== 'Paid' && d.payDue) { if (d.payDue < today) { overdue++; totalOwed += (d.expectedRevenue || 0) * (cutFor(d.clientId) / 100); } else if (d.payDue <= in7) due7++; }
  });
  const monthStartISO = new Date(new Date().setDate(1)).toISOString().split('T')[0];
  const activeThisMonth = activeClients().filter(c => {
    if (c.nextDropDate && c.nextDropDate >= monthStartISO) return true;
    if (state.drops.some(d => d.clientId === c.id && d.dropDate >= monthStartISO)) return true;
    return false;
  }).length;

  wrap.innerHTML = `
    <div class="kpis">
      <div class="kpi ${dropsThisWeek ? 'blue' : ''}" data-kpi="dd-thisweek"><div class="kpi-head"><span>Drops This Week</span><span class="kpi-icon">↓</span></div><div class="kpi-value">${dropsThisWeek}</div></div>
      <div class="kpi ${overdue ? 'red' : ''}" data-kpi="bill-overdue"><div class="kpi-head"><span>Overdue Invoices</span><span class="kpi-icon">!</span></div><div class="kpi-value">${overdue}</div><div class="kpi-foot">${fmtMoney(totalOwed)} outstanding</div></div>
      <div class="kpi ${due7 ? 'amber' : ''}" data-kpi="bill-due7"><div class="kpi-head"><span>Due in 7 Days</span><span class="kpi-icon">$</span></div><div class="kpi-value">${due7}</div></div>
      <div class="kpi" data-kpi="bill-active"><div class="kpi-head"><span>Active Clients This Month</span><span class="kpi-icon">●</span></div><div class="kpi-value">${activeThisMonth}</div><div class="kpi-foot">drops or invoices logged</div></div>
    </div>

    <div class="toolbar">
      <div><h3 style="margin:0; color:#047857;">🟢 Drop Schedule</h3><div class="small muted">Upcoming and active drops. Click Complete to wrap a drop and send it to billing.</div></div>
      <button class="btn" id="btn-schedule-drop-tab" style="background:#10b981;">+ Schedule Drop</button>
    </div>
    <div class="card schedule-card" id="schedule-list" style="border-left:4px solid #10b981;"></div>

    <div class="toolbar" style="margin-top:24px;">
      <div><h3 style="margin:0; color:#b45309;">🟡 In Billing Cycle</h3><div class="small muted">Clients with drops completed, awaiting payment. Click a card to mark Paid or edit the amount.</div></div>
      <div class="flex-row">
        <button class="btn btn-ghost" id="btn-log-drop-invoice">+ Log Drop Invoice</button>
        <button class="btn btn-amber" id="btn-log-recurring" style="background:#fde68a; color:#92400e; border:none;">+ Log Recurring Invoice</button>
      </div>
    </div>
    <div class="card schedule-card" id="billing-list" style="border-left:4px solid #eab308;"></div>

    <div style="margin-top:24px;">
      <button class="btn btn-ghost btn-sm" id="btn-show-history">Show paid history</button>
      <div id="paid-history" class="hidden" style="margin-top:14px;">
        <div class="card" style="padding:0; overflow:hidden;"><table class="tbl"><thead><tr><th>Date</th><th>Client</th><th>Drop / Period</th><th>Amount</th><th>Our Cut</th></tr></thead><tbody id="paid-history-body"></tbody></table></div>
      </div>
    </div>
  `;
  renderScheduleList();
  renderBillingCards();
  renderPaidHistory();
  wrap.querySelectorAll('.kpi[data-kpi]').forEach(k => k.addEventListener('click', () => { const id = k.dataset.kpi; if (id === 'dd-thisweek') openKpiBreakdownModal(id); else openBillingBreakdown(id); }));
  document.getElementById('btn-log-drop-invoice').addEventListener('click', () => openInvoiceModal('drop'));
  document.getElementById('btn-log-recurring').addEventListener('click', () => openInvoiceModal('recurring'));
  document.getElementById('btn-show-history').addEventListener('click', () => { const ph = document.getElementById('paid-history'); ph.classList.toggle('hidden'); document.getElementById('btn-show-history').textContent = ph.classList.contains('hidden') ? 'Show paid history' : 'Hide paid history'; });
}

function renderBillingCards() {
  const today = todayISO();
  const wrap = document.getElementById('billing-list'); if (!wrap) return;
  const unpaid = state.drops.filter(d => d.status !== 'Paid').sort((a, b) => (a.payDue || '').localeCompare(b.payDue || ''));
  if (unpaid.length === 0) { wrap.innerHTML = '<div class="modal-empty" style="padding:24px;">No invoices in the billing cycle. Hit Complete on a drop or use + Log Recurring Invoice.</div>'; return; }
  wrap.innerHTML = unpaid.map(d => {
    const c = clientById(d.clientId); if (!c) return '';
    const days = d.payDue ? daysBetween(today, d.payDue) : null;
    const isOverdue = days !== null && days < 0;
    const cdCls = isOverdue ? 'pill-cd-red' : (days !== null && days <= 3 ? 'pill-cd-red' : (days !== null && days <= 7 ? 'pill-cd-amber' : 'pill-cd-green'));
    const cdText = isOverdue ? Math.abs(days) + ' DAYS LATE' : (days === 0 ? 'DUE TODAY' : (days === 1 ? 'DUE TOMORROW' : (days !== null ? days + ' DAYS LEFT' : 'NO DUE DATE')));
    const cut = (d.expectedRevenue || 0) * (cutFor(c.id) / 100);
    const isRecurring = d.invoiceType === 'recurring';
    const typePill = isRecurring ? '<span class="pill" style="background:#dbeafe; color:#1d4ed8;">RECURRING</span>' : '<span class="pill" style="background:#fef3c7; color:#b45309;">DROP</span>';
    const dueDate = d.payDue ? new Date(d.payDue + 'T00:00:00') : null;
    return `<div class="schedule-row" style="background:#fef9c3; cursor:pointer;" data-invoice-id="${d.id}">
      <div class="sr-date" style="background:rgba(255,255,255,0.7);">
        ${dueDate ? `<div class="sr-day">${dueDate.getDate()}</div><div class="sr-month">${dueDate.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}</div>` : '<div class="sr-day">—</div><div class="sr-month">NO DATE</div>'}
        <div class="sr-time" style="font-size:11px;">PAY DUE</div>
      </div>
      ${logoHtml(c)}
      <div class="sr-info">
        <div class="sr-name">${escHtml(c.name)}</div>
        <div class="sr-detail">${escHtml(d.dropName || 'Invoice')} · ${typePill}</div>
      </div>
      <div class="sr-countdown">
        <div style="font-weight:800; font-size:15px;">${fmtMoney(cut)}</div>
        <div class="sr-countdown-sub">our cut · <span class="pill ${cdCls}">${cdText}</span></div>
      </div>
      <div class="sr-edit" style="gap:4px;">
        <button class="btn btn-green btn-sm" data-mark-paid="${d.id}" style="background:#d1fae5; color:#047857; border:none;">Mark Paid</button>
        <button class="btn btn-red btn-sm" data-del-invoice="${d.id}">×</button>
      </div>
    </div>`;
  }).join('');
  attachLogoClicks(wrap);
  wrap.querySelectorAll('[data-invoice-id]').forEach(row => row.addEventListener('click', (e) => { if (e.target.closest('button')) return; openInvoiceEditModal(row.dataset.invoiceId); }));
  wrap.querySelectorAll('[data-mark-paid]').forEach(b => b.addEventListener('click', (e) => { e.stopPropagation(); const id = b.dataset.markPaid; const d = state.drops.find(x => x.id === id); d.status = 'Paid'; saveState(); renderClientsPage(); showToast('Marked Paid', () => { d.status = 'Unpaid'; saveState(); renderClientsPage(); }); }));
  wrap.querySelectorAll('[data-del-invoice]').forEach(b => b.addEventListener('click', (e) => { e.stopPropagation(); const id = b.dataset.delInvoice; const idx = state.drops.findIndex(x => x.id === id); const snap = state.drops[idx]; state.drops.splice(idx, 1); saveState(); renderClientsPage(); showToast('Invoice deleted', () => { state.drops.splice(idx, 0, snap); saveState(); renderClientsPage(); }); }));
}

function renderPaidHistory() {
  const tbody = document.getElementById('paid-history-body'); if (!tbody) return;
  const paid = state.drops.filter(d => d.status === 'Paid').sort((a, b) => b.dropDate.localeCompare(a.dropDate));
  if (paid.length === 0) { tbody.innerHTML = '<tr><td colspan="5" style="text-align:center; color:#6b7280; padding:18px;">No paid invoices yet.</td></tr>'; return; }
  tbody.innerHTML = paid.map(d => { const c = clientById(d.clientId); const cut = (d.expectedRevenue || 0) * (cutFor(d.clientId) / 100); return `<tr><td>${fmtDate(d.dropDate)}</td><td>${c ? escHtml(c.name) : '—'}</td><td>${escHtml(d.dropName || '—')}</td><td>${fmtMoney(d.expectedRevenue)}</td><td><b>${fmtMoney(cut)}</b></td></tr>`; }).join('');
}

function openInvoiceEditModal(id) {
  const d = state.drops.find(x => x.id === id); if (!d) return;
  const c = clientById(d.clientId); if (!c) return;
  const col = clientColor(c.id);
  openModalWith('Invoice Details', 'Edit amount, date, or mark paid.', `
    <div style="background:${col.bg}; padding:14px; border-radius:12px; margin-bottom:14px; display:flex; align-items:center; gap:12px;">${logoHtml(c, 'lg')}<div><div style="font-weight:800; font-size:17px;">${escHtml(c.name)}</div><div class="small muted">${escHtml(d.dropName || 'Invoice')} · ${d.invoiceType || 'drop'}</div></div></div>
    <div class="form-grid">
      <div class="full"><label>Drop / Period name</label><input class="inp" id="ie-name" value="${escAttr(d.dropName || '')}"></div>
      <div><label>Drop date</label><input type="date" class="inp" id="ie-date" value="${d.dropDate || ''}"></div>
      <div><label>Pay due</label><input type="date" class="inp" id="ie-paydue" value="${d.payDue || ''}"></div>
      <div><label>Amount</label><input type="number" class="inp" id="ie-amount" value="${d.expectedRevenue || 0}"></div>
      <div><label>Status</label><select class="sel" id="ie-status"><option ${d.status === 'Unpaid' ? 'selected' : ''}>Unpaid</option><option ${d.status === 'Paid' ? 'selected' : ''}>Paid</option></select></div>
    </div>
  `, `<button class="btn btn-red" id="ie-del">Delete</button><div style="flex:1;"></div><button class="btn btn-ghost" id="ie-cancel">Cancel</button><button class="btn" id="ie-save">Save</button>`);
  document.getElementById('modal-foot').style.alignItems = 'center';
  document.getElementById('ie-cancel').addEventListener('click', closeModal);
  document.getElementById('ie-save').addEventListener('click', () => {
    d.dropName = document.getElementById('ie-name').value;
    d.dropDate = document.getElementById('ie-date').value;
    d.payDue = document.getElementById('ie-paydue').value;
    d.expectedRevenue = parseFloat(document.getElementById('ie-amount').value) || 0;
    d.status = document.getElementById('ie-status').value;
    saveState(); closeModal(); renderClientsPage();
  });
  document.getElementById('ie-del').addEventListener('click', () => {
    const idx = state.drops.findIndex(x => x.id === id); const snap = state.drops[idx]; state.drops.splice(idx, 1); saveState(); closeModal(); renderClientsPage(); showToast('Invoice deleted', () => { state.drops.splice(idx, 0, snap); saveState(); renderClientsPage(); });
  });
}

function openInvoiceModal(invType) {
  const isDrop = invType === 'drop';
  const opts = activeClients().map(c => `<option value="${c.id}">${escHtml(c.name)}</option>`).join('');
  const body = `<div class="form-grid">
    <div class="full"><label>Client *</label><select class="sel" id="iv-client"><option value="">Pick a client...</option>${opts}</select></div>
    ${isDrop ? `
      <div><label>Drop date *</label><input type="date" class="inp" id="iv-date" value="${todayISO()}"></div>
      <div><label>Drop name *</label><input type="text" class="inp" id="iv-name" placeholder="e.g. Spring Capsule"></div>
      <div class="full"><label>Products</label><input type="text" class="inp" id="iv-products" placeholder="e.g. 5 tees, 2 hoodies"></div>
    ` : `
      <div><label>Billing date *</label><input type="date" class="inp" id="iv-date" value="${todayISO()}"></div>
      <div><label>Period covered</label><input type="text" class="inp" id="iv-name" placeholder="e.g. May 2026 monthly"></div>
    `}
    <div><label>${isDrop ? 'Expected revenue' : 'Amount billed'} *</label><input type="number" class="inp" id="iv-amount" placeholder="0"></div>
    <div><label>Pay due</label><input type="date" class="inp" id="iv-paydue"></div>
  </div><div class="small muted" style="margin-top:10px;">${isDrop ? 'Log a drop after it happens. Our Cut is calculated from the client fee %. Pay due auto-fills from billing day if blank.' : 'For clients with always-on storefronts where there is no specific drop event.'}</div>`;
  const foot = `<button class="btn btn-ghost" id="iv-cancel">Cancel</button><button class="btn" id="iv-save">Log Invoice</button>`;
  openModalWith(isDrop ? 'Log Drop Invoice' : 'Log Recurring Invoice', isDrop ? 'For a specific product drop launch.' : 'For non-drop recurring billing.', body, foot);
  document.getElementById('iv-cancel').addEventListener('click', closeModal);
  document.getElementById('iv-save').addEventListener('click', () => {
    const cid = document.getElementById('iv-client').value;
    const dd = document.getElementById('iv-date').value;
    const name = document.getElementById('iv-name').value;
    const amt = parseFloat(document.getElementById('iv-amount').value) || 0;
    if (!cid || !dd || !amt) { alert('Need client, date, and amount.'); return; }
    let payDue = document.getElementById('iv-paydue').value;
    if (!payDue) { const c = clientById(cid); const n = new Date(dd); n.setMonth(n.getMonth() + 1); n.setDate(c.billingDay || 1); payDue = n.toISOString().split('T')[0]; }
    const newDrop = { id: 'd_' + Date.now(), clientId: cid, dropDate: dd, dropName: name || (isDrop ? 'Drop' : 'Recurring'), products: isDrop ? document.getElementById('iv-products').value : '', expectedRevenue: amt, payDue, status: 'Unpaid', invoiceType: invType };
    state.drops.push(newDrop); saveState(); closeModal(); renderClientsPage();
    showToast(`Invoice logged`, () => { state.drops = state.drops.filter(d => d.id !== newDrop.id); saveState(); renderClientsPage(); });
  });
}

function renderDropsTab(wrap) {
  const today = todayISO();
  const start = addDays(today, -3); const end = addDays(today, 7);
  const dropsThisWeek = activeClients().filter(c => c.nextDropDate && c.nextDropDate >= start && c.nextDropDate <= end).length;
  const totalScheduled = activeClients().filter(c => c.nextDropDate).length;
  const overdueScheduled = activeClients().filter(c => c.nextDropDate && c.nextDropDate < today).length;
  wrap.innerHTML = `
    <div class="kpis">
      <div class="kpi ${dropsThisWeek ? 'blue' : ''}" data-kpi="dd-thisweek"><div class="kpi-head"><span>Drops This Week</span><span class="kpi-icon">↓</span></div><div class="kpi-value">${dropsThisWeek}</div><div class="kpi-foot">click for breakdown</div></div>
      <div class="kpi" data-kpi="dd-scheduled"><div class="kpi-head"><span>Total Scheduled</span><span class="kpi-icon">●</span></div><div class="kpi-value">${totalScheduled}</div><div class="kpi-foot">clients with a drop date</div></div>
      <div class="kpi ${overdueScheduled ? 'amber' : ''}" data-kpi="dd-past"><div class="kpi-head"><span>Past Date</span><span class="kpi-icon">!</span></div><div class="kpi-value">${overdueScheduled}</div><div class="kpi-foot">unschedule or log to Billing</div></div>
    </div>
    <div class="toolbar">
      <div><h3 style="margin:0;">Drop Schedule</h3><div class="small muted">Click any card for the full detail view. Edit date and time inline.</div></div>
      <button class="btn" id="btn-schedule-drop-tab">+ Schedule Drop</button>
    </div>
    <div class="card schedule-card" id="schedule-list"></div>
  `;
  renderScheduleList();
  wrap.querySelectorAll('.kpi[data-kpi]').forEach(k => k.addEventListener('click', () => openKpiBreakdownModal(k.dataset.kpi)));
}
function renderScheduleList() {
  const wrap = document.getElementById('schedule-list');
  wrap.innerHTML = scheduleListItemsHtml({ inlineEdit: true });
  attachScheduleHandlers(wrap, { inlineEdit: true });
  const btn = document.getElementById('btn-schedule-drop-tab');
  if (btn) btn.addEventListener('click', () => openScheduleDropModal());
}
function renderDropsTable() {
  const tbody = document.querySelector('#drops-table tbody');
  if (state.drops.length === 0) { tbody.innerHTML = '<tr><td colspan="7" style="text-align:center; color:#6b7280; padding:24px;">No drops logged yet.</td></tr>'; return; }
  tbody.innerHTML = [...state.drops].sort((a, b) => b.dropDate.localeCompare(a.dropDate)).map(d => { const c = clientById(d.clientId); const col = c ? clientColor(c.id) : null; return `<tr ${col ? `style="background:${col.bg}"` : ''}><td>${fmtDate(d.dropDate)}</td><td>${c ? `<div class="name-with-logo">${logoHtml(c, 'sm')}<b>${escHtml(c.name)}</b></div>` : '—'}</td><td>${escHtml(d.dropName)}</td><td class="muted">${escHtml(d.products || '—')}</td><td>${fmtMoney(d.expectedRevenue)}</td><td>${fmtDate(d.payDue)}</td><td><button class="btn btn-sm ${d.status === 'Paid' ? 'btn-ghost' : ''}" data-drop-toggle="${d.id}">${d.status || 'Unpaid'}</button></td></tr>`; }).join('');
  attachLogoClicks(document.getElementById('drops-table'));
  document.querySelectorAll('[data-drop-toggle]').forEach(b => b.addEventListener('click', () => { const dr = state.drops.find(d => d.id === b.dataset.dropToggle); dr.status = dr.status === 'Paid' ? 'Unpaid' : 'Paid'; saveState(); renderClientsPage(); }));
}

function renderBillingTab(wrap) {
  const today = todayISO(); const in7 = addDays(today, 7);
  let overdue = 0, due7 = 0, totalOwed = 0, paidThisMonth = 0;
  const monthStart = new Date(); monthStart.setDate(1); const monthStartISO = monthStart.toISOString().split('T')[0];
  state.drops.forEach(d => {
    if (d.status !== 'Paid' && d.payDue) {
      if (d.payDue < today) { overdue++; totalOwed += (d.expectedRevenue || 0) * (cutFor(d.clientId) / 100); }
      else if (d.payDue <= in7) due7++;
    }
    if (d.status === 'Paid' && d.dropDate >= monthStartISO) paidThisMonth += (d.expectedRevenue || 0) * (cutFor(d.clientId) / 100);
  });
  wrap.innerHTML = `
    <div class="kpis">
      <div class="kpi ${overdue ? 'red' : ''}" data-kpi="bill-overdue"><div class="kpi-head"><span>Overdue Invoices</span><span class="kpi-icon">!</span></div><div class="kpi-value">${overdue}</div><div class="kpi-foot">${fmtMoney(totalOwed)} outstanding</div></div>
      <div class="kpi ${due7 ? 'amber' : ''}" data-kpi="bill-due7"><div class="kpi-head"><span>Due in 7 Days</span><span class="kpi-icon">$</span></div><div class="kpi-value">${due7}</div><div class="kpi-foot">click for breakdown</div></div>
      <div class="kpi green" style="cursor:default"><div class="kpi-head"><span>Collected This Month</span><span class="kpi-icon">✓</span></div><div class="kpi-value">${fmtMoney(paidThisMonth)}</div><div class="kpi-foot">our cut, paid drops</div></div>
      <div class="kpi" style="cursor:default"><div class="kpi-head"><span>Total Logged Drops</span><span class="kpi-icon">↓</span></div><div class="kpi-value">${state.drops.length}</div></div>
    </div>
    <div class="card">
      <h3>Log a Drop / Invoice</h3>
      <div class="small muted" style="margin-bottom:10px;">Record a drop after it happens. Pay date auto-fills from the client's billing day if you leave it blank.</div>
      <div style="display:grid; grid-template-columns:1.2fr 1fr 1.6fr 1.4fr 1fr 1fr auto; gap:10px; align-items:end;">
        <div><div class="small muted">Client</div><select class="sel" id="drop-client"></select></div>
        <div><div class="small muted">Drop date</div><input type="date" class="inp" id="drop-date"></div>
        <div><div class="small muted">Drop name</div><input type="text" class="inp" id="drop-name" placeholder="e.g. Spring Capsule"></div>
        <div><div class="small muted">Products</div><input type="text" class="inp" id="drop-products" placeholder="e.g. 5 tees, 2 hoodies"></div>
        <div><div class="small muted">Expected revenue</div><input type="number" class="inp" id="drop-revenue"></div>
        <div><div class="small muted">Pay due</div><input type="date" class="inp" id="drop-pay-due"></div>
        <div><button class="btn" id="drop-add">Log</button></div>
      </div>
    </div>
    <div class="card">
      <h3>Logged Drops</h3>
      <div class="small muted" style="margin-bottom:10px;">Newest first. Click status to toggle Paid / Unpaid.</div>
      <table class="tbl" id="drops-table"><thead><tr><th>Date</th><th>Client</th><th>Drop</th><th>Products</th><th>Expected Rev</th><th>Our Cut</th><th>Pay Due</th><th>Status</th></tr></thead><tbody></tbody></table>
    </div>
  `;
  const sel = document.getElementById('drop-client'); sel.innerHTML = '<option value="">Pick a client...</option>' + activeClients().map(c => `<option value="${c.id}">${escHtml(c.name)}</option>`).join('');
  document.getElementById('drop-date').value = todayISO();
  document.getElementById('drop-add').addEventListener('click', () => {
    const cid = document.getElementById('drop-client').value, dd = document.getElementById('drop-date').value, dn = document.getElementById('drop-name').value;
    if (!cid || !dd || !dn) { alert('Need client, date, name.'); return; }
    let payDue = document.getElementById('drop-pay-due').value;
    if (!payDue) { const c = clientById(cid); const n = new Date(dd); n.setMonth(n.getMonth() + 1); n.setDate(c.billingDay || 1); payDue = n.toISOString().split('T')[0]; }
    state.drops.push({ id: 'd_' + Date.now(), clientId: cid, dropDate: dd, dropName: dn, products: document.getElementById('drop-products').value, expectedRevenue: parseFloat(document.getElementById('drop-revenue').value) || 0, payDue, status: 'Unpaid' });
    saveState(); renderClientsPage();
  });
  renderBillingTable();
  wrap.querySelectorAll('.kpi[data-kpi]').forEach(k => k.addEventListener('click', () => openBillingBreakdown(k.dataset.kpi)));
}
function renderBillingTable() {
  const tbody = document.querySelector('#drops-table tbody');
  if (!tbody) return;
  if (state.drops.length === 0) { tbody.innerHTML = '<tr><td colspan="8" style="text-align:center; color:#6b7280; padding:24px;">No invoices logged yet. Click + Log Drop Invoice or + Log Recurring Invoice to add one.</td></tr>'; return; }
  tbody.innerHTML = [...state.drops].sort((a, b) => b.dropDate.localeCompare(a.dropDate)).map(d => {
    const c = clientById(d.clientId); const col = c ? clientColor(c.id) : null;
    const cut = (d.expectedRevenue || 0) * (cutFor(d.clientId) / 100);
    const isPaid = d.status === 'Paid';
    const isRecurring = d.invoiceType === 'recurring';
    const typePill = isRecurring ? '<span class="pill" style="background:#dbeafe; color:#1d4ed8;">RECURRING</span>' : '<span class="pill" style="background:#fef3c7; color:#b45309;">DROP</span>';
    return `<tr ${col ? `style="background:${col.bg}"` : ''}><td>${fmtDate(d.dropDate)}</td><td>${c ? `<div class="name-with-logo">${logoHtml(c, 'sm')}<b>${escHtml(c.name)}</b></div>` : '—'}</td><td>${typePill}</td><td>${escHtml(d.dropName || '—')}${d.products ? `<div class="small muted" style="margin-top:2px;">${escHtml(d.products)}</div>` : ''}</td><td>${fmtMoney(d.expectedRevenue)}</td><td><b>${fmtMoney(cut)}</b></td><td>${fmtDate(d.payDue)}</td><td><div style="display:flex; gap:4px;"><button class="btn btn-sm ${isPaid ? 'btn-green' : 'btn-amber'}" data-drop-toggle="${d.id}">${d.status || 'Unpaid'}</button><button class="btn btn-red btn-sm" data-drop-del="${d.id}">×</button></div></td></tr>`;
  }).join('');
  attachLogoClicks(document.getElementById('drops-table'));
  document.querySelectorAll('[data-drop-toggle]').forEach(b => b.addEventListener('click', () => { const dr = state.drops.find(d => d.id === b.dataset.dropToggle); dr.status = dr.status === 'Paid' ? 'Unpaid' : 'Paid'; saveState(); renderClientsPage(); }));
  document.querySelectorAll('[data-drop-del]').forEach(b => b.addEventListener('click', () => { const id = b.dataset.dropDel; const idx = state.drops.findIndex(d => d.id === id); const snap = state.drops[idx]; state.drops.splice(idx, 1); saveState(); renderClientsPage(); showToast('Invoice deleted', () => { state.drops.splice(idx, 0, snap); saveState(); renderClientsPage(); }); }));
}
function cutFor(cid) { const c = clientById(cid); return c ? (c.feeOnRevenue || 0) : 10; }
function openBillingBreakdown(kpi) {
  const today = todayISO(); const in7 = addDays(today, 7);
  let title, sub, rows = '';
  const list = state.drops.filter(d => d.status !== 'Paid' && d.payDue && ((kpi === 'bill-overdue' && d.payDue < today) || (kpi === 'bill-due7' && d.payDue >= today && d.payDue <= in7))).sort((a, b) => a.payDue.localeCompare(b.payDue));
  if (kpi === 'bill-overdue') { title = 'Overdue Invoices'; sub = 'Drops with pay date in the past. Chase these.'; }
  else { title = 'Invoices Due in 7 Days'; sub = 'Pay date within the next week.'; }
  if (list.length === 0) rows = '<div class="modal-empty">Nothing in this bucket. 🎉</div>';
  else rows = list.map(d => { const c = clientById(d.clientId); if (!c) return ''; const col = clientColor(c.id); const cut = (d.expectedRevenue || 0) * (cutFor(c.id) / 100); const days = daysBetween(today, d.payDue); const cdCls = days < 0 ? 'pill-cd-red' : countdownClass(days); const cdText = days < 0 ? Math.abs(days) + ' DAYS LATE' : countdownText(days); return `<div class="modal-row" style="background:${col.bg}; cursor:pointer;" data-row-cid="${c.id}" data-row-action="profile">${logoHtml(c)}<div class="mr-info"><div class="mr-name" style="text-decoration:underline; text-decoration-color:rgba(0,0,0,0.2); text-underline-offset:3px;">${escHtml(c.name)}</div><div class="mr-sub">${escHtml(d.dropName)} · Pay due ${fmtDate(d.payDue)}</div></div><div><div class="mr-value">${fmtMoney(cut)}</div><div class="mr-foot"><span class="pill ${cdCls}">${cdText}</span></div></div></div>`; }).join('');
  openModalWith(title, sub, rows);
  attachLogoClicks(document.getElementById('modal-body'));
  attachKpiRowClicks(document.getElementById('modal-body'));
}

function renderGrowthTab(wrap) {
  wrap.innerHTML = `<div class="toolbar"><div><h3 style="margin:0;">Growth Plan</h3><div class="small muted">Per-client targets and next scale moves.</div></div></div><div class="growth-grid" id="growth-grid"></div>`;
  const grid = document.getElementById('growth-grid');
  const rows = sortedClients();
  if (rows.length === 0) { grid.innerHTML = '<div class="modal-empty">No active clients.</div>'; return; }
  grid.innerHTML = rows.map((c, i) => {
    const col = clientColor(c.id); const agg = aggregateClient(c.id, state.dateRange.start, state.dateRange.end);
    const pct = c.targetRevenue > 0 ? Math.min(100, agg.revenue / c.targetRevenue * 100) : 0;
    return `<div class="growth-card" data-cid="${c.id}" style="background:${col.bg};">
      <div class="gc-head"><div class="gc-id">${logoHtml(c)}<div><div class="gc-name">${escHtml(c.name)}</div><div class="gc-meta">${c.service} · ${c.feeOnRevenue}% fee/rev · ${escHtml(c.contact)}</div></div></div><div class="gc-rank">#${i + 1}</div></div>
      <div class="gc-targets"><div class="gc-target-block"><div class="gc-target-label">Monthly Rev Target</div><input class="gc-target-input" data-f="targetRevenue" type="number" value="${c.targetRevenue}"></div><div class="gc-target-block"><div class="gc-target-label">Target ROAS</div><input class="gc-target-input" data-f="targetRoas" type="number" step="0.1" value="${c.targetRoas}"></div></div>
      <div style="font-size:11px; color:#4b5563; margin-bottom:4px;">${fmtMoney(agg.revenue)} of ${fmtMoney(c.targetRevenue)} · ${pct.toFixed(0)}%</div>
      <div class="gc-progress"><div class="gc-progress-bar" style="width:${pct}%; background:${col.accent}"></div></div>
      <div><div class="gc-roadmap-label">Next Scale Moves</div><div class="gc-actions"></div><button class="gc-add-action">+ Add move</button></div>
    </div>`;
  }).join('');
  attachLogoClicks(grid);
  grid.querySelectorAll('.growth-card').forEach(card => {
    const cid = card.dataset.cid; const c = clientById(cid);
    card.querySelectorAll('[data-f]').forEach(inp => inp.addEventListener('change', () => { c[inp.dataset.f] = parseFloat(inp.value) || 0; saveState(); renderClientsPage(); }));
    const aw = card.querySelector('.gc-actions');
    function ra() { aw.innerHTML = (c.roadmap || []).map((a, i) => `<div class="gc-action"><input value="${escAttr(a)}" data-i="${i}"><button data-del="${i}">×</button></div>`).join(''); aw.querySelectorAll('input').forEach(inp => inp.addEventListener('change', () => { c.roadmap[parseInt(inp.dataset.i)] = inp.value; saveState(); })); aw.querySelectorAll('[data-del]').forEach(b => b.addEventListener('click', () => { c.roadmap.splice(parseInt(b.dataset.del), 1); saveState(); ra(); })); }
    ra();
    card.querySelector('.gc-add-action').addEventListener('click', () => { c.roadmap = c.roadmap || []; c.roadmap.push(''); saveState(); ra(); });
  });
}

function renderArchiveTab(wrap) {
  wrap.innerHTML = `<div class="card"><h3>Archived Clients</h3><div class="card-sub">Offboarded clients. Restore brings them back.</div></div><div id="archive-list"></div>`;
  const list = archivedClients();
  const al = document.getElementById('archive-list');
  if (list.length === 0) { al.innerHTML = '<div class="modal-empty">No archived clients.</div>'; return; }
  al.innerHTML = list.map(c => { const col = clientColor(c.id); return `<div class="archive-card" style="background:${col.bg}">${logoHtml(c)}<div class="ac-info"><div class="ac-name">${escHtml(c.name)}</div><div class="ac-meta">${c.service} · ${escHtml(c.contact)} · ${escHtml(c.email)}</div></div><button class="btn btn-ghost btn-sm" data-restore="${c.id}">Restore</button><button class="btn btn-red btn-sm" data-del="${c.id}">Delete</button></div>`; }).join('');
  attachLogoClicks(al);
  al.querySelectorAll('[data-restore]').forEach(b => b.addEventListener('click', () => restoreClient(b.dataset.restore)));
  al.querySelectorAll('[data-del]').forEach(b => b.addEventListener('click', () => deleteClient(b.dataset.del)));
}

// ============ Meta Tracking (4 sub-tabs)
function setWeekData(cid, wk, field, value) { const k = wk + '|' + cid; state.weeklyData[k] = state.weeklyData[k] || { spend: 0, revenue: 0, launched: 0, optimized: 0, killed: 0, notes: '' }; state.weeklyData[k][field] = value; saveState(); }

function renderMetaPage() {
  const page = document.getElementById('page-meta');
  const sub = currentSub.meta || 'inputs';
  page.innerHTML = `
    <div class="page-header"><div><h1 class="page-title">Meta Tracking</h1><div class="page-sub">Ad performance, creatives, assets, analytics.</div></div></div>
    <div class="subtabs" data-group="meta">
      <div class="subtab ${sub === 'inputs' ? 'active' : ''}" data-sub="inputs" data-sublabel="meta.inputs">${labelFor('meta.inputs', 'Weekly Inputs')}</div>
      <div class="subtab ${sub === 'assets' ? 'active' : ''}" data-sub="assets" data-sublabel="meta.assets">${labelFor('meta.assets', 'Asset Budgets')}</div>
      <div class="subtab ${sub === 'analytics' ? 'active' : ''}" data-sub="analytics" data-sublabel="meta.analytics">${labelFor('meta.analytics', 'Analytics')}</div>
    </div>
    <div id="meta-content"></div>
  `;
  page.querySelectorAll('[data-sub]').forEach(el => el.addEventListener('click', () => { currentSub.meta = el.dataset.sub; state.currentSub = currentSub; saveState(); renderMetaPage(); }));
  attachLabelEditing(page);
  const wrap = document.getElementById('meta-content');
  if (sub === 'inputs') renderInputsTab(wrap);
  else if (sub === 'assets') renderAssetsTab(wrap);
  else if (sub === 'analytics' || sub === 'creatives') renderAnalyticsTab(wrap);
}

function renderInputsTab(wrap) {
  const wk = state.currentWeek || weekStartISO(new Date());
  state.currentWeek = wk;
  wrap.innerHTML = `
    <div class="toolbar">
      <div><h3 style="margin:0;">Weekly inputs</h3><div class="small muted">Edit per-client. Auto-saves. Each week is a separate record.</div></div>
      <div class="flex-row">
        <input type="date" id="wk-picker" class="inp inp-sm" style="width:150px;" value="${wk}">
        <button class="btn btn-ghost btn-sm" id="wk-prev">◀ Prev</button>
        <button class="btn btn-ghost btn-sm" id="wk-next">Next ▶</button>
        <button class="btn btn-sm" id="wk-this">This Week</button>
      </div>
    </div>
    <div class="card" style="padding:0; overflow:hidden;">
      <table class="tbl" id="inputs-table">
        <thead><tr><th>Client</th><th>Spend</th><th>Revenue</th><th>Launched</th><th>Killed</th><th>ROAS</th><th>Break-Even</th><th>Notes</th></tr></thead>
        <tbody></tbody>
      </table>
    </div>
  `;
  document.getElementById('wk-picker').addEventListener('change', (e) => { state.currentWeek = weekStartISO(e.target.value); saveState(); renderMetaPage(); });
  document.getElementById('wk-prev').addEventListener('click', () => { state.currentWeek = addDays(state.currentWeek, -7); saveState(); renderMetaPage(); });
  document.getElementById('wk-next').addEventListener('click', () => { state.currentWeek = addDays(state.currentWeek, 7); saveState(); renderMetaPage(); });
  document.getElementById('wk-this').addEventListener('click', () => { state.currentWeek = weekStartISO(new Date()); saveState(); renderMetaPage(); });
  const tbody = document.querySelector('#inputs-table tbody');
  const rows = activeClients();
  tbody.innerHTML = rows.map(c => {
    const col = clientColor(c.id); const w = getWeekData(c.id, wk);
    const roas = w.spend > 0 ? w.revenue / w.spend : 0;
    const be = breakEvenRoas(c);
    const roasCls = be > 0 ? (roas >= be ? 'pill-cd-green' : 'pill-cd-red') : 'pill-cd-grey';
    return `<tr data-cid="${c.id}" style="background:${col.bg}"><td><div class="name-with-logo">${logoHtml(c)}<b>${escHtml(c.name)}</b></div></td><td><input class="inp inp-sm" type="number" data-wf="spend" value="${w.spend}"></td><td><input class="inp inp-sm" type="number" data-wf="revenue" value="${w.revenue}"></td><td><input class="inp inp-sm" type="number" data-wf="launched" value="${w.launched}"></td><td><input class="inp inp-sm" type="number" data-wf="killed" value="${w.killed || 0}"></td><td><span class="pill ${roasCls}">${fmtRoas(roas)}</span></td><td class="muted">${be > 0 ? fmtRoas(be) : '—'}</td><td><input class="inp" data-wf="notes" value="${escAttr(w.notes || '')}"></td></tr>`;
  }).join('');
  attachLogoClicks(tbody);
  tbody.querySelectorAll('tr').forEach(tr => { const cid = tr.dataset.cid; tr.querySelectorAll('[data-wf]').forEach(inp => inp.addEventListener('change', () => { const v = inp.type === 'number' ? (parseFloat(inp.value) || 0) : inp.value; setWeekData(cid, wk, inp.dataset.wf, v); renderMetaPage(); })); });
}

function renderCreativesTab(wrap) {
  wrap.innerHTML = `
    <div class="toolbar">
      <div><h3 style="margin:0;">Creatives</h3><div class="small muted">Aggregated over the selected date range.</div></div>
      <button class="dp-trigger" id="dp-trigger"><span>📅</span><span>${presetLabelFromRange()}</span></button>
    </div>
    <div class="kpis" id="cre-kpis"></div>
    <div class="card" style="padding:0; overflow:hidden;">
      <table class="tbl" id="cre-table"><thead><tr><th>#</th><th>Client</th><th>Launched</th><th>Optimized</th><th>Killed</th><th>Survival Rate</th></tr></thead><tbody></tbody></table>
    </div>
  `;
  document.getElementById('dp-trigger').addEventListener('click', openDatePicker);
  let tl = 0, to = 0, tk = 0;
  const aggs = activeClients().map(c => { const a = aggregateClient(c.id, state.dateRange.start, state.dateRange.end); tl += a.launched; to += a.optimized; tk += a.killed; return { c, a }; }).sort((x, y) => y.a.launched - x.a.launched);
  const survival = tl > 0 ? (1 - tk / tl) * 100 : 0;
  document.getElementById('cre-kpis').innerHTML = `
    <div class="kpi blue" style="cursor:default"><div class="kpi-head"><span>Launched</span><span class="kpi-icon">+</span></div><div class="kpi-value">${tl}</div></div>
    <div class="kpi amber" style="cursor:default"><div class="kpi-head"><span>Optimized</span><span class="kpi-icon">↻</span></div><div class="kpi-value">${to}</div></div>
    <div class="kpi red" style="cursor:default"><div class="kpi-head"><span>Killed</span><span class="kpi-icon">×</span></div><div class="kpi-value">${tk}</div></div>
    <div class="kpi green" style="cursor:default"><div class="kpi-head"><span>Survival Rate</span><span class="kpi-icon">%</span></div><div class="kpi-value">${fmtPct(survival)}</div></div>
  `;
  const tbody = document.querySelector('#cre-table tbody');
  tbody.innerHTML = aggs.map((r, i) => { const col = clientColor(r.c.id); const sr = r.a.launched > 0 ? (1 - r.a.killed / r.a.launched) * 100 : 0; return `<tr style="background:${col.bg}"><td><span class="pill pill-rank">#${i + 1}</span></td><td><div class="name-with-logo">${logoHtml(r.c)}<b>${escHtml(r.c.name)}</b></div></td><td><b>${r.a.launched}</b></td><td>${r.a.optimized}</td><td>${r.a.killed}</td><td>${fmtPct(sr)}</td></tr>`; }).join('');
  attachLogoClicks(tbody);
}

function renderAssetsTab(wrap) {
  const live = state.assets.length;
  const onMin = state.assets.filter(a => a.minBudgetOn).length;
  const past7 = state.assets.filter(a => assetDaysLive(a) >= 7).length;
  const alerts = alertedAssets();
  wrap.innerHTML = `
    <div class="toolbar">
      <div><h3 style="margin:0;">Asset budgets</h3><div class="small muted">CBO assets being tracked. Flip min off after day 5-7 to let them scale.</div></div>
      <button class="btn" id="btn-add-asset">+ Add Asset</button>
    </div>
    <div class="kpis">
      <div class="kpi" style="cursor:default"><div class="kpi-head"><span>Total Live</span><span class="kpi-icon">●</span></div><div class="kpi-value">${live}</div></div>
      <div class="kpi amber" style="cursor:default"><div class="kpi-head"><span>On Min Budget</span><span class="kpi-icon">$</span></div><div class="kpi-value">${onMin}</div></div>
      <div class="kpi ${alerts.length ? 'red' : ''}" style="cursor:default"><div class="kpi-head"><span>Past Day 7 + Min On</span><span class="kpi-icon">!</span></div><div class="kpi-value">${alerts.length}</div><div class="kpi-foot">need attention</div></div>
      <div class="kpi" style="cursor:default"><div class="kpi-head"><span>Past Day 7 Total</span><span class="kpi-icon">↻</span></div><div class="kpi-value">${past7}</div></div>
    </div>
    <div class="card schedule-card" id="assets-list"></div>
  `;
  document.getElementById('btn-add-asset').addEventListener('click', openAddAssetModal);
  const al = document.getElementById('assets-list');
  if (state.assets.length === 0) { al.innerHTML = '<div class="modal-empty">No assets tracked. Click + Add Asset.</div>'; return; }
  const sorted = [...state.assets].sort((a, b) => assetDaysLive(b) - assetDaysLive(a));
  al.innerHTML = sorted.map(a => {
    const c = clientById(a.clientId); const col = c ? clientColor(c.id) : { bg: '#fff', accent: '#111' };
    const days = assetDaysLive(a);
    const statusCls = days < 5 ? 'pill-cd-green' : (days < 7 ? 'pill-cd-amber' : (a.minBudgetOn ? 'pill-cd-red' : 'pill-cd-grey'));
    const statusTxt = days < 5 ? 'NEW' : (days < 7 ? 'WATCHING' : (a.minBudgetOn ? 'FLIP MIN OFF' : 'SCALING'));
    return `<div class="asset-row" style="background:${col.bg}" data-aid="${a.id}">
      <div class="asset-days"><div class="ad-num">${days}</div><div class="ad-label">DAYS LIVE</div></div>
      ${c ? logoHtml(c) : ''}
      <div class="asset-info"><div class="asset-name">${escHtml(a.name)}</div><div class="asset-meta">${c ? escHtml(c.name) : '—'} · Launched ${fmtDateShort(a.launchDate)}</div></div>
      <span class="pill ${statusCls}">${statusTxt}</span>
      <button class="asset-toggle ${a.minBudgetOn ? 'on' : 'off'}" data-toggle-min="${a.id}">${a.minBudgetOn ? 'Min ON' : 'Min OFF'}</button>
      <button class="btn btn-red btn-sm" data-del-asset="${a.id}">×</button>
    </div>`;
  }).join('');
  attachLogoClicks(al);
  al.querySelectorAll('[data-toggle-min]').forEach(b => b.addEventListener('click', () => { const a = state.assets.find(x => x.id === b.dataset.toggleMin); a.minBudgetOn = !a.minBudgetOn; saveState(); renderMetaPage(); }));
  al.querySelectorAll('[data-del-asset]').forEach(b => b.addEventListener('click', () => { const id = b.dataset.delAsset; const snap = state.assets.find(a => a.id === id); state.assets = state.assets.filter(a => a.id !== id); saveState(); renderMetaPage(); showToast(`Asset deleted`, () => { state.assets.push(snap); saveState(); renderMetaPage(); }); }));
}
function openAddAssetModal() {
  const opts = activeClients().map(c => `<option value="${c.id}">${escHtml(c.name)}</option>`).join('');
  openModalWith('Add Asset', 'Track a CBO asset and its min-budget status.', `<div class="form-grid"><div class="full"><label>Asset name *</label><input class="inp" id="as-name" placeholder="e.g. CBO – Hero Static"></div><div><label>Client *</label><select class="sel" id="as-client">${opts}</select></div><div><label>Launch date</label><input type="date" class="inp" id="as-date" value="${todayISO()}"></div><div class="full"><label><input type="checkbox" id="as-min" checked> Min budget ON at launch</label></div></div>`, `<button class="btn btn-ghost" id="as-cancel">Cancel</button><button class="btn" id="as-save">Add</button>`);
  document.getElementById('as-cancel').addEventListener('click', closeModal);
  document.getElementById('as-save').addEventListener('click', () => {
    const name = document.getElementById('as-name').value.trim(); const cid = document.getElementById('as-client').value;
    if (!name || !cid) { alert('Need name + client.'); return; }
    const a = { id: 'a_' + Date.now(), name, clientId: cid, launchDate: document.getElementById('as-date').value || todayISO(), minBudgetOn: document.getElementById('as-min').checked };
    state.assets.push(a); saveState(); closeModal(); renderMetaPage();
    showToast(`${name} added`, () => { state.assets = state.assets.filter(x => x.id !== a.id); saveState(); renderMetaPage(); });
  });
}

function renderAnalyticsTab(wrap) {
  wrap.innerHTML = `
    <div class="toolbar">
      <div><h3 style="margin:0;">Analytics</h3><div class="small muted">Click any KPI for a breakdown. Drag charts to reorder. Click + Add Chart to build your own dashboard.</div></div>
      <div class="flex-row">
        <button class="btn btn-ghost" id="btn-add-chart">+ Add Chart</button>
        <button class="dp-trigger" id="dp-trigger"><span>📅</span><span>${presetLabelFromRange()}</span></button>
      </div>
    </div>
    <div class="kpis" id="ana-kpis"></div>
    <div class="charts-builder-grid" id="ana-charts"></div>
    <div class="card" style="padding:0; overflow:hidden; margin-top:18px;">
      <table class="tbl" id="ana-table"><thead><tr><th>#</th><th>Client</th><th>Launched</th><th>Killed</th><th>Spend</th><th>Revenue</th><th>$/Creative</th><th>ROAS</th><th>Break-Even</th><th>Our Cut</th><th>Take-Home</th></tr></thead><tbody></tbody></table>
    </div>
  `;
  document.getElementById('dp-trigger').addEventListener('click', openDatePicker);
  document.getElementById('btn-add-chart').addEventListener('click', openAddChartModal);
  const rs = state.dateRange.start, re = state.dateRange.end;
  let tSp = 0, tRev = 0, tCut = 0, tTake = 0, tL = 0, tO = 0, tK = 0;
  const data = activeClients().map(c => { const a = aggregateClient(c.id, rs, re); const oc = ourCut(c, a.spend, a.revenue); const th = clientTakeHome(c, a.spend, a.revenue); tSp += a.spend; tRev += a.revenue; tCut += oc; tTake += th; tL += a.launched; tO += a.optimized; tK += a.killed; return { c, a, oc, th }; }).sort((x, y) => y.oc - x.oc);
  const survival = tL > 0 ? (1 - tK / tL) * 100 : 0;
  document.getElementById('ana-kpis').innerHTML = `
    <div class="kpi" data-kpi="revenue"><div class="kpi-head"><span>Total Revenue</span><span class="kpi-icon">↑</span></div><div class="kpi-value">${fmtMoney(tRev)}</div></div>
    <div class="kpi" data-kpi="spend"><div class="kpi-head"><span>Total Spend</span><span class="kpi-icon">$</span></div><div class="kpi-value">${fmtMoney(tSp)}</div><div class="kpi-foot">Blended ROAS ${fmtRoas(tSp > 0 ? tRev / tSp : 0)}</div></div>
    <div class="kpi green" data-kpi="cut"><div class="kpi-head"><span>Our Cut</span><span class="kpi-icon">%</span></div><div class="kpi-value">${fmtMoney(tCut)}</div></div>
    <div class="kpi" data-kpi="takehome"><div class="kpi-head"><span>Client Take-Home</span><span class="kpi-icon">→</span></div><div class="kpi-value">${fmtMoney(tTake)}</div></div>
    <div class="kpi blue" data-kpi="creatives-launched"><div class="kpi-head"><span>Launched</span><span class="kpi-icon">+</span></div><div class="kpi-value">${tL}</div></div>
    <div class="kpi red" data-kpi="creatives-killed"><div class="kpi-head"><span>Killed</span><span class="kpi-icon">×</span></div><div class="kpi-value">${tK}</div></div>
  `;
  document.querySelectorAll('#ana-kpis .kpi').forEach(k => k.addEventListener('click', () => openAnalyticsModal(k.dataset.kpi)));
  const tbody = document.querySelector('#ana-table tbody');
  tbody.innerHTML = data.map((r, i) => { const col = clientColor(r.c.id); const roas = r.a.spend > 0 ? r.a.revenue / r.a.spend : 0; const be = breakEvenRoas(r.c); const revPerCre = r.a.launched > 0 ? r.a.revenue / r.a.launched : 0; return `<tr style="background:${col.bg}"><td><span class="pill pill-rank">#${i + 1}</span></td><td><div class="name-with-logo">${logoHtml(r.c)}<button class="client-name-btn" data-profile="${r.c.id}"><span class="cn-link">${escHtml(r.c.name)}</span></button></div></td><td><b>${r.a.launched}</b></td><td>${r.a.killed}</td><td>${fmtMoney(r.a.spend)}</td><td>${fmtMoney(r.a.revenue)}</td><td>${fmtMoney(revPerCre)}</td><td>${fmtRoas(roas)}</td><td class="muted">${be > 0 ? fmtRoas(be) : '—'}</td><td><b>${fmtMoney(r.oc)}</b></td><td>${fmtMoney(r.th)}</td></tr>`; }).join('');
  attachLogoClicks(tbody);
  tbody.querySelectorAll('[data-profile]').forEach(b => b.addEventListener('click', () => openProfileModal(b.dataset.profile)));
  setTimeout(() => renderAnalyticsCharts(data), 50);
}
function openAnalyticsModal(kpi) {
  const rs = state.dateRange.start, re = state.dateRange.end;
  let title, sub, get, fmtFn;
  if (kpi === 'revenue') { title = 'Revenue by Client'; sub = 'Selected range. Click any client to open profile.'; get = c => aggregateClient(c.id, rs, re).revenue; fmtFn = fmtMoney; }
  else if (kpi === 'spend') { title = 'Spend by Client'; sub = 'Selected range. Click any client to open profile.'; get = c => aggregateClient(c.id, rs, re).spend; fmtFn = fmtMoney; }
  else if (kpi === 'cut') { title = 'Our Cut by Client'; sub = 'Selected range. Click any client to open profile.'; get = c => { const a = aggregateClient(c.id, rs, re); return ourCut(c, a.spend, a.revenue); }; fmtFn = fmtMoney; }
  else if (kpi === 'takehome') { title = 'Client Take-Home'; sub = 'After spend and fees. Click any client to open profile.'; get = c => { const a = aggregateClient(c.id, rs, re); return clientTakeHome(c, a.spend, a.revenue); }; fmtFn = fmtMoney; }
  else if (kpi === 'creatives-launched') { title = 'Creatives Launched'; sub = 'New creatives shipped in the selected range.'; get = c => aggregateClient(c.id, rs, re).launched; fmtFn = fmt; }
  else if (kpi === 'creatives-killed') { title = 'Creatives Killed'; sub = 'Creatives that did not perform and were shut off.'; get = c => aggregateClient(c.id, rs, re).killed; fmtFn = fmt; }
  const ranked = [...activeClients()].sort((a, b) => get(b) - get(a));
  const rows = ranked.map((c, i) => { const col = clientColor(c.id); return `<div class="modal-row" style="background:${col.bg}; cursor:pointer;" data-row-cid="${c.id}" data-row-action="profile"><div class="modal-rank">${i + 1}</div>${logoHtml(c)}<div class="mr-info"><div class="mr-name" style="text-decoration:underline; text-decoration-color:rgba(0,0,0,0.2); text-underline-offset:3px;">${escHtml(c.name)}</div><div class="mr-sub">${c.service} · ${escHtml(c.contact)}</div></div><div><div class="mr-value">${fmtFn(get(c))}</div></div></div>`; }).join('');
  openModalWith(title, sub, rows || '<div class="modal-empty">No data.</div>');
  attachLogoClicks(document.getElementById('modal-body'));
  attachKpiRowClicks(document.getElementById('modal-body'));
}
// ============ Custom Analytics Chart Builder
const CHART_METRICS = {
  'revenue': { label: 'Revenue per client', get: (r) => r.a.revenue, fmt: fmtMoney },
  'spend': { label: 'Spend per client', get: (r) => r.a.spend, fmt: fmtMoney },
  'roas': { label: 'ROAS per client', get: (r) => r.a.spend > 0 ? r.a.revenue / r.a.spend : 0, fmt: fmtRoas },
  'be-roas': { label: 'Break-Even ROAS per client', get: (r) => breakEvenRoas(r.c), fmt: fmtRoas },
  'cut': { label: 'Our Cut per client', get: (r) => r.oc, fmt: fmtMoney },
  'take': { label: 'Client Take-Home per client', get: (r) => r.th, fmt: fmtMoney },
  'launched': { label: 'Creatives Launched per client', get: (r) => r.a.launched, fmt: fmt },
  'killed': { label: 'Creatives Killed per client', get: (r) => r.a.killed, fmt: fmt },
  'rev-per-creative': { label: 'Revenue per Creative', get: (r) => r.a.launched > 0 ? r.a.revenue / r.a.launched : 0, fmt: fmtMoney }
};
const CHART_TYPES = { 'bar': 'Bar chart', 'line': 'Line chart', 'pie': 'Pie chart', 'doughnut': 'Doughnut chart', 'horizontalBar': 'Horizontal bar' };

const DEFAULT_CHARTS = [
  { id: 'ch_revenue', type: 'bar', metric: 'revenue', title: 'Revenue by Client' },
  { id: 'ch_roasbe', type: 'roas-be-combo', title: 'ROAS vs Break-Even' },
  { id: 'ch_cut', type: 'bar', metric: 'cut', title: 'Our Cut by Client' },
  { id: 'ch_share', type: 'doughnut', metric: 'revenue', title: 'Revenue Share' },
  { id: 'ch_trend', type: 'weekly-trend', title: 'Weekly Revenue Trend' },
  { id: 'ch_corr', type: 'correlation', title: 'Creatives vs Revenue' }
];

function getAnalyticsCharts() {
  if (!state.analyticsCharts) state.analyticsCharts = JSON.parse(JSON.stringify(DEFAULT_CHARTS));
  return state.analyticsCharts;
}

function openAddChartModal() {
  const metricOpts = Object.entries(CHART_METRICS).map(([k, v]) => `<option value="${k}">${v.label}</option>`).join('');
  const typeOpts = Object.entries(CHART_TYPES).map(([k, v]) => `<option value="${k}">${v}</option>`).join('');
  openModalWith('Add Chart', 'Pick a chart type and metric. New charts append to the bottom and can be dragged anywhere.', `<div class="form-grid"><div class="full"><label>Chart title</label><input class="inp" id="ac-title" placeholder="e.g. Q2 Revenue Snapshot"></div><div><label>Chart type</label><select class="sel" id="ac-type">${typeOpts}</select></div><div><label>Metric</label><select class="sel" id="ac-metric">${metricOpts}</select></div></div>`, `<button class="btn btn-ghost" id="ac-cancel">Cancel</button><button class="btn" id="ac-save">Add</button>`);
  document.getElementById('ac-cancel').addEventListener('click', closeModal);
  document.getElementById('ac-save').addEventListener('click', () => {
    const type = document.getElementById('ac-type').value; const metric = document.getElementById('ac-metric').value; const title = document.getElementById('ac-title').value.trim() || (CHART_METRICS[metric].label);
    getAnalyticsCharts().push({ id: 'ch_' + Date.now(), type, metric, title }); saveState(); closeModal(); renderClientsPage(); renderMetaPage();
  });
}

function removeChart(id) {
  const charts = getAnalyticsCharts();
  const idx = charts.findIndex(c => c.id === id); if (idx < 0) return;
  const snap = charts[idx]; charts.splice(idx, 1); saveState(); renderMetaPage();
  showToast('Chart removed', () => { charts.splice(idx, 0, snap); saveState(); renderMetaPage(); });
}

function renderAnalyticsCharts(data) {
  const labels = data.map(r => r.c.name);
  const colors = data.map(r => clientColor(r.c.id).accent);
  const bgs = data.map(r => clientColor(r.c.id).initial);
  Object.values(chartRefs).forEach(c => c && c.destroy()); chartRefs = {};

  const charts = getAnalyticsCharts();
  const grid = document.getElementById('ana-charts');
  if (!grid) return;
  grid.innerHTML = charts.map(ch => `<div class="chart-card" draggable="true" data-chartid="${ch.id}"><span class="chart-card-handle">⋮⋮ drag</span><button class="chart-card-close" data-chart-close="${ch.id}" title="Remove">×</button><div class="chart-card-title">${escHtml(ch.title)}</div><canvas id="canvas_${ch.id}"></canvas></div>`).join('');

  // Drag-to-reorder
  grid.querySelectorAll('.chart-card').forEach(card => {
    card.addEventListener('dragstart', (e) => { card.classList.add('dragging'); e.dataTransfer.effectAllowed = 'move'; e.dataTransfer.setData('text/plain', card.dataset.chartid); });
    card.addEventListener('dragend', () => { card.classList.remove('dragging'); grid.querySelectorAll('.chart-card').forEach(c => c.classList.remove('drag-over')); });
    card.addEventListener('dragover', (e) => { e.preventDefault(); card.classList.add('drag-over'); });
    card.addEventListener('dragleave', () => card.classList.remove('drag-over'));
    card.addEventListener('drop', (e) => {
      e.preventDefault();
      const from = e.dataTransfer.getData('text/plain'); const to = card.dataset.chartid;
      if (from === to) return;
      const chs = getAnalyticsCharts(); const i = chs.findIndex(c => c.id === from); const j = chs.findIndex(c => c.id === to);
      const moved = chs.splice(i, 1)[0]; chs.splice(j, 0, moved);
      saveState(); renderMetaPage();
    });
  });
  grid.querySelectorAll('[data-chart-close]').forEach(b => b.addEventListener('click', (e) => { e.stopPropagation(); removeChart(b.dataset.chartClose); }));

  // Render each chart based on type/metric
  charts.forEach(ch => {
    const ctx = document.getElementById('canvas_' + ch.id); if (!ctx) return;
    chartRefs[ch.id] = buildChart(ctx, ch, data, labels, colors, bgs);
  });
}

function buildChart(ctx, ch, data, labels, colors, bgs) {
  // Predefined complex charts
  if (ch.type === 'roas-be-combo') {
    return new Chart(ctx, { type: 'bar', data: { labels, datasets: [{ type: 'bar', label: 'Actual ROAS', data: data.map(r => r.a.spend > 0 ? r.a.revenue / r.a.spend : 0), backgroundColor: colors }, { type: 'line', label: 'Break-Even', data: data.map(r => breakEvenRoas(r.c)), borderColor: '#111', backgroundColor: '#111', borderWidth: 2, pointRadius: 4, fill: false }] }, options: { responsive: true, maintainAspectRatio: false } });
  }
  if (ch.type === 'creatives-stack') {
    return new Chart(ctx, { type: 'bar', data: { labels, datasets: [{ label: 'Survived', data: data.map(r => Math.max(0, r.a.launched - r.a.killed)), backgroundColor: '#10b981' }, { label: 'Killed', data: data.map(r => r.a.killed), backgroundColor: '#ef4444' }] }, options: { responsive: true, maintainAspectRatio: false, scales: { x: { stacked: true }, y: { stacked: true } } } });
  }
  if (ch.type === 'weekly-trend') {
    const weeks = []; let cur = weekStartISO(new Date(state.dateRange.start + 'T00:00:00')); while (cur <= state.dateRange.end) { weeks.push(cur); cur = addDays(cur, 7); }
    const datasets = data.slice(0, 5).map(r => ({ label: r.c.name, data: weeks.map(w => { const wd = state.weeklyData[w + '|' + r.c.id]; return wd ? (wd.revenue || 0) : 0; }), borderColor: clientColor(r.c.id).accent, backgroundColor: clientColor(r.c.id).initial, tension: 0.3, fill: false }));
    return new Chart(ctx, { type: 'line', data: { labels: weeks.map(w => fmtDateShort(w)), datasets }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } } });
  }
  if (ch.type === 'correlation') {
    const points = data.map(r => ({ x: r.a.launched, y: r.a.revenue, name: r.c.name, color: clientColor(r.c.id).accent }));
    return new Chart(ctx, { type: 'scatter', data: { datasets: points.map(p => ({ label: p.name, data: [{ x: p.x, y: p.y }], backgroundColor: p.color, pointRadius: 8 })) }, options: { responsive: true, maintainAspectRatio: false, scales: { x: { title: { display: true, text: 'Creatives Launched' } }, y: { title: { display: true, text: 'Revenue ($)' } } }, plugins: { legend: { position: 'bottom' } } } });
  }
  // Generic chart driven by metric
  const m = CHART_METRICS[ch.metric] || CHART_METRICS.revenue;
  const values = data.map(r => m.get(r));
  const t = ch.type === 'horizontalBar' ? 'bar' : ch.type;
  const opts = { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: t === 'pie' || t === 'doughnut' } } };
  if (ch.type === 'horizontalBar') opts.indexAxis = 'y';
  return new Chart(ctx, { type: t, data: { labels, datasets: [{ label: m.label, data: values, backgroundColor: colors }] }, options: opts });
}

// ============ Feedback
function openFeedbackModal(existingId) {
  const isEdit = !!existingId;
  const f = isEdit ? state.feedback.find(x => x.id === existingId) : null;
  const clientOpts = state.clients.map(c => `<option value="${c.id}" ${f && f.clientId === c.id ? 'selected' : ''}>${escHtml(c.name)}${c.archived ? ' (archived)' : ''}</option>`).join('');
  const body = `<div class="form-grid">
    <div><label>Client *</label><select class="sel" id="fb-client"><option value="">Pick...</option>${clientOpts}</select></div>
    <div><label>Date</label><input type="date" class="inp" id="fb-date" value="${f ? f.date : todayISO()}"></div>
    <div class="full"><label>Summary *</label><input class="inp" id="fb-summary" value="${f ? escAttr(f.summary) : ''}"></div>
    <div class="full"><label>Action items</label><textarea class="inp" id="fb-actions">${f ? escHtml(f.actionItems) : ''}</textarea></div>
    <div><label>Status</label><select class="sel" id="fb-status"><option ${f && f.status === 'Open' ? 'selected' : ''}>Open</option><option ${f && f.status === 'In Progress' ? 'selected' : ''}>In Progress</option><option ${f && f.status === 'Resolved' ? 'selected' : ''}>Resolved</option></select></div>
    <div><label>Theme tag</label><input class="inp" id="fb-tag" value="${f ? escAttr(f.tag || '') : ''}"></div>
  </div>`;
  const foot = isEdit ? `<button class="btn btn-red" id="fb-delete">Delete</button><button class="btn btn-ghost" id="fb-cancel">Cancel</button><button class="btn" id="fb-save">Save</button>` : `<button class="btn btn-ghost" id="fb-cancel">Cancel</button><button class="btn" id="fb-save">Log</button>`;
  openModalWith(isEdit ? 'Edit Feedback' : 'Log Feedback', 'Capture what the client said.', body, foot);
  document.getElementById('fb-cancel').addEventListener('click', closeModal);
  if (isEdit) document.getElementById('fb-delete').addEventListener('click', () => { state.feedback = state.feedback.filter(x => x.id !== existingId); saveState(); closeModal(); renderFeedback(); });
  document.getElementById('fb-save').addEventListener('click', () => {
    const clientId = document.getElementById('fb-client').value;
    const summary = document.getElementById('fb-summary').value.trim();
    if (!clientId || !summary) { alert('Need client + summary.'); return; }
    const obj = { id: f ? f.id : 'f_' + Date.now(), clientId, date: document.getElementById('fb-date').value || todayISO(), summary, actionItems: document.getElementById('fb-actions').value, status: document.getElementById('fb-status').value, tag: document.getElementById('fb-tag').value, createdAt: f ? f.createdAt : Date.now() };
    if (f) Object.assign(f, obj); else state.feedback.push(obj);
    saveState(); closeModal(); renderFeedback();
  });
}
function setFeedbackStatus(id, newStatus) { const f = state.feedback.find(x => x.id === id); if (!f) return; const old = f.status; f.status = newStatus; saveState(); renderFeedback(); showToast(`${newStatus}`, () => { f.status = old; saveState(); renderFeedback(); }); }
function renderFeedbackImpl() {
  const page = document.getElementById('page-feedback');
  const open = state.feedback.filter(f => f.status === 'Open').length;
  const inProg = state.feedback.filter(f => f.status === 'In Progress').length;
  const resolved = state.feedback.filter(f => f.status === 'Resolved').length;
  const tags = {}; state.feedback.forEach(f => { if (f.tag) tags[f.tag] = (tags[f.tag] || 0) + 1; });
  const topTheme = Object.entries(tags).sort((a, b) => b[1] - a[1])[0];
  const clientOpts = state.clients.map(c => `<option value="${c.id}" ${state.fbFilter.clientId === c.id ? 'selected' : ''}>${escHtml(c.name)}</option>`).join('');
  page.innerHTML = `
    <div class="page-header"><div><h1 class="page-title">Feedback Flywheel</h1><div class="page-sub">Log client feedback. Flip status with one click.</div></div><button class="btn" id="btn-add-feedback">+ Log Feedback</button></div>
    <div class="kpis">
      <div class="kpi ${open ? 'red' : ''}" style="cursor:default"><div class="kpi-head"><span>Open</span><span class="kpi-icon">!</span></div><div class="kpi-value">${open}</div></div>
      <div class="kpi ${inProg ? 'amber' : ''}" style="cursor:default"><div class="kpi-head"><span>In Progress</span><span class="kpi-icon">↻</span></div><div class="kpi-value">${inProg}</div></div>
      <div class="kpi green" style="cursor:default"><div class="kpi-head"><span>Resolved</span><span class="kpi-icon">✓</span></div><div class="kpi-value">${resolved}</div></div>
      <div class="kpi" style="cursor:default"><div class="kpi-head"><span>Top Theme</span><span class="kpi-icon">#</span></div><div class="kpi-value" style="font-size:14px;">${topTheme ? escHtml(topTheme[0]) : '—'}</div></div>
    </div>
    <div class="toolbar">
      <div><h3 style="margin:0;">All Feedback</h3><div class="small muted">Newest first.</div></div>
      <div class="flex-row">
        <select class="sel" id="fb-filter-client" style="width:200px;"><option value="">All clients</option>${clientOpts}</select>
        <select class="sel" id="fb-filter-status" style="width:140px;"><option value="">All statuses</option><option ${state.fbFilter.status === 'Open' ? 'selected' : ''}>Open</option><option ${state.fbFilter.status === 'In Progress' ? 'selected' : ''}>In Progress</option><option ${state.fbFilter.status === 'Resolved' ? 'selected' : ''}>Resolved</option></select>
      </div>
    </div>
    <div class="fb-grid" id="feedback-list"></div>
  `;
  document.getElementById('btn-add-feedback').addEventListener('click', () => openFeedbackModal());
  document.getElementById('fb-filter-client').addEventListener('change', (e) => { state.fbFilter.clientId = e.target.value; saveState(); renderFeedback(); });
  document.getElementById('fb-filter-status').addEventListener('change', (e) => { state.fbFilter.status = e.target.value; saveState(); renderFeedback(); });
  const list = state.feedback.filter(f => { if (state.fbFilter.clientId && f.clientId !== state.fbFilter.clientId) return false; if (state.fbFilter.status && f.status !== state.fbFilter.status) return false; return true; }).sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
  const wrap = document.getElementById('feedback-list');
  if (list.length === 0) { wrap.innerHTML = '<div class="modal-empty">No feedback yet.</div>'; return; }
  wrap.innerHTML = list.map(f => { const c = clientById(f.clientId); if (!c) return ''; const col = clientColor(c.id); return `<div class="fb-card" style="background:${col.bg}"><div class="fb-head"><div class="fb-left">${logoHtml(c, 'sm')}<div><div class="fb-title">${escHtml(c.name)}</div><div class="fb-subtitle">${fmtDate(f.date)}${f.tag ? ' · #' + escHtml(f.tag) : ''}</div></div></div><div class="fb-right"><div class="status-toggle" data-fbid="${f.id}"><button class="status-toggle-btn ${f.status === 'Open' ? 'active open' : ''}" data-st="Open">Open</button><button class="status-toggle-btn ${f.status === 'In Progress' ? 'active progress' : ''}" data-st="In Progress">In Progress</button><button class="status-toggle-btn ${f.status === 'Resolved' ? 'active resolved' : ''}" data-st="Resolved">Resolved</button></div><button class="btn btn-ghost btn-sm" data-edit="${f.id}">Edit</button></div></div><div class="fb-summary">${escHtml(f.summary)}</div>${f.actionItems ? `<div class="fb-detail"><b>Action:</b> ${escHtml(f.actionItems)}</div>` : ''}</div>`; }).join('');
  attachLogoClicks(wrap);
  wrap.querySelectorAll('[data-edit]').forEach(b => b.addEventListener('click', () => openFeedbackModal(b.dataset.edit)));
  wrap.querySelectorAll('.status-toggle').forEach(g => { const fid = g.dataset.fbid; g.querySelectorAll('button').forEach(b => b.addEventListener('click', () => setFeedbackStatus(fid, b.dataset.st))); });
}

// ============ SOPs (Google Docs style — inner sidebar, title, description, body)
function migrateSopToDoc(s) {
  // If SOP has legacy steps, fold them into content
  if (s.steps && s.steps.length && (s.content === undefined || s.content === '')) {
    s.content = s.steps.map((st, i) => {
      let line = (i + 1) + '. ' + (st.text || '');
      if (st.template) line += '\n\nTemplate:\n' + st.template + '\n';
      return line;
    }).join('\n');
  }
  if (s.description === undefined) s.description = '';
  if (s.content === undefined) s.content = '';
  return s;
}
function renderSopsImpl() {
  const page = document.getElementById('page-sops');
  state.sops.forEach(migrateSopToDoc);
  if (!state.activeSopId || !state.sops.find(s => s.id === state.activeSopId)) state.activeSopId = state.sops[0] ? state.sops[0].id : null;
  if (state.sopSidebarHidden === undefined) state.sopSidebarHidden = false;
  const sop = state.sops.find(s => s.id === state.activeSopId);
  const collapsed = !!state.sopSidebarHidden;

  page.innerHTML = `
    <div class="page-header"><div><h1 class="page-title">SOPs</h1><div class="page-sub">Standard operating procedures. Doc-style. Click + Add page to create one.</div></div></div>
    <div class="sop-layout-v2 ${collapsed ? 'collapsed' : ''}" id="sop-layout">
      <aside class="sop-inner-sidebar">
        <div class="sop-inner-head">
          <span class="sop-pages-label">Pages</span>
        </div>
        <div id="sop-pages-list"></div>
        <button class="sop-add-page" id="sop-new"><span style="font-size:14px;">+</span> Add page</button>
      </aside>
      <div class="sop-doc-area" id="sop-doc-area"></div>
    </div>
  `;

  const pagesList = document.getElementById('sop-pages-list');
  pagesList.innerHTML = state.sops.map(s => `<div class="sop-page-item ${s.id === state.activeSopId ? 'active' : ''}" data-sopid="${s.id}"><span class="sop-page-icon">📄</span><span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; flex:1;">${escHtml(s.title || 'Untitled')}</span><button class="sop-page-del" data-sopdel="${s.id}" title="Delete">×</button></div>`).join('');
  pagesList.querySelectorAll('.sop-page-item').forEach(el => el.addEventListener('click', (e) => { if (e.target.closest('[data-sopdel]')) return; state.activeSopId = el.dataset.sopid; saveState(); renderSops(); }));
  pagesList.querySelectorAll('[data-sopdel]').forEach(b => b.addEventListener('click', (e) => { e.stopPropagation(); const id = b.dataset.sopdel; const snap = state.sops.find(s => s.id === id); const idx = state.sops.findIndex(s => s.id === id); state.sops = state.sops.filter(s => s.id !== id); if (state.activeSopId === id) state.activeSopId = state.sops[0] ? state.sops[0].id : null; saveState(); renderSops(); showToast(`${snap.title || 'Untitled'} deleted`, () => { state.sops.splice(idx, 0, snap); state.activeSopId = snap.id; saveState(); renderSops(); }); }));
  document.getElementById('sop-new').addEventListener('click', () => { const ns = { id: 'sop_' + Date.now(), title: 'Untitled', description: '', content: '', createdAt: Date.now() }; state.sops.push(ns); state.activeSopId = ns.id; saveState(); renderSops(); });

  const docArea = document.getElementById('sop-doc-area');
  if (!sop) {
    docArea.innerHTML = `<div class="sop-toggle-bar"><button class="sop-toggle-btn" id="sop-toggle">${collapsed ? '▶ Show sidebar' : '◀ Hide sidebar'}</button></div><div class="modal-empty" style="padding:80px 0;">No SOPs yet. Click + Add page in the sidebar to create one.</div>`;
    document.getElementById('sop-toggle').addEventListener('click', () => { state.sopSidebarHidden = !state.sopSidebarHidden; saveState(); renderSops(); });
    return;
  }

  docArea.innerHTML = `
    <div class="sop-toggle-bar">
      <button class="sop-toggle-btn" id="sop-toggle">${collapsed ? '▶ Show sidebar' : '◀ Hide sidebar'}</button>
      <div style="flex:1;"></div>
      <button class="sop-toggle-btn" id="sop-copy-all" style="color:#4b5563;">📋 Copy all</button>
    </div>
    <input class="sop-title-big" id="sop-title" value="${escAttr(sop.title || '')}" placeholder="Untitled">
    <input class="sop-desc-big" id="sop-desc" value="${escAttr(sop.description || '')}" placeholder="Add a short objective. What is this SOP trying to carry out?">
    <div class="sop-meta-row">
      <div class="sop-meta-author"><div class="sop-avatar">O</div><span>Orlando</span></div>
      <span>·</span>
      <span>Last updated ${fmtDate(new Date().toISOString().split('T')[0])}</span>
    </div>
    <textarea class="sop-body-area" id="sop-content" placeholder="Write, or paste anything here. Steps, scripts, copy templates, anything you want to reference later.">${escHtml(sop.content || '')}</textarea>
  `;
  document.getElementById('sop-toggle').addEventListener('click', () => { state.sopSidebarHidden = !state.sopSidebarHidden; saveState(); renderSops(); });
  document.getElementById('sop-title').addEventListener('input', (e) => { sop.title = e.target.value; saveState(); document.querySelectorAll('.sop-page-item.active span').forEach(s => { if (s.classList.contains('sop-page-icon') || s.classList.contains('sop-page-del')) return; s.textContent = sop.title || 'Untitled'; }); });
  document.getElementById('sop-desc').addEventListener('input', (e) => { sop.description = e.target.value; saveState(); });
  document.getElementById('sop-content').addEventListener('input', (e) => { sop.content = e.target.value; saveState(); });
  document.getElementById('sop-copy-all').addEventListener('click', () => {
    const txt = (sop.title || '') + '\n\n' + (sop.description || '') + '\n\n' + (sop.content || '');
    navigator.clipboard.writeText(txt).then(() => showToast('Copied to clipboard', null)).catch(() => { });
  });
}

// Export / Import JSON
function exportData() {
  const exportObj = { version: STORAGE_KEY, exportedAt: new Date().toISOString(), data: state };
  const blob = new Blob([JSON.stringify(exportObj, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url;
  const today = new Date().toISOString().split('T')[0];
  a.download = `elevate-tracker-${today}.json`;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 100);
  showToast('Data exported. Send the file to your team.', null);
}

function importData() {
  const inp = document.createElement('input');
  inp.type = 'file'; inp.accept = 'application/json,.json';
  inp.onchange = (e) => {
    const f = e.target.files[0]; if (!f) return;
    const r = new FileReader();
    r.onload = () => {
      try {
        const parsed = JSON.parse(r.result);
        const importedState = parsed.data || parsed;
        if (!importedState.clients || !Array.isArray(importedState.clients)) { alert('That file does not look like an Elevate Tracker export.'); return; }
        if (!confirm(`Import data from this file?\n\nClients: ${importedState.clients.length}\n\nYour current data will be backed up first.`)) return;
        localStorage.setItem(STORAGE_KEY + '_backup_' + Date.now(), JSON.stringify(state));
        state = importedState;
        saveState(); renderAll();
        showToast(`Imported ${importedState.clients.length} clients.`, null);
      } catch (err) { alert('Could not read that file. ' + err.message); }
    };
    r.readAsText(f);
  };
  document.body.appendChild(inp); inp.click(); setTimeout(() => inp.remove(), 1000);
}

document.getElementById('btn-export-data').addEventListener('click', exportData);
document.getElementById('btn-import-data').addEventListener('click', importData);

function showOnPageError(msg) {
  const main = document.querySelector('.main') || document.body;
  const banner = document.createElement('div');
  banner.style.cssText = 'position:fixed; top:10px; left:240px; right:10px; background:#fef2f2; border:1px solid #fecaca; color:#b91c1c; padding:14px 16px; border-radius:10px; font-size:13px; z-index:99999; max-width:900px;';
  banner.innerHTML = '<b>Tracker error:</b><br><pre style="white-space:pre-wrap; margin:6px 0 0; font-size:12px;">' + (msg || 'unknown error') + '</pre>';
  main.appendChild(banner);
}

function init() {
  try {
    const todayEl = document.getElementById('today-date');
    if (todayEl) todayEl.textContent = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    showPage();
    if (supabaseEnabled) {
      loadStateRemote().then(remoteState => {
        if (remoteState) {
          state = remoteState;
          currentPage = state.navOrder[0];
          currentSub = state.currentSub || { clients: 'roster', meta: 'inputs' };
          saveStateLocal();
          showPage();
        } else {
          saveStateRemote().catch(err => console.warn('Supabase initial save failed', err));
        }
      }).catch(err => console.warn('Supabase sync failed', err));
      window.addEventListener('focus', refreshStateOnFocus);
    }
  } catch (e) {
    console.error('init/showPage failed:', e);
    showOnPageError('Page render error: ' + (e && e.message ? e.message : String(e)) + '\n' + (e && e.stack ? e.stack.split('\n').slice(0, 5).join('\n') : ''));
  }
}
window.addEventListener('error', e => { showOnPageError('Window error: ' + (e.message || 'unknown') + ' at ' + (e.filename || '?') + ':' + (e.lineno || '?')); });
init();
