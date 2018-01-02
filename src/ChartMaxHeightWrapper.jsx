import React, { Component } from "react";

class ChartMaxHeightWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: window.innerHeight
    };

    this.updateDim = this.updateDim.bind(this);
  }

  componentDidMount() {
    this.updateDim();
    window.addEventListener("resize", this.updateDim);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDim);
  }

  updateDim() {
    this.setState({ height: window.innerHeight });
  }

  render() {
    return (
      <div
        style={{
          height: this.state.height,
          overflow: "hidden"
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default ChartMaxHeightWrapper;
