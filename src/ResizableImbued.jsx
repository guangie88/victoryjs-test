import React, { Component } from "react";
import ResizeDetector from "react-resize-detector";

export default class ResizableImbued extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      height: 0
    };

    this.onResize = this.onResize.bind(this);
  }

  onResize(width, height) {
    return this.props.onResize(width, height);
  }

  render() {
    return (
      <div
        {...this.props.styles}
        style={{
          maxHeight: "100%",
          height: "100%",
          maxWidth: "100%",
          width: "100%"
        }}
      >
        <ResizeDetector handleWidth handleHeight onResize={this.onResize} />
        {this.props.children}
      </div>
    );
  }
}
