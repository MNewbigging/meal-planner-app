import { action, observable } from "mobx";

export enum Settings {
  TAGS,
}

export class SettingsState {
  @observable selectedSetting: Settings = Settings.TAGS;
  @observable tagCreatorInput: string = "";

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
}
