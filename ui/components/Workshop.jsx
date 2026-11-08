import React, { useState } from "react";
import { nativeScrollStyles } from "./nativeScroll.js";

const FORGE_SNIPPETS = [
  {
    id: "arch-review",
    category: "ARCHITECTURE",
    title: "Senior System Architecture Audit",
    titleEs: "Auditoría de Arquitectura de Sistemas",
    prompt: `Actúa como un Principal Software Architect. Analiza el siguiente diseño/código buscando:
1. Cuellos de botella de rendimiento y escalabilidad (concurrencia, I/O, memoria).
2. Acoplamiento indebido y violación de principios SOLID o arquitectura hexagonal.
3. Resiliencia ante fallos: circuit breakers, reintentos exponenciales y degradación elegante.
4. Propuesta de refactorización con diagrama o especificación técnica concreta.`,
  },
  {
    id: "security-audit",
    category: "SECURITY",
    title: "Zero-Trust & Offensive Security Check",
    titleEs: "Revisión de Seguridad Ofensiva y Zero-Trust",
    prompt: `Actúa como un Especialista en Ciberseguridad Ofensiva (Red Team). Examina el contexto provisto contra:
- OWASP Top 10 (Inyecciones, Broken Auth, SSRF, Deserialización insegura).
- Fuga de secretos, claves hardcodeadas o logs excesivos.
- Validación estricta de esquemas y sanitización de inputs/outputs.
- Emite un reporte clasificado por severidad (CRITICAL, HIGH, MEDIUM, LOW) con PoC de remediación.`,
  },
  {
    id: "devops-cicd",
    category: "DEVOPS",
    title: "Production-Grade Docker & CI/CD Pipeline",
    titleEs: "Pipeline CI/CD y Dockerfile Optimizado para Producción",
    prompt: `Diseña un Dockerfile multi-stage de producción ultra ligero y seguro para esta aplicación, junto con un pipeline de GitHub Actions que incluya:
- Caché de capas de dependencias para builds ultra rápidos.
- Ejecución como usuario sin privilegios (non-root).
- Escaneo de vulnerabilidades con Trivy/Snyk.
- Tests automáticos y despliegue condicional por branch/tag.`,
  },
  {
    id: "refactor-clean",
    category: "CODE_QUALITY",
    title: "Deep Refactoring & Type Safety Maxima",
    titleEs: "Refactorización Profunda y Seguridad de Tipos",
    prompt: `Refactoriza el siguiente código priorizando:
1. Legibilidad implacable: elimina código espagueti y funciones de más de 30 líneas.
2. Inmutabilidad y manejo funcional de errores (evita excepciones silenciosas).
3. Type safety estricto: cero 'any', generics adecuados y discriminative unions.
4. Documentación concisa con ejemplos de uso y tests unitarios.`,
  },
  {
    id: "agentic-workflow",
    category: "AGENTS",
    title: "Autonomous Agent Task Specification",
    titleEs: "Especificación de Tarea para Agente Autónomo",
    prompt: `Define el protocolo de ejecución para un agente autónomo de IA:
- Rol y alcance delimitado (Guardrails explícitos).
- Formato de entrada esperado y esquema de salida JSON estricto.
- Manejo de ambigüedad y puntos de parada para confirmación humana (Human-in-the-loop).
- Criterios de aceptación verificables antes de marcar la tarea como DONE.`,
  },
];

