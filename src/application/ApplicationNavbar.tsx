import React from "react";

import { App } from "../AppState";

import "./application-navbar.scss";

interface NavbarProps {
  toPage: (app: App) => void;
}

export class ApplicationNavbar extends React.Component<NavbarProps> {
  public render() {
    return (
      <div className={"navbar-container"}>
        <div className={"navbar-logo"}>LOGO</div>
        <div className={"navbar-link"}>HOME</div>
        <div className={"navbar-link"}>MEALS</div>
        <div className={"navbar-link"}>LIST</div>
      </div>
    );
  }
}
