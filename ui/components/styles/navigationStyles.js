/**
 * Cyber-Brutalist Navigation Rail & Sidebar Styles (.noel-rail)
 */
export const navigationStyles = `
/* =========================================================
   CYBER-BRUTALIST NAVIGATION RAIL & SIDEBAR
   ========================================================= */
.noel-rail{
  height:100%;
  display:flex;
  flex-direction:column;
  background:var(--rail);
  padding:14px 6px 12px;
  position:relative;
  overflow-x:hidden;
  overflow-y:auto;
  user-select:none;
  border-right:2px solid var(--line);
  box-sizing:border-box;
}

.noel-rail.is-expanded{
  padding:14px 10px 12px;
  overflow:hidden;
  width:260px;
}

/* Expanded Header & Brand */
.rail-expanded-header{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:8px;
  padding-bottom:12px;
  border-bottom:2px solid var(--line);
  margin-bottom:12px;
  flex-shrink:0;
}

.noel-brand-row{
  border:0;
  background:none;
  padding:0;
  display:flex;
  align-items:center;
  gap:10px;
  min-width:0;
  text-align:left;
}

.brutal-u-logo{
  width:32px;
  height:32px;
  background:var(--acid) !important;
  color:#000000 !important;
  font-weight:900 !important;
  font-size:18px !important;
  display:grid !important;
  place-items:center !important;
  border:2px solid #000000 !important;
  box-shadow:2.5px 2.5px 0px #000000 !important;
  border-radius:0 !important;
  flex-shrink:0;
}

.brand-copy{
  display:flex;
  flex-direction:column;
  min-width:0;
}
.brand-copy strong{
  font-size:13px;
  font-weight:900;
  letter-spacing:1px;
  text-transform:uppercase;
  color:var(--ink);
}
.brand-copy small{
  font-size:8px;
  letter-spacing:1.5px;
  text-transform:uppercase;
  color:var(--acid);
  font-weight:800;
  margin-top:2px;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}

.rail-toggle-btn{
  border:1.5px solid var(--line);
  background:var(--panel);
  width:28px;
  height:28px;
  border-radius:0 !important;
  display:grid;
  place-items:center;
  color:var(--ink);
  flex-shrink:0;
  box-shadow:2px 2px 0 var(--line);
  transition:all 0.1s ease;
}
.rail-toggle-btn:hover{
  border-color:var(--acid);
  color:var(--acid);
  box-shadow:2px 2px 0 var(--acid);
}

/* User Identity Card */
.rail-user-card{
  width:100%;
  border:2px solid var(--line);
  background:var(--panel);
  border-radius:0 !important;
  padding:8px 10px;
  margin-bottom:12px;
  display:flex;
  align-items:center;
  gap:10px;
  text-align:left;
  box-shadow:3px 3px 0 var(--line);
  flex-shrink:0;
  transition:all 0.1s ease;
}
.rail-user-card:hover{
  border-color:var(--acid);
  box-shadow:3px 3px 0 var(--acid);
}
.rail-user-avatar{
  width:26px;
  height:26px;
  border-radius:0 !important;
  background:#000;
  border:1.5px solid var(--acid);
  color:var(--acid);
  font-size:11px;
  font-weight:900;
  display:grid;
  place-items:center;
  flex-shrink:0;
}
.rail-user-copy strong{
  font-size:11px;
  font-weight:800;
  color:var(--ink);
  text-transform:uppercase;
}
.rail-user-copy small{
  font-size:8px;
  font-weight:700;
  color:var(--acid);
  text-transform:uppercase;
}

/* Navigation Search */
.rail-search{
  display:flex;
  align-items:center;
  gap:6px;
  background:var(--panel);
  border:1.5px solid var(--line);
  border-radius:0 !important;
  padding:6px 8px;
  margin-bottom:12px;
  box-shadow:2px 2px 0 var(--line);
}
.rail-search:focus-within{
  border-color:var(--acid);
  box-shadow:2px 2px 0 var(--acid);
}
.rail-search input{
  flex:1;
  background:none;
  border:none;
  color:var(--ink);
  font-size:10.5px;
  font-weight:700;
  outline:none;
}
.rail-search-clear{
  border:none;
  background:var(--acid);
  color:#000;
  width:14px;
  height:14px;
  border-radius:0 !important;
  display:grid;
  place-items:center;
  font-weight:900;
}

/* Nav Section */
.rail-sections{
  display:flex;
  flex-direction:column;
  gap:8px;
  overflow-y:auto;
  flex:1;
}
.rail-section-header{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:4px 0;
  font-size:8.5px;
  font-weight:900;
  letter-spacing:1.5px;
  color:var(--muted);
  text-transform:uppercase;
  border-bottom:1px solid var(--line);
  margin-bottom:4px;
}
.rail-section-items{
  display:flex;
  flex-direction:column;
  gap:4px;
}

/* Nav Item Row (Expanded) */
.rail-item-row{
  display:flex;
  align-items:center;
  gap:8px;
  padding:7px 8px;
  border:1.5px solid transparent;
  background:none;
  color:var(--ink);
  font-size:11px;
  font-weight:700;
  text-transform:uppercase;
  text-align:left;
  border-radius:0 !important;
  transition:all 0.1s ease;
}
.rail-item-row:hover{
  background:var(--panel);
  border-color:var(--acid);
  box-shadow:2px 2px 0 var(--acid);
}
.rail-item-row[aria-current=page]{
  background:var(--acid) !important;
  color:#000000 !important;
  border:1.5px solid #000000 !important;
  font-weight:900 !important;
  box-shadow:3px 3px 0px #000000 !important;
}
.rail-item-row[aria-current=page] .rail-item-icon{
  color:#000000 !important;
}
.rail-item-row[aria-current=page]::before{
  display:none !important;
}
.rail-item-icon{
  color:var(--acid);
}

/* Footer Actions (Expanded) */
.rail-footer-actions{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:6px;
  padding-top:10px;
  border-top:2px solid var(--line);
  margin-top:auto;
}
.rail-footer-actions>button{
  border:1.5px solid var(--line);
  background:var(--panel);
  border-radius:0 !important;
  padding:6px;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:4px;
  font-size:9px;
  font-weight:900;
  letter-spacing:0.5px;
  text-transform:uppercase;
  color:var(--ink);
  box-shadow:2px 2px 0 var(--line);
  transition:all 0.1s ease;
}
.rail-footer-actions>button:hover{
  border-color:var(--acid);
  color:var(--acid);
  box-shadow:2px 2px 0 var(--acid);
}
.rail-footer-actions>button.danger:hover{
  background:#ff3366 !important;
  color:#ffffff !important;
  border-color:#000000 !important;
}

/* =========================================================
   COLLAPSED 80px RAIL MODE
   ========================================================= */
.noel-brand{
  background:none;
  border:0;
  padding:0 0 10px;
  display:flex;
  align-items:center;
  flex-direction:column;
  gap:4px;
}
.noel-brand .brutal-u-logo{
  width:32px;
  height:32px;
  background:var(--acid) !important;
  color:#000000 !important;
  font-weight:900 !important;
  font-size:18px !important;
  display:grid !important;
  place-items:center !important;
  border:2px solid #000000 !important;
  box-shadow:2.5px 2.5px 0px #000000 !important;
  border-radius:0 !important;
}
.noel-brand strong{
  font-size:10px;
  font-weight:900;
  letter-spacing:1px;
  color:var(--acid);
  text-transform:uppercase;
  margin-top:3px;
}
.noel-brand small{
  font-size:7px;
  font-weight:800;
  letter-spacing:1px;
  color:var(--muted);
  text-transform:uppercase;
}

.rail-rule{
  height:2px;
  background:var(--line);
  margin:0 2px 8px;
  flex-shrink:0;
}

.rail-links{
  display:flex;
  flex-direction:column;
  gap:6px;
}

.rail-links>button,
.rail-bottom>button{
  position:relative;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:3px;
  width:100%;
  border:1.5px solid transparent !important;
  background:var(--panel);
  border-radius:0 !important;
  padding:8px 2px 6px;
  color:var(--muted);
  box-shadow:1.5px 1.5px 0 rgba(0,0,0,0.3);
  transition:all 0.1s ease;
}
.rail-links>button:hover,
.rail-bottom>button:hover{
  background:#000000 !important;
  border-color:var(--acid) !important;
  color:var(--acid) !important;
  box-shadow:2.5px 2.5px 0px var(--acid) !important;
  transform:translate(-1px, -1px);
}
.rail-links>button[aria-current=page]{
  background:var(--acid) !important;
  color:#000000 !important;
  border:2px solid #000000 !important;
  box-shadow:3px 3px 0px #000000 !important;
}
.rail-links>button[aria-current=page] .rail-glyph{
  color:#000000 !important;
}
.rail-links>button[aria-current=page] .rail-label{
  color:#000000 !important;
  font-weight:900 !important;
}
.rail-links>button[aria-current=page]::before{
  display:none !important;
}

.rail-glyph{
  width:24px;
  height:24px;
  display:grid;
  place-items:center;
  color:var(--acid);
}

.rail-label{
  display:block;
  max-width:100%;
  font-size:8px;
  font-weight:800;
  line-height:1.1;
  letter-spacing:0.5px;
  text-transform:uppercase;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
  text-align:center;
}

.rail-bottom{
  margin-top:auto;
  padding-top:8px;
  display:flex;
  flex-direction:column;
  gap:6px;
  align-items:center;
}
.rail-season{
  color:var(--acid);
  font-weight:900;
  font-size:12px;
}
`;
