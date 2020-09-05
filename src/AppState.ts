import { action, observable } from "mobx";

import { LoginState } from "./landing-page/LoginState";
import { ListState } from "./list-page/ListState";

// This allows app to control which top-level component is shown
export enum App {
  LOGIN,
  HOME,
  MEALS,
  LIST,
}

/**
 * AppState is the root/state class; holds all state classes for the app
 */
export class AppState {
  @observable public app: App;
  public loginState: LoginState;
  public listState: ListState;

  constructor() {
    this.app = App.LIST;
    this.loginState = new LoginState();
    this.listState = new ListState();
  }

  @action
  public toPage = (app: App) => {
    this.app = app;
  };
}
