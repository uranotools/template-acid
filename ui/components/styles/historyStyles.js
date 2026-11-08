/**
 * Full Cyber-Brutalist Conversation History Styles (.noel-history)
 */
export const historyStyles = `
/* =========================================================
   CONVERSATION HISTORY (.noel-history)
   ========================================================= */
.noel-history{
  height:100%;
  display:flex;
  flex-direction:column;
  background:var(--panel);
  padding:16px 12px 0;
  overflow:hidden;
  position:relative;
  border-right:2px solid var(--line);
}

.history-heading{
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  gap:8px;
  margin-bottom:12px;
  border-bottom:2px solid var(--line);
  padding-bottom:10px;
}

.overline{
  font-size:8px;
  font-weight:900;
  letter-spacing:1.5px;
  color:var(--acid);
  display:block;
  text-transform:uppercase;
}

.history-heading h2{
  font-size:14px;
  font-weight:900;
  margin-top:3px;
  letter-spacing:1px;
  display:flex;
  align-items:center;
  gap:8px;
  text-transform:uppercase;
  color:var(--ink);
}

.history-heading h2>span{
  font-size:10px;
  font-weight:900;
  color:#000000;
  background:var(--acid);
  border:1px solid #000000;
  padding:2px 6px;
  border-radius:0;
  box-shadow:1px 1px 0 #000;
}

.history-collapse-btn{
  border:2px solid var(--line);
  background:var(--bg);
  width:28px;
  height:28px;
  border-radius:0 !important;
  display:grid;
  place-items:center;
  color:var(--ink);
  transition:all 0.1s ease;
  box-shadow:2px 2px 0 var(--line);
}
.history-collapse-btn:hover{
  background:#000000;
  border-color:var(--acid);
  color:var(--acid);
  box-shadow:2px 2px 0 var(--acid);
}

.history-body{
  display:flex;
  flex-direction:column;
  flex:1;
  min-height:0;
  position:relative;
}

/* Primary New Chat Trigger + Popover Anchor */
.picker-anchor{
  position:relative;
  z-index:20;
}

.new-conversation{
  width:100%;
  border:2px solid #000000 !important;
  background:var(--acid) !important;
  color:#000000 !important;
  border-radius:0 !important;
  min-height:38px;
  padding:0 12px;
  font-size:11px;
  font-weight:900;
  letter-spacing:1px;
  text-transform:uppercase;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:8px;
  box-shadow:3px 3px 0px #000000 !important;
  transition:all 0.1s ease;
}
.new-conversation:hover{
  transform:translate(-1px, -1px);
  box-shadow:4px 4px 0px #000000 !important;
}
.new-conversation:active{
  transform:translate(1px, 1px) !important;
  box-shadow:1px 1px 0px #000000 !important;
}
.new-conversation.is-open{
  outline:2px solid var(--acid);
}
.new-conv-icon{
  width:20px;
  height:20px;
  border-radius:0;
  background:rgba(0,0,0,0.15);
  display:grid;
  place-items:center;
  border:1px solid #000;
}
.new-conv-chevron{
  opacity:0.8;
  transition:transform 0.15s ease;
}
.new-conversation.is-open .new-conv-chevron{
  transform:rotate(180deg);
}

/* Popover Backdrop */
.picker-backdrop{
  position:fixed;
  inset:0;
  z-index:18;
  background:rgba(0,0,0,0.5);
}

/* Agent Picker Popover */
.agent-picker-popover{
  position:absolute;
  top:calc(100% + 6px);
  left:0;
  right:0;
  z-index:25;
  background:var(--elevated);
  border:2px solid var(--acid);
  border-radius:0 !important;
  box-shadow:5px 5px 0px #000000;
  display:flex;
  flex-direction:column;
  max-height:min(390px, calc(100vh - 150px));
  overflow:hidden;
}

.picker-search-wrap{
  display:flex;
  align-items:center;
  gap:8px;
  padding:8px 10px;
  border-bottom:2px solid var(--line);
  background:var(--bg);
}
.picker-search-wrap input{
  flex:1;
  border:none;
  background:none;
  color:var(--ink);
  font-size:11px;
  font-weight:700;
  outline:none;
}
.picker-list{
  overflow-y:auto;
  flex:1;
  padding:6px;
}
.picker-item{
  display:flex;
  align-items:center;
  gap:10px;
  padding:8px;
  width:100%;
  border:1.5px solid transparent;
  background:none;
  color:var(--ink);
  text-align:left;
  font-size:11px;
  border-radius:0 !important;
  transition:all 0.1s ease;
}
.picker-item:hover{
  background:#000000;
  border-color:var(--acid);
  color:var(--acid);
}
.picker-avatar{
  width:26px;
  height:26px;
  background:var(--bg);
  border:1px solid var(--line);
  display:grid;
  place-items:center;
  font-size:13px;
  flex-shrink:0;
}

/* History Search Bar */
.history-search{
  display:flex;
  gap:8px;
  align-items:center;
  background:var(--bg);
  border:2px solid var(--line);
  border-radius:0 !important;
  margin:10px 0 12px;
  padding:7px 10px;
  color:var(--muted);
  box-shadow:2px 2px 0 var(--line);
  transition:all 0.1s ease;
}
.history-search:focus-within{
  border-color:var(--acid);
  box-shadow:3px 3px 0 var(--acid);
  color:var(--ink);
}
.history-search input{
  width:100%;
  min-width:0;
  border:0;
  background:none;
  color:var(--ink);
  outline:none;
  font-size:11px;
  font-weight:700;
}
.history-search-clear{
  border:0;
  background:var(--acid);
  color:#000;
  width:16px;
  height:16px;
  border-radius:0 !important;
  display:grid;
  place-items:center;
  padding:0;
  font-weight:900;
}

/* History Thread List */
.history-scroll{
  flex:1;
  min-height:0;
  overflow-y:auto;
  overflow-x:hidden;
  margin:0 -4px;
  padding:0 4px 12px;
}

.noel-thread{
  border:1.5px solid var(--line) !important;
  border-radius:0 !important;
  display:flex;
  align-items:center;
  position:relative;
  margin-bottom:6px;
  padding:3px 6px;
  background:var(--bg);
  box-shadow:2px 2px 0px rgba(0,0,0,0.4);
  transition:all 0.1s ease;
}
.noel-thread:hover{
  background:var(--panel);
  border-color:var(--acid) !important;
  box-shadow:3px 3px 0px var(--acid) !important;
  transform:translate(-1px, -1px);
}
.noel-thread.active{
  background:#000000 !important;
  border:2px solid var(--acid) !important;
  box-shadow:3px 3px 0px var(--acid) !important;
}
.noel-thread.active::before{
  display:none !important;
}
.noel-thread.active .thread-open strong{
  color:var(--acid) !important;
  font-weight:900;
}

.thread-open{
  border:0;
  background:none;
  display:flex;
  align-items:center;
  gap:8px;
  text-align:left;
  flex:1;
  min-width:0;
  padding:6px 2px;
}

.thread-avatar{
  width:26px;
  height:26px;
  flex-shrink:0;
  display:grid;
  place-items:center;
  background:#000000;
  border:1.5px solid var(--line);
  border-radius:0 !important;
  font-size:12px;
  font-weight:900;
  color:var(--acid);
}
.noel-thread.active .thread-avatar{
  border-color:var(--acid);
  background:var(--acid);
  color:#000000;
}

.thread-open>span:last-child{
  min-width:0;
  flex:1;
}
.thread-open strong{
  font-size:11px;
  font-weight:700;
  display:block;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  color:var(--ink);
}
.thread-open small{
  font-size:8.5px;
  font-weight:800;
  letter-spacing:0.5px;
  color:var(--muted);
  display:block;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
  margin-top:2px;
  text-transform:uppercase;
}

.thread-menu{
  background:none;
  border:1px solid transparent;
  width:22px;
  height:22px;
  border-radius:0 !important;
  display:grid;
  place-items:center;
  color:var(--muted);
  font-weight:900;
}
.thread-menu:hover{
  background:#000000;
  border-color:var(--acid);
  color:var(--acid);
}

.thread-options{
  position:absolute;
  right:6px;
  top:calc(100% + 2px);
  z-index:30;
  background:#000000;
  border:2px solid var(--acid);
  box-shadow:3px 3px 0 #000;
  padding:4px;
  display:flex;
  flex-direction:column;
  gap:2px;
  min-width:140px;
}
.thread-options button{
  display:flex;
  align-items:center;
  gap:8px;
  padding:6px 10px;
  font-size:10px;
  font-weight:800;
  text-transform:uppercase;
  background:none;
  border:none;
  color:#fff;
  border-radius:0;
  text-align:left;
}
.thread-options button:hover{
  background:var(--acid);
  color:#000;
}

/* Footer status */
.noel-history footer{
  display:flex;
  align-items:center;
  gap:6px;
  padding:10px 0;
  border-top:2px solid var(--line);
  margin-top:auto;
  font-size:9.5px;
  font-weight:900;
  letter-spacing:1px;
  color:var(--muted);
  text-transform:uppercase;
}
`;
