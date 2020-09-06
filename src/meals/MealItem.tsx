import React from "react";

import { Card, Elevation } from "@blueprintjs/core";

import { Meal } from "./MealState";

interface MealItemProps {
  meal: Meal;
  selectedMeal: Meal;
  onClick: () => void;
}

export class MealItem extends React.Component<MealItemProps> {
  public render() {
    // Check if it's this meal that's selected
    let className: string = "meal-item";
    let elevation: Elevation = 1;
    if (this.props.selectedMeal === this.props.meal) {
      className += " selected";
      elevation = 3;
    }

    return (
      <Card
        className={className}
        elevation={elevation}
        onClick={() => this.props.onClick()}
      >
        {this.props.meal.title}
      </Card>
    );
  }
}