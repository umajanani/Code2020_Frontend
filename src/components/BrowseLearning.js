import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

export default class BrowseLearning extends Component {
    constructor(props){
        super(props);
            this.state={
                learningcategories:[]
            }
    }
    componentDidMount(){
        window.fetch("http://localhost:3000/learningcategories")
            .then(learningCatRes => learningCatRes.json())
            .then(jsonRes => {
            this.setState({
                learningcategories:jsonRes
            })
        })
    }
    render() {
        return (
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>Category</th>
                <th>Category Name</th>
                </tr>
            </thead>
            <tbody>
            {this.state.learningcategories?.map(indlCategory => (
              <tr>
                <td>{indlCategory.category}</td>
                <td><a href={indlCategory.url} target="_blank">{indlCategory.categoryname}</a></td>
                </tr>
                ))}
            </tbody>
            </Table>
        )
    }
}