import React from "react";

import { observer } from "mobx-react";

import { Button, Card } from "@blueprintjs/core";

import { ListItem } from "./ListItem";
import { IListItem, ListState } from "./ListState";

import "./list-page.scss";

interface ListPageProps {
  listState: ListState;
}

@observer
export class ListPage extends React.Component<ListPageProps> {
  public render() {
    return (
      <div className={"page-container"}>
        <Card className={"list-container"} elevation={2}>
          {this.renderListControls()}
          {this.renderList()}
        </Card>
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
      listItems.push(
        <ListItem
          key={"li-" + item.id}
          item={item}
          deleteItem={(id: number) => this.props.listState.deleteFromList(id)}
        />
      );
    });

    return <div className={"list"}>{listItems}</div>;
  }
}
