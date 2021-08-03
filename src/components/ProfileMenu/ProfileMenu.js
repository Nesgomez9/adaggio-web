import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import BlackMarkIcon from '../../assets/icons/Huella-1.png';
import './ProfileMenu.scss';

export const ProfileMenu = ({ user }) => {
  const history = useHistory();
  const routeChange = () => {
    history.push('/profile', { data: user.exp_id });
  };
  return (
    <div className="profile-menu">
      <div className="row">
        {user ? (
          <img
            src={user.image_url ? user.image_url : BlackMarkIcon}
            height="200"
            alt=""
            className="profile-img"
          />
        ) : null}
        <div>
          {user ? (
            <div>
              <p className="names">
                {user.last_name}, <br /> {user.name}
              </p>
              <p className="info">
                {user.organization ? user.organization.name : null}
                <br />
                {user.expert_type ? user.expert_type.name : null}
              </p>
            </div>
          ) : null}
        </div>
      </div>
      {user ? (
        <Button className="profile-button" onClick={routeChange}>
          Ver Perfil
        </Button>
      ) : null}

      <div className="options">
        <div className="row mt-1 pl-3 title">CUENTA</div>
        <div className="row mt-1 ml-1">Configuración y privacidad</div>
        <div className="row mt-1 ml-1">Ayuda</div>
        <div className="row mt-1 ml-1">Idioma</div>
        <div className="row mt-1 pl-3 title">GESTIONAR</div>
        <div className="row mt-1 ml-1">Publicaciones y actividad</div>
        <div className="row mt-1 ml-1">Empresa: ADAGGIO</div>
        <div className="row mt-1 ml-1">Cuenta de anuncios de empleo</div>
        <div className="row mt-1 close-session">Cerrar Sesión</div>
      </div>
    </div>
  );
};
