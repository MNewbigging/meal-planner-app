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

  public createMealId(): number {
    return this.meals.length;
  }

  public getMeal(idx: number) {
    return this.meals[idx];
  }

  @action
  public addMeal(meal: IMeal): void {
    this.meals.push(meal);
  }

  public removeTagFromMeals(tagId: string): void {
    this.meals.forEach((meal) => {
      meal.tags = meal.tags.filter((mt) => mt !== tagId);
    });
  }

  public tagInUse(tagId: string): boolean {
    for (const meal of this.meals) {
      for (const tag of meal.tags) {
        if (tag === tagId) {
          return true;
        }
      }
    }
    return false;
  }
}

export const mealState = new MealState();
