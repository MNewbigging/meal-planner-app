import { action, observable } from "mobx";

export interface Meal {
  id: number;
  title: string;
}

export class MealState {
  @observable public meals: Meal[] = [];
  @observable public addMealTitle: string = "";

  @action
  public addMeal(meal: Meal) {
    this.meals.push(meal);
  }

  @action
  public setMealTitle(val: string) {
    this.addMealTitle = val;
  }

  @action
  public clearMealTitle() {
    this.addMealTitle = "";
  }
}
