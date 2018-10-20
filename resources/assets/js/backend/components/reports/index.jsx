import React from 'react';

const LineChart = require("react-chartjs").Line;

class Reports extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {

    }


    render() {
        var data = {
            labels: [
                "Jan", 
                "Feb", 
                "March", 
                "April", 
                "May", 
                "June", 
                "July",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
            ],
            datasets: [
                {
                    label: "Webinarignition",
                    fillColor: "rgba(0, 0, 0, 0)",
                    strokeColor: "hsl(13, 97%, 55%)",
                    pointColor: "hsl(13, 97%, 55%)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [65, 59, 80, 81, 56, 55, 40, 10, 40, 35, 30, 13]
                },
                {
                    label: "Provely",
                    fillColor: "rgba(0, 0, 0, 0)",
                    strokeColor: "hsl(187, 52%, 65%)",
                    pointColor: "hsl(187, 52%, 65%)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [20, 50, 80, 60, 30, 64, 89, 80, 90, 43, 30, 60]
                },
            ]
        };
    
        return (
            <div>
                <div className='main-header'>
                    <h1>Reports</h1>
                    <div> 
                        past year
                    </div>

                    <div>
                        Webinarignition
                    </div>

                </div>
        
                <LineChart data={data} width="1000" height="300" />
            </div>
        );
    }

    
};

export default Reports;