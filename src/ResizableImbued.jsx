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
    this.imbueChildren = this.imbueChildren.bind(this);
  }

  onResize(width, height) {
    this.setState({ width, height });
  }

  imbueChildren(children) {
    return React.Children.map(children, c =>
      React.cloneElement(c, {
        width: this.state.width,
        height: this.state.height
      })
    );
  }

  render() {
    const imbuedStyle = {
      ...this.props.style,
      maxHeight: "100%",
      height: "100%",
      maxWidth: "100%",
      width: "100%"
    };

    return (
      <div style={imbuedStyle}>
        <ResizeDetector handleWidth handleHeight onResize={this.onResize} />
        {this.imbueChildren(this.props.children)}
      </div>
    );
  }
}
