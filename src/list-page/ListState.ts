import { action, observable } from "mobx";

export class ListState {
  @observable list: string[] = [];

  @action
  public addToList(listItem: string) {
    this.list.push(listItem);
  }
}
