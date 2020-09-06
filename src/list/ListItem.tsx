import React from "react";

import { observer } from "mobx-react";

import { Button, Checkbox, InputGroup } from "@blueprintjs/core";

import { ListItemState } from "./ListItemState";
import { IListItem } from "./ListState";

interface ListItemProps {
  item: IListItem;
  checkItem: (id: number) => void;
  deleteItem: (id: number) => void;
  updateItem: (id: number, newItem: IListItem) => void;
}

@observer
export class ListItem extends React.Component<ListItemProps> {
  private liState: ListItemState;

  constructor(props: ListItemProps) {
    super(props);
    this.liState = new ListItemState(props.item.label, props.item.quantity);
  }

  public render() {
    if (this.liState.editing) {
      return this.renderItemInEditMode(this.props.item);
    }

    return this.renderItemInViewMode(this.props.item);
  }

  private renderItemInViewMode(item: IListItem): JSX.Element {
    const lis = this.liState;
    const label =
      item.quantity !== "1"
        ? item.label + " (" + item.quantity + ")"
        : item.label;

    return (
      <div
        className={"list-item"}
        onMouseEnter={() => lis.onMouseEnterExit(true)}
        onMouseLeave={() => lis.onMouseEnterExit(false)}
      >
        <Checkbox
          large={true}
          label={label}
          checked={item.checked}
          onChange={() => this.props.checkItem(item.id)}
        />
        {lis.hover && this.renderItemActionButtons(item)}
      </div>
    );
  }

  private renderItemActionButtons(item: IListItem): JSX.Element {
    return (
      <div>
        <Button
          minimal={true}
          icon={"edit"}
          onClick={() => this.liState.startEditingItem()}
        />
        <Button
          minimal={true}
          icon={"trash"}
          onClick={() => this.props.deleteItem(item.id)}
        />
      </div>
    );
  }

  private renderItemInEditMode(item: IListItem): JSX.Element {
    const lis = this.liState;
    return (
      <div className={"list-item"}>
        <InputGroup
          value={lis.editingItemLabel}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            lis.onEditLabel(event.target.value);
          }}
          rightElement={
            <InputGroup
              className={"quantity-input"}
              type={"number"}
              step={1}
              value={lis.editingItemQuantity}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                lis.onEditQuantity(event.target.value);
              }}
              rightElement={
                <Button
                  minimal={true}
                  icon={"tick-circle"}
                  fill={true}
                  style={{ marginTop: "3px" }}
                  onClick={() => {
                    this.onUpdateItem(item);
                  }}
                />
              }
            />
          }
        />
      </div>
    );
  }

  private onUpdateItem(item: IListItem): void {
    const lis = this.liState;
    const newItem: IListItem = {
      id: item.id,
      label: lis.editingItemLabel,
      quantity: lis.editingItemQuantity,
      checked: item.checked,
    };
    this.props.updateItem(item.id, newItem);
    lis.finishEditingItem();
  }
}
