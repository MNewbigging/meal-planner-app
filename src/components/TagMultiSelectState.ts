import { action, observable } from "mobx";

import { ITag } from "../fixed/SystemTags";

export class TagMultiSelectState {
  public allOptions: ITag[];
  @observable public remainingOptions: ITag[];
  @observable public selectedOptions: ITag[] = [];

  constructor(options: ITag[]) {
    this.allOptions = options;
    this.remainingOptions = options;
  }

  @action
  public selectTag = (tag: ITag) => {
    this.selectedOptions.push(tag);
    this.remainingOptions = this.remainingOptions.filter((opt) => opt.id !== tag.id);
  };

  /**
   * Callback when pressing X button on selected tags.
   * Removes clicked tag from selected, puts it back into remaining.
   * @param value the tag at index, as a string
   * @param index index within selectedOptions
   */
  @action
  public removeTag = (_value: string, index: number) => {
    this.remainingOptions.push(this.selectedOptions[index]);
    this.selectedOptions = this.selectedOptions.filter((_tag, i) => i !== index);
  };
}
