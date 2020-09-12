import React from "react";

import { Button, Icon } from "@blueprintjs/core";

import { App } from "../AppState";

import "./application-navbar.scss";

interface NavbarProps {
  toPage: (app: App) => void;
}

export class ApplicationNavbar extends React.Component<NavbarProps> {
  public render() {
    return (
      <div className={"navbar-container"}>
        <div key={"logo"} className={"navbar-logo"}>
          <img src={"../../assets/logoEmpty.jpg"} />
        </div>
        <Button
          className={"navbar-link"}
          text={"home"}
          onClick={() => this.props.toPage(App.HOME)}
          minimal={true}
          icon={<Icon icon={"home"} className={"navbar-link-icon"} />}
        />
        <Button
          className={"navbar-link"}
          text={"recipes"}
          onClick={() => this.props.toPage(App.MEALS)}
          minimal={true}
          icon={<Icon icon={"book"} className={"navbar-link-icon"} />}
        />
        <Button
          className={"navbar-link"}
          text={"meal planner"}
          onClick={() => this.props.toPage(App.PLANNER)}
          minimal={true}
          icon={<Icon icon={"calendar"} className={"navbar-link-icon"} />}
        />
        <Button
          className={"navbar-link"}
          text={"shopping list"}
          onClick={() => this.props.toPage(App.LIST)}
          minimal={true}
          icon={<Icon icon={"properties"} className={"navbar-link-icon"} />}
        />
        <Button
          className={"navbar-link"}
          text={"settings"}
          onClick={() => this.props.toPage(App.SETTINGS)}
          minimal={true}
          icon={<Icon icon={"cog"} className={"navbar-link-icon"} />}
        />
      </div>
    );
  }
}
