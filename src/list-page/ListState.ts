import { action, observable } from "mobx";

export interface IListItem {
  id: number;
  label: string;
}

export class ListState {
  @observable public list: IListItem[] = [];
  @observable public addItemInput: string = "";

  @action
  public addToList(listItem: IListItem): void {
    this.list.push(listItem);
  }

  @action
  public deleteFromList(id: number): void {
    this.list = this.list.filter((item) => item.id !== id);
  }

  @action
  public setAddItemInput(val: string): void {
    this.addItemInput = val;
  }

  @action
  public clearAddItemInput(): void {
    this.addItemInput = "";
  }

  public addItemInputValid(): boolean {
    return this.addItemInput !== "";
  }
}
