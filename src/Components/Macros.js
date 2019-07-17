import React, { Component } from 'react'
import Chart from "chart.js";

let myPieChart;

export default class Macros extends Component {
    chartRef = React.createRef();

    componentDidMount() {
      this.buildChart();
    }

    componentDidUpdate() {
      this.buildChart();
    }

    buildChart = () => {
      const myChartRef = this.chartRef.current.getContext("2d");

      if (typeof myPieChart !== "undefined") myPieChart.destroy();

      myPieChart = new Chart(myChartRef, {
        type: "pie",
        data: {
          //Bring in data
          labels: ['Protein', 'Carbs', 'Fat'],
          datasets: [
            {
              label: 'grams',
              data: [200,120,70],
              backgroundColor: ['#ff3796', '#00faac', '#fffdaf']
            }
          ]
        },
        options: {
          cutoutPercentage: 20
          //Customize chart options
        }
      });
    }

    render() {
      return (
        <div className='macros'>
          <canvas
              id="myChart"
              ref={this.chartRef}
          />
        </div>
      )
    }
}