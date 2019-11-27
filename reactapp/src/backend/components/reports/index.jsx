import React from 'react';

import Ajax from '../../core/Helpers/AjaxHelper';

import { CSSTransition } from 'react-transition-group';

const LineChart = require("react-chartjs").Line;

class Reports extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {},
        }
    }

    componentDidMount() {
        Ajax.post('/app/reports/stats', {'action': 'past-two-weeks'})
            .then(res => {
                console.log(res);
                this.setState({data: res.data});
            })
            .catch(err => console.log(err));
    }

    render() {
    
        return (
        <CSSTransition
            in={true}
            appear={true}
            timeout={300}
            classNames="fade"
            >
            <div>
                <div className='main-header'>
                    <h1>Reports</h1>
                </div>
                { 
                    this.state.data.labels !== undefined 
                        ? <LineChart data={this.state.data} width="1000" height="300" /> 
                        : ''
                }
            </div>
        </CSSTransition>
        );
    }
};

export default Reports;