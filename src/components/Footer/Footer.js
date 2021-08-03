import React from 'react';
import { Row } from 'react-bootstrap';
import {
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaLinkedinIn,
} from 'react-icons/fa';
import './Footer.scss';
import logo from '../../assets/logos/ADAGGIO-footer.png';
export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-first-div">
          <Row>
            <div className="mr-3">
              <Row>
                <img
                  src={logo}
                  height="60"
                  alt="Nav-logo"
                  className="mr-2 ml-4 mt-4"
                />
              </Row>
              <p className="copyright">
                Copyright © ADAGGIO 2019 - TODOS LOS DERECHOS RESERVADOS
              </p>
            </div>

            <Row className="mt-4 social-media">
              <div className="social-media-container">
                <a
                  href="https://www.facebook.com/ADAGGIOne/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookF size={30} />
                </a>
              </div>

              <div className="social-media-container">
                <a
                  href="https://www.youtube.com/channel/UC91hqe16t0-lVEZ7d-zsE3A?view_as=subscriber"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaYoutube size={30} />
                </a>
              </div>
              <div className="social-media-container">
                <a
                  href="https://api.whatsapp.com/send?phone=3053652223&text=Adaggio"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp size={30} />
                </a>
              </div>
              <div className="social-media-container">
                <a
                  href="https://www.linkedin.com/company/adaggio-unite/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn size={30} />
                </a>
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
