import { observable } from "mobx";

export enum Settings {
  TAGS,
}

export class SettingsState {
  @observable selectedSetting: Settings = Settings.TAGS;
}
