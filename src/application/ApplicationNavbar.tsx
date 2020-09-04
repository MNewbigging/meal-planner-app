import React from "react";

import "./application-navbar.scss";

export class ApplicationNavbar extends React.Component {
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
