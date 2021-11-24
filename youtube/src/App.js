import './App.css';
import Header from './compnents/Header';
import Buttons from './compnents/Buttons';
import { Container,Row,Col } from 'react-bootstrap';
import LeftSideBar from './compnents/LeftSideBar';

function App() {
  return (
    <div className="App">
       <header className="App-header">
     
     <Container fluid p>
       <Row>
         <Col><Header/></Col>
       
       </Row>
       <Row>
           <div  style={{marginLeft:"145px",width:'1350px',color:"#A6ACAF ",marginTop:'-7px'}}>
                      <hr></hr>
            </div>
         </Row>
      
   <Row>
        <Col>
        <LeftSideBar fluid />
        </Col>
        

       
          <Col>
            <Buttons style={{marginTop:'-189px',marginLeft:'-25px'}}/>
          </Col>
   </Row>    

       <Row>
           <div  style={{marginLeft:"145px",width:'1350px',color:"#A6ACAF ",marginTop:'-3px'}}>
                      <hr></hr>
            </div>
          </Row>

         
       </Container>

     
      
    
    </header>




    </div>
  );
}

export default App;
