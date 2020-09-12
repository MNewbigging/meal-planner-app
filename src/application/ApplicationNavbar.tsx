import React from "react";

import { Button } from "@blueprintjs/core";

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
          LOGO
        </div>
        <Button
          className={"navbar-link"}
          text={"HOME"}
          onClick={() => this.props.toPage(App.HOME)}
        />
        <Button
          className={"navbar-link"}
          text={"MEALS"}
          onClick={() => this.props.toPage(App.MEALS)}
        />
        <Button
          className={"navbar-link"}
          text={"PLANNER"}
          onClick={() => this.props.toPage(App.PLANNER)}
        />
        <Button
          className={"navbar-link"}
          text={"LIST"}
          onClick={() => this.props.toPage(App.LIST)}
        />
        <Button
          className={"navbar-link"}
          text={"SETTINGS"}
          onClick={() => this.props.toPage(App.SETTINGS)}
        />
      </div>
    );
  }
}
