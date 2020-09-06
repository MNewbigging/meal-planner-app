import React from "react";

import { Card } from "@blueprintjs/core";

import { Meal } from "./MealState";

interface MealItemProps {
  meal: Meal;
}

export class MealItem extends React.Component<MealItemProps> {
  public render() {
    return <Card className={"meal-item"}>{this.props.meal.title}</Card>;
  }
}
