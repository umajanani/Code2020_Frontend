import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

export default class Home extends Component{

    constructor(props){
        super(props);
    }

    render ()  {
        //const covid19ds = ;
        return(
        <div>
            <h2>Covid india stats</h2>
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
                    <td>{this.props.covid19Data?.data.summary.total}</td>
                    <td>{this.props.covid19Data?.data.summary.confirmedCasesIndian}</td>
                    <td>{this.props.covid19Data?.data.summary.discharged}</td>
                    <td>{this.props.covid19Data?.data.summary.deaths}</td>
                    </tr>
                </tbody>
                </Table>
        </div>
        )
    }
}
