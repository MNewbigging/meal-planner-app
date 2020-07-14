import * as React from "react";

import { AppState } from "./AppState";
import { Login } from "./landing-page/Login";

export interface ApplicationProps {
  appState: AppState;
}

export class ApplicationBody extends React.Component<ApplicationProps> {
  public render() {
    return (
      <div className={"app-body"}>
        <Login loginState={this.props.appState.loginState} />
      </div>
    );
  }
}
