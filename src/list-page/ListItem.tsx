import React from "react";

import { observer } from "mobx-react";

import { Button, Checkbox } from "@blueprintjs/core";

import { IListItem } from "./ListState";

interface ListItemProps {
  item: IListItem;
  checkItem: (id: number) => void;
  deleteItem: (id: number) => void;
}

@observer
export class ListItem extends React.Component<ListItemProps> {
  public render() {
    const item = this.props.item;
    const label =
      item.quantity !== "1"
        ? item.label + " (" + item.quantity + ")"
        : item.label;
    return (
      <div className={"list-item"}>
        <Checkbox
          large={true}
          label={label}
          checked={item.checked}
          onChange={() => this.props.checkItem(item.id)}
        />
        <Button
          minimal={true}
          icon={"trash"}
          onClick={() => this.props.deleteItem(item.id)}
        />
      </div>
    );
  }
}
