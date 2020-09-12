import React from "react";

import { observer } from "mobx-react";

import { Card } from "@blueprintjs/core";

import { PlannerItem } from "./PlannerItem";
import { PlannerPageState } from "./PlannerPageState";

import "./planner-page.scss";

interface PlannerProps {
  plannerState: PlannerPageState;
}

@observer
export class PlannerPage extends React.Component<PlannerProps> {
  public render() {
    return (
      <div className={"page-container"}>
        {this.renderPlannerControls()}
        {this.renderPlannerDays()}
      </div>
    );
  }

  private renderPlannerControls(): JSX.Element {
    return <Card className={"planner-controls"} elevation={2}></Card>;
  }

  private renderPlannerDays(): JSX.Element {
    const days: JSX.Element[] = [];
    this.props.plannerState.plannerDays.forEach((pd) => {
      days.push(<PlannerItem key={"pd-" + pd.id} id={pd.id} date={pd.date} />);
    });

    return (
      <Card className={"days-container"} elevation={2}>
        <div className={"days-list"}>{days}</div>
      </Card>
    );
  }
}
