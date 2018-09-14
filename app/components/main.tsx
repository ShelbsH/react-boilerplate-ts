import React from "react";
import "styles/components/main.scss";

export namespace Start {
  export interface IProps {
    message: string;
  }
}

export class Main extends React.Component<Start.IProps> {
  render() {
    const { message } = this.props;

    return (
      <div className="app-root">
        <h1 className="title">React Boilerplate</h1>
        <p className="description">
          Start developing React apps with this boilerplate using {message}
        </p>
      </div>
    );
  }
}
