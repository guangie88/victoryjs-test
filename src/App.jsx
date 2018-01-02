import React, { Component } from "react";
import { VictoryChart, VictoryBar, VictoryTheme } from "victory";
import ChartMaxHeightWrapper from "./ChartMaxHeightWrapper";
import "./App.css";

class App extends Component {
  render() {
    const sampleData = [{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }];

    return (
      <div className="App">
        <ChartMaxHeightWrapper>
          <VictoryChart theme={VictoryTheme.material}>
            <VictoryBar
              style={{ data: { fill: "#c43a31" } }}
              data={sampleData}
            />
          </VictoryChart>
        </ChartMaxHeightWrapper>
      </div>
    );
  }
}

export default App;
