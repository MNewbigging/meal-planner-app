import { action, observable } from "mobx";

import { ListState } from "./list/ListState";
import { LoginState } from "./login/LoginState";
import { MealPageState } from "./meals/MealPageState";
import { SettingsState } from "./settings/SettingsState";

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
  public mealState: MealPageState;
  public settingsState: SettingsState;

  constructor() {
    this.app = App.SETTINGS;
    this.loginState = new LoginState();
    this.listState = new ListState();
    this.mealState = new MealPageState();
    this.settingsState = new SettingsState();
  }

  @action
  public toPage = (app: App) => {
    this.app = app;
  };
}
