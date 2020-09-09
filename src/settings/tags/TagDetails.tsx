import React from "react";

import { observer } from "mobx-react";

import { Button, InputGroup, Tag } from "@blueprintjs/core";

import { ITag } from "../../state/TagState";
import { tagState } from "../../state/TagState";
import { SettingsState } from "../SettingsState";

import "./tag-details.scss";

interface TagDetailsProps {
  settingsState: SettingsState;
}

@observer
export class TagDetails extends React.Component<TagDetailsProps> {
  public render() {
    return (
      <div className={"tag-details-container"}>
        {this.renderDescription()}
        {this.renderTags()}
        {this.renderTagCreator()}
      </div>
    );
  }

  private renderDescription(): JSX.Element {
    return (
      <div className={"tags-description"}>
        <p>Use tags to mark your meals and make searching easier! Here are all of your tags:</p>
      </div>
    );
  }

  private renderTags(): JSX.Element {
    const toRender: JSX.Element[] = [];
    // Get all system tags
    const systemTags: ITag[] = tagState.getAllTags();
    systemTags.forEach((tag) => {
      toRender.push(
        <Tag className={"tag"} key={tag.id}>
          {tag.label}
        </Tag>
      );
    });

    return <div className={"tags-box"}>{toRender}</div>;
  }

  private renderTagCreator(): JSX.Element {
    const ss = this.props.settingsState;
    return (
      <div className={"tag-creator"}>
        <div className={"tag-creator-label"}>Add your own tags here:</div>
        <InputGroup
          type={"text"}
          placeholder={"Tag name..."}
          value={ss.tagCreatorInput}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            ss.setTagCreatorInput(event.target.value);
          }}
          rightElement={
            <Button minimal={true} icon={"insert"} disabled={!ss.tagCreatorInputValid()} />
          }
        />
      </div>
    );
  }
}
