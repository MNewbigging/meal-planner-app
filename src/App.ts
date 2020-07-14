import React from "react";
import ReactDOM from "react-dom";

import { ApplicationBody, ApplicationProps } from "./ApplicationBody";
import { AppState } from "./AppState";

class App {
  // Perform app setup here
  constructor(parent: HTMLElement) {
    // Create app state
    const appState = new AppState();

    // Create top-level app component with state
    const app = React.createElement(ApplicationBody, { appState });

    // Render it to DOM
    ReactDOM.render(app, parent);
  }
}

// ENTRY POINT FOR APP
const rootElement = document.getElementById("app-root");
if (rootElement) {
  const app = new App(rootElement);
}
