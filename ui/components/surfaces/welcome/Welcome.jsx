import React, { useState } from "react";
import { SvgIcon } from "../../icons/SvgIcon.jsx";

export function Welcome({ model, en, act }) {
  const [query, setQuery] = useState("");
  const activeAgent = model.activeAgent || "";
  const activeEmoji = model.activeEmoji || "⚡";
  const agents = (model.agents || []).filter(
    (a) =>
      a.name.toLowerCase().includes(query.toLowerCase()) ||
      (a.description || "").toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <main className="noel-welcome">
      {/* Brutalist Ticker */}
      <div className="welcome-ticker">
        <span>⚡ URANO ACID ENGINE</span>
        <span>/</span>
        <span>{en ? "RAW INTELLIGENCE OPERATING SYSTEM" : "SISTEMA OPERATIVO DE INTELIGENCIA PURA"}</span>
        <span>/</span>
        <span>100% {en ? "AUTONOMOUS" : "AUTÓNOMO"}</span>
        <span>⚡</span>
      </div>

      <div className="welcome-inner">
        {/* Topline status */}
        <div className="welcome-topline">
          <span>{en ? "SYS_STATUS: ONLINE" : "ESTADO_SISTEMA: EN LÍNEA"}</span>
          <div className="status-pill">
            <span>{en ? "ACID PROTOCOL v1.0" : "PROTOCOLO ACID v1.0"}</span>
          </div>
        </div>

        {/* Active agent callout */}
        {activeAgent && (
          <section className="welcome-active-agent">
            <span className="welcome-active-avatar">{activeEmoji}</span>
            <div className="welcome-active-copy">
              <span className="overline">
                {en ? "[ ACTIVE SPECIALIST READY ]" : "[ ESPECIALISTA ACTIVO LISTO ]"}
              </span>
              <strong>{activeAgent}</strong>
              <p>
                {en
                  ? "Composer locked and primed. Input prompt below to begin execution."
                  : "Compositor vinculado y listo. Ingresa tu prompt abajo para iniciar la ejecución."}
              </p>
            </div>
          </section>
        )}

        {/* Hero Banner with "IA SOBRE IA" sticker effect */}
        <section className="welcome-hero">
          <div className="hero-headline-wrap">
            <h1 className="hero-title-main">
              {en ? "AI OVER" : "IA SOBRE"}
            </h1>
            <div className="sticker-badge">
              <span>{en ? "AI" : "IA"}</span>
            </div>
          </div>

          <div className="hero-manifesto">
            <p>
              {en
                ? "Autonomous artificial intelligence workspace. Researched, engineered and orchestrated in real-time by specialised agents."
                : "Entorno de inteligencia artificial autónomo. Investigado, estructurado y orquestado en tiempo real por agentes especializados."}
            </p>
          </div>

          {/* Tactical Action Banner */}
          <div className="hero-cta-banner">
            <span className="hero-cta-label">
              {en ? "Deploy or launch an agent now:" : "¡Despliega o lanza un agente ahora!"}
            </span>
            <div className="hero-cta-actions">
              <button
                type="button"
                className="btn-acid"
                onClick={() => {
                  if (agents[0]?.id) act("launch", { id: agents[0].id });
                }}
              >
                {en ? "Instant Start ⚡" : "Inicio Rápido ⚡"}
              </button>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="welcome-team">
          <div className="team-heading">
            <h2>{en ? "// AVAILABLE SPECIALISTS" : "// ESPECIALISTAS DISPONIBLES"}</h2>
            <span>
              {agents.length} {en ? "ONLINE" : "EN LÍNEA"}
            </span>
          </div>

          {(model.agents?.length || 0) > 3 && (
            <label className="welcome-search-wrap">
              <SvgIcon name="search" size={15} />
              <input
                className="agent-search"
                aria-label={en ? "Filter agents" : "Filtrar agentes"}
                placeholder={
                  en
                    ? "filter_agents_by_keyword..."
                    : "filtrar_agentes_por_palabra_clave..."
                }
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {query && (
                <button
                  type="button"
                  className="welcome-search-clear"
                  onClick={() => setQuery("")}
                  aria-label={en ? "Clear" : "Limpiar"}
                >
                  <SvgIcon name="close" size={13} />
                </button>
              )}
            </label>
          )}

          <div className="welcome-agents">
            {agents.map((a) => (
              <button
                type="button"
                className="welcome-agent-card"
                key={a.id}
                onClick={() => act("launch", { id: a.id })}
              >
                <div className="agent-card-header">
                  <div className="agent-avatar-box">
                    <span>{a.emoji || "⚡"}</span>
                  </div>
                  <span className="agent-status-tag">[ READY ]</span>
                </div>
                <h3>{a.name}</h3>
                <p>
                  {a.description ||
                    (en ? "Ready to execute autonomous workflows." : "Listo para ejecutar tareas autónomas.")}
                </p>
                <div className="agent-card-footer">
                  <span>{en ? "SYS_ID // " + a.id.slice(0, 8) : "ID_SYS // " + a.id.slice(0, 8)}</span>
                  <span className="agent-launch-btn">LAUNCH ↗</span>
                </div>
              </button>
            ))}
          </div>

          {!agents.length && (
            <p style={{ marginTop: 20, color: "var(--muted)", textTransform: "uppercase", fontSize: 11 }}>
              {en
                ? "NO ACTIVE AGENTS MATCH QUERY. WRITE PROMPT DIRECTLY BELOW."
                : "NO SE ENCONTRARON AGENTES. ESCRIBE DIRECTAMENTE EN EL COMPOSITOR DE ABAJO."}
            </p>
          )}
        </section>
      </div>
    </main>
  );
}
