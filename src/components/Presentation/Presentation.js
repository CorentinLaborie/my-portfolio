// MODULES //
import React, { useRef } from 'react';
import { Card, Carousel, Image, Col, Row, Container } from 'react-bootstrap';

// STYLE //
import "./Presentation.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// IMAGES //
import Bg from "../../assets/images/moi_bg.jpg";
import Slide1 from "../../assets/images/slide1.png" 
import Slide2 from "../../assets/images/slide2.png" 
import Slide3 from "../../assets/images/slide3.png" 


const Presentation = ({ element }) => {

  const MyHR = ({ color }) => (
    <hr
      style={{
        marginTop: "5px",
        borderColor: color,
      }}
    />
  );

  return (
      <section className="presentation">
        <Container fluid className="firstContainer">
        <Row>
          <Col><Image src={Bg} fluid/></Col>
          <Col>        
            <div className="book">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Slide1}
                  alt="First slide"
                  height={330}
                  width={495}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Slide2}
                  alt="second slide"
                  height={330}
                  width={495}
                />
              </Carousel.Item>
              <Carousel.Item>
              <img
                  className="d-block w-100"
                  src={Slide3}
                  alt="third slide"
                  height={330}
                  width={495}
                />
              </Carousel.Item>
            </Carousel>
            </div>
          </Col>
        </Row>
        </Container>
      <MyHR color="black" />
      </section>
  )
}

export default Presentation