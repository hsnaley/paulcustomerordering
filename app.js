/* TeamGrassroots intranet prototype — sample data, in-memory only. */

/* ---------------- data ---------------- */
const STAFF = [
  { id: 'sh', name: 'Sam Hardy', role: 'Sales & Admin' },
  { id: 'lb', name: 'Leah Bright', role: 'Sales & Admin' },
  { id: 'mk', name: 'Marek Kowal', role: 'Production' },
  { id: 'dp', name: 'Dan Price', role: 'Management' }
];
const ME = 'sh';
const initials = n => n.split(' ').map(w => w[0]).join('').toUpperCase();
const staff = id => STAFF.find(s => s.id === id) || { name: 'Unassigned' };

const STAGES = ['New Order','Awaiting Payment','Awaiting Artwork','Artwork Sent','Awaiting Approval',
  'Artwork Approved','Stock Ordered','Stock Received','Ready for Production','In Production',
  'Quality Check','Ready for Dispatch','Dispatched','Completed'];

const COLUMNS = [
  { key: 'New',      label: 'New',              stages: ['New Order'] },
  { key: 'Payment',  label: 'Payment',          stages: ['Awaiting Payment'] },
  { key: 'Artwork',  label: 'Artwork',          stages: ['Awaiting Artwork','Artwork Sent'] },
  { key: 'Approval', label: 'Awaiting Approval',stages: ['Awaiting Approval','Artwork Approved'] },
  { key: 'Stock',    label: 'Stock',            stages: ['Stock Ordered','Stock Received'] },
  { key: 'Prod',     label: 'Production',       stages: ['Ready for Production','In Production','Quality Check'] },
  { key: 'Dispatch', label: 'Dispatch',         stages: ['Ready for Dispatch','Dispatched'] },
  { key: 'Done',     label: 'Complete',         stages: ['Completed'] }
];

const PRODUCTS = [
  { sku:'NIK-DRI-SS-NVY', brand:'Nike',   name:'Dri-FIT Park VII Shirt SS', cat:'Playing kit', supplier:'Kitlocker', buy:14.20, sell:24.95, colours:'Navy, Royal, Red, Black', sizes:'YS–3XL' },
  { sku:'NIK-PARK-SHORT', brand:'Nike',   name:'Park III Shorts',           cat:'Playing kit', supplier:'Kitlocker', buy:8.10,  sell:14.95, colours:'Navy, Black, White', sizes:'YS–3XL' },
  { sku:'ADI-SQ21-JKT',   brand:'adidas', name:'Squadra 21 Track Jacket',   cat:'Training',    supplier:'Prodirect', buy:22.40, sell:38.00, colours:'Navy, Black', sizes:'YS–2XL' },
  { sku:'STA-LIGA-SOCK',  brand:'Stanno', name:'Liga Sock',                 cat:'Playing kit', supplier:'Stanno UK', buy:3.40,  sell:6.95,  colours:'Navy, Sky, Red', sizes:'Junior–Adult' },
  { sku:'PUM-TEAM-BAG',   brand:'PUMA',   name:'teamGOAL Holdall',          cat:'Bags',        supplier:'Prodirect', buy:16.80, sell:29.95, colours:'Black', sizes:'One size' },
  { sku:'AVE-RAIN-JKT',   brand:'Avec',   name:'Pro Rain Jacket',           cat:'Training',    supplier:'Avec',      buy:19.50, sell:34.95, colours:'Navy, Black', sizes:'YS–3XL' },
  { sku:'HUM-CORE-HOOD',  brand:'Hummel', name:'Core Hoodie',               cat:'Leisure',     supplier:'Hummel',    buy:17.90, sell:32.00, colours:'Black, Grey', sizes:'YS–2XL' },
  { sku:'GIV-CAP-ARM',    brand:'Givova', name:'Captain Armband',           cat:'Accessories', supplier:'Givova',    buy:1.90,  sell:4.50,  colours:'Yellow', sizes:'One size' },
  { sku:'TRO-MED-50',     brand:'TG',     name:'50mm Medal + Ribbon',       cat:'Trophies',    supplier:'Bright Awards', buy:1.15, sell:3.25, colours:'Gold, Silver, Bronze', sizes:'50mm' },
  { sku:'DEC-EMB-BADGE',  brand:'TG',     name:'Embroidered club badge',    cat:'Decoration',  supplier:'In-house',  buy:1.10,  sell:3.50,  colours:'—', sizes:'Up to 8cm' },
  { sku:'DEC-DTF-SPON',   brand:'TG',     name:'DTF sponsor print',         cat:'Decoration',  supplier:'In-house',  buy:0.85,  sell:2.95,  colours:'Full colour', sizes:'Up to A4' },
  { sku:'DEC-NUM-BACK',   brand:'TG',     name:'Back number + name',        cat:'Decoration',  supplier:'In-house',  buy:0.70,  sell:2.50,  colours:'White, Navy', sizes:'25cm' }
];
const product = sku => PRODUCTS.find(p => p.sku === sku);

const CLUBS = [
  { id:'c1', name:'Ashfield Rangers JFC', type:'Football club', status:'Active', owner:'sh', created:'12 Mar 2024',
    billing:'Ashfield Community Centre, Mill Lane, Nottingham NG17 2GG', delivery:'Same as billing',
    contacts:[
      { name:'Karen Mills',  role:'Club Secretary', email:'secretary@ashfieldrangers.co.uk', tel:'07700 900312', main:true },
      { name:'Paul Doughty', role:'Treasurer',      email:'treasurer@ashfieldrangers.co.uk', tel:'07700 900411' },
      { name:'Ryan Webb',    role:'U12 Manager',    email:'ryan.webb@outlook.com',           tel:'07700 900518' }
    ],
    notes:[
      { by:'sh', at:'14 Aug 2026 09:12', text:'Karen confirmed 3 new teams for 26/27. Wants same navy/sky colourway as last season.' },
      { by:'lb', at:'02 Jul 2026 15:40', text:'Sponsor changed to Rowley Motors, new logo file needed before any print.' }
    ]
  },
  { id:'c2', name:'Bramley Town FC', type:'Football club', status:'Active', owner:'lb', created:'04 Sep 2023',
    billing:'The Pavilion, Town Road, Leeds LS13 2AA', delivery:'The Pavilion, Town Road, Leeds LS13 2AA',
    contacts:[
      { name:'Jack Verity', role:'Chairman',    email:'jack@bramleytownfc.com', tel:'07700 900122', main:true },
      { name:'Nina Shah',   role:'Kit Officer', email:'kit@bramleytownfc.com',  tel:'07700 900190' }
    ],
    notes:[{ by:'lb', at:'18 Aug 2026 11:05', text:'Chasing balance on TG-INV-000418. Jack away until 22nd.' }]
  },
  { id:'c3', name:'Marsden Athletic', type:'Football club', status:'Active', owner:'sh', created:'21 Jan 2025',
    billing:'Marsden Playing Fields, Huddersfield HD7 6AB', delivery:'12 Sunny Bank, Huddersfield HD7 6QQ',
    contacts:[{ name:'Dee Okoro', role:'Club Secretary', email:'dee@marsdenathletic.co.uk', tel:'07700 900733', main:true }],
    notes:[]
  },
  { id:'c4', name:'Hollins Primary School', type:'School', status:'Active', owner:'lb', created:'09 Nov 2024',
    billing:'Hollins Primary, School Lane, Oldham OL8 3RT', delivery:'Same as billing',
    contacts:[{ name:'Mrs A. Bramall', role:'Business Manager', email:'office@hollinsprimary.sch.uk', tel:'0161 496 0100', main:true }],
    notes:[]
  },
  { id:'c5', name:'Kestrels Netball Club', type:'Sports club', status:'Prospect', owner:'sh', created:'11 Aug 2026',
    billing:'Kestrels NC, Sports Village, Derby DE24 8AA', delivery:'Same as billing',
    contacts:[{ name:'Sophie Ward', role:'Chair', email:'sophie@kestrelsnc.org', tel:'07700 900901', main:true }],
    notes:[{ by:'sh', at:'11 Aug 2026 16:20', text:'Found us through Ashfield. 40 dresses + hoodies, wants quote by end of month.' }]
  }
];
const club = id => CLUBS.find(c => c.id === id);

const ENQUIRIES = [
  { id:'e1', club:'c5', contact:'Sophie Ward', detail:'40 x netball dresses, 40 x hoodies, club logo embroidered', value:2400, owner:'sh', received:'11 Aug 2026', followUp:'22 Aug 2026', stage:'Quote Required' },
  { id:'e2', club:'c3', contact:'Dee Okoro',  detail:'Reserve team away kit, 18 shirts + shorts + socks',        value:980,  owner:'sh', received:'15 Aug 2026', followUp:'21 Aug 2026', stage:'Quote Sent' },
  { id:'e3', club:'c4', contact:'Mrs A. Bramall', detail:'120 x sports day medals engraved',                     value:420,  owner:'lb', received:'18 Aug 2026', followUp:'26 Aug 2026', stage:'Contacted' },
  { id:'e4', club:'c2', contact:'Nina Shah',  detail:'Coaches rain jackets x 6, embroidered initials',           value:260,  owner:'lb', received:'19 Aug 2026', followUp:'20 Aug 2026', stage:'Awaiting Customer' },
  { id:'e5', club:'c1', contact:'Ryan Webb',  detail:'U12 goalkeeper kit + gloves',                              value:180,  owner:'sh', received:'20 Aug 2026', followUp:'27 Aug 2026', stage:'New Enquiry' }
];

