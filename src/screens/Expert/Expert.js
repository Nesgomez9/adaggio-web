import React from 'react';
import {
  Announcement,
  Awards,
  CoAuthors,
  Contact,
  Education,
  Footer,
  NavBar,
  SocialMedia,
} from '../../components';
import { Container, Row, Button, Form } from 'react-bootstrap';
import { BiLike, BiComment, BiShareAlt, BiPlus } from 'react-icons/bi';
import { FiLink } from 'react-icons/fi';
import { HiQrcode } from 'react-icons/hi';
import './Expert.scss';
import { PrincipalInformation } from '../../components/Principal-information/Principal-information';
export const Expert = () => {
  return (
    <>
      <NavBar />
      <div className="profile">
        <div className="profile-picture"></div>
        <p className="profile-name">
          <span className="name">Betancour Pulgarin, Carmen Luisa</span>
          <br />
          <br />
          <span>
            Graduado de biología y química por la universidad de Caldas,
            Medicina y Master en ciencias Biologícas con enfasis en Genenetica
            Humana
          </span>
          <br />
          <br />
          <span className="color-red bold">
            INVESTIGADOR ASOCIADO, MINCIENCIAS
          </span>
        </p>

        <div className="social-interactions">
          <div>
            10K <BiLike size={40} className="color-white" />
          </div>
          <div>
            2 <BiComment size={40} className="color-white" />
          </div>
          <div>
            10 <BiShareAlt size={40} className="color-white" />
          </div>
          <div className="column-follow">
            Seguir <BiPlus size={40} className="color-white" />
          </div>
        </div>
      </div>

      <div>
        <div className="sub-menu">
          <div>Acerca de</div>
          <div>Metricas</div>
          <div>Afiliaciones</div>
          <div>Productos de I+d+i</div>
          <div>Investigaciones y retos</div>
          <div>Comunidades</div>
          <div className="share-links">
            <HiQrcode size={25} /> <FiLink size={25} />
          </div>
        </div>
      </div>
      <Container fluid className="bg-gray">
        <div className="expert-body">
          <Row>
            <div className="col-3">
              <Contact />
              <Announcement />
              <SocialMedia />
            </div>
            <div className="col-6">
              <PrincipalInformation tittle={'Areas de Investigación'} />
              <PrincipalInformation tittle={'Lineas de Investigación'} />
              <Education tittle={'Educación'} />
            </div>
            <div className="col-3">
              <Awards />
              <CoAuthors />
            </div>
          </Row>

          <Footer />
        </div>
      </Container>
    </>
  );
};
