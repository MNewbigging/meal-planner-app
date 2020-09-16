import { observable } from "mobx";

import { IMeal } from "../state/MealState";
import { randomId } from "../util/RandomId";

export interface IPlannerDay {
  id: string;
  date: string;
  meals: Map<string, IMeal[]>; // breakfast: meals, lunch: meals etc
}

export class PlannerPageState {
  public today: Date = new Date();
  public plannerDayCount: number = 7;
  @observable public plannerDays: IPlannerDay[] = [];
  private readonly days: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  constructor() {
    this.setupPlannerDays();
  }

  private setupPlannerDays(): void {
    // Start with today
    const rollDate: Date = new Date();
    for (let i: number = 0; i < this.plannerDayCount; i++) {
      const dayNum: number = rollDate.getDay();
      const dateNum: number = rollDate.getDate();

      const day: IPlannerDay = {
        id: randomId.createId(5),
        date: this.makeDate(dayNum, dateNum),
        meals: this.makeMealMap(),
      };
      this.plannerDays.push(day);

      // Increment date
      rollDate.setDate(rollDate.getDate() + 1);
    }
  }

  private makeDate(dayNum: number, dateNum: number): string {
    const dayString: string = this.days[dayNum];
    const dateString: string = dateNum.toString();
    let dateSuffix: string = "";
    switch (dateNum) {
      case 1:
      case 21:
      case 31:
        dateSuffix = "st";
        break;
      case 2:
      case 22:
        dateSuffix = "nd";
        break;
      case 3:
      case 23:
        dateSuffix = "rd";
        break;
      default:
        dateSuffix = "th";
        break;
    }
    return `${dayString} ${dateString}${dateSuffix}`;
  }

  private makeMealMap(): Map<string, IMeal[]> {
    const mealMap = new Map<string, IMeal[]>();
    mealMap.set("breakfast", []);
    mealMap.set("lunch", []);
    mealMap.set("dinner", []);
    mealMap.set("snack", []);
    return mealMap;
  }
}
