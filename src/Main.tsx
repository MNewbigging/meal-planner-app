import * as React from "react";
import { Hello } from "./components/Hello";

export class Main extends React.Component {
  public render(): JSX.Element {
    return (
      <>
        Main app
        <br />
        <Hello test="Hello from a component!!!.." />
      </>
    );
  }
}
