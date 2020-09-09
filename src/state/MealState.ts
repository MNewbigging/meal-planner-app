import { action, observable } from "mobx";

export interface IMeal {
  id: number;
  title: string;
  method: string;
  servings: string;
  tags: string[];
}

class MealState {
  @observable private meals: IMeal[] = [];

  public getMeals(): IMeal[] {
    return this.meals;
  }

  public getMeal(idx: number) {
    return this.meals[idx];
  }

  @action
  public addMeal(meal: IMeal): void {
    this.meals.push(meal);
  }
}

export const mealState = new MealState();
