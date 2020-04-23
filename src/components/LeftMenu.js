import React, { Component } from 'react'
import {Nav} from 'react-bootstrap'

/*Class LeftMenu extends Component{

}*/
export default class LeftMenu extends React.Component{

constructor(props)    {
    super(props);
}

 handleLeftMenu = (eventKey) => {
    console.log("click event came here",eventKey);   
    if(eventKey=='stats'){
        //window.fetch("http://localhost:3000/learningcategories")
        window.fetch("https://api.rootnet.in/covid19-in/stats/latest").
        then((response)=>{
            response.json().then(
                jsonBody => {this.props.callBackDataFromSelMenu(jsonBody)});
           // ;
        });
        
    }

};

render()  { 
    return <Nav defaultActiveKey="/home" variant="pills" className="flex-column">
                <Nav.Link eventKey="disabled" onSelect={this.handleLeftMenu} disabled>Covid awareness</Nav.Link>
                <Nav.Link eventKey="disabled" onSelect={this.handleLeftMenu} disabled>Covid Preparedness</Nav.Link>
                <Nav.Link eventKey="stats" onSelect={this.handleLeftMenu}>Covid Statistics</Nav.Link>
                <Nav.Link eventKey="disabled" onSelect={this.handleLeftMenu} disabled>
                  Helpline #
               </Nav.Link>
              </Nav>
         }

}