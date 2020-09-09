import { SystemTags } from "../fixed/SystemTags";
import { randomId } from "../util/RandomId";

export interface ITag {
  id: string;
  label: string;
}

class TagState {
  private allTags: ITag[] = [];

  constructor() {
    this.allTags = SystemTags.getSystemTags();
  }

  public getAllTags(): ITag[] {
    return this.allTags;
  }

  public getTag(id: string) {
    return this.allTags.find((tag) => tag.id === id);
  }

  public createTag(name: string) {
    const tag: ITag = {
      id: randomId.createId(6),
      label: name,
    };
    this.allTags.push(tag);
  }
}

export const tagState: TagState = new TagState();
