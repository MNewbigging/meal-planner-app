import React from "react";

import { observer } from "mobx-react";

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
    return (
      <div className={"settings-menu"}>
        <h1>Settings</h1>
        <div className={"setting-link"}>
          <a href="#">Tags</a>
        </div>
      </div>
    );
  }

  private renderSettingsDetails(): JSX.Element {
    const toRender: JSX.Element[] = [];
    switch (this.props.settingsState.selectedSetting) {
      case Settings.TAGS:
        toRender.push(<TagDetails key={"tag-details"} />);
        break;
    }

    return <div className={"settings-details"}>{toRender}</div>;
  }
}
