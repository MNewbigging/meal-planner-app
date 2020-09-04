import React from "react";

import { ApplicationNavbar } from "../application/ApplicationNavbar";

export class Home extends React.Component {
  public render() {
    return (
      <div>
        <ApplicationNavbar />
        <div>BODY HERE</div>
      </div>
    );
  }
}
