import React from "react";

import { observer } from "mobx-react";

import { Button } from "@blueprintjs/core";

import { ListState } from "./ListState";

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
        <Button text={"dummy"} />
      </div>
    );
  }

  private onAddListItem() {
    this.props.listState.addToList("new item");
  }

  private renderList() {
    // Grab all the list items
    const listItems: JSX.Element[] = [];
    this.props.listState.list.forEach((item) => {
      listItems.push(<div>{item}</div>);
    });

    return <div className={"list"}>{listItems}</div>;
  }
}
