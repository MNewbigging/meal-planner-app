import React from "react";

import { observer } from "mobx-react";
import { action, observable } from "mobx";

import { Button, Checkbox } from "@blueprintjs/core";

import { IListItem } from "./ListState";

interface ListItemProps {
  item: IListItem;
  checkItem: (id: number) => void;
  deleteItem: (id: number) => void;
}

@observer
export class ListItem extends React.Component<ListItemProps> {
  @observable private hover: boolean = false;

  public render() {
    const item = this.props.item;
    const label =
      item.quantity !== "1"
        ? item.label + " (" + item.quantity + ")"
        : item.label;
    return (
      <div
        className={"list-item"}
        onMouseEnter={() => this.onMouseEnterExit(true)}
        onMouseLeave={() => this.onMouseEnterExit(false)}
      >
        <Checkbox
          large={true}
          label={label}
          checked={item.checked}
          onChange={() => this.props.checkItem(item.id)}
        />
        {this.hover && this.renderItemActionButtons(item)}
      </div>
    );
  }

  @action
  private onMouseEnterExit(val: boolean): void {
    this.hover = val;
  }

  private renderItemActionButtons(item: IListItem): JSX.Element {
    return (
      <div>
        <Button minimal={true} icon={"edit"} />
        <Button
          minimal={true}
          icon={"trash"}
          onClick={() => this.props.deleteItem(item.id)}
        />
      </div>
    );
  }
}
