import React from "react";
import ReactDOM from "react-dom";

import { ApplicationBody } from "./application/ApplicationBody";
import { AppState } from "./AppState";

import "./app.scss";

/**
 * App.ts is the main entry point for the application.
 */
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

// Where it all begins...
const rootElement = document.getElementById("app-root");
if (rootElement) {
  const app = new App(rootElement);
}
