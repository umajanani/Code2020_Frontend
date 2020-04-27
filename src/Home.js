import React, { Component } from 'react'
import CovidStats from './components/CovidStats'
import BrowseLearning from './components/BrowseLearning'
import LocationUpdates from './components/LocationUpdates'
import Login from './Login'
export default class Home extends Component{

    constructor(props){
        super(props);
    }

    render ()  {
        //const covid19ds = ;
            if(this.props.pageIdToShow==1){
                return (<CovidStats/>)
            }else if(this.props.pageIdToShow==2){
                return (<BrowseLearning/>)
            }else{
                return (<LocationUpdates/>)
            }
    }
}
