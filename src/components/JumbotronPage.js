import  React  from 'react'
import { Jumbotron,Button} from 'react-bootstrap'

export const JumbotronPage = () => { return (
    <Jumbotron>
          <h1>Hello, COVID-19!</h1>
          <p>
            One stop solution to can get all the information and updates during Crisis
          </p>
          <p>
            <Button variant="primary" align="right" href="http://localhost:8081/index.html">VR Experience View</Button>
          </p>
    </Jumbotron>
)}