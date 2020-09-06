import * as React from "react";

import { observer } from "mobx-react";

import { App, AppState } from "../AppState";
import { HomePage } from "../home/HomePage";
import { Login } from "../login/Login";
import { ListPage } from "../list/ListPage";
import { MealsPage } from "../meals/MealsPage";
import { ApplicationNavbar } from "./ApplicationNavbar";

interface ApplicationProps {
  appState: AppState;
}

@observer
export class ApplicationBody extends React.Component<ApplicationProps> {
  public render() {
    const appState = this.props.appState;
    const app = appState.app;

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
    toRender.push(
      <ApplicationNavbar key={"navbar"} toPage={appState.toPage} />
    );

    // Then add whatever page necessary based on app state
    switch (appState.app) {
      case App.HOME:
        toRender.push(<HomePage key={"home-page"} />);
        break;
      case App.MEALS:
        toRender.push(
          <MealsPage key={"meals-page"} mealState={appState.mealState} />
        );
        break;
      case App.LIST:
        toRender.push(
          <ListPage key={"list-page"} listState={appState.listState} />
        );
        break;
    }

    // Finally, render components
    return toRender;
  }
}
