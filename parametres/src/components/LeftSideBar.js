import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import './LeftSideBar.css'

function LeftSideBar() {
    return (
        <Container style={{marginTop:'75px',backgroundColor:'#F2F4F4 ',width:'280px',marginLeft:'5px',height:"950px"}}>
            <Row style={{height:'65px',fontSize:"20px",cursor:'pointer'}} >
                <Col>Pramètres</Col>
            </Row>

            <Row className='colone' style={{height:'65px',fontSize:"20px",cursor:'pointer',backgroundColor:'#E5E8E8'}}>
                <Col> Compte
                </Col>
            </Row>


            <Row className='colone' style={{height:'65px',fontSize:"20px",cursor:'pointer'}}>
                <Col> Notifications
                </Col>
            </Row>


            <Row className='colone' style={{height:'65px',fontSize:"20px",cursor:'pointer'}}>
                <Col> Lecture et performances 
                </Col>
            </Row>


            <Row className='colone' style={{height:'65px',fontSize:"20px",cursor:'pointer'}}>
                <Col> Confidentialité
                </Col>
            </Row>


            <Row className='colone' style={{height:'65px',fontSize:"20px",cursor:'pointer'}} >
                <Col>Applications associées
                </Col>
            </Row>


            <Row className='colone' style={{height:'65px',fontSize:"20px",cursor:'pointer'}}>
                <Col> Facturation et paiements
                </Col>
            </Row>

            <Row className='colone' style={{height:'65px',fontSize:"20px",cursor:'pointer'}}>
                <Col> Paramètres avancés
                </Col>
            </Row>



        </Container>
    )
}

export default LeftSideBar
