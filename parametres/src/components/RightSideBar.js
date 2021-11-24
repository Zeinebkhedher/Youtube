import React from 'react'
import { Container,Row } from 'react-bootstrap';
import Header from './Header'
import Contenu from './Contenu'
import Footer from './Footer'

function RightSideBar() {
    return (
        <Container style={{width:'900px',marginLeft:'650px'}}>
        <Row>
               <Header />
        </Row>
          <hr style={{width:'780px',marginTop:'-755px'}}></hr>
      
        <Row>
          <Contenu />
        </Row>
        
        <hr style={{width:'780px'}}></hr>
        <Row>
          <Footer />
        </Row>
  
        
      </Container>
    )
}

export default RightSideBar
