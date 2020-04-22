import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import { Navigation, NavigationBar } from './components/NavigationBar'
import { Home } from './Home'
import { LatestUpdate } from './LatestUpdate'
import { Layout } from './components/Layout'
import { JumbotronPage } from './components/JumbotronPage'
import logo from './logo.svg';
import './App.css';
import { Container,Row,Col } from 'react-bootstrap';
import  LeftMenu  from './components/LeftMenu';

class App extends Component
{
  render(){
    return(
    <React.Fragment>
      <Layout>
        <Router>
        <NavigationBar />
        <JumbotronPage />
        <Container>
          <Row>
            <Col>
              <LeftMenu />
            </Col>
            <Col>Right menu column
            <Switch>
            <Route exact path="/" component={Home}/>
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
