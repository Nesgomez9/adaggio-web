import React from 'react';
import './Social-media.scss';
import { Row } from 'react-bootstrap';
import logo from '../../assets/icons/logo.png';
export const SocialMedia = () => {
  return (
    <>
      <div className="social-media">
        <h5>Redes sociales y academicas</h5>
        <div className="info">
          <Row>
            <div className="mr-4 ml-3 mb-4">
              <img src={logo} height="40" alt="Nav-logo" className="mr-2 " />
              <span>Adaggion unite</span>
            </div>
            <div className="mr-4 ml-3 mb-4">
              <img src={logo} height="40" alt="Nav-logo" className="mr-2 " />
              <span>Adaggion unite</span>
            </div>
            <div className="mr-4 ml-3 mb-4">
              <img src={logo} height="40" alt="Nav-logo" className="mr-2 " />
              <span>Adaggion unite</span>
            </div>
            <div className="mr-4 ml-3 mb-4">
              <img src={logo} height="40" alt="Nav-logo" className="mr-2 " />
              <span>Adaggion unite</span>
            </div>
          </Row>
        </div>
      </div>
    </>
  );
};
