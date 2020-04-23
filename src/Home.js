import React, { Component } from 'react'
import CovidStats from './components/CovidStats'
import BrowseLearning from './components/BrowseLearning'

export default class Home extends Component{

    constructor(props){
        super(props);
    }

    render ()  {
        //const covid19ds = ;
            if(this.props.pageIdToShow==1){
                return (<CovidStats/>)
            }else{
                return (<BrowseLearning/>)
            }
    }
}
