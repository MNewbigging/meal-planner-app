import React from "react";

import { Button, Card } from "@blueprintjs/core";

import { PlannerItemMealRow } from "./PlannerItemMealRow";
import { IPlannerDay } from "./PlannerPageState";

import "./planner-item.scss";

export class PlannerItem extends React.Component<IPlannerDay> {
  public render() {
    return (
      <Card className={"day-item"}>
        <div className={"day-item-row title"}>
          <div className={"title-text"}>{this.props.date}</div>
          <div>
            <Button icon={"plus"} text={"Add to list"} />
          </div>
        </div>
        <PlannerItemMealRow label={"Breakfast"} filterTagId={"breakfast"} />
        <PlannerItemMealRow label={"Lunch"} filterTagId={"lunch"} />
        <PlannerItemMealRow label={"Dinner"} filterTagId={"dinner"} />
        <PlannerItemMealRow label={"Snacks"} filterTagId={"snack"} />
      </Card>
    );
  }
}
