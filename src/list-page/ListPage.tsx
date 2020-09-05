import React from "react";

import { observer } from "mobx-react";

import { Button, Card, InputGroup } from "@blueprintjs/core";

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
    const ls = this.props.listState;
    return (
      <div className={"list-controls"}>
        <InputGroup
          value={ls.addItemInput}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            ls.setAddItemInput(event.target.value);
          }}
          rightElement={
            <Button
              minimal={true}
              icon={"insert"}
              disabled={!ls.addItemInputValid()}
              onClick={() => this.onAddListItem()}
            />
          }
        />
      </div>
    );
  }

  private onAddListItem() {
    const ls = this.props.listState;
    const itemId: number = ls.list.length;
    const itemLabel: string = ls.addItemInput;

    const listItem: IListItem = {
      id: itemId,
      label: itemLabel,
    };

    ls.addToList(listItem);
    ls.clearAddItemInput();
  }

  private renderList() {
    const ls = this.props.listState;
    const listItems: JSX.Element[] = [];
    ls.list.forEach((item) => {
      listItems.push(
        <ListItem
          key={"li-" + item.id}
          item={item}
          deleteItem={(id: number) => ls.deleteFromList(id)}
        />
      );
    });

    return <div className={"list"}>{listItems}</div>;
  }
}
