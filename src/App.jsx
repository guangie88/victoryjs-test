import React, { Component } from "react";
import Modal from "react-modal";
import { VictoryAxis, VictoryChart, VictoryBar, VictoryTheme } from "victory";
import ResizableImbued from "./ResizableImbued";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      height: 0
    };
  }

  render() {
    const sampleData = [{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }];

    return (
      <div>
        <Modal style={{ content: { overflow: "hidden" } }} isOpen>
          <div className="fill-height">
            <div
              style={{
                borderWidth: 1,
                borderStyle: "solid",
                textAlign: "center",
                height: 80
              }}
            >
              a
            </div>

            <div className="fill-remaining">
              <div className="fill-width">
                <div style={{ width: 50 }} />
                <ResizableImbued
                  onResize={(width, height) => {
                    this.setState({ width, height });
                  }}
                >
                  <VictoryChart
                    width={this.state.width}
                    height={this.state.height}
                    theme={VictoryTheme.material}
                  >
                    <VictoryAxis
                      style={{
                        axisLabel: { fontSize: 15, padding: 20 },
                        tickLabels: { fontSize: 12, padding: 2 }
                      }}
                      label="x"
                    />
                    <VictoryAxis
                      style={{
                        axisLabel: { fontSize: 15, padding: 30 },
                        tickLabels: { fontSize: 12, padding: 2 }
                      }}
                      label="y"
                      fixLabelOverlap
                      dependentAxis
                    />
                    <VictoryBar
                      style={{ data: { fill: "#c43a31" } }}
                      data={sampleData}
                    />
                  </VictoryChart>
                </ResizableImbued>
                <div style={{ width: 50 }}>
                  <button style={{ width: 40 }}>+</button>
                  <button style={{ width: 40 }}>-</button>
                </div>
              </div>
            </div>
            <div
              style={{
                borderWidth: 1,
                borderStyle: "solid",
                textAlign: "center",
                height: 50
              }}
            >
              d
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
