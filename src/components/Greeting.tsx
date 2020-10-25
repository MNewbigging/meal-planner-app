import React from 'react';

export class Greeting extends React.Component {
  public render() {
    const msg: string = 'im the greeting';

    return (
      <div>
        {msg}
      </div>
    );
  }
}