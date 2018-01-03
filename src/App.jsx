import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

import { VictoryChart, VictoryBar, VictoryTheme } from "victory";
import ChartMaxHeightWrapper from "./ChartMaxHeightWrapper";
import "./App.css";

export default class App extends Component {
  render() {
    const sampleData = [{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }];

    return (
      <div>
        <Grid>
          <Row>
            <Col xs={8} xsOffset={2}>
              <ChartMaxHeightWrapper>
                <VictoryChart theme={VictoryTheme.material}>
                  <VictoryBar
                    style={{ data: { fill: "#c43a31" } }}
                    data={sampleData}
                  />
                </VictoryChart>
              </ChartMaxHeightWrapper>
            </Col>
            <Col xs={2}>
              <div>
                <button style={{ width: 50 }}>+</button>
              </div>
              <div>
                <button style={{ width: 50 }}>-</button>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
