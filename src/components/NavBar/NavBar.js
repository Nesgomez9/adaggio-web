import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CgMenuGridR } from 'react-icons/cg';
import { BiSearchAlt2 } from 'react-icons/bi';
import logo from '../../assets/icons/logo.png';
import './NavBar.scss';

export const NavBar = () => {
  const [activeSearch, setActiveSearch] = useState(false);

  const changeSearch = () => {
    setActiveSearch(!activeSearch);
  };
  return (
    <>
      <Navbar className="NavBar">
        <Navbar.Brand className="ml-4">
          <div className="row">
            <img src={logo} height="60" alt="Nav-logo" />
            <div className="mt-1">
              <span className="logo-big-text">ADAGGIO</span>
            </div>
            <div className="mt-2 ml-2">
              <span className="logo-small-text">unite</span>
            </div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Link to="/load" style={{ textDecoration: 'none' }}>
            <div className="load-btn">Cargar Datos</div>
          </Link>
          {activeSearch ? (
            <div className="search-container slide-left">
              <BiSearchAlt2 size={35} className="white ml-2 cursor-pointer" />
              <input placeholder="Buscar" className="search-input"></input>
            </div>
          ) : (
            <BiSearchAlt2
              size={35}
              className="white mr-3 cursor-pointer"
              onClick={changeSearch}
            />
          )}

          <Nav>
            <div className="nav-profile-img"> </div>
            <CgMenuGridR className="logo-small-text mr-3" size={50} />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