const QUOTES = [
  { id:'q1', ref:'TG-Q-000241', club:'c3', status:'Sent',     date:'16 Aug 2026', total:1176.00, owner:'sh',
    lines:[ {sku:'NIK-DRI-SS-NVY',qty:18,price:24.95},{sku:'NIK-PARK-SHORT',qty:18,price:14.95},{sku:'STA-LIGA-SOCK',qty:18,price:6.95},{sku:'DEC-EMB-BADGE',qty:18,price:3.50},{sku:'DEC-NUM-BACK',qty:18,price:2.50} ],
    discount:5, delivery:9.50 },
  { id:'q2', ref:'TG-Q-000240', club:'c5', status:'Draft',    date:'14 Aug 2026', total:2388.00, owner:'sh',
    lines:[ {sku:'HUM-CORE-HOOD',qty:40,price:32.00},{sku:'DEC-EMB-BADGE',qty:40,price:3.50} ], discount:0, delivery:12.00 },
  { id:'q3', ref:'TG-Q-000238', club:'c1', status:'Accepted', date:'05 Aug 2026', total:3624.60, owner:'sh',
    lines:[ {sku:'NIK-DRI-SS-NVY',qty:66,price:24.95},{sku:'NIK-PARK-SHORT',qty:66,price:14.95},{sku:'STA-LIGA-SOCK',qty:66,price:6.95},{sku:'DEC-EMB-BADGE',qty:66,price:3.50},{sku:'DEC-DTF-SPON',qty:66,price:2.95} ], discount:7.5, delivery:0 },
  { id:'q4', ref:'TG-Q-000236', club:'c2', status:'Lost',     date:'28 Jul 2026', total:845.00,  owner:'lb',
    lines:[ {sku:'PUM-TEAM-BAG',qty:22,price:29.95} ], discount:0, delivery:9.50 }
];

let ORDERS = [
  { id:'o1', ref:'TG-ORD-000318', club:'c1', stage:'In Production', owner:'sh', quote:'TG-Q-000238',
    placed:'07 Aug 2026', due:'28 Aug 2026', value:3624.60, paid:1812.30, cost:2189.00,
    artwork:'Approved', courier:'DPD', tracking:'—', parcels:3,
    items:[ {sku:'NIK-DRI-SS-NVY',qty:66,price:24.95},{sku:'NIK-PARK-SHORT',qty:66,price:14.95},{sku:'STA-LIGA-SOCK',qty:66,price:6.95},{sku:'DEC-EMB-BADGE',qty:66,price:3.50},{sku:'DEC-DTF-SPON',qty:66,price:2.95} ],
    files:[ {n:'ashfield-badge-2026.ai',k:'Club badge',s:'Approved'},{n:'rowley-motors-logo.eps',k:'Sponsor logo',s:'Approved'},{n:'ashfield-home-mockup.pdf',k:'Kit mock-up',s:'Approved'},{n:'embroidery-proof-v2.png',k:'Embroidery proof',s:'Approved'} ],
    activity:[
      {who:'mk',at:'20 Aug 09:02',text:'Embroidery run 1 of 3 complete (22 shirts)'},
      {who:'sh',at:'18 Aug 14:20',text:'Stock received from Kitlocker, 66/66 checked in'},
      {who:'sh',at:'12 Aug 10:11',text:'Artwork approved by Karen Mills'},
      {who:'sh',at:'07 Aug 16:45',text:'Quote TG-Q-000238 converted to order, 50% deposit taken'}
    ],
    notes:[{by:'sh',at:'18 Aug 2026 14:22',text:'Karen asked for 3 spare shirts in XL, added to production job.'}] },

  { id:'o2', ref:'TG-ORD-000317', club:'c2', stage:'Awaiting Approval', owner:'lb', quote:'TG-Q-000234',
    placed:'05 Aug 2026', due:'29 Aug 2026', value:1489.40, paid:0, cost:842.00,
    artwork:'Sent to Customer', courier:'DPD', tracking:'—', parcels:2,
    items:[ {sku:'ADI-SQ21-JKT',qty:24,price:38.00},{sku:'DEC-EMB-BADGE',qty:24,price:3.50},{sku:'DEC-NUM-BACK',qty:24,price:2.50} ],
    files:[ {n:'bramley-crest.svg',k:'Club badge',s:'Approved'},{n:'jacket-proof-v1.pdf',k:'Print proof',s:'Sent to Customer'} ],
    activity:[
      {who:'lb',at:'19 Aug 11:30',text:'Proof v1 emailed to Nina Shah'},
      {who:'lb',at:'05 Aug 09:15',text:'Order created from quote'}
    ], notes:[] },

  { id:'o3', ref:'TG-ORD-000316', club:'c4', stage:'Awaiting Payment', owner:'lb', quote:'TG-Q-000231',
    placed:'01 Aug 2026', due:'05 Sep 2026', value:498.00, paid:0, cost:214.00,
    artwork:'Artwork Required', courier:'Royal Mail', tracking:'—', parcels:1,
    items:[ {sku:'TRO-MED-50',qty:120,price:3.25},{sku:'DEC-EMB-BADGE',qty:0,price:0} ],
    files:[], activity:[{who:'lb',at:'01 Aug 12:00',text:'Order created, proforma sent'}], notes:[] },

  { id:'o4', ref:'TG-ORD-000315', club:'c3', stage:'Stock Ordered', owner:'sh', quote:'TG-Q-000229',
    placed:'30 Jul 2026', due:'26 Aug 2026', value:1142.20, paid:1142.20, cost:701.00,
    artwork:'Approved', courier:'DPD', tracking:'—', parcels:2,
    items:[ {sku:'AVE-RAIN-JKT',qty:20,price:34.95},{sku:'DEC-EMB-BADGE',qty:20,price:3.50},{sku:'PUM-TEAM-BAG',qty:10,price:29.95} ],
    files:[{n:'marsden-badge.png',k:'Club badge',s:'Approved'}],
    activity:[{who:'sh',at:'12 Aug 10:00',text:'PO 4471 raised with Avec, ETA 22 Aug'}], notes:[] },

  { id:'o5', ref:'TG-ORD-000314', club:'c1', stage:'Ready for Dispatch', owner:'sh', quote:'TG-Q-000226',
    placed:'22 Jul 2026', due:'21 Aug 2026', value:642.90, paid:642.90, cost:361.00,
    artwork:'Approved', courier:'DPD', tracking:'—', parcels:1,
    items:[ {sku:'HUM-CORE-HOOD',qty:15,price:32.00},{sku:'DEC-EMB-BADGE',qty:15,price:3.50} ],
    files:[{n:'ashfield-badge-2026.ai',k:'Club badge',s:'Approved'}],
    activity:[{who:'mk',at:'19 Aug 16:10',text:'QC passed, boxed and labelled'}], notes:[] },

  { id:'o6', ref:'TG-ORD-000313', club:'c2', stage:'Dispatched', owner:'lb', quote:'TG-Q-000222',
    placed:'14 Jul 2026', due:'18 Aug 2026', value:389.50, paid:389.50, cost:198.00,
    artwork:'Approved', courier:'DPD', tracking:'DPD 5512 8834 9021', parcels:1,
    items:[ {sku:'STA-LIGA-SOCK',qty:40,price:6.95},{sku:'GIV-CAP-ARM',qty:12,price:4.50} ],
    files:[], activity:[{who:'lb',at:'18 Aug 08:40',text:'Collected by DPD, tracking added'}], notes:[] },

  { id:'o7', ref:'TG-ORD-000311', club:'c3', stage:'Completed', owner:'sh', quote:'TG-Q-000218',
    placed:'02 Jul 2026', due:'25 Jul 2026', value:2210.00, paid:2210.00, cost:1288.00,
    artwork:'Approved', courier:'DPD', tracking:'DPD 5512 7710 4402', parcels:4,
    items:[ {sku:'NIK-DRI-SS-NVY',qty:44,price:24.95},{sku:'NIK-PARK-SHORT',qty:44,price:14.95},{sku:'DEC-EMB-BADGE',qty:44,price:3.50} ],
    files:[], activity:[{who:'sh',at:'25 Jul 15:00',text:'Delivered and signed for. Order completed.'}], notes:[] },

  { id:'o8', ref:'TG-ORD-000319', club:'c4', stage:'New Order', owner:'lb', quote:'—',
    placed:'20 Aug 2026', due:'12 Sep 2026', value:268.00, paid:0, cost:118.00,
    artwork:'Artwork Required', courier:'—', tracking:'—', parcels:1,
    items:[ {sku:'HUM-CORE-HOOD',qty:8,price:32.00} ],
    files:[], activity:[{who:'lb',at:'20 Aug 15:12',text:'Order raised from phone call'}], notes:[] }
];
const order = id => ORDERS.find(o => o.id === id);

const INVOICES = [
  { ref:'TG-INV-000421', order:'o1', club:'c1', date:'07 Aug 2026', due:'21 Aug 2026', total:3624.60, paid:1812.30, status:'Part Paid' },
  { ref:'TG-INV-000420', order:'o4', club:'c3', date:'30 Jul 2026', due:'13 Aug 2026', total:1142.20, paid:1142.20, status:'Paid' },
  { ref:'TG-INV-000419', order:'o3', club:'c4', date:'01 Aug 2026', due:'15 Aug 2026', total:498.00,  paid:0,       status:'Overdue' },
  { ref:'TG-INV-000418', order:'o6', club:'c2', date:'14 Jul 2026', due:'28 Jul 2026', total:389.50,  paid:389.50,  status:'Paid' },
  { ref:'TG-INV-000417', order:'o7', club:'c3', date:'02 Jul 2026', due:'16 Jul 2026', total:2210.00, paid:2210.00, status:'Paid' },
  { ref:'TG-INV-000422', order:'o5', club:'c1', date:'12 Aug 2026', due:'26 Aug 2026', total:642.90,  paid:642.90,  status:'Paid' }
];

