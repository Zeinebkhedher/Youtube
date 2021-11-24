import './App.css';
import {Container, Row,Col} from 'react-bootstrap';
import Header from './compnents/Header';
import Video from './compnents/Video';
function App() {
  return (
    <Container style={{backgroundColor:"#F7F9F9",marginLeft:"202px"}}>
      <Row>
        <Header />
      </Row>
      <Row style={{marginTop:'70px',marginLeft:'120px'}}>
        <p>Vidéo tendance </p>
      </Row>
      <Row style={{arginLeft:'120px'}} >
        <Video />
      </Row>
    </Container>
  );
}

export default App;
