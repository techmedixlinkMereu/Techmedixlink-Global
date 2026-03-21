<!DOCTYPE html>
<!-- ─────────────────────────────────────────────────────────────────
     TechMedixLink · index.html
     Tanzania Medical Equipment Platform

     DEPLOYMENT: Upload index.html, app.css, app.js, config.js,
     manifest.json and favicon.svg to any static host.

     FILES:
       index.html   — HTML structure & Vue template
       app.css      — All styles (508 lines, 23 sections)
       app.js       — Vue app logic (20 sections)
       config.js    — Supabase credentials (add to .gitignore!)
       manifest.json — PWA manifest
       favicon.svg  — App icon

     SUPABASE SETUP:
       1. Enable RLS on all tables
       2. Set email templates (see email-templates.html)
       3. Set redirect URL: Authentication → URL Configuration
     ───────────────────────────────────────────────────────────────── -->
<html lang="en" data-platform="techmedix">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<meta name="description" content="TechMedixLink — Tanzania's premier medical equipment sourcing platform">
<title>TechMedixLink · Medical Equipment Platform</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Bree+Serif&family=Nunito+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
<link rel="icon" type="image/svg+xml" href="favicon.svg">
<link rel="manifest" href="manifest.json">
<meta name="theme-color" content="#0066a1">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="TechMedixLink">

<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:title" content="TechMedixLink · Medical Equipment Platform">
<meta property="og:description" content="Tanzania's premier medical equipment sourcing and procurement marketplace. Source, track and deliver medical equipment with confidence.">
<meta property="og:image" content="favicon.svg">
<meta property="og:locale" content="en_TZ">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="TechMedixLink · Medical Equipment Platform">
<meta name="twitter:description" content="Tanzania's premier medical equipment sourcing and procurement marketplace.">
<style>
/* ─────────────────────────────────────────────────────────────────
   TechMedixLink · app.css
   ─────────────────────────────────────────────────────────────────
   TABLE OF CONTENTS
    1.  Design tokens  (CSS variables: colours, spacing, typography)
    2.  Reset & base   (*, html, body, scrollbar, links)
    3.  Layout         (.shell, .sidebar, .main)
    4.  Sidebar        (.sb-top, .logo, .plat-sw, .nav-item, .sb-user)
    5.  Rate bar       (.rate-bar, .rate-item, .rate-val)
    6.  Topbar         (.topbar, .srch-w, .tb-ico, .mob-search)
    7.  Buttons        (.btn, .btn-p, .btn-s, .btn-g, .btn-d…)
    8.  Cards          (.card, .card-i, .card-sm)
    9.  KPI tiles      (.kpi-grid, .kpi, .kpi-val)
   10.  Section headers (.sect-hd, .sect-ttl)
   11.  Badges         (.badge, .b-ok, .b-wn, .b-er…)
   12.  Forms          (.fr2, .fr3, .fg, .lbl, .inp, .sel, .tex…)
   13.  Tables         (.tbl-w, .tbl, zebra rows)
   14.  Product cards  (.prod-grid, .prod-card, .pc-img, .pc-body…)
   15.  Request cards  (.req-card, .req-hd, .req-num, .stepper…)
   16.  Modals         (.modal-bg, .modal, .modal-hd, .auth-wrap…)
   17.  Misc           (.prog, .hr, .info-strip, .empty, .feed-row…)
   18.  Toasts         (.toast-stack, .toast)
   19.  Loader         (.load-ov, .load-box, .spinner)
   20.  Auth screens   (.auth-landing, .pw-update-screen)
   21.  Pagination     (.pgn, .pgn-btn)
   22.  Animations     (.fu, @keyframes fu, fade, modal, slide)
   23.  Responsive     (@media 860px, @media 520px)
   ───────────────────────────────────────────────────────────────── */

/* ═══════════════════════════════════════════════════════════════════
   TECHMEDIXLINK v10 · PHILIPS BLUE + SIEMENS TEAL + AMAZON DENSITY
   Bree Serif (Siemens Healthineers exact display font)
   Nunito Sans (Philips spirit — humanist, inviting, legible)
   JetBrains Mono (data precision)
═══════════════════════════════════════════════════════════════════ */
:root {
  --philips:#0066a1;   --philips-d:#004f7c;   --philips-l:#e5f0f8;
  --siemens:#00a8b0;   --siemens-d:#007d83;   --siemens-l:#e5f6f7;
  --bg-0:#ffffff; --bg-1:#f4f6f9; --bg-2:#e8edf4; --bg-3:#dce3ee;
  --bg-4:#c8d3e4; --bg-5:#a8b8d0;
  --ln-0:rgba(0,30,80,0.05); --ln-1:rgba(0,30,80,0.09);
  --ln-2:rgba(0,30,80,0.15); --ln-3:rgba(0,30,80,0.25);
  --tx-1:#0a1f3c; --tx-2:#3a5070; --tx-3:#7a90aa; --tx-4:#b0bfcf;
  --tm:#0066a1; --tm-d:#004f7c;
  --tm-s:rgba(0,102,161,0.07); --tm-m:rgba(0,102,161,0.13);
  --tm-b:rgba(0,102,161,0.22); --tm-g:rgba(0,102,161,0.10);
  --gd:#00a8b0; --gd-d:#007d83;
  --gd-s:rgba(0,168,176,0.07); --gd-m:rgba(0,168,176,0.13);
  --gd-b:rgba(0,168,176,0.22); --gd-g:rgba(0,168,176,0.10);
  --a:var(--tm); --a-d:var(--tm-d); --a-s:var(--tm-s);
  --a-m:var(--tm-m); --a-b:var(--tm-b); --a-g:var(--tm-g);
  --ok:#1a7a4a;   --ok-bg:rgba(26,122,74,0.08);    --ok-bd:rgba(26,122,74,0.20);
  --warn:#c47a00; --warn-bg:rgba(196,122,0,0.08);  --warn-bd:rgba(196,122,0,0.22);
  --err:#c0392b;  --err-bg:rgba(192,57,43,0.08);   --err-bd:rgba(192,57,43,0.22);
  --info:#0066a1; --info-bg:rgba(0,102,161,0.08);  --info-bd:rgba(0,102,161,0.20);
  --sidebar:#0a1f3c; --sidebar-2:#122545; --sidebar-3:#1a3055;
  /* Bree Serif = Siemens Healthineers exact display font */
  --fd:'Bree Serif',Georgia,serif;
  /* Nunito Sans = Philips spirit — humanist, inviting */
  --fb:'Nunito Sans',sans-serif;
  --fm:'JetBrains Mono',monospace;
  --t2xs:10px; --txs:11px; --tsm:13.5px; --tmd:15px;
  --tlg:17px; --txl:21px; --t2xl:28px; --t3xl:40px;
  /* Generous spacing scale — Philips/Siemens use lots of breathing room */
  --s1:3px; --s2:6px; --s3:10px; --s4:16px;
  --s5:22px; --s6:28px; --s7:40px; --s8:56px;
  --r1:4px; --r2:8px; --r3:12px; --r4:16px; --r5:24px; --rp:99px;
  --sw:236px; --th:48px; --rh:26px;
  --ease:cubic-bezier(0.22,1,0.36,1);
  --fast:0.13s var(--ease); --med:0.22s var(--ease); --slow:0.38s var(--ease);
  --sh1:0 1px 3px rgba(10,31,60,0.08),0 1px 2px rgba(10,31,60,0.04);
  --sh2:0 4px 14px rgba(10,31,60,0.10),0 2px 6px rgba(10,31,60,0.05);
  --sh3:0 10px 32px rgba(10,31,60,0.13),0 3px 10px rgba(10,31,60,0.07);
}
[data-platform="globaldoor"]{
  --a:var(--gd); --a-d:var(--gd-d); --a-s:var(--gd-s);
  --a-m:var(--gd-m); --a-b:var(--gd-b); --a-g:var(--gd-g);
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{font-size:14px;scroll-behavior:smooth}
body{font-family:var(--fb);background:var(--bg-1);color:var(--tx-1);line-height:1.6;min-height:100vh;overflow-x:hidden;-webkit-font-smoothing:antialiased;font-weight:400;font-size:14px;}
body::before,body::after{display:none}
.amb-a{display:none} .amb-b{display:none}
a{color:inherit;text-decoration:none}
button{cursor:pointer;font-family:var(--fb);border:none;background:none}
input,select,textarea{font-family:var(--fb)}
::-webkit-scrollbar{width:4px;height:4px}
::-webkit-scrollbar-track{background:var(--bg-2)}
::-webkit-scrollbar-thumb{background:var(--bg-4);border-radius:4px}
[v-cloak]{display:none}

/* ══ LAYOUT ══ */
.shell{display:flex;min-height:100vh}

/* ══ SIDEBAR — Philips deep navy, structured ══ */
.sidebar{width:var(--sw);background:var(--sidebar);display:flex;flex-direction:column;position:fixed;inset:0 auto 0 0;z-index:200;transition:transform var(--med)}
.sb-backdrop{display:none;position:fixed;inset:0;background:rgba(0,0,0,0.45);z-index:190}
.sb-top{padding:var(--s5) var(--s5) var(--s4);border-bottom:1px solid rgba(255,255,255,0.07);flex-shrink:0}

/* Logo — Philips-style: clean wordmark, blue accent */
.logo{display:flex;align-items:center;gap:10px;margin-bottom:var(--s4)}
.logo-mark{width:34px;height:34px;border-radius:var(--r2);flex-shrink:0;background:var(--philips);display:flex;align-items:center;justify-content:center;color:white;font-size:16px;box-shadow:0 2px 10px rgba(0,102,161,0.4)}
.logo-name{font-family:var(--fd);font-size:18px;color:white;line-height:1.1}
.logo-name em{color:#4dc8d0;font-style:normal} /* Siemens teal highlight */
.logo-sub{font-size:8px;color:rgba(255,255,255,0.30);letter-spacing:0.16em;text-transform:uppercase;margin-top:2px;font-family:var(--fm)}

/* Platform switcher */
.plat-sw{display:flex;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.08);border-radius:var(--r2);padding:3px;gap:2px}
.plat-btn{flex:1;padding:6px 4px;border-radius:var(--r1);font-size:9px;font-weight:700;letter-spacing:0.03em;color:rgba(255,255,255,0.45);transition:all var(--fast);display:flex;align-items:center;justify-content:center;gap:4px}
.plat-btn i{font-size:8px}
.plat-btn.on-tm{background:var(--philips);color:white;box-shadow:0 1px 6px rgba(0,102,161,0.4)}
.plat-btn.on-gd{background:var(--siemens);color:white;box-shadow:0 1px 6px rgba(0,168,176,0.4)}
.plat-btn:not(.on-tm):not(.on-gd):hover{background:rgba(255,255,255,0.09);color:rgba(255,255,255,0.8)}
.role-pill{display:inline-flex;align-items:center;gap:4px;padding:2px 9px;border-radius:var(--rp);margin-top:var(--s2);font-size:9px;font-weight:700;background:rgba(0,102,161,0.20);color:#7bc8f0;border:1px solid rgba(0,102,161,0.30)}

/* Nav — Amazon density + Philips refinement */
.sb-nav{flex:1;padding:var(--s2) 0;overflow-y:auto}
.nav-sect{font-size:9px;font-weight:700;color:rgba(255,255,255,0.28);letter-spacing:0.14em;text-transform:uppercase;padding:var(--s5) var(--s5) var(--s2);margin-top:var(--s4)}
.nav-item{display:flex;align-items:center;gap:9px;padding:11px var(--s5);color:rgba(255,255,255,0.60);font-size:var(--tsm);font-weight:400;cursor:pointer;transition:all var(--fast);border-left:3px solid transparent;position:relative}
.nav-item:hover{background:rgba(255,255,255,0.06);color:rgba(255,255,255,0.90)}
.nav-item.active{background:rgba(0,102,161,0.22);color:white;border-left-color:var(--philips);font-weight:600}
.ni{width:14px;text-align:center;font-size:11px;flex-shrink:0;opacity:0.55;transition:opacity var(--fast)}
.nav-item:hover .ni{opacity:0.8}
.nav-item.active .ni{opacity:1;color:#7bc8f0}
.nav-chip{margin-left:auto;font-family:var(--fm);font-size:9px;background:rgba(255,255,255,0.10);color:rgba(255,255,255,0.5);padding:1px 7px;border-radius:var(--rp)}
.nav-item.active .nav-chip{background:rgba(0,102,161,0.30);color:#7bc8f0}
.nav-dot{width:6px;height:6px;border-radius:50%;background:var(--err);margin-left:auto;flex-shrink:0;animation:pdot 2s infinite}
@keyframes pdot{0%,100%{opacity:1}50%{opacity:0.3}}
.sb-user{padding:var(--s4) var(--s4) var(--s3);border-top:1px solid rgba(255,255,255,0.07);flex-shrink:0}
.user-row{display:flex;align-items:center;gap:10px;padding:10px var(--s3);border-radius:var(--r2);cursor:pointer;transition:background var(--fast)}
.user-row:hover{background:rgba(255,255,255,0.06)}
.user-av{width:32px;height:32px;border-radius:50%;flex-shrink:0;background:var(--philips);color:white;display:flex;align-items:center;justify-content:center;font-family:var(--fd);font-size:13px;font-weight:700;box-shadow:0 2px 8px rgba(0,102,161,0.4)}
.user-name{font-size:var(--tsm);font-weight:600;color:white;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.user-role-tag{font-size:9px;color:rgba(255,255,255,0.35);text-transform:uppercase;letter-spacing:0.04em}
.sb-close{display:none;position:absolute;top:var(--s3);right:var(--s3);width:26px;height:26px;border-radius:var(--rp);background:rgba(255,255,255,0.08);color:rgba(255,255,255,0.6);align-items:center;justify-content:center;font-size:10px;transition:all var(--fast);cursor:pointer;border:none}
.sb-close:hover{color:white}

/* ══ MAIN ══ */
.main{flex:1;margin-left:var(--sw);display:flex;flex-direction:column;min-height:100vh;background:var(--bg-1)}

/* Rate bar — Siemens style: subtle info strip */
.rate-bar{height:var(--rh);background:var(--sidebar);border-bottom:1px solid rgba(255,255,255,0.06);display:flex;align-items:center;padding:0 var(--s6);gap:0;font-size:10px;flex-shrink:0;font-family:var(--fm)}
.rate-item{display:flex;align-items:center;gap:4px;padding:0 var(--s2);border-right:1px solid rgba(255,255,255,0.14)}
.rate-item:first-child{padding-left:0}
.rate-lbl{font-family:var(--fb);font-weight:700;letter-spacing:0.05em;text-transform:uppercase;font-size:9px;color:rgba(255,255,255,0.55)}
.rate-val{color:#4dc8d0;font-weight:600;font-size:10px} /* Siemens teal for live data */
.rdot{width:4px;height:4px;border-radius:50%;flex-shrink:0}
.rdot.live{background:var(--ok);animation:pdot 2s infinite}
.rdot.fallback{background:var(--warn)}
.rsrc{font-size:8px;font-weight:600}
.rsrc.live{color:var(--ok)} .rsrc.fallback{color:var(--warn)}
.rate-ticker{margin-left:auto;font-size:9px;color:rgba(255,255,255,0.45);display:flex;align-items:center;gap:4px;font-family:var(--fb)}

/* Topbar — Philips white header, clean and authoritative */
.topbar{height:var(--th);background:white;border-bottom:2px solid var(--philips);display:flex;align-items:center;justify-content:space-between;padding:0 var(--s5);position:sticky;top:0;z-index:100;flex-shrink:0;box-shadow:var(--sh1)}
.tb-l{display:flex;align-items:center;gap:var(--s3)}
.mob-btn{display:none;width:32px;height:32px;border-radius:var(--r2);background:var(--bg-1);border:1px solid var(--ln-2);color:var(--tx-2);align-items:center;justify-content:center;font-size:12px;transition:all var(--fast);cursor:pointer}
.page-ttl{font-family:var(--fd);font-size:20px;font-weight:400;color:var(--tx-1);letter-spacing:0}
.plat-tag{display:flex;align-items:center;gap:4px;padding:3px 10px;border-radius:var(--rp);background:var(--philips-l);border:1px solid var(--tm-b);font-size:9px;font-weight:700;color:var(--philips);letter-spacing:0.04em;text-transform:uppercase;transition:all var(--fast)}
.tb-r{display:flex;align-items:center;gap:7px}
/* Search — Philips style: clean rounded, blue focus ring */
.srch-w{display:flex;align-items:center;gap:var(--s2);background:var(--bg-1);border:1px solid var(--ln-2);border-radius:var(--rp);padding:7px var(--s4);width:240px;transition:all var(--fast)}
.srch-w:focus-within{border-color:var(--philips);width:290px;box-shadow:0 0 0 3px rgba(0,102,161,0.10);background:white}
.srch-w input{background:none;border:none;outline:none;color:var(--tx-1);font-size:var(--tsm);width:100%;font-family:var(--fb)}
.srch-w input::placeholder{color:var(--tx-4)}
.srch-w i{color:var(--tx-4);font-size:11px;flex-shrink:0}
.tb-ico{width:34px;height:34px;border-radius:var(--r2);background:var(--bg-1);border:1px solid var(--ln-2);color:var(--tx-2);display:flex;align-items:center;justify-content:center;font-size:12px;transition:all var(--fast);position:relative;cursor:pointer}
.tb-ico:hover{border-color:var(--philips);color:var(--philips);background:var(--philips-l)}
.tb-ico.au{background:var(--philips-l);border-color:var(--tm-b);color:var(--philips)}
.ndot{position:absolute;top:-4px;right:-4px;background:var(--err);color:white;border-radius:50%;width:16px;height:16px;font-size:8px;display:flex;align-items:center;justify-content:center;font-family:var(--fm);font-weight:700;border:2px solid white}
.content{flex:1;padding:var(--s5) var(--s5);overflow-y:auto}

/* ══ BUTTONS — Philips: primary blue, secondary white, rounded ══ */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:9px 18px;border-radius:var(--rp);font-family:var(--fb);font-size:var(--tsm);font-weight:600;transition:all var(--fast);border:1px solid transparent;cursor:pointer;white-space:nowrap;letter-spacing:0.01em}
.btn:disabled{opacity:0.38;cursor:not-allowed;pointer-events:none}
.btn-p{background:var(--philips);color:white;border-color:var(--philips);box-shadow:0 2px 6px rgba(0,102,161,0.25)}
.btn-p:hover{background:var(--philips-d);transform:translateY(-1px);box-shadow:0 4px 14px rgba(0,102,161,0.30)}
.btn-p:active{transform:translateY(0)}
.btn-s{background:white;color:var(--philips);border-color:var(--philips);box-shadow:var(--sh1)}
.btn-s:hover{background:var(--philips-l);box-shadow:var(--sh2)}
.btn-g{background:transparent;color:var(--tx-2);border-color:var(--ln-2)}
.btn-g.btn-w{border-color:transparent;color:var(--philips);justify-content:flex-start;padding-left:var(--s2)}
.btn-g.btn-w:hover{background:var(--philips-l);color:var(--philips-d);border-color:transparent}
.btn-g:hover{background:var(--philips-l);color:var(--philips);border-color:var(--tm-b)}
.btn-d{background:transparent;color:var(--err);border-color:var(--err-bd)}
.btn-d:hover{background:var(--err-bg)}
.btn-ok{background:var(--ok);color:white;border-color:var(--ok)}
.btn-ok:hover{opacity:0.88;transform:translateY(-1px)}
.btn-info{background:var(--siemens);color:white;border-color:var(--siemens)}
.btn-info:hover{background:var(--siemens-d);transform:translateY(-1px)}
.btn-sm{padding:6px 14px;font-size:var(--txs)}
.btn-xs{padding:3px 10px;font-size:10px}
.btn-sq{padding:0;width:34px;height:34px;flex-shrink:0;border-radius:var(--r2)}
.btn-sq.sm{width:28px;height:28px}
.btn-w{width:100%;justify-content:flex-start;border-radius:var(--r2)}
.btn-wc{width:100%;justify-content:center;border-radius:var(--r2)}

/* ══ CARDS — Philips: white, subtle shadow, clean ══ */
.card{background:white;border:1px solid var(--ln-1);border-radius:var(--r3);padding:var(--s4) var(--s4);box-shadow:var(--sh1);transition:box-shadow var(--fast),border-color var(--fast)}
.card-ttl{font-family:var(--fd);font-size:19px;color:var(--tx-1);margin-bottom:var(--s4)}
.card:hover{box-shadow:var(--sh2)}
.card-i{background:var(--bg-1);border:1px solid var(--ln-0);border-radius:var(--r2);padding:var(--s3) var(--s4)}
.card-sm{background:var(--bg-1);border:1px solid var(--ln-0);border-radius:var(--r2);padding:var(--s2) var(--s3)}

/* ══ KPI TILES — Siemens: precise, data-forward ══ */
.kpi-grid{display:flex;flex-wrap:wrap;gap:var(--s3);margin-bottom:var(--s4)}.kpi-grid>.kpi{flex:1 1 148px}
.kpi{background:white;border:1px solid var(--ln-1);border-radius:var(--r3);padding:var(--s4) var(--s4) var(--s3);position:relative;overflow:hidden;transition:all var(--fast);cursor:default;box-shadow:var(--sh1)}
/* Philips top-border accent on hover */
.kpi::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:var(--a);transform:scaleX(0);transition:transform var(--fast);transform-origin:left;border-radius:var(--r3) var(--r3) 0 0}
.kpi:hover{box-shadow:var(--sh2);border-color:var(--a-b)}
.kpi:hover::before{transform:scaleX(1)}
.kpi-ico{width:26px;height:26px;border-radius:var(--r2);background:var(--a-s);display:flex;align-items:center;justify-content:center;font-size:11px;color:var(--a);margin-bottom:var(--s2)}
.kpi-lbl{font-size:10px;font-weight:600;color:var(--tx-3);letter-spacing:0.06em;text-transform:uppercase;margin-bottom:4px}
/* Siemens makes numbers dominant and precise */
.kpi-val{font-family:var(--fb);font-size:28px;font-weight:800;color:var(--tx-1);line-height:1;letter-spacing:-0.03em}
.kpi-val.ac{color:var(--a)} .kpi-val.sm{font-size:22px} .kpi-val.xs{font-size:17px} .kpi-val.ok{color:var(--ok)} .kpi-val.wn{color:var(--warn)}
.kpi-sub{font-size:10px;color:var(--tx-3);margin-top:5px;display:flex;align-items:center;gap:3px}
.kpi-sub.up{color:var(--ok)} .kpi-sub.dn{color:var(--err)} .kpi-sub.wn{color:var(--warn)}

/* ══ SECTION HEADERS — Philips clarity ══ */
.sect-hd{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:var(--s3);padding-bottom:var(--s2);border-bottom:1px solid var(--ln-1)}
.sect-ttl{font-family:var(--fd);font-size:22px;color:var(--tx-1);letter-spacing:-0.01em}
.sect-sub{font-size:var(--txs);color:var(--tx-3);margin-top:3px}

/* ══ BADGES ══ */
.badge{display:inline-flex;align-items:center;gap:3px;padding:2px 8px;border-radius:var(--rp);font-size:10px;font-weight:600;letter-spacing:0.02em;border:1px solid transparent}
.b-ok{background:var(--ok-bg);color:var(--ok);border-color:var(--ok-bd)}
.b-wn{background:var(--warn-bg);color:var(--warn);border-color:var(--warn-bd)}
.b-er{background:var(--err-bg);color:var(--err);border-color:var(--err-bd)}
.b-in{background:var(--info-bg);color:var(--info);border-color:var(--info-bd)}
.b-mu{background:var(--bg-2);color:var(--tx-2);border-color:var(--ln-1)}
.b-tm{background:var(--tm-s);color:var(--tm);border-color:var(--tm-b)}
.b-gd{background:var(--gd-s);color:var(--gd);border-color:var(--gd-b)}
.b-ac{background:var(--a-s);color:var(--a);border-color:var(--a-b)}

/* ══ FORMS — Philips: clean, accessible ══ */
.fr2{display:flex;gap:var(--s3)}.fr2>*{flex:1 1 0;min-width:0}
.fr3{display:flex;gap:var(--s3)}.fr3>*{flex:1 1 0;min-width:0}
.fg{margin-bottom:var(--s3)} .fg:last-child{margin-bottom:0}
.lbl{display:block;font-size:11px;font-weight:600;color:var(--tx-2);letter-spacing:0.02em;margin-bottom:5px}
.lbl.req::after{content:' *';color:var(--err)}
.inp,.sel,.tex{width:100%;background:white;border:1px solid var(--ln-2);border-radius:var(--r2);padding:10px var(--s3);font-size:var(--tsm);color:var(--tx-1);outline:none;transition:border-color var(--fast),box-shadow var(--fast);-webkit-appearance:none;font-family:var(--fb)}
.inp:focus,.sel:focus,.tex:focus{border-color:var(--philips);box-shadow:0 0 0 3px rgba(0,102,161,0.12)}
.inp::placeholder,.tex::placeholder{color:var(--tx-4)}
.sel{appearance:none;cursor:pointer;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%237a90aa' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 10px center;background-size:16px;padding-right:32px}
.sel option{background:white;color:var(--tx-1)}
.tex{resize:vertical;min-height:80px;line-height:1.6}
.chk{display:flex;align-items:center;gap:8px;cursor:pointer}
.chk input{accent-color:var(--philips);width:14px;height:14px;cursor:pointer}
.chk-lbl{font-size:var(--tsm);color:var(--tx-1)}
.hint{font-size:var(--txs);color:var(--tx-3);margin-top:4px;line-height:1.5}
.hint.wn{color:var(--warn)}
.ferr{font-size:var(--txs);color:var(--err);margin-top:var(--s2);display:flex;align-items:flex-start;gap:6px;padding:9px var(--s3);background:var(--err-bg);border:1px solid var(--err-bd);border-radius:var(--r2)}
.stars-row{display:flex;gap:3px}
.star-btn{font-size:21px;color:var(--bg-4);transition:color var(--fast);cursor:pointer;background:none;border:none;padding:0}
.star-btn.on{color:#f0a500}
.img-up{border:2px dashed var(--ln-2);border-radius:var(--r3);padding:var(--s6) var(--s5);text-align:center;cursor:pointer;transition:all var(--fast);position:relative;overflow:hidden;background:var(--bg-1)}
.img-up:hover{border-color:var(--philips);background:var(--philips-l)}
.img-up input{position:absolute;inset:0;opacity:0;cursor:pointer;width:100%;height:100%}
.img-preview{width:100%;height:160px;object-fit:cover;border-radius:var(--r2);margin-top:var(--s3);display:block;image-rendering:-webkit-optimize-contrast}

/* ══ TABLES — Amazon zebra + Siemens precision headers ══ */
.tbl-w{background:white;border:1px solid var(--ln-1);border-radius:var(--r3);overflow-x:auto;box-shadow:var(--sh1)}
.tbl{width:100%;border-collapse:collapse;min-width:680px}
.tbl thead tr{background:var(--sidebar);border-bottom:none}
.tbl th{padding:13px var(--s4);text-align:left;font-size:10px;font-weight:700;color:rgba(255,255,255,0.80);letter-spacing:0.08em;text-transform:uppercase;white-space:nowrap;font-family:var(--fb)}
/* Amazon zebra rows */
.tbl tbody tr:nth-child(odd) td{background:white}
.tbl tbody tr:nth-child(even) td{background:var(--bg-1)}
.tbl td{padding:14px var(--s4);font-size:var(--tsm);color:var(--tx-2);border-bottom:1px solid var(--ln-0)}
.tbl tr:last-child td{border-bottom:none}
.tbl tbody tr{transition:background var(--fast)}
.tbl tbody tr:hover td{background:var(--philips-l) !important;color:var(--tx-1)}

/* ══ PRODUCT CARDS — Amazon layout + Philips imagery ══ */
.prod-grid{display:flex;flex-wrap:wrap;gap:var(--s3);align-items:stretch}.prod-grid>.prod-card{flex:1 1 200px;max-width:280px;align-self:stretch}
.prod-card{background:white;border:1px solid var(--ln-1);border-radius:var(--r3);display:flex;flex-direction:column;transition:box-shadow var(--fast),border-color var(--fast),transform var(--fast);position:relative;overflow:hidden;box-shadow:var(--sh1)}
.prod-card:hover{box-shadow:var(--sh3);border-color:var(--philips);transform:translateY(-2px)}
.pc-img{width:100%;height:160px;position:relative;overflow:hidden;background:#ffffff;flex-shrink:0;display:flex;align-items:center;justify-content:center;border-bottom:1px solid var(--ln-0)}
.pc-img img{width:100%;height:100%;object-fit:cover;display:block;transition:transform var(--slow);-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:translateZ(0)}
.prod-card:hover .pc-img img{transform:scale(1.03)}
.pc-img-ph{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;background:linear-gradient(160deg,var(--bg-1) 0%,var(--philips-l) 100%)}
.pc-img-ph i{font-size:38px;color:var(--philips);opacity:0.35}
.pc-img-ph span{font-size:9px;color:var(--tx-3);font-weight:600;letter-spacing:0.08em;text-transform:uppercase}
.pc-img-badges{position:absolute;top:var(--s2);left:var(--s2);display:flex;flex-direction:row;gap:3px;align-items:center;flex-wrap:wrap;max-width:calc(100% - 8px)}
.pc-body{padding:var(--s2) var(--s3);flex:1;display:flex;flex-direction:column;min-height:0}
/* Title — Philips blue link style */
.pc-name{font-size:var(--tsm);font-weight:700;color:var(--philips);line-height:1.45;margin-bottom:var(--s2);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;cursor:pointer;text-transform:capitalize}
.pc-name:hover{color:var(--philips-d);text-decoration:underline}
.pc-seller{font-size:var(--txs);color:var(--tx-3);margin-bottom:var(--s1);display:flex;align-items:center;gap:3px}
.vbadge{color:var(--ok);font-size:9px}
.pc-loc{display:flex;align-items:center;gap:3px;font-size:var(--txs);color:var(--tx-3);margin-bottom:var(--s2)}
.pc-stars{display:flex;align-items:center;gap:1px;margin-bottom:var(--s1)}
.pc-star{font-size:11px;color:var(--bg-4)} .pc-star.on{color:#f0a500}
.pc-rating-count{font-size:10px;color:var(--philips);margin-left:4px}
.pc-desc{font-size:var(--txs);color:var(--tx-3);line-height:1.55;margin-bottom:var(--s2);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;flex-grow:1}
.pc-tags{display:flex;flex-wrap:wrap;gap:3px;margin-bottom:var(--s2)}
.pc-pr-row{margin-top:auto;padding-top:var(--s3);border-top:1px solid var(--ln-0)}
/* Price — confident, Philips blue not Amazon red */
.pc-price{font-family:var(--fb);font-size:22px;font-weight:800;color:var(--tx-1);line-height:1;letter-spacing:-0.02em}
.pc-price-sub{font-family:var(--fm);font-size:9px;color:var(--tx-3);margin-top:1px}
.pc-stock{font-size:10px;font-weight:600;margin-bottom:var(--s2);margin-top:var(--s1)}
.in-stock{color:var(--ok)} .low-stock{color:var(--warn)} .out-stock{color:var(--err)}
.pc-actions{display:flex;flex-direction:row;gap:var(--s2);margin-top:var(--s3);align-items:stretch}
.pc-actions .btn{justify-content:center}
.pc-actions .btn-sq{flex-shrink:0;align-self:stretch}

/* ══ REQUEST CARDS ══ */
.req-card{background:white;border:1px solid var(--ln-1);border-radius:var(--r3);padding:var(--s4) var(--s4);margin-bottom:var(--s3);transition:all var(--fast);position:relative;overflow:hidden;box-shadow:var(--sh1)}
.req-card:hover{box-shadow:var(--sh2);border-color:var(--ln-2)}
.req-card::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--a);border-radius:var(--r3) 0 0 var(--r3)}
.req-hd{display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--s4);gap:var(--s2);flex-wrap:wrap}
.req-num{font-family:var(--fm);font-size:var(--tsm);font-weight:600;color:var(--a);background:var(--a-s);border:1px solid var(--a-b);padding:3px 10px;border-radius:var(--rp)}

/* ══ STEPPER — Siemens precision ══ */
.stepper{display:flex;align-items:flex-start;margin-bottom:var(--s4);overflow-x:auto;padding-bottom:var(--s2);scrollbar-width:none}
.stepper::-webkit-scrollbar{display:none}
.step{flex:1;display:flex;flex-direction:column;align-items:center;position:relative;gap:5px;min-width:46px}
.step:not(:last-child)::after{content:'';position:absolute;top:9px;left:calc(50% + 10px);right:calc(-50% + 10px);height:2px;background:var(--ln-2);z-index:0;transition:background 0.4s}
.step.done:not(:last-child)::after{background:var(--philips);opacity:0.5}
.step-dot{width:20px;height:20px;border-radius:50%;border:2px solid var(--ln-2);background:white;display:flex;align-items:center;justify-content:center;font-size:6px;color:var(--tx-3);z-index:1;transition:all var(--fast);flex-shrink:0}
.step.done .step-dot{background:var(--philips);border-color:var(--philips);color:white;box-shadow:0 0 0 4px var(--philips-l)}
.step.cur .step-dot{border-color:var(--philips);background:white;color:var(--philips);box-shadow:0 0 0 4px var(--philips-l);animation:pstep 2s infinite}
@keyframes pstep{0%,100%{box-shadow:0 0 0 3px var(--philips-l)}50%{box-shadow:0 0 0 6px rgba(0,102,161,0.10)}}
.step-lbl{font-size:9px;color:var(--tx-4);white-space:nowrap;text-align:center;font-weight:500}
.step.done .step-lbl{color:var(--philips);font-weight:600}
.step.cur .step-lbl{color:var(--philips);font-weight:700}

/* ══ QUOTE ══ */
.quote-strip{background:var(--siemens-l);border:1px solid var(--gd-b);border-radius:var(--r2);padding:var(--s3) var(--s4);margin-bottom:var(--s3);display:flex;align-items:center;gap:var(--s3);flex-wrap:wrap}

/* ══ FINANCIALS ══ */
.req-fin{display:flex;gap:var(--s3);margin-bottom:var(--s3)}.req-fin>.fin-c{flex:1 1 0;min-width:0}
.fin-c{background:var(--bg-1);border-radius:var(--r2);padding:12px var(--s3);border:1px solid var(--ln-1)}
.fin-l{font-size:9px;font-weight:700;color:var(--tx-3);letter-spacing:0.08em;text-transform:uppercase;margin-bottom:4px}
.fin-v{font-family:var(--fm);font-size:12px;color:var(--tx-1);font-weight:600}
.fin-v.paid{color:var(--ok)} .fin-v.due{color:var(--warn)}
.req-items{background:white;border:1px solid var(--ln-1);border-radius:var(--r2);overflow:hidden;margin-bottom:var(--s3)}
.ri-row{display:flex;align-items:center;justify-content:space-between;padding:10px var(--s4);border-bottom:1px solid var(--ln-0);font-size:var(--tsm)}
.ri-row:nth-child(even){background:var(--bg-1)}
.ri-row:last-child{border-bottom:none}
.ri-name{color:var(--tx-2);flex:1}
.ri-qty{color:var(--tx-3);font-size:var(--txs);padding:0 var(--s3);font-family:var(--fm)}
.ri-price{font-family:var(--fm);font-size:11px;color:var(--tx-1);font-weight:700}

/* ══ STATUS DROPDOWN ══ */
.status-w{position:relative;display:inline-block}
.status-dd{position:absolute;top:calc(100% + 5px);right:0;background:white;border:1px solid var(--ln-2);border-radius:var(--r3);padding:4px;z-index:60;min-width:190px;box-shadow:var(--sh3)}
.s-opt{display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:var(--r2);font-size:var(--tsm);color:var(--tx-2);cursor:pointer;transition:background var(--fast)}
.s-opt:hover{background:var(--philips-l);color:var(--philips)}
.s-pip{width:7px;height:7px;border-radius:50%;flex-shrink:0}

/* ══ TIMELINE ══ */
.timeline{padding-left:var(--s6);position:relative}
.timeline::before{content:'';position:absolute;left:8px;top:10px;bottom:0;width:2px;background:var(--ln-1);border-radius:2px}
.tl-item{position:relative;padding-bottom:var(--s4)}
.tl-dot{position:absolute;left:calc(-1*var(--s6));top:3px;width:18px;height:18px;border-radius:50%;background:white;border:2px solid var(--ln-2);display:flex;align-items:center;justify-content:center;font-size:6px;color:var(--tx-3);z-index:2;transition:all var(--fast)}
.tl-dot.done{background:var(--philips);border-color:var(--philips);color:white;box-shadow:0 0 0 3px var(--philips-l)}
.tl-ttl{font-size:var(--tsm);font-weight:600;color:var(--tx-1)}
.tl-sub{font-size:var(--txs);color:var(--tx-3);margin-top:1px;font-family:var(--fm)}
.tl-desc{font-size:var(--txs);color:var(--tx-3);margin-top:2px}

/* ══ SHOPPER ══ */
.shopper-strip{background:var(--siemens-l);border:1px solid var(--gd-b);border-radius:var(--r2);padding:var(--s3) var(--s4);display:flex;align-items:center;gap:var(--s3);margin-bottom:var(--s3)}
.shopper-av{width:34px;height:34px;border-radius:50%;background:var(--siemens);color:white;display:flex;align-items:center;justify-content:center;font-family:var(--fd);font-size:14px;font-weight:800;flex-shrink:0}
.shopper-name{font-size:var(--tsm);font-weight:600;color:var(--tx-1)}
.shopper-meta{font-size:var(--txs);color:var(--tx-3);margin-top:1px}
.shopper-card{background:white;border:1px solid var(--ln-1);border-radius:var(--r3);padding:var(--s4);transition:all var(--fast);box-shadow:var(--sh1)}
.shopper-card:hover{box-shadow:var(--sh2);border-color:var(--gd-b)}
.sh-av{width:40px;height:40px;border-radius:50%;background:var(--siemens);color:white;display:flex;align-items:center;justify-content:center;font-family:var(--fd);font-size:18px;font-weight:800;flex-shrink:0}

/* ══ COST BOX ══ */
.cost-box{background:var(--bg-1);border:1px solid var(--ln-1);border-radius:var(--r3);padding:var(--s4);margin-bottom:var(--s3)}
.cost-ttl{font-size:10px;font-weight:700;color:var(--tx-2);letter-spacing:0.08em;text-transform:uppercase;margin-bottom:var(--s3);display:flex;align-items:center;gap:5px}
.cost-row{display:flex;justify-content:space-between;padding:6px 0;font-size:var(--tsm);border-bottom:1px solid var(--ln-0)}
.cost-row:last-child{border-bottom:none}
.c-l{color:var(--tx-3)} .c-v{font-family:var(--fm);font-size:11px;color:var(--tx-1);font-weight:600}
.cost-row.total .c-l{color:var(--tx-1);font-weight:700}
.cost-row.total .c-v{color:var(--philips);font-size:16px;font-weight:800;font-family:var(--fb)}

/* ══ ADDRESS CARD ══ */
.addr-card{background:white;border:1px solid var(--ln-1);border-radius:var(--r2);padding:var(--s3) var(--s4);display:flex;align-items:flex-start;gap:var(--s3);transition:all var(--fast);cursor:pointer;margin-bottom:var(--s2)}
.addr-card:hover,.addr-card.sel{border-color:var(--philips);background:var(--philips-l)}
.addr-ico{width:28px;height:28px;border-radius:var(--r2);background:var(--philips-l);display:flex;align-items:center;justify-content:center;font-size:12px;color:var(--philips);flex-shrink:0}

/* ══ REVIEWS ══ */
.review-stars{display:flex;gap:2px}
.rv-star{font-size:13px;color:var(--bg-4)} .rv-star.on{color:#f0a500}

/* ══ ANALYTICS ══ */
.chart-w{background:white;border:1px solid var(--ln-1);border-radius:var(--r3);padding:var(--s5);box-shadow:var(--sh1)}
.chart-ttl{font-family:var(--fd);font-size:20px;color:var(--tx-1);margin-bottom:var(--s4)}
.chart-c{position:relative;height:220px}

/* ══ MODALS — Philips: clean, wide focus ring ══ */
.modal-bg{position:fixed;inset:0;background:rgba(10,31,60,0.45);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;z-index:500;padding:var(--s4)}
.modal{background:white;border:1px solid var(--ln-1);border-top:3px solid var(--philips);border-radius:var(--r4);width:100%;max-width:540px;max-height:92vh;overflow-y:auto;box-shadow:var(--sh3)}
.modal-lg{max-width:680px} .modal-sm{max-width:400px} .modal-xl{max-width:820px}
.modal-hd{padding:var(--s5) var(--s5) var(--s4);border-bottom:1px solid var(--ln-1);display:flex;align-items:flex-start;justify-content:space-between;position:sticky;top:0;background:white;z-index:2}
.modal-ttl{font-family:var(--fd);font-size:22px;color:var(--tx-1)}
.modal-sub{font-size:var(--txs);color:var(--tx-3);margin-top:3px}
.modal-x{width:28px;height:28px;border-radius:var(--rp);background:var(--bg-2);color:var(--tx-3);display:flex;align-items:center;justify-content:center;font-size:11px;transition:all var(--fast);cursor:pointer;flex-shrink:0;border:none}
.modal-x:hover{color:var(--tx-1);background:var(--bg-3)}
.modal-body{padding:var(--s5) var(--s6)}
.modal-ft{padding:var(--s3) var(--s5) var(--s5);display:flex;gap:var(--s2);border-top:1px solid var(--ln-1);flex-wrap:wrap}
.auth-wrap{text-align:center;padding:var(--s6) var(--s5) var(--s3)}
.auth-mark{width:54px;height:54px;border-radius:var(--r3);background:var(--philips);display:flex;align-items:center;justify-content:center;color:white;font-size:22px;margin:0 auto var(--s4);box-shadow:0 4px 16px rgba(0,102,161,0.30)}
.auth-brand{font-family:var(--fd);font-size:30px;color:var(--tx-1);letter-spacing:-0.01em}
.auth-tabs{display:flex;background:var(--bg-1);border-radius:var(--rp);padding:3px;gap:2px;margin-bottom:var(--s4);border:1px solid var(--ln-1)}
.auth-tab{flex:1;padding:8px 4px;border-radius:var(--rp);font-size:11px;font-weight:600;color:var(--tx-3);transition:all var(--fast);text-align:center;cursor:pointer}
.auth-tab.active{background:white;color:var(--philips);box-shadow:var(--sh1);font-weight:700}

/* ══ MISC ══ */
.prog{height:4px;background:var(--bg-3);border-radius:2px;overflow:hidden;margin-top:5px}
.prog-f{height:100%;border-radius:2px;background:var(--a);transition:width 0.7s var(--ease)}
.hr{height:1px;background:var(--ln-1);margin:var(--s3) 0}
.mono{font-family:var(--fm);font-size:11px;color:var(--tx-3)}
.info-strip{display:flex;align-items:center;gap:var(--s3);padding:var(--s3) var(--s4);border-radius:var(--r2);margin-bottom:var(--s4)}
.info-strip.ac{background:var(--philips-l);border:1px solid var(--tm-b)}
.info-strip.ok{background:var(--ok-bg);border:1px solid var(--ok-bd)}
.info-strip.wn{background:var(--warn-bg);border:1px solid var(--warn-bd)}
.info-strip.er{background:var(--err-bg);border:1px solid var(--err-bd)}
.info-strip.in{background:var(--siemens-l);border:1px solid var(--gd-b)}
.empty{display:flex;flex-direction:column;align-items:center;text-align:center;padding:var(--s6) var(--s5)}
.empty-ico{width:56px;height:56px;border-radius:var(--r3);background:var(--philips-l);display:flex;align-items:center;justify-content:center;font-size:22px;color:var(--philips);margin-bottom:var(--s4)}
.empty-ttl{font-family:var(--fd);font-size:24px;color:var(--tx-1);margin-bottom:var(--s2)}
.empty-sub{font-size:var(--tsm);color:var(--tx-3);max-width:280px;line-height:1.7;margin-bottom:var(--s5)}
.feed-row{display:flex;align-items:center;justify-content:space-between;padding:11px 0;border-bottom:1px solid var(--ln-0);transition:all var(--fast)}
.feed-row:last-child{border-bottom:none}
.feed-row:hover{padding-left:4px}
.feed-ico{width:28px;height:28px;border-radius:var(--r2);display:flex;align-items:center;justify-content:center;font-size:11px;flex-shrink:0}
.feed-ico.tm{background:var(--philips-l);color:var(--philips)}
.feed-ico.gd{background:var(--siemens-l);color:var(--siemens)}
.feed-ico.ok{background:var(--ok-bg);color:var(--ok)}
.feed-ico.in{background:var(--info-bg);color:var(--info)}
.feed-ico.wn{background:var(--warn-bg);color:var(--warn)}
.dd-ov{position:fixed;top:calc(var(--th) + var(--rh) + 6px);right:var(--s4);width:310px;z-index:150;background:white;border:1px solid var(--ln-2);border-top:2px solid var(--philips);border-radius:var(--r3);padding:var(--s3);box-shadow:var(--sh3)}
.dd-hd{display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--s3);padding:0 var(--s2)}
.dd-hd-ttl{font-family:var(--fd);font-size:18px;color:var(--tx-1)}
.toast-stack{position:fixed;bottom:var(--s5);right:var(--s5);z-index:900;display:flex;flex-direction:column;gap:var(--s2);pointer-events:none}
.toast{background:white;border:1px solid var(--ln-1);border-radius:var(--r3);padding:12px var(--s4);display:flex;align-items:flex-start;gap:10px;min-width:260px;max-width:330px;pointer-events:all;animation:tIn 0.18s var(--ease) both;box-shadow:var(--sh3)}
@keyframes tIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
.toast.ok{border-left:3px solid var(--ok)} .toast.err{border-left:3px solid var(--err)}
.toast.info{border-left:3px solid var(--philips)} .toast.warn{border-left:3px solid var(--warn)}
.toast-ttl{font-size:var(--tsm);font-weight:700;color:var(--tx-1)}
.toast-msg{font-size:var(--txs);color:var(--tx-3);margin-top:2px;line-height:1.5}
.toast-x{color:var(--tx-3);font-size:11px;flex-shrink:0;transition:color var(--fast);cursor:pointer;margin-left:auto}
.toast-x:hover{color:var(--tx-1)}
.load-ov{position:fixed;inset:0;background:rgba(244,246,249,0.92);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;z-index:800}
.load-box{background:white;border:1px solid var(--ln-1);border-top:3px solid var(--philips);border-radius:var(--r4);padding:var(--s7) var(--s8);text-align:center;min-width:180px;box-shadow:var(--sh3)}
.spinner{width:32px;height:32px;border:3px solid var(--philips-l);border-top-color:var(--philips);border-radius:50%;animation:spin 0.7s linear infinite;margin:0 auto var(--s4)}
@keyframes spin{to{transform:rotate(360deg)}}
.load-lbl{font-size:var(--tsm);color:var(--tx-2);font-weight:500}
.cfm-ico{width:52px;height:52px;border-radius:var(--r3);display:flex;align-items:center;justify-content:center;font-size:22px;margin-bottom:var(--s4)}
.cfm-ico.wn{background:var(--warn-bg);color:var(--warn)} .cfm-ico.er{background:var(--err-bg);color:var(--err)}
.cfm-ico.ok{background:var(--ok-bg);color:var(--ok)} .cfm-ico.in{background:var(--philips-l);color:var(--philips)}
@media print{body{background:white;color:black}.sidebar,.topbar,.rate-bar,.toast-stack,.no-print{display:none!important}.main{margin-left:0}.print-quote{display:block!important}*{print-color-adjust:exact;-webkit-print-color-adjust:exact}}
.print-quote{display:none}
.g2{display:flex;gap:var(--s5)}.g2>*{flex:1 1 0;min-width:0}
.g3{display:flex;gap:var(--s4)}.g3>*{flex:1 1 0;min-width:0}
.fu{animation:fu 0.26s var(--ease) both}
.fu-1{animation-delay:0.06s} .fu-2{animation-delay:0.12s}
.fu-3{animation-delay:0.18s} .fu-4{animation-delay:0.24s} .fu-5{animation-delay:0.30s}
@keyframes fu{from{opacity:0;transform:translateY(9px)}to{opacity:1;transform:translateY(0)}}
.fade-enter-active,.fade-leave-active{transition:opacity var(--fast)}
.fade-enter-from,.fade-leave-to{opacity:0}
.modal-enter-active,.modal-leave-active{transition:all 0.22s var(--ease)}
.modal-enter-from{opacity:0;transform:translateY(16px) scale(0.97)}
.modal-leave-to{opacity:0;transform:translateY(8px) scale(0.98)}
.slide-enter-active,.slide-leave-active{transition:all 0.16s var(--ease)}
.slide-enter-from{opacity:0;transform:translateY(-7px)}
.slide-leave-to{opacity:0;transform:translateY(-3px)}
@media(max-width:1100px){.plat-tag{display:none}}
@media(max-width:860px){
  .btn-p .btn-label{display:none}
  .btn-p.btn-sm{padding:8px 12px}
  .sidebar{transform:translateX(-100%)}
  .sidebar.open{transform:translateX(0);box-shadow:var(--sh3)}
  .sb-backdrop.show{display:block}
  .sb-close{display:flex}
  .main{margin-left:0}
  .mob-btn{display:flex}
  .kpi-grid>.kpi{flex:1 1 calc(50% - var(--s2))}
  .g2,.g3{flex-direction:column;gap:var(--s4)}
  .content{padding:var(--s4) var(--s4)}
  .topbar,.rate-bar{padding:0 var(--s4)}
  .srch-w{display:none}
  .mob-search-btn{display:flex}
  .dd-ov{right:var(--s2);width:calc(100vw - var(--s4))}
}
@media(max-width:520px){
  .fr2,.fr3{flex-direction:column}
  .req-fin>.fin-c{flex:1 1 calc(50% - var(--s2))}
  .modal-bg{padding:var(--s2);align-items:flex-end}
  .modal{max-height:90vh;border-radius:var(--r3) var(--r3) 0 0}
  .prod-grid>.prod-card{flex:1 1 calc(50% - var(--s2));max-width:none}
  .content{padding:var(--s3)}
  .kpi-grid>.kpi{flex:1 1 calc(50% - var(--s2))}
}
@supports(padding-bottom:env(safe-area-inset-bottom)){
  .sb-user{padding-bottom:calc(var(--s3) + env(safe-area-inset-bottom))}
}

/* ── Light dropdown nav items (for white panels) ── */
.dd-ov .nav-item{color:var(--tx-2);border-left-color:transparent;padding:9px var(--s3)}
.dd-ov .nav-item:hover{background:var(--philips-l);color:var(--philips)}
.dd-ov .nav-item.active{background:var(--philips-l);color:var(--philips);border-left-color:var(--philips)}
.dd-ov .nav-item .ni{color:var(--tx-3)}
.dd-ov .nav-item:hover .ni{color:var(--philips)}

/* ── Mobile search expand ── */
.mob-search-btn{display:none;width:32px;height:32px;border-radius:var(--r2);background:rgba(255,255,255,0.10);border:1px solid rgba(255,255,255,0.18);color:rgba(255,255,255,0.85);align-items:center;justify-content:center;font-size:12px;transition:all var(--fast);cursor:pointer}
.mob-search-bar{display:none;position:absolute;top:calc(var(--th) + var(--rh));left:0;right:0;padding:var(--s3) var(--s4);background:white;border-bottom:2px solid var(--philips);box-shadow:var(--sh2);z-index:99}
.mob-search-bar.open{display:flex;gap:var(--s2)}
.mob-search-bar input{flex:1;background:var(--bg-1);border:1px solid var(--ln-2);border-radius:var(--rp);padding:9px var(--s4);font-size:var(--tsm);color:var(--tx-1);outline:none;font-family:var(--fb)}
.mob-search-bar input:focus{border-color:var(--philips);box-shadow:0 0 0 3px rgba(0,102,161,0.12)}

/* ── Pagination ── */
.pgn{display:flex;align-items:center;gap:var(--s2);margin-top:var(--s4);justify-content:center}
.pgn-btn{display:inline-flex;align-items:center;gap:5px;padding:7px 14px;border-radius:var(--r2);font-family:var(--fb);font-size:var(--tsm);font-weight:600;border:1px solid var(--ln-2);background:white;color:var(--tx-2);cursor:pointer;transition:all var(--fast)}
.pgn-btn:hover:not(:disabled){background:var(--philips-l);color:var(--philips);border-color:var(--tm-b)}
.pgn-btn:disabled{opacity:0.35;cursor:not-allowed}
.pgn-info{font-size:var(--txs);color:var(--tx-3);font-family:var(--fm);padding:0 var(--s2)}

/* ── Auth Landing Screen ── */
.auth-landing{position:fixed;inset:0;background:var(--sidebar);z-index:1000;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:var(--s5)}
.auth-landing-mark{width:72px;height:72px;border-radius:var(--r3);background:var(--philips);display:flex;align-items:center;justify-content:center;color:white;font-size:32px;animation:landingPulse 2s ease-in-out infinite;box-shadow:0 0 0 0 rgba(0,102,161,0.4)}
@keyframes landingPulse{0%,100%{box-shadow:0 0 0 0 rgba(0,102,161,0.4)}50%{box-shadow:0 0 0 18px rgba(0,102,161,0)}}
.auth-landing-brand{font-family:var(--fd);font-size:28px;color:white;letter-spacing:-0.01em}
.auth-landing-brand em{color:#4dc8d0;font-style:normal}
.auth-landing-msg{font-size:var(--tsm);color:rgba(255,255,255,0.55);letter-spacing:0.02em}
.auth-landing-spinner{width:28px;height:28px;border:2px solid rgba(255,255,255,0.15);border-top-color:var(--philips);border-radius:50%;animation:spin 0.8s linear infinite}
.auth-landing-sub{font-size:var(--txs);color:rgba(255,255,255,0.3);max-width:280px;text-align:center;line-height:1.6}
/* ── Password Update Screen ── */
.pw-update-screen{position:fixed;inset:0;background:var(--bg-1);z-index:999;display:flex;align-items:center;justify-content:center;padding:var(--s4)}
.pw-update-card{background:white;border:1px solid var(--ln-1);border-top:3px solid var(--philips);border-radius:var(--r4);width:100%;max-width:420px;padding:var(--s7) var(--s6);box-shadow:var(--sh3);text-align:center}


/* ════════════════════════════════════════════════════════════════
   ONBOARDING OVERLAY
════════════════════════════════════════════════════════════════ */
.ob-shell{position:fixed;inset:0;z-index:1100;background:rgba(10,31,60,0.92);backdrop-filter:blur(8px);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:var(--s4)}
.ob-dots{display:flex;gap:8px;margin-bottom:var(--s5)}
.ob-dot{width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,0.2);transition:all 0.3s}
.ob-dot.active{background:#4dc8d0;width:24px;border-radius:4px}
.ob-dot.done{background:rgba(77,200,208,0.5)}
.ob-card{background:white;border-radius:var(--r4);padding:var(--s5) var(--s5);max-width:480px;width:100%;text-align:center;box-shadow:0 24px 64px rgba(0,0,0,0.4)}
.ob-card-wide{max-width:580px}
.ob-icon{width:52px;height:52px;background:var(--philips-l);border-radius:50%;margin:0 auto var(--s3);display:flex;align-items:center;justify-content:center;font-size:22px;color:var(--philips)}
.ob-icon-b{background:#e5f8f0;color:#1a7a4a}
.ob-ttl{font-family:var(--fd);font-size:22px;color:var(--tx-1);margin-bottom:var(--s1)}
.ob-sub{font-size:var(--tsm);color:var(--tx-3);line-height:1.6;margin-bottom:var(--s4);max-width:380px;margin-left:auto;margin-right:auto}
/* Role buttons */
.ob-role-grid{display:grid;grid-template-columns:1fr 1fr;gap:var(--s3);margin-bottom:var(--s4)}
.ob-role-both{grid-column:1/-1}
.ob-role-btn{background:var(--bg-1);border:2px solid var(--ln-1);border-radius:var(--r3);padding:var(--s4) var(--s3);cursor:pointer;transition:all 0.2s;text-align:center}
.ob-role-btn:hover{border-color:var(--philips);background:var(--philips-l)}
.ob-role-btn i{font-size:22px;color:var(--philips);margin-bottom:var(--s2);display:block}
.ob-role-lbl{font-family:var(--fd);font-size:17px;color:var(--tx-1);margin-bottom:4px}
.ob-role-sub{font-size:var(--txs);color:var(--tx-3);line-height:1.4}
/* Type buttons */
.ob-type-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--s2);margin-bottom:var(--s4)}
.ob-type-btn{background:var(--bg-1);border:2px solid var(--ln-1);border-radius:var(--r2);padding:var(--s3) var(--s2);cursor:pointer;transition:all 0.2s;display:flex;flex-direction:column;align-items:center;gap:6px;font-size:var(--tsm);color:var(--tx-1);font-family:var(--fb)}
.ob-type-btn:hover{border-color:var(--philips);background:var(--philips-l)}
.ob-type-btn i{font-size:18px;color:var(--philips)}
/* Avatar in onboarding */
.ob-av-wrap{display:flex;flex-direction:column;align-items:center;margin-bottom:var(--s2)}
.ob-av-ring{width:96px;height:96px;border-radius:50%;border:3px dashed var(--ln-2);cursor:pointer;position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden;transition:border-color 0.2s;background:var(--bg-1)}
.ob-av-ring:hover{border-color:var(--philips)}
.ob-av-img{width:100%;height:100%;object-fit:cover;border-radius:50%}
.ob-av-ph{font-size:28px;color:var(--tx-3)}
.ob-av-badge{position:absolute;bottom:4px;right:4px;width:22px;height:22px;background:var(--philips);border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;border:2px solid white}
/* Progress bar in onboarding */
.ob-pct-bar{height:6px;background:var(--bg-3);border-radius:3px;overflow:hidden;width:100%;margin-top:var(--s4)}
.ob-pct-fill{height:100%;background:var(--philips);border-radius:3px;transition:width 0.5s ease}
.ob-skip{background:none;border:none;color:var(--tx-3);font-size:var(--txs);cursor:pointer;margin-top:var(--s3);padding:4px 8px;border-radius:var(--r1)}
.ob-skip:hover{color:var(--tx-2);background:var(--bg-2)}
.ob-back{background:none;border:1px solid var(--ln-2);color:var(--tx-2);font-size:var(--tsm);cursor:pointer;padding:8px 16px;border-radius:var(--r2);margin-top:var(--s3)}

/* ════════════════════════════════════════════════════════════════
   SIDEBAR PROFILE CARD with completeness ring
════════════════════════════════════════════════════════════════ */
.sb-profile-card{display:flex;align-items:center;gap:var(--s3);padding:var(--s3);cursor:pointer;border-radius:var(--r2);margin:0 var(--s2) var(--s2);transition:background 0.15s}
.sb-profile-card:hover{background:rgba(255,255,255,0.07)}
.sb-av-wrap{position:relative;width:52px;height:52px;flex-shrink:0;margin-bottom:10px}
.sb-av-ring-svg{position:absolute;inset:0;width:100%;height:100%}
.sb-av-inner{position:absolute;inset:4px;border-radius:50%;overflow:hidden;background:var(--sidebar-2);display:flex;align-items:center;justify-content:center}
.sb-av-photo{width:100%;height:100%;object-fit:cover}
.sb-av-init{font-family:var(--fb);font-size:18px;font-weight:700;color:white}
.sb-av-pct{position:absolute;bottom:-10px;left:50%;transform:translateX(-50%);background:var(--philips);color:white;font-size:8px;font-family:var(--fm);font-weight:700;padding:2px 6px;border-radius:8px;white-space:nowrap;border:2px solid var(--sidebar);line-height:1.2}
.sb-next-step{font-size:9px;color:rgba(77,200,208,0.75);margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:120px}

/* ════════════════════════════════════════════════════════════════
   PROFILE MODAL AVATAR
════════════════════════════════════════════════════════════════ */
.prof-av-wrap{width:88px;height:88px;border-radius:50%;margin:0 auto;position:relative;cursor:pointer;overflow:hidden;border:3px solid var(--philips-l);transition:border-color 0.2s}
.prof-av-wrap:hover{border-color:var(--philips)}
.prof-av-img{width:100%;height:100%;object-fit:cover;display:block}
.prof-av-ph{width:100%;height:100%;background:var(--philips-l);display:flex;align-items:center;justify-content:center;font-family:var(--fb);font-size:32px;font-weight:700;color:var(--philips)}
.prof-av-edit{position:absolute;bottom:0;left:0;right:0;background:rgba(0,102,161,0.75);height:26px;display:flex;align-items:center;justify-content:center;color:white;font-size:10px;gap:4px}

/* ════════════════════════════════════════════════════════════════
   DASHBOARD COMPLETENESS CARD
════════════════════════════════════════════════════════════════ */
.ob-progress-card{background:white;border:1px solid var(--ln-1);border-top:3px solid var(--philips);border-radius:var(--r3);padding:var(--s4);margin-bottom:var(--s4);box-shadow:var(--sh1)}
.ob-track{height:5px;background:var(--bg-3);border-radius:3px;overflow:hidden;margin-bottom:var(--s3)}
.ob-fill{height:100%;background:linear-gradient(90deg,var(--philips),var(--siemens));border-radius:4px;transition:width 0.8s ease}
.ob-unlocks{display:flex;gap:var(--s2);flex-wrap:wrap;margin-bottom:var(--s3)}
.ob-unlock{display:flex;flex-direction:column;align-items:center;gap:3px;flex:1;min-width:70px;padding:var(--s2) var(--s2);background:var(--bg-1);border-radius:var(--r2);border:1px solid var(--ln-1);opacity:0.45;transition:opacity 0.3s}
.ob-unlock.done{opacity:1;border-color:var(--ok);background:#f0faf5}
.ob-unlock-icon{width:26px;height:26px;border-radius:50%;background:var(--bg-2);display:flex;align-items:center;justify-content:center;font-size:11px;color:var(--tx-3)}
.ob-unlock.done .ob-unlock-icon{background:#d4f0e4;color:var(--ok)}
.ob-unlock-lbl{font-size:10px;color:var(--tx-2);text-align:center;line-height:1.3}
.ob-unlock-at{font-family:var(--fm);font-size:9px;color:var(--tx-4)}
.ob-cta{display:flex;align-items:center;gap:var(--s2);padding:var(--s2) var(--s3);background:var(--philips-l);border-radius:var(--r2);font-size:var(--txs);color:var(--philips)}
.ob-cta i{color:var(--philips)}

/* ════════════════════════════════════════════════════════════════
   PRODUCT DETAIL MODAL
════════════════════════════════════════════════════════════════ */
.pd-modal{padding:0;overflow:hidden;max-width:900px;display:flex;flex-direction:column;max-height:90vh}
/* Hero image */
.pd-hero{position:relative;height:260px;background:var(--sidebar);flex-shrink:0;overflow:hidden}
.pd-hero-name{position:absolute;bottom:0;left:0;right:0;padding:40px var(--s4) var(--s3);background:linear-gradient(to top,rgba(10,31,60,0.92) 0%,rgba(10,31,60,0.3) 60%,transparent 100%);z-index:1}
.pd-hero-name-text{font-family:var(--fd);font-size:22px;color:white;line-height:1.2;text-shadow:0 1px 3px rgba(0,0,0,0.4);text-transform:none}
.pd-hero-img{width:100%;height:100%;object-fit:cover;display:block}
.pd-hero-ph{width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--sidebar) 0%,#0d2a50 100%)}
.pd-hero-badges{position:absolute;top:var(--s3);left:var(--s3);display:flex;gap:var(--s2);flex-wrap:wrap;z-index:2}
.pd-hbadge{backdrop-filter:blur(6px);background:rgba(10,31,60,0.65)!important;border:1px solid rgba(255,255,255,0.20)!important;color:white!important;font-weight:600}
.pd-hbadge.b-ok{background:rgba(26,122,74,0.8)!important;color:white!important}
.pd-hbadge.b-tm{background:rgba(0,102,161,0.8)!important;color:white!important}
.pd-close{position:absolute;top:var(--s3);right:var(--s3);width:32px;height:32px;border-radius:50%;background:rgba(0,0,0,0.45);border:1px solid rgba(255,255,255,0.2);color:white;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:13px;transition:background 0.15s;backdrop-filter:blur(4px)}
.pd-close:hover{background:rgba(0,0,0,0.7)}
/* Body split */
.pd-body{display:flex;flex:1;overflow:hidden}
.pd-info{flex:1;overflow-y:auto;padding:var(--s4) var(--s4) var(--s5);min-width:0}
.pd-panel{width:250px;flex-shrink:0;border-left:1px solid var(--ln-1);padding:var(--s3);background:var(--bg-1);overflow-y:auto;display:flex;flex-direction:column}
/* Product name + seller */
.pd-name{font-family:var(--fd);font-size:24px;color:var(--tx-1);line-height:1.2;margin-bottom:var(--s3);letter-spacing:-0.01em;text-transform:none}
.pd-seller{display:flex;align-items:center;gap:var(--s3);margin-bottom:var(--s3);padding:var(--s2) var(--s3);background:var(--bg-1);border-radius:var(--r2)}
.pd-seller-av{width:32px;height:32px;border-radius:50%;background:var(--philips-l);color:var(--philips);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0}
/* Section titles */
.pd-section-ttl{font-size:10px;font-weight:700;color:var(--tx-4);letter-spacing:0.12em;text-transform:uppercase;margin-bottom:var(--s2);margin-top:var(--s4)}
.pd-desc{font-size:var(--tsm);color:var(--tx-2);line-height:1.75}
/* Specs */
.pd-specs{display:flex;flex-direction:column;gap:1px;border-radius:var(--r2);overflow:hidden;border:1px solid var(--ln-1)}
.pd-spec{display:flex;align-items:center;gap:var(--s3);padding:10px var(--s3);background:white}
.pd-spec:nth-child(even){background:var(--bg-1)}
.pd-spec-l{font-size:var(--txs);color:var(--tx-3);min-width:130px;flex-shrink:0}
.pd-spec-v{font-size:var(--tsm);color:var(--tx-1);font-weight:500}
/* Flags */
.pd-flag{display:inline-flex;align-items:center;gap:6px;font-size:var(--txs);color:var(--tx-2);background:var(--bg-2);padding:6px 10px;border-radius:var(--rp);border:1px solid var(--ln-1)}
.pd-flag i{color:var(--tx-3);font-size:10px}
.pd-flag-ok{background:#f0faf5;border-color:#c8ead8;color:var(--ok)}
.pd-flag-ok i{color:var(--ok)}
/* Reviews */
.pd-review{padding:var(--s3) var(--s4);background:var(--bg-1);border-radius:var(--r2);border:1px solid var(--ln-1)}
.pd-rv-av{width:28px;height:28px;border-radius:50%;background:var(--philips-l);color:var(--philips);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0}
/* Price panel */
.pd-price-block{padding:var(--s4);background:white;border:1px solid var(--ln-1);border-radius:var(--r3);margin-bottom:var(--s4);text-align:center}
.pd-price-usd{font-family:var(--fb);font-size:28px;font-weight:800;color:var(--tx-1);line-height:1}
.pd-price-tzs{font-family:var(--fm);font-size:var(--tsm);color:var(--tx-3);margin-top:4px}
/* Info box */
.pd-info-box{padding:var(--s3);background:white;border:1px solid var(--ln-1);border-radius:var(--r2);display:flex;flex-direction:column;gap:var(--s2)}
.pd-info-row{display:flex;align-items:center;gap:var(--s2);font-size:var(--txs);color:var(--tx-2)}
.pd-info-row i{color:var(--philips);width:14px;text-align:center;font-size:10px;flex-shrink:0}
/* Responsive */
@media(max-width:700px){
  .pd-body{flex-direction:column}
  .pd-panel{width:100%;border-left:none;border-top:1px solid var(--ln-1)}
  .pd-hero{height:200px}
  .pd-modal{max-height:95vh}
}

/* ── Topbar profile avatar ── */
.tb-av{width:34px;height:34px;border-radius:50%;background:var(--philips-l);border:2px solid var(--philips);cursor:pointer;position:relative;flex-shrink:0;display:flex;align-items:center;justify-content:center;transition:box-shadow 0.15s;overflow:visible}
.tb-av:hover{box-shadow:0 0 0 3px rgba(0,102,161,0.15)}
.tb-av-img{width:100%;height:100%;object-fit:cover;border-radius:50%;display:block}
.tb-av-init{font-family:var(--fb);font-size:13px;font-weight:700;color:var(--philips)}
.tb-av-dot{position:absolute;bottom:0;right:0;width:8px;height:8px;background:var(--ok);border-radius:50%;border:2px solid white}

/* ── Browse filter bar ── */
.browse-filters{display:flex;flex-wrap:wrap;gap:var(--s2);align-items:center;margin-bottom:var(--s5);background:white;border:1px solid var(--ln-1);border-radius:var(--r3);padding:var(--s3) var(--s4);box-shadow:var(--sh1)}

/* ── Product card image hover overlay ── */
.pc-img-hoverable{overflow:hidden}
.pc-hover-overlay{position:absolute;inset:0;background:rgba(0,31,60,0.52);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;opacity:0;transition:opacity 0.2s;color:white;pointer-events:none;z-index:2}
.pc-hover-overlay i{font-size:22px;opacity:0.9}
.pc-hover-overlay span{font-size:11px;font-weight:600;letter-spacing:0.04em;text-transform:uppercase}
.pc-img-hoverable:hover .pc-hover-overlay{opacity:1}

/* ── Active filter state ── */
.sel-active{border-color:var(--philips)!important;background:var(--philips-l)!important;color:var(--philips)!important;font-weight:600}

/* ── Clear filters chip ── */
.filter-clear-btn{display:inline-flex;align-items:center;gap:5px;padding:4px 12px;border-radius:var(--rp);background:var(--philips);color:white;font-size:var(--txs);font-weight:600;border:none;cursor:pointer;font-family:var(--fb);transition:all var(--fast)}
.filter-clear-btn:hover{background:var(--philips-d);transform:translateY(-1px)}

/* ── Payment summary card ── */
.pmt-summary{background:var(--bg-1);border:1px solid var(--ln-1);border-radius:var(--r2);padding:var(--s3) var(--s4);margin-bottom:var(--s4);display:flex;flex-direction:column;gap:6px}
.pmt-summary-row{display:flex;justify-content:space-between;align-items:center;font-size:var(--tsm);color:var(--tx-2)}
.pmt-summary-row span:first-child{color:var(--tx-3)}
.pmt-summary-due{padding-top:8px;border-top:1px solid var(--ln-1);margin-top:2px;font-weight:700}
.pmt-summary-due span:first-child{color:var(--tx-1)}
.pmt-summary-due .mono{color:var(--warn);font-size:16px}

/* ── Profile completeness strip (dashboard) ── */
.pct-strip{background:white;border:1px solid var(--ln-1);border-left:3px solid var(--philips);border-radius:var(--r2);padding:10px var(--s3);margin-bottom:var(--s4);display:flex;flex-direction:column;gap:8px}
.pct-row1{display:flex;align-items:center;gap:10px}
.pct-lbl{font-size:var(--txs);font-weight:600;color:var(--tx-2);white-space:nowrap}
.pct-bar-wrap{flex:1;height:5px;background:var(--bg-3);border-radius:3px;overflow:hidden}
.pct-bar-fill{height:100%;background:linear-gradient(90deg,var(--philips),var(--siemens));border-radius:3px;transition:width 0.8s ease}
.pct-num{font-family:var(--fm);font-size:12px;font-weight:700;color:var(--philips);white-space:nowrap;min-width:30px;text-align:right}
.pct-milestones{display:flex;gap:6px;flex-wrap:wrap}
.pct-pill{display:inline-flex;align-items:center;gap:4px;padding:2px 8px;border-radius:var(--rp);font-size:10px;font-weight:500;background:var(--bg-2);color:var(--tx-3);border:1px solid var(--ln-1);opacity:0.5;transition:all 0.2s}
.pct-pill.done{background:var(--ok-bg);color:var(--ok);border-color:var(--ok-bd);opacity:1}
.pct-pill i{font-size:9px}
.pct-next{display:flex;align-items:center;gap:6px;font-size:var(--txs);color:var(--tx-3);padding-top:4px;border-top:1px solid var(--ln-0)}
.pct-next strong{color:var(--philips);font-weight:600}

/* ── Mobile: filter selects stack ── */
@media(max-width:640px){
  .card .fr2{flex-direction:column}
  .browse-filters{padding:var(--s2) var(--s2)}
  .browse-filters .sel{width:100%!important;max-width:none!important}
  .rate-bar{flex-wrap:wrap;height:auto;padding:4px var(--s3);gap:0}
  .rate-item{border-right:none;padding:2px var(--s2)}
  .rate-ticker{display:none}
}
/* ── Mobile: stepper compact ── */
@media(max-width:520px){
  .stepper{gap:0}
  .step-dot{width:18px;height:18px;font-size:7px}
  .step-lbl{font-size:8px;max-width:40px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .step::after{height:1px}
  .req-fin{flex-wrap:wrap}
  .req-fin>.fin-c{flex:1 1 calc(50% - var(--s2))}
  .pct-milestones{gap:4px}
  .pct-pill span{display:none}
  .tbl{min-width:480px}
  .modal-ft{flex-wrap:wrap;gap:var(--s2)}
  .modal-ft .btn{flex:1 1 auto}
}
/* ── Mobile: request source type buttons stack ── */
@media(max-width:480px){
  .modal-body .fr2{flex-direction:column}
  div[style*="display:flex;gap:var(--s2)"] > button.btn-sm[style*="flex:1"]{flex:1 1 100%}
}

/* ════════════════════════════════════════════════════════════════
   3D VIEWER — product detail modal
════════════════════════════════════════════════════════════════ */

/* View toggle tab bar — sits at bottom of hero */
.pd-view-tabs{position:absolute;bottom:0;left:50%;transform:translateX(-50%);display:flex;gap:2px;background:rgba(10,31,60,0.70);backdrop-filter:blur(10px);border-radius:var(--r3) var(--r3) 0 0;padding:4px 4px 0;z-index:10;border:1px solid rgba(255,255,255,0.10);border-bottom:none}
.pd-view-tab{display:inline-flex;align-items:center;gap:5px;padding:6px 16px;border-radius:var(--r2) var(--r2) 0 0;font-size:11px;font-weight:600;color:rgba(255,255,255,0.50);background:transparent;border:none;cursor:pointer;transition:all 0.18s;letter-spacing:0.02em;position:relative}
.pd-view-tab:hover{color:rgba(255,255,255,0.80);background:rgba(255,255,255,0.06)}
.pd-view-tab.active{color:white;background:rgba(255,255,255,0.12);box-shadow:inset 0 1px 0 rgba(255,255,255,0.15)}
.pd-view-tab i{font-size:10px}

/* Green dot: 3D model available */
.pd-3d-dot{width:5px;height:5px;border-radius:50%;background:#4dc8d0;display:inline-block;margin-left:3px;animation:pulse3d 2s ease-in-out infinite}
@keyframes pulse3d{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.6;transform:scale(0.8)}}

/* AR button inside model-viewer */
.pd-ar-btn{position:absolute;bottom:var(--s3);right:var(--s3);display:inline-flex;align-items:center;gap:6px;padding:8px 16px;background:rgba(0,102,161,0.85);color:white;border:1px solid rgba(255,255,255,0.25);border-radius:var(--rp);font-size:12px;font-weight:600;cursor:pointer;backdrop-filter:blur(8px);letter-spacing:0.02em;transition:all 0.15s}
.pd-ar-btn:hover{background:rgba(0,102,161,1);transform:translateY(-1px)}
.pd-ar-btn i{font-size:10px}

/* model-viewer: prevent it from capturing scroll outside modal */
model-viewer{display:block;outline:none}
model-viewer:focus{outline:none}

/* 3D loading progress bar */
.pd-3d-progress{position:absolute;bottom:0;left:0;right:0;height:2px;background:rgba(255,255,255,0.1)}
.pd-3d-progress-fill{height:100%;background:var(--siemens);width:0%;transition:width 0.3s}

/* Hero height: taller in 3D mode to give model space */
.pd-hero.mode-3d{height:320px}

/* 3D badge on product cards — shown when model_url exists */
.pc-3d-badge{position:absolute;bottom:var(--s2);right:var(--s2);display:inline-flex;align-items:center;gap:3px;padding:2px 7px;border-radius:var(--rp);background:rgba(10,31,60,0.65);color:#4dc8d0;font-size:9px;font-weight:700;border:1px solid rgba(77,200,208,0.35);backdrop-filter:blur(6px);letter-spacing:0.04em}
.pc-3d-badge i{font-size:8px}

/* ════════════════════════════════════════════════════════════════
   LANDING PAGE (guest hero + carousel)
════════════════════════════════════════════════════════════════ */
.lp-wrap{display:flex;flex-direction:column;gap:0}
.lp-hero{display:grid;grid-template-columns:1fr 200px;gap:var(--s5);align-items:start;background:linear-gradient(135deg,var(--sidebar) 0%,#0d2a50 100%);border-radius:var(--r4);padding:var(--s6) var(--s6);margin-bottom:var(--s5);color:white;overflow:hidden;position:relative}
.lp-hero::after{content:'';position:absolute;right:-40px;top:-40px;width:300px;height:300px;border-radius:50%;background:rgba(77,200,208,0.06);pointer-events:none}
.lp-tagline{font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:rgba(77,200,208,0.8);margin-bottom:var(--s2)}
.lp-headline{font-family:var(--fd);font-size:38px;line-height:1.1;color:white;margin-bottom:var(--s3)}
.lp-sub{font-size:var(--tsm);color:rgba(255,255,255,0.65);line-height:1.7;max-width:420px}
.lp-trust{display:flex;gap:var(--s3);flex-wrap:wrap;margin-top:var(--s4)}
.lp-trust-item{display:flex;align-items:center;gap:5px;font-size:var(--txs);color:rgba(255,255,255,0.6)}
.lp-stats{display:flex;flex-direction:column;gap:var(--s3)}
.lp-stat{background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.10);border-radius:var(--r3);padding:var(--s3) var(--s4);text-align:center}
.lp-stat-val{font-family:var(--fm);font-size:22px;font-weight:700;color:#4dc8d0}
.lp-stat-lbl{font-size:9px;color:rgba(255,255,255,0.45);text-transform:uppercase;letter-spacing:0.06em;margin-top:2px}
/* Carousel */
.lp-section-ttl{font-size:10px;font-weight:700;color:var(--tx-4);letter-spacing:0.12em;text-transform:uppercase;margin-bottom:var(--s3)}
.lp-carousel-wrap{position:relative;overflow:hidden;border-radius:var(--r3)}
.lp-carousel{display:flex;gap:var(--s3);transition:transform 0.4s cubic-bezier(0.22,1,0.36,1);will-change:transform;padding-bottom:4px}
.lp-card{background:white;border:1px solid var(--ln-1);border-radius:var(--r3);min-width:200px;max-width:200px;cursor:pointer;transition:all 0.2s;flex-shrink:0;overflow:hidden;box-shadow:var(--sh1)}
.lp-card:hover{transform:translateY(-3px);box-shadow:var(--sh3);border-color:var(--philips)}
.lp-card-img{height:130px;position:relative;background:var(--bg-1);overflow:hidden;display:flex;align-items:center;justify-content:center}
.lp-card-img img{width:100%;height:100%;object-fit:cover;transition:transform 0.3s}
.lp-card:hover .lp-card-img img{transform:scale(1.04)}
.lp-card-img i{font-size:28px;color:var(--bg-5)}
.lp-card-badge{position:absolute;top:6px;left:6px;background:rgba(26,122,74,0.85);color:white;font-size:8px;font-weight:700;padding:2px 6px;border-radius:var(--rp);backdrop-filter:blur(4px)}
.lp-card-3d{position:absolute;bottom:6px;right:6px;background:rgba(10,31,60,0.70);color:#4dc8d0;font-size:8px;font-weight:700;padding:2px 6px;border-radius:var(--rp)}
.lp-card-body{padding:10px 12px}
.lp-card-name{font-size:var(--tsm);font-weight:700;color:var(--philips);line-height:1.3;margin-bottom:3px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.lp-card-seller{font-size:9px;color:var(--tx-3);margin-bottom:4px;display:flex;align-items:center;gap:3px}
.lp-card-price{font-family:var(--fb);font-size:18px;font-weight:800;color:var(--tx-1);line-height:1}
.lp-card-tzs{font-family:var(--fm);font-size:9px;color:var(--tx-3);margin-top:1px}
.lp-card-stock{font-size:9px;font-weight:600;margin-top:4px}
/* Carousel arrows */
.lp-arrow{position:absolute;top:50%;transform:translateY(-50%);width:32px;height:32px;border-radius:50%;background:white;border:1px solid var(--ln-2);color:var(--tx-2);display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:var(--sh2);transition:all 0.15s;z-index:5}
.lp-arrow:hover:not(:disabled){background:var(--philips);color:white;border-color:var(--philips)}
.lp-arrow:disabled{opacity:0.3;cursor:not-allowed}
.lp-prev{left:-14px}.lp-next{right:-14px}
/* Categories */
.lp-cats{display:flex;gap:var(--s2);flex-wrap:wrap;margin-bottom:var(--s4)}
.lp-cat{display:flex;align-items:center;gap:6px;padding:8px 14px;background:white;border:1px solid var(--ln-1);border-radius:var(--rp);cursor:pointer;font-size:var(--tsm);color:var(--tx-2);font-weight:500;transition:all 0.15s;box-shadow:var(--sh1)}
.lp-cat:hover{background:var(--philips-l);color:var(--philips);border-color:var(--tm-b)}
.lp-cat i{font-size:12px;color:var(--philips)}
@media(max-width:640px){.lp-hero{grid-template-columns:1fr}.lp-stats{flex-direction:row;flex-wrap:wrap}.lp-stat{flex:1 1 calc(50% - var(--s2))}.lp-headline{font-size:26px}.lp-arrow{display:none}}

/* ── Basket styles ── */
.basket-row{display:flex;align-items:center;gap:var(--s3);padding:var(--s3);background:var(--bg-1);border-radius:var(--r2);margin-bottom:var(--s2);border:1px solid var(--ln-1)}
.basket-img{width:44px;height:44px;border-radius:var(--r2);overflow:hidden;background:var(--bg-2);flex-shrink:0;display:flex;align-items:center;justify-content:center}
.basket-img img{width:100%;height:100%;object-fit:cover}
.basket-qty-row{display:flex;align-items:center;gap:6px;margin-top:6px}

/* ── Large landing carousel cards ── */
.lp-card-lg{background:white;border:1px solid var(--ln-1);border-radius:var(--r3);min-width:250px;max-width:250px;cursor:pointer;transition:all 0.22s;flex-shrink:0;overflow:hidden;box-shadow:var(--sh2)}
.lp-card-lg:hover{transform:translateY(-4px);box-shadow:var(--sh3);border-color:var(--philips)}
.lp-card-lg-img{height:160px;position:relative;background:linear-gradient(160deg,var(--sidebar) 0%,#0d2a50 100%);overflow:hidden;display:flex;align-items:center;justify-content:center}
.lp-card-lg:hover .lp-card-lg-img img{transform:scale(1.06)}
.lp-card-lg-ph{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%}
.lp-card-lg-overlay{position:absolute;inset:0;background:rgba(10,31,60,0.72);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;opacity:0;transition:opacity 0.2s;color:white;font-size:12px;font-weight:600}
.lp-card-lg:hover .lp-card-lg-overlay{opacity:1}
.lp-card-lg-body{padding:12px 14px}
.lp-card-lg-name{font-size:var(--tsm);font-weight:700;color:var(--philips);line-height:1.3;margin-bottom:4px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-transform:capitalize}

/* ── Analytics admin KPI extra ── */
.kpi-collected{background:var(--ok-bg);border-color:var(--ok-bd)}
.kpi-collected .kpi-val{color:var(--ok)}

/* ── Mobile carousel ── */
@media(max-width:640px){
  .lp-card-lg{min-width:200px;max-width:200px}
  .lp-card-lg-img{height:130px}
}

/* ── Logo image support ── */
.logo-mark-img{background:transparent!important;box-shadow:none!important;padding:0;overflow:hidden}
.logo-img{width:100%;height:100%;object-fit:contain;border-radius:var(--r2)}

/* ── Admin user card grid ── */
.admin-user-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:var(--s3)}
.admin-user-card{background:white;border:1px solid var(--ln-1);border-radius:var(--r3);padding:var(--s4);cursor:pointer;transition:all 0.15s;box-shadow:var(--sh1);display:flex;flex-direction:column;gap:var(--s3)}
.admin-user-card:hover{border-color:var(--philips);box-shadow:var(--sh2);transform:translateY(-1px)}
/* Avatar row */
.auc-av{position:relative;width:48px;height:48px;border-radius:50%;background:var(--philips-l);display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;color:var(--philips);flex-shrink:0;overflow:hidden}
.auc-av-img{width:100%;height:100%;object-fit:cover}
.auc-status{position:absolute;bottom:1px;right:1px;width:10px;height:10px;border-radius:50%;border:2px solid white}
.auc-status.active{background:var(--ok)}
.auc-status.inactive{background:var(--tx-4)}
.auc-info{flex:1;min-width:0}
.auc-name{font-size:var(--tsm);font-weight:700;color:var(--tx-1);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.auc-email{font-size:var(--txs);color:var(--tx-3);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:1px}
.auc-phone{font-size:var(--txs);color:var(--tx-3);margin-top:1px;display:flex;align-items:center;gap:3px}
/* First row: avatar + info side by side */
.admin-user-card{display:grid;grid-template-areas:"av info" "badges badges" "stats stats" "actions actions";grid-template-columns:48px 1fr;gap:var(--s2) var(--s3)}
.auc-av{grid-area:av;align-self:center}
.auc-info{grid-area:info}
.auc-badges{grid-area:badges;display:flex;gap:4px;flex-wrap:wrap}
.auc-stats{grid-area:stats;display:flex;gap:var(--s3);padding:var(--s2) 0;border-top:1px solid var(--ln-0);border-bottom:1px solid var(--ln-0)}
.auc-stat{flex:1;text-align:center}
.auc-stat-val{font-family:var(--fm);font-size:12px;font-weight:700;color:var(--tx-1)}
.auc-stat-lbl{font-size:9px;color:var(--tx-3);text-transform:uppercase;letter-spacing:0.06em;margin-top:1px}
.auc-actions{grid-area:actions;display:flex;gap:var(--s2);justify-content:flex-end}

/* Mobile grid */
@media(max-width:600px){
  .admin-user-grid{grid-template-columns:1fr}
}

/* ── Admin triage panel ── */
.triage-panel{background:white;border:1px solid var(--ln-1);border-left:3px solid var(--warn);border-radius:var(--r3);padding:var(--s3) var(--s4);margin-bottom:var(--s4);box-shadow:var(--sh1)}
.triage-hd{font-size:var(--txs);font-weight:700;color:var(--warn);margin-bottom:var(--s2);display:flex;align-items:center;gap:6px;letter-spacing:0.04em;text-transform:uppercase}
.triage-items{display:flex;flex-direction:column;gap:6px}
.triage-item{display:flex;align-items:center;gap:10px;padding:8px 12px;border-radius:var(--r2);font-size:var(--tsm);cursor:pointer;transition:all 0.15s}
.triage-item:hover{filter:brightness(0.96)}
.triage-item i:first-child{font-size:13px;width:18px;text-align:center;flex-shrink:0}
.ti-warn{background:var(--warn-bg);color:var(--warn);border:1px solid var(--warn-bd)}
.ti-info{background:var(--info-bg);color:var(--info);border:1px solid var(--info-bd)}
.ti-ok{background:var(--ok-bg);color:var(--ok);border:1px solid var(--ok-bd)}
.ti-err{background:var(--err-bg);color:var(--err);border:1px solid var(--err-bd)}

/* ── Admin mode topbar tag ── */
.admin-mode-tag{display:inline-flex;align-items:center;gap:5px;padding:3px 12px;border-radius:var(--rp);background:rgba(192,57,43,0.12);border:1px solid rgba(192,57,43,0.25);font-size:9px;font-weight:700;color:#e8806a;letter-spacing:0.04em;text-transform:uppercase}
.admin-mode-tag i{font-size:9px}

</style>
</head>
<body>
<div id="app" v-cloak>

<!-- ── D: AUTH LANDING SCREEN ── -->
<transition name="fade">
  <div v-if="authLanding" class="auth-landing">
    <div class="auth-landing-mark"><i class="fas fa-heart-pulse"></i></div>
    <div class="auth-landing-brand">Tech<em>Medix</em>Link</div>
    <div class="auth-landing-spinner"></div>
    <div class="auth-landing-msg">{{  authLandingMsg  }}</div>
    <div class="auth-landing-sub">Please wait while we verify your identity. You will be redirected automatically.</div>
  </div>
</transition>

<!-- ── F: PASSWORD UPDATE SCREEN ── -->
<transition name="fade">
  <div v-if="showPasswordUpdate" class="pw-update-screen">
    <div class="pw-update-card">
      <div style="width:56px;height:56px;background:var(--philips-l);border-radius:50%;margin:0 auto var(--s4);display:flex;align-items:center;justify-content:center;font-size:22px;color:var(--philips)"><i class="fas fa-lock-open"></i></div>
      <div style="font-family:var(--fd);font-size:26px;color:var(--tx-1);margin-bottom:var(--s2)">Set New Password</div>
      <div style="font-size:var(--tsm);color:var(--tx-3);margin-bottom:var(--s5);line-height:1.6">Choose a strong password for your TechMedixLink account.</div>
      <div class="fg" style="text-align:left">
        <label class="lbl req">New Password</label>
        <input type="password" v-model="newPassword" class="inp" placeholder="Minimum 6 characters" autocomplete="new-password" @keydown.enter="updatePassword">
        <!-- Password strength bar -->
        <div v-if="newPassword" style="margin-top:var(--s2)">
          <div style="height:4px;background:var(--bg-3);border-radius:2px;overflow:hidden">
            <div :style="{width:newPassword.length<6?'25%':newPassword.length<8?'50%':/[A-Z]/.test(newPassword)&&/[0-9]/.test(newPassword)?'100%':'75%',background:newPassword.length<6?'var(--err)':newPassword.length<8?'var(--warn)':/[A-Z]/.test(newPassword)&&/[0-9]/.test(newPassword)?'var(--ok)':'var(--warn)',transition:'all 0.3s',height:'100%',borderRadius:'2px'}"></div>
          </div>
          <div style="font-size:10px;margin-top:3px;" :style="{color:newPassword.length<6?'var(--err)':newPassword.length<8?'var(--warn)':/[A-Z]/.test(newPassword)&&/[0-9]/.test(newPassword)?'var(--ok)':'var(--warn)'}">
            {{  newPassword.length<6?'Too short':newPassword.length<8?'Weak -- add more characters':(/[A-Z]/.test(newPassword)&&/[0-9]/.test(newPassword))?'Strong OK':'Good -- add uppercase & numbers'  }}
          </div>
        </div>
        <div v-if="newPasswordErr" class="ferr" style="margin-top:var(--s2)"><i class="fas fa-circle-exclamation" style="flex-shrink:0"></i>{{  newPasswordErr  }}</div>
      </div>
      <button @click="updatePassword" class="btn btn-p btn-wc" style="margin-top:var(--s4)" :disabled="!newPassword||newPassword.length<6"><i class="fas fa-check"></i>Update Password</button>
      <div style="margin-top:var(--s3)">
        <span @click="showPasswordUpdate=false;doLogout()" style="font-size:var(--txs);color:var(--tx-3);cursor:pointer">Cancel and sign out</span>
      </div>
    </div>
  </div>
</transition>

<div class="amb-a"></div>
<div class="amb-b"></div>

<!-- LOADER -->
<transition name="fade">
  <div v-if="loading" class="load-ov">
    <div class="load-box">
      <div class="spinner"></div>
      <p class="load-lbl">{{  loadMsg  }}</p>
    </div>
  </div>
</transition>

<!-- TOASTS -->
<div class="toast-stack">
  <div v-for="t in toasts" :key="t.id" class="toast" :class="t.type">
    <div style="flex:1"><p class="toast-ttl">{{  t.title  }}</p><p v-if="t.msg" class="toast-msg">{{  t.msg  }}</p></div>
    <span class="toast-x" @click="killToast(t.id)">✕</span>
  </div>
</div>

<!-- CONFIRM -->
<transition name="modal">
  <div v-if="confirm" class="modal-bg" @click.self="confirm=null">
    <div class="modal modal-sm">
      <div class="modal-body" style="text-align:center;padding:var(--s5) var(--s5) var(--s6)">
        <div class="cfm-ico" :class="confirm.tone||'wn'" style="margin:0 auto var(--s4)"><i :class="confirm.icon||'fas fa-triangle-exclamation'"></i></div>
        <div style="font-family:var(--fd);font-size:23px;font-weight:500;color:var(--tx-1);margin-bottom:var(--s2)">{{  confirm.title  }}</div>
        <div style="font-size:var(--tsm);color:var(--tx-2);max-width:280px;margin:0 auto var(--s6);line-height:1.6">{{  confirm.msg  }}</div>
        <div style="display:flex;gap:var(--s2);justify-content:center">
          <button @click="confirm.ok();confirm=null" class="btn btn-p">{{  confirm.ok_lbl||'Confirm'  }}</button>
          <button @click="confirm=null" class="btn btn-g">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</transition>

<!-- AUTH MODAL -->
<transition name="modal">
  <div v-if="showAuth" class="modal-bg">
    <div class="modal modal-sm">
      <div class="auth-wrap">
        <div class="auth-mark"><i class="fas fa-heart-pulse"></i></div>
        <div class="auth-brand">TechMedixLink</div>
        <div style="font-size:10px;color:var(--tx-3);letter-spacing:0.14em;text-transform:uppercase;margin-top:4px">Medical Equipment · Tanzania</div>
      </div>
      <div class="modal-body" style="padding-top:0">
        <div class="auth-tabs">
          <div class="auth-tab" :class="{active:authTab==='login'}"  @click="authTab='login';authErr=''">Sign In</div>
          <div class="auth-tab" :class="{active:authTab==='magic'}"  @click="authTab='magic';authErr=''">Magic Link</div>
          <div class="auth-tab" :class="{active:authTab==='signup'}" @click="authTab='signup';authErr=''">Sign Up</div>
          <div class="auth-tab" :class="{active:authTab==='reset'}"  @click="authTab='reset';authErr=''">Reset</div>
        </div>
        <!-- LOGIN -->
        <div v-if="authTab==='login'">
          <div class="fg">
            <label class="lbl req">Email, phone or name</label>
            <input type="text" v-model="aF.loginId" class="inp" placeholder="you@email.com · +255 712… · John Doe"
              autocomplete="username" @keydown.enter="doLogin">
            <div class="hint"><i class="fas fa-info-circle"></i> You can sign in with your email address, phone number (+255…) or full name</div>
          </div>
          <div class="fg"><label class="lbl req">Password</label><input type="password" v-model="aF.password" class="inp" placeholder="••••••••" autocomplete="current-password" @keydown.enter="doLogin"></div>
          <button @click="doLogin" class="btn btn-p btn-wc" style="margin-bottom:var(--s3)" :disabled="!aF.loginId||!aF.password"><i class="fas fa-sign-in-alt"></i> Sign In</button>
          <p style="text-align:center;font-size:var(--txs);color:var(--tx-3);margin-top:var(--s2)">No password? <span @click="authTab='magic'" style="color:var(--a);cursor:pointer;font-weight:600">Use magic link →</span></p>
          <p style="text-align:center;font-size:var(--txs);color:var(--tx-3);margin-top:var(--s1)">Forgot password? <span @click="authTab='reset'" style="color:var(--a);cursor:pointer;font-weight:600">Reset it →</span></p>
        </div>
        <!-- MAGIC LINK -->
        <div v-if="authTab==='magic'">
          <div v-if="!magicSent">
            <div class="info-strip in"><i class="fas fa-wand-magic-sparkles" style="color:var(--info);flex-shrink:0"></i><div style="font-size:var(--txs);color:var(--info);line-height:1.5">One-click sign-in — no password needed.</div></div>
            <div class="fg"><label class="lbl req">Email Address</label><input type="email" v-model="aF.email" class="inp" placeholder="you@example.com" @keydown.enter="doMagicLink"></div>
            <button @click="doMagicLink" class="btn btn-p btn-wc" :disabled="!aF.email"><i class="fas fa-paper-plane"></i> Send Magic Link</button>
          </div>
          <div v-else style="text-align:center;padding:var(--s6) 0">
            <div style="font-size:40px;margin-bottom:var(--s3)">📬</div>
            <div style="font-family:var(--fd);font-size:22px;font-weight:500;color:var(--tx-1);margin-bottom:var(--s2)">Check your inbox</div>
            <div style="font-size:var(--tsm);color:var(--tx-2);line-height:1.65">Sent to <strong style="color:var(--a)">{{  aF.email  }}</strong></div>
            <div style="font-size:var(--txs);color:var(--tx-3);margin-top:var(--s3)">Check spam if not received within 2 minutes.</div>
            <button @click="magicSent=false;aF.email=''" class="btn btn-g btn-sm" style="margin-top:var(--s4)"><i class="fas fa-arrow-left"></i> Different email</button>
          </div>
        </div>
        <!-- SIGNUP -->
        <div v-if="authTab==='signup'">
          <div class="fr2">
            <div class="fg"><label class="lbl req">Full Name</label><input type="text" v-model="aF.full_name" class="inp" placeholder="Your full name" autocomplete="name"></div>
            <div class="fg">
              <label class="lbl req">Phone (Tanzania)</label>
              <div style="display:flex;align-items:center;gap:6px">
                <span style="font-size:var(--tsm);color:var(--tx-3);white-space:nowrap;padding:10px 10px;background:var(--bg-1);border:1px solid var(--ln-2);border-radius:var(--r2)">🇹🇿 +255</span>
                <input type="tel" v-model="aF.phone" class="inp" placeholder="7XX XXX XXX" style="flex:1">
              </div>
              <div class="hint">Used for M-Pesa payments and WhatsApp updates</div>
            </div>
          </div>
          <div class="fg">
            <label class="lbl req">Email Address</label>
            <input type="email" v-model="aF.email" class="inp" placeholder="you@example.com" autocomplete="email">
            <div class="hint"><i class="fab fa-whatsapp" style="color:#25d366"></i> We'll send order updates to your email. Use phone as your sign-in backup.</div>
          </div>
          <div class="fg"><label class="lbl req">Password</label><input type="password" v-model="aF.password" class="inp" placeholder="Minimum 8 characters" autocomplete="new-password">
            <!-- Password strength bar -->
            <div v-if="aF.password" style="margin-top:var(--s2)">
              <div style="height:4px;background:var(--bg-3);border-radius:2px;overflow:hidden">
                <div :style="{width: aF.password.length<6?'25%':aF.password.length<8?'50%':/[A-Z]/.test(aF.password)&&/[0-9]/.test(aF.password)?'100%':'75%', background: aF.password.length<6?'var(--err)':aF.password.length<8?'var(--warn)':/[A-Z]/.test(aF.password)&&/[0-9]/.test(aF.password)?'var(--ok)':'var(--warn)', transition:'all 0.3s', height:'100%', borderRadius:'2px'}" ></div>
              </div>
              <div style="font-size:10px;margin-top:3px;" :style="{color: aF.password.length<6?'var(--err)':aF.password.length<8?'var(--warn)':/[A-Z]/.test(aF.password)&&/[0-9]/.test(aF.password)?'var(--ok)':'var(--warn)'}">
                {{  aF.password.length<6?'Too short -- min 6 characters':aF.password.length<8?'Weak -- try 8+ characters':(/[A-Z]/.test(aF.password)&&/[0-9]/.test(aF.password))?'Strong password OK':'Good -- add uppercase & numbers for strong password'  }}
              </div>
            </div>
          </div>
          <div class="fr2">
            <div class="fg"><label class="lbl req">I want to…</label><select v-model="aF.user_role" class="sel"><option value="buyer">Buy products</option><option value="seller">Sell products</option><option value="both">Buy & Sell</option></select></div>
            <div class="fg"><label class="lbl req">Account Type</label><select v-model="aF.user_type" class="sel"><option value="individual">Individual</option><option value="hospital">Hospital</option><option value="clinic">Clinic</option><option value="lab">Laboratory</option><option value="business">Business</option><option value="ngo">NGO</option></select></div>
          </div>
          <div class="fg" v-if="['hospital','clinic','lab','business','ngo'].includes(aF.user_type)"><label class="lbl">Organisation Name</label><input type="text" v-model="aF.company_name" class="inp" placeholder="Your organisation"></div>
          <div class="fg" style="margin-top:var(--s2)">
            <label class="chk"><input type="checkbox" v-model="tcAccepted"><span class="chk-lbl" style="font-size:var(--txs)">I agree to the <span @click.prevent="showTcModal=true" style="color:var(--philips);cursor:pointer;text-decoration:underline">Terms of Service</span> and <span @click.prevent="showTcModal=true" style="color:var(--philips);cursor:pointer;text-decoration:underline">Privacy Policy</span> of TechMedixLink</span></label>
          </div>
          <button @click="doSignup" class="btn btn-p btn-wc" :disabled="!aF.email||!aF.password||!aF.full_name||!tcAccepted"><i class="fas fa-user-plus"></i> Create Account</button>
        </div>
        <!-- PASSWORD RESET -->
        <div v-if="authTab==='reset'">
          <div v-if="!magicSent">
            <div class="info-strip in"><i class="fas fa-key" style="color:var(--info);flex-shrink:0"></i><div style="font-size:var(--txs);color:var(--info);line-height:1.5">Enter your email and we'll send a secure password reset link.</div></div>
            <div class="fg"><label class="lbl req">Email Address</label><input type="email" v-model="aF.email" class="inp" placeholder="you@example.com" @keydown.enter="doPasswordReset"></div>
            <button @click="doPasswordReset" class="btn btn-p btn-wc" :disabled="!aF.email"><i class="fas fa-paper-plane"></i> Send Reset Link</button>
          </div>
          <div v-else style="text-align:center;padding:var(--s6) 0">
            <div style="font-size:40px;margin-bottom:var(--s3)">🔑</div>
            <div style="font-family:var(--fd);font-size:22px;color:var(--tx-1);margin-bottom:var(--s2)">Check your inbox</div>
            <div style="font-size:var(--tsm);color:var(--tx-2);line-height:1.65">Reset link sent to <strong style="color:var(--a)">{{  aF.email  }}</strong></div>
            <div style="font-size:var(--txs);color:var(--tx-3);margin-top:var(--s3)">Link expires in 1 hour. Check your spam folder if not received.</div>
            <button @click="magicSent=false;aF.email='';authTab='login'" class="btn btn-g btn-sm" style="margin-top:var(--s4)"><i class="fas fa-arrow-left"></i> Back to Sign In</button>
          </div>
        </div>
        <!-- Rate limit countdown -->
        <div v-if="rateLimitSecs>0" style="margin-top:var(--s3);padding:var(--s3) var(--s4);background:var(--warn-bg);border:1px solid var(--warn-bd);border-radius:var(--r2);text-align:center">
          <div style="font-size:var(--tsm);font-weight:600;color:var(--warn);margin-bottom:4px"><i class="fas fa-clock"></i> Email limit reached</div>
          <div style="font-family:var(--fm);font-size:22px;font-weight:700;color:var(--warn);letter-spacing:0.04em;margin-bottom:4px">{{  fCountdown(rateLimitSecs)  }}</div>
          <div style="font-size:var(--txs);color:var(--tx-3);line-height:1.5">For security, only 1 email can be sent per hour. You can use your existing link or try again after the timer expires.</div>
          <div style="font-size:var(--txs);color:var(--tx-3);margin-top:var(--s2)">Tip: Check your spam folder — the email may already be there.</div>
        </div>
        <div v-if="authErr && !rateLimitSecs" class="ferr" style="margin-top:var(--s3)"><i class="fas fa-circle-exclamation" style="flex-shrink:0;margin-top:1px"></i>{{  authErr  }}</div>
      </div>
    </div>
  </div>
</transition>


<!-- ══════════════════════════════════════════════════════════════
     ONBOARDING OVERLAY
══════════════════════════════════════════════════════════════ -->
<transition name="fade">
<div v-if="showOnboarding" class="ob-shell">

  <!-- Progress dots -->
  <div class="ob-dots">
    <div v-for="s in 4" :key="s" class="ob-dot" :class="{active:onboardStep===s,done:onboardStep>s}"></div>
  </div>

  <!-- ── STEP 1: Role ── -->
  <div v-if="onboardStep===1" class="ob-card">
    <div class="ob-icon"><i class="fas fa-heart-pulse"></i></div>
    <div class="ob-ttl">Welcome to TechMedixLink</div>
    <div class="ob-sub">Tanzania's medical equipment marketplace. How will you use the platform?</div>
    <div class="ob-role-grid">
      <button @click="obSetRole('buyer')" class="ob-role-btn">
        <i class="fas fa-cart-shopping"></i>
        <div class="ob-role-lbl">I want to buy</div>
        <div class="ob-role-sub">Source medical equipment for my facility</div>
      </button>
      <button @click="obSetRole('seller')" class="ob-role-btn">
        <i class="fas fa-store"></i>
        <div class="ob-role-lbl">I want to sell</div>
        <div class="ob-role-sub">List and sell medical equipment</div>
      </button>
      <button @click="obSetRole('both')" class="ob-role-btn ob-role-both">
        <i class="fas fa-arrows-left-right"></i>
        <div class="ob-role-lbl">Buy & Sell</div>
        <div class="ob-role-sub">I do both — full access</div>
      </button>
    </div>
    <button @click="obSkip" class="ob-skip">Skip for now</button>
  </div>

  <!-- ── STEP 2: Account type ── -->
  <div v-if="onboardStep===2" class="ob-card">
    <div class="ob-icon ob-icon-b"><i class="fas fa-building-columns"></i></div>
    <div class="ob-ttl">What describes you best?</div>
    <div class="ob-sub">This helps us show you the right products and documentation requirements.</div>
    <div class="ob-type-grid">
      <button v-for="t in [{v:'individual',i:'fa-user',l:'Individual'},{v:'hospital',i:'fa-hospital',l:'Hospital'},{v:'clinic',i:'fa-stethoscope',l:'Clinic'},{v:'lab',i:'fa-flask',l:'Laboratory'},{v:'business',i:'fa-building',l:'Business'},{v:'ngo',i:'fa-heart',l:'NGO'}]"
        :key="t.v" @click="obSetType(t.v)" class="ob-type-btn">
        <i class="fas" :class="t.i"></i>
        <span>{{  t.l  }}</span>
      </button>
    </div>
    <button @click="onboardStep=1" class="ob-back"><i class="fas fa-arrow-left"></i> Back</button>
  </div>

  <!-- ── STEP 3: Core profile + avatar ── -->
  <div v-if="onboardStep===3" class="ob-card ob-card-wide">
    <div class="ob-ttl">Build your profile</div>
    <div class="ob-sub">A complete profile builds trust with buyers and sellers.</div>

    <!-- Avatar upload -->
    <div class="ob-av-wrap">
      <div class="ob-av-ring" @click="$refs.obAvInput.click()">
        <img v-if="obF.avatar_preview" :src="obF.avatar_preview" class="ob-av-img">
        <div v-else class="ob-av-ph"><i class="fas fa-camera"></i></div>
        <div class="ob-av-badge"><i class="fas fa-plus" style="font-size:9px"></i></div>
      </div>
      <input ref="obAvInput" type="file" accept="image/jpeg,image/jpg,image/png,image/webp" @change="obHandleAvatar" style="display:none">
      <div style="font-size:var(--txs);color:var(--tx-3);margin-top:var(--s2)">Passport-style photo · Max 3MB</div>
    </div>

    <!-- Fields -->
    <div class="fr2" style="width:100%;margin-top:var(--s4)">
      <div class="fg"><label class="lbl req">Full Name</label><input type="text" v-model="obF.full_name" class="inp" placeholder="Your full legal name" autocomplete="name"></div>
      <div class="fg"><label class="lbl">Phone</label><input type="tel" v-model="obF.phone" class="inp" placeholder="+255 7XX XXX XXX"></div>
    </div>

    <!-- Completion preview -->
    <div class="ob-pct-bar">
      <div class="ob-pct-fill" :style="{width: (obF.full_name?(obF.avatar_preview?55:35):15)+'%'}"></div>
    </div>
    <div style="font-size:var(--txs);color:var(--tx-3);margin-top:var(--s2)">
      Profile {{  obF.full_name?(obF.avatar_preview?'55':'35'):'15'  }}% complete after this step
    </div>

    <div style="display:flex;gap:var(--s3);margin-top:var(--s5);width:100%;justify-content:center">
      <button @click="onboardStep=2" class="btn btn-g"><i class="fas fa-arrow-left"></i>Back</button>
      <button @click="obSaveProfile" class="btn btn-p" :disabled="!obF.full_name||obF.avatar_uploading">
        <span v-if="obF.avatar_uploading"><div class="spinner" style="width:14px;height:14px;margin:0 4px 0 0;border-width:1.5px;display:inline-block;vertical-align:middle"></div>Uploading…</span>
        <span v-else><i class="fas fa-arrow-right"></i>Continue</span>
      </button>
    </div>
  </div>

  <!-- ── STEP 4: Role-specific detail ── -->
  <div v-if="onboardStep===4" class="ob-card ob-card-wide">
    <div class="ob-ttl">Almost done!</div>
    <!-- Buyer detail -->
    <template v-if="profile&&['buyer','both'].includes(profile.user_role)">
      <div class="ob-sub">Tell us about your facility so we can show you the right products.</div>
      <div class="fr2" style="width:100%;margin-top:var(--s4)">
        <div class="fg"><label class="lbl">Facility / Organisation</label><input type="text" v-model="obF.facility_type" class="inp" placeholder="e.g. Muhimbili Hospital"></div>
        <div class="fg"><label class="lbl">Region</label>
          <select v-model="obF.supply_region" class="sel">
            <option>Dar es Salaam</option><option>Arusha</option><option>Mwanza</option><option>Dodoma</option><option>Zanzibar</option><option>Mbeya</option><option>Morogoro</option><option>Other</option>
          </select>
        </div>
      </div>
      <div class="fg" style="width:100%"><label class="lbl">Bed count (if hospital/clinic)</label><input type="number" v-model="obF.bed_count" class="inp" placeholder="e.g. 250" style="max-width:200px"></div>
    </template>
    <!-- Seller detail -->
    <template v-if="profile&&['seller'].includes(profile.user_role)">
      <div class="ob-sub">Verify your business to earn the seller trust badge on all your listings.</div>
      <div class="fr2" style="width:100%;margin-top:var(--s4)">
        <div class="fg"><label class="lbl">Business Registration No.</label><input type="text" v-model="obF.business_reg" class="inp" placeholder="e.g. 123456789"></div>
        <div class="fg"><label class="lbl">TMDA License No. (optional)</label><input type="text" v-model="obF.tmda_license" class="inp" placeholder="For medical devices"></div>
      </div>
    </template>
    <div style="display:flex;gap:var(--s3);margin-top:var(--s5);width:100%;justify-content:center">
      <button @click="onboardStep=3" class="btn btn-g"><i class="fas fa-arrow-left"></i>Back</button>
      <button @click="obSaveRoleDetail" class="btn btn-p"><i class="fas fa-check"></i>Complete Profile</button>
    </div>
    <button @click="obSkip" class="ob-skip" style="margin-top:var(--s3)">Skip — I'll do this later</button>
  </div>

</div>
</transition>

<div class="shell">
  <div class="sb-backdrop" :class="{show:sidebarOpen}" @click="sidebarOpen=false"></div>

  <!-- ═══ SIDEBAR ═══ -->
  <aside class="sidebar" :class="{open:sidebarOpen}">
    <button class="sb-close" @click="sidebarOpen=false"><i class="fas fa-times"></i></button>
    <div class="sb-top">
      <div class="logo">
        <!-- Logo image from Supabase config — falls back to icon mark -->
        <div class="logo-mark" :class="appLogoUrl?'logo-mark-img':''">
          <img v-if="appLogoUrl" :src="appLogoUrl" alt="Logo" class="logo-img">
          <i v-else :class="platform==='techmedix'?'fas fa-heart-pulse':'fas fa-globe'"></i>
        </div>
        <div>
          <div class="logo-name">Tech<em>Medix</em>Link</div>
          <div class="logo-sub">{{  platform==='techmedix'?'Medical Platform':'Global Sourcing'  }}</div>
        </div>
      </div>
      <div class="plat-sw">
        <button class="plat-btn" :class="{'on-tm':platform==='techmedix'}" @click="setPlatform('techmedix')"><i class="fas fa-heart-pulse"></i>TechMedix</button>
        <button class="plat-btn" :class="{'on-gd':platform==='globaldoor'}" @click="setPlatform('globaldoor')"><i class="fas fa-globe"></i>GlobalDoor</button>
      </div>
      <div v-if="profile && isAdmin" class="role-pill" style="background:rgba(192,57,43,0.18);color:#e8806a;border-color:rgba(192,57,43,0.30)">
        <i class="fas fa-shield-halved"></i>Administrator
      </div>
      <div v-else-if="profile" class="role-pill">
        <i class="fas" :class="roleIcon(profile.user_role)"></i>{{  roleLabel(profile.user_role)  }}
        <span v-if="profile.is_verified" style="color:var(--ok);font-size:9px">✓</span>
      </div>
    </div>
    <nav class="sb-nav">
      <div class="nav-sect">Overview</div>
      <div class="nav-item" :class="{active:tab==='home'}" @click="goTab('home')"><i class="ni fas fa-house"></i>Dashboard</div>
      <template v-if="canBuy && !isAdmin">
        <div class="nav-sect">Browse & Buy</div>
        <div class="nav-item" :class="{active:tab==='browse'}" @click="goTab('browse')"><i class="ni fas fa-magnifying-glass"></i>Browse Products<span v-if="products.length" class="nav-chip">{{  products.length  }}</span></div>
        <div class="nav-item" :class="{active:tab==='my-requests'}" @click="goTab('my-requests')"><i class="ni fas fa-clipboard-list"></i>My Requests<span v-if="myActiveReqs.length" class="nav-chip">{{  myActiveReqs.length  }}</span></div>
        <div class="nav-item" :class="{active:tab==='tracking'}" @click="goTab('tracking')"><i class="ni fas fa-location-dot"></i>Tracking</div>
        <div class="nav-item" :class="{active:tab==='payments'}" @click="goTab('payments')"><i class="ni fas fa-credit-card"></i>Payments<span v-if="pendingPayCount>0" class="nav-chip">{{  pendingPayCount  }}</span></div>
      </template>
      <template v-if="canSell && !isAdmin">
        <div class="nav-sect">My Store</div>
        <div class="nav-item" :class="{active:tab==='my-listings'}" @click="goTab('my-listings')"><i class="ni fas fa-store"></i>My Listings<span v-if="myListings.length" class="nav-chip">{{  myListings.length  }}</span></div>
        <div class="nav-item" :class="{active:tab==='inquiries'}" @click="goTab('inquiries')"><i class="ni fas fa-inbox"></i>Inquiries<span v-if="incomingReqs.length" class="nav-chip">{{  incomingReqs.length  }}</span></div>
        <div class="nav-item" :class="{active:tab==='seller-analytics'}" @click="goTab('seller-analytics')"><i class="ni fas fa-chart-bar"></i>My Analytics</div>
      </template>
      <template v-if="isAdmin">
        <div class="nav-sect">Platform Overview</div>
        <div class="nav-item" :class="{active:tab==='admin'}" @click="goTab('admin')">
          <i class="ni fas fa-shield-halved"></i>Dashboard
          <span v-if="pendingAdminCount>0" class="nav-dot"></span>
          <span v-else-if="adminTriage && (adminTriage.pendingPayments?.length||adminTriage.awaitingQuote?.length)" class="nav-chip" style="background:rgba(196,122,0,0.25);color:#f0a500">
            {{  (adminTriage.pendingPayments?.length||0)+(adminTriage.awaitingQuote?.length||0)  }}
          </span>
        </div>
        <div class="nav-sect">Users &amp; Sellers</div>
        <div class="nav-item" :class="{active:tab==='admin-users'}" @click="goTab('admin-users')"><i class="ni fas fa-users"></i>All Users<span v-if="adminUsers.length" class="nav-chip">{{  adminUsers.length  }}</span></div>
        <div class="nav-item" :class="{active:tab==='admin-listings'}" @click="goTab('admin-listings')"><i class="ni fas fa-boxes-stacked"></i>All Listings<span v-if="products.length" class="nav-chip">{{  products.length  }}</span></div>
        <div class="nav-sect">Operations</div>
        <div class="nav-item" :class="{active:tab==='analytics'}" @click="goTab('analytics')"><i class="ni fas fa-chart-line"></i>Analytics</div>
        <div class="nav-item" :class="{active:tab==='shoppers'}" @click="goTab('shoppers')"><i class="ni fas fa-people-carry-box"></i>Shoppers</div>
      </template>
    </nav>
    <div class="sb-user">
      <!-- Signed in: avatar + ring + completion -->
      <div v-if="profile" class="sb-profile-card" @click="showProfileModal=true">
        <div class="sb-av-wrap">
          <!-- SVG ring -->
          <svg class="sb-av-ring-svg" viewBox="0 0 52 52">
            <circle cx="26" cy="26" r="23" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="2.5"/>
            <circle cx="26" cy="26" r="23" fill="none" stroke="#4dc8d0" stroke-width="2.5"
              stroke-dasharray="144.5"
              :stroke-dashoffset="144.5 - (144.5 * profileCompletion.pct / 100)"
              stroke-linecap="round" transform="rotate(-90 26 26)"
              style="transition:stroke-dashoffset 0.8s ease"/>
          </svg>
          <!-- Avatar or initials -->
          <div class="sb-av-inner">
            <img v-if="profile.avatar_url" :src="profile.avatar_url" class="sb-av-photo">
            <span v-else class="sb-av-init">{{  userInitial  }}</span>
          </div>
          <!-- Pct label -->
          <div class="sb-av-pct">{{  profileCompletion.pct  }}%</div>
        </div>
        <div style="flex:1;overflow:hidden;min-width:0">
          <div class="user-name">{{  profile.full_name  }}</div>
          <div class="user-role-tag" style="color:rgba(255,255,255,0.45)">{{  roleLabel(profile.user_role)  }}</div>
          <div v-if="profileCompletion.pct<100&&profileCompletion.next" class="sb-next-step">
            <i class="fas fa-circle-arrow-right" style="font-size:9px"></i> {{  profileCompletion.next?.label  }}
          </div>
        </div>
        <i class="fas fa-pen" style="color:rgba(255,255,255,0.3);font-size:9px;flex-shrink:0"></i>
      </div>
      <!-- Signed out -->
      <div v-else class="user-row" @click="showAuth=true">
        <div class="user-av" style="background:var(--bg-5);color:var(--tx-3);box-shadow:none"><i class="fas fa-user" style="font-size:11px"></i></div>
        <div style="flex:1"><div class="user-name" style="color:var(--tx-3)">Not signed in</div><div class="user-role-tag">Tap to sign in</div></div>
        <i class="fas fa-sign-in-alt" style="color:var(--a);font-size:11px;flex-shrink:0"></i>
      </div>
    </div>
  </aside>

  <!-- ═══ MAIN ═══ -->
  <div class="main">

    <!-- Rate Bar -->
    <div class="rate-bar">
      <div class="rate-item"><span class="rate-lbl">USD/TZS</span><span class="rate-val">{{  fNum(usdToTzs)  }}</span><div class="rdot" :class="rateSource"></div><span class="rsrc" :class="rateSource">{{  rateSource==='live'?'Live':'Fallback'  }}</span></div>
      <div class="rate-item" v-if="products.length"><span class="rate-lbl">Products</span><span class="rate-val">{{  products.length  }}</span></div>
      <div class="rate-item" v-if="profile && myActiveReqs.length"><span class="rate-lbl">Active</span><span class="rate-val">{{  myActiveReqs.length  }}</span></div>
      <div class="rate-item" v-if="profile && myBalanceDue>0"><span class="rate-lbl" style="color:var(--warn)">Due</span><span class="rate-val" style="color:var(--warn)">{{  tzs(myBalanceDue)  }}</span></div>
      <div class="rate-ticker"><i class="fas fa-clock" style="font-size:8px"></i>{{  today  }}</div>
    </div>

    <!-- Exchange rate warning banner (only shown when fallback) -->
    <transition name="slide">
      <div v-if="rateSource==='fallback'" style="background:var(--warn-bg);border-bottom:2px solid var(--warn-bd);padding:8px var(--s6);display:flex;align-items:center;gap:var(--s3);font-size:var(--txs)">
        <i class="fas fa-triangle-exclamation" style="color:var(--warn);flex-shrink:0"></i>
        <div style="flex:1;color:var(--warn)"><strong>Exchange rate unavailable.</strong> Prices shown use a fallback rate of TZS {{  fNum(usdToTzs)  }}/USD. Actual costs will be confirmed in your formal quotation.</div>
        <button @click="loadExchangeRate();toast('info','Retrying rate...')" class="btn btn-sm btn-g" style="flex-shrink:0;font-size:10px"><i class="fas fa-rotate"></i>Retry</button>
      </div>
    </transition>
    <!-- Topbar -->
    <header class="topbar">
      <div class="tb-l">
        <button class="mob-btn" @click="sidebarOpen=!sidebarOpen"><i class="fas fa-bars"></i></button>
        <button class="mob-search-btn" @click.stop="$event.target.closest('.main').querySelector('.mob-search-bar').classList.toggle('open')"><i class="fas fa-search"></i></button>
        <div class="page-ttl">{{  pageTitle  }}</div>
        <div v-if="isAdmin" class="admin-mode-tag">
          <i class="fas fa-shield-halved"></i> Admin Mode
        </div>
        <div v-else class="plat-tag"><i :class="platform==='techmedix'?'fas fa-heart-pulse':'fas fa-globe'"></i>{{  platform==='techmedix'?'TechMedixLink':'Global Door'  }}</div>
      </div>
      <div class="tb-r">
        <div class="srch-w"><i class="fas fa-search"></i><input type="text" v-model="globalSearch" placeholder="Search products…" @keydown.enter="performSearch"></div>
        <div v-if="profile && basketCount>0" class="tb-ico" @click="showBasket=true" title="Procurement basket" style="position:relative">
          <i class="fas fa-basket-shopping"></i>
          <div class="ndot" style="background:var(--siemens)">{{  basketCount  }}</div>
        </div>
        <div class="tb-ico" :class="{active:showNotifPanel}" @click.stop="togglePanel('notif')">
          <i class="fas fa-bell"></i>
          <div v-if="unreadCount>0" class="ndot">{{  unreadCount>9?'9+':unreadCount  }}</div>
        </div>
        <div v-if="profile" class="tb-av" @click.stop="togglePanel('user')">
            <img v-if="profile.avatar_url" :src="profile.avatar_url" class="tb-av-img">
            <span v-else class="tb-av-init">{{  userInitial  }}</span>
            <span class="tb-av-dot"></span>
          </div>
        <div v-else class="tb-ico" @click="showAuth=true"><i class="fas fa-sign-in-alt"></i></div>
        <button @click="primaryAction" class="btn btn-p btn-sm" style="position:relative"><i class="fas fa-plus"></i><span class="btn-label">{{  primaryLabel  }}</span></button>
        <button v-if="basketCount>0" @click="showBasket=true" class="btn btn-s btn-sm" style="position:relative">
          <i class="fas fa-basket-shopping"></i>
          <span style="position:absolute;top:-6px;right:-6px;background:var(--err);color:white;border-radius:50%;width:16px;height:16px;font-size:8px;display:flex;align-items:center;justify-content:center;font-family:var(--fm);font-weight:700;border:2px solid white">{{  basketCount  }}</span>
        </button>
      </div>
    </header>

    <!-- Mobile search bar -->
    <div class="mob-search-bar">
      <input type="text" v-model="globalSearch" placeholder="Search products…" @keydown.enter="performSearch();$el.closest('.mob-search-bar').classList.remove('open')">
      <button class="btn btn-p btn-sm" @click="performSearch()"><i class="fas fa-search"></i></button>
    </div>

    <!-- NOTIFICATION PANEL -->
    <transition name="slide">
      <div v-if="showNotifPanel" class="dd-ov" @click.stop>
        <div class="dd-hd"><span class="dd-hd-ttl">Notifications</span><div style="display:flex;gap:6px"><button @click="markAllRead" class="btn btn-g btn-xs">Mark all read</button><button @click="showNotifPanel=false" class="btn btn-sq sm btn-g"><i class="fas fa-times" style="font-size:9px"></i></button></div></div>
        <div v-if="!notifications.length" class="empty" style="padding:var(--s5)"><div class="empty-ico" style="width:36px;height:36px;font-size:14px"><i class="fas fa-bell-slash"></i></div><div class="empty-sub" style="font-size:var(--txs)">No notifications yet</div></div>
        <div v-for="n in notifications" :key="n.id"
          class="feed-row"
          @click="clickNotification(n)"
          style="padding:7px var(--s2);cursor:pointer;border-radius:var(--r2);margin-bottom:1px"
          :style="!n.is_read?'background:var(--philips-l)':''"
        >
          <div style="display:flex;align-items:flex-start;gap:10px;width:100%">
            <div :style="{width:'28px',height:'28px',borderRadius:'50%',flexShrink:0,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'11px',background:n.notification_type==='payment_required'?'var(--warn-bg)':n.notification_type==='payment_received'?'var(--ok-bg)':n.notification_type==='status_update'?'var(--info-bg)':'var(--bg-2)',color:n.notification_type==='payment_required'?'var(--warn)':n.notification_type==='payment_received'?'var(--ok)':n.notification_type==='status_update'?'var(--info)':'var(--tx-3)'}">
              <i :class="n.notification_type==='payment_required'?'fas fa-credit-card':n.notification_type==='payment_received'?'fas fa-circle-check':n.notification_type==='status_update'?'fas fa-truck':'fas fa-bell'"></i>
            </div>
            <div style="flex:1;min-width:0">
              <div style="font-size:var(--tsm);font-weight:600;color:var(--tx-1);margin-bottom:2px;display:flex;align-items:center;gap:6px">
                {{  n.title  }}
                <span v-if="!n.is_read" style="width:6px;height:6px;border-radius:50%;background:var(--philips);flex-shrink:0;display:inline-block"></span>
              </div>
              <div style="font-size:var(--txs);color:var(--tx-3);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">{{  n.message  }}</div>
              <div style="font-size:9px;color:var(--tx-4);margin-top:3px;font-family:var(--fm)">{{  fDate(n.sent_at)  }}</div>
            </div>
            <i v-if="n.request_id||n.action_url" class="fas fa-chevron-right" style="color:var(--tx-4);font-size:9px;flex-shrink:0;margin-top:4px"></i>
          </div>
        </div>
      </div>
    </transition>

    <!-- USER PANEL -->
    <transition name="slide">
      <div v-if="showUserPanel && profile" class="dd-ov" style="width:240px" @click.stop>
        <div style="padding:var(--s3) var(--s3) var(--s3)">
          <div style="display:flex;align-items:center;gap:var(--s3);margin-bottom:var(--s3)">
            <div style="width:44px;height:44px;border-radius:50%;border:2px solid var(--philips-l);overflow:hidden;flex-shrink:0;background:var(--philips-l);display:flex;align-items:center;justify-content:center">
              <img v-if="profile.avatar_url" :src="profile.avatar_url" style="width:100%;height:100%;object-fit:cover">
              <span v-else style="font-family:var(--fb);font-size:18px;font-weight:700;color:var(--philips)">{{  userInitial  }}</span>
            </div>
            <div style="flex:1;min-width:0">
              <div style="font-size:var(--tsm);font-weight:700;color:var(--tx-1);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">{{  profile.full_name  }}</div>
              <div style="font-size:var(--txs);color:var(--tx-3)">{{  roleLabel(profile.user_role)  }}</div>
              <div style="font-size:10px;font-family:var(--fm);color:var(--philips);font-weight:600">{{  profileCompletion.pct  }}% complete</div>
            </div>
          </div>
          <div class="hr"></div>
        </div>
        <div class="nav-item" @click="showProfileModal=true;showUserPanel=false"><i class="ni fas fa-pen"></i>Edit Profile</div>
        <div class="nav-item" @click="goTab('payments');showUserPanel=false"><i class="ni fas fa-credit-card"></i>Payment History</div>
        <div class="hr" style="margin:var(--s2) 0"></div>
        <div class="nav-item" @click="doLogout" style="color:var(--err)"><i class="ni fas fa-sign-out-alt" style="color:var(--err)"></i>Sign Out</div>
      </div>
    </transition>

    <!-- ═══════════════ CONTENT ═══════════════ -->
    <div class="content" @click="closeAllMenus">

      <!-- ── HOME ── -->
      <div v-if="tab==='home'">
        <!-- ── GUEST LANDING HERO ── -->
        <div v-if="!profile" class="lp-wrap fu">

          <!-- Hero section -->
          <div class="lp-hero">
            <div class="lp-hero-left">
              <div class="lp-tagline">Tanzania's Medical Equipment Marketplace</div>
              <div class="lp-headline">Source. Verify.<br><span style="color:#4dc8d0">Deliver.</span></div>
              <div class="lp-sub">TMDA-certified medical devices, hospital equipment and surgical supplies. Verified sellers. Shopper network across East Africa.</div>
              <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:20px">
                <button @click="showAuth=true" class="btn btn-p" style="padding:10px 24px;font-size:14px"><i class="fas fa-rocket"></i> Get Started Free</button>
                <button @click="goTab('browse')" class="btn btn-s" style="padding:10px 24px;font-size:14px"><i class="fas fa-magnifying-glass"></i> Browse Products</button>
              </div>
              <!-- Trust signals -->
              <div class="lp-trust">
                <div class="lp-trust-item"><i class="fas fa-certificate" style="color:#1a7a4a"></i><span>TMDA Certified</span></div>
                <div class="lp-trust-item"><i class="fas fa-shield-halved" style="color:#0066a1"></i><span>Verified Sellers</span></div>
                <div class="lp-trust-item"><i class="fas fa-truck" style="color:#00a8b0"></i><span>All TZ Regions</span></div>
                <div class="lp-trust-item"><i class="fab fa-whatsapp" style="color:#25d366"></i><span>WhatsApp Updates</span></div>
              </div>
            </div>
            <!-- Live stats -->
            <div class="lp-stats">
              <div class="lp-stat"><div class="lp-stat-val">{{  products.length  }}</div><div class="lp-stat-lbl">Products listed</div></div>
              <div class="lp-stat"><div class="lp-stat-val">{{  products.filter(p=>p.tmda_certified).length  }}</div><div class="lp-stat-lbl">TMDA certified</div></div>
              <div class="lp-stat"><div class="lp-stat-val">{{  fNum(usdToTzs)  }}</div><div class="lp-stat-lbl">USD/TZS today</div></div>
              <div class="lp-stat"><div class="lp-stat-val">5+</div><div class="lp-stat-lbl">Tanzania regions</div></div>
            </div>
          </div>

          <!-- Featured products — rich carousel -->
          <div class="lp-section-ttl" style="display:flex;align-items:center;justify-content:space-between">
            <span>Featured products</span>
            <button @click="goTab('browse')" class="btn btn-g btn-sm" style="font-size:10px">View all {{  products.length  }} <i class="fas fa-arrow-right" style="font-size:9px"></i></button>
          </div>
          <div class="lp-carousel-wrap">
            <div class="lp-carousel" :style="{transform:'translateX(-'+(lpCarousel*260)+'px)'}">
              <div v-for="p in products.slice(0,12)" :key="p.id" class="lp-card-lg" @click="openProductDetail(p)">
                <!-- Image -->
                <div class="lp-card-lg-img">
                  <img v-if="p.image_url" :src="p.image_url" :alt="p.name" loading="lazy" style="width:100%;height:100%;object-fit:cover;transition:transform 0.4s">
                  <div v-else class="lp-card-lg-ph">
                    <i :class="p.product_type==='medical_device'?'fas fa-stethoscope':p.product_type==='electronics'?'fas fa-microchip':'fas fa-boxes-stacked'" style="font-size:36px;color:rgba(255,255,255,0.25)"></i>
                    <span style="font-size:10px;color:rgba(255,255,255,0.35);text-transform:capitalize;margin-top:6px">{{  p.product_type?.replace(/_/g,' ')||'Product'  }}</span>
                  </div>
                  <!-- Overlay on hover -->
                  <div class="lp-card-lg-overlay">
                    <span><i class="fas fa-expand-alt"></i> View details</span>
                    <button v-if="profile" @click.stop="addToBasket(p)" class="btn btn-p btn-sm" style="padding:5px 12px;font-size:10px"><i class="fas fa-basket-shopping"></i> Add to basket</button>
                    <button v-else @click.stop="showAuth=true" class="btn btn-p btn-sm" style="padding:5px 12px;font-size:10px"><i class="fas fa-sign-in-alt"></i> Sign in</button>
                  </div>
                  <!-- Badges -->
                  <div style="position:absolute;top:8px;left:8px;display:flex;gap:4px;flex-wrap:wrap">
                    <span v-if="p.tmda_certified" style="background:rgba(26,122,74,0.85);color:white;font-size:8px;font-weight:700;padding:2px 7px;border-radius:99px;backdrop-filter:blur(4px)"><i class="fas fa-certificate" style="font-size:7px"></i> TMDA</span>
                    <span v-if="p.model_url" style="background:rgba(10,31,60,0.70);color:#4dc8d0;font-size:8px;font-weight:700;padding:2px 7px;border-radius:99px"><i class="fas fa-cube" style="font-size:7px"></i> 3D</span>
                  </div>
                  <div style="position:absolute;bottom:8px;right:8px">
                    <span :class="['pc-stock',stockClass(p.stock_quantity)]" style="font-size:8px;font-weight:700;background:rgba(255,255,255,0.92);padding:2px 8px;border-radius:99px">{{  stockLabel(p.stock_quantity)  }}</span>
                  </div>
                </div>
                <!-- Body -->
                <div class="lp-card-lg-body">
                  <div class="lp-card-lg-name">{{  p.name  }}</div>
                  <div style="font-size:10px;color:var(--tx-3);margin-bottom:6px;display:flex;align-items:center;gap:4px">
                    <i class="fas fa-store" style="font-size:8px"></i>{{  p.seller_name||'TechMedixLink'  }}
                    <span style="color:var(--ln-2)">·</span>
                    <i class="fas fa-location-dot" style="font-size:8px"></i>{{  p.country||'Tanzania'  }}
                  </div>
                  <div style="font-size:10px;color:var(--tx-3);line-height:1.4;margin-bottom:8px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">{{  p.description||'Quality medical equipment for healthcare facilities.'  }}</div>
                  <div style="display:flex;align-items:baseline;gap:6px;margin-bottom:4px">
                    <span style="font-family:var(--fb);font-size:20px;font-weight:800;color:var(--tx-1)">${{  fNum(p.base_price_usd)  }}</span>
                    <span style="font-size:10px;color:var(--tx-3)">USD</span>
                  </div>
                  <div style="font-family:var(--fm);font-size:10px;color:var(--tx-3)">≈ {{  tzs(p.base_price_usd*usdToTzs)  }}</div>
                  <!-- Mini star rating -->
                  <div style="display:flex;align-items:center;gap:2px;margin-top:6px">
                    <i v-for="s in 5" :key="s" class="fas fa-star" :style="s<=(p.avg_rating||0)?'color:#f0a500':'color:var(--bg-4)'" style="font-size:9px"></i>
                    <span style="font-size:9px;color:var(--tx-3);margin-left:3px">({{  p.review_count||0  }})</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- Carousel controls -->
            <button class="lp-arrow lp-prev" @click="lpCarousel=Math.max(0,lpCarousel-1)" :disabled="lpCarousel===0"><i class="fas fa-chevron-left"></i></button>
            <button class="lp-arrow lp-next" @click="lpCarousel=Math.min(Math.max(0,products.length-3),lpCarousel+1)" :disabled="lpCarousel>=products.length-3"><i class="fas fa-chevron-right"></i></button>
          </div>
          <!-- Carousel dots -->
          <div style="display:flex;justify-content:center;gap:6px;margin-top:10px">
            <div v-for="i in Math.ceil(Math.min(products.length,12)/3)" :key="i"
              @click="lpCarousel=(i-1)*3"
              style="height:4px;border-radius:2px;cursor:pointer;transition:all 0.25s"
              :style="Math.floor(lpCarousel/3)===(i-1)?'background:#0066a1;width:20px':'background:#dce3ee;width:6px'"></div>
          </div>

          <!-- Categories strip -->
          <div class="lp-section-ttl" style="margin-top:24px">Browse by category</div>
          <div class="lp-cats">
            <div class="lp-cat" @click="goTab('browse');prodTypeFilter='medical_device'"><i class="fas fa-stethoscope"></i><span>Medical Devices</span></div>
            <div class="lp-cat" @click="goTab('browse');prodTypeFilter='medical_supply'"><i class="fas fa-box-open"></i><span>Medical Supplies</span></div>
            <div class="lp-cat" @click="goTab('browse');prodTypeFilter='electronics'"><i class="fas fa-microchip"></i><span>Electronics</span></div>
            <div class="lp-cat" @click="goTab('browse');filterTmda=true"><i class="fas fa-certificate"></i><span>TMDA Certified</span></div>
            <div class="lp-cat" @click="goTab('browse');prodFilter='globaldoor'"><i class="fas fa-globe"></i><span>International</span></div>
          </div>

        </div>
        <!-- Profile completeness — compact strip -->
        <div v-if="profile && profileCompletion.pct < 100" class="fu"
          style="background:white;border:1px solid rgba(0,30,80,0.09);border-left:3px solid #0066a1;border-radius:8px;padding:10px 14px;margin-bottom:16px;display:flex;flex-direction:column;gap:8px">
          <!-- Row 1: label + bar + % -->
          <div style="display:flex;align-items:center;gap:10px">
            <span style="font-size:11px;font-weight:600;color:#3a5070;white-space:nowrap">Profile complete</span>
            <div style="flex:1;height:5px;background:#dce3ee;border-radius:3px;overflow:hidden">
              <div :style="{width:profileCompletion.pct+'%',height:'100%',background:'linear-gradient(90deg,#0066a1,#00a8b0)',borderRadius:'3px',transition:'width 0.8s ease'}"></div>
            </div>
            <span style="font-family:var(--fm);font-size:12px;font-weight:700;color:#0066a1;white-space:nowrap;min-width:30px;text-align:right">{{  profileCompletion.pct  }}%</span>
          </div>
          <!-- Row 2: milestone pills -->
          <div style="display:flex;gap:6px;flex-wrap:wrap">
            <div v-for="u in profileCompletion.unlocks" :key="u.at"
              style="display:inline-flex;align-items:center;gap:4px;padding:2px 8px;border-radius:99px;font-size:10px;font-weight:500;transition:all 0.2s"
              :style="u.done ? 'background:rgba(26,122,74,0.08);color:#1a7a4a;border:1px solid rgba(26,122,74,0.20)' : 'background:#e8edf4;color:#7a90aa;border:1px solid rgba(0,30,80,0.09);opacity:0.6'">
              <i class="fas" :class="u.icon" style="font-size:9px"></i>
              <span>{{  u.label  }}</span>
            </div>
          </div>
          <!-- Row 3: next action -->
          <div v-if="profileCompletion.next"
            style="display:flex;align-items:center;gap:6px;font-size:11px;color:#7a90aa;padding-top:6px;border-top:1px solid rgba(0,30,80,0.05)">
            <i class="fas fa-arrow-right" style="font-size:9px;color:#0066a1"></i>
            <span>Next: <strong style="color:#0066a1;font-weight:600">{{  profileCompletion.next?.label  }}</strong></span>
            <button @click="showProfileModal=true" class="btn btn-p" style="margin-left:auto;padding:3px 10px;font-size:10px">Do it now</button>
          </div>
        </div>

        <div style="margin-bottom:var(--s3)" class="fu">
          <div style="font-family:var(--fd);font-size:30px;color:var(--tx-1);line-height:1.15">
            {{  profile?'Welcome back,':'Welcome to'  }}<br><span style="color:var(--a)">{{  profile?.full_name?.split(' ')[0]||'TechMedixLink'  }}</span>
          </div>
          <div style="font-size:var(--tsm);color:var(--tx-3);margin-top:var(--s3);display:flex;align-items:center;gap:var(--s3)">
            <span style="font-family:var(--fm);font-size:10px;letter-spacing:0.04em">{{  today  }}</span>
            <span style="color:var(--ln-2)">·</span>
            <span>{{  platform==='techmedix'?'Medical Equipment Marketplace':'International Sourcing Platform'  }}</span>
          </div>
        </div>
        <template v-if="profile && canBuy">
          <div class="kpi-grid fu fu-1" style="margin-top:var(--s3)">
            <div class="kpi"><div class="kpi-ico"><i class="fas fa-clipboard-list"></i></div><div class="kpi-lbl">My Requests</div><div class="kpi-val">{{  myRequests.length  }}</div><div class="kpi-sub" :class="myActiveReqs.length?'up':''"><i class="fas fa-circle" style="font-size:4px"></i>{{  myActiveReqs.length  }} active</div></div>
            <div class="kpi"><div class="kpi-ico"><i class="fas fa-check-circle"></i></div><div class="kpi-lbl">Completed</div><div class="kpi-val">{{  myDoneReqs.length  }}</div><div class="kpi-sub up" v-if="myDoneReqs.length"><i class="fas fa-arrow-up" style="font-size:7px"></i>Fulfilled</div><div class="kpi-sub" v-else>None yet</div></div>
            <div class="kpi"><div class="kpi-ico"><i class="fas fa-coins"></i></div><div class="kpi-lbl">Total Spent</div><div class="kpi-val sm ac">{{  tzs(myTotalSpent)  }}</div><div class="kpi-sub">All time</div></div>
            <div class="kpi"><div class="kpi-ico" :style="myBalanceDue>0?'background:var(--warn-bg);border-color:var(--warn-bd);color:var(--warn);':''"><i class="fas fa-clock"></i></div><div class="kpi-lbl" :style="myBalanceDue>0?'color:var(--warn);':''">Balance Due</div><div class="kpi-val sm" :style="myBalanceDue>0?'color:var(--warn);':''">{{  tzs(myBalanceDue)  }}</div><div class="kpi-sub" :class="myBalanceDue>0?'wn':''">{{  myBalanceDue>0?pendingPayCount+' pending':'All settled'  }}</div></div>
          </div>
        </template>
        <template v-if="profile && canSell">
          <div style="font-size:10px;font-weight:700;color:var(--tx-4);letter-spacing:0.12em;text-transform:uppercase;margin-bottom:var(--s3)" :class="canBuy?'fu fu-2':'fu fu-1'">Store Overview</div>
          <div class="kpi-grid" :class="canBuy?'fu fu-2':'fu fu-1'">
            <div class="kpi"><div class="kpi-ico"><i class="fas fa-store"></i></div><div class="kpi-lbl">Live Listings</div><div class="kpi-val">{{  myListings.filter(p=>p.is_active).length  }}</div><div class="kpi-sub">{{  myListings.length  }} total</div></div>
            <div class="kpi"><div class="kpi-ico"><i class="fas fa-inbox"></i></div><div class="kpi-lbl">Inquiries</div><div class="kpi-val">{{  incomingReqs.length  }}</div><div class="kpi-sub" :class="incomingReqs.filter(r=>r.status==='pending').length?'up':''">{{  incomingReqs.filter(r=>r.status==='pending').length  }} pending</div></div>
            <div class="kpi"><div class="kpi-ico"><i class="fas fa-dollar-sign"></i></div><div class="kpi-lbl">Avg. Price</div><div class="kpi-val sm ac">${{  fNum(avgListingPrice)  }}</div><div class="kpi-sub">USD listed</div></div>
            <div class="kpi"><div class="kpi-ico" :style="profile.is_verified?'background:var(--ok-bg);border-color:var(--ok-bd);color:var(--ok);':''"><i class="fas fa-shield-halved"></i></div><div class="kpi-lbl">Verified</div><div class="kpi-val" :style="profile.is_verified?'color:var(--ok)':''">{{  profile.is_verified?'Yes':'No'  }}</div><div class="kpi-sub" :class="profile.is_verified?'up':'wn'">{{  profile.is_verified?'Verified seller':'Pending review'  }}</div></div>
          </div>
        </template>
        <template v-if="!profile">
          <div class="kpi-grid fu fu-1">
            <div class="kpi"><div class="kpi-ico"><i class="fas fa-boxes-stacked"></i></div><div class="kpi-lbl">Products</div><div class="kpi-val">{{  products.length  }}</div><div class="kpi-sub up">Available now</div></div>
            <div class="kpi"><div class="kpi-ico"><i class="fas fa-tag"></i></div><div class="kpi-lbl">Categories</div><div class="kpi-val">{{  uniqueCats  }}</div><div class="kpi-sub">To browse</div></div>
            <div class="kpi"><div class="kpi-ico"><i class="fas fa-coins"></i></div><div class="kpi-lbl">USD/TZS</div><div class="kpi-val sm ac">{{  fNum(usdToTzs)  }}</div><div class="kpi-sub" :class="rateSource==='live'?'up':''">{{  rateSource==='live'?'Live BOT':'Fallback'  }}</div></div>
            <div class="kpi"><div class="kpi-ico"><i class="fas fa-certificate"></i></div><div class="kpi-lbl">TMDA Certified</div><div class="kpi-val">{{  products.filter(p=>p.tmda_certified).length  }}</div><div class="kpi-sub">Verified</div></div>
          </div>
        </template>
        <div class="g2 fu fu-3" style="margin-top:var(--s4)">
          <div class="card">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--s4)"><div class="card-ttl" style="margin-bottom:0">Recent Activity</div><button v-if="profile&&canBuy" @click="goTab('my-requests')" class="btn btn-g btn-xs">View all</button></div>
            <div v-if="!recentActivity.length" style="text-align:center;padding:var(--s5) 0;color:var(--tx-3);font-size:var(--tsm)">No activity yet</div>
            <div v-for="a in recentActivity" :key="a.id" class="feed-row"><div style="display:flex;align-items:center;gap:10px"><div class="feed-ico" :class="a.ico"><i :class="a.icon"></i></div><div><div style="font-size:var(--tsm);font-weight:600;color:var(--tx-1)">{{  a.title  }}</div><div style="font-size:var(--txs);color:var(--tx-3)">{{  a.sub  }}</div></div></div><span class="badge" :class="sBadge(a.status)">{{  fStatus(a.status)  }}</span></div>
          </div>
          <div class="card">
            <div class="card-ttl">Quick Actions</div>
            <div style="display:flex;flex-direction:column;gap:var(--s3);margin-bottom:var(--s5)">
              <button v-if="!profile" @click="showAuth=true" class="btn btn-p btn-w"><i class="fas fa-sign-in-alt"></i>Sign In / Create Account</button>
              <button v-if="profile&&canBuy" @click="showReqModal=true" class="btn btn-p btn-w"><i class="fas fa-plus-circle"></i>New Purchase Request</button>
              <button v-if="profile&&canSell" @click="openListingModal()" class="btn btn-s btn-w"><i class="fas fa-store"></i>Add Product Listing</button>
              <button @click="goTab('browse')" class="btn btn-g btn-w"><i class="fas fa-magnifying-glass"></i>Browse All Products</button>
              <button @click="goTab('tracking')" class="btn btn-g btn-w"><i class="fas fa-location-dot"></i>Track a Shipment</button>
            </div>
            <div class="hr"></div>
            <div style="font-size:10px;font-weight:700;color:var(--tx-4);letter-spacing:0.12em;text-transform:uppercase;margin:var(--s4) 0">Platform Split</div>
            <div style="margin-bottom:var(--s3)"><div style="display:flex;justify-content:space-between;font-size:var(--txs);margin-bottom:5px"><span style="color:var(--tm);font-weight:600;display:flex;align-items:center;gap:4px"><i class="fas fa-heart-pulse" style="font-size:9px"></i>TechMedixLink</span><span style="font-family:var(--fm);font-size:10px;color:var(--tx-3)">{{  pStats.tm  }}%</span></div><div class="prog"><div class="prog-f" :style="{width:pStats.tm+'%',background:'var(--tm)'}"></div></div></div>
            <div><div style="display:flex;justify-content:space-between;font-size:var(--txs);margin-bottom:5px"><span style="color:var(--gd);font-weight:600;display:flex;align-items:center;gap:4px"><i class="fas fa-globe" style="font-size:9px"></i>Global Door</span><span style="font-family:var(--fm);font-size:10px;color:var(--tx-3)">{{  pStats.gd  }}%</span></div><div class="prog"><div class="prog-f" :style="{width:pStats.gd+'%',background:'var(--gd)'}"></div></div></div>
          </div>
        </div>
      </div>
      <!-- /HOME -->

      <!-- ── BROWSE ── -->
      <div v-if="tab==='browse'">
        <div class="sect-hd fu"><div><div class="sect-ttl">Browse Products</div><div class="sect-sub">{{  browseSubtitle  }}</div></div></div>
        <!-- Filters -->
        <div class="card fu fu-1" style="margin-bottom:var(--s3)">
          <div style="display:flex;gap:var(--s2);flex-wrap:wrap;margin-bottom:var(--s3)}">
            <div style="flex:1;min-width:180px;position:relative"><i class="fas fa-search" style="position:absolute;left:12px;top:50%;transform:translateY(-50%);color:var(--tx-3);font-size:10px;pointer-events:none"></i><input type="text" v-model="prodSearch" placeholder="Search name, brand, location…" class="inp" style="padding-left:34px;border-radius:var(--rp)"></div>
            <select v-model="prodFilter" class="sel" :class="prodFilter!=='all'?'sel-active':''" style="width:148px;border-radius:var(--rp)"><option value="all">All Platforms</option><option value="techmedix">TechMedixLink</option><option value="globaldoor">GlobalDoor</option><option value="tmda">TMDA Certified</option><option value="local">Tanzania Stock</option><option value="international">International</option></select>
            <select v-model="prodTypeFilter" class="sel" :class="prodTypeFilter!=='all'?'sel-active':''" style="width:148px;border-radius:var(--rp)"><option value="all">All Types</option><option value="medical_device">Medical Device</option><option value="medical_supply">Medical Supply</option><option value="electronics">Electronics</option><option value="lab_equipment">Lab Equipment</option><option value="other">Other</option></select>
            <select v-model="sortProd" class="sel" :class="sortProd!=='newest'?'sel-active':''" style="width:128px;border-radius:var(--rp)"><option value="newest">Newest First</option><option value="price_asc">Price: Low→High</option><option value="price_desc">Price: High→Low</option><option value="name">Name A–Z</option></select>
          </div>
          <div style="display:flex;align-items:center;gap:var(--s4);flex-wrap:wrap">
            <label class="chk"><input type="checkbox" v-model="filterTmda"><span class="chk-lbl" style="font-size:var(--txs)"><i class="fas fa-certificate" style="color:var(--ok);font-size:9px;margin-right:3px"></i>TMDA Certified only</span></label>
            <label class="chk"><input type="checkbox" v-model="filterInStock"><span class="chk-lbl" style="font-size:var(--txs)"><i class="fas fa-box" style="font-size:9px;margin-right:3px"></i>In stock only</span></label>
            <transition name="fade">
              <button v-if="activeFilterCount>0" @click="clearAllFilters" class="filter-clear-btn">
                <i class="fas fa-times-circle" style="font-size:10px"></i>
                {{  activeFilterCount  }} active filter{{  activeFilterCount>1?'s':''  }} &nbsp;·&nbsp; Clear all
              </button>
            </transition>
          </div>
        </div>
        <!-- Product grid -->
        <div v-if="filteredProds.length" class="prod-grid fu fu-2">
          <div v-for="p in filteredProds" :key="p.id" class="prod-card" @click.self="openProductDetail(p)">
            <div class="pc-img pc-img-hoverable" @click="openProductDetail(p)" style="cursor:pointer">
              <img v-if="p.image_url" :src="p.image_url" :alt="p.name" loading="lazy">
              <div class="pc-hover-overlay"><i class="fas fa-expand-alt"></i><span>View details</span></div>
              <div v-if="!p.image_url" class="pc-img-ph"><i :class="p.product_type==='medical_device'?'fas fa-stethoscope':p.product_type==='electronics'?'fas fa-microchip':'fas fa-box-archive'"></i><span style="text-transform:capitalize">{{  p.product_type?.replace(/_/g,' ')||'Product'  }}</span></div>
              <div class="pc-img-badges">
                <span v-if="p.platform_type==='globaldoor'" class="badge b-gd" style="font-size:8px;backdrop-filter:blur(6px);background:rgba(0,168,176,0.75)!important;color:white!important;border:none!important">GD</span>
                <span v-if="p.tmda_certified" class="badge b-ok" style="font-size:8px;backdrop-filter:blur(6px);background:rgba(26,122,74,0.80)!important;color:white!important;border:none!important"><i class="fas fa-certificate" style="font-size:7px"></i>TMDA</span>
              </div>
              <!-- 3D badge: bottom-right of image -->
              <div v-if="p.model_url" class="pc-3d-badge"><i class="fas fa-cube"></i>3D</div>
            </div>
            <div class="pc-body">
              <div class="pc-name" @click="openProductDetail(p)" style="cursor:pointer">{{  p.name  }}</div>
              <div class="pc-seller"><i class="fas fa-store" style="font-size:8px"></i>{{  p.seller_name||'TechMedixLink'  }}<span v-if="p.seller_verified || adminUsers.find(u=>u.id===p.user_id)?.company_name?.startsWith('[VERIFIED]')" class="vbadge"><i class="fas fa-check-circle"></i></span></div>
              <div class="pc-loc"><i class="fas fa-location-dot" style="font-size:8px"></i>{{  p.country||'Tanzania'  }}</div>
              <div class="pc-stars">
                <i v-for="s in 5" :key="s" class="pc-star fas fa-star" :class="{on:s<=(p.avg_rating||0)}"></i>
                <span class="pc-rating-count">({{  p.review_count||0  }})</span>
              </div>
              <p class="pc-desc">{{  p.description||'High quality medical equipment available for sourcing.'  }}</p>
              <div class="pc-tags">
                <span v-if="p.warranty_months" class="badge b-mu" style="font-size:9px"><i class="fas fa-shield-halved" style="font-size:7px"></i>{{  p.warranty_months  }}m warranty</span>
                <span v-if="p.requires_installation" class="badge b-in" style="font-size:9px">Installation</span>
                <span v-if="p.requires_training" class="badge b-wn" style="font-size:9px">Training</span>
              </div>
              <div class="pc-pr-row">
                <div><div class="pc-price">${{  fNum(p.base_price_usd)  }}</div><div class="pc-price-sub">≈ {{  tzs(p.base_price_usd * usdToTzs)  }}</div></div>
                <div><span :class="['pc-stock',stockClass(p.stock_quantity)]">{{  stockLabel(p.stock_quantity)  }}</span></div>
              </div>
              <div class="pc-actions">
                <!-- Guest: sign in CTA only -->
                <template v-if="!profile">
                  <button @click="showAuth=true" class="btn btn-p btn-sm" style="flex:1"><i class="fas fa-sign-in-alt"></i>Sign in to Request</button>
                </template>
                <!-- Owner (seller/both/admin who listed this product): edit + details -->
                <template v-else-if="canSell && p.user_id===profile.id">
                  <button @click="openListingModal(p)" class="btn btn-s btn-sm" style="flex:1"><i class="fas fa-pen"></i>Edit Listing</button>
                  <button @click="openProductDetail(p)" class="btn btn-g btn-sm" style="flex:1"><i class="fas fa-eye"></i>Details</button>
                </template>
                <!-- Buyer or seller viewing someone else's product -->
                <template v-else>
                  <button @click="openProductDetail(p)" class="btn btn-g btn-sm" style="flex:1"><i class="fas fa-eye"></i>Details</button>
                  <button v-if="canBuy" @click="addToBasket(p)" class="btn btn-s btn-sm btn-sq" title="Add to basket" :disabled="!p.is_active"><i class="fas fa-basket-shopping" style="font-size:11px"></i></button>
                  <button v-if="canBuy" @click="quickRequest(p)" class="btn btn-p btn-sm" style="flex:1" :disabled="!p.is_active"><i class="fas fa-cart-plus"></i>Request</button>
                </template>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="empty fu fu-2"><div class="empty-ico"><i class="fas fa-magnifying-glass"></i></div><div class="empty-ttl">No products found</div><div class="empty-sub">Try adjusting your filters or search terms.</div><button @click="prodSearch='';prodFilter='all';prodTypeFilter='all';filterTmda=false;filterInStock=false" class="btn btn-g">Clear filters</button></div>
      </div>
      <!-- /BROWSE -->

      <!-- ── MY REQUESTS ── -->
      <div v-if="tab==='my-requests' && profile">
        <div class="sect-hd fu"><div><div class="sect-ttl">My Requests</div><div class="sect-sub">{{  myRequests.length  }} total · {{  myActiveReqs.length  }} active</div></div><button @click="showReqModal=true" class="btn btn-p btn-sm"><i class="fas fa-plus"></i>New Request</button></div>
        <!-- Filters -->
        <div style="display:flex;gap:var(--s2);margin-bottom:var(--s3);flex-wrap:wrap" class="fu fu-1">
          <input type="text" v-model="reqSearch" placeholder="Search request number…" class="inp" style="max-width:200px;border-radius:var(--rp)">
          <select v-model="reqFilter" class="sel" style="width:140px;border-radius:var(--rp)"><option value="all">All Statuses</option><option v-for="s in statusList" :key="s.val" :value="s.val">{{  s.label  }}</option></select>
          <select v-model="reqPlatFilter" class="sel" style="width:140px;border-radius:var(--rp)"><option value="all">All Platforms</option><option value="techmedix">TechMedixLink</option><option value="globaldoor">GlobalDoor</option></select>
        </div>
        <div v-if="!filteredMyReqs.length" class="empty fu fu-2"><div class="empty-ico"><i class="fas fa-clipboard-list"></i></div><div class="empty-ttl">No requests yet</div><div class="empty-sub">Browse products and submit your first sourcing request.</div><button @click="goTab('browse')" class="btn btn-p">Browse Products</button></div>
        <div v-for="r in filteredMyReqs" :key="r.id" class="req-card fu fu-2">
          <div class="req-hd">
            <span class="req-num">{{  r.request_number  }}</span>
            <div style="display:flex;align-items:center;gap:var(--s2);flex-wrap:wrap">
              <span class="badge" :class="r.platform_type==='techmedix'?'b-tm':'b-gd'">{{  r.platform_type==='techmedix'?'TechMedixLink':'GlobalDoor'  }}</span>
              <span class="badge" :class="sBadge(r.status)">{{  fStatus(r.status)  }}</span>
              <span style="font-size:var(--txs);color:var(--tx-3)">{{  fDate(r.created_at)  }}</span>
            </div>
          </div>
          <!-- Quote pending action -->
          <div v-if="r.status==='quoted'" class="quote-strip">
            <i class="fas fa-file-invoice-dollar" style="color:var(--info);font-size:16px;flex-shrink:0"></i>
            <div style="flex:1"><div style="font-size:var(--tsm);font-weight:600;color:var(--info)">Quote received — action required</div><div style="font-size:var(--txs);color:var(--tx-2);margin-top:2px">Review the quote below and accept or decline to proceed.</div></div>
            <button @click="acceptQuote(r)" class="btn btn-ok btn-sm"><i class="fas fa-check"></i>Accept</button>
            <button @click="declineQuote(r)" class="btn btn-d btn-sm"><i class="fas fa-times"></i>Decline</button>
          </div>
          <!-- Stepper -->
          <div class="stepper">
            <div v-for="(st,idx) in stepperStages" :key="st.val" class="step" :class="stepCls(r.status,idx)">
              <div class="step-dot"><i class="fas fa-check" style="font-size:5px"></i></div>
              <div class="step-lbl">{{  st.short  }}</div>
            </div>
          </div>
          <!-- Financials -->
          <div class="req-fin">
            <div class="fin-c"><div class="fin-l">Total</div><div class="fin-v">{{  tzs(r.total_cost)  }}</div></div>
            <div class="fin-c"><div class="fin-l">Paid</div><div class="fin-v paid">{{  tzs(r.deposit_paid)  }}</div></div>
            <div class="fin-c"><div class="fin-l">Balance</div><div class="fin-v" :class="(r.balance_due||0)>0?'due':''">{{  tzs(r.balance_due)  }}</div></div>
          </div>
          <!-- Items -->
          <div v-if="r.items?.length" class="req-items">
            <div v-for="it in r.items" :key="it.id" class="ri-row"><span class="ri-name">{{  it.product_name  }}</span><span class="ri-qty">×{{  it.quantity  }}</span><span class="ri-price">{{  tzs(it.total_price)  }}</span></div>
          </div>
          <!-- Actions -->
          <div style="display:flex;gap:var(--s2);flex-wrap:wrap">
            <button @click="openDetailModal(r)" class="btn btn-g btn-sm"><i class="fas fa-eye"></i>Details & Tracking</button>
            <button v-if="(r.balance_due||0)>0" @click="askPayment(r)" class="btn btn-p btn-sm"><i class="fas fa-credit-card"></i>Pay Balance</button>
            <button v-if="r.status==='delivered'" @click="confirmReceipt(r)" class="btn btn-ok btn-sm"><i class="fas fa-box-open"></i>Confirm Receipt</button>
            <button v-if="r.status==='completed'" @click="openReviewModal(r)" class="btn btn-s btn-sm"><i class="fas fa-star"></i>Leave Review</button>
            <button @click="doTrack(r.request_number)" class="btn btn-g btn-sm"><i class="fas fa-location-dot"></i>Track</button>
          </div>
        </div>
      </div>
      <!-- /MY REQUESTS -->

      <!-- ── MY LISTINGS ── -->
      <div v-if="tab==='my-listings' && profile">
        <div class="sect-hd fu"><div><div class="sect-ttl">My Listings</div><div class="sect-sub">{{  myListings.filter(p=>p.is_active).length  }} active · {{  myListings.length  }} total</div></div><button @click="openListingModal()" class="btn btn-p btn-sm"><i class="fas fa-plus"></i>Add Product</button></div>
        <div v-if="!myListings.length" class="empty fu fu-1"><div class="empty-ico"><i class="fas fa-store"></i></div><div class="empty-ttl">No listings yet</div><div class="empty-sub">Add your first product to start receiving requests from buyers.</div><button @click="openListingModal()" class="btn btn-p">Add First Product</button></div>
        <div class="prod-grid fu fu-1">
          <div v-for="p in myListings" :key="p.id" class="prod-card" style="opacity:1" :style="!p.is_active?'opacity:0.6':''">
            <div class="pc-img pc-img-hoverable" @click="openProductDetail(p)" style="cursor:pointer">
              <img v-if="p.image_url" :src="p.image_url" :alt="p.name" loading="lazy">
              <div class="pc-hover-overlay"><i class="fas fa-expand-alt"></i><span>View details</span></div>
              <div v-if="!p.image_url" class="pc-img-ph"><i class="fas fa-image" style="color:var(--tx-3)"></i><span>No image</span></div>
              <div class="pc-img-badges">
                <span class="badge" :class="p.is_active?'b-ok':'b-mu'" style="font-size:8px;backdrop-filter:blur(8px)">{{  p.is_active?'Live':'Draft'  }}</span>
              </div>
            </div>
            <div class="pc-body">
              <div class="pc-name" @click="openProductDetail(p)" style="cursor:pointer">{{  p.name  }}</div>
              <div class="pc-loc"><i class="fas fa-location-dot" style="font-size:8px"></i>{{  p.country||'Tanzania'  }}</div>
              <div class="pc-pr-row">
                <div><div class="pc-price">${{  fNum(p.base_price_usd)  }}</div><div class="pc-price-sub">Stock: {{  p.stock_quantity||0  }} units</div></div>
                <span :class="['pc-stock',stockClass(p.stock_quantity)]">{{  stockLabel(p.stock_quantity)  }}</span>
              </div>
              <div class="pc-actions">
                <button @click="openListingModal(p)" class="btn btn-p btn-sm" style="flex:1"><i class="fas fa-pen"></i>Edit</button>
                <button @click="openProductDetail(p)" class="btn btn-g btn-xs btn-sq" title="Preview as buyer"><i class="fas fa-eye" style="font-size:10px"></i></button>
                <button @click="toggleListingStatus(p)" class="btn btn-s btn-xs btn-sq" :title="p.is_active?'Hide listing':'Activate listing'"><i :class="p.is_active?'fas fa-eye-slash':'fas fa-circle-check'" style="font-size:10px"></i></button>
                <button @click="askDeleteProduct(p)" class="btn btn-d btn-xs btn-sq" title="Delete listing"><i class="fas fa-trash" style="font-size:10px"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /MY LISTINGS -->

      <!-- ── INQUIRIES ── -->
      <div v-if="tab==='inquiries' && profile">
        <div class="sect-hd fu"><div><div class="sect-ttl">Inquiries</div><div class="sect-sub">Requests for your products</div></div></div>
        <div v-if="!incomingReqs.length" class="empty fu fu-1"><div class="empty-ico"><i class="fas fa-inbox"></i></div><div class="empty-ttl">No inquiries yet</div><div class="empty-sub">When buyers request your products, they'll appear here.</div></div>
        <div v-for="r in incomingReqs" :key="r.id" class="req-card fu fu-1">
          <div class="req-hd">
            <span class="req-num">{{  r.request_number  }}</span>
            <div style="display:flex;gap:var(--s2);align-items:center">
              <span class="badge" :class="sBadge(r.status)">{{  fStatus(r.status)  }}</span>
              <span style="font-size:var(--txs);color:var(--tx-3)">{{  fDate(r.created_at)  }}</span>
            </div>
          </div>
          <div v-if="r.items?.length" class="req-items"><div v-for="it in r.items" :key="it.id" class="ri-row"><span class="ri-name">{{  it.product_name  }}</span><span class="ri-qty">×{{  it.quantity  }}</span><span class="ri-price">{{  tzs(it.total_price)  }}</span></div></div>
          <div style="display:flex;gap:var(--s2);flex-wrap:wrap">
            <button @click="openInquiryDetail(r)" class="btn btn-s btn-sm"><i class="fas fa-eye"></i>View Inquiry</button>
            <button v-if="r.status==='pending'" @click="acceptInquiry(r)" class="btn btn-ok btn-sm"><i class="fas fa-check"></i>Accept Inquiry</button>
            <button v-if="['pending','submitted'].includes(r.status)" @click="openQuoteModal(r)" class="btn btn-p btn-sm"><i class="fas fa-file-invoice-dollar"></i>Send Quote</button>
            <button v-if="['pending','submitted'].includes(r.status)" @click="declineInquiry(r)" class="btn btn-d btn-sm"><i class="fas fa-times"></i>Decline</button>
            <button v-if="r.status==='quoted'" @click="openQuoteModal(r)" class="btn btn-info btn-sm"><i class="fas fa-edit"></i>Revise Quote</button>
          </div>
        </div>
      </div>
      <!-- /INQUIRIES -->




      <!-- ── TRACKING ── -->
      <div v-if="tab==='tracking'" style="max-width:620px;margin:0 auto">
        <div class="sect-hd fu"><div><div class="sect-ttl">Track Shipment</div><div class="sect-sub">Enter your request number</div></div></div>
        <div class="card fu fu-1" style="margin-bottom:var(--s5)">
          <div style="display:flex;gap:var(--s2)">
            <input type="text" v-model="trackId" placeholder="e.g. TML-2026-ABC123 or GDR-2026-XYZ789" class="inp" style="flex:1;border-radius:var(--rp)" @keydown.enter="fetchTracking">
            <button @click="fetchTracking" class="btn btn-p"><i class="fas fa-search"></i>Track</button>
          </div>
        </div>
        <div v-if="trackedReq" class="fu fu-2">
          <div class="req-card">
            <div class="req-hd"><span class="req-num">{{  trackedReq.request_number  }}</span><span class="badge" :class="sBadge(trackedReq.status)">{{  fStatus(trackedReq.status)  }}</span></div>
            <div class="stepper"><div v-for="(st,idx) in stepperStages" :key="st.val" class="step" :class="stepCls(trackedReq.status,idx)"><div class="step-dot"><i class="fas fa-check" style="font-size:5px"></i></div><div class="step-lbl">{{  st.short  }}</div></div></div>
            <div class="req-fin">
              <div class="fin-c"><div class="fin-l">Total</div><div class="fin-v">{{  tzs(trackedReq.total_cost)  }}</div></div>
              <div class="fin-c"><div class="fin-l">Paid</div><div class="fin-v paid">{{  tzs(trackedReq.deposit_paid)  }}</div></div>
              <div class="fin-c"><div class="fin-l">ETA</div><div class="fin-v">{{  fDate(trackedReq.expected_delivery_date)||'--'  }}</div></div>
            </div>
          </div>
          <div class="card">
            <div style="font-family:var(--fd);font-size:18px;color:var(--tx-1);margin-bottom:var(--s4)">Event History</div>
            <div v-if="!trackedReq.tracking_events?.length" style="text-align:center;padding:var(--s4);color:var(--tx-3);font-size:var(--tsm)">No tracking events yet.</div>
            <div class="timeline">
              <div v-for="e in trackedReq.tracking_events" :key="e.id" class="tl-item">
                <div class="tl-dot" :class="{done:e.event_status==='completed'}"><i class="fas fa-check" style="font-size:5px"></i></div>
                <div class="tl-ttl">{{  fEvent(e.event_type)  }}</div>
                <div class="tl-sub">{{  e.location||'--'  }} · {{  fDateTime(e.event_time)  }}</div>
                <div v-if="e.description" class="tl-desc">{{  e.description  }}</div>
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="trackId&&!loading" class="empty fu fu-2"><div class="empty-ico"><i class="fas fa-location-dot"></i></div><div class="empty-ttl">Not found</div><div class="empty-sub">Check the request number and try again.</div></div>
      </div>
      <!-- /TRACKING -->

      <!-- ── PAYMENTS ── -->
      <div v-if="tab==='payments' && profile">
        <div class="sect-hd fu"><div><div class="sect-ttl">Payment History</div><div class="sect-sub">{{  payments.length  }} records</div></div></div>
        <div v-if="myBalanceDue>0" class="info-strip wn fu fu-1"><i class="fas fa-clock" style="color:var(--warn);flex-shrink:0"></i><div style="flex:1"><div style="font-size:var(--tsm);font-weight:600;color:var(--warn)">Outstanding balance: {{  tzs(myBalanceDue)  }}</div><div style="font-size:var(--txs);color:var(--tx-2);margin-top:2px">{{  pendingPayCount  }} request(s) with pending payments</div></div><button @click="goTab('my-requests')" class="btn btn-p btn-sm">Pay Now</button></div>
        <div class="tbl-w fu fu-2">
          <table class="tbl">
            <thead><tr><th>Request #</th><th>Method</th><th>Type</th><th>Amount</th><th>Status</th><th>Date</th><th>Reference</th></tr></thead>
            <tbody>
              <tr v-for="p in payments" :key="p.id">
                <td><span class="mono">{{  allRequests.find(r=>r.id===p.request_id)?.request_number||p.request_id?.slice(0,8)  }}</span></td>
                <td style="text-transform:capitalize">{{  p.payment_method?.replace(/_/g,' ')||'--'  }}</td>
                <td style="text-transform:capitalize">{{  p.payment_type||'--'  }}</td>
                <td><span style="font-family:var(--fm);font-size:11px;color:var(--tx-1)">{{  tzs(p.amount)  }}</span></td>
                <td><span class="badge" :class="p.status==='completed'?'b-ok':p.status==='pending'?'b-wn':'b-er'">{{  p.status  }}</span></td>
                <td style="font-size:var(--txs)">{{  fDate(p.payment_date||p.created_at)  }}</td>
                <td><span class="mono">{{  p.mpesa_reference||'--'  }}</span></td>
              </tr>
              <tr v-if="!payments.length"><td colspan="7" style="text-align:center;padding:var(--s6);color:var(--tx-3)">No payment records yet</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- /PAYMENTS -->



      <!-- ── ADMIN LISTINGS ── -->
      <div v-if=\"tab==='admin-listings' && isAdmin">
        <div class="sect-hd fu">
          <div><div class="sect-ttl">All Listings</div><div class="sect-sub">{{  products.length  }} products on platform</div></div>
          <div style="display:flex;gap:var(--s2)">
            <input type="text" v-model="prodSearch" placeholder="Search products…" class="inp" style="width:200px;border-radius:var(--rp)">
            <select v-model="prodFilter" class="sel" style="width:130px;border-radius:var(--rp)">
              <option value="all">All Platforms</option>
              <option value="techmedix">TechMedixLink</option>
              <option value="globaldoor">GlobalDoor</option>
            </select>
            <button @click="openListingModal()" class="btn btn-p btn-sm"><i class="fas fa-plus"></i>Add Product</button>
          </div>
        </div>
        <div class="tbl-w fu fu-1">
          <table class="tbl">
            <thead><tr><th>Product</th><th>Seller</th><th>Platform</th><th>Price</th><th>Stock</th><th>TMDA</th><th>3D</th><th>Status</th><th>Actions</th></tr></thead>
            <tbody>
              <tr v-for="p in filteredProds" :key="p.id">
                <td>
                  <div style="display:flex;align-items:center;gap:var(--s2)">
                    <div style="width:36px;height:36px;border-radius:var(--r2);overflow:hidden;flex-shrink:0;background:var(--bg-2);display:flex;align-items:center;justify-content:center">
                      <img v-if="p.image_url" :src="p.image_url" style="width:100%;height:100%;object-fit:cover">
                      <i v-else class="fas fa-stethoscope" style="font-size:12px;color:var(--tx-4)"></i>
                    </div>
                    <div>
                      <div style="font-size:var(--tsm);font-weight:600;color:var(--tx-1)">{{  p.name  }}</div>
                      <div style="font-size:10px;color:var(--tx-3)">{{  p.manufacturer||'--'  }}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div style="font-size:var(--tsm);color:var(--tx-1)">{{  p.seller_name||'--'  }}</div>
                  <div style="font-size:10px;color:var(--tx-3)">{{  adminUsers.find(u=>u.id===p.user_id)?.email||'--'  }}</div>
                </td>
                <td><span class="badge" :class="p.platform_type==='techmedix'?'b-tm':'b-gd'" style="font-size:9px">{{  p.platform_type==='techmedix'?'TML':'GD'  }}</span></td>
                <td><span style="font-family:var(--fm);font-size:11px">${{  fNum(p.base_price_usd)  }}</span><div style="font-size:9px;color:var(--tx-3)">{{  tzs(p.base_price_usd*usdToTzs)  }}</div></td>
                <td><span :class="['pc-stock',stockClass(p.stock_quantity)]">{{  p.stock_quantity||0  }}</span></td>
                <td><i :class="p.tmda_certified?'fas fa-certificate':'fas fa-minus'" :style="p.tmda_certified?'color:var(--ok)':'color:var(--tx-4)'"></i></td>
                <td><i :class="p.model_url?'fas fa-cube':'fas fa-minus'" :style="p.model_url?'color:#4dc8d0':'color:var(--tx-4)'"></i></td>
                <td><span class="badge" :class="p.is_active?'b-ok':'b-mu'" style="font-size:9px">{{  p.is_active?'Live':'Draft'  }}</span></td>
                <td>
                  <div style="display:flex;gap:3px">
                    <button @click="openProductDetail(p)" class="btn btn-g btn-xs btn-sq" title="Preview"><i class="fas fa-eye" style="font-size:9px"></i></button>
                    <button @click="openListingModal(p)" class="btn btn-s btn-xs btn-sq" title="Edit"><i class="fas fa-pen" style="font-size:9px"></i></button>
                    <button @click="toggleListingStatus(p)" class="btn btn-g btn-xs btn-sq" :title="p.is_active?'Deactivate':'Activate'"><i :class="p.is_active?'fas fa-eye-slash':'fas fa-eye'" style="font-size:9px"></i></button>
                    <button @click="askDeleteProduct(p)" class="btn btn-d btn-xs btn-sq" title="Delete"><i class="fas fa-trash" style="font-size:9px"></i></button>
                  </div>
                </td>
              </tr>
              <tr v-if="!filteredProds.length"><td colspan="9" style="text-align:center;padding:var(--s5);color:var(--tx-3)">No products found</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- /ADMIN LISTINGS -->

      <!-- ── ADMIN USERS ── -->
      <div v-if="tab==='admin-users' && isAdmin">
        <div class="sect-hd fu">
          <div><div class="sect-ttl">All Users</div><div class="sect-sub">{{  adminUsers.length  }} registered users</div></div>
          <div style="display:flex;gap:var(--s2)">
            <input type="text" v-model="adminUserSearch" placeholder="Search name, email, phone…" class="inp" style="width:220px;border-radius:var(--rp)">
            <select v-model="adminUserRoleFilter" class="sel" style="width:130px;border-radius:var(--rp)">
              <option value="all">All Roles</option>
              <option value="buyer">Buyers</option>
              <option value="seller">Sellers</option>
              <option value="both">Both</option>
              <option value="admin">Admins</option>
            </select>
          </div>
        </div>
        <!-- User cards grid -->
        <div class="admin-user-grid fu fu-1">
          <div v-for="u in filteredAdminUsers" :key="u.id"
            class="admin-user-card"
            @click="adminEditUser(u)">
            <!-- Avatar -->
            <div class="auc-av">
              <img v-if="u.avatar_url" :src="u.avatar_url" class="auc-av-img">
              <span v-else>{{  u.full_name?.charAt(0)||'?'  }}</span>
              <!-- Online indicator placeholder -->
              <div class="auc-status" :class="u.is_active?'active':'inactive'"></div>
            </div>
            <!-- Info -->
            <div class="auc-info">
              <div class="auc-name">{{  u.full_name||'Unnamed'  }}</div>
              <div class="auc-email">{{  u.email  }}</div>
              <div v-if="u.phone" class="auc-phone"><i class="fas fa-phone" style="font-size:8px"></i> {{  u.phone  }}</div>
            </div>
            <!-- Badges -->
            <div class="auc-badges">
              <span class="badge b-ac" style="font-size:8px">{{  u.user_role  }}</span>
              <span class="badge b-mu" style="font-size:8px;text-transform:capitalize">{{  u.user_type||'individual'  }}</span>
              <span v-if="userVerifyStatus(u)==='verified'" class="badge b-ok" style="font-size:8px"><i class="fas fa-check-circle" style="font-size:7px"></i>Verified</span>
              <span v-if="userVerifyStatus(u)==='pending'" class="badge b-wn" style="font-size:8px"><i class="fas fa-clock" style="font-size:7px"></i>Pending</span>
            </div>
            <!-- Stats -->
            <div class="auc-stats">
              <div class="auc-stat">
                <div class="auc-stat-val">{{  allRequests.filter(r=>r.user_id===u.id).length  }}</div>
                <div class="auc-stat-lbl">requests</div>
              </div>
              <div class="auc-stat">
                <div class="auc-stat-val">{{  products.filter(p=>p.user_id===u.id).length  }}</div>
                <div class="auc-stat-lbl">listings</div>
              </div>
              <div class="auc-stat">
                <div class="auc-stat-val">{{  fDate(u.created_at)  }}</div>
                <div class="auc-stat-lbl">joined</div>
              </div>
            </div>
            <!-- Quick actions -->
            <div class="auc-actions" @click.stop>
              <button @click="adminEditUser(u)" class="btn btn-g btn-xs" title="View profile"><i class="fas fa-eye" style="font-size:9px"></i> View</button>
              <button @click="toggleVerified(u)" class="btn btn-xs"
                :class="userVerifyStatus(u)==='verified'?'btn-d':'btn-ok'"
                title="Toggle verification">
                <i :class="userVerifyStatus(u)==='verified'?'fas fa-times':'fas fa-check'" style="font-size:9px"></i>
                {{  userVerifyStatus(u)==='verified'?'Revoke':'Verify'  }}
              </button>
            </div>
          </div>
        </div>
        <!-- Pagination -->
        <div v-if="userTotal > USER_PER_PAGE" class="pgn fu fu-2">
          <button class="pgn-btn" @click="loadAdminUsers(userPage-1)" :disabled="userPage===0"><i class="fas fa-chevron-left"></i>Prev</button>
          <span class="pgn-info">Page {{  userPage+1  }} of {{  Math.ceil(userTotal/USER_PER_PAGE)  }} · {{  userTotal  }} users</span>
          <button class="pgn-btn" @click="loadAdminUsers(userPage+1)" :disabled="(userPage+1)*USER_PER_PAGE>=userTotal">Next<i class="fas fa-chevron-right"></i></button>
        </div>
      </div>
      <!-- /ADMIN USERS -->

      <!-- ── ADMIN PANEL ── -->
      <div v-if="tab==='admin' && isAdmin">
        <div class="sect-hd fu"><div><div class="sect-ttl">Admin Panel</div><div class="sect-sub">Platform management</div></div></div>
        <!-- ── TRIAGE PANEL ── -->
        <div v-if="isAdmin && adminTriage && (adminTriage.pendingPayments?.length||adminTriage.awaitingQuote?.length||adminTriage.verifyRequests?.length||adminTriage.stalled?.length)"
          class="triage-panel fu">
          <div class="triage-hd"><i class="fas fa-bell" style="color:var(--warn)"></i> Needs your attention</div>
          <div class="triage-items">
            <div v-if="adminTriage.pendingPayments?.length" class="triage-item ti-warn"
              @click="adminSubTab='requests';adminReqFilter='pending'">
              <i class="fas fa-credit-card"></i>
              <div><strong>{{  adminTriage.pendingPayments?.length  }}</strong> payment{{  adminTriage.pendingPayments?.length>1?'s':''  }} to verify</div>
              <i class="fas fa-chevron-right" style="margin-left:auto;font-size:9px;opacity:0.5"></i>
            </div>
            <div v-if="adminTriage.awaitingQuote?.length" class="triage-item ti-info"
              @click="adminSubTab='requests';adminReqFilter='pending'">
              <i class="fas fa-file-invoice-dollar"></i>
              <div><strong>{{  adminTriage.awaitingQuote?.length  }}</strong> request{{  adminTriage.awaitingQuote?.length>1?'s':''  }} awaiting quote</div>
              <i class="fas fa-chevron-right" style="margin-left:auto;font-size:9px;opacity:0.5"></i>
            </div>
            <div v-if="adminTriage.verifyRequests?.length" class="triage-item ti-ok"
              @click="goTab('admin-users')">
              <i class="fas fa-shield-halved"></i>
              <div><strong>{{  adminTriage.verifyRequests?.length  }}</strong> seller{{  adminTriage.verifyRequests?.length>1?'s':''  }} awaiting verification</div>
              <i class="fas fa-chevron-right" style="margin-left:auto;font-size:9px;opacity:0.5"></i>
            </div>
            <div v-if="adminTriage.stalled?.length" class="triage-item ti-err"
              @click="adminSubTab='requests'">
              <i class="fas fa-triangle-exclamation"></i>
              <div><strong>{{  adminTriage.stalled?.length  }}</strong> request{{  adminTriage.stalled?.length>1?'s':''  }} stalled 3+ days</div>
              <i class="fas fa-chevron-right" style="margin-left:auto;font-size:9px;opacity:0.5"></i>
            </div>
          </div>
        </div>

        <!-- Admin KPIs -->
        <div class="kpi-grid fu fu-1">
          <div class="kpi"><div class="kpi-ico"><i class="fas fa-users"></i></div><div class="kpi-lbl">Total Users</div><div class="kpi-val">{{  adminUsers.length  }}</div><div class="kpi-sub">Registered</div></div>
          <div class="kpi"><div class="kpi-ico"><i class="fas fa-boxes-stacked"></i></div><div class="kpi-lbl">Products</div><div class="kpi-val">{{  products.length  }}</div><div class="kpi-sub">{{  products.filter(p=>p.is_active).length  }} active</div></div>
          <div class="kpi"><div class="kpi-ico"><i class="fas fa-clipboard-list"></i></div><div class="kpi-lbl">All Requests</div><div class="kpi-val">{{  allRequests.length  }}</div><div class="kpi-sub" :class="pendingAdminCount?'wn':''">{{  pendingAdminCount  }} pending</div></div>
          <div class="kpi"><div class="kpi-ico"><i class="fas fa-coins"></i></div><div class="kpi-lbl">Platform GMV</div><div class="kpi-val xs ac">{{  tzs(allRequests.reduce((s,r)=>s+(r.total_cost||0),0))  }}</div><div class="kpi-sub">All time</div></div>
        </div>
        <!-- Sub tabs -->
        <div style="display:flex;gap:var(--s2);margin-bottom:var(--s3);flex-wrap:wrap" class="fu fu-1">
          <button v-for="st in [{v:'requests',l:'All Requests',i:'fa-clipboard-list'},{v:'users',l:'Users',i:'fa-users'},{v:'products',l:'Products',i:'fa-boxes-stacked'}]" :key="st.v"
            @click="adminSubTab=st.v" class="btn btn-sm" :class="adminSubTab===st.v?'btn-p':'btn-s'">
            <i class="fas" :class="st.i"></i>{{  st.l  }}
          </button>
        </div>
        <!-- Requests table -->
        <div v-if="adminSubTab==='requests'" class="fu fu-2">
          <div style="display:flex;gap:var(--s2);margin-bottom:var(--s3);flex-wrap:wrap">
            <input type="text" v-model="adminReqSearch" placeholder="Search request number…" class="inp" style="max-width:240px;border-radius:var(--rp)">
            <select v-model="adminReqFilter" class="sel" style="width:140px;border-radius:var(--rp)"><option value="all">All Statuses</option><option v-for="s in statusList" :key="s.val" :value="s.val">{{  s.label  }}</option></select>
            <select v-model="adminPlatFilter" class="sel" style="width:140px;border-radius:var(--rp)"><option value="all">All Platforms</option><option value="techmedix">TechMedixLink</option><option value="globaldoor">GlobalDoor</option></select>
          </div>
          <div class="tbl-w">
            <table class="tbl">
              <thead><tr><th>Request #</th><th>Platform</th><th>Buyer</th><th>Status</th><th>Total</th><th>Balance</th><th>Date</th><th>Actions</th></tr></thead>
              <tbody>
                <tr v-for="r in filteredAdminReqs" :key="r.id">
                  <td>
                    <span class="mono">{{  r.request_number  }}</span>
                    <span v-if="r.source_type==='manual'||r.source_type==='link'" class="badge b-wn" style="margin-left:4px;font-size:8px"><i class="fas fa-pen" style="font-size:7px"></i>Custom</span>
                  </td>
                  <td><span class="badge" :class="r.platform_type==='techmedix'?'b-tm':'b-gd'" style="font-size:9px">{{  r.platform_type==='techmedix'?'TML':'GD'  }}</span></td>
                  <td style="font-size:var(--txs)">{{  adminUsers.find(u=>u.id===r.user_id)?.full_name||r.user_id?.slice(0,8)  }}</td>
                  <td>
                    <div class="status-w">
                      <span class="badge" :class="sBadge(r.status)" @click.stop="toggleStatusMenu(r.id)" style="cursor:pointer">{{  fStatus(r.status)  }} <i class="fas fa-chevron-down" style="font-size:7px;margin-left:2px"></i></span>
                      <div v-if="openStatusMenu===r.id" class="status-dd">
                        <div v-for="st in statusList" :key="st.val" class="s-opt" @click="updateStatus(r,st.val)"><div class="s-pip" :style="{background:st.color}"></div>{{  st.label  }}</div>
                      </div>
                    </div>
                  </td>
                  <td><span style="font-family:var(--fm);font-size:11px">{{  tzs(r.total_cost)  }}</span></td>
                  <td><span style="font-family:var(--fm);font-size:11px" :style="(r.balance_due||0)>0?'color:var(--warn)':''">{{  tzs(r.balance_due)  }}</span></td>
                  <td style="font-size:var(--txs)">{{  fDate(r.created_at)  }}</td>
                  <td>
                    <div style="display:flex;gap:3px">
                      <button @click="openDetailModal(r)" class="btn btn-g btn-xs btn-sq" title="View"><i class="fas fa-eye" style="font-size:9px"></i></button>
                      <button @click="openQuoteModal(r)" class="btn btn-info btn-xs btn-sq" title="Quote"><i class="fas fa-file-invoice-dollar" style="font-size:9px"></i></button>
                      <button @click="askPayment(r)" class="btn btn-p btn-xs btn-sq" title="Payment"><i class="fas fa-credit-card" style="font-size:9px"></i></button>
                    </div>
                  </td>
                </tr>
                <tr v-if="!filteredAdminReqs.length"><td colspan="8" style="text-align:center;padding:var(--s6);color:var(--tx-3)">No requests found</td></tr>
              </tbody>
            </table>
          </div>
          <!-- Admin requests pagination -->
          <div v-if="reqTotal > REQ_PER_PAGE" class="pgn">
            <button class="pgn-btn" @click="loadReqs(reqPage-1)" :disabled="reqPage===0"><i class="fas fa-chevron-left"></i>Prev</button>
            <span class="pgn-info">Page {{  reqPage+1  }} of {{  Math.ceil(reqTotal/REQ_PER_PAGE)  }} · {{  reqTotal  }} requests</span>
            <button class="pgn-btn" @click="loadReqs(reqPage+1)" :disabled="(reqPage+1)*REQ_PER_PAGE>=reqTotal">Next<i class="fas fa-chevron-right"></i></button>
          </div>
        </div>
        <!-- Users table -->
        <div v-if="adminSubTab==='users'" class="fu fu-2">
          <div class="tbl-w">
            <table class="tbl">
              <thead><tr><th>User</th><th>Role</th><th>Type</th><th>Verified</th><th>Joined</th><th>Actions</th></tr></thead>
              <tbody>
                <tr v-for="u in adminUsers" :key="u.id">
                  <td><div style="font-size:var(--tsm);font-weight:600;color:var(--tx-1)">{{  u.full_name  }}</div><div style="font-size:10px;color:var(--tx-3)">{{  u.email  }}</div></td>
                  <td><span class="badge b-ac" style="font-size:9px">{{  u.user_role  }}</span></td>
                  <td style="font-size:var(--txs)">{{  u.user_type||'--'  }}<span v-if="userVerifyStatus(u)==='pending'" class="badge b-wn" style="margin-left:4px;font-size:8px">Verify!</span>
                    <span v-if="userVerifyStatus(u)==='verified'" class="badge b-ok" style="margin-left:4px;font-size:8px"><i class="fas fa-check" style="font-size:7px"></i>Verified</span></td>
                  <td>
                    <button @click="toggleVerified(u)" class="badge"
                      :class="userVerifyStatus(u)==='verified'?'b-ok':userVerifyStatus(u)==='pending'?'b-wn':'b-mu'"
                      style="cursor:pointer;border:1px solid">
                      <i :class="userVerifyStatus(u)==='verified'?'fas fa-check-circle':userVerifyStatus(u)==='pending'?'fas fa-clock':'fas fa-minus'"></i>
                      {{  userVerifyStatus(u)==='verified'?'Verified':userVerifyStatus(u)==='pending'?'Pending':'Not requested'  }}
                    </button>
                  </td>
                  <td style="font-size:var(--txs)">{{  fDate(u.created_at)  }}</td>
                  <td><div style="display:flex;gap:3px"><button @click="adminEditUser(u)" class="btn btn-g btn-xs btn-sq"><i class="fas fa-pen" style="font-size:9px"></i></button><button @click="adminToggleUserRole(u)" class="btn btn-s btn-xs btn-sq"><i class="fas fa-user-gear" style="font-size:9px"></i></button></div></td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- Admin users pagination -->
          <div v-if="userTotal > USER_PER_PAGE" class="pgn">
            <button class="pgn-btn" @click="loadAdminUsers(userPage-1)" :disabled="userPage===0"><i class="fas fa-chevron-left"></i>Prev</button>
            <span class="pgn-info">Page {{  userPage+1  }} of {{  Math.ceil(userTotal/USER_PER_PAGE)  }} · {{  userTotal  }} users</span>
            <button class="pgn-btn" @click="loadAdminUsers(userPage+1)" :disabled="(userPage+1)*USER_PER_PAGE>=userTotal">Next<i class="fas fa-chevron-right"></i></button>
          </div>
        </div>
        <!-- Products table -->
        <div v-if="adminSubTab==='products'" class="fu fu-2">
          <div class="tbl-w">
            <table class="tbl">
              <thead><tr><th>Product</th><th>Platform</th><th>Price (USD)</th><th>Stock</th><th>TMDA</th><th>Status</th><th>Seller</th><th>Actions</th></tr></thead>
              <tbody>
                <tr v-for="p in products" :key="p.id">
                  <td><div style="font-size:var(--tsm);font-weight:600;color:var(--tx-1)">{{  p.name  }}</div><div style="font-size:10px;color:var(--tx-3)">{{  p.manufacturer||'--'  }}</div></td>
                  <td><span class="badge" :class="p.platform_type==='techmedix'?'b-tm':'b-gd'" style="font-size:9px">{{  p.platform_type==='techmedix'?'TML':'GD'  }}</span></td>
                  <td><span style="font-family:var(--fm);font-size:11px">${{  fNum(p.base_price_usd)  }}</span></td>
                  <td><span :class="['pc-stock',stockClass(p.stock_quantity)]">{{  p.stock_quantity||0  }}</span></td>
                  <td><i :class="p.tmda_certified?'fas fa-check':'fas fa-minus'" :style="p.tmda_certified?'color:var(--ok)':'color:var(--tx-3)'"></i></td>
                  <td><span class="badge" :class="p.is_active?'b-ok':'b-mu'" style="font-size:9px">{{  p.is_active?'Active':'Inactive'  }}</span></td>
                  <td style="font-size:var(--txs)">{{  p.seller_name||'--'  }}</td>
                  <td><div style="display:flex;gap:3px"><button @click="openListingModal(p)" class="btn btn-g btn-xs btn-sq"><i class="fas fa-pen" style="font-size:9px"></i></button><button @click="toggleListingStatus(p)" class="btn btn-s btn-xs btn-sq"><i :class="p.is_active?'fas fa-eye-slash':'fas fa-eye'" style="font-size:9px"></i></button><button @click="askDeleteProduct(p)" class="btn btn-d btn-xs btn-sq"><i class="fas fa-trash" style="font-size:9px"></i></button></div></td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- Admin products pagination -->
          <div v-if="products.length >= PROD_PER_PAGE" class="pgn">
            <button class="pgn-btn" @click="loadProds(prodPage-1)" :disabled="prodPage===0"><i class="fas fa-chevron-left"></i>Prev</button>
            <span class="pgn-info">Page {{  prodPage+1  }} · {{  prodTotal || products.length  }} products</span>
            <button class="pgn-btn" @click="loadProds(prodPage+1)" :disabled="products.length<PROD_PER_PAGE">Next<i class="fas fa-chevron-right"></i></button>
          </div>
        </div>
      </div>
      <!-- /ADMIN -->

      <!-- ── ANALYTICS ── -->
      <div v-if="tab==='analytics' && isAdmin">
        <div class="sect-hd fu"><div><div class="sect-ttl">Analytics</div><div class="sect-sub">Platform performance</div></div><button @click="loadAnalytics" class="btn btn-g btn-sm"><i class="fas fa-rotate"></i> Refresh</button></div>
        <div class="kpi-grid fu fu-1">
          <div class="kpi"><div class="kpi-ico"><i class="fas fa-chart-line"></i></div><div class="kpi-lbl">Total GMV</div><div class="kpi-val xs ac">{{  tzs(analyticsData.totalGmv||0)  }}</div><div class="kpi-sub">All requests</div></div>
          <div class="kpi"><div class="kpi-ico"><i class="fas fa-percent"></i></div><div class="kpi-lbl">Completion Rate</div><div class="kpi-val sm" :class="(analyticsData.completionRate||0)>50?'ok':'wn'">{{  analyticsData.completionRate||0  }}%</div><div class="kpi-sub">Delivered/total</div></div>
          <div class="kpi"><div class="kpi-ico"><i class="fas fa-clock"></i></div><div class="kpi-lbl">Avg. Fulfilment</div><div class="kpi-val sm">{{  analyticsData.avgDays||'--'  }}</div><div class="kpi-sub">Days avg.</div></div>
          <div class="kpi"><div class="kpi-ico"><i class="fas fa-star"></i></div><div class="kpi-lbl">Avg. Rating</div><div class="kpi-val sm" :class="parseFloat(analyticsData.avgRating)>=4?'ok':'wn'">{{  analyticsData.avgRating||'--'  }}</div><div class="kpi-sub">From reviews</div></div>
          <div class="kpi"><div class="kpi-ico"><i class="fas fa-check-double"></i></div><div class="kpi-lbl">Fulfilled</div><div class="kpi-val sm ok">{{  analyticsData.doneCount||0  }}</div><div class="kpi-sub">of {{  analyticsData.totalReqs||0  }} total</div></div>
        </div>
        <div class="g2 fu fu-2">
          <div class="chart-w"><div class="chart-ttl">Requests by Status</div><div class="chart-c"><canvas id="statusChart"></canvas></div></div>
          <div class="chart-w"><div class="chart-ttl">Platform Split</div><div class="chart-c"><canvas id="platformChart"></canvas></div></div>
        </div>
        <div class="chart-w fu fu-3" style="margin-top:var(--s4)"><div class="chart-ttl">Top Products by Request Volume</div><div class="chart-c"><canvas id="productsChart"></canvas></div></div>
      </div>

      <!-- ── SELLER ANALYTICS ── -->
      <div v-if="tab==='seller-analytics' && canSell && profile">
        <div class="sect-hd fu">
          <div><div class="sect-ttl">My Store Analytics</div><div class="sect-sub">Performance for your listings</div></div>
          <button @click="loadSellerAnalytics" class="btn btn-g btn-sm"><i class="fas fa-rotate"></i> Refresh</button>
        </div>
        <div v-if="sellerAnalyticsLoading" style="text-align:center;padding:var(--s6);color:var(--tx-3)"><div class="spinner" style="margin:0 auto var(--s3)"></div>Loading analytics…</div>
        <template v-else-if="sellerAnalytics.noProducts">
          <div class="empty fu fu-1"><div class="empty-ico"><i class="fas fa-store"></i></div><div class="empty-ttl">No listings yet</div><div class="empty-sub">Add products to start seeing your analytics.</div><button @click="openListingModal()" class="btn btn-p">Add First Product</button></div>
        </template>
        <template v-else>
          <!-- KPI row -->
          <div class="kpi-grid fu fu-1">
            <div class="kpi"><div class="kpi-ico"><i class="fas fa-store"></i></div><div class="kpi-lbl">Live Listings</div><div class="kpi-val">{{  myListings.filter(p=>p.is_active).length  }}</div><div class="kpi-sub">{{  myListings.length  }} total</div></div>
            <div class="kpi"><div class="kpi-ico"><i class="fas fa-inbox"></i></div><div class="kpi-lbl">Total Inquiries</div><div class="kpi-val">{{  sellerAnalytics.totalInquiries||0  }}</div><div class="kpi-sub" :class="sellerAnalytics.totalInquiries?'up':''">All time</div></div>
            <div class="kpi"><div class="kpi-ico" style="background:var(--ok-bg);color:var(--ok)"><i class="fas fa-percent"></i></div><div class="kpi-lbl">Conversion Rate</div><div class="kpi-val sm" :class="(sellerAnalytics.conversionRate||0)>20?'ok':'wn'">{{  sellerAnalytics.conversionRate||0  }}%</div><div class="kpi-sub">Inquiry → order</div></div>
            <div class="kpi"><div class="kpi-ico" style="background:var(--ok-bg);color:var(--ok)"><i class="fas fa-coins"></i></div><div class="kpi-lbl">Est. Revenue</div><div class="kpi-val xs ac">{{  tzs(sellerAnalytics.totalRevenue||0)  }}</div><div class="kpi-sub">Confirmed orders</div></div>
            <div class="kpi"><div class="kpi-ico" style="background:rgba(240,165,0,0.1);color:#f0a500"><i class="fas fa-star"></i></div><div class="kpi-lbl">Avg Rating</div><div class="kpi-val sm" :class="parseFloat(sellerAnalytics.avgRating)>=4?'ok':'wn'">{{  sellerAnalytics.avgRating||'--'  }}</div><div class="kpi-sub">{{  sellerAnalytics.totalReviews||0  }} reviews</div></div>
          </div>
          <!-- Per-product breakdown -->
          <div class="sect-hd fu fu-2" style="margin-top:var(--s4)"><div><div class="sect-ttl" style="font-size:17px">Product performance</div></div></div>
          <div class="tbl-w fu fu-2">
            <table class="tbl">
              <thead><tr><th>Product</th><th>Price</th><th>Stock</th><th>Inquiries</th><th>Converted</th><th>Revenue</th><th>Actions</th></tr></thead>
              <tbody>
                <tr v-for="p in myListings" :key="p.id">
                  <td>
                    <div style="display:flex;align-items:center;gap:var(--s2)">
                      <div style="width:32px;height:32px;border-radius:var(--r2);overflow:hidden;flex-shrink:0;background:var(--bg-2)">
                        <img v-if="p.image_url" :src="p.image_url" style="width:100%;height:100%;object-fit:cover">
                        <i v-else class="fas fa-stethoscope" style="font-size:12px;color:var(--tx-3);margin:10px 10px"></i>
                      </div>
                      <div>
                        <div style="font-size:var(--tsm);font-weight:600;color:var(--tx-1)">{{  p.name  }}</div>
                        <span class="badge" :class="p.is_active?'b-ok':'b-mu'" style="font-size:8px">{{  p.is_active?'Live':'Draft'  }}</span>
                        <span v-if="p.model_url" class="badge b-ac" style="font-size:8px;margin-left:2px"><i class="fas fa-cube" style="font-size:7px"></i>3D</span>
                      </div>
                    </div>
                  </td>
                  <td><span style="font-family:var(--fm);font-size:11px">${{  fNum(p.base_price_usd)  }}</span></td>
                  <td><span :class="['pc-stock',stockClass(p.stock_quantity)]">{{  p.stock_quantity||0  }}</span></td>
                  <td style="font-family:var(--fm)">{{  sellerAnalytics.byProduct?.[p.id]?.inquiries||0  }}</td>
                  <td>
                    <span v-if="sellerAnalytics.byProduct?.[p.id]?.inquiries" style="font-family:var(--fm)">
                      {{  sellerAnalytics.byProduct?.[p.id]?.converted||0  }}
                      <span style="font-size:10px;color:var(--tx-3)">({{  sellerAnalytics.byProduct?.[p.id]?.inquiries ? Math.round((sellerAnalytics.byProduct[p.id].converted/sellerAnalytics.byProduct[p.id].inquiries)*100) : 0  }}%)</span>
                    </span>
                    <span v-else style="color:var(--tx-4)">—</span>
                  </td>
                  <td><span style="font-family:var(--fm);font-size:11px;color:var(--ok)">{{  tzs(sellerAnalytics.byProduct?.[p.id]?.revenue||0)  }}</span></td>
                  <td>
                    <div style="display:flex;gap:3px">
                      <button @click="openListingModal(p)" class="btn btn-g btn-xs btn-sq" title="Edit"><i class="fas fa-pen" style="font-size:9px"></i></button>
                      <button @click="openProductDetail(p)" class="btn btn-s btn-xs btn-sq" title="Preview"><i class="fas fa-eye" style="font-size:9px"></i></button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </template>
      </div>
      <!-- /SELLER ANALYTICS -->

      <!-- /ANALYTICS -->

      <!-- ── SHOPPERS ── -->
      <div v-if="tab==='shoppers' && isAdmin">
        <div class="sect-hd fu"><div><div class="sect-ttl">Shoppers</div><div class="sect-sub">{{  shoppers.length  }} agents registered</div></div><button @click="openShopperModal()" class="btn btn-p btn-sm"><i class="fas fa-plus"></i>Add Shopper</button></div>
        <div v-if="!shoppers.length" class="empty fu fu-1"><div class="empty-ico"><i class="fas fa-people-carry-box"></i></div><div class="empty-ttl">No shoppers yet</div><div class="empty-sub">Add shopper agents to assign them to requests for fulfilment.</div><button @click="openShopperModal()" class="btn btn-p">Add First Shopper</button></div>
        <div class="g3 fu fu-1">
          <div v-for="sh in shoppers" :key="sh.id" class="shopper-card">
            <div style="display:flex;align-items:center;gap:var(--s3);margin-bottom:var(--s3)">
              <div class="sh-av">
                <img v-if="sh.avatar_url" :src="sh.avatar_url" style="width:100%;height:100%;object-fit:cover;border-radius:50%">
                <span v-else>{{  sh.full_name?.charAt(0)||'?'  }}</span>
              </div>
              <div>
                <div style="font-size:var(--tsm);font-weight:600;color:var(--tx-1)">{{  sh.full_name  }}</div>
                <div style="font-size:var(--txs);color:var(--tx-3)">{{  sh.city  }}, {{  sh.country  }}</div>
              </div>
            </div>
            <div style="font-size:var(--txs);color:var(--tx-2);margin-bottom:var(--s3)">{{  sh.specialization||'General'  }}</div>
            <div style="display:flex;align-items:center;justify-content:space-between">
              <div style="display:flex;gap:2px">
                <i v-for="s in 5" :key="s" class="rv-star fas fa-star" :class="{on:s<=(sh.rating||0)}"></i>
              </div>
              <span class="badge" :class="sh.is_active?'b-ok':'b-mu'">{{  sh.is_active?'Active':'Inactive'  }}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- /SHOPPERS -->

    </div><!-- /content -->
  </div><!-- /main -->
</div><!-- /shell -->

<!-- ═══════════════ ALL MODALS ═══════════════ -->

<!-- PROFILE MODAL -->
<transition name="modal">
  <div v-if="showProfileModal && profile" class="modal-bg" @click.self="showProfileModal=false">
    <div class="modal">
      <div class="modal-hd" style="padding-bottom:0;border-bottom:none">
        <!-- Avatar section -->
        <div style="width:100%;text-align:center;padding:var(--s5) var(--s4) var(--s3)">
          <div class="prof-av-wrap" @click="$refs.profAvInput.click()">
            <img v-if="profile.avatar_url" :src="profile.avatar_url" class="prof-av-img">
            <div v-else class="prof-av-ph">{{  userInitial  }}</div>
            <div class="prof-av-edit"><i class="fas fa-camera" style="font-size:10px"></i></div>
          </div>
          <input ref="profAvInput" type="file" accept="image/jpeg,image/jpg,image/png,image/webp" @change="handleAvatarChange" style="display:none">
          <div style="margin-top:var(--s2);font-family:var(--fd);font-size:20px;color:var(--tx-1)">{{  profile.full_name  }}</div>
          <div style="font-size:var(--txs);color:var(--tx-3)">{{  profile.email  }}</div>
          <!-- Completeness bar in modal -->
          <div style="max-width:280px;margin:var(--s3) auto 0">
            <div style="display:flex;justify-content:space-between;margin-bottom:4px">
              <span style="font-size:var(--txs);color:var(--tx-3)">Profile complete</span>
              <span style="font-size:var(--txs);font-family:var(--fm);color:var(--philips);font-weight:600">{{  profileCompletion.pct  }}%</span>
            </div>
            <div style="height:6px;background:var(--bg-3);border-radius:3px;overflow:hidden">
              <div :style="{width:profileCompletion.pct+'%',background:'var(--philips)',height:'100%',borderRadius:'3px',transition:'width 0.6s ease'}"></div>
            </div>
            <div v-if="profileCompletion.next" style="font-size:10px;color:var(--tx-3);margin-top:4px;text-align:left">
              <i class="fas fa-arrow-right" style="color:var(--philips)"></i> Next: {{  profileCompletion.next?.label  }}
            </div>
          </div>
        </div>
      </div>
      <div class="modal-hd"><div><div class="modal-ttl">Edit Profile</div><div style="display:flex;align-items:center;gap:var(--s2);margin-top:4px"><div class="modal-sub">{{  profile.email  }}</div><span v-if="profile.company_name?.startsWith('[VERIFIED]')" class="badge b-ok"><i class="fas fa-check-circle"></i>Verified</span><span v-else-if="profile.company_name?.startsWith('[VERIFY_REQUESTED]')" class="badge b-wn"><i class="fas fa-clock"></i>Pending Review</span></div></div><button class="modal-x" @click="showProfileModal=false"><i class="fas fa-times"></i></button></div>
      <div class="modal-body">
        <div class="fr2">
          <div class="fg"><label class="lbl req">Full Name</label><input type="text" v-model="uF.full_name" class="inp"></div>
          <div class="fg"><label class="lbl">Phone</label><input type="tel" v-model="uF.phone" class="inp" placeholder="+255 …"></div>
        </div>
        <div class="fr2">
          <div class="fg"><label class="lbl">Role</label><select v-model="uF.user_role" class="sel"><option value="buyer">Buyer</option><option value="seller">Seller</option><option value="both">Buyer & Seller</option><option value="admin" v-if="isAdmin">Admin</option></select></div>
          <div class="fg"><label class="lbl">Account Type</label><select v-model="uF.user_type" class="sel"><option value="individual">Individual</option><option value="hospital">Hospital</option><option value="clinic">Clinic</option><option value="lab">Laboratory</option><option value="business">Business</option><option value="ngo">NGO</option></select></div>
        </div>
        <div class="fg" v-if="['hospital','clinic','lab','business','ngo'].includes(uF.user_type)"><label class="lbl">Organisation Name</label><input type="text" v-model="uF.company_name" class="inp"></div>
        <!-- Seller Verification -->
        <div v-if="canSell" class="hr"></div>
        <div v-if="canSell">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--s3)">
            <div>
              <div style="font-family:var(--fd);font-size:17px;color:var(--tx-1)">Seller Verification</div>
              <div style="font-size:var(--txs);color:var(--tx-3);margin-top:2px">Verified sellers get a trust badge on all listings</div>
            </div>
            <span v-if="profile.company_name?.startsWith('[VERIFIED]')" class="badge b-ok"><i class="fas fa-check-circle"></i>Verified Seller</span>
            <button v-else-if="!profile.company_name?.startsWith('[VERIFY_REQUESTED]')" @click="showVerifyModal=true" class="btn btn-s btn-sm"><i class="fas fa-shield-halved"></i>Request Verification</button>
            <span v-else class="badge b-wn"><i class="fas fa-clock"></i>Under Review</span>
          </div>
        </div>
        <!-- Addresses -->
        <div class="hr"></div>
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--s3)">
          <div style="font-family:var(--fd);font-size:17px;font-weight:500;color:var(--tx-1)">Saved Addresses</div>
          <button @click="addingAddress=!addingAddress" class="btn btn-g btn-xs"><i class="fas fa-plus"></i>Add</button>
        </div>
        <div v-if="addingAddress" class="card-i" style="margin-bottom:var(--s3)">
          <div class="fr2" style="margin-bottom:var(--s2)">
            <div class="fg"><label class="lbl req">Type</label><select v-model="addrF.address_type" class="sel"><option value="home">Home</option><option value="work">Work / Office</option><option value="clinic">Clinic / Hospital</option><option value="warehouse">Warehouse</option></select></div>
            <div class="fg"><label class="lbl req">Region</label><input type="text" v-model="addrF.region" class="inp" placeholder="e.g. Dar es Salaam, Arusha"></div>
          </div>
          <div class="fr2" style="margin-bottom:var(--s2)">
            <div class="fg"><label class="lbl">District</label><input type="text" v-model="addrF.district" class="inp" placeholder="e.g. Ilala, Kinondoni"></div>
            <div class="fg"><label class="lbl">Street / Road</label><input type="text" v-model="addrF.street" class="inp" placeholder="e.g. Samora Avenue"></div>
          </div>
          <div class="fg"><label class="lbl">Landmark</label><input type="text" v-model="addrF.landmark" class="inp" placeholder="e.g. Near Muhimbili Hospital, next to…"></div>
          <label class="chk" style="margin-top:var(--s2)"><input type="checkbox" v-model="addrF.is_default"><span class="chk-lbl">Set as default delivery address</span></label>
          <div style="display:flex;gap:var(--s2);margin-top:var(--s3)">
            <button @click="saveAddress" class="btn btn-ok btn-sm" :disabled="!addrF.region"><i class="fas fa-check"></i>Save Address</button>
            <button @click="addingAddress=false" class="btn btn-g btn-sm">Cancel</button>
          </div>
        </div>
        <div v-for="addr in addresses" :key="addr.id" class="addr-card">
          <div class="addr-ico"><i :class="addr.address_type==='clinic'?'fas fa-hospital':addr.address_type==='work'?'fas fa-building':addr.address_type==='warehouse'?'fas fa-warehouse':'fas fa-home'"></i></div>
          <div style="flex:1">
            <div style="font-size:var(--tsm);font-weight:600;color:var(--tx-1);text-transform:capitalize">{{  addr.address_type||'Address'  }}<span v-if="addr.is_default" class="badge b-ac" style="margin-left:6px;font-size:8px">Default</span></div>
            <div style="font-size:var(--txs);color:var(--tx-3);margin-top:2px">{{  [addr.street, addr.district, addr.region].filter(Boolean).join(', ')  }}</div>
            <div v-if="addr.landmark" style="font-size:var(--txs);color:var(--tx-4);margin-top:1px"><i class="fas fa-map-pin" style="font-size:8px"></i> {{  addr.landmark  }}</div>
          </div>
          <button @click="deleteAddress(addr.id)" class="btn btn-d btn-xs btn-sq sm"><i class="fas fa-trash" style="font-size:8px"></i></button>
        </div>
        <div v-if="!addresses.length&&!addingAddress" style="font-size:var(--txs);color:var(--tx-3);text-align:center;padding:var(--s3)">No saved addresses</div>
      </div>
      <div class="modal-ft">
        <button @click="saveProfile" class="btn btn-p"><i class="fas fa-check"></i>Save Profile</button>
        <button @click="showProfileModal=false" class="btn btn-g">Cancel</button>
        <button @click="doLogout" class="btn btn-d" style="margin-left:auto"><i class="fas fa-sign-out-alt"></i>Sign Out</button>
      </div>
    </div>
  </div>
</transition>

<!-- REQUEST MODAL -->
<transition name="modal">
  <div v-if="showReqModal" class="modal-bg" @click.self="showReqModal=false">
    <div class="modal modal-lg">
      <div class="modal-hd"><div><div class="modal-ttl">New Purchase Request</div><div class="modal-sub">Submit a sourcing or purchase request</div></div><button class="modal-x" @click="showReqModal=false"><i class="fas fa-times"></i></button></div>
      <div class="modal-body">
        <div class="fr2">
          <div class="fg"><label class="lbl req">Platform</label><select v-model="rF.platform_type" class="sel"><option value="techmedix">TechMedixLink (Medical)</option><option value="globaldoor">GlobalDoor (International)</option></select></div>
          <div class="fg"><label class="lbl req">Urgency</label><select v-model="rF.urgency" class="sel"><option value="low">Low</option><option value="normal">Normal</option><option value="high">High</option><option value="critical">Critical</option></select></div>
        </div>
        <!-- Request type switcher -->
        <div class="fg">
          <label class="lbl req">How would you like to source this?</label>
          <div style="display:flex;gap:var(--s2)">
            <button type="button" @click="rF.source_type='catalog';rF.custom_name='';rF.custom_desc='';rF.source_url=''" class="btn btn-sm" :class="rF.source_type==='catalog'?'btn-p':'btn-s'" style="flex:1"><i class="fas fa-boxes-stacked"></i>From Our Catalogue</button>
            <button type="button" @click="rF.source_type='manual';rF.product_id=''" class="btn btn-sm" :class="rF.source_type==='manual'?'btn-p':'btn-s'" style="flex:1"><i class="fas fa-pen"></i>Custom / Unlisted Item</button>
            <button type="button" @click="rF.source_type='link';rF.product_id=''" class="btn btn-sm" :class="rF.source_type==='link'?'btn-p':'btn-s'" style="flex:1"><i class="fas fa-link"></i>Product Link</button>
          </div>
        </div>
        <!-- CATALOG path -->
        <template v-if="rF.source_type==='catalog'">
          <div class="fg"><label class="lbl req">Select Product</label>
            <select v-model="rF.product_id" class="sel">
              <option value="">— Choose from catalogue —</option>
              <option v-for="p in products.filter(p=>p.is_active)" :key="p.id" :value="p.id">{{  p.name  }} · ${{  fNum(p.base_price_usd)  }}</option>
            </select>
          </div>
          <div v-if="selectedProduct" class="info-strip ac" style="margin-top:0">
            <div style="flex:1">
              <div style="font-size:var(--tsm);font-weight:600;color:var(--tx-1)">{{  selectedProduct.name  }}</div>
              <div style="font-size:var(--txs);color:var(--a);margin-top:2px">{{  stockLabel(selectedProduct.stock_quantity)  }} · {{  selectedProduct.country||'Tanzania'  }}</div>
            </div>
            <div style="text-align:right"><div style="font-family:var(--fd);font-size:20px;color:var(--a)">${{  fNum(selectedProduct.base_price_usd)  }}</div><div style="font-size:10px;color:var(--tx-3)">≈ {{  tzs(Math.round(selectedProduct.base_price_usd*usdToTzs))  }}</div></div>
          </div>
        </template>
        <!-- MANUAL / CUSTOM path -->
        <template v-if="rF.source_type==='manual'">
          <div class="info-strip in" style="margin-top:0"><i class="fas fa-lightbulb" style="color:var(--info);flex-shrink:0"></i><div style="font-size:var(--txs);color:var(--info);line-height:1.5">Describe the item you need. Our team will source it and send you a quote within 24 hours.</div></div>
          <div class="fg"><label class="lbl req">Product / Item Name</label><input type="text" v-model="rF.custom_name" class="inp" placeholder="e.g. Philips Ultrasound HD11 XE, Surgical gloves size M, ECG Machine"></div>
          <div class="fg"><label class="lbl req">Detailed Description &amp; Specifications</label><textarea v-model="rF.custom_desc" class="tex" placeholder="Brand, model number, technical specs, colour, size, quantity, any specific requirements…"></textarea></div>
        </template>
        <!-- LINK path -->
        <template v-if="rF.source_type==='link'">
          <div class="info-strip in" style="margin-top:0"><i class="fas fa-globe" style="color:var(--info);flex-shrink:0"></i><div style="font-size:var(--txs);color:var(--info);line-height:1.5">Paste a link to the product on Amazon, Alibaba, or any supplier website. We will procure and deliver it to you.</div></div>
          <div class="fg"><label class="lbl req">Product Link (URL)</label><input type="url" v-model="rF.source_url" class="inp" placeholder="https://www.amazon.com/dp/…  or  https://alibaba.com/…"></div>
          <div class="fg"><label class="lbl">Additional Notes</label><textarea v-model="rF.custom_desc" class="tex" style="min-height:60px" placeholder="Quantity, variant (colour/size), any specific requirements…"></textarea></div>
        </template>
        <div class="fg"><label class="lbl req">Quantity</label><input type="number" v-model.number="rF.quantity" min="1" class="inp" style="max-width:160px"></div>
        <!-- Address picker -->
        <div v-if="addresses.length" class="fg">
          <label class="lbl">Delivery Address</label>
          <div v-for="addr in addresses" :key="addr.id" class="addr-card" :class="{sel:rF.address_id===addr.id}" @click="rF.address_id=addr.id">
            <div class="addr-ico"><i :class="addr.address_type==='clinic'?'fas fa-hospital':addr.address_type==='work'?'fas fa-building':addr.address_type==='warehouse'?'fas fa-warehouse':'fas fa-home'"></i></div>
            <div style="flex:1"><div style="font-size:var(--tsm);font-weight:600;color:var(--tx-1);text-transform:capitalize">{{  addr.address_type||'Address'  }}</div><div style="font-size:var(--txs);color:var(--tx-3)">{{  [addr.street, addr.district, addr.region].filter(Boolean).join(', ')  }}</div></div>
            <i v-if="rF.address_id===addr.id" class="fas fa-check-circle" style="color:var(--ok);margin-left:auto;flex-shrink:0"></i>
          </div>
        </div>
        <div class="fg"><label class="lbl">Delivery Notes / Specifications</label><textarea v-model="rF.notes" class="tex" placeholder="Delivery address, special requirements, product specifications…"></textarea></div>
        <!-- Cost estimate -->
        <div v-if="selectedProduct" class="cost-box">
          <div class="cost-ttl"><i class="fas fa-calculator"></i>Cost Estimate</div>
          <div class="cost-row"><span class="c-l">Item Cost</span><span class="c-v">{{  tzs(reqCostEstimate.items)  }}</span></div>
          <div class="cost-row"><span class="c-l">Shipping (est.)</span><span class="c-v">{{  tzs(reqCostEstimate.shipping)  }}</span></div>
          <div class="cost-row" v-if="rF.platform_type==='globaldoor'"><span class="c-l">Import Duty (est.)</span><span class="c-v">{{  tzs(reqCostEstimate.duty)  }}</span></div>
          <div class="cost-row"><span class="c-l">Service Fee (10%)</span><span class="c-v">{{  tzs(reqCostEstimate.fee)  }}</span></div>
          <div class="cost-row total"><span class="c-l">Total Estimate</span><span class="c-v">{{  tzs(reqCostEstimate.total)  }}</span></div>
        </div>
      </div>
      <div class="modal-ft">
        <button @click="saveReq" class="btn btn-p" :disabled="(rF.source_type==='catalog'&&!rF.product_id)||(rF.source_type==='manual'&&!rF.custom_name)||(rF.source_type==='link'&&!rF.source_url)||!rF.quantity"><i class="fas fa-paper-plane"></i>Submit Request</button>
        <button @click="showReqModal=false" class="btn btn-g">Cancel</button>
      </div>
    </div>
  </div>
</transition>

<!-- REQUEST DETAIL MODAL -->
<transition name="modal">
  <div v-if="detailReq" class="modal-bg" @click.self="detailReq=null">
    <div class="modal modal-xl">
      <div class="modal-hd">
        <div><div class="modal-ttl">{{  detailReq.request_number  }}</div><div class="modal-sub">{{  fStatus(detailReq.status)  }} · {{  fDate(detailReq.created_at)  }}</div></div>
        <div style="display:flex;gap:var(--s2);align-items:center">
          <button v-if="isAdmin" @click="printQuote(detailReq)" class="btn btn-g btn-sm no-print"><i class="fas fa-print"></i>Print Quote</button>
        <button v-if="['delivered','completed'].includes(detailReq.status)" @click="printPPRA(detailReq)" class="btn btn-s btn-sm no-print"><i class="fas fa-file-contract"></i>PPRA Doc</button>
          <button class="modal-x" @click="detailReq=null"><i class="fas fa-times"></i></button>
        </div>
      </div>
      <div class="modal-body">
        <!-- Printable quote header (admin only) -->
        <div v-if="isAdmin" class="print-quote" style="padding:20px;background:white;color:black;margin-bottom:20px">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:20px;padding-bottom:12px;border-bottom:2px solid #002a20">
            <div><div style="font-size:26px;font-weight:700;color:#002a20">TechMedixLink</div><div style="font-size:11px;color:#666;margin-top:2px">Tanzania Medical Equipment Platform</div></div>
            <div style="text-align:right"><div style="font-size:12px;font-weight:700;color:#002a20">QUOTATION</div><div style="font-size:11px;color:#666">Ref: {{  detailReq.request_number  }}</div><div style="font-size:11px;color:#666">Date: {{  fDate(new Date().toISOString())  }}</div></div>
          </div>
        </div>
        <!-- Shopper assigned — prominent card with contact -->
        <div v-if="detailReq.shopper_name" style="margin-bottom:var(--s4)">
          <div style="font-family:var(--fd);font-size:16px;color:var(--tx-1);margin-bottom:var(--s2)">Your Assigned Agent</div>
          <div class="card-i" style="display:flex;align-items:center;gap:var(--s4);padding:var(--s4)">
            <div class="shopper-av" style="width:44px;height:44px;font-size:18px;flex-shrink:0;overflow:hidden">
              <img v-if="detailReq.shopper_avatar" :src="detailReq.shopper_avatar" style="width:100%;height:100%;object-fit:cover;border-radius:50%">
              <span v-else>{{  detailReq.shopper_name?.charAt(0)||'?'  }}</span>
            </div>
            <div style="flex:1">
              <div style="font-size:var(--tlg);font-weight:700;color:var(--tx-1)">{{  detailReq.shopper_name  }}</div>
              <div style="font-size:var(--txs);color:var(--tx-3);margin-top:2px">{{  detailReq.shopper_city  }} · {{  detailReq.assignment_type?.replace('_',' ')||'Agent'  }}</div>
              <div style="display:flex;gap:2px;margin-top:4px">
                <i v-for="s in 5" :key="s" class="rv-star fas fa-star" :class="{on:s<=(detailReq.shopper_rating||0)}"></i>
              </div>
            </div>
            <div style="display:flex;flex-direction:column;gap:var(--s2)">
              <span class="badge" :class="detailReq.assignment_status==='accepted'?'b-ok':detailReq.assignment_status==='in_progress'?'b-in':'b-wn'">{{  detailReq.assignment_status?.replace('_',' ')||'Assigned'  }}</span>
                <a v-if="detailReq.shopper_phone" :href="'https://wa.me/'+detailReq.shopper_phone.replace(/[^0-9]/g,'')" target="_blank" class="btn btn-ok btn-sm" style="text-decoration:none"><i class="fab fa-whatsapp"></i>WhatsApp</a>
              <a v-if="detailReq.shopper_phone" :href="'tel:'+detailReq.shopper_phone" class="btn btn-s btn-sm" style="text-decoration:none"><i class="fas fa-phone"></i>Call</a>
              <!-- Admin: update shopper status -->
              <template v-if="isAdmin && detailReq.shopper_assignment_id">
                <select @change="updateShopperStatus(detailReq,$event.target.value)" class="sel" style="font-size:10px;padding:4px 8px;width:auto;margin-top:4px">
                  <option value="">Update status…</option>
                  <option value="accepted">Accepted</option>
                  <option value="in_progress">In progress</option>
                  <option value="completed">Completed</option>
                  <option value="failed">Failed</option>
                </select>
              </template>
            </div>
          </div>
        </div>
        <!-- Assign shopper (admin) -->
        <div v-if="isAdmin && !detailReq.shopper_name && shoppers.length" class="info-strip in" style="margin-bottom:var(--s3)">
          <i class="fas fa-people-carry-box" style="color:var(--info);flex-shrink:0"></i>
          <div style="flex:1"><div style="font-size:var(--tsm);font-weight:600;color:var(--info)">No shopper assigned</div></div>
          <select v-model="assignShopperId" class="sel" style="width:160px;border-radius:var(--rp)"><option value="">Select shopper…</option><option v-for="sh in shoppers" :key="sh.id" :value="sh.id">{{  sh.full_name  }}</option></select>
          <button @click="assignShopper(detailReq)" class="btn btn-info btn-sm" :disabled="!assignShopperId"><i class="fas fa-check"></i>Assign</button>
        </div>
        <!-- Stepper -->
        <div class="stepper"><div v-for="(st,idx) in stepperStages" :key="st.val" class="step" :class="stepCls(detailReq.status,idx)"><div class="step-dot"><i class="fas fa-check" style="font-size:5px"></i></div><div class="step-lbl">{{  st.short  }}</div></div></div>
        <!-- Items -->
        <div v-if="detailReq.items?.length" class="req-items"><div v-for="it in detailReq.items" :key="it.id" class="ri-row"><span class="ri-name">{{  it.product_name  }}</span><span class="ri-qty">×{{  it.quantity  }}</span><span class="ri-price">{{  tzs(it.total_price)  }}</span></div></div>
        <!-- Financials -->
        <div class="req-fin">
          <div class="fin-c"><div class="fin-l">Item Cost</div><div class="fin-v">{{  tzs(detailReq.item_cost)  }}</div></div>
          <div class="fin-c"><div class="fin-l">Shipping</div><div class="fin-v">{{  tzs(detailReq.shipping_cost)  }}</div></div>
          <div class="fin-c"><div class="fin-l">Service Fee</div><div class="fin-v">{{  tzs(detailReq.service_fee)  }}</div></div>
          <div class="fin-c"><div class="fin-l">Duty</div><div class="fin-v">{{  tzs(detailReq.duty_cost)  }}</div></div>
          <div class="fin-c"><div class="fin-l">Total</div><div class="fin-v">{{  tzs(detailReq.total_cost)  }}</div></div>
          <div class="fin-c"><div class="fin-l">Balance Due</div><div class="fin-v" :class="(detailReq.balance_due||0)>0?'due':''">{{  tzs(detailReq.balance_due)  }}</div></div>
        </div>
        <!-- Tracking timeline -->
        <div style="font-family:var(--fd);font-size:18px;font-weight:500;color:var(--tx-1);margin-bottom:var(--s3)">Tracking Events</div>
        <div v-if="!detailReq.tracking_events?.length" style="font-size:var(--tsm);color:var(--tx-3);margin-bottom:var(--s4)">No tracking events yet.</div>
        <div class="timeline">
          <div v-for="e in detailReq.tracking_events" :key="e.id" class="tl-item">
            <div class="tl-dot" :class="{done:e.event_status==='completed'}"><i class="fas fa-check" style="font-size:5px"></i></div>
            <div class="tl-ttl">{{  fEvent(e.event_type)  }}</div>
            <div class="tl-sub">{{  e.location||'--'  }} · {{  fDateTime(e.event_time)  }}</div>
            <div v-if="e.description" class="tl-desc">{{  e.description  }}</div>
          </div>
        </div>
        <!-- Reviews for completed requests -->
        <div v-if="['delivered','completed','installed'].includes(detailReq.status)" style="margin-top:var(--s4)">
          <div style="font-family:var(--fd);font-size:18px;color:var(--tx-1);margin-bottom:var(--s3)">Reviews</div>
          <div v-if="productReviews.length" style="display:flex;flex-direction:column;gap:var(--s3)">
            <div v-for="rv in productReviews" :key="rv.id" class="card-i">
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--s2)">
                <div style="font-size:var(--tsm);font-weight:600;color:var(--tx-1)">{{  rv.user?.full_name || 'Anonymous'  }}</div>
                <div style="display:flex;gap:2px">
                  <i v-for="s in 5" :key="s" class="rv-star fas fa-star" :class="{on:s<=rv.rating}"></i>
                </div>
              </div>
              <div style="font-size:var(--tsm);color:var(--tx-2);line-height:1.6">{{  rv.review_text  }}</div>
              <div style="font-size:var(--txs);color:var(--tx-4);margin-top:var(--s2);font-family:var(--fm)">{{  fDate(rv.created_at)  }}</div>
            </div>
          </div>
          <div v-else style="font-size:var(--tsm);color:var(--tx-3)">No reviews yet for this order.</div>
        </div>
        <!-- Notes -->
        <div v-if="detailReq.source_notes" style="margin-top:var(--s4)"><div style="font-size:var(--txs);font-weight:700;color:var(--tx-3);letter-spacing:0.09em;text-transform:uppercase;margin-bottom:var(--s2)">Delivery Notes</div><div style="font-size:var(--tsm);color:var(--tx-2);line-height:1.6;padding:var(--s3) var(--s4);background:var(--bg-3);border-radius:var(--r3)">{{  detailReq.source_notes  }}</div></div>
      </div>
      <div class="modal-ft">
        <button v-if="(detailReq.balance_due||0)>0" @click="askPayment(detailReq);detailReq=null" class="btn btn-p"><i class="fas fa-credit-card"></i>Record Payment</button>
        <button v-if="isAdmin" @click="openQuoteModal(detailReq);detailReq=null" class="btn btn-info"><i class="fas fa-file-invoice-dollar"></i>Send Quote</button>
        <button v-if="!isAdmin&&detailReq.status==='delivered'" @click="confirmReceipt(detailReq);detailReq=null" class="btn btn-ok"><i class="fas fa-box-open"></i>Confirm Receipt</button>
        <button v-if="!isAdmin&&['pending','quoted','draft'].includes(detailReq.status)" @click="askCancelRequest(detailReq);detailReq=null" class="btn btn-d"><i class="fas fa-times-circle"></i>Cancel Request</button>
        <button @click="detailReq=null" class="btn btn-g">Close</button>
      </div>
    </div>
  </div>
</transition>

<!-- LISTING MODAL -->
<transition name="modal">
  <div v-if="showListingModal" class="modal-bg" @click.self="closeListing">
    <div class="modal modal-lg">
      <div class="modal-hd"><div><div class="modal-ttl">{{  editingProd?'Edit Product':'New Product Listing'  }}</div><div class="modal-sub">{{  editingProd?'Update your product details':'Add a new product to the marketplace'  }}</div></div><button class="modal-x" @click="closeListing"><i class="fas fa-times"></i></button></div>
      <div class="modal-body">
        <!-- Image upload -->
        <div class="fg">
          <label class="lbl">Product Image</label>
          <div class="img-up" @click="$refs.imgInput.click()">
            <input ref="imgInput" type="file" accept="image/*" @change="handleImageChange" style="display:none">
            <img v-if="pF.imagePreview" :src="pF.imagePreview" class="img-preview">
            <div v-else><i class="fas fa-image" style="font-size:28px;color:var(--tx-3);margin-bottom:8px;display:block"></i><div style="font-size:var(--tsm);color:var(--tx-3)">Click to upload product image</div><div style="font-size:var(--txs);color:var(--tx-4);margin-top:3px">JPG, PNG, WebP · Max 5MB · Click or drag to upload</div></div>
          </div>
          <div v-if="pF.uploading" style="display:flex;align-items:center;gap:8px;margin-top:var(--s2);font-size:var(--txs);color:var(--info)"><div class="spinner" style="width:14px;height:14px;margin:0;border-width:1.5px"></div>Uploading image…</div>
          <div v-if="pF.imageSize&&!pF.uploading" style="font-size:var(--txs);color:var(--ok);margin-top:var(--s1)"><i class="fas fa-check-circle"></i> Image ready · {{  pF.imageSize  }} · JPG/PNG/WebP accepted · Max 5MB</div>
        </div>
        <div class="fr2">
          <div class="fg"><label class="lbl req">Product Name</label><input type="text" v-model="pF.name" class="inp" placeholder="e.g. Philips Ultrasound Machine X8"></div>
          <div class="fg"><label class="lbl req">Manufacturer / Brand</label><input type="text" v-model="pF.manufacturer" class="inp" placeholder="e.g. Philips Medical"></div>
        </div>
        <div class="fr2">
          <div class="fg"><label class="lbl req">Platform</label><select v-model="pF.platform_type" class="sel"><option value="techmedix">TechMedixLink</option><option value="globaldoor">GlobalDoor</option><option value="both">Both Platforms</option></select></div>
          <div class="fg"><label class="lbl req">Product Type</label><select v-model="pF.product_type" class="sel"><option value="medical_device">Medical Device</option><option value="medical_supply">Medical Supply</option><option value="electronics">Electronics</option><option value="lab_equipment">Lab Equipment</option><option value="other">Other</option></select></div>
        </div>
        <div class="fg"><label class="lbl">Description / Specifications</label><textarea v-model="pF.description" class="tex" placeholder="Detailed description, technical specifications, model numbers…"></textarea></div>
        <div class="fr3">
          <div class="fg"><label class="lbl req">Price (USD)</label><input type="number" v-model.number="pF.base_price_usd" min="0" step="0.01" class="inp" placeholder="0.00"></div>
          <div class="fg"><label class="lbl req">Stock Quantity</label><input type="number" v-model.number="pF.stock_quantity" min="0" class="inp" placeholder="0"></div>
          <div class="fg"><label class="lbl">Warranty (months)</label><input type="number" v-model.number="pF.warranty_months" min="0" class="inp" placeholder="12"></div>
        </div>
        <div class="fr2">
          <div class="fg"><label class="lbl">Country of Stock</label><input type="text" v-model="pF.country" class="inp" placeholder="e.g. Tanzania, Germany, China"></div>
          <div class="fg"><label class="lbl">Import Duty % (GlobalDoor)</label><input type="number" v-model.number="pF.import_duty_percent" min="0" max="100" step="0.1" class="inp" placeholder="0"></div>
        </div>
        <div class="fr2">
          <div class="fg"><label class="lbl">Est. Weight (kg)</label><input type="number" v-model.number="pF.estimated_weight_kg" min="0" step="0.1" class="inp" placeholder="0"></div>
          <div class="fg"><label class="lbl">Seller Name (display)</label><input type="text" v-model="pF.seller_name" class="inp" :placeholder="profile?.full_name||'Your name'"></div>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:var(--s4);margin-top:var(--s2)">
          <label class="chk"><input type="checkbox" v-model="pF.tmda_certified"><span class="chk-lbl"><i class="fas fa-certificate" style="color:var(--ok);font-size:9px;margin-right:3px"></i>TMDA Certified</span></label>
          <label class="chk"><input type="checkbox" v-model="pF.requires_installation"><span class="chk-lbl">Requires Installation</span></label>
          <label class="chk"><input type="checkbox" v-model="pF.requires_training"><span class="chk-lbl">Requires Training</span></label>
          <label class="chk"><input type="checkbox" v-model="pF.is_active"><span class="chk-lbl">List as Active</span></label>
        </div>
        <!-- 3D Model upload -->
        <div class="fg">
          <label class="lbl">3D Model URL <span class="badge b-ac" style="font-size:8px;margin-left:4px"><i class="fas fa-cube" style="font-size:7px"></i>3D View</span></label>
          <input type="url" v-model="pF.model_url" class="inp" placeholder="https://… (.glb or .gltf file URL)">
          <div class="hint"><i class="fas fa-info-circle"></i> Upload a .glb file to Supabase storage and paste the public URL here. Buyers can rotate and zoom in 3D, and view in AR on mobile. <a href="https://www.khronos.org/gltf/" target="_blank" style="color:var(--philips)">What is .glb?</a></div>
        </div>

        <div v-if="pF.base_price_usd" class="cost-box" style="margin-top:var(--s4)">
          <div class="cost-ttl"><i class="fas fa-eye"></i>TZS Preview</div>
          <div class="cost-row"><span class="c-l">Listed Price (TZS)</span><span class="c-v">{{  tzs(pF.base_price_usd * usdToTzs)  }}</span></div>
        </div>
      </div>
      <div class="modal-ft">
        <button @click="saveListing" class="btn btn-p" :disabled="!pF.name||!pF.base_price_usd"><i class="fas fa-check"></i>{{  editingProd?'Update Listing':'Publish Listing'  }}</button>
        <button @click="closeListing" class="btn btn-g">Cancel</button>
        <button v-if="editingProd" @click="askDeleteProduct(editingProd)" class="btn btn-d" style="margin-left:auto"><i class="fas fa-trash"></i>Delete</button>
      </div>
    </div>
  </div>
</transition>

<!-- PAYMENT MODAL -->
<transition name="modal">
  <div v-if="paymentReq" class="modal-bg" @click.self="paymentReq=null">
    <div class="modal">
      <div class="modal-hd">
        <div>
          <div class="modal-ttl">{{  isAdmin ? 'Record Payment' : 'Pay Balance'  }}</div>
          <div class="modal-sub">{{  paymentReq.request_number  }}</div>
        </div>
        <button class="modal-x" @click="paymentReq=null"><i class="fas fa-times"></i></button>
      </div>
      <div class="modal-body">

        <!-- Buyer: verification notice -->
        <div v-if="!isAdmin" class="info-strip wn" style="margin-bottom:var(--s4)">
          <i class="fas fa-shield-halved" style="color:var(--warn);flex-shrink:0"></i>
          <div style="font-size:var(--txs);color:var(--warn);line-height:1.5">
            <strong>Secure payment.</strong> Enter your M-Pesa reference after completing payment on your phone. Our team verifies within 24 hours.
          </div>
        </div>

        <!-- Payment summary card -->
        <div class="pmt-summary">
          <div class="pmt-summary-row">
            <span>Order total</span>
            <span class="mono">{{  tzs(paymentReq.total_cost||0)  }}</span>
          </div>
          <div class="pmt-summary-row">
            <span>Already paid</span>
            <span class="mono" style="color:var(--ok)">{{  tzs(paymentReq.deposit_paid||0)  }}</span>
          </div>
          <div class="pmt-summary-row pmt-summary-due">
            <span>Balance due</span>
            <span class="mono">{{  tzs(paymentReq.balance_due||0)  }}</span>
          </div>
        </div>

        <!-- Amount -->
        <div class="fg">
          <label class="lbl req">Payment amount (TZS)</label>
          <input type="number" v-model.number="pmtF.amount" min="0"
            :max="paymentReq.balance_due||undefined" class="inp"
            style="font-size:18px;font-weight:700;font-family:var(--fm)"
            :placeholder="paymentReq.balance_due">
          <!-- Remaining after this payment -->
          <div v-if="pmtF.amount>0" class="hint" :class="Math.max(0,(paymentReq.balance_due||0)-pmtF.amount)===0?'':' wn'">
            <i class="fas fa-info-circle"></i>
            Remaining after payment:
            <strong>{{  tzs(Math.max(0,(paymentReq.balance_due||0)-(pmtF.amount||0)))  }}</strong>
            <span v-if="Math.max(0,(paymentReq.balance_due||0)-pmtF.amount)===0"
              style="color:var(--ok);font-weight:600"> · Fully settled ✓</span>
          </div>
        </div>

        <!-- Method + Type -->
        <div class="fr2">
          <div class="fg">
            <label class="lbl req">Payment method</label>
            <select v-model="pmtF.method" class="sel">
              <option value="mpesa">M-Pesa</option>
              <option value="tigo_pesa">Tigo Pesa</option>
              <option value="airtel_money">Airtel Money</option>
              <option value="bank_transfer">Bank Transfer</option>
              <option value="card">Card</option>
            </select>
          </div>
          <div class="fg">
            <label class="lbl req">Payment type</label>
            <select v-model="pmtF.type" class="sel">
              <option value="deposit">Deposit (50%)</option>
              <option value="balance">Balance payment</option>
              <option value="full">Full payment</option>
            </select>
          </div>
        </div>

        <!-- Phone (mobile money only) -->
        <div class="fg" v-if="['mpesa','tigo_pesa','airtel_money'].includes(pmtF.method)">
          <label class="lbl req">Mobile number used for payment</label>
          <input type="tel" v-model="pmtF.phone" class="inp" placeholder="+255 7XX XXX XXX">
          <div class="hint">The number you sent the payment from</div>
        </div>

        <!-- Reference -->
        <div class="fg">
          <label class="lbl" :class="['mpesa','tigo_pesa','airtel_money'].includes(pmtF.method)?'req':''">
            Transaction reference
          </label>
          <input type="text" v-model="pmtF.reference" class="inp"
            placeholder="e.g. QC234567YX"
            style="text-transform:uppercase;font-family:var(--fm);letter-spacing:0.04em">
          <div class="hint" v-if="['mpesa','tigo_pesa','airtel_money'].includes(pmtF.method)">
            <i class="fas fa-mobile-alt"></i>
            Find this in the SMS confirmation from {{  pmtF.method==='mpesa'?'M-Pesa':pmtF.method==='tigo_pesa'?'Tigo Pesa':'Airtel Money'  }}
          </div>
        </div>

        <!-- Notes (admin only, or optional for buyer) -->
        <div class="fg">
          <label class="lbl">Additional notes <span style="font-weight:400;color:var(--tx-3)">(optional)</span></label>
          <textarea v-model="pmtF.notes" class="tex" style="min-height:52px"
            placeholder="Any additional details about this payment…"></textarea>
        </div>

      </div>
      <div class="modal-ft">
        <button @click="doPayment(paymentReq)" class="btn btn-p"
          :disabled="!pmtF.amount||pmtF.amount<=0">
          <i class="fas fa-check-circle"></i>
          {{  isAdmin ? 'Confirm Payment' : 'Submit Payment'  }}
        </button>
        <button @click="paymentReq=null" class="btn btn-g">Cancel</button>
      </div>
    </div>
  </div>
</transition>

<!-- QUOTE MODAL (Admin sends quote to buyer) -->
<transition name="modal">
  <div v-if="showQuoteModal" class="modal-bg" @click.self="showQuoteModal=false">
    <div class="modal">
      <div class="modal-hd"><div><div class="modal-ttl">Send Quotation</div><div class="modal-sub">{{  quoteReq?.request_number  }}</div></div><button class="modal-x" @click="showQuoteModal=false"><i class="fas fa-times"></i></button></div>
      <div class="modal-body">
        <div class="info-strip in"><i class="fas fa-info-circle" style="color:var(--info);flex-shrink:0"></i><div style="font-size:var(--txs);color:var(--info);line-height:1.5">Set the exact costs below. When sent, the buyer will be notified to review and accept or decline.</div></div>
        <div class="fr2">
          <div class="fg"><label class="lbl req">Item Cost (TZS)</label><input type="number" v-model.number="qF.item_cost" min="0" class="inp"></div>
          <div class="fg"><label class="lbl req">Shipping Cost (TZS)</label><input type="number" v-model.number="qF.shipping_cost" min="0" class="inp"></div>
        </div>
        <div class="fr2">
          <div class="fg"><label class="lbl">Import Duty (TZS)</label><input type="number" v-model.number="qF.duty_cost" min="0" class="inp" placeholder="0"></div>
          <div class="fg"><label class="lbl req">Service Fee (TZS)</label><input type="number" v-model.number="qF.service_fee" min="0" class="inp"></div>
        </div>
        <div class="fg"><label class="lbl">Expected Delivery Date</label><input type="date" v-model="qF.delivery_date" class="inp"></div>
        <div class="fg"><label class="lbl">Notes to Buyer</label><textarea v-model="qF.notes" class="tex" style="min-height:60px" placeholder="Any important notes about the order…"></textarea></div>
        <div class="cost-box">
          <div class="cost-ttl"><i class="fas fa-calculator"></i>Quote Total</div>
          <div class="cost-row"><span class="c-l">Item Cost</span><span class="c-v">{{  tzs(qF.item_cost||0)  }}</span></div>
          <div class="cost-row"><span class="c-l">Shipping</span><span class="c-v">{{  tzs(qF.shipping_cost||0)  }}</span></div>
          <div class="cost-row"><span class="c-l">Import Duty</span><span class="c-v">{{  tzs(qF.duty_cost||0)  }}</span></div>
          <div class="cost-row"><span class="c-l">Service Fee</span><span class="c-v">{{  tzs(qF.service_fee||0)  }}</span></div>
          <div class="cost-row total"><span class="c-l">Grand Total</span><span class="c-v">{{  tzs((qF.item_cost||0)+(qF.shipping_cost||0)+(qF.duty_cost||0)+(qF.service_fee||0))  }}</span></div>
        </div>
      </div>
      <div class="modal-ft">
        <button @click="sendQuote" class="btn btn-p" :disabled="!qF.item_cost"><i class="fas fa-paper-plane"></i>Send Quote to Buyer</button>
        <button @click="showQuoteModal=false" class="btn btn-g">Cancel</button>
      </div>
    </div>
  </div>
</transition>

<!-- REVIEW MODAL -->
<transition name="modal">
  <div v-if="showReviewModal" class="modal-bg" @click.self="showReviewModal=false">
    <div class="modal modal-sm">
      <div class="modal-hd"><div><div class="modal-ttl">Leave a Review</div><div class="modal-sub">{{  reviewReq?.request_number  }}</div></div><button class="modal-x" @click="showReviewModal=false"><i class="fas fa-times"></i></button></div>
      <div class="modal-body" style="text-align:center">
        <div style="font-size:var(--tsm);color:var(--tx-2);margin-bottom:var(--s3)">How was your experience with this order?</div>
        <div class="stars-row" style="justify-content:center;margin-bottom:var(--s5)">
          <button v-for="s in 5" :key="s" class="star-btn" :class="{on:s<=reviewF.rating}" @click="reviewF.rating=s">★</button>
        </div>
        <div class="fg" style="text-align:left"><label class="lbl">Review Title</label><input type="text" v-model="reviewF.title" class="inp" placeholder="Summarise your experience"></div>
        <div class="fg" style="text-align:left"><label class="lbl">Comments</label><textarea v-model="reviewF.body" class="tex" placeholder="Share details about the product quality, shipping speed, communication…"></textarea></div>
      </div>
      <div class="modal-ft">
        <button @click="saveReview" class="btn btn-p" :disabled="!reviewF.rating"><i class="fas fa-star"></i>Submit Review</button>
        <button @click="showReviewModal=false" class="btn btn-g">Cancel</button>
      </div>
    </div>
  </div>
</transition>

<!-- SHOPPER MODAL -->
<transition name="modal">
  <div v-if="showShopperModal" class="modal-bg" @click.self="showShopperModal=false">
    <div class="modal modal-sm">
      <div class="modal-hd"><div><div class="modal-ttl">{{  editingShopper?'Edit Shopper':'Add Shopper'  }}</div></div><button class="modal-x" @click="showShopperModal=false"><i class="fas fa-times"></i></button></div>
      <div class="modal-body">
        <div class="fr2">
          <div class="fg"><label class="lbl req">Full Name</label><input type="text" v-model="shF.full_name" class="inp"></div>
          <div class="fg"><label class="lbl">Phone</label><input type="tel" v-model="shF.phone" class="inp" placeholder="+255 …"></div>
        </div>
        <div class="fr2">
          <div class="fg"><label class="lbl req">City</label><input type="text" v-model="shF.city" class="inp"></div>
          <div class="fg"><label class="lbl req">Country</label><input type="text" v-model="shF.country" class="inp" placeholder="Tanzania"></div>
        </div>
        <div class="fg"><label class="lbl">Specialization</label><input type="text" v-model="shF.specialization" class="inp" placeholder="e.g. Medical Equipment, Electronics"></div>
        <label class="chk" style="margin-top:var(--s2)"><input type="checkbox" v-model="shF.is_active"><span class="chk-lbl">Active / Available for assignment</span></label>
      </div>
      <div class="modal-ft">
        <button @click="saveShopper" class="btn btn-p" :disabled="!shF.full_name"><i class="fas fa-check"></i>{{  editingShopper?'Update':'Add Shopper'  }}</button>
        <button @click="showShopperModal=false" class="btn btn-g">Cancel</button>
      </div>
    </div>
  </div>
</transition>





<!-- INQUIRY DETAIL MODAL (Seller view) -->
<transition name="modal">
  <div v-if="showInquiryDetail && inquiryReq" class="modal-bg" @click.self="showInquiryDetail=false">
    <div class="modal modal-lg">
      <div class="modal-hd">
        <div><div class="modal-ttl">Inquiry · {{  inquiryReq.request_number  }}</div><div class="modal-sub">{{  fDate(inquiryReq.created_at)  }} · Urgency: <strong>{{  inquiryReq.urgency  }}</strong></div></div>
        <button class="modal-x" @click="showInquiryDetail=false"><i class="fas fa-times"></i></button>
      </div>
      <div class="modal-body">
        <!-- Buyer info -->
        <div class="info-strip ac" style="margin-bottom:var(--s4)">
          <i class="fas fa-user" style="color:var(--a);flex-shrink:0"></i>
          <div style="flex:1">
            <div style="font-size:var(--tsm);font-weight:600;color:var(--tx-1)">{{  adminUsers.find(u=>u.id===inquiryReq.user_id)?.full_name || 'Buyer'  }}</div>
            <div style="font-size:var(--txs);color:var(--tx-3)">{{  adminUsers.find(u=>u.id===inquiryReq.user_id)?.user_type || ''  }} · Verified TechMedixLink buyer</div>
          </div>
          <span class="badge" :class="sBadge(inquiryReq.status)">{{  fStatus(inquiryReq.status)  }}</span>
        </div>
        <!-- Items requested -->
        <div style="font-family:var(--fd);font-size:17px;color:var(--tx-1);margin-bottom:var(--s3)">Items Requested</div>
        <div class="req-items" style="margin-bottom:var(--s4)">
          <div v-for="it in inquiryReq.items" :key="it.id" class="ri-row">
            <span class="ri-name">{{  it.product_name  }}</span>
            <span class="ri-qty">×{{  it.quantity  }}</span>
            <span class="ri-price" style="color:var(--tx-3)">Awaiting quote</span>
          </div>
          <div v-if="!inquiryReq.items?.length" class="ri-row"><span class="ri-name" style="color:var(--tx-3)">No items listed</span></div>
        </div>
        <!-- Notes from buyer -->
        <div v-if="inquiryReq.source_notes" class="fg">
          <div style="font-size:10px;font-weight:700;color:var(--tx-3);letter-spacing:0.08em;text-transform:uppercase;margin-bottom:var(--s2)">Buyer Notes &amp; Requirements</div>
          <div style="font-size:var(--tsm);color:var(--tx-2);line-height:1.65;padding:var(--s3) var(--s4);background:var(--bg-1);border-radius:var(--r2);border:1px solid var(--ln-1)">{{  inquiryReq.source_notes  }}</div>
        </div>
        <!-- Source URL if link request -->
        <div v-if="inquiryReq.source_url" class="fg" style="margin-top:var(--s3)">
          <div style="font-size:10px;font-weight:700;color:var(--tx-3);letter-spacing:0.08em;text-transform:uppercase;margin-bottom:var(--s2)">Product Link</div>
          <a :href="inquiryReq.source_url" target="_blank" style="color:var(--philips);font-size:var(--tsm);word-break:break-all">{{  inquiryReq.source_url  }}</a>
        </div>
      </div>
      <div class="modal-ft">
        <button v-if="['pending','submitted'].includes(inquiryReq.status)" @click="acknowledgeInquiry(inquiryReq)" class="btn btn-p"><i class="fas fa-file-invoice-dollar"></i>Send Quote to Buyer</button>
        <button v-if="['pending','submitted'].includes(inquiryReq.status)" @click="declineInquiry(inquiryReq)" class="btn btn-d"><i class="fas fa-times-circle"></i>Decline Inquiry</button>
        <button @click="showInquiryDetail=false" class="btn btn-g">Close</button>
      </div>
    </div>
  </div>
</transition>

<!-- CANCEL REQUEST MODAL -->
<transition name="modal">
  <div v-if="showCancelModal" class="modal-bg" @click.self="showCancelModal=false">
    <div class="modal modal-sm">
      <div class="modal-hd"><div><div class="modal-ttl">Cancel Request</div><div class="modal-sub">{{  cancelReq?.request_number  }}</div></div><button class="modal-x" @click="showCancelModal=false"><i class="fas fa-times"></i></button></div>
      <div class="modal-body">
        <div class="info-strip wn" style="margin-bottom:var(--s4)"><i class="fas fa-triangle-exclamation" style="color:var(--warn);flex-shrink:0"></i><div style="font-size:var(--txs);color:var(--warn);line-height:1.5">This action cannot be undone. Cancellation is only available before sourcing begins. Any deposit paid may not be refundable.</div></div>
        <div class="fg"><label class="lbl req">Reason for cancellation</label>
          <select v-model="cancelReason" class="sel">
            <option value="">— Select a reason —</option>
            <option value="Found alternative supplier">Found alternative supplier</option>
            <option value="Budget constraints">Budget constraints</option>
            <option value="Product no longer needed">Product no longer needed</option>
            <option value="Incorrect product ordered">Incorrect product ordered</option>
            <option value="Delivery timeline too long">Delivery timeline too long</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div class="fg"><label class="lbl">Additional details</label><textarea v-model="cancelReason" class="tex" style="min-height:60px" placeholder="Please provide more details about why you are cancelling…"></textarea></div>
      </div>
      <div class="modal-ft">
        <button @click="doCancel" class="btn btn-d" :disabled="!cancelReason"><i class="fas fa-times-circle"></i>Confirm Cancellation</button>
        <button @click="showCancelModal=false" class="btn btn-g">Keep Request</button>
      </div>
    </div>
  </div>
</transition>

<!-- VERIFICATION MODAL -->
<transition name="modal">
  <div v-if="showVerifyModal" class="modal-bg" @click.self="showVerifyModal=false">
    <div class="modal modal-sm">
      <div class="modal-hd"><div><div class="modal-ttl">Request Seller Verification</div><div class="modal-sub">Submit your business documents for review</div></div><button class="modal-x" @click="showVerifyModal=false"><i class="fas fa-times"></i></button></div>
      <div class="modal-body">
        <div class="info-strip in" style="margin-bottom:var(--s4)"><i class="fas fa-shield-halved" style="color:var(--info);flex-shrink:0"></i><div style="font-size:var(--txs);color:var(--info);line-height:1.5">Admin will review your documents within 2 business days. Verified sellers receive a trust badge on all listings.</div></div>
        <div class="fg"><label class="lbl">Business Registration Number</label><input type="text" v-model="verifyDocs.business_reg" class="inp" placeholder="e.g. 123456789"></div>
        <div class="fg"><label class="lbl">TIN / Tax Certificate Number</label><input type="text" v-model="verifyDocs.tax_cert" class="inp" placeholder="e.g. TIN-123456"></div>
        <div class="fg"><label class="lbl">TMDA License Number (if applicable)</label><input type="text" v-model="verifyDocs.tmda_license" class="inp" placeholder="Optional for medical device sellers"></div>
        <div class="fg"><label class="lbl">Additional Notes</label><textarea v-model="verifyDocs.notes" class="tex" style="min-height:60px" placeholder="Any other relevant information about your business…"></textarea></div>
        <div class="hint">Documents will be reviewed manually. You will be notified via the platform once verified.</div>
      </div>
      <div class="modal-ft">
        <button @click="requestVerification" class="btn btn-p"><i class="fas fa-paper-plane"></i>Submit for Review</button>
        <button @click="showVerifyModal=false" class="btn btn-g">Cancel</button>
      </div>
    </div>
  </div>
</transition>

<!-- T&C MODAL -->
<transition name="modal">
  <div v-if="showTcModal" class="modal-bg" @click.self="showTcModal=false">
    <div class="modal modal-lg">
      <div class="modal-hd"><div><div class="modal-ttl">Terms of Service &amp; Privacy Policy</div><div class="modal-sub">TechMedixLink · Tanzania Medical Equipment Platform</div></div><button class="modal-x" @click="showTcModal=false"><i class="fas fa-times"></i></button></div>
      <div class="modal-body">
        <div style="font-family:var(--fd);font-size:18px;color:var(--tx-1);margin-bottom:var(--s3)">Terms of Service</div>
        <div style="font-size:var(--tsm);color:var(--tx-2);line-height:1.8;margin-bottom:var(--s5)">
          <p style="margin-bottom:var(--s3)"><strong>1. Platform Use.</strong> TechMedixLink is a medical equipment sourcing and procurement platform operating in Tanzania. By creating an account, you agree to use the platform only for lawful purposes related to medical equipment procurement, sales, or logistics.</p>
          <p style="margin-bottom:var(--s3)"><strong>2. Seller Obligations.</strong> Sellers must ensure all listed products comply with Tanzania's Medical Devices and In Vitro Diagnostic Devices Act. Products requiring TMDA certification must be certified before listing. TechMedixLink reserves the right to remove non-compliant listings.</p>
          <p style="margin-bottom:var(--s3)"><strong>3. Buyer Obligations.</strong> Buyers are responsible for verifying that purchased equipment is appropriate for their facility's needs. Cost estimates provided at request time are indicative only; final costs are confirmed in the formal quotation.</p>
          <p style="margin-bottom:var(--s3)"><strong>4. Payments.</strong> All payments are processed in Tanzanian Shillings (TZS). Deposits are non-refundable once sourcing has commenced. Disputes must be raised within 7 days of delivery.</p>
          <p style="margin-bottom:var(--s3)"><strong>5. Cancellations.</strong> Requests may be cancelled before a quote is accepted. Once sourcing begins, cancellation fees may apply.</p>
          <p><strong>6. Liability.</strong> TechMedixLink acts as a procurement facilitator and is not the seller of record. We are not liable for manufacturer defects, regulatory non-compliance by sellers, or delays caused by customs authorities.</p>
        </div>
        <div style="font-family:var(--fd);font-size:18px;color:var(--tx-1);margin-bottom:var(--s3)">Privacy Policy</div>
        <div style="font-size:var(--tsm);color:var(--tx-2);line-height:1.8">
          <p style="margin-bottom:var(--s3)"><strong>Data We Collect.</strong> We collect your name, email, phone number, organisation details, and transaction history necessary to operate the platform. We do not sell your personal data to third parties.</p>
          <p style="margin-bottom:var(--s3)"><strong>Data Use.</strong> Your data is used to process orders, send status notifications, verify seller credentials, and improve platform services.</p>
          <p style="margin-bottom:var(--s3)"><strong>Data Storage.</strong> Data is stored securely on Supabase infrastructure hosted in the European Union. We comply with Tanzania's Electronic and Postal Communications Act requirements.</p>
          <p><strong>Your Rights.</strong> You may request deletion of your account and associated data by contacting <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="f0838580809f8284b0849593989d959499889c999e9bde939fde848a">[email&#160;protected]</a>. Certain transaction records may be retained for legal compliance purposes.</p>
        </div>
      </div>
      <div class="modal-ft">
        <button @click="tcAccepted=true;showTcModal=false" class="btn btn-p"><i class="fas fa-check"></i>I Accept</button>
        <button @click="showTcModal=false" class="btn btn-g">Close</button>
      </div>
    </div>
  </div>
</transition>


<!-- PRODUCT DETAIL MODAL -->
<transition name="modal">
  <div v-if="showProductDetail && viewedProduct" class="modal-bg" @click.self="showProductDetail=false">
    <div class="modal modal-xl pd-modal">

      <!-- Hero image strip -->
      <div class="pd-hero">

        <!-- ── PHOTO MODE ── -->
        <template v-if="!pd3dMode">
          <img v-if="viewedProduct.image_url" :src="viewedProduct.image_url" :alt="viewedProduct.name" class="pd-hero-img">
          <div v-else class="pd-hero-ph">
            <i :class="viewedProduct.product_type==='medical_device'?'fas fa-stethoscope':viewedProduct.product_type==='electronics'?'fas fa-microchip':'fas fa-boxes-stacked'" style="font-size:48px;color:rgba(255,255,255,0.3)"></i>
          </div>
          <!-- Product name overlay at bottom of hero -->
          <div class="pd-hero-name">
            <div class="pd-hero-name-text">{{  viewedProduct.name  }}</div>
          </div>
        </template>

        <!-- ── 3D MODEL MODE ── -->
        <template v-if="pd3dMode && viewedProduct.model_url">
          <model-viewer
            :src="viewedProduct.model_url"
            alt="3D model of the product"
            auto-rotate
            camera-controls
            shadow-intensity="1"
            exposure="0.8"
            environment-image="neutral"
            style="width:100%;height:100%;background:transparent"
            ar
            ar-modes="webxr scene-viewer quick-look">
            <!-- AR prompt for mobile -->
            <button slot="ar-button" class="pd-ar-btn">
              <i class="fas fa-cube"></i> View in AR
            </button>
            <!-- Loading indicator -->
            <div slot="progress-bar" class="pd-3d-progress">
              <div class="pd-3d-progress-fill"></div>
            </div>
          </model-viewer>
        </template>

        <!-- 3D unavailable placeholder -->
        <template v-if="pd3dMode && !viewedProduct.model_url">
          <div class="pd-hero-ph" style="flex-direction:column;gap:var(--s3)">
            <i class="fas fa-cube" style="font-size:40px;color:rgba(255,255,255,0.2)"></i>
            <div style="font-size:var(--tsm);color:rgba(255,255,255,0.35);text-align:center;max-width:240px;line-height:1.5">
              No 3D model available for this product yet.<br>
              <span style="font-size:var(--txs);color:rgba(255,255,255,0.2)">Sellers can upload .glb files in their listing.</span>
            </div>
          </div>
        </template>

        <!-- ── VIEW TOGGLE TAB BAR ── -->
        <div class="pd-view-tabs">
          <button class="pd-view-tab" :class="{active:!pd3dMode}" @click="pd3dMode=false">
            <i class="fas fa-image"></i> Photo
          </button>
          <button class="pd-view-tab" :class="{active:pd3dMode}" @click="pd3dMode=true">
            <i class="fas fa-cube"></i> 3D View
            <span v-if="viewedProduct.model_url" class="pd-3d-dot"></span>
            <span v-if="!viewedProduct.model_url" style="font-size:8px;opacity:0.5;margin-left:2px">soon</span>
          </button>
        </div>

        <!-- Floating badges — only in photo mode to avoid covering 3D canvas -->
        <div v-if="!pd3dMode" class="pd-hero-badges">
          <span v-if="viewedProduct.tmda_certified" class="badge b-ok pd-hbadge"><i class="fas fa-certificate" style="font-size:9px"></i>TMDA Certified</span>
          <span v-if="viewedProduct.platform_type==='globaldoor'" class="badge pd-hbadge b-gd">GlobalDoor</span>
          <span class="pd-hbadge badge"
            :style="viewedProduct.stock_quantity>10?'background:rgba(26,122,74,0.75)!important':viewedProduct.stock_quantity>0?'background:rgba(196,122,0,0.75)!important':'background:rgba(192,57,43,0.75)!important'"
            style="border:1px solid rgba(255,255,255,0.2)!important;color:white!important">
            <i :class="viewedProduct.stock_quantity>0?'fas fa-check':'fas fa-times'" style="font-size:8px"></i>
            {{  stockLabel(viewedProduct.stock_quantity)  }}
          </span>
        </div>

        <button class="pd-close" @click="showProductDetail=false"><i class="fas fa-times"></i></button>
      </div>

      <!-- Content split: left info, right action panel -->
      <div class="pd-body">

        <!-- LEFT: product info -->
        <div class="pd-info">
          <!-- Seller (name now shown in hero) -->
          <div class="pd-seller">
            <div class="pd-seller-av" style="overflow:hidden">
              <img v-if="adminUsers.find(u=>u.id===viewedProduct.user_id)?.avatar_url"
                :src="adminUsers.find(u=>u.id===viewedProduct.user_id).avatar_url"
                style="width:100%;height:100%;object-fit:cover;border-radius:50%">
              <span v-else>{{  viewedProduct.seller_name?.charAt(0)||'T'  }}</span>
            </div>
            <div>
              <div style="font-size:var(--tsm);font-weight:600;color:var(--tx-1)">{{  viewedProduct.seller_name||'TechMedixLink'  }}</div>
              <div style="font-size:var(--txs);color:var(--tx-3)"><i class="fas fa-location-dot" style="font-size:8px"></i> {{  viewedProduct.country||'Tanzania'  }}</div>
            </div>
            <span v-if="adminUsers.find(u=>u.id===viewedProduct.user_id)?.company_name?.startsWith('[VERIFIED]')" class="badge b-ok" style="margin-left:auto;font-size:9px"><i class="fas fa-check-circle"></i>Verified</span>
          </div>

          <!-- Stars -->
          <div style="display:flex;align-items:center;gap:var(--s2);margin-bottom:var(--s4)">
            <div style="display:flex;gap:2px">
              <i v-for="s in 5" :key="s" class="rv-star fas fa-star" :class="{on:s<=(viewedProduct.avg_rating||0)}" style="font-size:13px"></i>
            </div>
            <span style="font-size:var(--tsm);color:var(--tx-2);font-weight:600">{{  viewedProduct.avg_rating ? viewedProduct.avg_rating.toFixed(1) : 'No ratings'  }}</span>
            <span style="font-size:var(--txs);color:var(--tx-3)">({{  pdReviews.length  }} review{{  pdReviews.length!==1?'s':''  }})</span>
          </div>

          <!-- Description -->
          <div class="pd-section-ttl">About this product</div>
          <div class="pd-desc">{{  viewedProduct.description||'High quality medical equipment. Contact us for full specifications and compliance documentation.'  }}</div>

          <!-- Specs grid -->
          <div class="pd-section-ttl">Specifications</div>
          <div class="pd-specs">
            <div class="pd-spec" v-if="viewedProduct.manufacturer"><div class="pd-spec-l">Manufacturer</div><div class="pd-spec-v">{{  viewedProduct.manufacturer  }}</div></div>
            <div class="pd-spec" v-if="viewedProduct.model_number"><div class="pd-spec-l">Model</div><div class="pd-spec-v">{{  viewedProduct.model_number  }}</div></div>
            <div class="pd-spec" v-if="viewedProduct.warranty_months"><div class="pd-spec-l">Warranty</div><div class="pd-spec-v">{{  viewedProduct.warranty_months  }} months</div></div>
            <div class="pd-spec" v-if="viewedProduct.estimated_weight_kg"><div class="pd-spec-l">Weight</div><div class="pd-spec-v">{{  viewedProduct.estimated_weight_kg  }} kg</div></div>
            <div class="pd-spec"><div class="pd-spec-l">Product type</div><div class="pd-spec-v" style="text-transform:capitalize">{{  viewedProduct.product_type?.replace(/_/g,' ')||'--'  }}</div></div>
            <div class="pd-spec"><div class="pd-spec-l">Location</div><div class="pd-spec-v">{{  viewedProduct.country||'Tanzania'  }}</div></div>
            <div class="pd-spec" v-if="viewedProduct.import_duty_percent"><div class="pd-spec-l">Import duty (est.)</div><div class="pd-spec-v">{{  viewedProduct.import_duty_percent  }}%</div></div>
          </div>

          <!-- Service flags -->
          <div style="display:flex;gap:var(--s2);flex-wrap:wrap;margin-top:var(--s4)">
            <div v-if="viewedProduct.requires_installation" class="pd-flag"><i class="fas fa-screwdriver-wrench"></i>Requires installation</div>
            <div v-if="viewedProduct.requires_training" class="pd-flag"><i class="fas fa-chalkboard-user"></i>Training provided</div>
            <div v-if="viewedProduct.tmda_certified" class="pd-flag pd-flag-ok"><i class="fas fa-certificate"></i>TMDA certified</div>
            <div v-if="viewedProduct.is_available_locally" class="pd-flag pd-flag-ok"><i class="fas fa-shop"></i>Available locally</div>
          </div>

          <!-- Reviews section -->
          <div class="pd-section-ttl" style="margin-top:var(--s5)">Customer reviews</div>
          <div v-if="pdLoading" style="display:flex;align-items:center;gap:var(--s2);padding:var(--s4);color:var(--tx-3);font-size:var(--tsm)">
            <div class="spinner" style="width:16px;height:16px;border-width:1.5px;margin:0"></div>Loading reviews…
          </div>
          <div v-else-if="!pdReviews.length" style="padding:var(--s4);background:var(--bg-1);border-radius:var(--r2);text-align:center;color:var(--tx-3);font-size:var(--tsm)">
            No reviews yet. Be the first to review after your order!
          </div>
          <div v-else style="display:flex;flex-direction:column;gap:var(--s3)">
            <div v-for="rv in pdReviews" :key="rv.id" class="pd-review">
              <div style="display:flex;align-items:center;gap:var(--s2);margin-bottom:var(--s2)">
                <div class="pd-rv-av" style="overflow:hidden">
                  <img v-if="rv.user?.avatar_url" :src="rv.user.avatar_url" style="width:100%;height:100%;object-fit:cover;border-radius:50%">
                  <span v-else>{{  rv.user?.full_name?.charAt(0)||'?'  }}</span>
                </div>
                <div style="flex:1">
                  <div style="font-size:var(--tsm);font-weight:600;color:var(--tx-1)">{{  rv.user?.full_name||'Customer'  }}</div>
                  <div style="font-size:9px;color:var(--tx-4);font-family:var(--fm)">{{  fDate(rv.created_at)  }}</div>
                </div>
                <div style="display:flex;gap:1px">
                  <i v-for="s in 5" :key="s" class="rv-star fas fa-star" :class="{on:s<=rv.rating}"></i>
                </div>
              </div>
              <div style="font-size:var(--tsm);color:var(--tx-2);line-height:1.65">{{  rv.review_text  }}</div>
              <div v-if="rv.is_verified_purchase" style="margin-top:var(--s1)"><span class="badge b-ok" style="font-size:8px"><i class="fas fa-check" style="font-size:7px"></i>Verified purchase</span></div>
            </div>
          </div>
        </div>

        <!-- RIGHT: action panel (sticky) -->
        <div class="pd-panel">
          <!-- Price block -->
          <div class="pd-price-block">
            <div class="pd-price-usd">${{  fNum(viewedProduct.base_price_usd)  }} <span style="font-size:13px;font-weight:400;color:var(--tx-3)">USD</span></div>
            <div class="pd-price-tzs">≈ {{  tzs(Math.round(viewedProduct.base_price_usd * usdToTzs))  }}</div>
            <div v-if="viewedProduct.base_price_eur" style="font-size:var(--txs);color:var(--tx-3);margin-top:2px">€{{  fNum(viewedProduct.base_price_eur)  }} EUR</div>
          </div>

          <!-- Stock status only in panel — platform already shown in hero -->
          <div style="margin-bottom:var(--s3)">
            <span :class="['pc-stock',stockClass(viewedProduct.stock_quantity)]" style="font-size:var(--tsm);font-weight:600">{{  stockLabel(viewedProduct.stock_quantity)  }}</span>
          </div>

          <!-- CTA buttons -->
          <button v-if="canBuy" @click="quickRequest(viewedProduct);showProductDetail=false" class="btn btn-p" style="width:100%;margin-bottom:var(--s2)" :disabled="!viewedProduct.is_active||!(viewedProduct.stock_quantity>0)">
            <i class="fas fa-cart-plus"></i>Request This Product
          </button>
          <button v-if="!profile" @click="showAuth=true;showProductDetail=false" class="btn btn-p" style="width:100%;margin-bottom:var(--s2)">
            <i class="fas fa-sign-in-alt"></i>Sign in to Request
          </button>
          <button v-if="canSell&&viewedProduct.user_id===profile?.id" @click="openListingModal(viewedProduct);showProductDetail=false" class="btn btn-s" style="width:100%;margin-bottom:var(--s2)">
            <i class="fas fa-pen"></i>Edit My Listing
          </button>

          <!-- Delivery info box -->
          <div class="pd-info-box">
            <div class="pd-info-row"><i class="fas fa-truck"></i><span>Delivery to all Tanzania regions</span></div>
            <div class="pd-info-row" v-if="viewedProduct.platform_type==='globaldoor'"><i class="fas fa-globe"></i><span>International sourcing via GlobalDoor</span></div>
            <div class="pd-info-row" v-if="viewedProduct.requires_installation"><i class="fas fa-screwdriver-wrench"></i><span>Professional installation included</span></div>
            <div class="pd-info-row" v-if="viewedProduct.requires_training"><i class="fas fa-chalkboard-user"></i><span>Operator training provided</span></div>
            <div class="pd-info-row" v-if="viewedProduct.warranty_months"><i class="fas fa-shield-halved"></i><span>{{  viewedProduct.warranty_months  }}-month warranty</span></div>
          </div>

          <!-- Share / track -->
          <div style="display:flex;gap:var(--s2);margin-top:var(--s3)">
            <button @click="showProductDetail=false;goTab('browse')" class="btn btn-g btn-sm" style="flex:1"><i class="fas fa-arrow-left"></i>Back</button>
            <button v-if="canBuy" @click="showReqModal=true;rF.source_type='manual';rF.custom_name=viewedProduct.name;showProductDetail=false" class="btn btn-s btn-sm" style="flex:1" title="Custom request for this product"><i class="fas fa-pen"></i>Custom</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</transition>


<!-- ADMIN USER VIEW MODAL -->
<transition name="modal">
  <div v-if="showAdminUserModal && adminViewUser" class="modal-bg" @click.self="showAdminUserModal=false">
    <div class="modal">
      <div class="modal-hd">
        <div style="display:flex;align-items:center;gap:var(--s3)">
          <div style="width:44px;height:44px;border-radius:50%;background:var(--philips-l);display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;color:var(--philips);overflow:hidden;flex-shrink:0">
            <img v-if="adminViewUser.avatar_url" :src="adminViewUser.avatar_url" style="width:100%;height:100%;object-fit:cover">
            <span v-else>{{  adminViewUser.full_name?.charAt(0)||'?'  }}</span>
          </div>
          <div>
            <div class="modal-ttl">{{  adminViewUser.full_name || 'Unknown User'  }}</div>
            <div class="modal-sub">{{  adminViewUser.email  }}</div>
          </div>
        </div>
        <button class="modal-x" @click="showAdminUserModal=false"><i class="fas fa-times"></i></button>
      </div>
      <div class="modal-body">
        <!-- User stats strip -->
        <div style="display:flex;gap:var(--s3);margin-bottom:var(--s4);flex-wrap:wrap">
          <div class="card-sm" style="flex:1"><div style="font-size:var(--txs);color:var(--tx-3)">Role</div><div style="font-size:var(--tsm);font-weight:600;color:var(--tx-1);margin-top:2px"><span class="badge b-ac">{{  adminViewUser.user_role  }}</span></div></div>
          <div class="card-sm" style="flex:1"><div style="font-size:var(--txs);color:var(--tx-3)">Type</div><div style="font-size:var(--tsm);font-weight:600;color:var(--tx-1);margin-top:2px;text-transform:capitalize">{{  adminViewUser.user_type||'--'  }}</div></div>
          <div class="card-sm" style="flex:1"><div style="font-size:var(--txs);color:var(--tx-3)">Joined</div><div style="font-size:var(--tsm);font-weight:600;color:var(--tx-1);margin-top:2px">{{  fDate(adminViewUser.created_at)  }}</div></div>
          <div class="card-sm" style="flex:1"><div style="font-size:var(--txs);color:var(--tx-3)">Verified</div><div style="margin-top:2px"><span class="badge" :class="userVerifyStatus(adminViewUser)==='verified'?'b-ok':userVerifyStatus(adminViewUser)==='pending'?'b-wn':'b-mu'">{{  userVerifyStatus(adminViewUser)==='verified'?'Verified':userVerifyStatus(adminViewUser)==='pending'?'Pending':'Not requested'  }}</span></div></div>
        </div>
        <!-- Phone -->
        <div v-if="adminViewUser.phone" class="info-strip ac" style="margin-bottom:var(--s3)">
          <i class="fas fa-phone" style="color:var(--a);flex-shrink:0"></i>
          <span style="font-size:var(--tsm);color:var(--tx-1)">{{  adminViewUser.phone  }}</span>
          <a :href="'https://wa.me/'+adminViewUser.phone.replace(/[^0-9]/g,'')" target="_blank" class="btn btn-ok btn-sm btn-xs" style="margin-left:auto;text-decoration:none"><i class="fab fa-whatsapp"></i>WhatsApp</a>
        </div>
        <!-- Requests for this user -->
        <div class="pd-section-ttl">Request history</div>
        <div class="tbl-w" style="max-height:200px;overflow-y:auto">
          <table class="tbl" style="min-width:0">
            <thead><tr><th>Request #</th><th>Status</th><th>Total</th><th>Date</th></tr></thead>
            <tbody>
              <tr v-for="r in allRequests.filter(r=>r.user_id===adminViewUser.id).slice(0,10)" :key="r.id">
                <td><span class="mono" style="font-size:10px">{{  r.request_number  }}</span></td>
                <td><span class="badge" :class="sBadge(r.status)" style="font-size:8px">{{  fStatus(r.status)  }}</span></td>
                <td style="font-size:10px;font-family:var(--fm)">{{  tzs(r.total_cost)  }}</td>
                <td style="font-size:var(--txs)">{{  fDate(r.created_at)  }}</td>
              </tr>
              <tr v-if="!allRequests.filter(r=>r.user_id===adminViewUser.id).length">
                <td colspan="4" style="text-align:center;color:var(--tx-3);padding:var(--s3)">No requests yet</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- Edit form (shown when editing) -->
        <template v-if="adminEditingUser">
          <div class="hr" style="margin:var(--s3) 0"></div>
          <div class="fr2">
            <div class="fg"><label class="lbl req">Full Name</label><input type="text" v-model="adminUF.full_name" class="inp"></div>
            <div class="fg"><label class="lbl">Phone</label><input type="tel" v-model="adminUF.phone" class="inp" placeholder="+255…"></div>
          </div>
          <div class="fr2">
            <div class="fg"><label class="lbl">Role</label><select v-model="adminUF.user_role" class="sel"><option value="buyer">Buyer</option><option value="seller">Seller</option><option value="both">Both</option><option value="admin">Admin</option></select></div>
            <div class="fg"><label class="lbl">Type</label><select v-model="adminUF.user_type" class="sel"><option value="individual">Individual</option><option value="hospital">Hospital</option><option value="clinic">Clinic</option><option value="lab">Lab</option><option value="business">Business</option><option value="ngo">NGO</option></select></div>
          </div>
        </template>
      </div>
      <div class="modal-ft">
        <button v-if="!adminEditingUser" @click="adminEditingUser=true" class="btn btn-s btn-sm"><i class="fas fa-pen"></i>Edit User</button>
        <button v-if="adminEditingUser" @click="adminSaveUser" class="btn btn-p btn-sm"><i class="fas fa-check"></i>Save Changes</button>
        <button @click="toggleVerified(adminViewUser)" class="btn btn-s btn-sm">
          <i :class="userVerifyStatus(adminViewUser)==='verified'?'fas fa-times':'fas fa-check-circle'"></i>
          {{  userVerifyStatus(adminViewUser)==='verified'?'Revoke Verification':'Approve Verification'  }}
        </button>
        <button @click="showAdminUserModal=false" class="btn btn-g">Close</button>
      </div>
    </div>
  </div>
</transition>


<!-- BASKET MODAL -->
<transition name="modal">
  <div v-if="showBasket" class="modal-bg" @click.self="showBasket=false">
    <div class="modal modal-lg">
      <div class="modal-hd">
        <div><div class="modal-ttl"><i class="fas fa-basket-shopping" style="color:var(--siemens)"></i> Procurement Basket</div>
          <div class="modal-sub">{{  basketCount  }} item{{  basketCount!==1?'s':''  }} · {{  tzs(Math.round(basketTotal))  }}</div>
        </div>
        <button class="modal-x" @click="showBasket=false"><i class="fas fa-times"></i></button>
      </div>
      <div class="modal-body">
        <div v-if="!basket.length" style="text-align:center;padding:var(--s6);color:var(--tx-3)">
          <i class="fas fa-basket-shopping" style="font-size:32px;margin-bottom:var(--s3);display:block;opacity:0.3"></i>
          Basket is empty. Browse products and add items.
        </div>
        <div v-for="item in basket" :key="item.product.id" class="basket-row">
          <div class="basket-img">
            <img v-if="item.product.image_url" :src="item.product.image_url" :alt="item.product.name">
            <i v-else class="fas fa-box" style="color:var(--tx-4)"></i>
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-size:var(--tsm);font-weight:600;color:var(--tx-1);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">{{  item.product.name  }}</div>
            <div style="font-size:var(--txs);color:var(--tx-3)">${{  fNum(item.product.base_price_usd)  }} / unit</div>
            <div class="basket-qty-row">
              <button @click="item.quantity=Math.max(1,item.quantity-1)" class="btn btn-g btn-xs btn-sq"><i class="fas fa-minus" style="font-size:8px"></i></button>
              <span style="font-family:var(--fm);font-size:var(--tsm);min-width:24px;text-align:center">{{  item.quantity  }}</span>
              <button @click="item.quantity++" class="btn btn-g btn-xs btn-sq"><i class="fas fa-plus" style="font-size:8px"></i></button>
              <span style="font-size:var(--txs);color:var(--tx-3);margin-left:6px">= {{  tzs(Math.round(item.product.base_price_usd*item.quantity*usdToTzs))  }}</span>
            </div>
          </div>
          <button @click="removeFromBasket(item.product.id)" class="btn btn-d btn-xs btn-sq" style="flex-shrink:0"><i class="fas fa-trash" style="font-size:9px"></i></button>
        </div>
        <!-- Totals -->
        <div v-if="basket.length" class="pmt-summary" style="margin-top:var(--s4)">
          <div class="pmt-summary-row"><span>{{  basketCount  }} items</span><span class="mono">{{  tzs(Math.round(basketTotal))  }}</span></div>
          <div class="pmt-summary-row"><span>Platform service fee (est.)</span><span class="mono">{{  tzs(Math.round(basketTotal*0.10))  }}</span></div>
          <div class="pmt-summary-due">
            <span>Estimated total</span>
            <span class="mono">{{  tzs(Math.round(basketTotal*1.10))  }}</span>
          </div>
        </div>
        <div v-if="basket.length" class="info-strip in" style="margin-top:var(--s3)">
          <i class="fas fa-info-circle" style="color:var(--info);flex-shrink:0"></i>
          <div style="font-size:var(--txs);color:var(--info);line-height:1.5">Final pricing and delivery costs will be confirmed in your quote within 24 hours.</div>
        </div>
      </div>
      <div class="modal-ft" v-if="basket.length">
        <button @click="submitBasket" class="btn btn-p"><i class="fas fa-paper-plane"></i>Submit Procurement Request</button>
        <button @click="clearBasket();showBasket=false" class="btn btn-d"><i class="fas fa-trash"></i>Clear Basket</button>
        <button @click="showBasket=false" class="btn btn-g">Continue shopping</button>
      </div>
    </div>
  </div>
</transition>

</div><!-- /app -->


<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.39.0/dist/umd/supabase.min.js"></script>
<script src="https://unpkg.com/vue@3.4.21/dist/vue.global.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
<script>
// ─────────────────────────────────────────────────────────────────
// TechMedixLink · config.js
// ─────────────────────────────────────────────────────────────────
// IMPORTANT: Add this file to .gitignore before pushing to GitHub
//   echo "config.js" >> .gitignore
//
// For production, set these via environment variables or a
// deployment secrets manager (Netlify env vars, Vercel env vars).
// ─────────────────────────────────────────────────────────────────

const TECHMEDIX_CONFIG = {
  supabase: {
    url: 'https://nvmwblzoyewgvawdmkyo.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52bXdibHpveWV3Z3Zhd2Rta3lvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE4ODQ2NzAsImV4cCI6MjA4NzQ2MDY3MH0.5AcVEcOYqy7784DRr_UGSKsVCpyh2Zvx7zjjLOLur_k',
  },
  app: {
    logoUrl: null,  // Set to Supabase public URL of your logo image e.g. 'https://xxx.supabase.co/storage/v1/object/public/assets/logo.png'
    name: 'TechMedixLink',
    tagline: 'Medical Equipment Platform · Tanzania',
    version: '10.0.0',
    supportEmail: 'support@techmedixlink.co.tz',
    defaultCurrency: 'TZS',
    fallbackRate: 2500,         // USD→TZS fallback if live rate unavailable
    serviceFeePercent: 0.10,    // 10% platform service fee
    shippingPercent: 0.08,      // 8% estimated shipping
    maxUploadMB: 5,             // max image upload size
  }
};

</script>
<script>
// ─────────────────────────────────────────────────────────────────
// TechMedixLink · app.js  (requires config.js loaded first)
// ─────────────────────────────────────────────────────────────────
// SECTIONS:
//   1.  Supabase client init
//   2.  State -- core, data, exchange rate, modals, auth, filters
//   3.  Computed -- roles, UI labels, request aggregates, filters
//   4.  Status config -- statusList, stepperStages, helpers
//   5.  Data loaders -- loadAll, loadProds, loadReqs, loadPayments…
//   6.  Analytics -- loadAnalytics, renderCharts
//   7.  Auth -- doLogin, doMagicLink, doPasswordReset, doSignup…
//   8.  Profile & addresses
//   9.  Products / listings -- saveListing, uploadImage, delete…
//  10.  Requests -- saveReq, updateStatus, cancel, track…
//  11.  Payments -- doPayment, validateMpesaRef
//  12.  Quotes -- sendQuote, acceptQuote, declineQuote
//  13.  Reviews -- saveReview, loadProductReviews
//  14.  Shoppers -- saveShopper, assignShopper
//  15.  Admin -- adminEditUser, toggleVerified, adminToggleUserRole
//  16.  Notifications -- createNotification, clickNotification
//  17.  Security -- sanitize, verifyAdminServer, checkAuthRateLimit
//  18.  Formatters -- fNum, tzs, fDate, fDateTime, fEvent…
//  19.  Keyboard, watchers, onMounted
//  20.  Return -- all exported refs/functions for Vue template
// ─────────────────────────────────────────────────────────────────

(function() {

// ── 1. SUPABASE CLIENT ──────────────────────────────────────────
  const sb = supabase.createClient(
    TECHMEDIX_CONFIG.supabase.url,
    TECHMEDIX_CONFIG.supabase.anonKey
  );

// ── 2. STATE ────────────────────────────────────────────────────
  const { createApp, ref, reactive, computed, onMounted, nextTick, watch } = Vue;

  const app = createApp({
    setup() {
      // ── Core state ──
      const loading        = ref(false);
      const authLanding    = ref(false);   // full-screen landing while exchanging token
      const authLandingMsg = ref('Signing you in securely…');
      const showPasswordUpdate = ref(false); // password update form after recovery
      const newPassword    = ref('');
      const newPasswordErr = ref('');
      const loadMsg    = ref('Loading…');
      const platform   = ref('techmedix');
      const tab        = ref('home');
      const sidebarOpen = ref(false);
      const globalSearch = ref('');

      // ── Data ──
      const products      = ref([]);
      const allRequests   = ref([]);
      const payments      = ref([]);
      const profile       = ref(null);
      const notifications = ref([]);
      const adminUsers    = ref([]);
      const shoppers      = ref([]);
      const addresses     = ref([]);
      const analyticsData = ref({});
      const sellerAnalytics = ref({});
      const sellerAnalyticsLoading = ref(false);


      // ── Procurement basket ──
      const basket     = ref([]);
      const showBasket = ref(false);

      function addToBasket(p, qty=1) {
        if (!profile.value) { showAuth.value=true; return; }
        const ex = basket.value.find(i=>i.product.id===p.id);
        if (ex) { ex.quantity+=qty; toast('ok','Updated',p.name+' qty updated'); }
        else { basket.value.push({product:p,quantity:qty,notes:''}); toast('ok','Added to basket',p.name); }
      }
      function removeFromBasket(pid) { basket.value=basket.value.filter(i=>i.product.id!==pid); }
      function clearBasket() { basket.value=[]; }
      const basketTotal = computed(()=>basket.value.reduce((s,i)=>s+(i.product.base_price_usd*i.quantity*(usdToTzs.value||2650)),0));
      const basketCount = computed(()=>basket.value.reduce((s,i)=>s+i.quantity,0));

      async function submitBasket() {
        if (!basket.value.length||!profile.value) return;
        loading.value=true; loadMsg.value='Submitting procurement request…';
        const numId=Math.random().toString(36).slice(2,8).toUpperCase();
        const prefix=platform.value==='techmedix'?'TML':'GDR';
        const request_number=`${prefix}-${new Date().getFullYear()}-${numId}`;
        const total=Math.round(basketTotal.value);
        const {data:reqData,error:reqErr}=await sb.from('requests').insert({
          user_id:profile.value.id,platform_type:platform.value,
          request_number,status:'pending',urgency:'normal',source_type:'catalog',
          total_cost:total,balance_due:total,deposit_paid:0,payment_status:'pending',currency:'TZS',
          source_notes:`PROCUREMENT BASKET: ${basket.value.length} items`,
          created_at:new Date().toISOString(),updated_at:new Date().toISOString()
        }).select().single();
        if (reqErr){loading.value=false;toast('err','Error',reqErr.message);return;}
        const items=basket.value.map(i=>({
          request_id:reqData.id,product_id:i.product.id,product_name:i.product.name,
          quantity:i.quantity,unit_price:Math.round(i.product.base_price_usd*(usdToTzs.value||2650)),
          total_price:Math.round(i.product.base_price_usd*i.quantity*(usdToTzs.value||2650)),
          notes:i.notes||null,created_at:new Date().toISOString()
        }));
        await sb.from('request_items').insert(items);
        await sb.from('tracking_events').insert({
          request_id:reqData.id,event_type:'order_placed',event_status:'completed',
          description:`Procurement basket -- ${basket.value.length} items submitted`,
          location:'TechMedixLink Platform',event_time:new Date().toISOString(),created_at:new Date().toISOString()
        });
        await createNotification(profile.value.id,'status_update','Basket Submitted',
          `Procurement request ${request_number} for ${basket.value.length} items submitted.`,reqData.id,'in_app');
        await loadReqs();await loadProds();
        loading.value=false;showBasket.value=false;clearBasket();
        toast('ok','Procurement request submitted!',request_number);
        tab.value='my-requests';
      }

      // ── Exchange rate ──
      const usdToTzs      = ref(TECHMEDIX_CONFIG.app.fallbackRate);
      const rateSource    = ref('fallback');
      const rateUpdatedAt = ref(null);
      const rateAge       = computed(() => {
        if (!rateUpdatedAt.value) return null;
        const h = Math.round((Date.now() - new Date(rateUpdatedAt.value)) / 3600000);
        return h < 1 ? 'Updated just now' : h < 24 ? `Updated ${h}h ago` : `Updated ${Math.round(h/24)}d ago`;
      });

      // ── Modal states ──
      const showAuth         = ref(false);
      const showProfileModal = ref(false);
      const showListingModal = ref(false);
      const showReqModal     = ref(false);
      const showNotifPanel   = ref(false);
      const showUserPanel    = ref(false);
      const showQuoteModal   = ref(false);
      const showReviewModal  = ref(false);
      const showShopperModal = ref(false);
      const showInquiryDetail = ref(false);
      const inquiryReq = ref(null);
      const showAdminUserModal = ref(false);
      const adminViewUser = ref(null);
      const adminEditingUser = ref(false);
      const adminUF = reactive({ full_name:'', phone:'', user_type:'individual', user_role:'buyer', company_name:'' });
      const showTcModal = ref(false);
      const showCancelModal = ref(false);
      const cancelReq = ref(null);
      const cancelReason = ref('');
      const showVerifyModal = ref(false);
      const verifyDocs = reactive({ business_reg:'', tax_cert:'', tmda_license:'', notes:'' });
      const editingProd      = ref(null);
      const editingShopper   = ref(null);
      const detailReq        = ref(null);
      const paymentReq       = ref(null);
      const quoteReq         = ref(null);
      const reviewReq        = ref(null);
      const viewedProduct    = ref(null);
      const showProductDetail = ref(false);
      const lpCarousel       = ref(0);   // landing page carousel index
      const pd3dMode = ref(false);   // toggle between photo and 3D view
      const pdReviews        = ref([]);
      const pdLoading        = ref(false);
      const productReviews   = ref([]);
      const trackId          = ref('');
      const trackedReq       = ref(null);
      const confirm          = ref(null);
      const openStatusMenu   = ref(null);
      const assignShopperId  = ref('');
      const addingAddress    = ref(false);

      // ── Onboarding state ──
      const onboardStep   = ref(0);   // 0=off 1=role 2=type 3=profile 4=role-detail
      const showOnboarding = ref(false);
      const obF = reactive({
        // step 3 -- core profile
        full_name:'', phone:'', avatar_file:null, avatar_preview:'', avatar_uploading:false,
        // step 4 buyer extras
        facility_type:'', bed_count:'', supply_region:'Dar es Salaam', equipment_categories:[],
        // step 4 seller extras
        business_reg:'', tmda_license:'', supply_countries:['Tanzania'], product_categories:[],
      });

      // ── Auth form ──
      const authTab      = ref('login');
      const onboardingDone = ref(false);
      const rateLimitUntil = ref(0);   // timestamp when rate limit expires
      const rateLimitSecs  = ref(0);   // reactive countdown seconds
      const tcAccepted = ref(false);
      const authErr   = ref('');
      const magicSent = ref(false);
      const aF = reactive({ email:'', password:'', full_name:'', phone:'', user_role:'buyer', user_type:'individual', company_name:'', loginId:'' });

      // ── Admin filters ──
      const adminSubTab      = ref('requests');
      const adminUserSearch  = ref('');
      const adminUserRoleFilter = ref('all');
      const appLogoUrl       = ref(TECHMEDIX_CONFIG.app?.logoUrl || null);
      const adminReqSearch = ref('');
      const adminReqFilter = ref('all');
      const adminPlatFilter = ref('all');

      // ── Pagination ──
      const prodPage    = ref(0);  const PROD_PER_PAGE = 20;
      const reqPage     = ref(0);  const REQ_PER_PAGE  = 25;
      const userPage    = ref(0);  const USER_PER_PAGE = 30;
      const prodTotal   = ref(0);
      const reqTotal    = ref(0);
      const userTotal   = ref(0);

      // ── Browse filters ──
      const prodSearch    = ref('');
      const prodFilter    = ref('all');
      const prodTypeFilter = ref('all');
      const sortProd      = ref('newest');
      const filterTmda    = ref(false);
      const filterInStock = ref(false);
      const reqSearch     = ref('');
      const reqFilter     = ref('all');
      const reqPlatFilter = ref('all');

      // ── Forms ──
      const pF = reactive({ name:'', manufacturer:'', model_url:'', platform_type:'techmedix', product_type:'medical_device', description:'', base_price_usd:0, stock_quantity:0, warranty_months:12, country:'Tanzania', import_duty_percent:0, estimated_weight_kg:0, seller_name:'', tmda_certified:false, requires_installation:false, requires_training:false, is_active:true, image_url:'', imagePreview:'', imageFile:null, uploading:false, imageSize:'' });
      const rF = reactive({ platform_type:'techmedix', product_id:'', quantity:1, urgency:'normal', notes:'', source_type:'catalog', address_id:'', custom_name:'', custom_desc:'', source_url:'' });
      const uF = reactive({ full_name:'', phone:'', user_type:'individual', user_role:'buyer', company_name:'' });
      const pmtF = reactive({ amount:0, method:'mpesa', type:'deposit', reference:'', notes:'', phone:'' });
      const qF  = reactive({ item_cost:0, shipping_cost:0, duty_cost:0, service_fee:0, delivery_date:'', notes:'' });
      const reviewF = reactive({ rating:0, title:'', body:'' });
      const shF = reactive({ full_name:'', phone:'', city:'', country:'Tanzania', specialization:'', is_active:true });
      const addrF = reactive({ address_type:'home', region:'', district:'', street:'', landmark:'', is_default:false });

      // ── Toasts ──
      const toasts = ref([]);
      function toast(type, title, msg='') {
        const id = Date.now() + Math.random();
        toasts.value.push({ id, type, title, msg });
        setTimeout(() => killToast(id), 4200);
      }
      function killToast(id) { toasts.value = toasts.value.filter(t => t.id !== id); }

      // ── 16. NOTIFICATIONS ──────────────────────────────────────
      // ── NOTIFICATION HELPER ──
      // Creates in-app + email notification records.
      // For actual email delivery, deploy a Supabase Edge Function triggered
      // by INSERT on the notifications table (using Resend or SendGrid).
      // Edge Function template: supabase/functions/send-notification/index.ts
      async function sendWhatsApp(phone, message) {
        if (!phone) return;
        try {
          await sb.functions.invoke('send-whatsapp', {
            body: { phone: phone.replace(/[^0-9+]/g,''), message }
          });
        } catch(e) { console.warn('WhatsApp fn:', e.message); }
      }

      async function createNotification(userId, type, title, message, requestId = null, channel = 'in_app') {
        try {
          await sb.from('notifications').insert({
            user_id: userId,
            request_id: requestId,
            notification_type: type,
            channel: channel,
            title: title,
            message: message,
            is_read: false,
            is_delivered: false,
            sent_at: new Date().toISOString()
          });
        } catch(e) { console.warn('Notification failed:', e); }
      }

      // ── 3. COMPUTED ──────────────────────────────────────────────
      // ── Profile completeness ──
      const adminTriage = computed(() => {
        const reqs = allRequests.value;
        return {
          pendingPayments:   reqs.filter(r => r.payment_status==='pending' && r.total_cost>0 && r.status!=='cancelled'),
          awaitingQuote:     reqs.filter(r => ['pending','submitted'].includes(r.status)),
          verifyRequests:    (adminUsers.value||[]).filter(u => u.company_name?.startsWith('[VERIFY_REQUESTED]')),
          stalled:           reqs.filter(r => {
            if (['completed','cancelled','delivered'].includes(r.status)) return false;
            const age = (Date.now()-new Date(r.updated_at||r.created_at))/86400000;
            return age > 3;
          }),
        };
      });

      const profileCompletion = computed(() => {
        if (!profile.value) return { pct:0, unlocks:[], next:null };
        const p = profile.value;
        const checks = [
          { key:'name',     done: !!p.full_name,                          pts:15, label:'Add your full name' },
          { key:'phone',    done: !!p.phone,                              pts:10, label:'Add phone number' },
          { key:'avatar',   done: !!p.avatar_url,                         pts:20, label:'Upload profile photo' },
          { key:'type',     done: !!p.user_type && p.user_type!=='individual' || p.user_type==='individual', pts:5, label:'Set account type' },
          { key:'address',  done: addresses.value.length > 0,             pts:15, label:'Add delivery address' },
          { key:'company',  done: !!p.company_name?.replace(/^\[.*?\]/,'').trim(), pts:5, label:'Add organisation name' },
          { key:'verified', done: p.company_name?.startsWith('[VERIFIED]'), pts:15, label:'Get seller verified' },
          { key:'request',  done: allRequests.value.filter(r=>r.user_id===p.id).length > 0, pts:10, label:'Submit your first request' },
          { key:'review',   done: false,                                   pts:5, label:'Receive your first review' },
        ];
        const total = checks.reduce((s,c) => s + c.pts, 0);
        const earned = checks.filter(c => c.done).reduce((s,c) => s + c.pts, 0);
        const pct = Math.round((earned / total) * 100);
        const unlocks = [
          { at:25, label:'Browse & request products',      icon:'fa-magnifying-glass', done: pct>=25 },
          { at:50, label:'Order tracking unlocked',        icon:'fa-location-dot',     done: pct>=50 },
          { at:75, label:'Priority support access',        icon:'fa-headset',          done: pct>=75 },
          { at:100,label:'Featured listing / buyer badge', icon:'fa-star',             done: pct>=100 },
        ];
        const next = checks.find(c => !c.done);
        return { pct, unlocks, next, checks };
      });

      // ── Computed roles ──
      const isAdmin = computed(() => profile.value?.user_role === 'admin');
      const canBuy  = computed(() => !profile.value || ['buyer','both'].includes(profile.value?.user_role));
      const canSell = computed(() => !!profile.value && ['seller','both'].includes(profile.value?.user_role));
      function roleLabel(r) { return { buyer:'Buyer', seller:'Seller', both:'Buyer & Seller', admin:'Admin' }[r] || r; }
      function roleIcon(r)  { return { buyer:'fa-cart-shopping', seller:'fa-store', both:'fa-arrows-left-right', admin:'fa-shield-halved' }[r] || 'fa-user'; }

      // ── Computed UI ──
      const pageTitle = computed(() => ({ home:'Dashboard', browse:'Browse Products', 'my-requests':'My Requests', 'my-listings':'My Listings', inquiries:'Inquiries', 'seller-analytics':'My Analytics', tracking:'Tracking', payments:'Payments', admin:'Admin Panel', 'admin-users':'All Users', 'admin-listings':'All Listings', analytics:'Analytics', shoppers:'Shoppers' })[tab.value] || 'TechMedixLink');
      const primaryLabel = computed(() => { if (!profile.value) return 'Sign In'; if (isAdmin.value) return 'Admin'; if (canBuy.value) return 'Request'; if (canSell.value) return 'List Product'; return 'Browse'; });
      const userInitial  = computed(() => profile.value?.full_name?.charAt(0)?.toUpperCase() || '?');
      const today        = computed(() => new Date().toLocaleDateString('en-GB', { weekday:'long', day:'numeric', month:'long', year:'numeric' }));
      const unreadCount  = computed(() => notifications.value.filter(n => !n.is_read).length);
      const uniqueCats   = computed(() => new Set(products.value.map(p => p.product_type).filter(Boolean)).size);

      // ── Request computed ──
      const myRequests   = computed(() => !profile.value ? [] : allRequests.value.filter(r => r.user_id === profile.value.id));
      const myListings   = computed(() => !profile.value ? [] : products.value.filter(p => p.user_id === profile.value.id));
      const incomingReqs = computed(() => {
        if (!profile.value || !canSell.value) return [];
        const myProdIds = myListings.value.map(p => p.id);
        return allRequests.value.filter(r => r.items?.some(it => myProdIds.includes(it.product_id)));
      });
      const myActiveReqs    = computed(() => myRequests.value.filter(r => !['delivered','completed','cancelled','installed'].includes(r.status)));
      const myDoneReqs      = computed(() => myRequests.value.filter(r => ['delivered','completed','installed'].includes(r.status)));
      const myTotalSpent    = computed(() => myRequests.value.reduce((s,r) => s + (r.deposit_paid||0), 0));
      const myBalanceDue    = computed(() => myRequests.value.reduce((s,r) => s + (r.balance_due||0), 0));
      const pendingPayCount = computed(() => myRequests.value.filter(r => (r.balance_due||0) > 0).length);
      const pendingAdminCount = computed(() => allRequests.value.filter(r => r.status === 'pending').length);
      const avgListingPrice = computed(() => !myListings.value.length ? 0 : myListings.value.reduce((s,p) => s+(p.base_price_usd||0),0) / myListings.value.length);

      // ── Selected product for request form ──
      const selectedProduct = computed(() => rF.product_id ? products.value.find(p => p.id === rF.product_id) : null);
      const reqCostEstimate = computed(() => {
        const p = selectedProduct.value;
        if (!p) return { items:0, shipping:0, duty:0, fee:0, total:0 };
        const items    = Math.round(p.base_price_usd * rF.quantity * usdToTzs.value);
        const shipping = Math.round(items * TECHMEDIX_CONFIG.app.shippingPercent);
        const duty     = rF.platform_type === 'globaldoor' ? Math.round(items * ((p.import_duty_percent||25)/100)) : 0;
        const fee      = Math.round((items + shipping + duty) * TECHMEDIX_CONFIG.app.serviceFeePercent);
        // ── 20. RETURN (Vue template exports) ───────────────────────
      return { items, shipping, duty, fee, total: items + shipping + duty + fee };
      });

      // ── Filtered products ──
      const filteredProds = computed(() => {
        let list = products.value.filter(p => p.is_active);
        if (prodSearch.value)     { const q = prodSearch.value.toLowerCase(); list = list.filter(p => p.name?.toLowerCase().includes(q) || p.manufacturer?.toLowerCase().includes(q) || p.country?.toLowerCase().includes(q)); }
        if (prodFilter.value !== 'all') {
          if (prodFilter.value === 'techmedix')     list = list.filter(p => p.platform_type === 'techmedix');
          else if (prodFilter.value === 'globaldoor')   list = list.filter(p => p.platform_type === 'globaldoor');
          else if (prodFilter.value === 'tmda')         list = list.filter(p => p.tmda_certified);
          else if (prodFilter.value === 'local')        list = list.filter(p => p.location_type === 'tanzania' || p.country?.toLowerCase().includes('tanzania'));
          else if (prodFilter.value === 'international') list = list.filter(p => p.location_type === 'international' || !p.country?.toLowerCase().includes('tanzania'));
        }
        if (prodTypeFilter.value !== 'all') list = list.filter(p => p.product_type === prodTypeFilter.value);
        if (filterTmda.value)    list = list.filter(p => p.tmda_certified);
        if (filterInStock.value) list = list.filter(p => (p.stock_quantity||0) > 0);
        if (sortProd.value === 'price_asc')  list = [...list].sort((a,b) => (a.base_price_usd||0) - (b.base_price_usd||0));
        else if (sortProd.value === 'price_desc') list = [...list].sort((a,b) => (b.base_price_usd||0) - (a.base_price_usd||0));
        else if (sortProd.value === 'name')  list = [...list].sort((a,b) => a.name?.localeCompare(b.name)||0);
        else list = [...list].sort((a,b) => new Date(b.created_at) - new Date(a.created_at));
        return list;
      });

      const filteredMyReqs = computed(() => {
        let list = myRequests.value;
        if (reqSearch.value)       list = list.filter(r => r.request_number?.toLowerCase().includes(reqSearch.value.toLowerCase()));
        if (reqFilter.value !== 'all')    list = list.filter(r => r.status === reqFilter.value);
        if (reqPlatFilter.value !== 'all') list = list.filter(r => r.platform_type === reqPlatFilter.value);
        return list.sort((a,b) => new Date(b.created_at) - new Date(a.created_at));
      });

      const filteredAdminReqs = computed(() => {
        let list = allRequests.value;
        if (adminReqSearch.value)        list = list.filter(r => r.request_number?.toLowerCase().includes(adminReqSearch.value.toLowerCase()));
        if (adminReqFilter.value !== 'all')   list = list.filter(r => r.status === adminReqFilter.value);
        if (adminPlatFilter.value !== 'all')  list = list.filter(r => r.platform_type === adminPlatFilter.value);
        return list.sort((a,b) => new Date(b.created_at) - new Date(a.created_at));
      });

      const recentActivity = computed(() => {
        const reqs = myRequests.value.slice().sort((a,b) => new Date(b.updated_at||b.created_at) - new Date(a.updated_at||a.created_at)).slice(0,5);
        return reqs.map(r => ({ id:r.id, title:r.request_number, sub:fDate(r.created_at), status:r.status, ico:r.platform_type==='techmedix'?'tm':'gd', icon:r.platform_type==='techmedix'?'fas fa-heart-pulse':'fas fa-globe' }));
      });

      const filteredAdminUsers = computed(() => {
        let users = adminUsers.value;
        if (adminUserSearch.value) {
          const q = adminUserSearch.value.toLowerCase();
          users = users.filter(u =>
            u.full_name?.toLowerCase().includes(q) ||
            u.email?.toLowerCase().includes(q) ||
            u.phone?.includes(q)
          );
        }
        if (adminUserRoleFilter.value !== 'all') {
          users = users.filter(u => u.user_role === adminUserRoleFilter.value);
        }
        return users;
      });

      const browseSubtitle = computed(() => {
        const total = products.value.filter(p => p.is_active).length;
        const shown = filteredProds.value.length;
        const parts = [];
        if (prodFilter.value === 'techmedix')     parts.push('TechMedixLink');
        if (prodFilter.value === 'globaldoor')    parts.push('GlobalDoor');
        if (prodFilter.value === 'tmda')          parts.push('TMDA certified');
        if (prodFilter.value === 'local')         parts.push('Tanzania stock');
        if (prodFilter.value === 'international') parts.push('International');
        if (prodTypeFilter.value !== 'all')       parts.push(prodTypeFilter.value.replace(/_/g,' '));
        if (filterTmda.value)                     parts.push('TMDA only');
        if (filterInStock.value)                  parts.push('in stock');
        if (prodSearch.value)                     parts.push('"' + prodSearch.value + '"');
        const label = parts.length ? parts.join(' · ') : 'all platforms';
        return shown === total
          ? total + ' products · ' + label
          : shown + ' of ' + total + ' · ' + label;
      });

      const activeFilterCount = computed(() => {
        let n = 0;
        if (prodFilter.value !== 'all')     n++;
        if (prodTypeFilter.value !== 'all') n++;
        if (filterTmda.value)               n++;
        if (filterInStock.value)            n++;
        if (prodSearch.value)               n++;
        return n;
      });

      function clearAllFilters() {
        prodSearch.value = '';
        prodFilter.value = 'all';
        prodTypeFilter.value = 'all';
        sortProd.value = 'newest';
        filterTmda.value = false;
        filterInStock.value = false;
      }

      const pStats = computed(() => {
        const total = products.value.length || 1;
        const tm = products.value.filter(p => p.platform_type === 'techmedix').length;
        return { tm: Math.round((tm/total)*100), gd: Math.round(((total-tm)/total)*100) };
      });

      // ── 4. STATUS CONFIG ──────────────────────────────────────────
      // ── Status list ──
      const statusList = [
        { val:'pending',           label:'Pending',           color:'#b8904a', short:'Pending' },
        { val:'quoted',            label:'Quoted',            color:'#5a90c8', short:'Quoted' },
        { val:'deposit_paid',      label:'Deposit Paid',      color:'#5da87a', short:'Deposit' },
        { val:'sourcing',          label:'Sourcing',          color:'#5a90c8', short:'Sourcing' },
        { val:'shipped',           label:'Shipped',           color:'#7a6fc8', short:'Shipped' },
        { val:'in_transit',        label:'In Transit',        color:'#5a90c8', short:'Transit' },
        { val:'customs_clearance', label:'Customs',           color:'#b8904a', short:'Customs' },
        { val:'delivered',         label:'Delivered',         color:'#5da87a', short:'Delivered' },
        { val:'installed',         label:'Installed',         color:'#5da87a', short:'Installed' },
        { val:'completed',         label:'Completed',         color:'#5da87a', short:'Complete' },
        { val:'cancelled',         label:'Cancelled',         color:'#c05050', short:'Cancelled' },
      ];
      const stepperStages = [
        { val:'pending',      short:'Order' },
        { val:'quoted',       short:'Quote' },
        { val:'deposit_paid', short:'Deposit' },
        { val:'sourcing',     short:'Source' },
        { val:'shipped',      short:'Shipped' },
        { val:'in_transit',   short:'Transit' },
        { val:'customs_clearance', short:'Customs' },
        { val:'delivered',    short:'Delivered' },
      ];

      function stepCls(status, idx) {
        const order = stepperStages.map(s => s.val);
        const cur = order.indexOf(status);
        if (cur < 0) return idx === 0 ? 'cur' : '';
        if (idx < cur) return 'done';
        if (idx === cur) return 'cur';
        return '';
      }

      function fStatus(s) { return statusList.find(x => x.val===s)?.label || (s ? s.replace(/_/g,' ') : '--'); }

      function sBadge(s) {
        const map = { pending:'b-wn', quoted:'b-in', deposit_paid:'b-ok', sourcing:'b-in', shipped:'b-in', in_transit:'b-in', customs_clearance:'b-wn', delivered:'b-ok', installed:'b-ok', completed:'b-ok', cancelled:'b-er', draft:'b-mu' };
        return map[s] || 'b-mu';
      }

      // ── 5. DATA LOADERS ──────────────────────────────────────────
      // ── DATA LOADING ──
      async function loadAll() {
        await loadExchangeRate().catch(e => console.warn('loadExchangeRate:', e));
        await loadProds().catch(e => console.warn('loadProds:', e));
        await loadReqs().catch(e => console.warn('loadReqs:', e));
        await loadPayments().catch(e => console.warn('loadPayments:', e));
      }

      async function loadExchangeRate() {
        try {
          const { data } = await sb.from('exchange_rates')
            .select('*').eq('is_current', true)
            .order('created_at', { ascending: false }).limit(1).single();
          if (data?.rate) {
            usdToTzs.value = parseFloat(data.rate);
            rateSource.value = 'live';
            rateUpdatedAt.value = data.created_at || data.valid_from;
          } else {
            rateSource.value = 'fallback';
            rateUpdatedAt.value = null;
          }
        } catch {
          rateSource.value = 'fallback';
          rateUpdatedAt.value = null;
        }
      }

      async function loadProds(page = 0) {
        try {
          const from = page * PROD_PER_PAGE;
          const to   = from + PROD_PER_PAGE - 1;
          const { data, error, count } = await sb.from('products')
            .select('*', { count: 'exact' })
            .order('created_at', { ascending: false })
            .range(from, to);
          if (error) throw error;
          products.value = data || [];
          prodTotal.value = count || 0;
          prodPage.value  = page;
        } catch (e) { console.error('loadProds:', e); }
      }

      async function loadReqs(page = 0) {
        try {
          const from = page * REQ_PER_PAGE;
          const to   = from + REQ_PER_PAGE - 1;
          let q = sb.from('requests')
            .select('*, items:request_items(*)', { count: 'exact' })
            .order('created_at', { ascending: false })
            .range(from, to);
          if (!isAdmin.value && profile.value) q = q.eq('user_id', profile.value.id);
          const { data, error, count } = await q;
          if (error) throw error;
          allRequests.value = data || [];
          reqTotal.value  = count || 0;
          reqPage.value   = page;
        } catch (e) { console.error('loadReqs:', e); }
      }

      async function loadPayments() {
        if (!profile.value) return;
        try {
          // Query by user_id directly -- avoids .in() with large array causing 400
          const query = isAdmin.value
            ? sb.from('payments').select('*').order('payment_date', { ascending: false }).limit(100)
            : sb.from('payments').select('*').eq('user_id', profile.value.id).order('payment_date', { ascending: false });
          const { data, error } = await query;
          if (error) throw error;
          payments.value = data || [];
        } catch (e) { console.error('loadPayments:', e); }
      }

      async function loadNotifications() {
        if (!profile.value) return;
        try {
          const { data } = await sb.from('notifications').select('*').eq('user_id', profile.value.id).order('sent_at', { ascending: false }).limit(30);
          notifications.value = data || [];
        } catch {}
      }

      async function loadAdminUsers(page = 0) {
        if (!isAdmin.value) return;
        try {
          const from = page * USER_PER_PAGE;
          const to   = from + USER_PER_PAGE - 1;
          const { data, count } = await sb.from('users')
            .select('*', { count: 'exact' })
            .order('created_at', { ascending: false })
            .range(from, to);
          adminUsers.value = data || [];
          userTotal.value  = count || 0;
          userPage.value   = page;
        } catch {}
      }

      async function loadShoppers() {
        try {
          const { data } = await sb.from('shoppers').select('*').order('created_at', { ascending: false });
          shoppers.value = data || [];
        } catch {}
      }

      async function loadAddresses() {
        if (!profile.value) return;
        try {
          const { data } = await sb.from('addresses').select('*').eq('user_id', profile.value.id);
          addresses.value = data || [];
        } catch {}
      }

      async function loadAnalytics() {
        if (!isAdmin.value) return;
        try {
          // Query FULL database -- not the paginated allRequests slice
          const [
            { count: totalReqs },
            { data: statusData },
            { data: gmvData },
            { data: rvData },
            { data: deliveryData },
          ] = await Promise.all([
            sb.from('requests').select('*', { count:'exact', head:true }),
            sb.from('requests').select('status'),
            sb.from('requests').select('total_cost,deposit_paid'),
            sb.from('reviews').select('rating'),
            sb.from('requests').select('actual_delivery_date,created_at')
              .in('status',['delivered','completed'])
              .not('actual_delivery_date','is',null),
          ]);
          const total = totalReqs || 1;
          const done  = (statusData||[]).filter(r=>['delivered','completed','installed'].includes(r.status)).length;
          const gmv   = (gmvData||[]).reduce((s,r)=>s+(r.total_cost||0),0);
          const collected = (gmvData||[]).reduce((s,r)=>s+(r.deposit_paid||0),0);
          const avgDays = deliveryData?.length
            ? Math.round(deliveryData.reduce((s,r)=>s+(new Date(r.actual_delivery_date)-new Date(r.created_at))/86400000,0)/deliveryData.length)
            : null;
          const avgRating = rvData?.length
            ? (rvData.reduce((s,r)=>s+r.rating,0)/rvData.length).toFixed(1)
            : null;
          // Monthly GMV for trend chart -- last 6 months
          const { data: monthlyData } = await sb.from('requests')
            .select('total_cost,created_at')
            .gte('created_at', new Date(Date.now()-180*86400000).toISOString());
          analyticsData.value = {
            totalGmv: gmv,
            totalCollected: collected,
            completionRate: Math.round((done/total)*100),
            avgDays: avgDays !== null ? avgDays+'d' : '--',
            avgRating: avgRating || '--',
            totalReqs: total,
            doneCount: done,
            monthlyData: monthlyData || [],
            statusData: statusData || [],
          };
          nextTick(() => { renderCharts(); });
        } catch(e) { console.error('loadAnalytics:', e); }
      }

      async function loadSellerAnalytics() {
        if (!profile.value || !canSell.value) return;
        sellerAnalyticsLoading.value = true;
        try {
          const myProductIds = myListings.value.map(p=>p.id);
          if (!myProductIds.length) { sellerAnalytics.value = { noProducts: true }; sellerAnalyticsLoading.value = false; return; }
          const [
            { data: inquiries },
            { data: revenue },
            { data: reviews },
          ] = await Promise.all([
            sb.from('request_items').select('product_id,quantity,total_price,request:request_id(status,created_at)')
              .in('product_id', myProductIds),
            sb.from('request_items').select('product_id,total_price,request:request_id(status,deposit_paid)')
              .in('product_id', myProductIds),
            sb.from('reviews').select('rating,reviewed_entity_id')
              .in('reviewed_entity_id', myProductIds),
          ]);
          const totalInquiries = inquiries?.length || 0;
          const converted = (inquiries||[]).filter(i=>['deposit_paid','processing','sourcing','shipped','delivered','completed'].includes(i.request?.status)).length;
          const totalRevenue = (revenue||[]).reduce((s,i)=>s+(i.total_price||0),0);
          const avgRating = reviews?.length ? (reviews.reduce((s,r)=>s+r.rating,0)/reviews.length).toFixed(1) : null;
          // Per-product breakdown
          const byProduct = {};
          (inquiries||[]).forEach(i => {
            if (!byProduct[i.product_id]) byProduct[i.product_id] = { inquiries:0, converted:0, revenue:0 };
            byProduct[i.product_id].inquiries++;
            if (['deposit_paid','processing','sourcing','shipped','delivered','completed'].includes(i.request?.status)) byProduct[i.product_id].converted++;
          });
          (revenue||[]).forEach(i => { if (byProduct[i.product_id]) byProduct[i.product_id].revenue += (i.total_price||0); });
          sellerAnalytics.value = { totalInquiries, converted, conversionRate: totalInquiries ? Math.round(converted/totalInquiries*100) : 0, totalRevenue, avgRating, byProduct, totalReviews: reviews?.length||0 };
        } catch(e) { console.error('sellerAnalytics:', e); }
        sellerAnalyticsLoading.value = false;
      }

      // ── 6. ANALYTICS ──────────────────────────────────────────────
      function renderCharts() {
        const reqs = analyticsData.value.statusData || allRequests.value;
        const chartOpts = { responsive:true, maintainAspectRatio:false, plugins:{ legend:{ labels:{ color:'#3a5070', font:{ size:11, family:'Nunito Sans' } } } } };

        // Status chart
        const statusCounts = {};
        statusList.forEach(s => { statusCounts[s.label] = reqs.filter(r=>r.status===s.val).length; });
        const filtered = Object.entries(statusCounts).filter(([,v]) => v > 0);
        const scEl = document.getElementById('statusChart');
        if (scEl) {
          if (scEl._chart) scEl._chart.destroy();
          scEl._chart = new Chart(scEl, { type:'bar', data:{ labels:filtered.map(([k])=>k), datasets:[{ data:filtered.map(([,v])=>v), backgroundColor:'rgba(0,102,161,0.65)', borderColor:'rgba(0,102,161,1)', borderWidth:1.5, borderRadius:4 }] }, options:{ ...chartOpts, scales:{ x:{ ticks:{ color:'#7a90aa', font:{size:10,family:'Nunito Sans'} }, grid:{ color:'rgba(0,30,80,0.06)' } }, y:{ ticks:{ color:'#7a90aa', font:{size:10,family:'Nunito Sans'} }, grid:{ color:'rgba(0,30,80,0.06)' } } }, plugins:{ legend:{ display:false } } } });
        }

        // Platform chart
        const tml = reqs.filter(r=>r.platform_type==='techmedix').length;
        const gd  = reqs.filter(r=>r.platform_type==='globaldoor').length;
        const pcEl = document.getElementById('platformChart');
        if (pcEl) {
          if (pcEl._chart) pcEl._chart.destroy();
          pcEl._chart = new Chart(pcEl, { type:'doughnut', data:{ labels:['TechMedixLink','GlobalDoor'], datasets:[{ data:[tml,gd], backgroundColor:['rgba(0,102,161,0.75)','rgba(0,168,176,0.75)'], borderColor:['#0066a1','#00a8b0'], borderWidth:2 }] }, options:{ ...chartOpts } });
        }

        // Products chart
        const prodCounts = {};
        reqs.forEach(r => r.items?.forEach(it => { prodCounts[it.product_name] = (prodCounts[it.product_name]||0) + 1; }));
        const top5 = Object.entries(prodCounts).sort((a,b)=>b[1]-a[1]).slice(0,5);
        const prEl = document.getElementById('productsChart');
        if (prEl) {
          if (prEl._chart) prEl._chart.destroy();
          prEl._chart = new Chart(prEl, { type:'bar', data:{ labels:top5.map(([k])=>k.length>22?k.slice(0,22)+'…':k), datasets:[{ data:top5.map(([,v])=>v), backgroundColor:'rgba(0,168,176,0.60)', borderColor:'rgba(0,168,176,1)', borderWidth:1.5, borderRadius:4 }] }, options:{ ...chartOpts, indexAxis:'y', scales:{ x:{ ticks:{ color:'#7a90aa', font:{size:10,family:'Nunito Sans'} }, grid:{ color:'rgba(0,30,80,0.06)' } }, y:{ ticks:{ color:'#7a90aa', font:{size:10,family:'Nunito Sans'} }, grid:{ display:false } } }, plugins:{ legend:{ display:false } } } });
        }
      }


      // ── 17. SECURITY ────────────────────────────────────────────
      // ── SECURITY HELPERS ──
      // NOTE FOR DEPLOYMENT: Enable RLS on ALL tables in Supabase dashboard.
      // Required policies (add via Supabase SQL editor):
      //   users:    SELECT own row, UPDATE own row only
      //   products: SELECT all active, INSERT/UPDATE/DELETE own (user_id = auth.uid())
      //   requests: SELECT own (user_id = auth.uid()) OR admin role
      //   payments: SELECT own request payments only
      //   reviews:  INSERT own, SELECT all
      //   notifications: SELECT/UPDATE own
      //   shopper_assignments, tracking_events: admin only for write

      // Client-side input sanitizer -- strip HTML tags, limit length
      function sanitize(str, maxLen = 500) {
        if (!str) return '';
        return String(str).replace(/<[^>]*>/g, '').trim().slice(0, maxLen);
      }

      // Server-side admin re-verification before sensitive operations
      async function verifyAdminServer() {
        if (!profile.value || profile.value.user_role !== 'admin') return false;
        try {
          const { data } = await sb.from('users')
            .select('user_role')
            .eq('id', profile.value.id)
            .single();
          return data?.user_role === 'admin';
        } catch { return false; }
      }

      // Rate limit countdown timer
      let rateLimitTimer = null;
      function startRateLimitCountdown(seconds) {
        rateLimitUntil.value = Date.now() + seconds * 1000;
        rateLimitSecs.value  = seconds;
        if (rateLimitTimer) clearInterval(rateLimitTimer);
        rateLimitTimer = setInterval(() => {
          const remaining = Math.ceil((rateLimitUntil.value - Date.now()) / 1000);
          if (remaining <= 0) {
            rateLimitSecs.value = 0;
            rateLimitUntil.value = 0;
            clearInterval(rateLimitTimer);
          } else {
            rateLimitSecs.value = remaining;
          }
        }, 1000);
      }

      function fCountdown(secs) {
        if (secs <= 0) return '';
        const m = Math.floor(secs / 60);
        const s = secs % 60;
        return m > 0 ? `${m}m ${s.toString().padStart(2,'0')}s` : `${s}s`;
      }

      // Auth rate limiter -- prevent brute force (client-side throttle)
      const authAttempts = { count: 0, resetAt: 0 };
      function checkAuthRateLimit() {
        const now = Date.now();
        if (now > authAttempts.resetAt) { authAttempts.count = 0; authAttempts.resetAt = now + 60000; }
        authAttempts.count++;
        if (authAttempts.count > 5) {
          authErr.value = 'Too many attempts. Please wait 60 seconds before trying again.';
          return false;
        }
        return true;
      }

      // ── 7. AUTH ──────────────────────────────────────────────────
      // ── AUTH ──
      async function doLogin() {
        if (!aF.loginId || !aF.password) return;
        if (!checkAuthRateLimit()) return;
        loading.value = true; loadMsg.value = 'Signing in…';
        let email = aF.loginId.trim();
        const isPhone = /^[+]?[0-9]{8,15}$/.test(email.replace(/[\s\-]/g,''));
        const isEmail = email.includes('@');
        if (!isEmail) {
          const q = isPhone
            ? sb.from('users').select('email').eq('phone', email.replace(/[^0-9+]/g,''))
            : sb.from('users').select('email').ilike('full_name', email);
          const { data: found } = await q.limit(1).single();
          if (found?.email) { email = found.email; }
          else { loading.value=false; authErr.value='No account found. Try your email address.'; return; }
        }
        const { error } = await sb.auth.signInWithPassword({ email, password: aF.password });
        loading.value = false;
        if (error) {
          const msg = error.message || '';
          if (msg.includes('Invalid login') || msg.includes('400')) {
            authErr.value = 'Incorrect email or password. If you signed up recently, check your email for a confirmation link first.';
          } else {
            authErr.value = msg;
          }
          return;
        }
        showAuth.value = false; aF.password = ''; aF.loginId = '';
      }

      async function updatePassword() {
        if (!newPassword.value || newPassword.value.length < 6) {
          newPasswordErr.value = 'Password must be at least 6 characters.';
          return;
        }
        loading.value = true; loadMsg.value = 'Updating password…';
        const { error } = await sb.auth.updateUser({ password: newPassword.value });
        loading.value = false;
        if (error) { newPasswordErr.value = error.message; return; }
        showPasswordUpdate.value = false;
        newPassword.value = '';
        newPasswordErr.value = '';
        toast('ok', 'Password updated', 'You are now signed in with your new password.');
      }

      async function doPasswordReset() {
        if (!aF.email) return;
        if (rateLimitSecs.value > 0) {
          authErr.value = `Please wait ${fCountdown(rateLimitSecs.value)} before requesting another email.`;
          return;
        }
        if (!checkAuthRateLimit()) return;
        loading.value = true; loadMsg.value = 'Sending reset link…';
        const { error } = await sb.auth.resetPasswordForEmail(aF.email, {
          redirectTo: window.location.origin + window.location.pathname
        });
        loading.value = false;
        if (error) {
          const msg = error.message || '';
          if (msg.toLowerCase().includes('rate limit') || msg.toLowerCase().includes('too many') || msg.includes('429')) {
            startRateLimitCountdown(3600);
            authErr.value = '';
          } else {
            authErr.value = msg;
          }
          return;
        }
        magicSent.value = true;
      }

      async function doMagicLink() {
        if (!aF.email) return;
        if (rateLimitSecs.value > 0) {
          authErr.value = `Please wait ${fCountdown(rateLimitSecs.value)} before requesting another link.`;
          return;
        }
        if (!checkAuthRateLimit()) return;
        loading.value = true; loadMsg.value = 'Sending magic link…';
        const { error } = await sb.auth.signInWithOtp({
          email: aF.email,
          options: { emailRedirectTo: window.location.origin + window.location.pathname }
        });
        loading.value = false;
        if (error) {
          const msg = error.message || '';
          if (msg.toLowerCase().includes('rate limit') || msg.toLowerCase().includes('too many') || msg.includes('429')) {
            startRateLimitCountdown(3600); // 1 hour Supabase limit
            authErr.value = '';  // clear -- we show the countdown UI instead
          } else {
            authErr.value = msg;
          }
          return;
        }
        magicSent.value = true;
      }

      async function doSignup() {
        if (!aF.email || !aF.password || !aF.full_name) return;
        if (!checkAuthRateLimit()) return;
        loading.value = true; loadMsg.value = 'Creating account…';
        const { data, error } = await sb.auth.signUp({ email: aF.email, password: aF.password });
        if (error) { loading.value = false; authErr.value = error.message; return; }
        if (data?.user) {
          await sb.from('users').insert({ id: data.user.id, email: aF.email, full_name: aF.full_name, phone: aF.phone||null, user_role: aF.user_role, user_type: aF.user_type, company_name: aF.company_name||null, created_at: new Date().toISOString() });
          await loadUserProfile(data.user.id);
          showAuth.value = false;
          await loadAll();
          await loadNotifications();
          if (isAdmin.value) { await loadAdminUsers(); await loadShoppers(); }
          // Start onboarding for new users
          startOnboarding();
        }
        loading.value = false;
      }

      async function doLogout() {
        await sb.auth.signOut();
        profile.value = null; notifications.value = []; allRequests.value = []; payments.value = []; addresses.value = [];
        showUserPanel.value = false; showProfileModal.value = false;
        tab.value = 'home';
        toast('info', 'Signed out');
      }

      async function loadUserProfile(userId) {
        try {
          const { data } = await sb.from('users').select('*').eq('id', userId).single();
          if (data) { profile.value = data; Object.assign(uF, { full_name: data.full_name||'', phone: data.phone||'', user_type: data.user_type||'individual', user_role: data.user_role||'buyer', company_name: data.company_name||'' }); }
        } catch {}
      }

      // ── 8. PROFILE & ADDRESSES ────────────────────────────────────
      // ── ONBOARDING ──

      function startOnboarding() {
        // Pre-fill what we know
        if (profile.value?.full_name) obF.full_name = profile.value.full_name;
        if (profile.value?.phone) obF.phone = profile.value.phone;
        onboardStep.value = 1;
        showOnboarding.value = true;
      }

      async function obSetRole(role) {
        await sb.from('users').update({ user_role: role, updated_at: new Date().toISOString() }).eq('id', profile.value.id);
        await loadUserProfile(profile.value.id);
        onboardStep.value = 2;
      }

      async function obSetType(type) {
        await sb.from('users').update({ user_type: type, updated_at: new Date().toISOString() }).eq('id', profile.value.id);
        await loadUserProfile(profile.value.id);
        onboardStep.value = 3;
      }

      function obHandleAvatar(e) {
        const file = e.target.files[0];
        if (!file) return;
        const allowed = ['image/jpeg','image/jpg','image/png','image/webp'];
        if (!allowed.includes(file.type)) { toast('err','Invalid type','Please upload a JPG or PNG'); return; }
        if (file.size > 3 * 1024 * 1024) { toast('err','Too large','Profile photo must be under 3MB'); return; }
        obF.avatar_file = file;
        const reader = new FileReader();
        reader.onload = ev => { obF.avatar_preview = ev.target.result; };
        reader.readAsDataURL(file);
      }

      async function obUploadAvatar() {
        if (!obF.avatar_file) return profile.value?.avatar_url || null;
        obF.avatar_uploading = true;
        try {
          const ext  = obF.avatar_file.name.split('.').pop();
          const path = `avatars/${profile.value.id}.${ext}`;
          await sb.storage.from('avatars').upload(path, obF.avatar_file, { upsert: true, cacheControl:'3600' });
          const { data } = sb.storage.from('avatars').getPublicUrl(path);
          obF.avatar_uploading = false;
          return data.publicUrl;
        } catch(e) { obF.avatar_uploading = false; console.error('Avatar upload:', e); return null; }
      }

      async function obSaveProfile() {
        if (!obF.full_name) return;
        const avatarUrl = await obUploadAvatar();
        const update = {
          full_name:  sanitize(obF.full_name, 100),
          phone:      obF.phone || null,
          updated_at: new Date().toISOString(),
        };
        if (avatarUrl) update.avatar_url = avatarUrl;
        await sb.from('users').update(update).eq('id', profile.value.id);
        await loadUserProfile(profile.value.id);
        onboardStep.value = 4;
      }

      async function obSaveRoleDetail() {
        const p = profile.value;
        const isSeller = ['seller','both'].includes(p?.user_role);
        const update = { updated_at: new Date().toISOString() };
        if (isSeller) {
          // Store seller details in company_name field (prefixed) + verification notes
          const existing = p.company_name?.replace(/^\[.*?\]/,'') || '';
          update.company_name = existing; // keep any existing verification prefix
        } else {
          // Buyer: store facility info in company_name
          if (obF.facility_type) update.company_name = obF.facility_type + (obF.bed_count ? ` (${obF.bed_count} beds)` : '');
        }
        await sb.from('users').update(update).eq('id', profile.value.id);
        await loadUserProfile(profile.value.id);
        showOnboarding.value = false;
        onboardStep.value = 0;
        onboardingDone.value = true;
        toast('ok', 'Profile complete!', 'Welcome to TechMedixLink');
        await loadAll();
        await loadNotifications();
        if (isAdmin.value) { await loadAdminUsers(); await loadShoppers(); }
        await loadAddresses();
      }

      function obSkip() {
        showOnboarding.value = false;
        onboardStep.value = 0;
      }

      // ── AVATAR upload for existing profile (not onboarding) ──
      async function handleAvatarChange(e) {
        const file = e.target.files[0];
        if (!file) return;
        const allowed = ['image/jpeg','image/jpg','image/png','image/webp'];
        if (!allowed.includes(file.type)) { toast('err','Invalid type','Please upload a JPG or PNG'); return; }
        if (file.size > 3 * 1024 * 1024) { toast('err','Too large','Profile photo must be under 3MB'); return; }
        loading.value = true; loadMsg.value = 'Uploading photo…';
        try {
          const ext  = file.name.split('.').pop();
          const path = `avatars/${profile.value.id}.${ext}`;
          await sb.storage.from('avatars').upload(path, file, { upsert:true, cacheControl:'3600' });
          const { data } = sb.storage.from('avatars').getPublicUrl(path);
          await sb.from('users').update({ avatar_url: data.publicUrl, updated_at: new Date().toISOString() }).eq('id', profile.value.id);
          await loadUserProfile(profile.value.id);
          toast('ok', 'Photo updated');
        } catch(e) { toast('err','Upload failed', e.message); }
        loading.value = false;
      }

      // ── PROFILE ──
      async function saveProfile() {
        if (!profile.value) return;
        const { error } = await sb.from('users').update({ full_name: uF.full_name, phone: uF.phone, user_type: uF.user_type, user_role: uF.user_role, company_name: uF.company_name, updated_at: new Date().toISOString() }).eq('id', profile.value.id);
        if (error) { toast('err','Error',error.message); return; }
        await loadUserProfile(profile.value.id);
        showProfileModal.value = false;
        toast('ok', 'Profile updated');
      }

      async function clickNotification(n) {
        // Mark this notification as read
        if (!n.is_read) {
          await sb.from('notifications').update({
            is_read: true,
            read_at: new Date().toISOString()
          }).eq('id', n.id);
          await loadNotifications();
        }
        showNotifPanel.value = false;
        // Navigate to related request if available
        if (n.request_id) {
          // Find the request and open detail modal
          const req = allRequests.value.find(r => r.id === n.request_id);
          if (req) {
            openDetailModal(req);
          } else {
            // Not loaded yet -- navigate to my-requests tab
            goTab('my-requests');
          }
        } else if (n.action_url) {
          window.location.href = n.action_url;
        }
      }

      async function markAllRead() {
        if (!profile.value) return;
        await sb.from('notifications').update({ is_read:true, read_at:new Date().toISOString() }).eq('user_id', profile.value.id).eq('is_read', false);
        await loadNotifications();
      }

      // ── ADDRESSES ──
      async function saveAddress() {
        if (!profile.value || !addrF.region) return;
        const { error } = await sb.from('addresses').insert({
          user_id:    profile.value.id,
          address_type: addrF.address_type || 'home',
          region:     sanitize(addrF.region, 100),
          district:   sanitize(addrF.district, 100) || null,
          street:     sanitize(addrF.street, 200) || null,
          landmark:   sanitize(addrF.landmark, 200) || null,
          is_default: addrF.is_default || false,
          created_at: new Date().toISOString()
        });
        if (error) { toast('err', 'Error', error.message); return; }
        await loadAddresses();
        Object.assign(addrF, { address_type:'home', region:'', district:'', street:'', landmark:'', is_default:false });
        addingAddress.value = false;
        toast('ok', 'Address saved');
      }

      async function deleteAddress(id) {
        await sb.from('addresses').delete().eq('id', id);
        await loadAddresses();
      }

      // ── PLATFORM ──
      function setPlatform(p) {
        platform.value = p;
        document.documentElement.setAttribute('data-platform', p);
        if (p === 'techmedix') prodFilter.value = 'techmedix';
        else prodFilter.value = 'globaldoor';
        tab.value = 'browse';
        sidebarOpen.value = false;
      }

      function goTab(t) { tab.value = t; sidebarOpen.value = false; closeAllMenus(); if (t==='analytics') nextTick(()=>loadAnalytics()); if (t==='seller-analytics') nextTick(()=>loadSellerAnalytics()); if (t==='shoppers') loadShoppers(); if (t==='admin-users'||t==='admin-listings') { loadAdminUsers(); loadProds(); } }

      function primaryAction() {
        if (!profile.value) { showAuth.value = true; return; }
        if (canBuy.value) { showReqModal.value = true; return; }
        if (canSell.value) { openListingModal(); return; }
        goTab('browse');
      }

      function performSearch() { if (globalSearch.value) { prodSearch.value = globalSearch.value; goTab('browse'); } }

      function closeAllMenus() { showNotifPanel.value = false; showUserPanel.value = false; openStatusMenu.value = null; }

      function togglePanel(which) {
        if (which === 'notif') { showNotifPanel.value = !showNotifPanel.value; showUserPanel.value = false; }
        else { showUserPanel.value = !showUserPanel.value; showNotifPanel.value = false; }
      }

      // ── 9. PRODUCTS / LISTINGS ──────────────────────────────────
      // ── LISTINGS ──
      function openListingModal(prod = null) {
        editingProd.value = prod;
        if (prod) { Object.assign(pF, { name:prod.name||'', manufacturer:prod.manufacturer||'', platform_type:prod.platform_type||'techmedix', product_type:prod.product_type||'medical_device', description:prod.description||'', base_price_usd:prod.base_price_usd||0, stock_quantity:prod.stock_quantity||0, warranty_months:prod.warranty_months||12, country:prod.country||'Tanzania', import_duty_percent:prod.import_duty_percent||0, estimated_weight_kg:prod.estimated_weight_kg||0, seller_name:prod.seller_name||'', tmda_certified:prod.tmda_certified||false, requires_installation:prod.requires_installation||false, requires_training:prod.requires_training||false, is_active:prod.is_active!==false, image_url:prod.image_url||'', imagePreview:prod.image_url||'', imageFile:null, uploading:false }); }
        else { resetPF(); }
        showListingModal.value = true;
      }

      function closeListing() { showListingModal.value = false; editingProd.value = null; resetPF(); }

      function resetPF() { Object.assign(pF, { name:'', manufacturer:'', platform_type:'techmedix', product_type:'medical_device', description:'', base_price_usd:0, stock_quantity:0, warranty_months:12, country:'Tanzania', import_duty_percent:0, estimated_weight_kg:0, seller_name:profile.value?.full_name||'', tmda_certified:false, requires_installation:false, requires_training:false, is_active:true, image_url:'', imagePreview:'', imageFile:null, uploading:false }); }

      function handleImageChange(e) {
        const file = e.target.files[0];
        if (!file) return;
        // Validate file type
        const allowedTypes = ['image/jpeg','image/jpg','image/png','image/webp','image/gif'];
        if (!allowedTypes.includes(file.type)) {
          toast('err','Invalid file type','Please upload a JPG, PNG, WebP, or GIF image.');
          e.target.value = '';
          return;
        }
        // Validate file size (max 5MB)
        const maxSize = 5 * 1024 * 1024; // 5MB in bytes
        if (file.size > maxSize) {
          toast('err','File too large',`Image must be under 5MB. Your file is ${(file.size/1024/1024).toFixed(1)}MB.`);
          e.target.value = '';
          return;
        }
        pF.imageFile = file;
        pF.imageSize = (file.size / 1024).toFixed(0) + 'KB';
        const reader = new FileReader();
        reader.onload = ev => { pF.imagePreview = ev.target.result; };
        reader.readAsDataURL(file);
      }

      async function uploadProductImage() {
        if (!pF.imageFile) return pF.image_url || '';
        pF.uploading = true;
        try {
          const ext  = pF.imageFile.name.split('.').pop();
          const path = `products/${Date.now()}.${ext}`;
          const { error: upErr } = await sb.storage.from('products').upload(path, pF.imageFile, { cacheControl:'3600', upsert:false });
          if (upErr) throw upErr;
          const { data } = sb.storage.from('products').getPublicUrl(path);
          pF.uploading = false;
          return data.publicUrl;
        } catch (e) { pF.uploading = false; console.error('Image upload failed:', e); return pF.image_url || ''; }
      }

      async function saveListing() {
        if (!pF.name || !pF.base_price_usd) return;
        loading.value = true; loadMsg.value = 'Saving listing…';
        const imageUrl = await uploadProductImage();
        const payload = { name:sanitize(pF.name,200), manufacturer:sanitize(pF.manufacturer,200), model_url:pF.model_url||null, platform_type:pF.platform_type, product_type:pF.product_type, description:sanitize(pF.description,2000), base_price_usd:pF.base_price_usd, stock_quantity:pF.stock_quantity, warranty_months:pF.warranty_months, country:pF.country, import_duty_percent:pF.import_duty_percent, estimated_weight_kg:pF.estimated_weight_kg, seller_name:pF.seller_name||profile.value?.full_name, tmda_certified:pF.tmda_certified, requires_installation:pF.requires_installation, requires_training:pF.requires_training, is_active:pF.is_active, image_url:imageUrl||null, updated_at:new Date().toISOString() };
        let error;
        if (editingProd.value) { ({ error } = await sb.from('products').update(payload).eq('id', editingProd.value.id)); }
        else { ({ error } = await sb.from('products').insert({ ...payload, user_id:profile.value.id, created_at:new Date().toISOString() })); }
        loading.value = false;
        if (error) { toast('err','Error',error.message); return; }
        await loadProds();
        closeListing();
        toast('ok', editingProd.value?'Product updated':'Product listed');
      }

      async function toggleListingStatus(p) {
        const { error } = await sb.from('products').update({ is_active: !p.is_active, updated_at: new Date().toISOString() }).eq('id', p.id);
        if (!error) { await loadProds(); toast('ok', p.is_active?'Product hidden':'Product activated'); }
      }

      function askDeleteProduct(p) {
        confirm.value = { title:'Delete Product', msg:`Permanently delete "${p.name}"? This cannot be undone.`, tone:'er', icon:'fas fa-trash', ok_lbl:'Delete', ok: () => deleteProduct(p.id) };
        if (showListingModal.value) closeListing();
      }

      async function deleteProduct(id) {
        // Allow: product owner OR admin
        const product = products.value.find(p => p.id === id);
        const isOwner = product?.user_id === profile.value?.id;
        if (!isOwner) {
          const ok = await verifyAdminServer();
          if (!ok) { toast('err', 'Unauthorised', 'You can only delete your own products.'); return; }
        }
        const { error } = await sb.from('products').delete().eq('id', id);
        if (error) { toast('err', 'Error', error.message); return; }
        await loadProds();
        toast('ok', 'Product deleted');
      }

      // ── 10. REQUESTS ─────────────────────────────────────────────
      // ── BASKET ──
      function addToBasket(p) {
        if (!profile.value) { showAuth.value = true; return; }
        const existing = basket.value.find(b => b.product.id === p.id);
        if (existing) { existing.quantity++; toast('ok', 'Quantity updated', p.name); }
        else { basket.value.push({ product:p, quantity:1, notes:'' }); toast('ok', 'Added to basket', p.name); }
        showBasket.value = true;
      }

      function removeFromBasket(idx) { basket.value.splice(idx,1); }


      async function submitBasket() {
        if (!basket.value.length || !profile.value) return;
        loading.value = true; loadMsg.value = 'Submitting basket…';
        const prefix = 'TML';
        const request_number = prefix+'-'+new Date().getFullYear()+'-'+Math.random().toString(36).slice(2,8).toUpperCase();
        const { data: reqData, error: reqErr } = await sb.from('requests').insert({
          user_id: profile.value.id, platform_type: 'techmedix',
          request_number, status: 'pending', urgency: 'normal',
          source_type: 'catalog',
          total_cost: basketTotal.value, deposit_paid: 0, balance_due: basketTotal.value,
          payment_status: 'pending', currency: 'TZS',
          source_notes: 'Procurement basket: '+basket.value.length+' items',
          created_at: new Date().toISOString(), updated_at: new Date().toISOString()
        }).select().single();
        if (reqErr) { loading.value=false; toast('err','Error',reqErr.message); return; }
        // Insert all items
        for (const b of basket.value) {
          await sb.from('request_items').insert({
            request_id: reqData.id,
            product_id: b.product.id,
            product_name: b.product.name,
            quantity: b.quantity,
            unit_price: Math.round(b.product.base_price_usd * usdToTzs.value),
            total_price: Math.round(b.product.base_price_usd * b.quantity * usdToTzs.value),
            created_at: new Date().toISOString()
          });
        }
        await sb.from('tracking_events').insert({
          request_id: reqData.id, event_type:'order_placed', event_status:'completed',
          description: 'Procurement basket submitted: '+basket.value.length+' items',
          location:'TechMedixLink Platform', event_time:new Date().toISOString(), created_at:new Date().toISOString()
        });
        await createNotification(profile.value.id,'status_update','Basket Submitted','Your procurement request '+request_number+' has been submitted.',reqData.id,'in_app');
        basket.value = []; showBasket.value = false;
        loading.value = false;
        await loadReqs(); await loadProds();
        tab.value = 'my-requests';
        toast('ok','Basket submitted!', request_number);
      }

      // ── REQUESTS ──
      function quickRequest(p) {
        if (!profile.value) { showAuth.value = true; return; }
        rF.product_id = p.id;
        rF.platform_type = p.platform_type === 'both' ? 'techmedix' : (p.platform_type || 'techmedix');
        showReqModal.value = true;
      }

      async function saveReq() {
        const isCatalog = rF.source_type === 'catalog';
        const isCustom  = rF.source_type === 'manual';
        const isLink    = rF.source_type === 'link';
        if (isCatalog && !rF.product_id) return;
        if (isCustom && !rF.custom_name) return;
        if (isLink && !rF.source_url) return;
        if (!rF.quantity || !profile.value) return;
        loading.value = true; loadMsg.value = 'Submitting request…';
        const p = selectedProduct.value;
        const est = isCatalog ? reqCostEstimate.value : { items:0, shipping:0, duty:0, fee:0, total:0 };
        const numId = Math.random().toString(36).slice(2,8).toUpperCase();
        const prefix = rF.platform_type === 'techmedix' ? 'TML' : 'GDR';
        const request_number = `${prefix}-${new Date().getFullYear()}-${numId}`;
        const sourceNotes = [
          rF.notes,
          isCustom ? `ITEM: ${rF.custom_name}\nSPECS: ${rF.custom_desc}` : '',
          isLink   ? `PRODUCT LINK: ${rF.source_url}\nNOTES: ${rF.custom_desc}` : ''
        ].filter(Boolean).join('\n\n');
        const { data: reqData, error: reqErr } = await sb.from('requests').insert({
          user_id: profile.value.id, platform_type: rF.platform_type,
          request_number, status: isCatalog ? 'pending' : 'submitted',
          urgency: rF.urgency,
          source_type: rF.source_type,
          source_url: rF.source_url || null,
          source_notes: sourceNotes || null,
          item_cost: est.items, shipping_cost: est.shipping,
          duty_cost: est.duty, service_fee: est.fee,
          total_cost: est.total, deposit_paid: 0,
          balance_due: est.total,
          payment_status: 'pending', currency: 'TZS',
          created_at: new Date().toISOString(), updated_at: new Date().toISOString()
        }).select().single();
        if (reqErr) { loading.value = false; toast('err','Error',reqErr.message); return; }
        // Insert item -- catalog uses product_id, custom/link uses product_name only
        await sb.from('request_items').insert({
          request_id: reqData.id,
          product_id: isCatalog ? p.id : null,
          product_name: isCatalog ? p.name : (rF.custom_name || rF.source_url?.slice(0,80) || 'Custom Item'),
          product_description: isCustom ? rF.custom_desc : (isLink ? rF.source_url : null),
          quantity: rF.quantity,
          unit_price: isCatalog ? Math.round(p.base_price_usd * usdToTzs.value) : 0,
          total_price: isCatalog ? Math.round(p.base_price_usd * rF.quantity * usdToTzs.value) : 0,
          created_at: new Date().toISOString()
        });
        await sb.from('tracking_events').insert({
          request_id: reqData.id, event_type:'order_placed', event_status:'completed',
          description: `Request ${request_number} submitted via ${rF.source_type === 'catalog' ? 'catalogue' : rF.source_type === 'link' ? 'product link' : 'custom request'}`,
          location:'TechMedixLink Platform', event_time: new Date().toISOString(), created_at: new Date().toISOString()
        });
        // Do NOT deduct inventory at submission -- deduct when deposit is paid
        // (prevents stock going negative if buyer submits then cancels)
        await loadReqs();
        await loadPayments();
        await loadProds();
        loading.value = false;
        showReqModal.value = false;
        Object.assign(rF, { platform_type:'techmedix', product_id:'', quantity:1, urgency:'normal', notes:'', source_type:'catalog', address_id:'', custom_name:'', custom_desc:'', source_url:'' });
        // Notify buyer confirmation + notify admins
        await createNotification(profile.value.id, 'status_update', 'Request Submitted', `Your request ${request_number} has been submitted and is under review.`, reqData.id, 'in_app');
        // Notify all admins (load admin users list for email)
        try {
          const { data: admins } = await sb.from('users').select('id').eq('user_role','admin');
          for (const admin of (admins||[])) {
            await createNotification(admin.id, 'status_update', 'New Request Received', `New request ${request_number} requires review.`, reqData.id, 'in_app');
          }
        } catch {}
        toast('ok','Request submitted', request_number);
        tab.value = 'my-requests';
      }

      function toggleStatusMenu(id) { openStatusMenu.value = openStatusMenu.value === id ? null : id; }

      async function updateStatus(r, newStatus) {
        openStatusMenu.value = null;
        if (isAdmin.value) {
          const ok = await verifyAdminServer();
          if (!ok) { toast('err','Unauthorised','Admin access required'); return; }
        }
        const { error } = await sb.from('requests').update({ status: newStatus, updated_at: new Date().toISOString() }).eq('id', r.id);
        if (error) { toast('err','Error',error.message); return; }
        await sb.from('tracking_events').insert({ request_id: r.id, event_type:'status_update', event_status:'completed', description:`Status updated to: ${fStatus(newStatus)}`, event_time: new Date().toISOString(), created_at: new Date().toISOString() });
        // Notify the request owner about status change
        if (r.user_id) {
          await createNotification(r.user_id, 'status_update',
            `Order Update: ${fStatus(newStatus)}`,
            `Your request ${r.request_number} has been updated to: ${fStatus(newStatus)}.`,
            r.id, 'in_app');
        }
        await loadReqs();
        try {
          const { data: buyerD } = await sb.from('users').select('phone,full_name').eq('id', r.user_id).single();
          if (buyerD?.phone && ['shipped','delivered','customs_clearance'].includes(newStatus)) {
            const msg = newStatus==='shipped'?`Bidhaa yako imesafirishwa! Ref: ${r.request_number}`:
                        newStatus==='customs_clearance'?`Bidhaa ipo customs. Ref: ${r.request_number}`:
                        `Bidhaa imefika! Thibitisha kupokea. Ref: ${r.request_number}`;
            await sendWhatsApp(buyerD.phone, `TechMedixLink: ${msg}`);
          }
        } catch {}
        toast('ok', 'Status updated', fStatus(newStatus));
      }

      async function fetchTracking() {
        if (!trackId.value.trim()) return;
        loading.value = true; loadMsg.value = 'Searching…';
        const { data, error } = await sb.from('requests').select('*, tracking_events(*), items:request_items(*)').eq('request_number', trackId.value.trim().toUpperCase()).single();
        loading.value = false;
        if (error || !data) { trackedReq.value = null; toast('warn','Not found','Check request number and try again'); return; }
        if (data.tracking_events) data.tracking_events.sort((a,b) => new Date(a.event_time) - new Date(b.event_time));
        trackedReq.value = data;
      }

      function doTrack(num) { tab.value = 'tracking'; trackId.value = num; trackedReq.value = null; nextTick(fetchTracking); }

      async function openDetailModal(r) {
        let req = { ...r };
        if (!req.tracking_events) {
          const { data } = await sb.from('tracking_events').select('*').eq('request_id', r.id).order('event_time', { ascending: true });
          req.tracking_events = data || [];
        }
        if (!req.items) {
          const { data } = await sb.from('request_items').select('*').eq('request_id', r.id);
          req.items = data || [];
        }
        // Fetch shopper assignment from shopper_assignments table
        try {
          const { data: assignments } = await sb.from('shopper_assignments')
            .select('*, shopper:shopper_id(*)')
            .eq('request_id', r.id)
            .in('status', ['assigned','accepted','in_progress'])
            .order('assigned_at', { ascending: false })
            .limit(1);
          if (assignments?.length) {
            const asgn = assignments[0];
            req.shopper_name   = asgn.shopper?.full_name || '';
            req.shopper_avatar = asgn.shopper?.user_id ? (await sb.from('users').select('avatar_url').eq('id', asgn.shopper.user_id).single()).data?.avatar_url || null : null;
            req.shopper_phone  = asgn.shopper?.phone || '';
            req.shopper_city = asgn.shopper?.city || '';
            req.shopper_type = asgn.shopper?.shopper_type || '';
            req.shopper_rating = asgn.shopper?.rating || 0;
            req.assignment_type = asgn.assignment_type || '';
            req.assignment_status = asgn.status || '';
            req.shopper_assignment_id = asgn.id || null;
          }
        } catch(e) { console.error('shopper fetch:', e); }
        detailReq.value = req;
        assignShopperId.value = '';
        // Load reviews for items in this request
        if (req.items?.length && req.items[0]?.product_id) {
          loadProductReviews(req.items[0].product_id);
        } else {
          productReviews.value = [];
        }
      }

      // ── 11. PAYMENTS ─────────────────────────────────────────────
      // ── PAYMENT VALIDATION ──
      function validateMpesaRef(ref) {
        // M-Pesa Tanzania refs: alphanumeric, 8-12 chars (e.g. QJ12AB3456)
        if (!ref) return true; // optional
        return /^[A-Z0-9]{8,12}$/.test(ref.toUpperCase());
      }

      // ── CANCELLATION ──
      function askCancelRequest(r) {
        cancelReq.value = r;
        cancelReason.value = '';
        showCancelModal.value = true;
      }

      async function doCancel() {
        if (!cancelReq.value) return;
        loading.value = true; loadMsg.value = 'Cancelling request…';
        const reason = cancelReason.value || 'Cancelled by buyer';
        const { error } = await sb.from('requests').update({ 
          status: 'cancelled',
          source_notes: (cancelReq.value.source_notes ? cancelReq.value.source_notes + '\n\n' : '') + 'CANCELLATION REASON: ' + reason,
          updated_at: new Date().toISOString()
        }).eq('id', cancelReq.value.id);
        if (error) { loading.value = false; toast('err','Error',error.message); return; }
        await sb.from('tracking_events').insert({ 
          request_id: cancelReq.value.id, 
          event_type: 'order_placed',
          event_status: 'failed',
          description: 'Request cancelled by buyer. Reason: ' + reason,
          location: 'TechMedixLink Platform',
          event_time: new Date().toISOString(), 
          created_at: new Date().toISOString() 
        });
        await loadReqs();
        loading.value = false;
        showCancelModal.value = false;
        cancelReq.value = null;
        toast('warn', 'Request cancelled', reason);
      }

      // ── PAYMENTS ──
      function askPayment(r) {
        paymentReq.value = r;
        // Smart defaults: if partially paid → balance type, otherwise deposit
        const alreadyPaid = r.deposit_paid || 0;
        pmtF.type    = alreadyPaid > 0 ? 'balance' : 'deposit';
        pmtF.amount  = r.balance_due || 0;
        pmtF.method  = 'mpesa';
        pmtF.reference = '';
        pmtF.notes   = '';
        pmtF.phone   = profile.value?.phone || '';
      }

      async function doPayment(r) {
        if (!pmtF.amount || pmtF.amount <= 0) { toast('err','Invalid amount','Enter a valid payment amount'); return; }
        // Validate M-Pesa reference format if provided
        if (pmtF.method === 'mpesa' && pmtF.reference && !validateMpesaRef(pmtF.reference)) {
          toast('err','Invalid reference','M-Pesa reference should be 8-12 alphanumeric characters (e.g. QJ12AB3456)');
          return;
        }
        // Prevent overpayment
        if (pmtF.amount > (r.balance_due || 0) + 1) {
          toast('warn','Overpayment warning',`Amount exceeds balance due of ${tzs(r.balance_due)}`);
        }
        loading.value = true; loadMsg.value = 'Recording payment…';
        const newDeposit   = (r.deposit_paid||0) + pmtF.amount;
        const newBalance   = Math.max(0, (r.total_cost||0) - newDeposit);
        const newPayStatus = newBalance <= 0 ? 'paid' : 'partial';
        // Payment status: admin-recorded = completed; self-reported mpesa = pending verification
        const payStatus = isAdmin.value ? 'completed' : 'pending';
        const { data: payData, error: payErr } = await sb.from('payments').insert({
          request_id: r.id,
          user_id: r.user_id,
          amount: pmtF.amount,
          payment_method: pmtF.method,
          payment_type: pmtF.type,
          status: payStatus,
          currency: 'TZS',
          mpesa_reference: pmtF.reference ? pmtF.reference.toUpperCase() : null,
          mpesa_phone: pmtF.phone || null,
          notes: sanitize(pmtF.notes, 500) || null,
          payment_date: new Date().toISOString(),
          created_at: new Date().toISOString()
        }).select().single();
        if (payErr) { loading.value = false; toast('err','Error',payErr.message); return; }
        // Only update request financials if admin-confirmed
        if (isAdmin.value) {
          await sb.from('requests').update({
            deposit_paid: newDeposit,
            balance_due: newBalance,
            payment_status: newPayStatus,
            status: ['pending','processing','quoted'].includes(r.status) ? 'deposit_paid' : r.status,
            updated_at: new Date().toISOString()
          }).eq('id', r.id);
          // Deduct stock NOW -- only when payment is admin-confirmed
          const reqItems = (await sb.from('request_items').select('product_id,quantity').eq('request_id',r.id)).data || [];
          for (const item of reqItems) {
            if (!item.product_id) continue;
            const { data: prod } = await sb.from('products').select('stock_quantity').eq('id',item.product_id).single();
            if (prod) {
              await sb.from('products').update({
                stock_quantity: Math.max(0,(prod.stock_quantity||0)-item.quantity),
                updated_at: new Date().toISOString()
              }).eq('id',item.product_id);
            }
          }
        }
        await sb.from('tracking_events').insert({
          request_id: r.id,
          event_type: 'payment_received',
          event_status: isAdmin.value ? 'completed' : 'pending',
          description: `Payment of ${tzs(pmtF.amount)} ${isAdmin.value ? 'confirmed' : 'reported'} via ${pmtF.method?.replace(/_/g,' ')}${pmtF.reference ? ' · Ref: ' + pmtF.reference.toUpperCase() : ''}`,
          location: 'TechMedixLink Platform',
          event_time: new Date().toISOString(),
          created_at: new Date().toISOString()
        });
        await loadReqs();
        await loadPayments();
        loading.value = false;
        paymentReq.value = null;
        // Send notifications
        const payMsg = isAdmin.value
          ? `Payment of ${tzs(pmtF.amount)} confirmed for request ${r.request_number}.`
          : `Your payment of ${tzs(pmtF.amount)} for ${r.request_number} has been received and is pending verification.`;
        await createNotification(r.user_id, 'payment_received', isAdmin.value ? 'Payment Confirmed' : 'Payment Received', payMsg, r.id, 'in_app');
        if (isAdmin.value) {
          toast('ok', 'Payment confirmed', tzs(pmtF.amount));
        } else {
          toast('info', 'Payment submitted for verification', 'Admin will confirm within 24 hours. Reference: ' + (pmtF.reference || 'N/A'));
        }
      }

      // ── 12. QUOTES ──────────────────────────────────────────────
      // ── QUOTATION ──
      function openQuoteModal(r) {
        quoteReq.value = r;
        const est = { item_cost: r.item_cost||0, shipping_cost: r.shipping_cost||0, duty_cost: r.duty_cost||0, service_fee: r.service_fee||0 };
        Object.assign(qF, { item_cost:est.item_cost, shipping_cost:est.shipping_cost, duty_cost:est.duty_cost, service_fee:est.service_fee, delivery_date:'', notes:'' });
        showQuoteModal.value = true;
      }

      async function sendQuote() {
        if (!quoteReq.value || !qF.item_cost) return;
        loading.value = true; loadMsg.value = 'Sending quote…';
        const total = (qF.item_cost||0)+(qF.shipping_cost||0)+(qF.duty_cost||0)+(qF.service_fee||0);
        const { error } = await sb.from('requests').update({ status:'quoted', item_cost:qF.item_cost, shipping_cost:qF.shipping_cost, duty_cost:qF.duty_cost, service_fee:qF.service_fee, total_cost:total, balance_due:Math.max(0,total-(quoteReq.value.deposit_paid||0)), expected_delivery_date:qF.delivery_date||null, updated_at:new Date().toISOString() }).eq('id', quoteReq.value.id);
        if (error) { loading.value = false; toast('err','Error',error.message); return; }
        await sb.from('tracking_events').insert({ request_id:quoteReq.value.id, event_type:'quote_sent', event_status:'completed', description:`Quote of ${tzs(total)} sent to buyer. Notes: ${qF.notes||'None'}`, event_time:new Date().toISOString(), created_at:new Date().toISOString() });
        await loadReqs();
        loading.value = false;
        showQuoteModal.value = false;
        quoteReq.value = null;
        // Notify buyer that quote is ready
        if (quoteReq.value?.user_id) {
          await createNotification(quoteReq.value.user_id, 'payment_required', 'Quote Ready for Review', `Your quote for ${quoteReq.value.request_number} is ready. Total: ${tzs(total)}. Please review and accept or decline.`, quoteReq.value.id, 'in_app');
          // Also create email channel notification for Edge Function pickup
          await createNotification(quoteReq.value.user_id, 'payment_required', 'Your Quote is Ready -- TechMedixLink', `Dear customer, your quote for request ${quoteReq.value.request_number} has been prepared. Total amount: ${tzs(total)}. Log in to TechMedixLink to accept or decline.`, quoteReq.value.id, 'email');
        }
        try {
          const { data: buyerD } = await sb.from('users').select('phone,full_name').eq('id', quoteReq.value?.user_id).single();
          if (buyerD?.phone) await sendWhatsApp(buyerD.phone,
            `TechMedixLink: Habari ${buyerD.full_name||''}! Quotation yako iko tayari. Nambari: ${quoteReq.value?.request_number}`);
        } catch {}
        toast('ok','Quote sent to buyer');
      }

      async function acceptQuote(r) {
        // Status stays 'quoted' -- only moves to deposit_paid after admin confirms payment
        // Just open the payment modal so buyer can submit their M-Pesa reference
        askPayment(r);
        toast('ok', 'Quote accepted! Complete your deposit below to begin sourcing.');
      }

      async function confirmReceipt(r) {
        confirm.value = {
          title: 'Confirm Delivery',
          msg: 'Confirm that you have received your order in good condition? This will complete the request and prompt you to leave a review.',
          tone: 'ok', icon: 'fas fa-box-open', ok_lbl: 'Confirm Receipt',
          ok: async () => {
            await sb.from('requests').update({
              status: 'completed',
              actual_delivery_date: new Date().toISOString().split('T')[0],
              updated_at: new Date().toISOString()
            }).eq('id', r.id);
            await sb.from('tracking_events').insert({
              request_id: r.id, event_type: 'delivered', event_status: 'completed',
              description: 'Delivery confirmed by buyer.',
              location: 'Buyer confirmed', event_time: new Date().toISOString(), created_at: new Date().toISOString()
            });
            await loadReqs();
            // Open review modal
            const updated = allRequests.value.find(req => req.id === r.id);
            if (updated) openReviewModal(updated);
            toast('ok', 'Receipt confirmed!', 'Thank you -- please leave a review.');
          }
        };
      }

      async function declineQuote(r) {
        confirm.value = { title:'Decline Quote', msg:'Are you sure you want to decline this quote? The request will be cancelled.', tone:'er', icon:'fas fa-times', ok_lbl:'Decline Quote', ok: async () => { await updateStatus(r, 'cancelled'); toast('info','Quote declined'); } };
      }

      // ── 13. REVIEWS ─────────────────────────────────────────────
      // ── REVIEWS ──
      function openReviewModal(r) { reviewReq.value = r; reviewF.rating = 0; reviewF.title = ''; reviewF.body = ''; showReviewModal.value = true; }

      async function openProductDetail(p) {
        viewedProduct.value = p;
        showProductDetail.value = true;
        pd3dMode.value = false;   // always start in photo mode
        pdReviews.value = [];
        pdLoading.value = true;
        try {
          const { data: rvData } = await sb.from('reviews')
            .select('*')
            .eq('reviewed_entity_type', 'product')
            .eq('reviewed_entity_id', p.id)
            .order('created_at', { ascending: false })
            .limit(10);
          if (rvData?.length) {
            const userIds = [...new Set(rvData.map(r => r.user_id).filter(Boolean))];
            const { data: usersData } = await sb.from('users')
              .select('id, full_name, avatar_url')
              .in('id', userIds);
            const userMap = Object.fromEntries((usersData||[]).map(u => [u.id, u]));
            pdReviews.value = rvData.map(r => ({ ...r, user: userMap[r.user_id] || null }));
          } else {
            pdReviews.value = [];
          }
        } catch(e) { console.error('pdReviews:', e); }
        pdLoading.value = false;
      }

      async function loadProductReviews(productId) {
        try {
          const { data: rvData } = await sb.from('reviews')
            .select('*')
            .eq('reviewed_entity_type', 'product')
            .eq('reviewed_entity_id', productId)
            .order('created_at', { ascending: false });
          if (rvData?.length) {
            const userIds = [...new Set(rvData.map(r => r.user_id).filter(Boolean))];
            const { data: usersData } = await sb.from('users')
              .select('id, full_name, avatar_url')
              .in('id', userIds);
            const userMap = Object.fromEntries((usersData||[]).map(u => [u.id, u]));
            productReviews.value = rvData.map(r => ({ ...r, user: userMap[r.user_id] || null }));
          } else {
            productReviews.value = [];
          }
        } catch(e) { console.error('loadProductReviews:', e); }
      }

      async function saveReview() {
        if (!reviewReq.value || !reviewF.rating || !profile.value) return;
        const items     = reviewReq.value.items || [];
        const productId = items[0]?.product_id || null;
        // Combine title + body into review_text (schema has single text field)
        const reviewText = [reviewF.title, reviewF.body].filter(Boolean).join('\n\n') || null;
        const { error } = await sb.from('reviews').insert({
          user_id:              profile.value.id,
          request_id:           reviewReq.value.id,
          rating:               reviewF.rating,
          review_text:          reviewText,
          reviewed_entity_type: 'product',
          reviewed_entity_id:   productId,
          is_verified_purchase: true,
          created_at:           new Date().toISOString(),
          updated_at:           new Date().toISOString()
        });
        if (error) { toast('err', 'Error', error.message); return; }
        showReviewModal.value = false;
        reviewF.rating = 0; reviewF.title = ''; reviewF.body = '';
        toast('ok', 'Review submitted', 'Thank you for your feedback!');
      }

      // ── 14. SHOPPERS ────────────────────────────────────────────
      // ── SHOPPERS ──
      function openShopperModal(sh = null) { editingShopper.value = sh; if (sh) Object.assign(shF, { full_name:sh.full_name||'', phone:sh.phone||'', city:sh.city||'', country:sh.country||'Tanzania', specialization:sh.specialization||'', is_active:sh.is_active!==false }); else Object.assign(shF, { full_name:'', phone:'', city:'', country:'Tanzania', specialization:'', is_active:true }); showShopperModal.value = true; }

      async function saveShopper() {
        if (!shF.full_name) return;
        const payload = { full_name:shF.full_name, phone:shF.phone||null, city:shF.city, country:shF.country, specialization:shF.specialization||null, is_active:shF.is_active };
        let error;
        if (editingShopper.value) { ({ error } = await sb.from('shoppers').update({ ...payload, updated_at:new Date().toISOString() }).eq('id', editingShopper.value.id)); }
        else { ({ error } = await sb.from('shoppers').insert({ ...payload, created_at:new Date().toISOString() })); }
        if (error) { toast('err','Error',error.message); return; }
        await loadShoppers();
        showShopperModal.value = false;
        toast('ok', editingShopper.value?'Shopper updated':'Shopper added');
      }

      async function updateShopperStatus(r, newStatus) {
        if (!r.shopper_assignment_id) return;
        const { error } = await sb.from('shopper_assignments').update({
          status: newStatus,
          ...(newStatus==='accepted' ? {accepted_at: new Date().toISOString()} : {}),
          ...(newStatus==='completed' ? {completed_at: new Date().toISOString()} : {}),
        }).eq('id', r.shopper_assignment_id);
        if (!error) {
          await loadReqs();
          toast('ok','Shopper status updated', newStatus);
        }
      }

      async function assignShopper(r) {
        if (!assignShopperId.value) return;
        const sh = shoppers.value.find(s => s.id === assignShopperId.value);
        const { error } = await sb.from('requests').update({ shopper_id:assignShopperId.value, updated_at:new Date().toISOString() }).eq('id', r.id);
        if (error) { toast('err','Error',error.message); return; }
        if (detailReq.value?.id === r.id) { detailReq.value = { ...detailReq.value, shopper_name:sh?.full_name, shopper_phone:sh?.phone, shopper_id:assignShopperId.value }; }
        await loadReqs();
        toast('ok','Shopper assigned', sh?.full_name||'');
        assignShopperId.value = '';
      }

      // ── SELLER INQUIRY ACTIONS ──
      async function openInquiryDetail(r) {
        let req = { ...r };
        if (!req.items) {
          const { data } = await sb.from('request_items').select('*').eq('request_id', r.id);
          req.items = data || [];
        }
        inquiryReq.value = req;
        showInquiryDetail.value = true;
      }

      async function acceptInquiry(r) {
        const { error } = await sb.from('requests').update({
          status: 'submitted',   // submitted = seller acknowledged
          updated_at: new Date().toISOString()
        }).eq('id', r.id);
        if (error) { toast('err','Error',error.message); return; }
        await sb.from('tracking_events').insert({
          request_id: r.id, event_type: 'processing', event_status: 'completed',
          description: 'Inquiry accepted by seller. Quote will be provided shortly.',
          event_time: new Date().toISOString(), created_at: new Date().toISOString()
        });
        // Notify buyer
        if (r.user_id) await createNotification(r.user_id,'status_update',
          'Inquiry Accepted',
          'Your inquiry '+r.request_number+' has been accepted. A quote is being prepared.',
          r.id, 'in_app');
        await loadReqs();
        toast('ok','Inquiry accepted', 'Buyer notified. Please send a quote.');
      }

      async function acknowledgeInquiry(r) {
        // Seller acknowledges -- moves to quoted state, opens quote modal
        showInquiryDetail.value = false;
        inquiryReq.value = null;
        openQuoteModal(r);
      }

      async function declineInquiry(r) {
        confirm.value = {
          title: 'Decline Inquiry',
          msg: `Decline the inquiry ${r.request_number}? The buyer will be notified that this item is unavailable.`,
          tone: 'er', icon: 'fas fa-times-circle', ok_lbl: 'Decline',
          ok: async () => {
            const { error } = await sb.from('requests').update({
              status: 'cancelled',
              source_notes: (r.source_notes ? r.source_notes + '\n\n' : '') + 'DECLINED BY SELLER: Item unavailable or seller unable to fulfil.',
              updated_at: new Date().toISOString()
            }).eq('id', r.id);
            if (!error) {
              await sb.from('tracking_events').insert({
                request_id: r.id, event_type: 'order_placed', event_status: 'failed',
                description: 'Inquiry declined by seller -- item unavailable.',
                location: 'TechMedixLink Platform',
                event_time: new Date().toISOString(), created_at: new Date().toISOString()
              });
              await loadReqs();
              showInquiryDetail.value = false;
              toast('info', 'Inquiry declined');
            }
          }
        };
      }

      // ── 15. ADMIN ───────────────────────────────────────────────
      // ── ADMIN USER ACTIONS ──
      function adminEditUser(u) {
        adminViewUser.value = u;
        adminEditingUser.value = false;
        Object.assign(adminUF, { full_name:u.full_name||'', phone:u.phone||'', user_type:u.user_type||'individual', user_role:u.user_role||'buyer', company_name:u.company_name||'' });
        showAdminUserModal.value = true;
      }

      async function adminSaveUser() {
        if (!adminViewUser.value) return;
        const ok = await verifyAdminServer();
        if (!ok) { toast('err','Unauthorised'); return; }
        const { error } = await sb.from('users').update({
          full_name: sanitize(adminUF.full_name,100),
          phone: adminUF.phone || null,
          user_type: adminUF.user_type,
          user_role: adminUF.user_role,
          company_name: adminUF.company_name || null,
          updated_at: new Date().toISOString()
        }).eq('id', adminViewUser.value.id);
        if (error) { toast('err','Error',error.message); return; }
        await loadAdminUsers();
        adminEditingUser.value = false;
        adminViewUser.value = { ...adminViewUser.value, ...adminUF };
        toast('ok','User updated');
      }

      async function adminToggleUserRole(u) {
        const ok = await verifyAdminServer();
        if (!ok) { toast('err','Unauthorised','Admin access required'); return; }
        const roles = ['buyer','seller','both','admin'];
        const next = roles[(roles.indexOf(u.user_role)+1) % roles.length];
        const { error } = await sb.from('users').update({ user_role:next, updated_at:new Date().toISOString() }).eq('id', u.id);
        if (!error) { await loadAdminUsers(); toast('ok','Role updated', `${u.full_name} → ${roleLabel(next)}`); }
      }

      async function requestVerification() {
        if (!profile.value) return;
        // Store verification request in source_notes pattern via company_name tag
        const note = '[VERIFY_REQUESTED]' + (profile.value.company_name||'');
        const { error } = await sb.from('users').update({ 
          company_name: note,
          updated_at: new Date().toISOString() 
        }).eq('id', profile.value.id);
        if (!error) {
          await loadUserProfile(profile.value.id);
          showVerifyModal.value = false;
          toast('ok', 'Verification requested', 'Admin will review your documents within 2 business days');
        }
      }

      async function toggleVerified(u) {
        // Schema has no is_verified on users -- we use company_name prefix convention:
        // [VERIFY_REQUESTED]... = pending review
        // [VERIFIED]...         = approved
        // No prefix             = not requested
        const raw = u.company_name || '';
        const isVerified  = raw.startsWith('[VERIFIED]');
        const isPending   = raw.startsWith('[VERIFY_REQUESTED]');
        const actualName  = raw.replace(/^\[(VERIFIED|VERIFY_REQUESTED)\]/, '').trim();
        let newName;
        if (isVerified) {
          // Revoke -- strip [VERIFIED] prefix
          newName = actualName || null;
        } else if (isPending) {
          // Approve -- replace [VERIFY_REQUESTED] with [VERIFIED]
          newName = '[VERIFIED]' + actualName;
        } else {
          // Mark verified directly (admin override)
          newName = '[VERIFIED]' + actualName;
        }
        const { error } = await sb.from('users').update({
          company_name: newName,
          updated_at: new Date().toISOString()
        }).eq('id', u.id);
        if (!error) {
          await loadAdminUsers();
          toast('ok', isVerified ? 'Verification revoked' : 'User verified');
        }
      }

      // Helper to read verification state from company_name prefix
      function userVerifyStatus(u) {
        const cn = u?.company_name || '';
        if (cn.startsWith('[VERIFIED]'))          return 'verified';
        if (cn.startsWith('[VERIFY_REQUESTED]'))   return 'pending';
        return 'none';
      }

      function printPPRA(r) {
        // Generate PPRA-compliant procurement document
        const items = r.items || [];
        const rows = items.map((it,i) =>
          `<tr><td>${i+1}</td><td>${it.product_name}</td><td>${it.quantity}</td><td>${tzs(it.unit_price)}</td><td>${tzs(it.total_price)}</td></tr>`
        ).join('');
        const w = window.open('','_blank');
        w.document.write(`<!DOCTYPE html><html><head><title>PPRA Procurement Document</title>
        <style>body{font-family:Arial,sans-serif;margin:40px;color:#000;font-size:12px}
        .hd{display:flex;justify-content:space-between;border-bottom:3px solid #000;padding-bottom:12px;margin-bottom:20px}
        h1{font-size:16px;margin:0}h2{font-size:13px;margin:4px 0 0}
        .ref{font-size:11px;text-align:right}
        table{width:100%;border-collapse:collapse;margin:16px 0}
        th{background:#f0f0f0;border:1px solid #ccc;padding:8px;text-align:left;font-size:11px}
        td{border:1px solid #ccc;padding:8px;font-size:11px}
        .total-row{font-weight:bold;background:#f9f9f9}
        .sig{display:flex;justify-content:space-between;margin-top:60px}
        .sig-box{width:220px;border-top:1px solid #000;padding-top:8px;font-size:10px;color:#666}
        .footer{margin-top:30px;font-size:10px;color:#666;border-top:1px solid #ddd;padding-top:8px}
        </style></head><body>
        <div class="hd">
          <div><h1>TECHMEDIXLINK LTD</h1><h2>PPRA Procurement Document</h2>
          <div style="font-size:10px;color:#666;margin-top:4px">Medical Equipment Platform · Tanzania<br>PPRA Registration: TML-PROC-2024</div></div>
          <div class="ref">
            <div><strong>Ref:</strong> ${r.request_number}</div>
            <div><strong>Date:</strong> ${new Date().toLocaleDateString('en-TZ')}</div>
            <div><strong>Status:</strong> ${r.status?.toUpperCase()}</div>
          </div>
        </div>
        <table>
          <thead><tr><th>#</th><th>Item Description</th><th>Qty</th><th>Unit Price (TZS)</th><th>Total (TZS)</th></tr></thead>
          <tbody>${rows}<tr class="total-row"><td colspan="4" style="text-align:right">TOTAL</td><td>${tzs(r.total_cost)}</td></tr></tbody>
        </table>
        <div class="sig">
          <div class="sig-box">Procurement Officer<br>Name: ___________________<br>Signature: _______________<br>Date: ___________________</div>
          <div class="sig-box">Authorised Signatory<br>Name: ___________________<br>Signature: _______________<br>Date: ___________________</div>
          <div class="sig-box">Supplier Confirmation<br>Name: ___________________<br>Signature: _______________<br>Date: ___________________</div>
        </div>
        <div class="footer">This document is generated by TechMedixLink and is compliant with PPRA Act Cap 410 of Tanzania. 
        Retain this document for audit purposes.</div>
        </body></html>`);
        w.document.close(); w.print();
      }

      function printQuote(r) { window.print(); }

      // ── 18. FORMATTERS ──────────────────────────────────────────
      // ── FORMATTERS ──
      function fNum(n)     { if (n==null) return '0'; return Math.round(n).toLocaleString('en-US'); }
      function tzs(n)      { return 'TZS ' + fNum(n); }
      function fDate(d)    { if (!d) return '--'; const dt=new Date(d); return isNaN(dt)?'--':dt.toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'}); }
      function fDateTime(d){ if (!d) return '--'; const dt=new Date(d); return isNaN(dt)?'--':dt.toLocaleString('en-GB',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'}); }
      function fEvent(t)   { if (!t) return '--'; return t.split('_').map(w=>w.charAt(0).toUpperCase()+w.slice(1)).join(' '); }
      function stockLabel(n) { if (!n||n<=0) return 'Out of stock'; if (n<=2) return `Low stock (${n})`; return `${n} in stock`; }
      function stockClass(n) { if (!n||n<=0) return 'out-stock'; if (n<=2) return 'low-stock'; return 'in-stock'; }

      // ── 19. KEYBOARD, WATCHERS, MOUNT ───────────────────────────
      // ── KEYBOARD ──
      function handleKey(e) {
        if (e.key==='Escape') { if (detailReq.value) { detailReq.value=null; return; } if (showListingModal.value) { closeListing(); return; } if (showReqModal.value) { showReqModal.value=false; return; } if (showAuth.value) { showAuth.value=false; return; } if (showQuoteModal.value) { showQuoteModal.value=false; return; } if (showReviewModal.value) { showReviewModal.value=false; return; } closeAllMenus(); }
        if (e.key==='/' && !['INPUT','TEXTAREA','SELECT'].includes(e.target.tagName)) { e.preventDefault(); document.querySelector('.srch-w input')?.focus(); }
      }

      // ── WATCHERS ──
      watch(authTab, () => { authErr.value = ''; magicSent.value = false; aF.password = ''; });

      // ── MOUNT ──
      onMounted(() => {
        document.addEventListener('keydown', handleKey);

        // Handle URL tokens (magic link / password reset callbacks)
        const params = new URLSearchParams(
          window.location.hash.startsWith('#')
            ? window.location.hash.slice(1)
            : window.location.search.slice(1)
        );
        const urlError = params.get('error_description');
        const urlType  = params.get('type');
        const urlToken = params.get('access_token');

        if (urlError) {
          showAuth.value = true;
          authErr.value = decodeURIComponent(urlError).replace(/\+/g,' ');
          history.replaceState(null,'',window.location.pathname);
        } else if (urlToken || urlType === 'recovery' || urlType === 'magiclink' || urlType === 'signup') {
          authLanding.value = true;
          authLandingMsg.value = urlType === 'recovery' ? 'Verifying your reset link…' : 'Signing you in securely…';
          history.replaceState(null,'',window.location.pathname);
        }

        // Single auth listener -- drives ALL data loading
        // Fires immediately with current session state on page load
        loading.value = true;
        loadMsg.value = 'Loading…';

        sb.auth.onAuthStateChange(async (event, session) => {
          try {
            if (event === 'PASSWORD_RECOVERY') {
              authLanding.value = false;
              showPasswordUpdate.value = true;
              await loadAll();

            } else if (event === 'SIGNED_IN' && session) {
              authLanding.value = false;
              showPasswordUpdate.value = false;
              showAuth.value = false;
              magicSent.value = false;
              await loadUserProfile(session.user.id);
              await loadAll();
              await loadNotifications();
              if (isAdmin.value) { await loadAdminUsers(); await loadShoppers(); }
              await loadAddresses();
              // Welcome / onboarding
              const isNewish = !profile.value?.avatar_url && !profile.value?.phone;
              if (isNewish) startOnboarding();
              else toast('ok','Welcome back!', profile.value?.full_name || session.user.email || '');

            } else if (event === 'TOKEN_REFRESHED' && session) {
              // Silent token refresh -- just reload data quietly
              if (!profile.value) await loadUserProfile(session.user.id);
              await loadAll();

            } else if (event === 'SIGNED_OUT') {
              profile.value = null;
              notifications.value = [];
              addresses.value = [];
              allRequests.value = [];
              payments.value = [];
              tab.value = 'home';

            } else if (event === 'INITIAL_SESSION') {
              // Page load with no session -- just load public data
              if (!session) {
                await loadAll();
              }
              // If session exists, SIGNED_IN fires separately
            }
          } catch(e) {
            console.error('[TML auth]', event, e);
          } finally {
            loading.value = false;
          }
        });
      });

      return {
        loading, loadMsg, authLanding, authLandingMsg, showPasswordUpdate, newPassword, newPasswordErr, platform, tab, sidebarOpen, globalSearch,
        basket, showBasket, basketTotal, basketCount, addToBasket, removeFromBasket, clearBasket, submitBasket,
        showOnboarding, onboardStep, onboardingDone, obF, profileCompletion,
        products, allRequests, payments, profile, notifications, adminUsers, shoppers, addresses, analyticsData, productReviews,
        usdToTzs, rateSource, rateUpdatedAt, rateAge,
        showAuth, showProfileModal, showListingModal, showReqModal, showNotifPanel, showUserPanel,
        showQuoteModal, showReviewModal, showShopperModal, showTcModal, showVerifyModal, showCancelModal, cancelReq, cancelReason, showInquiryDetail, inquiryReq, showAdminUserModal, adminViewUser, adminEditingUser, adminUF,
        editingProd, editingShopper, detailReq, paymentReq, quoteReq, reviewReq,
        viewedProduct, showProductDetail, pdReviews, pdLoading, pd3dMode, lpCarousel, trackId, trackedReq, confirm, openStatusMenu, assignShopperId, addingAddress,
        authTab, authErr, magicSent, tcAccepted, rateLimitUntil, rateLimitSecs,
        aF, pF, rF, uF, pmtF, qF, reviewF, shF, addrF,
        adminSubTab, adminReqSearch, adminReqFilter, adminPlatFilter, adminUserSearch, adminUserRoleFilter, filteredAdminUsers, appLogoUrl,
        prodSearch, prodFilter, prodTypeFilter, sortProd, filterTmda, filterInStock, prodPage, reqPage, userPage, prodTotal, reqTotal, userTotal, PROD_PER_PAGE, REQ_PER_PAGE, USER_PER_PAGE,
        reqSearch, reqFilter, reqPlatFilter,
        toasts, statusList, stepperStages,
        isAdmin, canBuy, canSell, roleLabel, roleIcon, userVerifyStatus,
        pageTitle, primaryLabel, userInitial, today, unreadCount, uniqueCats,
        myRequests, myListings, incomingReqs, myActiveReqs, myDoneReqs,
        myTotalSpent, myBalanceDue, pendingPayCount, pendingAdminCount, avgListingPrice,
        selectedProduct, reqCostEstimate,
        filteredProds, filteredMyReqs, filteredAdminReqs, recentActivity, pStats, browseSubtitle, activeFilterCount, clearAllFilters, adminTriage,
        killToast, toast, createNotification, sendWhatsApp,
        stepCls, fStatus, sBadge,
        loadAll, loadProds, loadReqs, loadAdminUsers, loadAnalytics, loadSellerAnalytics, sellerAnalytics, sellerAnalyticsLoading,
        doLogin, doMagicLink, doPasswordReset, updatePassword, doSignup, doLogout, loadUserProfile,
        saveProfile, markAllRead, clickNotification, saveAddress, deleteAddress,
        startOnboarding, obSetRole, obSetType, obHandleAvatar, obSaveProfile, obSaveRoleDetail, obSkip, handleAvatarChange,
        setPlatform, goTab, primaryAction, performSearch, closeAllMenus, togglePanel,
        openListingModal, closeListing, handleImageChange, saveListing, toggleListingStatus, askDeleteProduct, loadProductReviews, openProductDetail,
        quickRequest, saveReq, askCancelRequest, doCancel, confirmReceipt, toggleStatusMenu, updateStatus, fetchTracking, doTrack, openDetailModal,
        askPayment, doPayment,
        openQuoteModal, sendQuote, acceptQuote, declineQuote,
        openReviewModal, saveReview,
        openShopperModal, saveShopper, assignShopper, updateShopperStatus, openInquiryDetail, acceptInquiry, acknowledgeInquiry, declineInquiry,
        requestVerification, verifyDocs, adminSaveUser,
        fNum, tzs, fDate, fDateTime, fEvent, stockLabel, stockClass, fCountdown,
      };
    }
  });

  // Tell Vue that model-viewer is a native web component, not a Vue component
  app.config.compilerOptions.isCustomElement = tag => tag === 'model-viewer';

  app.mount('#app');
})();

</script>
<!-- DEBUG: Remove after testing -->
<div id="debug-test" onclick="this.style.background='green';this.textContent='CLICKS WORK!'" 
  style="position:fixed;bottom:10px;left:50%;transform:translateX(-50%);
  background:#ff4444;color:white;padding:10px 20px;border-radius:8px;
  z-index:9999;cursor:pointer;font-weight:bold;font-family:sans-serif">
  CLICK ME TO TEST
</div>
<!-- 3D Model Viewer -->
<script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js"></script>
</body>
</html>