let JOBS = [
  { id:'j1', order:'o1', type:'Embroidery', detail:'66 x badge left chest, 3 spare XL', due:'22 Aug 2026', priority:'High',   status:'In Progress', who:'mk' },
  { id:'j2', order:'o1', type:'DTF print',  detail:'66 x Rowley Motors front + back numbers', due:'25 Aug 2026', priority:'High', status:'Queued', who:'mk' },
  { id:'j3', order:'o5', type:'Heat press', detail:'15 x hoodie badge', due:'20 Aug 2026', priority:'Normal', status:'Complete',   who:'mk' },
  { id:'j4', order:'o3', type:'Engraving',  detail:'120 x medal centres, sports day 2026', due:'02 Sep 2026', priority:'Low', status:'Queued', who:'mk' },
  { id:'j5', order:'o4', type:'Embroidery', detail:'20 x rain jacket badge (awaiting stock)', due:'25 Aug 2026', priority:'Normal', status:'Blocked', who:'mk' }
];

let TASKS = [
  { id:'t1', text:'Chase artwork approval for Bramley Town jackets', who:'sh', due:'today',    pri:'High',   done:false, link:'o2' },
  { id:'t2', text:'Call Sophie Ward with netball quote',           who:'sh', due:'today',    pri:'High',   done:false, link:'c5' },
  { id:'t3', text:'Chase overdue invoice TG-INV-000419',           who:'sh', due:'overdue',  pri:'High',   done:false, link:'inv' },
  { id:'t4', text:'Book DPD collection for TG-ORD-000314',         who:'sh', due:'today',    pri:'Normal', done:false, link:'o5' },
  { id:'t5', text:'Confirm Avec stock ETA with supplier',          who:'sh', due:'tomorrow', pri:'Normal', done:false, link:'o4' },
  { id:'t6', text:'Send follow-up on Marsden reserve kit quote',   who:'sh', due:'tomorrow', pri:'Normal', done:false, link:'q1' },
  { id:'t7', text:'Update Hollins Primary delivery address',       who:'lb', due:'this week',pri:'Low',    done:false, link:'c4' }
];

let IDEAS = [
  { text:'Auto-reminder to customer 3 days after proof is sent', by:'Leah Bright', date:'12 Aug 2026', pri:'High',   status:'Under review' },
  { text:'Barcode scan on stock-in to check off supplier POs',    by:'Marek Kowal', date:'02 Aug 2026', pri:'Medium', status:'Backlog' },
  { text:'Club-level size grid saved on the record for reorders', by:'Sam Hardy',   date:'28 Jul 2026', pri:'High',   status:'Planned' }
];

/* ---------------- helpers ---------------- */
const $ = s => document.querySelector(s);
const money = n => '£' + Number(n).toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const money0 = n => '£' + Math.round(n).toLocaleString('en-GB');
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;' }[c]));
function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('on'); clearTimeout(t._x); t._x = setTimeout(() => t.classList.remove('on'), 2200); }

const orderNet = o => o.items.reduce((s, i) => s + i.qty * i.price, 0);
const orderMargin = o => { const net = orderNet(o); return { net, cost: o.cost, gp: net - o.cost, pct: net ? ((net - o.cost) / net) * 100 : 0 }; };
const colOf = stage => (COLUMNS.find(c => c.stages.includes(stage)) || COLUMNS[0]).key;

function stageTag(stage) {
  const map = { 'New Order':'t-grey','Awaiting Payment':'t-red','Awaiting Artwork':'t-amber','Artwork Sent':'t-amber',
    'Awaiting Approval':'t-amber','Artwork Approved':'t-blue','Stock Ordered':'t-violet','Stock Received':'t-violet',
    'Ready for Production':'t-teal','In Production':'t-teal','Quality Check':'t-teal','Ready for Dispatch':'t-blue',
    'Dispatched':'t-blue','Completed':'t-green' };
  return `<span class="tag ${map[stage] || 't-grey'}">${stage}</span>`;
}
function payTag(o) {
  if (o.paid >= o.value) return '<span class="tag t-green">Paid</span>';
  if (o.paid > 0) return '<span class="tag t-amber">Part paid</span>';
  return '<span class="tag t-red">Unpaid</span>';
}
function invTag(s) {
  const m = { 'Paid':'t-green','Part Paid':'t-amber','Overdue':'t-red','Sent':'t-blue','Draft':'t-grey','Cancelled':'t-grey' };
  return `<span class="tag ${m[s]}">${s}</span>`;
}
function artTag(s) {
  const m = { 'Approved':'t-green','Sent to Customer':'t-amber','Changes Requested':'t-red','Proof Created':'t-blue','Artwork Required':'t-grey' };
  return `<span class="tag ${m[s] || 't-grey'}">${s}</span>`;
}

/* ---------------- routing ---------------- */
const NAV = [
  { g:'Daily' },
  { id:'dash',     icon:'◧', label:'My dashboard' },
  { id:'board',    icon:'▤', label:'Order board', count:() => ORDERS.filter(o => o.stage !== 'Completed').length },
  { id:'tasks',    icon:'✓', label:'Tasks', count:() => TASKS.filter(t => t.who === ME && !t.done).length },
  { g:'Sales' },
  { id:'clubs',    icon:'⬢', label:'Customers & clubs' },
  { id:'enquiries',icon:'✦', label:'Enquiries', count:() => ENQUIRIES.length },
  { id:'quotes',   icon:'▦', label:'Quotes' },
  { id:'newquote', icon:'＋', label:'Build a quote' },
  { g:'Delivery' },
  { id:'production',icon:'⚙', label:'Production queue' },
  { id:'invoices', icon:'£', label:'Invoices & payments' },
  { id:'products', icon:'▣', label:'Products & SKUs' },
  { g:'Business' },
  { id:'mgmt',     icon:'◈', label:'Management' },
  { id:'ideas',    icon:'☼', label:'Ideas board' },
  { id:'scope',    icon:'❯', label:'Delivery plan' }
];

function renderNav() {
  const cur = (location.hash || '#/dash').split('/')[1].split('?')[0];
  $('#nav').innerHTML = NAV.map(n => n.g
    ? `<div class="lbl">${n.g}</div>`
    : `<a href="#/${n.id}" class="${cur === n.id ? 'on' : ''}"><span class="ico">${n.icon}</span>${n.label}${n.count ? `<span class="cnt">${n.count()}</span>` : ''}</a>`
  ).join('');
}

const VIEWS = {};
function go(hash) { location.hash = hash; }
function route() {
  const parts = (location.hash || '#/dash').replace('#/', '').split('/');
  const view = VIEWS[parts[0]] ? parts[0] : 'dash';
  $('#page').innerHTML = VIEWS[view](parts[1]);
  renderNav();
  window.scrollTo(0, 0);
  if (view === 'board') wireBoard();
  if (view === 'newquote') qbRender();
}
window.addEventListener('hashchange', route);

/* ---------------- views ---------------- */
VIEWS.dash = () => {
  const mine = ORDERS.filter(o => o.owner === ME && o.stage !== 'Completed');
  const needsAction = ORDERS.filter(o => ['Awaiting Payment','Awaiting Artwork','Awaiting Approval','New Order'].includes(o.stage));
  const overdueInv = INVOICES.filter(i => i.status === 'Overdue');
  const myTasks = TASKS.filter(t => t.who === ME && !t.done);
  const dueJobs = JOBS.filter(j => j.status !== 'Complete');

  return `
  <div class="phead"><div><h1>Good morning, Sam</h1><p>Thursday 21 August 2026 · everything below needs you or your team today.</p></div>
    <div class="actions"><button class="btn" onclick="go('#/newquote')">New quote</button><button class="btn pri" onclick="toast('Prototype: this would open the new-order form')">New order</button></div></div>

  <div class="grid g4" style="margin-bottom:14px">
    ${kpi('Orders needing action', needsAction.length, `${ORDERS.filter(o=>o.stage!=='Completed').length} live orders in total`)}
    ${kpi('Artwork approvals out', ORDERS.filter(o=>o.artwork==='Sent to Customer').length, 'Oldest waiting 2 days')}
    ${kpi('My tasks today', myTasks.filter(t=>t.due==='today').length, `<b class="dn">${myTasks.filter(t=>t.due==='overdue').length} overdue</b>`)}
    ${kpi('Overdue invoices', money0(overdueInv.reduce((s,i)=>s+i.total-i.paid,0)), `${overdueInv.length} invoice past due`)}
  </div>

  <div class="grid g21">
    <div class="card">
      <div class="hd"><h2>Orders requiring action</h2><div class="actions"><button class="btn sm" onclick="go('#/board')">Open board</button></div></div>
      <table>
        <thead><tr><th>Order</th><th>Club</th><th>Stage</th><th>Payment</th><th>Due</th><th class="num">Value</th></tr></thead>
        <tbody>${needsAction.map(o => `<tr class="click" onclick="go('#/order/${o.id}')">
          <td><b class="mono">${o.ref}</b></td><td>${club(o.club).name}</td><td>${stageTag(o.stage)}</td>
          <td>${payTag(o)}</td><td>${o.due}</td><td class="num"><b>${money(o.value)}</b></td></tr>`).join('')}</tbody>
      </table>
    </div>

    <div class="card">
      <div class="hd"><h2>My tasks</h2><div class="actions"><button class="btn sm" onclick="go('#/tasks')">All</button></div></div>
      <div class="bd" style="padding:8px 16px 16px">
        ${myTasks.map(t => `<label style="display:flex;gap:9px;align-items:flex-start;padding:8px 0;border-bottom:1px solid var(--line-2);font-size:13.5px;cursor:pointer">
          <input type="checkbox" onchange="doneTask('${t.id}')" style="margin-top:3px">
          <span><span style="color:var(--ink)">${t.text}</span><br>
          <span style="font-size:11.5px;color:var(--muted)">${t.due === 'overdue' ? '<b style="color:var(--red)">Overdue</b>' : 'Due ' + t.due} · ${t.pri} priority</span></span></label>`).join('')}
      </div>
    </div>
  </div>

  <div class="grid g2" style="margin-top:14px">
    <div class="card">
      <div class="hd"><h2>Artwork waiting on someone</h2></div>
      <table><thead><tr><th>Order</th><th>Club</th><th>Artwork stage</th><th>Waiting on</th></tr></thead><tbody>
        ${ORDERS.filter(o => o.artwork !== 'Approved').map(o => `<tr class="click" onclick="go('#/order/${o.id}')">
          <td><b class="mono">${o.ref}</b></td><td>${club(o.club).name}</td><td>${artTag(o.artwork)}</td>
          <td>${o.artwork === 'Sent to Customer' ? 'Customer' : 'Us'}</td></tr>`).join('')}
      </tbody></table>
    </div>
    <div class="card">
      <div class="hd"><h2>Production due this week</h2><div class="actions"><button class="btn sm" onclick="go('#/production')">Queue</button></div></div>
      <table><thead><tr><th>Job</th><th>Order</th><th>Due</th><th>Status</th></tr></thead><tbody>
        ${dueJobs.map(j => `<tr class="click" onclick="go('#/order/${j.order}')"><td><b>${j.type}</b><br><span style="font-size:12px;color:var(--muted)">${j.detail}</span></td>
        <td class="mono">${order(j.order).ref}</td><td>${j.due}</td><td>${jobTag(j.status)}</td></tr>`).join('')}
      </tbody></table>
    </div>
  </div>`;
};

