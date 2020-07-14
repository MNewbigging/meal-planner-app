import { observable } from "mobx";

export class LoginState {
  @observable public showPassword: boolean = false;

  public setShowPassword() {
    console.log("changing show pw");
    this.showPassword = !this.showPassword;
  }
}
