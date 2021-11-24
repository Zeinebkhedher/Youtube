import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';

function LeftSideBar() {
    return (
        <Container style={{marginLeft:'-450px'}}>
            <Row>
                
            <Col>  Acceuil</Col>
            </Row>
            <Row>
            <Col> Explore</Col>
            </Row>
            <Row>
            <Col>  Abonnements</Col>
            </Row>
            <Row>
            <Col>  Bibiothèque</Col>
            </Row>
            
            
        </Container>
    )
}

export default LeftSideBar
