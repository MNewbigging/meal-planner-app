import { action, observable } from "mobx";

import { ITag } from "../state/TagState";
import { Meal } from "./MealState";

export class MealViewerState {
  @observable public editing: boolean = false;
  @observable public mealCopy: Meal | undefined;
  @observable public selectedTags: ITag[] = [];

  @action
  public startEditing(meal: Meal): void {
    this.editing = true;
    // Make a new meal copy of the one to edit
    const newMeal: Meal = {
      id: meal.id,
      title: meal.title,
      method: meal.method,
      servings: meal.servings,
      tags: meal.tags,
    };
    this.mealCopy = newMeal;
  }

  public saveEdits = (meals: Meal[], selectedMeal: number): void => {
    meals[selectedMeal] = this.mealCopy;
    console.log("saving meal, tags:", meals[selectedMeal].tags);
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
