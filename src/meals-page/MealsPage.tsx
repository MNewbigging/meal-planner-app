import React from "react";

import { Button, Card, InputGroup } from "@blueprintjs/core";

import SplitPane, { Pane } from "react-split-pane";

import "../misc-styles/pane-resizer.scss";
import "./meals-page.scss";

export class MealsPage extends React.Component {
  public render() {
    return (
      <div className={"page-container"}>
        <SplitPane
          className={"meals-page-panes"}
          split={"vertical"}
          defaultSize={"70vw"}
        >
          <Pane className={"meals-pane"}>{this.renderMealsPane()}</Pane>
          <Pane className={"details-pane"}>RIGHT</Pane>
        </SplitPane>
      </div>
    );
  }

  private renderMealsPane(): JSX.Element {
    return (
      <Card className={"meals-control-container"}>
        <div className={"meals-control"}>
          <InputGroup
            type={"text"}
            placeholder={"Add meal title..."}
            rightElement={<Button minimal={true} icon={"insert"} />}
          />
        </div>
      </Card>
    );
  }
}
