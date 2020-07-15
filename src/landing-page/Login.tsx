import * as React from "react";

import { Button, InputGroup, Tooltip } from "@blueprintjs/core";

import { observer } from "mobx-react";

import axios from "axios";

import { LoginState } from "./LoginState";

import "./login.scss";

interface LoginProps {
  loginState: LoginState;
}

@observer
export class Login extends React.Component<LoginProps> {
  render() {
    const ls = this.props.loginState;
    return (
      <div className="login-container">
        <InputGroup
          className={"text-input"}
          large={true}
          placeholder={"username"}
          type={"text"}
        />
        <InputGroup
          className={"text-input"}
          large={true}
          placeholder={"password"}
          rightElement={this.renderLockButton()}
          type={ls.showPassword ? "text" : "password"}
        />
        <Button
          large={true}
          text={"Click me"}
          icon={"log-in"}
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
    console.log("sending request...");
    // Send a login request to server
    const url = "http://localhost:3030/";
    // The data to send
    const data = {
      username: "user",
      password: "pw",
    };
    // Make the request
    axios.post(url, data).then((res) => {
      console.log(res);
    });
  }
}
