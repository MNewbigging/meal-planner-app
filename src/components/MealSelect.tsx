import React from "react";

import { Select } from "@blueprintjs/select";

import { MealSelectState } from "./MealSelectState";

export class MealSelect extends React.Component {
  private selectState: MealSelectState = new MealSelectState();

  public render() {
    const items = this.selectState.testItems;
    return (
      <Select
        key={"sel"}
        items={items}
        onItemSelect={this.onItemSelect}
        itemRenderer={this.itemRenderer}
      />
    );
  }

  private onItemSelect = (item: string): void => {
    console.log("picked: ", item);
  };

  private itemRenderer(item: string) {
    return <div>{item}</div>;
  }
}

/**
 * items - meals, filtered by tag (breakfast, lunch etc)
 *
 */
