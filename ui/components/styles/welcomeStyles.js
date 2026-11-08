/**
 * Cyber-Brutalist Welcome Styles (.noel-welcome)
 */
export const welcomeStyles = `
/* =========================================================
   CYBER-BRUTALIST WELCOME CANVAS
   ========================================================= */
.noel-welcome{
  padding:0 0 40px;
  min-height:100%;
  max-width:1160px;
  margin:auto;
}

.welcome-inner{
  padding:24px 32px 40px;
}

/* Banner / Ticker bar */
.welcome-ticker{
  background:var(--acid);
  color:var(--acid-ink);
  font-size:11px;
  font-weight:900;
  letter-spacing:2px;
  padding:8px 24px;
  display:flex;
  align-items:center;
  gap:16px;
  text-transform:uppercase;
  border-bottom:2px solid #000;
  box-shadow:0 2px 0 rgba(0,0,0,0.15);
}
.welcome-ticker span{display:inline-flex;align-items:center;gap:8px}

.welcome-topline{
  display:flex;
  align-items:center;
  justify-content:space-between;
  border-bottom:2px solid var(--line);
  padding:14px 0;
  font-size:10px;
  font-weight:700;
  letter-spacing:2px;
  color:var(--muted);
  text-transform:uppercase;
}
.welcome-topline .status-pill{
  display:inline-flex;
  align-items:center;
  gap:6px;
  background:var(--panel);
  border:1px solid var(--acid);
  padding:3px 8px;
  color:var(--acid);
  font-weight:800;
}
.welcome-topline .status-pill::before{
  content:'';
  width:6px;
  height:6px;
  background:var(--acid);
  border-radius:50%;
  box-shadow:0 0 8px var(--acid);
}

/* Active agent alert */
.welcome-active-agent{
  display:flex;
  align-items:center;
  gap:18px;
  margin-top:20px;
  padding:16px 20px;
  background:var(--panel);
  border:2px solid var(--acid);
  box-shadow:4px 4px 0px var(--acid);
}
.welcome-active-avatar{
  width:48px;
  height:48px;
  background:var(--acid);
  color:var(--acid-ink);
  border:2px solid #000;
  display:grid;
  place-items:center;
  font-size:24px;
  font-weight:900;
  flex-shrink:0;
}
.welcome-active-copy{
  flex:1;
  min-width:0;
}
.welcome-active-copy .overline{
  font-size:9.5px;
  font-weight:800;
  letter-spacing:1.5px;
  color:var(--acid);
  display:block;
}
.welcome-active-copy strong{
  display:block;
  font-size:20px;
  font-weight:900;
  margin:2px 0 4px;
  letter-spacing:-0.5px;
}
.welcome-active-copy p{
  font-size:12px;
  color:var(--muted);
  line-height:1.4;
}

/* Hero Section */
.welcome-hero{
  padding:28px 0 20px;
}
.hero-headline-wrap{
  display:flex;
  align-items:center;
  gap:16px;
  flex-wrap:wrap;
  margin:10px 0 16px;
}
.hero-title-main{
  font-size:clamp(44px, 7vw, 76px);
  font-weight:900;
  letter-spacing:-2px;
  line-height:0.95;
  text-transform:uppercase;
  margin:0;
}
.sticker-badge{
  display:inline-block;
  background:#ffffff;
  color:#000000;
  padding:4px 18px;
  border:3px solid #000000;
  transform:rotate(-3deg);
  box-shadow:4px 4px 0px var(--acid);
  font-weight:900;
  font-size:clamp(42px, 6.8vw, 72px);
  line-height:1;
  margin-left:6px;
  user-select:none;
}
.sticker-badge span{
  color:var(--acid-bg);
  -webkit-text-stroke:2px #000000;
}

.hero-manifesto{
  border-left:4px solid var(--acid);
  padding:10px 0 10px 18px;
  margin:18px 0 24px;
  background:linear-gradient(90deg, rgba(163,255,0,0.06) 0%, transparent 100%);
}
.hero-manifesto p{
  font-size:13px;
  font-weight:700;
  letter-spacing:0.5px;
  line-height:1.6;
  text-transform:uppercase;
  max-width:720px;
  color:var(--ink);
}

.hero-cta-banner{
  background:var(--panel);
  border:2px solid var(--line);
  padding:14px 20px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:16px;
  flex-wrap:wrap;
  box-shadow:4px 4px 0px var(--acid);
  margin-bottom:28px;
}
.hero-cta-label{
  font-size:12px;
  font-weight:800;
  letter-spacing:1px;
  text-transform:uppercase;
}
.hero-cta-actions{
  display:flex;
  gap:10px;
}
.btn-acid{
  background:var(--acid);
  color:var(--acid-ink);
  border:2px solid #000;
  padding:7px 16px;
  font-weight:900;
  font-size:11px;
  letter-spacing:1px;
  text-transform:uppercase;
  box-shadow:2px 2px 0px #000;
  transition:all 0.1s ease;
}
.btn-acid:hover{
  transform:translate(-1px, -1px);
  box-shadow:3px 3px 0px #000;
}
.btn-acid:active{
  transform:translate(1px, 1px);
  box-shadow:1px 1px 0px #000;
}
.btn-outline{
  background:transparent;
  color:var(--ink);
  border:2px solid var(--line);
  padding:7px 16px;
  font-weight:800;
  font-size:11px;
  letter-spacing:1px;
  text-transform:uppercase;
  transition:all 0.1s ease;
}
.btn-outline:hover{
  background:var(--elevated);
  border-color:var(--acid);
}

/* Team Section */
.team-heading{
  display:flex;
  align-items:center;
  justify-content:space-between;
  border-bottom:2px solid var(--line);
  padding-bottom:12px;
  margin-bottom:18px;
}
.team-heading h2{
  font-size:16px;
  font-weight:900;
  letter-spacing:1px;
  text-transform:uppercase;
}
.team-heading>span{
  font-size:10px;
  font-weight:800;
  letter-spacing:1.5px;
  color:var(--acid);
  background:var(--panel);
  border:1px solid var(--acid);
  padding:2px 8px;
}

.welcome-search-wrap{
  display:flex;
  align-items:center;
  gap:10px;
  background:var(--panel);
  border:2px solid var(--line);
  padding:10px 14px;
  margin-bottom:20px;
  box-shadow:3px 3px 0px var(--line);
}
.welcome-search-wrap input{
  flex:1;
  background:transparent;
  border:none;
  outline:none;
  color:var(--ink);
  font-weight:600;
  font-size:12px;
}
.welcome-search-wrap input::placeholder{color:var(--muted)}
.welcome-search-clear{
  background:transparent;
  border:none;
  padding:2px;
  color:var(--muted);
}
.welcome-search-clear:hover{color:var(--acid)}

/* Agents Grid */
.welcome-agents{
  display:grid;
  grid-template-columns:repeat(auto-fill, minmax(260px, 1fr));
  gap:16px;
}
.welcome-agent-card{
  background:var(--panel);
  border:2px solid var(--line);
  padding:16px;
  text-align:left;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  min-height:150px;
  box-shadow:3px 3px 0px var(--line);
  transition:all 0.12s ease;
  position:relative;
}
.welcome-agent-card:hover{
  border-color:var(--acid);
  box-shadow:5px 5px 0px var(--acid);
  transform:translate(-2px, -2px);
}
.welcome-agent-card:active{
  transform:translate(1px, 1px);
  box-shadow:2px 2px 0px var(--acid);
}
.agent-card-header{
  display:flex;
  align-items:flex-start;
  justify-content:space-between;
  gap:10px;
  margin-bottom:10px;
}
.agent-avatar-box{
  width:36px;
  height:36px;
  background:var(--bg);
  border:1.5px solid var(--line);
  display:grid;
  place-items:center;
  font-size:18px;
}
.agent-status-tag{
  font-size:9px;
  font-weight:800;
  letter-spacing:1px;
  color:var(--acid);
  background:rgba(163,255,0,0.08);
  border:1px solid var(--acid);
  padding:2px 6px;
}
.welcome-agent-card h3{
  font-size:14px;
  font-weight:900;
  margin:0 0 6px;
  letter-spacing:-0.2px;
  color:var(--ink);
}
.welcome-agent-card p{
  font-size:11.5px;
  color:var(--muted);
  line-height:1.45;
  margin:0;
  flex:1;
}
.agent-card-footer{
  margin-top:12px;
  padding-top:10px;
  border-top:1px dashed var(--line);
  display:flex;
  align-items:center;
  justify-content:space-between;
}
.agent-card-footer span{
  font-size:9.5px;
  font-weight:800;
  letter-spacing:1px;
  color:var(--muted);
  text-transform:uppercase;
}
.agent-launch-btn{
  color:var(--acid);
  font-weight:900;
  font-size:11px;
  display:inline-flex;
  align-items:center;
  gap:4px;
}
`;
