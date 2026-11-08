import React from "react";
import font from "../../fonts/GeistMono.woff2?inline";
import { surfaceStyles } from "./surfaceStyles.js";
import { nativeScrollStyles } from "./nativeScroll.js";
import { Navigation } from "./surfaces/navigation/Navigation.jsx";
import { Header } from "./surfaces/header/Header.jsx";
import { History } from "./surfaces/history/History.jsx";
import { Welcome } from "./surfaces/welcome/Welcome.jsx";

export { Navigation, Header, History, Welcome };

const SURFACE_COMPONENTS = {
  navigation: Navigation,
  header: Header,
  history: History,
  welcome: Welcome,
};

/**
 * Root orchestrator for the Urano Acid Cyber-Brutalist template surfaces.
 */
export default function SurfaceApp({ sdk, snapshot }) {
  const en = snapshot.language === "en";
  const model = snapshot.model || {};
  const act = (action, payload = {}) => sdk.act(action, payload);
  const Component = SURFACE_COMPONENTS[snapshot.surface];

  return (
    <div className={`noel-surface ${snapshot.theme === "dark" ? "dark" : ""}`}>
      <style>
        {`@font-face{font-family:AcidMono;src:url('${font}') format('woff2');font-display:swap}` +
          surfaceStyles +
          nativeScrollStyles}
      </style>
      {Component && <Component model={model} en={en} act={act} />}
    </div>
  );
}
