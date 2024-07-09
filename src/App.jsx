import { useState } from 'react'
import { Container, Row, Col, Button, Image, Card, Carousel } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  return ( <div>

<embed loop="true" src="sound.wav" hidden="true" type="video/quicktime"></embed>

<Image width="15%" src="src\Asset\RedButton.jpg" alt="" roundedCircle></Image>
    <h1>Ummmm</h1>
    <p>What to do?</p>  
    <i>Click on the button</i>
   
    <hr></hr>
   
    <Button variant='outline-danger' href="https://www.youtube.com/watch?v=xvFZjo5PgG0" target="_blank">Do</Button>{''}
    
    <hr></hr>
    
    <Image width="50%" align="left" src="src\Asset\CatToothless.jpg" alt="" rounded></Image>
    <Image width="50%" height="30%" align="right" src="src\Asset\CatToothless2.jpg" alt="" rounded></Image>

    <h1>How to Train Your Dragon is goated</h1>
    <p>Toothless is basiclly an overgrown cat tho.</p>
    <h3>Amazing character, fun story, 
      nice simple trilogy, 
      and amazing design/music, 
      what's there not to like? 
      It has DRAGONS, literal dragons, 
      what's better than that?</h3>
    <i>Vibe to the music</i>

   <hr></hr>
   
    <Container>
     <Row className="justify-content-md-center">
       <Col xs={12} md={6} lg={4} xl={3} > <Button variant="outline-danger" href='https://www.youtube.com/watch?v=IpPIK4T068s' target="_blank">Music 1</Button>{' '} </Col>
       <Col xs={12} md={6} lg={4} xl={3} > <Button variant="outline-danger" href='https://www.youtube.com/watch?v=HHOwYqxBbWU' target="_blank">Music 2</Button>{' '} </Col>
       <Col xs={12} md={6} lg={4} xl={3} > <Button variant="outline-danger" href='https://www.youtube.com/watch?v=xvFZjo5PgG0' target="_blank">Music 3</Button>{' '} </Col>
     </Row>
   </Container>
   
    <hr></hr>

    <sub>Fate/Stay Night</sub>
    <sup>Fate/Hollow Ataraxia</sup>
    <sub>Fate/Zero</sub>
    <sup>Fate/Kaleid Liner PRISMA☆ILLYA</sup>
    <sub>Fate/Strange Fake</sub>
    <sup>Fate/EXTRA</sup>
    <sub>Fate/Prototype</sub>
    <sup>Fate/Apocrypha</sup>
    <sub>Fate/Requiem</sub>
    <sup>Fate/Type Redline</sup>
    <sub>Fate/Carnival</sub>
    <sup>Fate/Samurai Remnant</sup>
    <h1>Fate is a weird series</h1>
    <p>It's weird but fun.</p>
    <h3>The Fate series is in this weird space between being well known and not, 
      it's not popular, 
      but it's not unhered of. 
      It's also somewhat complex and has a lot of storys connected to it, 
      not to even get started on Type/Moon as a whole. 
      But it's enjoyable</h3>
    <i>Feel the music</i>
    
    <hr></hr>
   
    <Container>
      <Row className="justify-content-md-center">
       <Col xs={12} md={6} lg={4} xl={3} > <Button variant="outline-danger" href='https://www.youtube.com/watch?v=ngm99aJh7ig' target="_blank">Last Stardust</Button>{' '} </Col>
       <Col xs={12} md={6} lg={4} xl={3} > <Button variant="outline-danger" href='https://www.youtube.com/watch?v=xvFZjo5PgG0' target="_blank">Carnival Phantasm</Button>{' '} </Col>
       <Col xs={12} md={6} lg={4} xl={3} > <Button variant="outline-danger" href='https://www.youtube.com/watch?v=S87sMt-5Qr0' target="_blank">Emiya Theme</Button>{' '} </Col>
       <Col xs={12} md={6} lg={4} xl={3} > <Button variant="outline-danger" href='https://www.youtube.com/watch?v=hkQ8Rs5KXRw' target="_blank">Fate Zero</Button>{''} </Col>
      </Row>
    </Container>
    

    <hr></hr>
    
    <h1>Gacha games are somewhat fun, but so time consuming</h1>
    <p>Gacha music are unironicly dope tho.</p>
    <h3>Anniversary are the best time for a gacha game because of the multitude of the rewards.
      depending on the game style,
      it could also have the benefit of being enjoyable to play.
      Genshin Impact and Fate Grand Order have extreamly diffrent playstyle,
      One is turn based, and the other is like an RPG.
    </h3>
    <i>Be the music</i>

    <hr></hr>
    
    <Container>
      <Row className="justify-content-md-center">
       <Col xs={12} md={6} lg={4} xl={3} > <Button variant="outline-danger" href='https://www.youtube.com/watch?v=SxlW79tDhCA' target="_blank">Honkai Star Rail</Button>{' '} </Col>
       <Col xs={12} md={6} lg={4} xl={3} > <Button variant="outline-danger" href='https://www.youtube.com/watch?v=lm3t3myPspk' target="_blank">Genshin Impact</Button>{' '} </Col>
       <Col xs={12} md={6} lg={4} xl={3} > <Button variant="outline-danger" href='https://www.youtube.com/watch?v=2uxmZalYnVU' target="_blank">Fate Grand Order</Button>{' '} </Col>
       <Col xs={12} md={6} lg={4} xl={3} > <Button variant="outline-danger" href='https://www.youtube.com/watch?v=ldgKyTo0bVY' target="_blank">DBZ Dokkan</Button>{''} </Col>
       <Col xs={12} md={6} lg={4} xl={3} > <Button variant="outline-danger" href='https://www.youtube.com/watch?v=xvFZjo5PgG0' target="_blank">DBZ Legend</Button>{''} </Col>
      </Row>
    </Container>

    <hr></hr>



<form><button variant='outline-danger'>Go To Top</button></form>
  </div>
  )
}


export default App