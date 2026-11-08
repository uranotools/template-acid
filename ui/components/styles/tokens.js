/**
 * Full Cyber-Brutalist & Acid Green tokens for Urano Acid.
 */
export const tokensStyles = `
*{box-sizing:border-box}
html,body,#root{margin:0;width:100%;height:100%}
button,input{font:inherit}
button{cursor:pointer;color:inherit;touch-action:manipulation}
button:disabled{cursor:default;opacity:.4}
button:focus-visible,input:focus-visible{outline:2px solid var(--acid) !important;outline-offset:2px}
svg{display:block;flex-shrink:0}
p,h1,h2,h3{margin:0}

/* Universal Monospace Font Rule */
body, button, input, textarea, select {
  font-family: AcidMono, ui-monospace, 'SF Mono', Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace !important;
}

.noel-surface{
  --bg:#f4f4f4;
  --panel:#ffffff;
  --elevated:#ffffff;
  --ink:#000000;
  --muted:#555555;
  --line:#000000;
  --line-strong:#000000;
  --line-soft:#cccccc;
  --acid:#84db00;
  --acid-bg:#84db00;
  --acid-ink:#000000;
  --wine:#84db00;
  --gold:#84db00;
  --green:#84db00;
  --selected:#e8f9d0;
  --rail:#eaeaea;
  --border-width:2px;
  --hard-shadow:3px 3px 0px #000000;
  --hard-shadow-acid:3px 3px 0px #84db00;
  background:var(--bg);
  color:var(--ink);
  height:100%;
  font:12.5px/1.4 AcidMono, ui-monospace, 'SF Mono', Menlo, Monaco, Consolas, monospace;
  color-scheme:light;
  -webkit-font-smoothing:antialiased;
}

.noel-surface.dark{
  --bg:#050505;
  --panel:#0a0a0a;
  --elevated:#121212;
  --ink:#ffffff;
  --muted:#888888;
  --line:#262626;
  --line-strong:#a3ff00;
  --line-soft:#1a1a1a;
  --acid:#a3ff00;
  --acid-bg:#a3ff00;
  --acid-ink:#000000;
  --wine:#a3ff00;
  --gold:#a3ff00;
  --green:#a3ff00;
  --selected:#131f00;
  --rail:#050505;
  --border-width:2px;
  --hard-shadow:3px 3px 0px #1a1a1a;
  --hard-shadow-acid:3px 3px 0px #a3ff00;
  color-scheme:dark;
}

/* Mechanical Button Feedback */
.noel-surface button:active:not(:disabled){
  transform:translate(1px, 1px) !important;
}

/* Custom Cyberpunk Scrollbars */
.noel-surface ::-webkit-scrollbar{width:6px;height:6px}
.noel-surface ::-webkit-scrollbar-track{background:#000000}
.noel-surface ::-webkit-scrollbar-thumb{background:var(--acid);border-radius:0}
`;
