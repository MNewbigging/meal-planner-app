import React from "react";

import { Button, Icon } from "@blueprintjs/core";

import { App } from "../AppState";

import "./application-navbar.scss";

interface NavbarProps {
  app: App;
  toPage: (app: App) => void;
}

export class ApplicationNavbar extends React.Component<NavbarProps> {
  public render() {
    
    const app = this.props.app;
    
    return (
      <div className={"navbar-container"}>
        <div key={"logo"} className={"navbar-logo"}>
          <img src={"../../assets/logoEmpty.jpg"} />
          <span id={"logo-text-meal"}>meal</span>
          <span id={"logo-text-planner"}>planner</span>
        </div>
        <Button
          className={app === App.HOME ? 'navbar-link active' : 'navbar-link'}
          text={"home"}
          onClick={() => this.props.toPage(App.HOME)}
          minimal={true}
          icon={<Icon icon={"home"} className={"navbar-link-icon"} />}
        />
        <Button
          className={app === App.MEALS ? 'navbar-link active' : 'navbar-link'}
          text={"recipes"}
          onClick={() => this.props.toPage(App.MEALS)}
          minimal={true}
          icon={<Icon icon={"book"} className={"navbar-link-icon"} />}
        />
        <Button
          className={app === App.PLANNER ? 'navbar-link active' : 'navbar-link'}
          text={"meal planner"}
          onClick={() => this.props.toPage(App.PLANNER)}
          minimal={true}
          icon={<Icon icon={"calendar"} className={"navbar-link-icon"} />}
        />
        <Button
          className={app === App.LIST ? 'navbar-link active' : 'navbar-link'}
          text={"shopping list"}
          onClick={() => this.props.toPage(App.LIST)}
          minimal={true}
          icon={<Icon icon={"properties"} className={"navbar-link-icon"} />}
        />
        <Button
          className={app === App.SETTINGS ? 'navbar-link active' : 'navbar-link'}
          text={"settings"}
          onClick={() => this.props.toPage(App.SETTINGS)}
          minimal={true}
          icon={<Icon icon={"cog"} className={"navbar-link-icon"} />}
        />
      </div>
    );
  }
}
