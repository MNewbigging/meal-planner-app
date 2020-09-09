import { SystemTags } from "../fixed/SystemTags";

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
}

export const tagState: TagState = new TagState();