const kpi = (lab, val, sub) => `<div class="card kpi"><div class="lab">${lab}</div><div class="val">${val}</div><div class="sub">${sub}</div></div>`;
const jobTag = s => `<span class="tag ${{ 'Complete':'t-green','In Progress':'t-teal','Queued':'t-grey','Blocked':'t-red' }[s]}">${s}</span>`;

VIEWS.board = () => `
  <div class="phead"><div><h1>Order board</h1><p>Every live order, by stage. Drag a card to move it, and the stage, the audit trail and the customer's status all update together.</p></div>
  <div class="actions"><button class="btn" onclick="toast('Prototype: stage columns are configurable per order type')">Configure stages</button></div></div>
  <div class="hint">Try it: drag <b>TG-ORD-000317</b> from Awaiting Approval into Stock. Click any card to open the full order.</div>
  <div class="board">${COLUMNS.map(c => {
    const os = ORDERS.filter(o => colOf(o.stage) === c.key);
    return `<div class="col" data-col="${c.key}">
      <div class="ch"><b>${c.label}</b><span class="n">${os.length}</span></div>
      <div class="cb" data-drop="${c.key}">${os.map(ocard).join('') || '<div class="empty" style="padding:14px;font-size:12px">Nothing here</div>'}</div>
    </div>`;
  }).join('')}</div>`;

function ocard(o) {
  const done = o.paid >= o.value;
  const pct = Math.round((STAGES.indexOf(o.stage) + 1) / STAGES.length * 100);
  return `<div class="ocard" draggable="true" data-id="${o.id}" onclick="go('#/order/${o.id}')">
    <div class="ref">${o.ref}</div>
    <div class="cn">${club(o.club).name}</div>
    <div style="font-size:12px;color:var(--muted)">${o.items.filter(i=>i.qty).length} line${o.items.filter(i=>i.qty).length === 1 ? '' : 's'} · due ${o.due}</div>
    <div class="meta">${stageTag(o.stage)} ${done ? '<span class="tag t-green">Paid</span>' : (o.paid ? '<span class="tag t-amber">Part paid</span>' : '<span class="tag t-red">Unpaid</span>')}</div>
    <div class="meta" style="margin-top:8px"><div class="av">${initials(staff(o.owner).name)}</div>
      <b style="color:var(--ink);font-size:13px">${money(o.value)}</b>
      <span style="margin-left:auto;font-size:11px;color:var(--muted)">${pct}%</span></div>
  </div>`;
}

function wireBoard() {
  let dragId = null;
  document.querySelectorAll('.ocard').forEach(el => {
    el.addEventListener('dragstart', e => { dragId = el.dataset.id; el.classList.add('drag'); e.dataTransfer.effectAllowed = 'move'; });
    el.addEventListener('dragend', () => el.classList.remove('drag'));
  });
  document.querySelectorAll('[data-drop]').forEach(zone => {
    zone.addEventListener('dragover', e => { e.preventDefault(); zone.parentElement.classList.add('over'); });
    zone.addEventListener('dragleave', () => zone.parentElement.classList.remove('over'));
    zone.addEventListener('drop', e => {
      e.preventDefault(); zone.parentElement.classList.remove('over');
      const o = order(dragId); if (!o) return;
      const col = COLUMNS.find(c => c.key === zone.dataset.drop);
      if (col.stages.includes(o.stage)) return;
      o.stage = col.stages[0];
      o.activity.unshift({ who: ME, at: '21 Aug 09:40', text: `Stage changed to ${o.stage} by Sam Hardy` });
      toast(`${o.ref} moved to ${o.stage}`);
      route();
    });
  });
}

VIEWS.order = id => {
  const o = order(id) || ORDERS[0];
  const c = club(o.club);
  const m = orderMargin(o);
  const inv = INVOICES.find(i => i.order === o.id);
  const jobs = JOBS.filter(j => j.order === o.id);
  const idx = STAGES.indexOf(o.stage);
  return `
  <div class="bcrumb"><a onclick="go('#/board')">Order board</a> › ${o.ref}</div>
  <div class="phead"><div><h1>${o.ref} · ${c.name}</h1>
    <p>Raised ${o.placed} · due ${o.due} · account manager ${staff(o.owner).name} · from quote <span class="mono">${o.quote}</span></p></div>
    <div class="actions">
      <button class="btn" onclick="toast('Prototype: generates a branded PDF works order')">Print works order</button>
      <button class="btn" onclick="advance('${o.id}')">Advance stage →</button>
    </div></div>

  <div class="card" style="margin-bottom:14px"><div class="bd">
    <div class="stagepath">${STAGES.map((s, i) => `<i class="${i < idx ? 'done' : i === idx ? 'now' : ''}">${s}</i>`).join('<span>›</span>')}</div>
  </div></div>

  <div class="grid g4" style="margin-bottom:14px">
    ${kpi('Order value', money(o.value), `${o.items.filter(i=>i.qty).length} lines`)}
    ${kpi('Paid', money(o.paid), o.paid >= o.value ? '<b class="up">Settled</b>' : `Outstanding ${money(o.value - o.paid)}`)}
    ${kpi('Estimated cost', money(m.cost), 'Goods + decoration')}
    ${kpi('Gross profit', money(m.gp), `<b class="up">${m.pct.toFixed(1)}% margin</b>`)}
  </div>

  <div class="grid g21">
    <div>
      <div class="card" style="margin-bottom:14px">
        <div class="hd"><h2>Order lines</h2><div class="actions"><button class="btn sm" onclick="toast('Prototype: add line')">Add line</button></div></div>
        <table><thead><tr><th>SKU</th><th>Product</th><th class="num">Qty</th><th class="num">Unit</th><th class="num">Line</th></tr></thead>
        <tbody>${o.items.filter(i => i.qty).map(i => { const p = product(i.sku); return `<tr>
          <td class="mono">${i.sku}</td><td><b>${p.name}</b><br><span style="font-size:12px;color:var(--muted)">${p.brand} · ${p.colours.split(',')[0]}</span></td>
          <td class="num">${i.qty}</td><td class="num">${money(i.price)}</td><td class="num"><b>${money(i.qty * i.price)}</b></td></tr>`; }).join('')}</tbody></table>
      </div>

      <div class="card" style="margin-bottom:14px">
        <div class="hd"><h2>Artwork &amp; documents</h2><span class="tag ${o.artwork==='Approved'?'t-green':'t-amber'}">${o.artwork}</span>
          <div class="actions">
            ${o.artwork !== 'Approved' ? `<button class="btn sm" onclick="approveArt('${o.id}')">Mark approved</button>` : ''}
            <button class="btn sm" onclick="toast('Prototype: file upload')">Upload</button></div></div>
        <div class="bd"><div class="grid g4">
          ${o.files.length ? o.files.map(f => `<div class="art"><div class="ph">${f.k.includes('badge')||f.k.includes('logo')?'🛡':'🖼'}</div>
            <div class="m"><b style="color:var(--ink)">${f.n}</b><br><span style="color:var(--muted)">${f.k}</span><br>
            <span class="tag ${f.s==='Approved'?'t-green':'t-amber'}" style="margin-top:5px">${f.s}</span></div></div>`).join('')
            : '<div class="empty" style="grid-column:1/-1">No artwork uploaded yet. Badge, sponsor logo and proof files live here.</div>'}
        </div></div>
      </div>

      <div class="card">
        <div class="hd"><h2>Activity &amp; internal notes</h2></div>
        <div class="bd">
          ${o.notes.map(n => `<div class="note"><div class="m">${staff(n.by).name} · ${n.at}</div>${n.text}</div>`).join('')}
          <div style="display:flex;gap:8px;margin:6px 0 16px">
            <input id="noteBox" placeholder="Add an internal note…" style="flex:1;padding:8px 10px;border:1px solid var(--line);border-radius:8px">
            <button class="btn" onclick="addNote('${o.id}')">Add note</button>
          </div>
          <ul class="feed">${o.activity.map(a => `<li><div class="av">${initials(staff(a.who).name)}</div><div>${a.text}</div><div class="t">${a.at}</div></li>`).join('')}</ul>
        </div>
      </div>
    </div>

    <div>
      <div class="card" style="margin-bottom:14px">
        <div class="hd"><h2>Customer</h2><div class="actions"><button class="btn sm" onclick="go('#/club/${c.id}')">Open record</button></div></div>
        <div class="bd"><dl class="kv">
          <dt>Club</dt><dd><b>${c.name}</b></dd>
          <dt>Main contact</dt><dd>${c.contacts[0].name} · ${c.contacts[0].role}</dd>
          <dt>Email</dt><dd>${c.contacts[0].email}</dd>
          <dt>Telephone</dt><dd>${c.contacts[0].tel}</dd>
          <dt>Delivery</dt><dd>${c.delivery}</dd>
        </dl></div>
      </div>

      <div class="card" style="margin-bottom:14px">
        <div class="hd"><h2>Financial</h2></div>
        <div class="bd"><dl class="kv">
          <dt>Quote</dt><dd class="mono">${o.quote}</dd>
          <dt>Invoice</dt><dd class="mono">${inv ? inv.ref : 'Not raised'}</dd>
          <dt>Status</dt><dd>${inv ? invTag(inv.status) : '—'}</dd>
          <dt>Paid</dt><dd>${money(o.paid)}</dd>
          <dt>Outstanding</dt><dd><b>${money(o.value - o.paid)}</b></dd>
          <dt>Margin</dt><dd>${money(m.gp)} (${m.pct.toFixed(1)}%)</dd>
        </dl>
        <div style="display:flex;gap:8px;margin-top:12px">
          <button class="btn sm" onclick="pay('${o.id}')">Record payment</button>
          <button class="btn sm" onclick="toast('Prototype: generates branded PDF invoice')">Invoice PDF</button></div>
        </div>
      </div>

      <div class="card" style="margin-bottom:14px">
        <div class="hd"><h2>Production</h2></div>
        <div class="bd">${jobs.length ? jobs.map(j => `<div class="note"><div class="m">${j.type} · due ${j.due} · ${j.priority} priority</div>
          ${j.detail}<div style="margin-top:6px">${jobTag(j.status)}</div></div>`).join('') : '<div class="empty">No production jobs on this order.</div>'}</div>
      </div>

      <div class="card">
        <div class="hd"><h2>Delivery</h2></div>
        <div class="bd"><dl class="kv">
          <dt>Address</dt><dd>${c.delivery}</dd>
          <dt>Courier</dt><dd>${o.courier}</dd>
          <dt>Parcels</dt><dd>${o.parcels}</dd>
          <dt>Tracking</dt><dd class="mono">${o.tracking}</dd>
        </dl></div>
      </div>
    </div>
  </div>`;
};

