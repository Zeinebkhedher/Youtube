import './App.css';
import { Container,Row,Col } from 'react-bootstrap';
import LeftSideBar from './components/LeftSideBar';
import RightSideBar from './components/RightSideBar';
import Videos from './components/Videos';
function App() {
  return (
   <Container>
     <Row>
       <Col> <LeftSideBar /></Col>
    
      <Col> <Videos /> </Col>
   
    
  
      <Col> <RightSideBar /> </Col>
    </Row>

   </Container>
  );
}

export default App;
