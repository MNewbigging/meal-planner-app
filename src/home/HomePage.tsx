import React from "react";

import { Button } from "@blueprintjs/core";

import { alertState } from "../state/AlertState";

export class HomePage extends React.Component {
  public render() {
    return (
      <div className={"page-container"}>
        <Button text={"Alert"} onClick={() => this.alertTest()} />
      </div>
    );
  }

  private async alertTest() {
    const alertResult = await alertState.showAlert("hello there");
    if (alertResult) {
      console.log("confirmed alert");
    } else {
      console.log("cancelled alert");
    }
  }
}
