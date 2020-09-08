import { action, observable } from "mobx";

import { ITag } from "../fixed/SystemTags";
import { Meal } from "../meals/MealState";

export class TagMultiSelectState {
  public meal: Meal;
  public allOptions: ITag[];
  @observable public remainingOptions: ITag[];
  @observable public selectedOptions: ITag[] = [];

  constructor(options: ITag[], meal: Meal) {
    this.allOptions = options;
    this.remainingOptions = options;
    this.meal = meal;
    // Initialise selected options with tags already set against meal
    this.meal.tags.forEach((tagId) => {
      const tag: ITag = this.allOptions.find((opt: ITag) => opt.id === tagId);
      if (tag) {
        this.selectTag(tag);
      }
    });
  }

  @action
  public selectTag = (tag: ITag) => {
    this.selectedOptions.push(tag);
    this.remainingOptions = this.remainingOptions.filter((opt) => opt.id !== tag.id);
    this.saveTagsToMeal();
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
    this.saveTagsToMeal();
  };

  private saveTagsToMeal() {
    const tagIds: string[] = [];
    this.selectedOptions.forEach((opt) => {
      tagIds.push(opt.id);
    });
    this.meal.tags = tagIds;
  }
}
