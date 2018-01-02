import React, { Component } from "react";

class ChartMaxHeightWrapper extends Component {
  constructor(props) {
    super(props);
    this.updateDim = this.updateDim.bind(this);
    this.height = 0;
  }

  updateDim() {
    this.height = window.innerHeight;
    this.forceUpdate();
  }

  componentDidMount() {
    this.updateDim();
    window.addEventListener("resize", this.updateDim);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDim);
  }

  render() {
    return (
      <div
        style={{
          height: this.height,
          overflow: "hidden"
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default ChartMaxHeightWrapper;
