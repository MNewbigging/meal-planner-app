import React from "react";

import { observer } from "mobx-react";

import { Button, Icon, InputGroup, Popover, Tag } from "@blueprintjs/core";

import { CirclePicker, ColorResult } from "react-color";

import { alertState } from "../../state/AlertState";
import { mealState } from "../../state/MealState";
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
    const sysTags: ITag[] = tagState.getSystemTags();
    sysTags.forEach((st) => {
      toRender.push(
        <Tag className={"tag"} key={st.id} large={true} style={{ backgroundColor: st.color }}>
          {st.label}
        </Tag>
      );
    });

    const userTags: ITag[] = tagState.getUserTags();
    userTags.forEach((ut) => {
      toRender.push(
        <Tag
          className={"tag"}
          key={ut.id}
          large={true}
          style={{ backgroundColor: ut.color }}
          onRemove={() => this.onRemoveTag(ut.id)}
        >
          {ut.label}
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
          leftElement={this.renderColourPicker()}
          rightElement={
            <Button
              minimal={true}
              icon={"insert"}
              disabled={!ss.tagCreatorInputValid()}
              onClick={() => this.onAddTag()}
            />
          }
        />
      </div>
    );
  }

  private renderColourPicker(): JSX.Element {
    const ss = this.props.settingsState;
    return (
      <Popover>
        <Button
          icon={<Icon icon={"full-circle"} color={ss.tagCreatorColor} />}
          rightIcon={"caret-down"}
        />
        <CirclePicker
          className={"color-picker"}
          color={ss.tagCreatorColor}
          onChangeComplete={(col: ColorResult) => {
            ss.setTagCreatorColor(col.hex);
          }}
        />
      </Popover>
    );
  }

  private onAddTag(): void {
    const ss = this.props.settingsState;
    const tagLabel: string = ss.tagCreatorInput;
    const tagColor: string = ss.tagCreatorColor;
    tagState.createTag(tagLabel, tagColor);
    ss.clearTagCreatorInput();
  }

  private async onRemoveTag(tagId: string) {
    // Check if meals are using this tag
    if (mealState.tagInUse(tagId)) {
      const alertResult = await alertState.showAlert({
        message: "You currently have meals using this tag, are you sure you want to delete it?",
        confirmText: "Yes",
        cancelText: "Cancel",
      });
      if (alertResult) {
        this.removeTag(tagId);
      }
    } else {
      this.removeTag(tagId);
    }
  }

  private removeTag(tagId: string) {
    mealState.removeTagFromMeals(tagId);
    tagState.removeTag(tagId);
  }
}
