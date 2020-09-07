import React from "react";

import { Tag } from "@blueprintjs/core";

import { ITag, SystemTags } from "../../fixed/SystemTags";

import "./tag-details.scss";

export class TagDetails extends React.Component {
  public render() {
    return (
      <div className={"tag-details-container"}>
        {this.renderDescription()}
        {this.renderTags()}
      </div>
    );
  }

  private renderDescription(): JSX.Element {
    return (
      <div className={"tags-description"}>
        <p>
          Use tags to mark your meals and make searching easier! Here are all of
          your tags:
        </p>
      </div>
    );
  }

  private renderTags(): JSX.Element {
    const toRender: JSX.Element[] = [];
    // Get all system tags
    const systemTags: ITag[] = SystemTags.getSystemTags();
    systemTags.forEach((tag) => {
      toRender.push(
        <Tag className={"tag"} key={tag.id}>
          {tag.label}
        </Tag>
      );
    });

    return <div className={"tags-box"}>{toRender}</div>;
  }
}
