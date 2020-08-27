// MODULES //
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import ReactAudioPlayer from 'react-audio-player';

// STYLE //
import "./Header.css";
import Drm_Sqnc from "../../assets/mp3/drm_sqnc.mp3";
  



const Header = () => {

  const ToPresentation = () => window.scrollTo(0,0);
  const ToSkills = () => window.scrollTo(0,420);
  const ToProjects = () =>  window.scrollTo(0,556);
  const ToCV = () => window.scrollTo(0,4000);
return (
    <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
    <Navbar.Brand href="#home">Corentin Laborie, Dev Web Junior</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link className="white-text" onClick={ToPresentation}>Présentation</Nav.Link>
      <Nav.Link className="white-text" onClick={ToSkills}>Mes Compétences</Nav.Link>
      <Nav.Link className="white-text" onClick={ToProjects}>Quelques Projets</Nav.Link>
      <Nav.Link className="white-text" onClick={ToCV}>CV/Me Contacter</Nav.Link>
    </Nav>
    <h6 className="idst">Music : IDST - Drm_sqnc</h6>
    <ReactAudioPlayer
    src={Drm_Sqnc}
    autoPlay={true}
    controls
    />
  </Navbar>
)};
export default Header;