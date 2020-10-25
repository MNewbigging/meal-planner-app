import React from "react";

export interface IHelloProps {
    msg: string;
}

export class Hello extends React.Component<IHelloProps> {
    public render(): JSX.Element {
        return  (
            <>
                {this.props.msg}
            </>
        );
    }
}
