import { LoginState } from "./landing-page/LoginState";

/**
 * AppState is the root/state class; holds all state classes for the app
 */
export class AppState {
  public loginState: LoginState;

  constructor() {
    this.loginState = new LoginState();
  }
}
