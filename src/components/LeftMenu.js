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
        this.props.callBackDataFromSelMenu(1)     
    }else if(eventKey=='browseLookBackApi'){
            this.props.callBackDataFromSelMenu(2);
    }

};

render()  { 
    return <Nav defaultActiveKey="/home" variant="pills" className="flex-column">
                <Nav.Link eventKey="stats" onSelect={this.handleLeftMenu}>Covid Statistics</Nav.Link>
                <Nav.Link eventKey="browseLookBackApi" onSelect={this.handleLeftMenu}>Remote Learning</Nav.Link>
                <Nav.Link eventKey="disabled" onSelect={this.handleLeftMenu} disabled>Covid awareness</Nav.Link>
                <Nav.Link eventKey="disabled" onSelect={this.handleLeftMenu} disabled>Location Updates</Nav.Link>
                <Nav.Link eventKey="disabled" onSelect={this.handleLeftMenu} disabled>
                  Helpline #
               </Nav.Link>
              </Nav>
         }

}