VIEWS.clubs = () => `
  <div class="phead"><div><h1>Customers &amp; clubs</h1><p>One record per club, with every contact, quote, order, invoice and file underneath it.</p></div>
  <div class="actions"><button class="btn pri" onclick="toast('Prototype: new customer form')">New customer</button></div></div>
  <div class="card"><table>
    <thead><tr><th>Club / customer</th><th>Type</th><th>Contacts</th><th>Account manager</th><th>Live orders</th><th class="num">Lifetime value</th><th>Status</th></tr></thead>
    <tbody>${CLUBS.map(c => {
      const os = ORDERS.filter(o => o.club === c.id);
      return `<tr class="click" onclick="go('#/club/${c.id}')">
        <td><b>${c.name}</b><br><span style="font-size:12px;color:var(--muted)">Customer since ${c.created}</span></td>
        <td>${c.type}</td><td>${c.contacts.length}</td><td>${staff(c.owner).name}</td>
        <td>${os.filter(o => o.stage !== 'Completed').length}</td>
        <td class="num"><b>${money(os.reduce((s, o) => s + o.value, 0))}</b></td>
        <td><span class="tag ${c.status === 'Active' ? 't-green' : 't-blue'}">${c.status}</span></td></tr>`;
    }).join('')}</tbody></table></div>`;

VIEWS.club = id => {
  const c = club(id) || CLUBS[0];
  const os = ORDERS.filter(o => o.club === c.id);
  const qs = QUOTES.filter(q => q.club === c.id);
  const is = INVOICES.filter(i => i.club === c.id);
  return `
  <div class="bcrumb"><a onclick="go('#/clubs')">Customers</a> › ${c.name}</div>
  <div class="phead"><div><h1>${c.name}</h1><p>${c.type} · customer since ${c.created} · account manager ${staff(c.owner).name}</p></div>
    <div class="actions"><button class="btn" onclick="go('#/newquote')">New quote</button><button class="btn pri" onclick="toast('Prototype: new order for this club')">New order</button></div></div>

  <div class="grid g4" style="margin-bottom:14px">
    ${kpi('Lifetime value', money0(os.reduce((s, o) => s + o.value, 0)), `${os.length} orders`)}
    ${kpi('Live orders', os.filter(o => o.stage !== 'Completed').length, 'In progress now')}
    ${kpi('Outstanding', money0(is.reduce((s, i) => s + i.total - i.paid, 0)), `${is.filter(i => i.status !== 'Paid').length} unpaid invoice(s)`)}
    ${kpi('Avg margin', (os.length ? (os.reduce((s, o) => s + orderMargin(o).pct, 0) / os.length).toFixed(1) : '0') + '%', 'Across all orders')}
  </div>

  <div class="grid g21">
    <div>
      <div class="card" style="margin-bottom:14px">
        <div class="hd"><h2>Contacts</h2><div class="actions"><button class="btn sm" onclick="toast('Prototype: add contact')">Add contact</button></div></div>
        <table><thead><tr><th>Name</th><th>Role</th><th>Email</th><th>Telephone</th></tr></thead><tbody>
          ${c.contacts.map(k => `<tr><td><b>${k.name}</b> ${k.main ? '<span class="tag t-green">Main</span>' : ''}</td><td>${k.role}</td><td>${k.email}</td><td>${k.tel}</td></tr>`).join('')}
        </tbody></table>
      </div>

      <div class="card" style="margin-bottom:14px">
        <div class="hd"><h2>Orders</h2></div>
        <table><thead><tr><th>Order</th><th>Stage</th><th>Placed</th><th>Payment</th><th class="num">Value</th></tr></thead><tbody>
          ${os.map(o => `<tr class="click" onclick="go('#/order/${o.id}')"><td class="mono"><b>${o.ref}</b></td><td>${stageTag(o.stage)}</td>
            <td>${o.placed}</td><td>${payTag(o)}</td><td class="num"><b>${money(o.value)}</b></td></tr>`).join('') || '<tr><td colspan="5" class="empty">No orders yet</td></tr>'}
        </tbody></table>
      </div>

      <div class="card">
        <div class="hd"><h2>Quotes &amp; invoices</h2></div>
        <table><thead><tr><th>Reference</th><th>Type</th><th>Date</th><th>Status</th><th class="num">Total</th></tr></thead><tbody>
          ${qs.map(q => `<tr><td class="mono"><b>${q.ref}</b></td><td>Quote</td><td>${q.date}</td>
            <td><span class="tag ${q.status === 'Accepted' ? 't-green' : q.status === 'Lost' ? 't-red' : 't-blue'}">${q.status}</span></td>
            <td class="num">${money(q.total)}</td></tr>`).join('')}
          ${is.map(i => `<tr><td class="mono"><b>${i.ref}</b></td><td>Invoice</td><td>${i.date}</td><td>${invTag(i.status)}</td><td class="num">${money(i.total)}</td></tr>`).join('')}
        </tbody></table>
      </div>
    </div>

    <div>
      <div class="card" style="margin-bottom:14px"><div class="hd"><h2>Details</h2></div><div class="bd"><dl class="kv">
        <dt>Customer type</dt><dd>${c.type}</dd><dt>Status</dt><dd>${c.status}</dd>
        <dt>Billing address</dt><dd>${c.billing}</dd><dt>Delivery address</dt><dd>${c.delivery}</dd>
        <dt>Created</dt><dd>${c.created}</dd></dl></div></div>

      <div class="card" style="margin-bottom:14px"><div class="hd"><h2>Internal notes</h2></div><div class="bd">
        ${c.notes.map(n => `<div class="note"><div class="m">${staff(n.by).name} · ${n.at}</div>${n.text}</div>`).join('') || '<div class="empty">No notes yet.</div>'}
      </div></div>

      <div class="card"><div class="hd"><h2>Files on this club</h2></div><div class="bd">
        <div class="note"><div class="m">Club badge</div>ashfield-badge-2026.ai</div>
        <div class="note"><div class="m">Sponsor logo</div>rowley-motors-logo.eps</div>
        <div class="note"><div class="m">Size grid</div>ashfield-size-grid-2026.xlsx</div>
      </div></div>
    </div>
  </div>`;
};

VIEWS.enquiries = () => {
  const stages = ['New Enquiry','Contacted','Quote Required','Quote Sent','Awaiting Customer','Won','Lost'];
  return `
  <div class="phead"><div><h1>Enquiries &amp; leads</h1><p>Everything before it becomes an order, with an owner and a follow-up date so nothing goes quiet.</p></div>
  <div class="actions"><button class="btn pri" onclick="toast('Prototype: log a new enquiry')">Log enquiry</button></div></div>
  <div class="card" style="margin-bottom:14px"><div class="bd"><div class="stagepath">
    ${stages.map(s => `<i>${s}</i>`).join('<span>›</span>')}</div></div></div>
  <div class="card"><table>
    <thead><tr><th>Club</th><th>Contact</th><th>Enquiry</th><th>Stage</th><th>Owner</th><th>Received</th><th>Follow up</th><th class="num">Est. value</th></tr></thead>
    <tbody>${ENQUIRIES.map(e => `<tr class="click" onclick="go('#/club/${e.club}')">
      <td><b>${club(e.club).name}</b></td><td>${e.contact}</td><td style="max-width:280px">${e.detail}</td>
      <td><span class="tag ${e.stage === 'Quote Sent' ? 't-blue' : e.stage === 'New Enquiry' ? 't-grey' : 't-amber'}">${e.stage}</span></td>
      <td>${staff(e.owner).name}</td><td>${e.received}</td>
      <td>${e.followUp === '21 Aug 2026' || e.followUp === '20 Aug 2026' ? `<b style="color:var(--red)">${e.followUp}</b>` : e.followUp}</td>
      <td class="num"><b>${money(e.value)}</b></td></tr>`).join('')}</tbody></table></div>`;
};

