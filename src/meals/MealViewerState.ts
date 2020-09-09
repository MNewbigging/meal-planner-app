import { action, observable } from "mobx";

import { IMeal } from "../state/MealState";
import { ITag } from "../state/TagState";

export class MealViewerState {
  @observable public editing: boolean = false;
  @observable public mealCopy: IMeal | undefined;
  @observable public selectedTags: ITag[] = [];

  @action
  public startEditing(meal: IMeal): void {
    this.editing = true;
    // Make a new meal copy of the one to edit
    const newMeal: IMeal = {
      id: meal.id,
      title: meal.title,
      method: meal.method,
      servings: meal.servings,
      tags: meal.tags,
    };
    this.mealCopy = newMeal;
  }

  public saveEdits = (meals: IMeal[], selectedMeal: number): void => {
    meals[selectedMeal] = this.mealCopy;
    this.cancelEdits();
  };

  @action
  public cancelEdits(): void {
    this.mealCopy = undefined;
    this.editing = false;
  }

  @action
  public selectTag = (tag: ITag) => {
    this.selectedTags.push(tag);
  };
}
