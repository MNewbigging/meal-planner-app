import React from "react";

import { observer } from "mobx-react";

import { PlannerDetails } from "./planner/PlannerDetails";
import { Settings, SettingsState } from "./SettingsState";
import { TagDetails } from "./tags/TagDetails";

import "./settings-page.scss";

interface SPProps {
  settingsState: SettingsState;
}

@observer
export class SettingsPage extends React.Component<SPProps> {
  public render() {
    return (
      <div className={"page-container"}>
        <div className={"settings-container"}>
          {this.renderSettingsMenu()}
          {this.renderSettingsDetails()}
        </div>
      </div>
    );
  }

  private renderSettingsMenu(): JSX.Element {
    const ss = this.props.settingsState;
    return (
      <div className={"settings-menu"}>
        <h1>Settings</h1>
        <div
          className={ss.selectedSetting === Settings.TAGS ? "setting-link active" : "setting-link"}
        >
          <a href="#" onClick={() => ss.setSelectedSetting(Settings.TAGS)}>
            Tags
          </a>
        </div>
        <div
          className={
            ss.selectedSetting === Settings.PLANNER ? "setting-link active" : "setting-link"
          }
        >
          <a href="#" onClick={() => ss.setSelectedSetting(Settings.PLANNER)}>
            Planner
          </a>
        </div>
      </div>
    );
  }

  private renderSettingsDetails(): JSX.Element {
    const toRender: JSX.Element[] = [];
    switch (this.props.settingsState.selectedSetting) {
      case Settings.TAGS:
        toRender.push(<TagDetails key={"tag-details"} settingsState={this.props.settingsState} />);
        break;
      case Settings.PLANNER:
        toRender.push(
          <PlannerDetails key={"planner-details"} settingsState={this.props.settingsState} />
        );
        break;
    }

    return <div className={"settings-details"}>{toRender}</div>;
  }
}
