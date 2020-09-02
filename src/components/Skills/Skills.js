// MODULES //
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Card, Image, Col, Row, Container, Form,ListGroup,ProgressBar } from 'react-bootstrap';


// STYLE //
import "./Skills.css";

// IMAGES //
import HtmlCssLog from "../../assets/logos/html_css.jpg";
import PhPLog from "../../assets/logos/php.png";
import LaravelLog from "../../assets/logos/laravel.png";
import SymfLog from "../../assets/logos/symfony.png";
import JSLog from "../../assets/logos/js.png";
import ReactLog from "../../assets/logos/react.png";
import SqlLog from "../../assets/logos/mysql.jpg";
import MongoLog from "../../assets/logos/mongodb.jpg";
import GitLog from "../../assets/logos/git.jpg";
import NodeLog from "../../assets/logos/nodejs.png";
import ExpressLog from "../../assets/logos/express.png";
import JQueryLog from "../../assets/logos/jquery.png";




const Skills = ({ element }) => {

  // const MyHR = ({ color }) => (
  //   <hr
  //     style={{
  //       borderColor: color,
  //     }}
  //   />
  // );

  const [selectskill, setSelectskill] = useState('choose');

  function handleChangeSelectSkill(event) {
    setSelectskill(event.target.value);
  };

  const handleChangeMySkill = (event) => {
    if (event.target.value === "choose") {
      const SkillsResultat = <Card style={{ width: 'auto' }} className="text-center">
                                <Card.Header as="h1">Vous deviez choisir, je crois..</Card.Header>
                             </Card>
      ReactDOM.render(SkillsResultat, document.getElementById('SkillResult'));
    }
    else if (event.target.value === "php") {
      const SkillsResultat = <Card style={{ width: 'auto' }} className="text-center">
                              <Card.Header as="h3">Pour PHP :</Card.Header>
                              <ListGroup variant="flush">
                                <ListGroup.Item>
                                  <Image src={PhPLog} roundedCircle/>
                                  <ProgressBar animated now={85} />
                                  </ListGroup.Item>
                                <ListGroup.Item>
                                  <Image src={LaravelLog} roundedCircle/>
                                  <ProgressBar animated now={60} />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  <Image src={SymfLog} roundedCircle/>
                                  <ProgressBar animated now={55} />
                                </ListGroup.Item>
                              </ListGroup>
                             </Card>
      ReactDOM.render(SkillsResultat, document.getElementById('SkillResult'));
    }
    else if (event.target.value === "js") {
      const SkillsResultat = <Card style={{ width: 'auto' }} className="text-center">
                              <Card.Header as="h3">Pour JavaScript :</Card.Header>
                              <ListGroup variant="flush">
                                <ListGroup.Item>
                                  <Image src={JSLog} roundedCircle/>
                                  <ProgressBar variant="warning" animated now={80} />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  <Image src={JQueryLog} roundedCircle/>
                                  <ProgressBar variant="warning" animated now={70} />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  <Image src={NodeLog} roundedCircle/>
                                  <ProgressBar variant="warning" animated now={65} />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  <Image src={ExpressLog} roundedCircle/>
                                  <ProgressBar variant="warning" animated now={60} />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  <Image src={ReactLog} roundedCircle/>
                                  <ProgressBar variant="warning" animated now={80} />
                                </ListGroup.Item>
                              </ListGroup>
                             </Card>
      ReactDOM.render(SkillsResultat, document.getElementById('SkillResult'));
    }
    else if (event.target.value === "db") {
      const SkillsResultat = <Card style={{ width: 'auto' }} className="text-center">
                              <Card.Header as="h3">Pour la gestion des Databases :</Card.Header>
                              <ListGroup variant="flush">
                                <ListGroup.Item>
                                  <Image src={SqlLog} roundedCircle/>
                                  <ProgressBar variant="danger" animated now={90} />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  <Image src={MongoLog} roundedCircle/>
                                  <ProgressBar variant="danger" animated now={70} />
                                </ListGroup.Item>
                              </ListGroup>
                             </Card>
      ReactDOM.render(SkillsResultat, document.getElementById('SkillResult'));
    }
    else if (event.target.value === "html") {
      const SkillsResultat = <Card style={{ width: 'auto' }} className="text-center">
                              <Card.Header as="h3">Intégration Web :</Card.Header>
                              <ListGroup variant="flush">
                                <ListGroup.Item>
                                  <Image src={HtmlCssLog} variant="info" roundedCircle/>
                                  <ProgressBar animated now={90} />
                                </ListGroup.Item>
                              </ListGroup>
                             </Card>
      ReactDOM.render(SkillsResultat, document.getElementById('SkillResult'));
    }
    else if (event.target.value === "other") {
      const SkillsResultat = <Card style={{ width: 'auto' }} className="text-center">
                              <Card.Header as="h3">Autres technologies/logiciels :</Card.Header>
                              <ListGroup variant="flush">
                                <ListGroup.Item>
                                  <Image src={GitLog} variant="succes" roundedCircle/>
                                  <ProgressBar animated now={80} />
                                </ListGroup.Item>
                              </ListGroup>
                             </Card>
      ReactDOM.render(SkillsResultat, document.getElementById('SkillResult'));
    }
  }


  return (
    <section className="skills">
      <Container fluid className="SkillfirstContainer">
        <Row>
          <Col xs={4} md={2}></Col>
          <Col className="S-title">MES COMPETENCES</Col>
          <Col xs={4} md={2}></Col>
        </Row>
        <Row>
          <Col xs={6} md={4} className="FirstCol">
            <Form className="SkillForm">
              <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Control value={selectskill} onChange={e => { handleChangeSelectSkill(e); handleChangeMySkill(e) }} as="select" custom>
                  <option value="choose">Que voulez-vous savoir ?</option>
                  <option value="html">Integration Web</option>
                  <option value="php">PHP</option>
                  <option value="js">JavaScript</option>
                  <option value="db">DataBase</option>
                  <option value="other">Autres</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </Col>
          <Col xs={3} md={1}></Col>
          <Col xs={7} md={3} className="LastCol">
            <div id="SkillResult"></div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Skills;