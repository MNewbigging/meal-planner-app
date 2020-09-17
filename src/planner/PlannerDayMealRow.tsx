import React from "react";

import { observer } from "mobx-react";

import { Button, Tag } from "@blueprintjs/core";

import { MealSelect } from "../components/MealSelect";
import { IMeal, mealState } from "../state/MealState";

/**
 * A meal row lives in a planner day card, and makes up the meal input
 * for one meal - breakfast, lunch etc.
 */

interface MealRowProps {
  meals: IMeal[]; // the meals chosen for this meal row
  label: string; // name of the meal for this meal row
  filterTagId: string; // id of tag to filter options by
}

@observer
export class PlannerDayMealRow extends React.Component<MealRowProps> {
  private mealSelectItems: IMeal[] = [];
  constructor(props: MealRowProps) {
    super(props);

    const allMeals: IMeal[] = mealState.getMeals();
    const filteredMeals = allMeals.filter((meal) => meal.tags.includes(this.props.filterTagId));
    this.mealSelectItems = filteredMeals;
  }

  public render() {
    return (
      <div className={"day-item-row"}>
        <div className={"day-item-label"}>{this.props.label}</div>
        {this.renderMeals()}
        <div className={"day-item-actions"}>
          <MealSelect
            items={this.mealSelectItems}
            onItemSelect={(meal) => this.onMealSelect(meal)}
            buttonText={"Add"}
          />
          <Button icon={"eye-open"} text={"Browse"} />
        </div>
      </div>
    );
  }

  private renderMeals(): JSX.Element {
    const toRender: JSX.Element[] = [];
    this.props.meals.forEach((meal, index) => {
      toRender.push(
        <Tag className={"di-meal-item"} onRemove={() => this.removeMeal(index)}>
          {meal.title}
        </Tag>
      );
    });

    return <div className={"day-item-meals"}>{toRender}</div>;
  }

  private removeMeal(index: number): void {
    this.props.meals.splice(index, 1);
  }

  private onMealSelect(meal: IMeal): void {
    this.props.meals.push(meal);
  }
}
