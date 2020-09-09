class RandomId {
  private characters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  public createId(length: number): string {
    let id: string = "";
    const charCount: number = this.characters.length;
    for (let i: number = 0; i < length; i++) {
      id += this.characters.charAt(Math.floor(Math.random() * charCount));
    }
    return id;
  }
}

export const randomId: RandomId = new RandomId();
