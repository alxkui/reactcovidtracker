import React, { Component } from 'react';
import CanvasJSReact from '../canvasjs.react';
import axios from 'axios';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
let dataPoints = [];
export default class Graph extends Component {
 
	render() {	
		const options = {
			theme: "light2",
			title: {
				text: "Global COVID Deaths Chart"
			},
			axisY: {
				title: "Deaths",
				includeZero: false
			},
			data: [{
				type: "line",
				xValueFormatString: "MMM YYYY",
				yValueFormatString: "#,##0.00",
				dataPoints: dataPoints
			}]
        }
        
		return (
		<div className="chart">
			<CanvasJSChart options={options} 
				 onRef={ref => this.chart = ref}
			/>
		</div>
		);
	}
	
	componentDidMount(){
        // Get dates
		var chart = this.chart;
        
        axios.get('https://covid19.mathdro.id/api/daily')
        .then(res => {
            res.data.map(point => {
                dataPoints.push({
                    x: new Date(point.reportDate),
                    y: point.deaths.total
                })
            })
        })
        .finally(() => {
            chart.render();
        });
	}
}  