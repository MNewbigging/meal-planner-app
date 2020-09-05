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
        <div className={"navbar-logo"}>LOGO</div>
        <Button className={"navbar-link"} text={"HOME"} />
        <Button className={"navbar-link"} text={"MEALS"} />
        <Button className={"navbar-link"} text={"LIST"} />
      </div>
    );
  }
}
