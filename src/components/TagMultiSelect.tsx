import React from "react";

import { observer } from "mobx-react";

import { MenuItem, Tag } from "@blueprintjs/core";
import { IItemRendererProps, MultiSelect } from "@blueprintjs/select";

import { IMeal } from "../state/MealState";
import { ITag } from "../state/TagState";
import { TagMultiSelectState } from "./TagMultiSelectState";

import "./tag-multi-select.scss";

const TagSelect = MultiSelect.ofType<ITag>();

interface TMSProps {
  items: ITag[];
  meal: IMeal;
}

@observer
export class TagMultiSelect extends React.Component<TMSProps> {
  private tagSelectState: TagMultiSelectState;

  constructor(props: TMSProps) {
    super(props);
    this.tagSelectState = new TagMultiSelectState(props.items, props.meal);
  }

  public render() {
    const tss = this.tagSelectState;
    return (
      <TagSelect
        className={"tag-multi-select"}
        items={tss.remainingOptions}
        itemRenderer={this.itemRenderer}
        tagRenderer={this.tagRenderer}
        tagInputProps={{
          onRemove: tss.removeTag,
        }}
        onItemSelect={tss.selectTag}
        selectedItems={tss.selectedOptions}
        itemListPredicate={this.filterOptionsOnQuery}
        noResults={<MenuItem disabled={true} text={"No results!"} />}
      />
    );
  }

  private itemRenderer(tag: ITag, props: IItemRendererProps): JSX.Element {
    return (
      <Tag
        className={"tag-option"}
        key={tag.id + "-option"}
        style={{ backgroundColor: tag.color }}
        interactive={true}
        onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          props.handleClick(event);
        }}
      >
        {tag.label}
      </Tag>
    );
  }

  private tagRenderer(tag: ITag): JSX.Element {
    return (
      <Tag key={tag.id + "-selected"} style={{ backgroundColor: tag.color }}>
        {tag.label}
      </Tag>
    );
  }

  public filterOptionsOnQuery = (query: string, items: ITag[]): ITag[] => {
    let results: ITag[] = [];
    // Check for an empty query first
    if (query === "") {
      results = items;
      return results;
    }
    items.forEach((opt) => {
      if (opt.label.toLowerCase().includes(query.toLowerCase())) {
        results.push(opt);
      }
    });
    return results;
  };
}
