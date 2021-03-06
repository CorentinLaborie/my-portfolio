// MODULES //
import React from 'react';

// STYLE //
import "./Footer.css";
import { Container, Row, Col, Button, Card, Image,ListGroup } from 'react-bootstrap';
import CV from "../../assets/cv/CV.pdf";
import Perou from "../../assets/images/moi_perou.jpg";

class Footer extends React.Component {

  render(){
  // AFFICHAGE //
  return (
      <section className="MyFooter">
        <Container fluid className="footer-container">
          <Row>
            <Col></Col>
            <Col className="p-title2" xs={6}>ME CONTACTER</Col>
            <Col></Col>
          </Row>
          <Row>
            <Col xs={2}></Col>
            <Col>
              <p className="paddingetaupe"><Card style={{ width: 'auto', height: 'auto' }}>
                <Image variant="top" src={Perou} />
              </Card></p>
            </Col>
            <Col>
            <div className="CV_DL">
              <Card className="text-center" style={{ width: 'auto' }}>
              <Card.Header as="h3">Pour télécharger mon CV ou pour me contacter, cliquez sur un des boutons ci-dessous !</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item><a href={CV} download="CV-LABORIE-CORENTIN"><Button variant="outline-success">Pour télécharger mon CV, c'est ici !</Button></a></ListGroup.Item>
                  <ListGroup.Item><a href="mailto:corentin.laborie@epitech.eu"><Button size="xs" variant="outline-warning" className="text-center" type="button">Me contacter par mail ? Cliquez ici !</Button></a></ListGroup.Item>
                </ListGroup>
              </Card>
            </div>
              </Col>
              <Col xs={2}></Col>
            </Row>
        </Container>
      </section>
    )
  }
}
  export default Footer;
  