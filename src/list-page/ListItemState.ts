import { action, observable } from "mobx";

export class ListItemState {
  @observable public hover: boolean = false;
  @observable public editing: boolean = false;
  @observable public editingItemLabel: string = "";
  @observable public editingItemQuantity: string = "";

  constructor(itemLabel: string, itemQuantity: string) {
    this.editingItemLabel = itemLabel;
    this.editingItemQuantity = itemQuantity;
  }

  @action
  public onMouseEnterExit(val: boolean): void {
    this.hover = val;
  }

  @action
  public startEditingItem(): void {
    this.editing = true;
  }

  @action
  public onEditLabel(val: string) {
    this.editingItemLabel = val;
  }

  @action
  public onEditQuantity(val: string) {
    this.editingItemQuantity = val;
  }

  @action
  public finishEditingItem(): void {
    this.editing = false;
  }
}
