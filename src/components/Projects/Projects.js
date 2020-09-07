// MODULES //
import React from 'react';
import { Card,  Image, Col, Row, Container,Button } from 'react-bootstrap';

import ScreenPHP from "../../assets/screens/css_generator.png";


// STYLE //
import "./Projects.css";


class Projects extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      show: false
    };
  }

  render(){
    // AFFICHAGE //
    return (
    <section className="projects">

      <Container className="Big-Block" >
        <Row className="p-title">
          <Col></Col>
          <Col>QUELQUES PROJETS :</Col>
          <Col></Col>
        </Row>
        <Row className="php">
          <Col className="screenPHP" xs={5}>
          <Image src={ScreenPHP} thumbnail fluid className="ScreenPHP" border="primary"/>
          <Button size="lg" variant="outline-light" className="Projects-BUTTON" type="button" onClick={()=>{window.open("https://github.com/CorentinLaborie/My_New_CSS_GENERATOR", '_blank');}}>Voir sur GitHub ?</Button>
          </Col>
          <Col className="descriptionPHP">
            <Card style={{ width: 'auto' }} className="text-center" border="primary">
              <Card.Header><h3>CSS_GENERATOR</h3></Card.Header>
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted"><i>12/2019 Samsung Campus</i></Card.Subtitle>
                <Card.Text>
                  Le CSS_GENERATOR est un générateur de sprite et de feuille de style CSS réalisé intégralement en PHP natif.
                  Glissez vos images (ou un dossier d'images) dans le dossier "./images" et lancez le programme.
                  Fonctionne sous Ubuntu.
                  Format image integré : ".png".
                  En cours : "Ajout du format .jpeg".
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="js">
          <Col className="descriptionJS">
            <Card style={{ width: 'auto' }} className="text-center" border="warning">
              <Card.Header><h3>Ce Portfolio</h3></Card.Header>
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted"><i>07/2020</i></Card.Subtitle>
                <Card.Text>
                  Ce Portfolio a été entièrement réalisé en ReactJS. Pour de plus amples informations : 
                </Card.Text>
              </Card.Body>
              <Card.Footer>
              <a href="mailto:corentin.laborie@epitech.eu"><Button size="xs" variant="outline-dark" className="text-center" type="button" onClick={console.log("Bah alors, on vient regarder le code ?")}>Me contacter par mail ?</Button></a>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row className="dymed">
          <Col className="screenDYMED">
          <Card style={{ width: 'auto' }} border="success">
            <iframe width="538" height="322" src="https://www.youtube.com/embed/RVh-HFnI5Co" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </Card>
          </Col>
          <Col className="descriptionDYMED">
            <Card style={{ width: 'auto' }} className="text-center" border="succes">
              <Card.Header><h3>D.Y.MED</h3></Card.Header>
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted"><i>06/2020 Samsung Campus</i></Card.Subtitle>
                <Card.Text>
                  D.Y.MED est une plateforme E-Commerce réalisée en groupe de 7 personnes dans le cadre de la formation Samsung-Campus.
                  <br />Ce projet a été fait en partenariat avec l'ESSEC BUSINESS SCHOOL.
                  <br /><br />J'occupais un poste FullStack (Laravel Back / ReactJS front) ainsi qu'environ 50% du poste de Scrum-Master.
                  <br /><a href="https://dymed.netlify.app/">Visiter ici !</a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
    );
  }
}

  export default Projects;
  
