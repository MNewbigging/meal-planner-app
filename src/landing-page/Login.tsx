import * as React from "react";

import { Button, InputGroup, Tooltip } from "@blueprintjs/core";

import { observer } from "mobx-react";

import { LoginState } from "./LoginState";

import "./login.scss";

interface LoginProps {
  loginState: LoginState;
}

@observer
export class Login extends React.Component<LoginProps> {
  render() {
    return (
      <div className="login-container">
        <InputGroup
          large={true}
          placeholder={"enter your password..."}
          rightElement={this.renderLockButton()}
          type={"password"}
        />
        <Button
          text={"Click me"}
          icon={"refresh"}
          onClick={() => this.buttonPress()}
        />
      </div>
    );
  }

  private renderLockButton(): JSX.Element {
    const ls = this.props.loginState;
    return (
      <Tooltip content={`${ls.showPassword ? "Hide" : "Show"} Password`}>
        <Button
          icon={ls.showPassword ? "unlock" : "lock"}
          minimal={true}
          onClick={() => this.handleLockClick()}
        />
      </Tooltip>
    );
  }

  private handleLockClick() {
    this.props.loginState.setShowPassword();
  }

  private buttonPress(): void {
    console.log("herro!");
  }
}
