import React from "react";

import { observer } from "mobx-react";

import { Button, Card, InputGroup } from "@blueprintjs/core";

import SplitPane, { Pane } from "react-split-pane";

import { MealItem } from "./MealItem";
import { Meal, MealState } from "./MealState";

import "../misc-styles/pane-resizer.scss";
import "./meals-page.scss";

interface MealsPageProps {
  mealState: MealState;
}

@observer
export class MealsPage extends React.Component<MealsPageProps> {
  public render() {
    return (
      <div className={"page-container"}>
        <SplitPane
          className={"meals-page-panes"}
          split={"vertical"}
          defaultSize={"70vw"}
          minSize={180}
        >
          <Pane className={"meals-pane"}>
            {this.renderMealControls()}
            {this.renderMeals()}
          </Pane>
          <Pane className={"details-pane"}>RIGHT</Pane>
        </SplitPane>
      </div>
    );
  }

  private renderMealControls(): JSX.Element {
    return (
      <Card className={"meals-control-container"}>
        <div className={"meals-control"}>
          <InputGroup
            value={this.props.mealState.addMealTitle}
            type={"text"}
            placeholder={"Add meal title..."}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              this.props.mealState.setMealTitle(event.target.value);
            }}
            rightElement={
              <Button
                minimal={true}
                icon={"insert"}
                onClick={() => this.onAddMeal()}
              />
            }
          />
        </div>
      </Card>
    );
  }

  private onAddMeal(): void {
    const ms = this.props.mealState;
    const mealId: number = ms.meals.length;
    const mealTitle: string = ms.addMealTitle;
    const newMeal: Meal = {
      id: mealId,
      title: mealTitle,
    };
    ms.addMeal(newMeal);
    ms.clearMealTitle();
  }

  private renderMeals(): JSX.Element {
    const meals: JSX.Element[] = [];
    this.props.mealState.meals.forEach((meal) => {
      meals.push(<MealItem key={"mi-" + meal.id} meal={meal} />);
    });

    return <div className={"meals-list-container"}>{meals}</div>;
  }
}
