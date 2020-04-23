import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import { Navigation, NavigationBar } from './components/NavigationBar'
import  Home from './Home'
import { LatestUpdate } from './LatestUpdate'
import { Layout } from './components/Layout'
import { JumbotronPage } from './components/JumbotronPage'
import logo from './logo.svg';
import './App.css';
import { Container,Row,Col } from 'react-bootstrap';
import  LeftMenu  from './components/LeftMenu';

class App extends Component
{
  constructor(props){
    super(props);
    this.state={
      covid19statsres:null
    }
  }
  callBackToLoadDataSelFromLeftMenu = (pageId) => {
    this.setState({
      pageIdToShow:pageId
    });
  }

  render(){
    return(
    <React.Fragment>
      <Layout>
        <Router>
        <NavigationBar />
        <JumbotronPage />
        <Container>
          <Row>
            <Col xs={2}>
              <LeftMenu callBackDataFromSelMenu={this.callBackToLoadDataSelFromLeftMenu}  />
            </Col>
            <Col>
            <Switch>
            <Home pageIdToShow={this.state.pageIdToShow}/>
            <Route exact path="/latest" component={LatestUpdate}/>
          </Switch>
          </Col>
          </Row>
        </Container>
        </Router>
      </Layout>
  </React.Fragment>
    )}
}

export default App;