export default function Workshop({ sdk }) {
  const [selectedCat, setSelectedCat] = useState("ALL");
  const [copiedId, setCopiedId] = useState(null);
  const [customParam, setCustomParam] = useState("");

  const snapshot = sdk?.snapshot || {};
  const en = snapshot.language === "en";
  const dark = snapshot.theme === "dark" || true;

  const categories = ["ALL", "ARCHITECTURE", "SECURITY", "DEVOPS", "CODE_QUALITY", "AGENTS"];

  const filtered = selectedCat === "ALL"
    ? FORGE_SNIPPETS
    : FORGE_SNIPPETS.filter((s) => s.category === selectedCat);

  const handleCopy = (snippet) => {
    let text = snippet.prompt;
    if (customParam.trim()) {
      text += `\n\n[CONTEXTO / STACK ESPECÍFICO]:\n${customParam.trim()}`;
    }
    navigator.clipboard.writeText(text);
    setCopiedId(snippet.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className={`forge-root ${dark ? "dark" : ""}`}>
      <style>{`
        ${nativeScrollStyles}
        .forge-root{
          min-height:100vh;
          background:#070707;
          color:#ffffff;
          font-family:ui-monospace, 'SF Mono', Monaco, Consolas, monospace;
          padding:24px 32px 48px;
          box-sizing:border-box;
        }
        .forge-header{
          border-bottom:2px solid #222;
          padding-bottom:18px;
          margin-bottom:24px;
        }
        .forge-ticker{
          background:#a3ff00;
          color:#000;
          font-weight:900;
          font-size:10px;
          letter-spacing:2px;
          padding:4px 12px;
          display:inline-block;
          margin-bottom:12px;
          border:2px solid #000;
          box-shadow:2px 2px 0 #000;
        }
        .forge-title{
          font-size:32px;
          font-weight:900;
          letter-spacing:-1px;
          margin:0 0 8px;
          text-transform:uppercase;
          display:flex;
          align-items:center;
          gap:12px;
        }
        .forge-title span{
          color:#a3ff00;
        }
        .forge-subtitle{
          font-size:12px;
          color:#888;
          max-width:680px;
          line-height:1.5;
          margin:0;
        }
        .forge-filters{
          display:flex;
          gap:8px;
          flex-wrap:wrap;
          margin:20px 0 24px;
        }
        .filter-btn{
          background:#121212;
          color:#aaa;
          border:1.5px solid #262626;
          padding:6px 14px;
          font-size:11px;
          font-weight:800;
          letter-spacing:1px;
          text-transform:uppercase;
          cursor:pointer;
          transition:all 0.1s ease;
        }
        .filter-btn:hover{
          border-color:#a3ff00;
          color:#fff;
        }
        .filter-btn.active{
          background:#a3ff00;
          color:#000;
          border-color:#a3ff00;
          box-shadow:3px 3px 0 #000;
        }
        .param-box{
          background:#0e0e0e;
          border:2px solid #262626;
          padding:14px 18px;
          margin-bottom:24px;
          box-shadow:4px 4px 0 #000;
        }
        .param-label{
          display:block;
          font-size:10.5px;
          font-weight:800;
          letter-spacing:1px;
          color:#a3ff00;
          margin-bottom:6px;
          text-transform:uppercase;
        }
        .param-input{
          width:100%;
          background:#141414;
          border:1.5px solid #333;
          padding:8px 12px;
          color:#fff;
          font-family:inherit;
          font-size:12px;
          box-sizing:border-box;
          outline:none;
        }
        .param-input:focus{
          border-color:#a3ff00;
        }
        .forge-grid{
          display:grid;
          grid-template-columns:repeat(auto-fill, minmax(340px, 1fr));
          gap:18px;
        }
        .snippet-card{
          background:#0d0d0d;
          border:2px solid #262626;
          padding:18px;
          display:flex;
          flex-direction:column;
          justify-content:space-between;
          box-shadow:3px 3px 0 #000;
          transition:all 0.12s ease;
        }
        .snippet-card:hover{
          border-color:#a3ff00;
          box-shadow:5px 5px 0 #a3ff00;
          transform:translate(-2px, -2px);
        }
        .card-top{
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom:10px;
        }
        .card-tag{
          font-size:9.5px;
          font-weight:900;
          letter-spacing:1px;
          color:#a3ff00;
          background:rgba(163,255,0,0.1);
          border:1px solid #a3ff00;
          padding:2px 8px;
        }
        .snippet-card h3{
          font-size:15px;
          font-weight:900;
          margin:0 0 10px;
          color:#fff;
          letter-spacing:-0.2px;
        }
        .snippet-preview{
          background:#050505;
          border:1px solid #1f1f1f;
          padding:10px 12px;
          font-size:11px;
          color:#888;
          line-height:1.45;
          max-height:110px;
          overflow:hidden;
          text-overflow:ellipsis;
          margin-bottom:16px;
          white-space:pre-wrap;
        }
        .copy-btn{
          background:#a3ff00;
          color:#000;
          border:2px solid #000;
          padding:8px 16px;
          font-weight:900;
          font-size:11px;
          letter-spacing:1px;
          text-transform:uppercase;
          cursor:pointer;
          box-shadow:2px 2px 0 #000;
          display:flex;
          align-items:center;
          justify-content:center;
          gap:6px;
          transition:all 0.1s ease;
        }
        .copy-btn:hover{
          transform:translate(-1px, -1px);
          box-shadow:3px 3px 0 #000;
        }
        .copy-btn.copied{
          background:#fff;
          color:#000;
        }
      `}</style>

      <div className="forge-header">
        <span className="forge-ticker">⚡ URANO ACID // TACTICAL PROMPT FORGE ⚡</span>
        <h1 className="forge-title">
          PROMPT <span>FORGE</span>
        </h1>
        <p className="forge-subtitle">
          {en
            ? "Engineered prompts designed for autonomous agents in Urano Desktop. Copy with one click or inject custom context."
            : "Prompts tácticos de alto rendimiento diseñados para agentes autónomos en Urano Desktop. Copia en un clic o inyecta tu contexto específico."}
        </p>
      </div>

      <div className="param-box">
        <label className="param-label">
          {en ? "// INJECT CUSTOM STACK / CONTEXT (OPTIONAL)" : "// INYECTAR STACK / CONTEXTO ADICIONAL (OPCIONAL)"}
        </label>
        <input
          className="param-input"
          placeholder={
            en
              ? "e.g. Next.js 15, PostgreSQL, Kubernetes, Strict TypeScript..."
              : "ej. React 19, Node.js, microservicios, TypeScript estricto..."
          }
          value={customParam}
          onChange={(e) => setCustomParam(e.target.value)}
        />
      </div>

      <div className="forge-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${selectedCat === cat ? "active" : ""}`}
            onClick={() => setSelectedCat(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="forge-grid">
        {filtered.map((s) => (
          <div key={s.id} className="snippet-card">
            <div>
              <div className="card-top">
                <span className="card-tag">[{s.category}]</span>
              </div>
              <h3>{en ? s.title : s.titleEs}</h3>
              <div className="snippet-preview">{s.prompt}</div>
            </div>
            <button
              className={`copy-btn ${copiedId === s.id ? "copied" : ""}`}
              onClick={() => handleCopy(s)}
            >
              {copiedId === s.id
                ? en
                  ? "✓ COPIED TO CLIPBOARD"
                  : "✓ COPIADO AL PORTAPAPELES"
                : en
                  ? "COPY PROMPT ⚡"
                  : "COPIAR PROMPT ⚡"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
