import { action, observable } from "mobx";

export interface IMeal {
  id: number;
  title: string;
  method: string;
  servings: string;
  tags: string[];
}

class MealState {
  private carbonara =
    '{ "id": 0, "title": "carbonara", "method": "do this", "servings": 2, "tags": ["dinner"] }';

  private bananaBread =
    '{ "id": 1, "title": "banana bread", "method": "make bred", "servings": 6, "tags": ["snack"] }';

  private chilliWraps =
    '{ "id": 2, "title": "chilli wraps", "method": "make chilli", "servings": 4, "tags": ["dinner"] }';

  private salad =
    '{ "id": 3, "title": "salad", "method": "make salad", "servings": 2, "tags": ["lunch"] }';

  private fryUp =
    '{ "id": 4, "title": "fry up", "method": "brekky fry up nom", "servings": 2, "tags": ["breakfast"] }';

  @observable private meals: IMeal[] = [];

  constructor() {
    const carbMeal: IMeal = JSON.parse(this.carbonara) as IMeal;
    const bbMeal: IMeal = JSON.parse(this.bananaBread) as IMeal;
    const chilliMeal: IMeal = JSON.parse(this.chilliWraps) as IMeal;
    const saladMeal: IMeal = JSON.parse(this.salad) as IMeal;
    const fryMeal: IMeal = JSON.parse(this.fryUp) as IMeal;
    this.addMeal(carbMeal);
    this.addMeal(bbMeal);
    this.addMeal(chilliMeal);
    this.addMeal(saladMeal);
    this.addMeal(fryMeal);
  }

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