VIEWS.quotes = () => `
  <div class="phead"><div><h1>Quotes</h1><p>Branded PDF quotes with their own reference. One click turns an accepted quote into an order.</p></div>
  <div class="actions"><button class="btn pri" onclick="go('#/newquote')">Build a quote</button></div></div>
  <div class="card"><table>
    <thead><tr><th>Reference</th><th>Club</th><th>Date</th><th>Owner</th><th>Status</th><th class="num">Total</th><th></th></tr></thead>
    <tbody>${QUOTES.map(q => `<tr>
      <td class="mono"><b>${q.ref}</b></td><td>${club(q.club).name}</td><td>${q.date}</td><td>${staff(q.owner).name}</td>
      <td><span class="tag ${q.status === 'Accepted' ? 't-green' : q.status === 'Lost' ? 't-red' : q.status === 'Draft' ? 't-grey' : 't-blue'}">${q.status}</span></td>
      <td class="num"><b>${money(q.total)}</b></td>
      <td class="num"><button class="btn sm" onclick="event.stopPropagation();convert('${q.ref}')">Convert to order</button></td></tr>`).join('')}
    </tbody></table></div>`;

/* ---------- quote builder ---------- */
let QB = { club:'c5', lines:[{ sku:'HUM-CORE-HOOD', qty:40, price:32.00 }, { sku:'DEC-EMB-BADGE', qty:40, price:3.50 }], discount:5, delivery:12, vat:20 };

VIEWS.newquote = () => `
  <div class="phead"><div><h1>Build a quote</h1><p>Pick the club, drop in SKUs and decoration. Totals, VAT and margin calculate as you type.</p></div>
  <div class="actions"><button class="btn" onclick="toast('Prototype: saves as draft')">Save draft</button>
  <button class="btn" onclick="toast('Prototype: emails a branded PDF to the contact')">Email PDF</button>
  <button class="btn pri" onclick="convert('TG-Q-000242')">Convert to order</button></div></div>
  <div class="grid g21">
    <div class="card"><div class="hd"><h2>Quote TG-Q-000242</h2><span class="tag t-grey">Draft</span>
      <div class="actions"><button class="btn sm" onclick="qbAdd()">Add line</button></div></div>
      <div class="bd">
        <div class="grid g3" style="margin-bottom:6px">
          <div class="field"><label>Customer / club</label><select id="qbClub" onchange="QB.club=this.value;qbRender()">
            ${CLUBS.map(c => `<option value="${c.id}" ${QB.club === c.id ? 'selected' : ''}>${c.name}</option>`).join('')}</select></div>
          <div class="field"><label>Contact</label><select id="qbContact"></select></div>
          <div class="field"><label>Required by</label><input type="text" value="26 Sep 2026"></div>
        </div>
        <div id="qbLines"></div>
      </div>
    </div>
    <div>
      <div class="card" style="margin-bottom:14px"><div class="hd"><h2>Totals</h2></div><div class="bd">
        <div class="field"><label>Discount %</label><input type="number" id="qbDisc" value="${QB.discount}" oninput="QB.discount=+this.value||0;qbTotals()"></div>
        <div class="field"><label>Delivery (£)</label><input type="number" id="qbDel" value="${QB.delivery}" oninput="QB.delivery=+this.value||0;qbTotals()"></div>
        <div class="totals" id="qbTot"></div>
      </div></div>
      <div class="card"><div class="hd"><h2>Margin check</h2></div><div class="bd totals" id="qbMargin"></div></div>
    </div>
  </div>`;

function qbRender() {
  const c = club(QB.club);
  const sel = $('#qbContact');
  if (sel) sel.innerHTML = c.contacts.map(k => `<option>${k.name} — ${k.role}</option>`).join('');
  $('#qbLines').innerHTML = `<table><thead><tr><th>Product / SKU</th><th class="num" style="width:90px">Qty</th><th class="num" style="width:110px">Unit £</th><th class="num" style="width:110px">Line</th><th style="width:40px"></th></tr></thead>
    <tbody>${QB.lines.map((l, i) => `<tr>
      <td><select onchange="QB.lines[${i}].sku=this.value;QB.lines[${i}].price=product(this.value).sell;qbRender()" style="width:100%;padding:6px 8px;border:1px solid var(--line);border-radius:7px">
        ${PRODUCTS.map(p => `<option value="${p.sku}" ${l.sku === p.sku ? 'selected' : ''}>${p.brand} · ${p.name} (${p.sku})</option>`).join('')}</select></td>
      <td><input type="number" value="${l.qty}" oninput="QB.lines[${i}].qty=+this.value||0;qbTotals()" style="width:100%;padding:6px 8px;border:1px solid var(--line);border-radius:7px;text-align:right"></td>
      <td><input type="number" step="0.01" value="${l.price.toFixed(2)}" oninput="QB.lines[${i}].price=+this.value||0;qbTotals()" style="width:100%;padding:6px 8px;border:1px solid var(--line);border-radius:7px;text-align:right"></td>
      <td class="num" id="qbl${i}"><b>${money(l.qty * l.price)}</b></td>
      <td class="num"><button class="btn sm" onclick="QB.lines.splice(${i},1);qbRender()">✕</button></td></tr>`).join('')}</tbody></table>`;
  qbTotals();
}
function qbAdd() { QB.lines.push({ sku: 'NIK-DRI-SS-NVY', qty: 1, price: 24.95 }); qbRender(); }
function qbTotals() {
  const sub = QB.lines.reduce((s, l) => s + l.qty * l.price, 0);
  const disc = sub * QB.discount / 100;
  const net = sub - disc + QB.delivery;
  const vat = net * QB.vat / 100;
  QB.lines.forEach((l, i) => { const e = document.getElementById('qbl' + i); if (e) e.innerHTML = `<b>${money(l.qty * l.price)}</b>`; });
  const cost = QB.lines.reduce((s, l) => s + l.qty * product(l.sku).buy, 0);
  const gp = sub - disc - cost;
  const t = $('#qbTot'); if (!t) return;
  t.innerHTML = `<div class="row"><span>Subtotal</span><b>${money(sub)}</b></div>
    <div class="row"><span>Discount ${QB.discount}%</span><b>-${money(disc)}</b></div>
    <div class="row"><span>Delivery</span><b>${money(QB.delivery)}</b></div>
    <div class="row"><span>VAT @ 20%</span><b>${money(vat)}</b></div>
    <div class="row big"><span>Total</span><span>${money(net + vat)}</span></div>`;
  $('#qbMargin').innerHTML = `<div class="row"><span>Goods + decoration cost</span><b>${money(cost)}</b></div>
    <div class="row"><span>Net revenue</span><b>${money(sub - disc)}</b></div>
    <div class="row"><span>Gross profit</span><b>${money(gp)}</b></div>
    <div class="row big"><span>Margin</span><span style="color:${gp / (sub - disc) > .35 ? '#177245' : '#96620d'}">${sub ? ((gp / (sub - disc)) * 100).toFixed(1) : '0.0'}%</span></div>`;
}

VIEWS.production = () => `
  <div class="phead"><div><h1>Production queue</h1><p>The shop-floor screen. Job, customer, requirement, deadline, priority, status, nothing else.</p></div>
  <div class="actions"><button class="btn" onclick="toast('Prototype: filter by machine / decoration type')">Filter</button></div></div>
  <div class="grid g4" style="margin-bottom:14px">
    ${kpi('Jobs in queue', JOBS.filter(j => j.status !== 'Complete').length, 'Across all orders')}
    ${kpi('Due this week', 3, 'Two are high priority')}
    ${kpi('Blocked', JOBS.filter(j => j.status === 'Blocked').length, 'Waiting on stock')}
    ${kpi('Completed today', 1, 'Heat press')}
  </div>
  <div class="card"><table>
    <thead><tr><th>Job</th><th>Order</th><th>Customer</th><th>Requirement</th><th>Deadline</th><th>Priority</th><th>Status</th><th></th></tr></thead>
    <tbody>${JOBS.map(j => { const o = order(j.order); return `<tr>
      <td><b>${j.type}</b></td><td class="mono click" onclick="go('#/order/${o.id}')">${o.ref}</td><td>${club(o.club).name}</td>
      <td style="max-width:280px">${j.detail}</td><td>${j.due}</td>
      <td><span class="tag ${j.priority === 'High' ? 't-red' : j.priority === 'Normal' ? 't-amber' : 't-grey'}">${j.priority}</span></td>
      <td>${jobTag(j.status)}</td>
      <td class="num">${j.status !== 'Complete' ? `<button class="btn sm" onclick="jobNext('${j.id}')">Next status</button>` : ''}</td></tr>`; }).join('')}
    </tbody></table></div>`;

