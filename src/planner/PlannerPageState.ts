import { observable } from "mobx";

import { randomId } from "../util/RandomId";

export interface IPlannerDay {
  id: string;
  date: string;
}

export class PlannerPageState {
  public today: Date = new Date();
  public plannerDayCount: number = 7;
  @observable public plannerDays: IPlannerDay[] = [];
  private readonly days: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  private readonly dateSuffix: string[] = ["st", "nd", "rd", "th"];

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
      };
      this.plannerDays.push(day);

      // Increment date
      rollDate.setDate(rollDate.getDate() + 1);
    }

    console.log("pd: ", this.plannerDays);
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
}
