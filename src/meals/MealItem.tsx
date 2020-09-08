import React from "react";

import { Card, Elevation, Tag } from "@blueprintjs/core";

import { SystemTags } from "../fixed/SystemTags";
import { Meal } from "./MealState";

import "./meal-item.scss";

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
      <Card className={className} elevation={elevation} onClick={() => this.props.onClick()}>
        {this.renderTitle()}
        {this.renderTags()}
      </Card>
    );
  }

  private renderTitle(): JSX.Element {
    return <div className={"meal-title"}>{this.props.meal.title}</div>;
  }

  private renderTags(): JSX.Element {
    const toRender: JSX.Element[] = [];
    this.props.meal.tags.forEach((tagId) => {
      const tag = SystemTags.getSystemTag(tagId);
      toRender.push(
        <Tag key={"meal-tag-" + tag.id} className={"meal-tag"}>
          {tag.label}
        </Tag>
      );
    });

    return <div className={"meal-tags-container"}>{toRender}</div>;
  }
}
