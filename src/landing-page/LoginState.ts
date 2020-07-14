export class LoginState {
  public showPassword: boolean = false;

  public setShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
