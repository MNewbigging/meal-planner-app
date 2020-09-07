import React, { SyntheticEvent } from "react";

import { observer } from "mobx-react";

import { Button, InputGroup, Tag, TextArea } from "@blueprintjs/core";
import { MultiSelect } from "@blueprintjs/select";

import { ITag, SystemTags } from "../fixed/SystemTags";
import { MealState } from "./MealState";

import "./meal-viewer.scss";

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
    const meal = ms.meals[ms.selectedMeal];
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

  private renderMealEditor(): JSX.Element {
    const editMeal = this.props.mealState.viewerState.mealCopy;
    return (
      <div className={"meal-editor-container"}>
        <p>Tags:</p>
        {this.renderTagsEditor()}
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

  private renderTagsEditor(): JSX.Element {
    const tags: ITag[] = SystemTags.getSystemTags();
    const selectedTags: ITag[] = this.props.mealState.viewerState.selectedTags;
    console.log("rendering tag chooser");
    return (
      <MultiSelect
        key={"tag-select-" + selectedTags.length}
        resetOnSelect={true}
        items={tags}
        selectedItems={selectedTags}
        onItemSelect={(item: ITag, event?: SyntheticEvent<HTMLElement>) =>
          this.onTagSelect(item, event)
        }
        itemRenderer={(tag: ITag, {}) => this.renderSelectedTag(tag)}
        tagRenderer={(tag: ITag) => this.renderSelectedTag(tag)}
      />
    );
  }

  private onTagSelect = (tag: ITag, event?: SyntheticEvent<HTMLElement>) => {
    console.log("selected tag: ", tag.label);
    this.props.mealState.viewerState.selectTag(tag);
  };

  private renderSelectedTag(tag: ITag): JSX.Element {
    return (
      <Tag
        key={tag.id}
        interactive={true}
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          this.onTagSelect(tag);
        }}
      >
        {tag.label}
      </Tag>
    );
  }
}
