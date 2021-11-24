import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import {FaRegTrashAlt} from 'react-icons/fa';

function RightSideBar() {
    return (
       <Container style={{marginLeft:'420px',width:'530px',backgroundColor:'#F2F4F4',height:'700px',marginTop:'80px'}}>
           <Row  >
               <Col > 
                   <input type='text' placeholder="Recherche dans l'historique You..." style={{marginTop:'50px',borderRadius:'5px',backgroundColor:'transparent',width:'350px',height:'47px'}} /> 
               </Col>
            </Row>

            <Row style={{marginTop:"20px"}}> 
                <Col style={{fontSize:'20px'}}>
                 Type d'historique
                </Col>
            </Row>
             <hr style={{width:'450px'}}></hr>
           
           
            <Row style={{marginTop:'35px',fontSize:"20px",marginBottom:'5px'}}>
                <Col>
                  <input type="radio" /> historique de visionnage 
                </Col>
           </Row>
      
           <hr style={{width:'450px'}}></hr>


            <Row style={{marginTop:'35px',fontSize:"20px"}}>
                <Col>
                    <input type="radio" /> Communauté
                </Col>
            </Row>

            <hr style={{width:'450px'}}></hr>


            <Row style={{marginTop:'40px'}}>
                <Col><FaRegTrashAlt style={{fontSize:'25px',marginRight:'15px'}} /> Effacer tout l'historique des vidéos regardées</Col>
            </Row>

            <Row>
                <Col>
                 SUSPENDRE L'HISTORIQUE
                </Col>
            </Row>

            <Row>
                <Col>
                Gérer tout l'historique
                </Col>
            </Row>
            <Row>
                <Col>
                <p>Historique des recherches et des vidéos regardés</p>
                <p>Commentaires</p>
                <p>Chat en direct</p>
                </Col>
            </Row>

       </Container>
    )
}

export default RightSideBar
