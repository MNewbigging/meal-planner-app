import React from "react";

import { observer } from "mobx-react";

import { InputGroup } from "@blueprintjs/core";

import { SettingsState } from "../SettingsState";

import "./planner-details.scss";

interface PlannerProps {
  settingsState: SettingsState;
}

@observer
export class PlannerDetails extends React.Component<PlannerProps> {
  public render() {
    return <div className={"details-container"}>{this.renderDefaultDaysSetting()}</div>;
  }

  private renderDefaultDaysSetting(): JSX.Element {
    const ss = this.props.settingsState;
    return (
      <div className={"default-days"}>
        <h4>Default Planner Days</h4>
        <p>Set how many days appear on the planner by default:</p>
        <InputGroup
          className={"default-days-input"}
          type={"number"}
          step={1}
          value={ss.defaultPlannerDays}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            ss.setDefaultPlannerDays(event.target.value);
          }}
        />
      </div>
    );
  }
}
