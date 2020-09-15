import React from "react";

import { Button, Card } from "@blueprintjs/core";

import { IPlannerDay } from "./PlannerPageState";

import "./planner-item.scss";

export class PlannerItem extends React.Component<IPlannerDay> {
  public render() {
    return (
      <Card className={"day-item"}>
        <div className={"day-item-row title"}>
          <div className={"title-text"}>{this.props.date}</div>
          <div>
            <Button icon={"plus"} />
          </div>
        </div>
        <div className={"day-item-row"}>
          <div className={"day-item-label"}>Breakfast</div>
          <div className={"day-item-meal"}>
            <Button icon={"plus"} text={"Add meal"} />
            <Button icon={"eye-open"} text={"Browse meals"} />
          </div>
        </div>
        <div className={"day-item-row"}>
          <div className={"day-item-label"}>Lunch</div>
          <div className={"day-item-meal"}>
            <Button icon={"plus"} text={"Add meal"} />
            <Button icon={"eye-open"} text={"Browse meals"} />
          </div>
        </div>
        <div className={"day-item-row"}>
          <div className={"day-item-label"}>Dinner</div>
          <div className={"day-item-meal"}>
            <Button icon={"plus"} text={"Add meal"} />
            <Button icon={"eye-open"} text={"Browse meals"} />
          </div>
        </div>
        <div className={"day-item-row"}>
          <div className={"day-item-label"}>Snacks</div>
          <div className={"day-item-meal"}>
            <Button icon={"plus"} text={"Add meal"} />
            <Button icon={"eye-open"} text={"Browse meals"} />
          </div>
        </div>
      </Card>
    );
  }
}
