import { action, observable } from "mobx";

import { LoginState } from "./landing-page/LoginState";

// This allows app to control which top-level component is shown
export enum App {
  LOGIN,
  HOME,
  LIST,
}

/**
 * AppState is the root/state class; holds all state classes for the app
 */
export class AppState {
  @observable public app: App;
  public loginState: LoginState;

  constructor() {
    // Start by creating the login state and setting app enum to login
    this.app = App.HOME; // set to home until login completed
    this.loginState = new LoginState();
  }

  @action
  public toPage = (app: App) => {
    this.app = app;
  };
}
