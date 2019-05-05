import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav    from 'react-bootstrap/Nav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding }      from '@fortawesome/free-solid-svg-icons'

const App = () => {
  return (
    <div className="App">
      <Navbar variant="dark" style={navBar}>
        <Navbar.Brand>
          <FontAwesomeIcon icon={faBuilding} />
          {' Condo Manager '}
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#visits">Visitas</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

const navBar = {
  backgroundColor: '#66F',
};

export default App;
