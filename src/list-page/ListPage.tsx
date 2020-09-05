import React from "react";

import { observer } from "mobx-react";

import { Button } from "@blueprintjs/core";

import { ListState, IListItem } from "./ListState";
import { ListItem } from "./ListItem";

import "./list-page.scss";

interface ListPageProps {
  listState: ListState;
}

@observer
export class ListPage extends React.Component<ListPageProps> {
  public render() {
    return (
      <div className={"page-container"}>
        <div className={"list-container"}>
          {this.renderListControls()}
          {this.renderList()}
        </div>
      </div>
    );
  }

  private renderListControls(): JSX.Element {
    return (
      <div className={"list-controls"}>
        <Button text={"Add item"} onClick={() => this.onAddListItem()} />
      </div>
    );
  }

  private onAddListItem() {
    const itemId: number = this.props.listState.list.length;
    const listItem: IListItem = {
      id: itemId,
      label: "new item",
    };
    this.props.listState.addToList(listItem);
  }

  private renderList() {
    const listItems: JSX.Element[] = [];
    this.props.listState.list.forEach((item) => {
      listItems.push(<ListItem key={"li-" + item.id} item={item} />);
    });

    return <div className={"list"}>{listItems}</div>;
  }
}
