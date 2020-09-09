import React from "react";

import { observer } from "mobx-react";

import { Button, InputGroup, TextArea } from "@blueprintjs/core";

import { TagMultiSelect } from "../components/TagMultiSelect";
import { mealState } from "../state/MealState";
import { ITag, tagState } from "../state/TagState";
import { MealPageState } from "./MealPageState";

import "./meal-viewer.scss";

interface MVProps {
  mealState: MealPageState;
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
      controls.push(<Button key={"mve-cancel"} text={"Cancel"} onClick={() => vs.cancelEdits()} />);
      controls.push(
        <Button
          key={"mve-save"}
          text={"Save"}
          onClick={() => vs.saveEdits(mealState.getMeals(), ms.selectedMeal)}
        />
      );
    } else {
      controls.push(
        <Button
          key={"mv-edit"}
          text={"Edit"}
          icon={"edit"}
          onClick={() => vs.startEditing(mealState.getMeals()[ms.selectedMeal])}
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
    const meal = mealState.getMeal(ms.selectedMeal);
    return (
      <div className={"meal-details-container"}>
        <h1 className={"title-field"}>{meal.title}</h1>
        <p className={"servings-field"}>
          <span>Servings: </span>
          {meal.servings}
        </p>
        <h3>Method:</h3>
        <p className={"method-field"}>{meal.method}</p>
      </div>
    );
  }

  // TODO - put this in its own component
  private renderMealEditor(): JSX.Element {
    const editMeal = this.props.mealState.viewerState.mealCopy;
    const tags: ITag[] = tagState.getAllTags();
    return (
      <div className={"meal-editor-container"}>
        <p>Tags:</p>
        <TagMultiSelect items={tags} meal={editMeal} />
        <p>Title:</p>
        <InputGroup
          className={"title-field edit"}
          value={editMeal.title}
          large={true}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            editMeal.title = event.target.value;
          }}
        />
        <p>Servings:</p>
        <InputGroup
          className={"servings-field edit"}
          value={editMeal.servings}
          type={"number"}
          step={1}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            editMeal.servings = event.target.value;
          }}
        />
        <h3>Method:</h3>
        <TextArea
          className={"method-field edit"}
          fill={true}
          value={editMeal.method}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
            editMeal.method = event.target.value;
          }}
        />
      </div>
    );
  }
}
