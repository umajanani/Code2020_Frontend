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
    if(eventKey==1){
        window.fetch("http://localhost:3000/learningcategories")
    }

};

render()  { 
    return <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link eventKey="1" onSelect={this.handleLeftMenu}>Active</Nav.Link>
                <Nav.Link eventKey="2" onSelect={this.handleLeftMenu}>Link</Nav.Link>
                <Nav.Link eventKey="link-2" onSelect={this.handleLeftMenu}>Link</Nav.Link>
                <Nav.Link eventKey="disabled" onSelect={this.handleLeftMenu} disabled>
                  Disabled
               </Nav.Link>
              </Nav>
         }

}