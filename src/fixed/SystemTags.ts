import { ITag } from "../state/TagState";

const SYSTEM_TAG_COLOR: string = "#5c7080";

export class SystemTags {
  public static BREAKFAST: ITag = {
    id: "breakfast",
    label: "Breakfast",
    color: SYSTEM_TAG_COLOR,
  };

  public static LUNCH: ITag = {
    id: "lunch",
    label: "Lunch",
    color: SYSTEM_TAG_COLOR,
  };

  public static DINNER: ITag = {
    id: "dinner",
    label: "Dinner",
    color: SYSTEM_TAG_COLOR,
  };

  public static SNACK: ITag = {
    id: "snack",
    label: "Snack",
    color: SYSTEM_TAG_COLOR,
  };
  public static getSystemTags(): ITag[] {
    return [this.BREAKFAST, this.LUNCH, this.DINNER, this.SNACK];
  }

  public static getSystemTag(id: string) {
    const systemTags: ITag[] = this.getSystemTags();
    return systemTags.find((tag) => tag.id === id);
  }
}
