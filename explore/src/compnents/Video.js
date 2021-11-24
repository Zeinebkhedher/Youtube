import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import {FcAddImage} from 'react-icons/fc';
import {FiMoreVertical} from 'react-icons/fi'
import {GoVerified} from 'react-icons/go'

function Video() {
    return (
        <Container>
            <Row style={{width:'1225px'}} >
                <Col style = {{marginLeft:'50px'}}> <FcAddImage style={{fontSize:'180px',width:'310px'}} /></Col>
                <Col style={{marginLeft:'-130px',marginTop:'36px',fontSize:'10px'}} > 
                        <h6>suid Game</h6>
                        <p>esm l page <GoVerified  /> nb vues ..heures</p>
                        <p>description de la video... </p>
                </Col>
                <Col style={{marginTop:'23px'}} >
                <FiMoreVertical />
                </Col>
            </Row>
        </Container>
    )
}

export default Video
