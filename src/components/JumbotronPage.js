import  React  from 'react'
import { Jumbotron,Button} from 'react-bootstrap'

export const JumbotronPage = () => { return (
    <Jumbotron>
          <h1>Hello, There!</h1>
          <p>
            This is a one stop page where you can get all the information and updates related to covid-19.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
    </Jumbotron>
)}