import React from 'react'
import {Container, Row,Col} from 'react-bootstrap';
import {HiOutlineMusicNote} from 'react-icons/hi';
import {SiYoutubegaming} from 'react-icons/si';
import {BsTrophyFill} from 'react-icons/bs';
import {AiFillFire} from 'react-icons/ai'
import './Header.css'
function Header() {
    return (
        <Container style={{marginLeft:"132px",marginTop:"80px",width:'973px'}}>
            <Row >
               <div style={{backgroundColor:'white',width:'150px',borderRadius:'5px',cursor:'pointer',borderColor:'white',marginLeft:'10px'}}>
                    <Col className='tend' style={{}}> <AiFillFire style={{color:'EC6116',fontSize:'27px',marginTop:'20px'}}/> <p style={{marginTop:'17px',fontSize:'16px'}}>Tendances</p></Col>
              </div>

              <div style={{backgroundColor:'white',width:'150px',borderRadius:'5px',cursor:'pointer',borderColor:'white',marginLeft:'20px'}}>
                <Col className='tend' style={{borderRadius:'5px',marginLeft:'2px',cursor:'pointer'}}><HiOutlineMusicNote style={{color:'#D4AC0D ',fontSize:'25px',marginTop:'20px'}}/> <p style={{marginTop:'20px',fontSize:'16px'}}>Musique</p></Col>
                </div>

                <div style={{backgroundColor:'white',width:'150px',borderRadius:'5px',cursor:'pointer',borderColor:'white',marginLeft:'20px'}}>
                <Col className='tend' style={{borderRadius:'5px',marginLeft:'2px',cursor:'pointer'}}><SiYoutubegaming style={{color:"#D35400",fontSize:'26px',marginTop:'20px'}} /><p style={{marginTop:'20px',fontSize:'16px'}}>Jeu vidéo</p></Col>
                </div>

                <div style={{backgroundColor:'white',width:'150px',borderRadius:'5px',cursor:'pointer',borderColor:'white',marginLeft:'20px'}}>
                <Col className='tend' style={{borderRadius:'5px',marginLeft:'2px',cursor:'pointer'}} ><BsTrophyFill style={{color:' #3498DB',fontSize:'25px',marginTop:'20px'}} /><p style={{marginTop:'20px',fontSize:'16px'}}> Sport</p></Col>
                </div>           
            </Row>
        </Container>
    )
}

export default Header
