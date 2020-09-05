import React from "react";

import { Checkbox } from "@blueprintjs/core";

import { IListItem } from "./ListState";

interface ListItemProps {
  item: IListItem;
}

export class ListItem extends React.Component<ListItemProps> {
  public render() {
    return (
      <div key={"li-" + this.props.item.id} className={"list-item"}>
        <Checkbox label={this.props.item.label} />
      </div>
    );
  }
}
