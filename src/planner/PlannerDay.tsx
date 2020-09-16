import React from "react";

import { Button, Card } from "@blueprintjs/core";

import { PlannerDayMealRow } from "./PlannerDayMealRow";
import { IPlannerDay } from "./PlannerPageState";

import "./planner-day.scss";

export class PlannerDay extends React.Component<IPlannerDay> {
  public render() {
    return (
      <Card className={"day-item"}>
        <div className={"day-item-row title"}>
          <div className={"title-text"}>{this.props.date}</div>
          <div>
            <Button icon={"plus"} text={"Add to list"} />
          </div>
        </div>
        <PlannerDayMealRow
          label={"Breakfast"}
          filterTagId={"breakfast"}
          meals={this.props.meals.get("breakfast")}
        />
        <PlannerDayMealRow
          label={"Lunch"}
          filterTagId={"lunch"}
          meals={this.props.meals.get("lunch")}
        />
        <PlannerDayMealRow
          label={"Dinner"}
          filterTagId={"dinner"}
          meals={this.props.meals.get("dinner")}
        />
        <PlannerDayMealRow
          label={"Snacks"}
          filterTagId={"snack"}
          meals={this.props.meals.get("snack")}
        />
      </Card>
    );
  }
}
