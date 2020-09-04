import * as React from "react";

import { observer } from "mobx-react";

import { App, AppState } from "../AppState";
import { Home } from "../home-page/Home";
import { Login } from "../landing-page/Login";

interface ApplicationProps {
  appState: AppState;
}

@observer
export class ApplicationBody extends React.Component<ApplicationProps> {
  public render() {
    switch (this.props.appState.app) {
      case App.LOGIN:
        return (
          <Login
            loginState={this.props.appState.loginState}
            toPage={this.props.appState.toPage}
          />
        );
      case App.HOME:
        return <Home />;
    }
  }
}
