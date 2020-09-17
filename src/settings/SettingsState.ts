import { action, observable } from "mobx";

export enum Settings {
  TAGS,
  PLANNER,
}

export class SettingsState {
  @observable selectedSetting: Settings = Settings.TAGS;
  @observable tagCreatorInput: string = "";
  @observable tagCreatorColor: string = "#999";
  // This can't currently link to planner state, unless:
  // - planner state is a singleton (not enough reason just now)
  // - this writes to db, planner state gets from db
  @observable defaultPlannerDays: string = "7";

  @action
  public setSelectedSetting(setting: Settings) {
    this.selectedSetting = setting;
  }

  @action
  public setTagCreatorInput(val: string): void {
    this.tagCreatorInput = val;
  }

  @action
  public clearTagCreatorInput(): void {
    this.tagCreatorInput = "";
  }

  public tagCreatorInputValid(): boolean {
    return this.tagCreatorInput !== "";
  }

  @action
  public setTagCreatorColor(val: string): void {
    this.tagCreatorColor = val;
  }

  @action
  setDefaultPlannerDays(val: string): void {
    this.defaultPlannerDays = val;
  }
}
