import { observable } from "mobx";

import { SystemTags } from "../fixed/SystemTags";
import { randomId } from "../util/RandomId";

export interface ITag {
  id: string;
  label: string;
  color: string;
}

class TagState {
  @observable private userTags: ITag[] = [];
  private systemTags: ITag[] = [];

  constructor() {
    this.systemTags.push(...SystemTags.getSystemTags());
  }

  public getAllTags(): ITag[] {
    return [...this.systemTags, ...this.userTags];
  }

  public getSystemTags(): ITag[] {
    return this.systemTags;
  }

  public getUserTags(): ITag[] {
    return this.userTags;
  }

  public getTag(id: string) {
    const allTags: ITag[] = [...this.systemTags, ...this.userTags];
    return allTags.find((tag) => tag.id === id);
  }

  public createTag(name: string, col: string) {
    const tag: ITag = {
      id: randomId.createId(6),
      label: name,
      color: col,
    };
    this.userTags.push(tag);
  }

  public removeTag(id: string) {
    this.userTags = this.userTags.filter((tag) => tag.id !== id);
  }
}

export const tagState: TagState = new TagState();
