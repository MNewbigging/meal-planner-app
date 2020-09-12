import React from "react";

import { Card } from "@blueprintjs/core";

import { IPlannerDay } from "./PlannerPageState";

import "./planner-item.scss";

export class PlannerItem extends React.Component<IPlannerDay> {
  public render() {
    return (
      <Card className={"day-item"}>
        <div className={"day-item-date"}>{this.props.date}</div>
        <div className={"day-item-breakfast"}>Breakfast</div>
      </Card>
    );
  }
}