VIEWS.invoices = () => {
  const out = INVOICES.reduce((s, i) => s + i.total - i.paid, 0);
  return `
  <div class="phead"><div><h1>Invoices &amp; payments</h1><p>Raised from a quote or an order. Payments recorded by hand now, accounting integration later.</p></div>
  <div class="actions"><button class="btn pri" onclick="toast('Prototype: raise invoice from an order')">Raise invoice</button></div></div>
  <div class="grid g4" style="margin-bottom:14px">
    ${kpi('Invoiced this month', money0(INVOICES.filter(i => i.date.includes('Aug')).reduce((s, i) => s + i.total, 0)), '4 invoices')}
    ${kpi('Outstanding', money0(out), 'Across all customers')}
    ${kpi('Overdue', money0(INVOICES.filter(i => i.status === 'Overdue').reduce((s, i) => s + i.total - i.paid, 0)), '<b class="dn">1 invoice past due</b>')}
    ${kpi('Paid this month', money0(INVOICES.filter(i => i.status === 'Paid').reduce((s, i) => s + i.paid, 0)), 'Cleared funds')}
  </div>
  <div class="card"><table>
    <thead><tr><th>Invoice</th><th>Club</th><th>Order</th><th>Raised</th><th>Due</th><th>Status</th><th class="num">Total</th><th class="num">Paid</th><th class="num">Outstanding</th><th></th></tr></thead>
    <tbody>${INVOICES.map(i => `<tr>
      <td class="mono"><b>${i.ref}</b></td><td>${club(i.club).name}</td>
      <td class="mono click" onclick="go('#/order/${i.order}')">${order(i.order).ref}</td>
      <td>${i.date}</td><td>${i.status === 'Overdue' ? `<b style="color:var(--red)">${i.due}</b>` : i.due}</td>
      <td>${invTag(i.status)}</td><td class="num">${money(i.total)}</td><td class="num">${money(i.paid)}</td>
      <td class="num"><b>${money(i.total - i.paid)}</b></td>
      <td class="num">${i.total > i.paid ? `<button class="btn sm" onclick="payInv('${i.ref}')">Record payment</button>` : ''}</td></tr>`).join('')}
    </tbody></table></div>`;
};

VIEWS.products = () => `
  <div class="phead"><div><h1>Products &amp; SKUs</h1><p>Central catalogue with buying and selling prices, so every quote prices itself and every order knows its margin.</p></div>
  <div class="actions"><button class="btn" onclick="toast('Prototype: import a supplier price file')">Import supplier feed</button>
  <button class="btn pri" onclick="toast('Prototype: new product form')">New product</button></div></div>
  <div class="card"><table>
    <thead><tr><th>SKU</th><th>Brand</th><th>Product</th><th>Category</th><th>Supplier</th><th class="num">Buy</th><th class="num">Sell</th><th class="num">Margin</th><th>Sizes</th></tr></thead>
    <tbody>${PRODUCTS.map(p => { const m = ((p.sell - p.buy) / p.sell * 100); return `<tr>
      <td class="mono">${p.sku}</td><td><b>${p.brand}</b></td><td>${p.name}</td><td>${p.cat}</td><td>${p.supplier}</td>
      <td class="num">${money(p.buy)}</td><td class="num"><b>${money(p.sell)}</b></td>
      <td class="num"><span class="tag ${m > 45 ? 't-green' : m > 35 ? 't-amber' : 't-red'}">${m.toFixed(0)}%</span></td>
      <td>${p.sizes}</td></tr>`; }).join('')}</tbody></table></div>`;

VIEWS.tasks = () => `
  <div class="phead"><div><h1>Tasks &amp; follow-ups</h1><p>Tasks hang off a customer, quote, order or production job, so they always have context.</p></div>
  <div class="actions"><button class="btn pri" onclick="toast('Prototype: new task')">New task</button></div></div>
  <div class="grid g3">
    ${['overdue','today','tomorrow'].map(bucket => `<div class="card">
      <div class="hd"><h2>${bucket === 'overdue' ? 'Overdue' : bucket === 'today' ? 'Due today' : 'Upcoming'}</h2>
      <span class="tag ${bucket === 'overdue' ? 't-red' : 't-grey'}">${TASKS.filter(t => (bucket === 'tomorrow' ? (t.due === 'tomorrow' || t.due === 'this week') : t.due === bucket) && !t.done).length}</span></div>
      <div class="bd">${TASKS.filter(t => (bucket === 'tomorrow' ? (t.due === 'tomorrow' || t.due === 'this week') : t.due === bucket) && !t.done)
        .map(t => `<div class="note"><div class="m">${staff(t.who).name} · ${t.pri} priority</div>${t.text}
        <div style="margin-top:7px"><button class="btn sm" onclick="doneTask('${t.id}')">Mark done</button></div></div>`).join('') || '<div class="empty">Nothing here.</div>'}</div>
    </div>`).join('')}
  </div>`;

VIEWS.mgmt = () => {
  const live = ORDERS.filter(o => o.stage !== 'Completed');
  const rev = ORDERS.reduce((s, o) => s + orderNet(o), 0);
  const cost = ORDERS.reduce((s, o) => s + o.cost, 0);
  const byBrand = {};
  ORDERS.forEach(o => o.items.forEach(i => { if (!i.qty) return; const b = product(i.sku).brand; byBrand[b] = (byBrand[b] || 0) + i.qty * i.price; }));
  const brands = Object.entries(byBrand).sort((a, b) => b[1] - a[1]);
  const topBrand = brands[0][1];
  const byClub = CLUBS.map(c => [c.name, ORDERS.filter(o => o.club === c.id).reduce((s, o) => s + o.value, 0)]).sort((a, b) => b[1] - a[1]);
  const won = QUOTES.filter(q => q.status === 'Accepted').length;
  return `
  <div class="phead"><div><h1>Management</h1><p>Where the money is, what is stuck, and which customers and brands actually earn.</p></div>
  <div class="actions"><button class="btn" onclick="toast('Prototype: export to CSV')">Export</button></div></div>

  <div class="grid g4" style="margin-bottom:14px">
    ${kpi('Revenue (period)', money0(rev), '<b class="up">+18% vs last month</b>')}
    ${kpi('Gross profit', money0(rev - cost), `<b class="up">${((rev - cost) / rev * 100).toFixed(1)}% margin</b>`)}
    ${kpi('Live orders', live.length, `${money0(live.reduce((s, o) => s + o.value, 0))} in the pipeline`)}
    ${kpi('Quote conversion', Math.round(won / QUOTES.length * 100) + '%', `${won} of ${QUOTES.length} quotes accepted`)}
  </div>
  <div class="grid g4" style="margin-bottom:14px">
    ${kpi('Awaiting payment', ORDERS.filter(o => o.paid < o.value).length, money0(ORDERS.reduce((s, o) => s + (o.value - o.paid), 0)) + ' outstanding')}
    ${kpi('Awaiting artwork', ORDERS.filter(o => o.artwork !== 'Approved').length, 'Includes proofs with customers')}
    ${kpi('In production', ORDERS.filter(o => ['Ready for Production','In Production','Quality Check'].includes(o.stage)).length, 'On the shop floor')}
    ${kpi('Overdue orders', 1, '<b class="dn">TG-ORD-000314 past due date</b>')}
  </div>

  <div class="grid g2">
    <div class="card"><div class="hd"><h2>Revenue by brand</h2></div><div class="bd bars">
      ${brands.map(([b, v]) => `<div class="b"><div class="r"><span>${b}</span><b>${money0(v)}</b></div>
        <div class="tr"><i style="width:${(v / topBrand * 100).toFixed(0)}%"></i></div></div>`).join('')}
    </div></div>
    <div class="card"><div class="hd"><h2>Top customers</h2></div><table>
      <thead><tr><th>Club</th><th>Orders</th><th class="num">Value</th><th class="num">Margin</th></tr></thead><tbody>
      ${byClub.filter(r => r[1] > 0).map(([n, v]) => { const c = CLUBS.find(x => x.name === n); const os = ORDERS.filter(o => o.club === c.id);
        const mg = os.reduce((s, o) => s + orderMargin(o).gp, 0) / os.reduce((s, o) => s + orderNet(o), 0) * 100;
        return `<tr class="click" onclick="go('#/club/${c.id}')"><td><b>${n}</b></td><td>${os.length}</td>
        <td class="num">${money0(v)}</td><td class="num">${mg.toFixed(1)}%</td></tr>`; }).join('')}
    </tbody></table></div>
  </div>

  <div class="card" style="margin-top:14px"><div class="hd"><h2>Order margin detail</h2></div><table>
    <thead><tr><th>Order</th><th>Club</th><th>Stage</th><th class="num">Net</th><th class="num">Cost</th><th class="num">GP</th><th class="num">Margin</th></tr></thead>
    <tbody>${ORDERS.map(o => { const m = orderMargin(o); return `<tr class="click" onclick="go('#/order/${o.id}')">
      <td class="mono"><b>${o.ref}</b></td><td>${club(o.club).name}</td><td>${stageTag(o.stage)}</td>
      <td class="num">${money(m.net)}</td><td class="num">${money(m.cost)}</td><td class="num"><b>${money(m.gp)}</b></td>
      <td class="num"><span class="tag ${m.pct > 40 ? 't-green' : m.pct > 30 ? 't-amber' : 't-red'}">${m.pct.toFixed(1)}%</span></td></tr>`; }).join('')}
  </tbody></table></div>`;
};

VIEWS.ideas = () => `
  <div class="phead"><div><h1>Ideas &amp; development requests</h1><p>An unrestricted place for staff to log improvements once the system is live.</p></div></div>
  <div class="grid g21">
    <div class="card"><table><thead><tr><th>Idea</th><th>Added by</th><th>Date</th><th>Priority</th><th>Status</th></tr></thead>
      <tbody id="ideaRows">${IDEAS.map(i => `<tr><td><b>${esc(i.text)}</b></td><td>${i.by}</td><td>${i.date}</td>
        <td><span class="tag ${i.pri === 'High' ? 't-red' : 't-amber'}">${i.pri}</span></td>
        <td><span class="tag t-grey">${i.status}</span></td></tr>`).join('')}</tbody></table></div>
    <div class="card"><div class="hd"><h2>Add an idea</h2></div><div class="bd">
      <div class="field"><label>Idea or suggestion</label><textarea id="ideaText" rows="4" placeholder="What would make your day easier?"></textarea></div>
      <div class="field"><label>Priority</label><select id="ideaPri"><option>High</option><option selected>Medium</option><option>Low</option></select></div>
      <button class="btn pri" onclick="addIdea()">Submit idea</button>
    </div></div>
  </div>`;

