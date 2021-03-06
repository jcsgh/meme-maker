import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  import {About} from '../About/About'
  import { Favorites} from '../Favorites/Favorites'

const NavBar = () => {
    return(
        <div className="App">
    <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="black" variant="dark">
  <ReactBootStrap.Navbar.Brand href="/">Meme Maker</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto"> 
    <Link to="/">
    <ReactBootStrap.Nav.Link href="/">Home</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/About">
    <ReactBootStrap.Nav.Link href="/About">About</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/Favorites">
    <ReactBootStrap.Nav.Link eventKey={2} href="/Favorites">
        Favorites
      </ReactBootStrap.Nav.Link>
    </Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
        </div>
    )
}

export default NavBar;