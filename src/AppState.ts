import { action, observable } from "mobx";

import { ListState } from "./list/ListState";
import { LoginState } from "./login/LoginState";
import { MealPageState } from "./meals/MealPageState";
import { SettingsState } from "./settings/SettingsState";
import { PlannerPageState } from "./planner/PlannerPageState";

// This allows app to control which top-level component is shown
export enum App {
  LOGIN,
  HOME,
  MEALS,
  PLANNER,
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
  public plannerState: PlannerPageState;

  constructor() {
    this.app = App.PLANNER;
    this.loginState = new LoginState();
    this.listState = new ListState();
    this.mealState = new MealPageState();
    this.settingsState = new SettingsState();
    this.plannerState = new PlannerPageState();
  }

  @action
  public toPage = (app: App) => {
    this.app = app;
  };
}
