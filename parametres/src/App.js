import './App.css';
import { Container,Row,Col } from 'react-bootstrap';
import LeftSideBar from './components/LeftSideBar';
import RightSideBar from './components/RightSideBar'
function App() {
  return (
   <Container fluid>
     <Row>
       <Col>
       <LeftSideBar/>
       
        <RightSideBar />
       </Col>
     </Row>
   </Container>
  );
}

export default App;
