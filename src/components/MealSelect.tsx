import React from "react";

import { Button, MenuItem } from "@blueprintjs/core";
import { IItemRendererProps, Select } from "@blueprintjs/select";

import { IMeal } from "../state/MealState";

const IMealSelect = Select.ofType<IMeal>();

interface MealSelectProps {
  items: IMeal[];
  onItemSelect: (choice: IMeal) => void;
  buttonText: string;
}

export class MealSelect extends React.Component<MealSelectProps> {
  public render() {
    return (
      <IMealSelect
        items={this.props.items}
        itemRenderer={this.itemRenderer}
        onItemSelect={(meal) => this.props.onItemSelect(meal)}
        itemListPredicate={this.filterByQuery}
        noResults={<MenuItem disabled={true} text="No results..." />}
      >
        <Button text={this.props.buttonText} rightIcon={"caret-down"} />
      </IMealSelect>
    );
  }

  private itemRenderer(meal: IMeal, props: IItemRendererProps) {
    return <MenuItem key={"meal-opt-" + meal.id} text={meal.title} onClick={props.handleClick} />;
  }

  private filterByQuery = (query: string, items: IMeal[]): IMeal[] => {
    let results: IMeal[] = [];
    // Check for empty query
    if (query === "") {
      results = items;
      return results;
    }
    items.forEach((item) => {
      if (item.title.toLowerCase().includes(query.toLowerCase())) {
        results.push(item);
      }
    });

    return results;
  };
}
