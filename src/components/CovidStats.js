import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

export default class CovidStats extends Component{
    constructor(props){
        super(props);
        this.state={
            covid19Data:null
        }
    }
    componentDidMount(){
        window.fetch("https://api.rootnet.in/covid19-in/stats/latest").
        then((response)=>{
            response.json().then(
                jsonBody => {this.setState({
                    covid19Data:jsonBody
                })
            });
           // ;
        });
    }
    render() {
        return(
            <div>
            <h2>Covid India Stats</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Total</th>
                    <th>Confirmed</th>
                    <th>Discharged</th>
                    <th>Casualty</th>
                    </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.state.covid19Data?.data.summary.total}</td>
                    <td>{this.state.covid19Data?.data.summary.confirmedCasesIndian}</td>
                    <td>{this.state.covid19Data?.data.summary.discharged}</td>
                    <td>{this.state.covid19Data?.data.summary.deaths}</td>
                    </tr>
                </tbody>
                </Table>
                <h2>Covid Regional Stats</h2>
                <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>State</th>    
                    <th>Confirmed</th>
                    <th>Discharged</th>
                    <th>Casualty</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.covid19Data?.data.regional.map(indlState => (
                        <tr>
                        <td>{indlState.loc}</td>
                        <td>{indlState.totalConfirmed}</td>
                        <td>{indlState.discharged}</td>
                        <td>{indlState.deaths}</td>
                        </tr>
                        ))}

                </tbody>
                </Table>
        </div>
        )
    }
}