import React, { useState } from "react";
import { SvgIcon } from "../../icons/SvgIcon.jsx";
import { AgentPickerPopover } from "./AgentPickerPopover.jsx";
import { ThreadRow } from "./ThreadRow.jsx";
import { useAgentPicker } from "./useAgentPicker.js";

export function History({ model, en, act }) {
  const [query, setQuery] = useState(model.query || "");
  const [menu, setMenu] = useState(null);

  const pickerState = useAgentPicker({
    agents: model.agents || [],
    act,
  });
  const { picker, setPicker } = pickerState;

  const search = query.toLowerCase();
  const sessions = (model.sessions || [])
    .filter((s) =>
      search
        ? [s.title, s.agent, s.platform].some((text) =>
            text?.toLowerCase().includes(search),
          )
        : !s.parent ||
          !["local", "direct", "web"].includes((s.platform || "").toLowerCase()),
    )
    .sort(
      (a, b) =>
        Number(b.pinned) - Number(a.pinned) || b.updatedAt - a.updatedAt,
    );

  return (
    <aside
      className={`noel-history ${model.collapsed ? "collapsed" : ""} ${model.mobileOpen ? "mobile-open" : ""}`}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          if (picker) {
            setPicker(false);
            return;
          }
          if (menu) {
            setMenu(null);
            return;
          }
          if (model.mobileOpen) act("collapse");
        }
      }}
    >
      <div className="history-heading">
        <div>
          <span className="overline">
            {en ? "SYS_BUFFER // LOGS" : "BUFFER_SYS // REGISTROS"}
          </span>
          <h2>
            {en ? "// THREADS" : "// CONVERSACIONES"}
            <span>{sessions.length}</span>
          </h2>
        </div>
        <button
          type="button"
          className="history-collapse-btn"
          onClick={() => act("collapse")}
          aria-label={
            en ? "Show or hide history" : "Mostrar u ocultar historial"
          }
          title={en ? "Show or hide history" : "Mostrar u ocultar historial"}
        >
          <SvgIcon name="sidebar" size={16} />
        </button>
      </div>

      <div className="history-body">
        <div className="picker-anchor">
          <button
            type="button"
            className={`new-conversation ${picker ? "is-open" : ""}`}
            onClick={() => setPicker((v) => !v)}
            aria-expanded={picker}
            aria-haspopup="listbox"
          >
            <span className="new-conv-icon">
              <SvgIcon name="plus" size={15} />
            </span>
            <span>{en ? "+ NEW CONVERSATION ⚡" : "+ NUEVA CONVERSACIÓN ⚡"}</span>
            <span className={`new-conv-chevron ${picker ? "rotated" : ""}`}>
              <SvgIcon name="chevron" size={14} />
            </span>
          </button>

          {picker && (
            <AgentPickerPopover
              en={en}
              {...pickerState}
              onClose={() => setPicker(false)}
            />
          )}
        </div>

        <label className="history-search">
          <SvgIcon name="search" size={14} />
          <input
            aria-label={en ? "Search conversations" : "Buscar conversaciones"}
            placeholder={en ? "> search_logs..." : "> buscar_conversacion..."}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              act("search", { value: e.target.value });
            }}
          />
          {query && (
            <button
              type="button"
              className="history-search-clear"
              onClick={() => {
                setQuery("");
                act("search", { value: "" });
              }}
              aria-label={en ? "Clear search" : "Limpiar búsqueda"}
            >
              <SvgIcon name="close" size={12} />
            </button>
          )}
        </label>

        <div className="history-scroll" onScroll={() => setMenu(null)}>
          {sessions.map((s) => (
            <ThreadRow
              key={s.id}
              session={s}
              active={model.activeId === s.id}
              menuOpen={menu === s.id}
              en={en}
              onLoad={(id) => act("load", { id })}
              onToggleMenu={(id) => setMenu((old) => (old === id ? null : id))}
              onPin={(id) => {
                act("pin", { id });
                setMenu(null);
              }}
              onDelete={(id) => {
                act("delete", { id });
                setMenu(null);
              }}
            />
          ))}
          {!sessions.length && (
            <p className="history-empty">
              {search
                ? en
                  ? "No matching conversations."
                  : "No hay coincidencias."
                : en
                  ? "Your next story starts here."
                  : "Tu próxima historia empieza aquí."}
            </p>
          )}
          {model.hasMore && (
            <button
              type="button"
              className="load-more"
              disabled={model.loading}
              onClick={() => act("more")}
            >
              {model.loading
                ? en
                  ? "Loading…"
                  : "Cargando…"
                : en
                  ? "Load more"
                  : "Cargar más"}
            </button>
          )}
        </div>
        <footer>
          <span style={{ color: "var(--acid)", fontWeight: 900 }}>⚡</span>
          <span>
            {en
              ? "ACID PROTOCOL // LIVE"
              : "PROTOCOLO ACID // EN VIVO"}
          </span>
        </footer>
      </div>
    </aside>
  );
}

