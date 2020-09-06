import React from "react";

import { MealState } from "./MealState";

interface MVProps {
  mealState: MealState;
}

export class MealViewer extends React.Component<MVProps> {
  public render() {
    const ms = this.props.mealState;
    if (!ms.selectedMeal) {
      return <div>Select a meal to view and edit...</div>;
    }

    return <div>MEAL DETAILS</div>;
  }
}
