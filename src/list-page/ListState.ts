import { action, observable } from "mobx";

export interface IListItem {
  id: number;
  label: string;
  checked: boolean;
  quantity: string;
}

export class ListState {
  @observable public list: IListItem[] = [];
  @observable public addItemLabel: string = "";
  @observable public addItemQuantity: string = "1";

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
    this.addItemLabel = val;
  }

  @action
  public clearAddItemFields(): void {
    this.addItemLabel = "";
    this.addItemQuantity = "1";
  }

  public addItemInputValid(): boolean {
    return this.addItemLabel !== "";
  }

  @action
  public setItemChecked(id: number): void {
    const item = this.list.find((listItem) => listItem.id === id);
    item.checked = !item.checked;
  }

  @action
  public setAddItemQuantity(quantity: string) {
    this.addItemQuantity = quantity;
  }
}
