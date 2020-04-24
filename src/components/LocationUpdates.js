import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

export default class LocationUpdates extends Component {
    constructor(props){
        super(props);
        this.state={
            locationUpdates:null
        }
    }

    componentDidMount(){
        window.fetch('https://api.rootnet.in/covid19-in/notifications')
        .then(jsonRes => jsonRes.json())
        .then(jsondata => (this.setState({
                locationUpdates:jsondata
            })
        ))
    }
    render(){
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Notification & advisories</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.locationUpdates?.data.notifications.map(indlNotification => (  
                        <tr>
                            <td>
                            <a href={indlNotification.link} target="_blank">{indlNotification.title}</a>
                                </td>
                            </tr>
                    ))}
                </tbody>
                </Table>
        )    
    }
}