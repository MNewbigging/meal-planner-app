import React from "react";

import { Button, Checkbox } from "@blueprintjs/core";

import { IListItem } from "./ListState";

interface ListItemProps {
  item: IListItem;
  deleteItem: (id: number) => void;
}

export class ListItem extends React.Component<ListItemProps> {
  public render() {
    return (
      <div className={"list-item"}>
        <Checkbox large={true} label={this.props.item.label} />
        <Button
          minimal={true}
          icon={"trash"}
          onClick={() => this.props.deleteItem(this.props.item.id)}
        />
      </div>
    );
  }
}
