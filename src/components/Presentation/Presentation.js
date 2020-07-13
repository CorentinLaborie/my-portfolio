// MODULES //
import React, { useRef } from 'react';
import { Card, Carousel, Image, Col, Row, Container } from 'react-bootstrap';

// STYLE //
import "./Presentation.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// IMAGES //
import Logo from "../../assets/images/logo.svg"
import Bg from "../../assets/images/moi_bg.jpg";
import Guitare from "../../assets/images/moi_guitare.jpg"; // <img src={Guitare} alt="Au Samsung Campus" /> //
import Perou from "../../assets/images/moi_perou.jpg"; // <img src={Perou} alt="Gocta, Peru" /> //
import Slide1 from "../../assets/images/slide1.png" 
import Slide2 from "../../assets/images/slide2.png" 
import Slide3 from "../../assets/images/slide3.png" 


const Presentation = ({ element }) => {

  const MyHR = ({ color }) => (
    <hr
      style={{
        borderColor: color,
      }}
    />
  );

  return (
    <main>
      <section className="presentation">
        <Container fluid className="firstContainer">
        <Row>
          <Col><Image src={Bg} /></Col>
          <Col>        
            <div className="book">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Slide1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Slide2}
                  alt="second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
              <img
                  className="d-block w-100"
                  src={Slide3}
                  alt="third slide"
                />
              </Carousel.Item>
            </Carousel>
            </div>
          </Col>
        </Row>
        </Container>
      </section>
    </main>
  )
}

export default Presentation