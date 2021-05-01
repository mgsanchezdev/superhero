/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import './Header.css';

const Header = () => (
  /*   const history = useHistory();

  const handlePageHome = () => {
    history.push('/home');
  };
  const handlePage = () => {
    history.push('/search');
  }; */

  /*  <div className="container">
      <Button onClick={handlePageHome} variant="success">
        Home
      </Button>
      <Button onClick={handlePage} variant="success">
        Buscar heroe
      </Button>
    </div> */
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand>Hero</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav>
        <Link className = "link" to="/home"> Home</Link>
        <Link className = "link" to="/search">Buscar Heroes</Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
export default Header;
