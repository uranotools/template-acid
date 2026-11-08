/**
 * Cyber-Brutalist Header HUD Styles (.noel-context)
 */
export const headerStyles = `
/* =========================================================
   CYBER HUD HEADER (.noel-context)
   ========================================================= */
.noel-context{
  height:100%;
  display:flex;
  align-items:center;
  padding:0 16px;
  gap:12px;
  background:var(--panel);
  border-bottom:2px solid var(--line);
}

.context-title{
  flex:1;
  min-width:0;
}
.context-title small{
  display:flex;
  align-items:center;
  gap:6px;
  font-size:9px;
  font-weight:900;
  letter-spacing:1.5px;
  color:var(--acid);
  margin-bottom:2px;
  text-transform:uppercase;
}
.context-dot{
  width:7px;
  height:7px;
  border-radius:0;
  background:var(--acid);
  display:inline-block;
  box-shadow:0 0 8px var(--acid);
}
.context-title strong{
  display:block;
  font-weight:900;
  overflow:hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
  font-size:13px;
  letter-spacing:0.5px;
  text-transform:uppercase;
  color:var(--ink);
}

.context-actions{
  display:flex;
  align-items:center;
  gap:8px;
}
.context-actions button,
.context-menu{
  border:2px solid var(--line);
  border-radius:0 !important;
  width:32px;
  height:32px;
  background:var(--bg);
  display:grid;
  place-items:center;
  position:relative;
  color:var(--ink);
  transition:all 0.1s ease;
  box-shadow:2px 2px 0px var(--line);
}
.context-actions button:hover,
.context-menu:hover{
  background:#000000;
  border-color:var(--acid);
  color:var(--acid);
  box-shadow:2px 2px 0px var(--acid);
}
.context-actions button[aria-pressed=true]{
  background:var(--acid) !important;
  border-color:#000000 !important;
  color:#000000 !important;
  box-shadow:2px 2px 0px #000000 !important;
}
.context-actions sup{
  position:absolute;
  right:-5px;
  top:-5px;
  font-size:8px;
  font-weight:900;
  background:var(--acid);
  color:#000000;
  padding:1px 4px;
  min-width:14px;
  border-radius:0;
  border:1px solid #000000;
  line-height:1.2;
}
.context-menu{
  display:none;
  flex-shrink:0;
}
`;
