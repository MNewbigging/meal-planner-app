import { action, observable } from "mobx";

import { MealViewerState } from "./MealViewerState";

export interface Meal {
  id: number;
  title: string;
  method: string;
  servings: string;
}

export class MealState {
  @observable public meals: Meal[] = [];
  @observable public addMealTitle: string = "";
  @observable public selectedMeal: number | undefined;
  public viewerState: MealViewerState = new MealViewerState();

  @action
  public addMeal(meal: Meal): void {
    this.meals.push(meal);
  }

  @action
  public setMealTitle(val: string): void {
    this.addMealTitle = val;
  }

  @action
  public clearMealTitle(): void {
    this.addMealTitle = "";
  }

  public addMealTitleValid(): boolean {
    return this.addMealTitle !== "";
  }

  @action
  public selectMeal(id: number): void {
    this.selectedMeal = id;
  }
}
