import { action, observable } from "mobx";

import { ListState } from "./list/ListState";
import { LoginState } from "./login/LoginState";
import { MealState } from "./meals/MealState";

// This allows app to control which top-level component is shown
export enum App {
  LOGIN,
  HOME,
  MEALS,
  LIST,
  SETTINGS,
}

/**
 * AppState is the root/state class; holds all state classes for the app
 */
export class AppState {
  @observable public app: App;
  public loginState: LoginState;
  public listState: ListState;
  public mealState: MealState;

  constructor() {
    this.app = App.MEALS;
    this.loginState = new LoginState();
    this.listState = new ListState();
    this.mealState = new MealState();
  }

  @action
  public toPage = (app: App) => {
    this.app = app;
  };
}