VIEWS.scope = () => `
  <div class="phead"><div><h1>Delivery plan</h1><p>How I would deliver the brief, in the order that gets your team using it soonest.</p></div>
  <div class="actions"><button class="btn" onclick="window.print()">Print / save as PDF</button></div></div>
  <div class="prose">
    <div class="card" style="margin-bottom:18px"><div class="bd">
      <h2 style="margin-bottom:8px">Recommendation in one line</h2>
      <p style="margin-top:0">Build it in three phases. Phase 1 gets the whole journey, enquiry through to completion, running on real orders in about six weeks, so the team is using one system instead of email and spreadsheets before the clever extras are written. Phases 2 and 3 add margin reporting, production depth and the customer portal once you have seen the core in daily use.</p>
      <p>Everything is built on one data model from day one, so the future customer portal and the DPD, accounting, email and shop integrations plug in rather than being retro-fitted.</p>
    </div></div>

    <div class="phase">
      <h2>Phase 1 · Core system</h2>
      <p style="color:var(--muted);margin:2px 0 8px">5 to 7 weeks · brief sections 1 to 10, 14 to 16, 20 to 22</p>
      <ul>
        <li>Customer and club CRM with multiple contacts per club, notes, history and documents</li>
        <li>Enquiry and lead pipeline with owners and follow-up dates</li>
        <li>Quotation builder with SKUs, personalisation, discount, VAT and delivery, branded PDF, email out</li>
        <li>One-click convert quote to order, with the quote kept on the order history</li>
        <li>Order record and the configurable stage workflow</li>
        <li>Kanban order board with drag-and-drop</li>
        <li>Artwork upload and approval states, document storage against customer and order</li>
        <li>Invoices, manual payment recording, outstanding balances</li>
        <li>Tasks, staff dashboard, global search, logins and permissions, audit trail</li>
      </ul>
    </div>

    <div class="phase">
      <h2>Phase 2 · Production &amp; profitability</h2>
      <p style="color:var(--muted);margin:2px 0 8px">3 to 4 weeks · brief sections 11 to 13, 17 to 19, 25</p>
      <ul>
        <li>Full product and SKU database with buying prices, supplier references and images</li>
        <li>Margin and gross profit on every order, analysed by product, brand, customer, staff member and month</li>
        <li>Production jobs and the simplified shop-floor queue for embroidery, DTF, vinyl, heat press, engraving and trophies</li>
        <li>Dispatch, parcels, courier and tracking</li>
        <li>Management dashboard and the internal ideas board</li>
      </ul>
    </div>

    <div class="phase">
      <h2>Phase 3 · Customer portal &amp; integrations</h2>
      <p style="color:var(--muted);margin:2px 0 8px">4 to 6 weeks · brief sections 23 and 24 · scoped after Phase 1 is live</p>
      <ul>
        <li>Customer login: view and accept quotes, approve artwork with a recorded name and timestamp, track orders, download and pay invoices, reorder</li>
        <li>Online payment provider and accounting software integration</li>
        <li>DPD label and tracking integration, transactional email</li>
        <li>Website and shop, supplier feeds and stock as separate scoped add-ons</li>
      </ul>
    </div>

    <div class="card" style="margin-bottom:18px"><div class="bd">
      <h2 style="margin-bottom:8px">How it would be built</h2>
      <p style="margin-top:0">Next.js and TypeScript on Vercel, PostgreSQL, S3-compatible file storage for artwork, role-based logins, and an append-only audit log. It is a normal web app: works on the office PCs, on a tablet at the embroidery machine and on a phone. You own the code and the database.</p>
      <p>Weekly demo on a live staging link so you see it moving, not just a status email. Phase 1 ends with your real customer and product data loaded and a training session for the team.</p>
    </div></div>

    <div class="card"><div class="bd">
      <h2 style="margin-bottom:8px">What I would want to confirm before finalising the plan</h2>
      <ul style="margin-bottom:0">
        <li>Roughly how many customers, orders a month and staff logins, and whether existing data needs importing</li>
        <li>Which accounting package you use, and whether the shop is WooCommerce, Shopify or bespoke</li>
        <li>Whether the stage list in the brief is final, or whether different order types need different stages from day one</li>
        <li>Whether quotes need to go out under a specific existing letterhead or brand template</li>
      </ul>
    </div></div>
  </div>`;

/* ---------------- actions ---------------- */
function advance(id) {
  const o = order(id);
  const i = STAGES.indexOf(o.stage);
  if (i >= STAGES.length - 1) { toast('Order already completed'); return; }
  o.stage = STAGES[i + 1];
  o.activity.unshift({ who: ME, at: '21 Aug 09:41', text: `Stage changed to ${o.stage} by Sam Hardy` });
  toast(`Moved to ${o.stage}`); route();
}
function approveArt(id) {
  const o = order(id);
  o.artwork = 'Approved';
  o.files.forEach(f => f.s = 'Approved');
  o.activity.unshift({ who: ME, at: '21 Aug 09:42', text: 'Artwork approved by customer, recorded against the order' });
  toast('Artwork approved and logged'); route();
}
function pay(id) {
  const o = order(id);
  if (o.paid >= o.value) { toast('Nothing outstanding'); return; }
  const amt = o.value - o.paid;
  o.paid = o.value;
  const inv = INVOICES.find(i => i.order === o.id);
  if (inv) { inv.paid = inv.total; inv.status = 'Paid'; }
  o.activity.unshift({ who: ME, at: '21 Aug 09:43', text: `Payment of ${money(amt)} recorded by Sam Hardy` });
  toast(`Payment of ${money(amt)} recorded`); route();
}
function payInv(ref) {
  const i = INVOICES.find(x => x.ref === ref);
  i.paid = i.total; i.status = 'Paid';
  const o = order(i.order); if (o) o.paid = o.value;
  toast(`${ref} marked paid`); route();
}
function addNote(id) {
  const box = $('#noteBox'); const v = box.value.trim(); if (!v) return;
  order(id).notes.unshift({ by: ME, at: '21 Aug 2026 09:44', text: v });
  toast('Note added, stamped with your name and time'); route();
}
function doneTask(id) { const t = TASKS.find(x => x.id === id); t.done = true; toast('Task completed'); route(); }
function jobNext(id) {
  const j = JOBS.find(x => x.id === id);
  const flow = ['Queued','In Progress','Complete'];
  j.status = j.status === 'Blocked' ? 'Queued' : flow[Math.min(flow.indexOf(j.status) + 1, 2)];
  toast(`${j.type} → ${j.status}`); route();
}
function convert(ref) {
  const src = QUOTES.find(q => q.ref === ref);
  const lines = src ? src.lines : QB.lines;
  const cid = src ? src.club : QB.club;
  const net = lines.reduce((s, l) => s + l.qty * l.price, 0);
  const cost = lines.reduce((s, l) => s + l.qty * product(l.sku).buy, 0);
  const n = Math.max(...ORDERS.map(o => +o.ref.replace('TG-ORD-', ''))) + 1;
  const o = {
    id: 'o' + (ORDERS.length + 1), ref: 'TG-ORD-' + String(n).padStart(6, '0'), club: cid, stage: 'New Order', owner: ME, quote: ref,
    placed: '21 Aug 2026', due: '18 Sep 2026', value: +(net * 1.2).toFixed(2), paid: 0, cost: +cost.toFixed(2),
    artwork: 'Artwork Required', courier: '—', tracking: '—', parcels: 1,
    items: lines.map(l => ({ ...l })), files: [],
    activity: [{ who: ME, at: '21 Aug 09:45', text: `Order created from quote ${ref} by Sam Hardy` }], notes: []
  };
  ORDERS.unshift(o);
  toast(`${ref} converted to ${o.ref}`);
  go('#/order/' + o.id);
}
function addIdea() {
  const t = $('#ideaText').value.trim(); if (!t) return;
  IDEAS.unshift({ text: t, by: 'Sam Hardy', date: '21 Aug 2026', pri: $('#ideaPri').value, status: 'New' });
  toast('Idea logged'); route();
}

/* ---------------- global search ---------------- */
$('#q').addEventListener('input', e => {
  const v = e.target.value.trim().toLowerCase();
  const box = $('#res');
  if (v.length < 2) { box.classList.remove('on'); return; }
  const hits = [];
  CLUBS.forEach(c => {
    if (c.name.toLowerCase().includes(v)) hits.push(['Club', c.name, '#/club/' + c.id]);
    c.contacts.forEach(k => { if ((k.name + k.email).toLowerCase().includes(v)) hits.push(['Contact', `${k.name} · ${c.name}`, '#/club/' + c.id]); });
  });
  ORDERS.forEach(o => { if ((o.ref + club(o.club).name).toLowerCase().includes(v)) hits.push(['Order', `${o.ref} · ${club(o.club).name} · ${o.stage}`, '#/order/' + o.id]); });
  QUOTES.forEach(q => { if (q.ref.toLowerCase().includes(v)) hits.push(['Quote', `${q.ref} · ${club(q.club).name}`, '#/quotes']); });
  INVOICES.forEach(i => { if (i.ref.toLowerCase().includes(v)) hits.push(['Invoice', `${i.ref} · ${i.status}`, '#/invoices']); });
  PRODUCTS.forEach(p => { if ((p.sku + p.name + p.brand).toLowerCase().includes(v)) hits.push(['SKU', `${p.sku} · ${p.name}`, '#/products']); });
  box.innerHTML = hits.length
    ? hits.slice(0, 12).map(h => `<div class="r" onclick="go('${h[2]}');document.getElementById('q').value='';document.getElementById('res').classList.remove('on')">
        <span class="k">${h[0]}</span><span>${esc(h[1])}</span></div>`).join('')
    : '<div class="empty">Nothing found</div>';
  box.classList.add('on');
});
document.addEventListener('click', e => { if (!e.target.closest('.search')) $('#res').classList.remove('on'); });

/* ---------------- boot ---------------- */
if (!location.hash) location.hash = '#/dash';
route();
