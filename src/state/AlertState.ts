import { action, observable } from "mobx";

class AlertState {
  @observable public alertOpen: boolean = false;
  public alertMessage: string = "";
  private alertResolver?: (val: boolean) => void;

  @action
  public setAlertOpen(val: boolean): void {
    this.alertOpen = val;
  }

  public async showAlert(msg: string): Promise<boolean> {
    this.alertMessage = msg;
    this.setAlertOpen(true);
    return new Promise<boolean>((resolve) => (this.alertResolver = resolve));
  }

  public alertConfirmed(): void {
    if (this.alertResolver) {
      this.alertResolver(true);
    }
  }

  public alertCancelled(): void {
    if (this.alertResolver) {
      this.alertResolver(false);
    }
  }
}

export const alertState = new AlertState();
