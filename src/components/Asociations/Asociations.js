import React from 'react';
import { Row } from 'react-bootstrap';
import './Asociations.scss';
export const Asociations = () => {
  return (
    <>
      <div className="asociations">
        <h5>Asociaciones y Redes</h5>

        <div className="asociation">
          <div className="logo"></div>
          <div className="contact-info">
            <span className="bold">Asociación Colombiana de ingenieros</span>{' '}
            <br />
            <span className="bold">Afiliado</span> <br />
            <span>2017-2020</span>
          </div>
        </div>
      </div>
    </>
  );
};
