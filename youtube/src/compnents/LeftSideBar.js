import Button from '@restart/ui/esm/Button';
import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import {AiFillHome,AiOutlineTrophy} from 'react-icons/ai';
import {MdOutlineExplore,MdOutlineSubscriptions,MdOutlineVideoLibrary,MdOutlineVideogameAsset,MdOutlinedFlag} from 'react-icons/md';
import  {RiHistoryFill,RiNewspaperLine} from 'react-icons/ri';
import {CgProfile,CgGames} from 'react-icons/cg';
import {GiMusicSpell,GiSoundWaves} from 'react-icons/gi';
import {FiSettings} from 'react-icons/fi';
import {BsPlusCircle,BsExclamationSquare} from 'react-icons/bs';
import {BsQuestionCircle} from 'react-icons/bs';
import './LeftSideBar.css'
function LeftSideBar() {
    return (
        <Container fluid style={{width:'168px',marginLeft:'-20px',position:'fixed',marginTop:'-17px'}}>
            <Row style={{backgroundColor:'#E5E7E9',height:'27px'}}>
                <Col style={{fontSize:'10px',cursor:'pointer' }}>
                   <AiFillHome style={{fontSize:'15px',marginRight:'10px'}}/>    Acceuil 
                </Col>
             </Row>   

                <Row className='left'style={{height:'25px'}} >
                         <Col style={{fontSize:'10px',cursor:'pointer' }}>
                                 <MdOutlineExplore  style={{fontSize:'15px' ,marginRight:'10px'}}/> Explore
                        </Col>
                </Row>   

                    <Row className='left' style={{height:'28px'}}>
                         <Col style={{fontSize:'10px',cursor:'pointer' }}>
                                <MdOutlineSubscriptions  style={{fontSize:'15px' ,marginRight:'10px'}}/> Abonnements
                         </Col>
                   </Row>   



                   <div style={{width:'150px',marginTop:'-8px',marginLeft:'-13px'}}>
                     <hr></hr>
                  </div>



                    <Row className='left' style={{height:'25px',marginTop:'-10px'}}>
                <Col style={{fontSize:'10px',cursor:'pointer' }}>
                <MdOutlineVideoLibrary  style={{fontSize:'15px' ,marginRight:'10px'}}/> Bibliothèques
                </Col>

                </Row>


                    <Row className='left' style={{ height:'25px',marginTop:'2px'}}>
                <Col style={{fontSize:'10px',cursor:'pointer' }}>
                <RiHistoryFill  style={{fontSize:'15px' ,marginRight:'10px'}}/> Historiques
                </Col>
                </Row>   

                <div style={{width:'150px',marginTop:'-9px',marginLeft:'-13px'}}>
                     <hr></hr>
                  </div>


                    <Row  style={{marginTop:'-7px'}}> 
                <Col style={{fontSize:'10px' }}>
                Connectez-vous à YouTube pour cliquer sur "J'aime", ajouter un commentaire et vous abonner.
                </Col>
                </Row>   

                <Row  style={{marginTop:'2px'}}>
                <Col style={{fontSize:'10px',cursor:'pointer' }}>
                <Button style={{color:'#0000FF ',border:'1px solid #0000FF ',backgroundColor:'white'}}> <CgProfile style={{fontSize:'15px' ,marginRight:'10px',marginBottom:'2px'}} /> Se conncter </Button>
                </Col>
                </Row>   

                <div style={{width:'150px',marginTop:'-5px',marginLeft:'-13px'}}>
                     <hr></hr>
                  </div>

                <Row  style={{marginTop:'-8px'}}>
                <Col style={{fontSize:'10px',cursor:'pointer' }}>
                LE MEILLEUR DE YOUTUBE
                </Col>
                </Row>



                <Row className='left' style={{marginTop:'5px',height:'25px'}}>
                <Col style={{fontSize:'10px',cursor:'pointer' }}>
                <GiMusicSpell style={{fontSize:'15px' ,marginRight:'10px',color:'#D6DBDF',backgroundColor:'#283747',borderRadius:'50px'}} /> Musique
                </Col>
                </Row>

                <Row className='left' style={{marginTop:'2px',height:'25px'}}>
                <Col style={{fontSize:'13px',cursor:'pointer' }}>
                <AiOutlineTrophy style={{fontSize:'15px',marginRight:'10px',color:'#D6DBDF',backgroundColor:'#283747',borderRadius:'50px'}} /> Sport 
                </Col>
                </Row>   



                <Row className='left' style={{marginTop:'2px',height:'25px'}}>
                <Col style={{fontSize:'10px',cursor:'pointer' }}>
                <CgGames style={{fontSize:'15px',marginRight:'10px',color:'#D6DBDF',backgroundColor:'#283747',borderRadius:'50px'}}/> Jeux vidéo
                </Col>
                </Row>   

                <Row className='left' style={{marginTop:'5px',height:'25px'}}>
                <Col style={{fontSize:'10px',cursor:'pointer' }}>
                <RiNewspaperLine style={{fontSize:'15px',marginRight:'10px',color:'#D6DBDF',backgroundColor:'#283747',borderRadius:'50px'}}/> Actualités
                </Col>  
                </Row>   

                <Row className='left' style={{marginTop:'2px',height:'25px'}}>
                <Col style={{fontSize:'10px',cursor:'pointer' }}>
                <GiSoundWaves style={{fontSize:'15px',marginRight:'10px',color:'#D6DBDF',backgroundColor:'#283747',borderRadius:'50px'}} /> En direct
                </Col>    
                </Row>      

                <Row className='left' style={{marginTop:'2px',height:'25px'}}>
                <Col style={{fontSize:'10px',cursor:'pointer' }}>
                <MdOutlineVideogameAsset style={{fontSize:'15px',marginRight:'10px',color:'#D6DBDF',backgroundColor:'#283747',borderRadius:'50px'}} /> Vidéo à 360°
                </Col> 
                </Row>


                <div style={{width:'150px',marginTop:'-14px'}}>
                     <hr></hr>
                  </div>

                <Row className='left' style={{marginTop:'-9px',height:'25px'}}>
                <Col style={{fontSize:'11px',cursor:'pointer' }}>
                <BsPlusCircle style={{fontSize:'15px',marginRight:'10px'}} /> Chaines 
                </Col>
                </Row>   


                <div style={{width:'150px',marginTop:'-15px'}}>
                     <hr></hr>
                  </div>

                <Row className='left' style={{marginTop:'-6px',height:'25px'}}>
                <Col style={{fontSize:'10px',cursor:'pointer' }}>
                <FiSettings style={{fontSize:'15px',marginRight:'10px'}} /> Paramétres
                </Col>
                </Row>   

                <Row className='left' style={{height:'25px'}}>
                <Col style={{fontSize:'10px',cursor:'pointer' }}>
                <MdOutlinedFlag style={{fontSize:'15px',marginRight:'10px'}} /> Historique des signal...
                </Col>
                </Row>   

                <Row className='left' style={{height:'25px'}}>
                <Col style={{fontSize:'10px',cursor:'pointer' }}>
                <BsQuestionCircle style={{fontSize:'15px',marginRight:'10px'}}/> Aide 
                </Col>
                </Row>   


                <Row className='left' style={{height:'25px',marginTop:'3px'}}>
                <Col style={{fontSize:'10px',cursor:'pointer' }}>
                <BsExclamationSquare style={{fontSize:'15px',marginRight:'10px'}}/> Envoyez des commen...
                </Col>
                </Row>   

                <div style={{width:'150px',marginTop:'-11px'}}>
                     <hr></hr>
                  </div>

                <Row >
                    <Col style={{fontSize:'10px',marginTop:'-5px'}}>
                    PrésentationPresseDroits d'auteurNous contacterCréateursPublicitéDéveloppeurs
Conditions d'utilisationConfidentialitéRègles et sécuritéPremiers pas sur YouTubeTester de nouvelles fonctionnalités
                    </Col>
                </Row>






        </Container>
    )
}

export default LeftSideBar
