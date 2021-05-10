import React from 'react';
import { Row } from 'react-bootstrap';
import {
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaLinkedinIn,
} from 'react-icons/fa';
import './Footer.scss';
import logo from '../../assets/icons/logo.png';
import logoRenata from '../../assets/logos/renata-logo.png';
export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-first-div">
          <Row>
            <div className="mr-3">
              <p className="color-red medium-text mb-2">Protegido por </p>
              <Row>
                <img
                  src={logo}
                  height="40"
                  alt="Nav-logo"
                  className="mr-2 ml-4"
                />
                <div className="mt-1">
                  <span className="big-text">ADAGGIO</span>
                </div>
              </Row>
            </div>
            <div className="ml-5">
              <p className="color-red medium-text mb-2">En alianza con </p>
              <Row>
                <img
                  src={logoRenata}
                  height="40"
                  alt="Nav-logo"
                  className="mr-2 ml-4"
                />
              </Row>
            </div>

            <Row className="mt-4 social-media">
              <div className="social-media-container">
                <FaFacebookF size={30} />
              </div>
              <div className="social-media-container">
                <FaYoutube size={30} />
              </div>
              <div className="social-media-container">
                <FaWhatsapp size={30} />
              </div>
              <div className="social-media-container">
                <FaLinkedinIn size={30} />
              </div>
            </Row>
          </Row>
        </div>
        <div className="footer-second-div">
          <Row>
            <div className="col">
              <p className="bold">Empresa</p>
              <span>
                Qué es la ADAGGIO <br />
              </span>
              <span>
                Porqué ADAGGIO <br />
              </span>
              <span>
                Qué instituciones lo apoyan <br />
              </span>
              <span>
                Qué tecnologias integran ADAGGIO <br />
              </span>
            </div>
            <div className="col">
              <p className="bold">Apoyo</p>
              <span>
                Centro de Apoyo
                <br />
              </span>
              <span>
                Contáctenos
                <br />
              </span>
              <span>
                Opiniones <br />
              </span>
              <span>
                Notas de lanzamiento <br />
              </span>
            </div>
            <div className="col">
              <p className="bold">
                Políticas <br />
              </p>
              <span>
                Términos de uso <br />
              </span>
              <span>
                Política de privacidad <br />
              </span>
              <span>
                Descargo de responsabilidad <br />
              </span>
            </div>
            <div className="col">
              <p className="bold">
                Sitios <br />
              </p>
              <span>
                ADAGGIO Corporate <br />
              </span>
              <span>
                RENATA Colombia <br />
              </span>
              <span>
                Patrocinadores ADAGGIO <br />
              </span>
            </div>
          </Row>
        </div>
      </div>
    </>
  );
};
