import * as React from "react";

import { observer } from "mobx-react";

import { App, AppState } from "../AppState";
import { Home } from "../home-page/Home";
import { Login } from "../landing-page/Login";
import { ListPage } from "../list-page/ListPage";
import { ApplicationNavbar } from "./ApplicationNavbar";
import { MealsPage } from "../meals-page/MealsPage";

interface ApplicationProps {
  appState: AppState;
}

@observer
export class ApplicationBody extends React.Component<ApplicationProps> {
  public render() {
    const app = this.props.appState.app;

    // Login is the only page without navbar
    if (app === App.LOGIN) {
      return (
        <Login
          loginState={this.props.appState.loginState}
          toPage={this.props.appState.toPage}
        />
      );
    }

    // Put everything to render in array
    const toRender: JSX.Element[] = [];
    // Add the app navbar to render array
    toRender.push(<ApplicationNavbar toPage={this.props.appState.toPage} />);

    // Then add whatever page necessary based on app state
    switch (this.props.appState.app) {
      case App.HOME:
        toRender.push(<Home />);
        break;
      case App.MEALS:
        toRender.push(<MealsPage />);
        break;
      case App.LIST:
        toRender.push(<ListPage />);
        break;
    }

    // Finally, render components
    return toRender;
  }
}
