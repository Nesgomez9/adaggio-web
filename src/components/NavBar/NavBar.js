import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { CgMenuGridR } from 'react-icons/cg';
import { useHistory } from 'react-router-dom';
import { BiSearchAlt2 } from 'react-icons/bi';
import logo from '../../assets/icons/logo.png';
import BlackMarkIcon from '../../assets/icons/Huella-1.png';
import './NavBar.scss';
import { ProfileMenu } from '..';

export const NavBar = () => {
  const [activeSearch, setActiveSearch] = useState(false);
  const [userProfileModal, setActiveUserProfileModal] = useState(false);
  const userLoged = JSON.parse(localStorage.getItem('user'));
  const changeSearch = () => {
    setActiveSearch(!activeSearch);
  };
  const history = useHistory();
  const routeChange = () => {
    history.push('/home');
  };
  return (
    <>
      <Navbar className="NavBar">
        <Navbar.Brand className="ml-4 cursor-pointer" onClick={routeChange}>
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
            {userLoged ? (
              <img
                src={userLoged.image_url ? userLoged.image_url : BlackMarkIcon}
                height="50"
                alt=""
                className="nav-profile-img"
              />
            ) : null}

            {userLoged ? null : <div className="singup-button">UNIRME </div>}
          </Nav>
          <CgMenuGridR
            className="logo-small-text mr-3 cursor-pointer"
            size={50}
            onClick={() => setActiveUserProfileModal(!userProfileModal)}
          />
        </Navbar.Collapse>
        {userProfileModal ? <ProfileMenu user={userLoged} /> : null}
      </Navbar>
    </>
  );
};
