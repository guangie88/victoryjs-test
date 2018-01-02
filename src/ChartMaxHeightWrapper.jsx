import React, { Component } from "react";
import { createStore } from "redux";
import { connect } from "react-redux";

const UPDATE_HEIGHT = "UPDATE_HEIGHT";

// action
const updateHeight = height => ({
  type: UPDATE_HEIGHT,
  height: height
});

// reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_HEIGHT:
      return [...state];
    default:
      return state;
  }
};

// store
let store = createStore(reducer);

const mapDispatchToProps = dispatch => {};

class ChartMaxHeightWrapper extends Component {
  constructor(props) {
    super(props);
    this.updateDim = this.updateDim.bind(this);
    this.height = 0;
  }

  updateDim() {
    store.dispatch(updateHeight(window.innerHeight));
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
