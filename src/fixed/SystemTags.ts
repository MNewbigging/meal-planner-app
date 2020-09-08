export interface ITag {
  id: string;
  label: string;
}

export class SystemTags {
  public static BREAKFAST: ITag = {
    id: "breakfast",
    label: "Breakfast",
  };

  public static LUNCH: ITag = {
    id: "lunch",
    label: "Lunch",
  };

  public static DINNER: ITag = {
    id: "dinner",
    label: "Dinner",
  };

  public static SNACK: ITag = {
    id: "snack",
    label: "Snack",
  };
  public static getSystemTags(): ITag[] {
    return [this.BREAKFAST, this.LUNCH, this.DINNER, this.SNACK];
  }

  public static getSystemTag(id: string) {
    const systemTags: ITag[] = this.getSystemTags();
    return systemTags.find((tag) => tag.id === id);
  }
}
