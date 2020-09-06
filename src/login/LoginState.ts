import { observable } from "mobx";

export class LoginState {
  @observable public showPassword: boolean = false;

  public setShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
