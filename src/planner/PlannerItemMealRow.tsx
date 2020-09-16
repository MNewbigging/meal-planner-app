import React from "react";

import { Button } from "@blueprintjs/core";

import { MealSelect } from "../components/MealSelect";
import { IMeal, mealState } from "../state/MealState";

/**
 * A meal row lives in a planner day card, and makes up the meal input
 * for one meal - breakfast, lunch etc.
 */

interface MealRowProps {
  label: string; // name of the meal for this meal row
  filterTagId: string; // id of tag to filter options by
}

export class PlannerItemMealRow extends React.Component<MealRowProps> {
  private mealSelectItmes: IMeal[] = [];
  constructor(props: MealRowProps) {
    super(props);

    const allMeals: IMeal[] = mealState.getMeals();
    const filteredMeals = allMeals.filter((meal) => meal.tags.includes(this.props.filterTagId));
    this.mealSelectItmes = filteredMeals;
  }

  public render() {
    return (
      <div className={"day-item-row"}>
        <div className={"day-item-label"}>{this.props.label}</div>
        <div className={"day-item-meal"}>
          <MealSelect
            items={this.mealSelectItmes}
            onItemSelect={(meal) => this.onMealSelect(meal)}
            buttonText={"Quick add"}
          />
          <Button icon={"eye-open"} text={"Browse meals"} />
        </div>
      </div>
    );
  }

  private onMealSelect(meal: IMeal): void {
    console.log("picked a meal: ", meal.title);
  }
}
