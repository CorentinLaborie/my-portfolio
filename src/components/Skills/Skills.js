// MODULES //
import React from 'react';
import { Card, Carousel, Image, Col, Row, Container } from 'react-bootstrap';
import GaugeChart from 'react-gauge-chart'


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




const Skills = ({ element }) => {
  
  const MyHR = ({ color }) => (
    <hr
      style={{
        borderColor: color,
      }}
    />
  );
    return (
        <section className="skills">
          <Container className="Skill-FirstCont">
            <Row className="Col-Test"><Col><p className="S-title">MES COMPETENCES</p></Col></Row>
                <Row> {/*PHP*/}  
                  <Col>
                    <Card bg="dark" 
                    text="white"
                    style={{ width: '18rem', color:"white" }}>
                      <Card.Img variant="top" src={PhPLog} />
                      <Card.Body>
                      <GaugeChart id="gauge-chart1" 
                        nrOfLevels={20} 
                        colors={["#FFFFFF", "#001fff"]} 
                        arcWidth={0.3} 
                        percent={0.90} 
                      />
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card bg="dark" 
                    text="white"
                    style={{ width: '18rem', color:"white" }}>
                      <Card.Img variant="top" src={LaravelLog} />
                      <Card.Body>
                        <div>
                        <GaugeChart id="gauge-chart2" 
                          nrOfLevels={20} 
                          colors={["#FFFFFF", "#FF0000"]} 
                          arcWidth={0.3} 
                          percent={0.70} 
                        />
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card bg="dark" 
                    text="white"
                    style={{ width: '18rem', color:"white" }}>
                      <Card.Img variant="top" src={SymfLog} />
                      <Card.Body>
                        <div>
                          <GaugeChart id="gauge-chart3" 
                          nrOfLevels={20} 
                          colors={["#FFFFFF", "#000000"]} 
                          arcWidth={0.3} 
                          percent={0.70} 
                        />
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>  
                <Row style={{marginTop:"2%"}}> {/*JS*/}
                  <Col>
                    <Card bg="dark" 
                    text="white"
                    style={{ width: '18rem', color:"white" }}>
                      <Card.Img variant="top" src={JSLog} />
                      <Card.Body>
                        <div>
                          <GaugeChart id="gauge-chart4" 
                          nrOfLevels={20} 
                          colors={["#FFFFFF", "#f0ff00"]} 
                          arcWidth={0.3} 
                          percent={0.90} 
                        />
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card bg="dark" 
                    text="white"
                    style={{ width: '18rem', color:"white" }}>
                      <Card.Img variant="top" src={HtmlCssLog} />
                      <Card.Body>
                        <div>
                          <GaugeChart id="gauge-chart5" 
                          nrOfLevels={20} 
                          colors={["#FFFFFF", "#aa00e5"]} 
                          arcWidth={0.3} 
                          percent={1} 
                        />
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card bg="dark" 
                    text="white"
                    style={{ width: '18rem', color:"white" }}>
                      <Card.Img variant="top" src={ReactLog} />
                      <Card.Body>
                        <div>
                          <GaugeChart id="gauge-chart6" 
                          nrOfLevels={20} 
                          colors={["#FFFFFF", "#06fbff"]} 
                          arcWidth={0.3} 
                          percent={0.80} 
                        />
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <Row style={{marginTop:"2%"}}> {/*DB*/}
                  <Col>
                  <Card bg="dark" 
                    text="white"
                    style={{ width: '18rem', color:"white" }}>
                      <Card.Img variant="top" src={SqlLog} />
                      <Card.Body>
                        <div>
                          <GaugeChart id="gauge-chart7" 
                          nrOfLevels={20} 
                          colors={["#FFFFFF", "#dda30a"]} 
                          arcWidth={0.3} 
                          percent={0.95} 
                        />
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card bg="dark" 
                    text="white"
                    style={{ width: '18rem', color:"white" }}>
                      <Card.Img variant="top" src={MongoLog} />
                      <Card.Body>
                        <div>
                          <GaugeChart id="gauge-chart8" 
                          nrOfLevels={20} 
                          colors={["#FFFFFF", "#02a416"]} 
                          arcWidth={0.3} 
                          percent={0.70} 
                        />
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card bg="dark" 
                    text="white"
                    style={{ width: '18rem', color:"white" }}>
                      <Card.Img variant="top" src={GitLog} />
                      <Card.Body>
                        <div>
                          <GaugeChart id="gauge-chart9" 
                          nrOfLevels={20} 
                          colors={["#FFFFFF", "#cd0404"]} 
                          arcWidth={0.3} 
                          percent={0.80} 
                        />
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
          </Container>
      <MyHR color="black" />
        </section>
    )
  }
  
  export default Skills;