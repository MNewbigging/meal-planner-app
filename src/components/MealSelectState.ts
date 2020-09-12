import { observable } from "mobx";

import { IMeal, mealState } from "../state/MealState";

export class MealSelectState {
  @observable public remainingOptions: IMeal[];
  private allOptions: IMeal[];

  constructor() {
    this.allOptions = mealState.getMeals();
    this.remainingOptions = mealState.getMeals();
  }
}
