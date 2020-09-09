import React from "react";

import { observer } from "mobx-react";

import { Button, Card, InputGroup } from "@blueprintjs/core";

import SplitPane, { Pane } from "react-split-pane";

import { IMeal, mealState } from "../state/MealState";
import { MealItem } from "./MealItem";
import { MealPageState } from "./MealPageState";
import { MealViewer } from "./MealViewer";

import "../misc-styles/pane-resizer.scss";
import "./meals-page.scss";

interface MealsPageProps {
  mealPageState: MealPageState;
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
            <MealViewer mealState={this.props.mealPageState} />
          </Pane>
        </SplitPane>
      </div>
    );
  }

  private renderMealControls(): JSX.Element {
    const ms = this.props.mealPageState;
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
    const ms = this.props.mealPageState;
    const mealId: number = mealState.createMealId();
    const mealTitle: string = ms.addMealTitle;
    const newMeal: IMeal = {
      id: mealId,
      title: mealTitle,
      method: "",
      servings: "2",
      tags: [],
    };
    mealState.addMeal(newMeal);
    ms.selectMeal(mealId);
    ms.clearMealTitle();
  }

  private renderMeals(): JSX.Element {
    const ms = this.props.mealPageState;
    const meals: JSX.Element[] = [];
    const iMeals: IMeal[] = mealState.getMeals();
    iMeals.forEach((meal) => {
      meals.push(
        <MealItem
          key={"mi-" + meal.id}
          meal={meal}
          selectedMeal={iMeals[ms.selectedMeal]}
          onClick={() => ms.selectMeal(meal.id)}
        />
      );
    });

    return <div className={"meals-list-container"}>{meals}</div>;
  }
}
