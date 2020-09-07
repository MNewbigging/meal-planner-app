import React from "react";

import { observer } from "mobx-react";

import { Button, Card, InputGroup } from "@blueprintjs/core";

import SplitPane, { Pane } from "react-split-pane";

import { MealItem } from "./MealItem";
import { Meal, MealState } from "./MealState";
import { MealViewer } from "./MealViewer";

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
          defaultSize={"60vw"}
          minSize={180}
        >
          <Pane className={"meals-pane"}>
            {this.renderMealControls()}
            {this.renderMeals()}
          </Pane>
          <Pane className={"details-pane"}>
            <MealViewer mealState={this.props.mealState} />
          </Pane>
        </SplitPane>
      </div>
    );
  }

  private renderMealControls(): JSX.Element {
    const ms = this.props.mealState;
    return (
      <Card className={"meals-control-container"} elevation={2}>
        <div className={"meals-control"}>
          <InputGroup
            value={ms.addMealTitle}
            type={"text"}
            placeholder={"Add meal title..."}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              ms.setMealTitle(event.target.value);
            }}
            rightElement={
              <Button
                minimal={true}
                icon={"insert"}
                disabled={!ms.addMealTitleValid()}
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
      method: "",
      servings: "2",
      tags: [],
    };
    ms.addMeal(newMeal);
    ms.selectMeal(mealId);
    ms.clearMealTitle();
  }

  private renderMeals(): JSX.Element {
    const ms = this.props.mealState;
    const meals: JSX.Element[] = [];
    ms.meals.forEach((meal) => {
      meals.push(
        <MealItem
          key={"mi-" + meal.id}
          meal={meal}
          selectedMeal={ms.meals[ms.selectedMeal]}
          onClick={() => ms.selectMeal(meal.id)}
        />
      );
    });

    return <div className={"meals-list-container"}>{meals}</div>;
  }
}
