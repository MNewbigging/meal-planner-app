import React from "react";

import { Card } from "@blueprintjs/core";

import { IPlannerDay } from "./PlannerPageState";

import "./planner-item.scss";

export class PlannerItem extends React.Component<IPlannerDay> {
  public render() {
    return (
      <Card className={"day-item"}>
        <h3>{this.props.date}</h3>
        <div>Meals for the day...</div>
      </Card>
    );
  }
}
