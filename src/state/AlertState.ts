import { action, observable } from "mobx";

export interface AlertProps {
  message: string;
  confirmText: string;
  cancelText: string;
}

class AlertState {
  @observable public alertOpen: boolean = false;
  public alertProps: AlertProps;
  private alertResolver?: (val: boolean) => void;

  constructor() {
    // Set the default alert props
    this.alertProps = {
      message: "Hey there! You sure are good looking!",
      confirmText: "Damn right",
      cancelText: "Not today",
    };
  }

  @action
  public setAlertOpen(val: boolean): void {
    this.alertOpen = val;
  }

  public async showAlert(alertProps: AlertProps): Promise<boolean> {
    this.alertProps = alertProps;
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
