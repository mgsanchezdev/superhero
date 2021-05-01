/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { useAuth } from '../../context/auth';

import './Header.css';

const Header = () => {
  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
  };

  return (
    <Navbar
      className="container-header"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Navbar.Brand>Hero</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Link className="link" to="/home">
            {' '}
            Home
          </Link>
          <Link className="link" to="/search">
            Buscar Heroes
          </Link>
          <Link onClick={handleLogout} className="link" to="/auth">
            Cerrar sesión
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
