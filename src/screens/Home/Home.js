import React from 'react';
import './Home.scss';
import { Container, Row, Button, Col } from 'react-bootstrap';
import { BiPlay } from 'react-icons/bi';
import { FiLink } from 'react-icons/fi';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';
import { ImQuotesLeft } from 'react-icons/im';
export const Home = () => {
  return (
    <>
      <Container fluid className="first-container">
        <div className="row first-container-div">
          <div className="col-4 offset-1 first-container-text">
            <span className="color-white first-word">ADAGGIO </span>
            <span className="color-red second-word"> unite</span>
            <p className="color-white info-first-container">
              Descubre las capacidades de I+D+i de los <br />
              mejores EXPERTOS en Latinoamérica
            </p>
            <Button className="first-button-info mt-3">Quiero ser parte</Button>
            <Button className="second-button-info">
              <FiLink className="mr-2" />
              Networking
            </Button>
          </div>
          <div className="col-3 offset-3 first-container-text">
            <div className="play-button">
              <BiPlay size={120} className="color-white" />
            </div>
            <p className="see-video">Ver video</p>
          </div>
        </div>
      </Container>
      <Container fluid>
        <div className="row">
          <div className="col-3 offset-1">
            <p className="info-second-container">
              Hemos logrado la confianza de Redes, <br /> Universidades y
              Centros de I+D+i
            </p>
          </div>
        </div>
      </Container>
      <Container fluid className="last-container">
        <Row className="center">
          <div className="experts-carrousel">
            <div className="experts-carrousel-title">
              <h4 className="ml-3 mt-3 bold">Expertos mejor calificados</h4>
              <h5 className="mr-3 mt-3 color-red bold">Ver más</h5>
            </div>
            <div className="row expert-carrousel-cards">
              <RiArrowLeftSLine size={100} />
              <div className="expert-card">
                <div>
                  <div className="img-expert-card"></div>
                </div>
                <div>
                  <h6>Rodriguez Garcia, Alvaro Martin </h6>
                  <span>Grupo de investigación: ASÉPTICOS</span>
                </div>
              </div>
              <div className="expert-card">
                <div>
                  <div className="img-expert-card"></div>
                </div>
                <div>
                  <h6>Rodriguez Garcia, Alvaro Martin </h6>
                  <span>Grupo de investigación: ASÉPTICOS</span>
                </div>
              </div>
              <div className="expert-card">
                <div>
                  <div className="img-expert-card"></div>
                </div>
                <div>
                  <h6>Rodriguez Garcia, Alvaro Martin </h6>
                  <span>Grupo de investigación: ASÉPTICOS</span>
                </div>
              </div>
              <div className="expert-card">
                <div>
                  <div className="img-expert-card"></div>
                </div>
                <div>
                  <h6>Rodriguez Garcia, Alvaro Martin </h6>
                  <span>Grupo de investigación: ASÉPTICOS</span>
                </div>
              </div>
              <div className="expert-card">
                <div>
                  <div className="img-expert-card"></div>
                </div>
                <div>
                  <h6>Rodriguez Garcia, Alvaro Martin </h6>
                  <span>Grupo de investigación: ASÉPTICOS</span>
                </div>
              </div>
              <RiArrowRightSLine size={100} />
            </div>
          </div>
        </Row>

        <Row className="center">
          <div className="universities">
            <div className="experts-carrousel-title">
              <h4 className="ml-3 mt-3 bold">
                Universidades mejor calificadas
              </h4>
              <h5 className="mr-3 mt-3 color-red bold">Ver más</h5>
            </div>
            <div className="universities-grid">
              <div className="university">
                <div className="university-icon"></div>
                Pontificia Universidad Javeriana
                <br /> PUJ
              </div>
              <div className="university">
                <div className="university-icon"></div>
                Pontificia Universidad Javeriana
                <br /> PUJ
              </div>
              <div className="university">
                <div className="university-icon"></div>
                Pontificia Universidad Javeriana
                <br /> PUJ
              </div>
              <div className="university">
                <div className="university-icon"></div>
                Pontificia Universidad Javeriana
                <br /> PUJ
              </div>
              <div className="university">
                <div className="university-icon"></div>
                Pontificia Universidad Javeriana
                <br /> PUJ
              </div>
              <div className="university">
                <div className="university-icon"></div>
                Pontificia Universidad Javeriana
                <br /> PUJ
              </div>
              <div className="university">
                <div className="university-icon"></div>
                Pontificia Universidad Javeriana
                <br /> PUJ
              </div>
              <div className="university">
                <div className="university-icon"></div>
                Pontificia Universidad Javeriana
                <br /> PUJ
              </div>
              <div className="university">
                <div className="university-icon"></div>
                Pontificia Universidad Javeriana
                <br /> PUJ
              </div>
              <div className="university">
                <div className="university-icon"></div>
                Pontificia Universidad Javeriana
                <br /> PUJ
              </div>
              <div className="university">
                <div className="university-icon"></div>
                Pontificia Universidad Javeriana
                <br /> PUJ
              </div>
              <div className="university">
                <div className="university-icon"></div>
                Pontificia Universidad Javeriana
                <br /> PUJ
              </div>
            </div>
          </div>
        </Row>
        <Row className="center">
          <div className="info-quantity ">
            <p className="mr-3 mt-3 color-red bold quantity-see-more">
              Ver más
            </p>
            <div className="">
              <p className="text-center">
                <p className="ml-3 quantity-title">
                  Cifras de crecimiento de datos
                </p>
                <p className="mb-4">
                  El crecimiento en datos conectados permite el descubrimiento
                  de nuevos expertos y sus capacidades de investigación en
                  innovación
                  <hr className="quantity-line" />
                </p>
              </p>
            </div>
            <Row className="">
              <div className="col-1 mr-3 ml-5  bg-dark"></div>
              <div className="col-10">
                <Row className="mt-5">
                  <div className="col">
                    <p className="number">
                      <span className="color-red bold">22.000</span>
                      <br />
                      <span className="bold">Expertos</span>
                    </p>
                  </div>
                  <div className="col">
                    <p className="number">
                      <span className="color-red bold">46.080</span>
                      <br />
                      <span className="bold">Artículos</span>
                    </p>
                  </div>
                  <div className="col">
                    <p className="number">
                      <span className="color-red bold">19.000</span>
                      <br />
                      <span className="bold">Libros</span>
                    </p>
                  </div>
                  <div className="col">
                    <p className="number">
                      <span className="color-red bold">3.800</span>
                      <br />
                      <span className="bold">Capitulos</span>
                    </p>
                  </div>
                  <div className="col">
                    <p className="number">
                      <span className="color-red bold">8.536</span>
                      <br />
                      <span className="bold">Conferencias</span>
                    </p>
                  </div>
                  <div className="col">
                    <p className="number">
                      <span className="color-red bold">2.100</span>
                      <br />
                      <span className="bold">Patentes</span>
                    </p>
                  </div>
                  <div className="col">
                    <p className="number">
                      <span className="color-red bold">1.008</span>
                      <br />
                      <span className="bold">Software</span>
                    </p>
                  </div>
                </Row>
              </div>
            </Row>
          </div>
        </Row>
        <Row className="center">
          <div className="news mb-5">
            <Row className="">
              <div className="first-div-news col-6">
                <Row>
                  <div className="col-5 image"></div>
                  <div className="col-6">
                    <span className="color-red tiny-text">
                      PUBLICACIONES DESTACADAS
                    </span>
                    <h4 className="mb-3 bold">GRUPOS DE INVESTIGACIÓN</h4>
                    <p className="info-publication">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <Button className="first-button-info">
                      Quiero ser parte
                    </Button>
                  </div>
                </Row>
              </div>
              <div className="second-div-news col-6">
                <Row>
                  <div className="col-5 image"></div>
                  <div className="col-6">
                    <span className="color-red tiny-text">
                      PUBLICACIONES DESTACADAS
                    </span>
                    <h4 className="mb-3 bold">CONVOCATORÍAS Y RETOS</h4>
                    <p className="info-publication">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <Button className="first-button-info">
                      Quiero ser parte
                    </Button>
                  </div>
                </Row>
              </div>
              <div className="first-div-news col-6">
                <Row>
                  <div className="col-5 image"></div>
                  <div className="col-6">
                    <span className="color-red tiny-text">
                      PUBLICACIONES ABIERTAS
                    </span>
                    <h4 className="mb-3 bold">SEMILLEROS DE INVESTIGACIÓN</h4>
                    <p className="info-publication">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <Button className="first-button-info">
                      Quiero ser parte
                    </Button>
                  </div>
                </Row>
              </div>
              <div className="second-div-news col-6">
                <Row>
                  <div className="col-5 image"></div>
                  <div className="col-6">
                    <span className="color-red tiny-text">
                      PUBLICACIONES ABIERTAS
                    </span>
                    <h4 className="mb-3 bold">
                      RECURSOS DE APOYO PARA LA INVESTIGACIÓN
                    </h4>
                    <p className="info-publication">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <Button className="first-button-info">
                      Quiero ser parte
                    </Button>
                  </div>
                </Row>
              </div>
            </Row>
          </div>
        </Row>
        <Row className="center">
          <div className="fifth-div">
            <Row>
              <div className="col-6">
                <Row>
                  <div className="experts-carrousel-title">
                    <h4 className="ml-5 mt-3 bold color-white">
                      Expertos mejor calificados
                    </h4>
                  </div>
                </Row>
                <Row>
                  <div className="col-6">
                    <Row>
                      <div className="col-3">
                        <ImQuotesLeft
                          className="color-white ml-5 mt-4"
                          size={40}
                        />
                      </div>
                      <div className="col-9">
                        <p className="color-white expert-text mt-4">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                      </div>
                    </Row>
                    <Row className="mt-4 ml-4">
                      <div className="col-3">
                        <div className="expert-image"></div>
                      </div>
                      <div className="col-9">
                        <h4 className="color-white ml-4">Ana Garcia</h4>
                        <h6 className="color-white ml-4">Lider</h6>
                        <p className="color-white expert-text">
                          Grupo de investigación: <br />
                          <span className="italic">Procesos psicosociales</span>
                        </p>
                      </div>
                    </Row>
                  </div>
                  <div className=" offset-2 col-4 button-div">
                    <Button className="first-button-info margin-top">
                      Quiero ser parte
                    </Button>
                  </div>
                </Row>
              </div>

              <div className="col-6">
                <div className="col-6">
                  <p className="color-white mt-4 big-text">
                    <span className="bold ">Mapeamos y combinamos datos </span>
                    de las principales fuentes académicas y científicas
                  </p>
                </div>
              </div>
            </Row>
          </div>
        </Row>
      </Container>
    </>
  );
};
