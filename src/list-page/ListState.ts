import { action, observable } from "mobx";

export interface IListItem {
  id: number;
  label: string;
}

export class ListState {
  @observable list: IListItem[] = [];

  @action
  public addToList(listItem: IListItem) {
    this.list.push(listItem);
  }

  @action
  public deleteFromList(id: number) {
    this.list = this.list.filter((item) => item.id !== id);
  }
}
