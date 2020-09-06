import React from "react";

import { observer } from "mobx-react";

import { Button, InputGroup } from "@blueprintjs/core";

import { MealState } from "./MealState";

interface MVProps {
  mealState: MealState;
}

@observer
export class MealViewer extends React.Component<MVProps> {
  public render() {
    const ms = this.props.mealState;
    if (ms.selectedMeal === undefined) {
      return <div>Select a meal to view and edit...</div>;
    }

    return (
      <div className={"meal-viewer-container"}>
        {this.renderMealViewControls()}
        {this.renderMeal()}
      </div>
    );
  }

  private renderMealViewControls(): JSX.Element {
    const ms = this.props.mealState;
    const vs = ms.viewerState;
    const controls: JSX.Element[] = [];

    if (vs.editing) {
      controls.push(
        <Button
          key={"mve-cancel"}
          text={"Cancel"}
          onClick={() => vs.cancelEdits()}
        />
      );
      controls.push(
        <Button
          key={"mve-save"}
          text={"Save"}
          onClick={() => vs.saveEdits(ms.meals, ms.selectedMeal)}
        />
      );
    } else {
      controls.push(
        <Button
          key={"mv-edit"}
          text={"Edit"}
          icon={"edit"}
          onClick={() => vs.startEditing(ms.meals[ms.selectedMeal])}
        />
      );
    }

    return <div className={"meal-view-controls"}>{controls}</div>;
  }

  private renderMeal(): JSX.Element {
    const vs = this.props.mealState.viewerState;
    if (vs.editing) {
      return this.renderMealEditor();
    }

    return this.renderMealDetails();
  }

  private renderMealDetails(): JSX.Element {
    const ms = this.props.mealState;
    return (
      <div className={"meal-details-container"}>
        <h1>{ms.meals[ms.selectedMeal].title}</h1>
      </div>
    );
  }

  private renderMealEditor(): JSX.Element {
    const editMeal = this.props.mealState.viewerState.mealCopy;
    return (
      <div>
        <InputGroup
          value={editMeal.title}
          large={true}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            editMeal.title = event.target.value;
          }}
        />
      </div>
    );
  }
}
