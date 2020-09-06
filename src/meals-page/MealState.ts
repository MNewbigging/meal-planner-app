import { action, observable } from "mobx";

export interface Meal {
  id: number;
  title: string;
}

export class MealState {
  @observable public meals: Meal[] = [];

  @action
  public addMeal(meal: Meal) {
    this.meals.push(meal);
  }
}
