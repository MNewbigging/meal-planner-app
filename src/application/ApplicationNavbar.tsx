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
          LOGO
        </div>
        <Button
          className={"navbar-link"}
          text={"home"}
          onClick={() => this.props.toPage(App.HOME)}
          minimal={true}
          icon={
            <Icon 
              icon={"home"}
              className={"navbar-link-icon"}
          />}
        />
        <Button
          className={"navbar-link"}
          text={"meals"}
          onClick={() => this.props.toPage(App.MEALS)}
          minimal={true}
          icon={
            <Icon 
              icon={"book"}
              className={"navbar-link-icon"}
          />}
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
          minimal={true}
          icon={
            <Icon 
              icon={"properties"}
              className={"navbar-link-icon"}
          />}
        />
        <Button
          className={"navbar-link"}
          text={"settings"}
          onClick={() => this.props.toPage(App.SETTINGS)}
          minimal={true}
          icon={
            <Icon 
              icon={"cog"}
              className={"navbar-link-icon"}
          />}
        />
      </div>
    );
  }
}
