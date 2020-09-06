import { action, observable } from "mobx";

export interface Meal {
  id: number;
  title: string;
}

export class MealState {
  @observable public meals: Meal[] = [];
  @observable public addMealTitle: string = "";
  @observable public selectedMeal: Meal | undefined;

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
  public selectMeal(meal: Meal): void {
    this.selectedMeal = meal;
  }
}
