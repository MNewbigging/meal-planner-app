import { action, observable } from "mobx";

export enum Settings {
  TAGS,
}

export class SettingsState {
  @observable selectedSetting: Settings = Settings.TAGS;
  @observable tagCreatorInput: string = "";
  @observable tagCreatorColor: string = "#999";

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
}
