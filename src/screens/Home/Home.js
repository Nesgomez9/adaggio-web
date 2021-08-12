import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Home.scss';
import { Container, Row, Button } from 'react-bootstrap';
import { BiPlay } from 'react-icons/bi';
import { FiLink } from 'react-icons/fi';
import { NavBar } from '../../components';
import { ImQuotesLeft } from 'react-icons/im';
import PublMedLogo from '../../assets/logos/PubMed-logo.png';
import MicrosoftLogo from '../../assets/logos/microsoft-logo.png';
import OrcidLogo from '../../assets/logos/orcid-logo.png';
import MarkIcon from '../../assets/icons/Huella-2.png';
import BlackMarkIcon from '../../assets/icons/Huella-1.png';
import { ExpertRepository, OrganizationRepository } from '../../repositories';
import { Footer } from '../../components/Footer/Footer';
export const Home = () => {
  const userLoged = JSON.parse(localStorage.getItem('user'));
  const history = useHistory();
  const routeChange = (id) => {
    history.push(`organizations/${id}`);
  };
  const [experts, setExperts] = useState({});
  const [organizations, setOrganizations] = useState({});
  const [loading, setLoading] = useState(true);
  const fetchExperts = async () => {
    const data = await ExpertRepository.getFirstExpertsByLikes();
    setExperts(data);
  };
  const fetchOrganizations = async () => {
    const data = await OrganizationRepository.getFirstOrganizationsByLikes();
    setOrganizations(data);
  };
  const fetch = async () => {
    await fetchExperts();
    await fetchOrganizations();
    setLoading(false);
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <>
      {loading ? (
        <div>cargando</div>
      ) : (
        <div>
          <NavBar />
          <Container fluid className="first-container">
            <div className="image-background"></div>
            <div className="row first-container-div">
              <div className="col-4 offset-1 first-container-text ">
                <span className="color-white first-word">ADAGGIO </span>
                <span className="color-red second-word"> unite</span>
                <p className="color-white info-first-container">
                  Descubre las capacidades de I+D+i de los <br />
                  mejores EXPERTOS en Latinoamérica
                </p>
                <Button className="first-button-info mt-3">
                  Quiero ser parte
                </Button>
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
          <Container fluid className="second-container">
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
                  {experts &&
                    experts.map((expert) => (
                      <div className="expert-card" key={expert.id}>
                        <div>
                          {expert.image_url ? (
                            <img
                              alt="Expert Profile"
                              src={expert.image_url}
                              className="img-expert-card"
                            />
                          ) : (
                            <img
                              alt="Expert Profile not defined"
                              src={BlackMarkIcon}
                              className="img-expert-card"
                            />
                          )}
                        </div>
                        <div>
                          <h6>
                            {expert.last_name}, {expert.name}
                          </h6>
                          <span>
                            {expert.organization
                              ? `${expert.organization.name}`
                              : null}
                            <br />
                            {expert.organization &&
                            expert.organization.short_name
                              ? `:${expert.organization.short_name}`
                              : null}
                          </span>
                        </div>
                      </div>
                    ))}
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
                  {organizations?.map((organization) => (
                    <div
                      className="university cursor-pointer"
                      onClick={() => routeChange(organization.org_id)}
                    >
                      <div>
                        {organization.image_url ? (
                          <img
                            alt="Organiaztion Profile"
                            src={organization.image_url}
                            className="university-icon"
                          />
                        ) : (
                          <img
                            alt="Organiaztion Profile not defined"
                            src={BlackMarkIcon}
                            className="university-icon"
                          />
                        )}
                      </div>
                      {organization.name} <br />
                      {organization.short_name ? organization.short_name : null}
                    </div>
                  ))}
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
                      El crecimiento en datos conectados permite el
                      descubrimiento de nuevos expertos y sus capacidades de
                      investigación en innovación
                      <hr className="quantity-line" />
                    </p>
                  </p>
                </div>
                <Row className="">
                  <img
                    src={MarkIcon}
                    height="100"
                    alt=""
                    className=" mr-3 ml-5 mt-5"
                  ></img>
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
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
                        <h4 className="mb-3 bold">
                          SEMILLEROS DE INVESTIGACIÓN
                        </h4>
                        <p className="info-publication">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
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
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
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
                              <span className="italic">
                                Procesos psicosociales
                              </span>
                            </p>
                          </div>
                        </Row>
                      </div>
                      <div className="offset-2 col-4 button-div ">
                        <Button className="first-button-info margin-top">
                          Quiero ser parte
                        </Button>
                      </div>
                    </Row>
                  </div>

                  <div className="col-6">
                    <Row>
                      <div className="col-6 ">
                        <p className="color-white mt-4 big-text">
                          <span className="bold ">
                            Mapeamos y combinamos datos
                          </span>
                          de las principales fuentes académicas y científicas
                        </p>
                        <Row className="mt-5">
                          <div className="col mb-4 mr-5">
                            <img src={PublMedLogo} height="50" alt="" />
                          </div>
                          <div className="col color-white big-text">
                            GrupoLac
                          </div>
                          <div className="col mr-4 mt-2">
                            <img src={MicrosoftLogo} height="40" alt="" />
                          </div>
                          <div className="col color-white big-text mt-2">
                            CvLac
                          </div>
                          <div className="col mr-4 mt-5">
                            <img src={OrcidLogo} height="40" alt="" />
                          </div>
                        </Row>
                      </div>
                      <div className="col-3 offset-1 mt-4">
                        <Button className="second-button-info network-button">
                          <FiLink className="mr-2" />
                          Networking
                        </Button>
                      </div>
                    </Row>
                  </div>
                </Row>
              </div>
            </Row>
            <Row className="center">
              <div className="sixth-div pl-4 mt-5 background-net">
                <h5 className=" mt-5 ml-3">BENEFICIO PARA LAS INSTITUCIONES</h5>

                <Row>
                  <img
                    src={MarkIcon}
                    height="100"
                    alt=""
                    className=" mr-3 ml-3 mt-4"
                  ></img>
                  <p className=" info-profits ml-3">
                    <span className="bold ">Visibilidad y posicionamiento</span>
                    <br />
                    Expertos e instituciones relacionadas a la producción
                    cientifica y acádemica.
                  </p>
                </Row>
                <Row>
                  <img
                    src={MarkIcon}
                    height="100"
                    alt=""
                    className=" mr-3 ml-3 mt-4"
                  ></img>
                  <p className=" info-profits ml-3">
                    <span className="bold ">Trazabilidad</span>
                    <br />
                    Fácil medición y analisis de las actividades de I+D+i, así
                    como el acceso a datos comparativos para toma de decisiones.
                  </p>
                </Row>
                <Row>
                  <img
                    src={MarkIcon}
                    height="100"
                    alt=""
                    className=" mr-3 ml-3 mt-4"
                  ></img>
                  <p className=" info-profits ml-3">
                    <span className="bold ">Unificación y relacionamiento</span>
                    <br />
                    Entre los perfiles de los expertos, las fuentes de
                    finanaciación y los productos resultantes del proceso de
                    I+D+i
                  </p>
                </Row>
                <Row>
                  <img
                    src={MarkIcon}
                    height="100"
                    alt=""
                    className=" mr-3 ml-3 mt-4"
                  ></img>
                  <p className=" info-profits ml-3">
                    <span className="bold ">Conexión</span>
                    <br />
                    De la producción intelectual a los ecosistemas de gestion de
                    la investigacióna nivel mundial. Permitiendo la
                    identificación de sinergias y co-creación de nuevos
                    proyectos.
                  </p>
                </Row>
                <h5 className=" mt-5 ml-3">BENEFICIO PARA LAS INSTITUCIONES</h5>
                <Row>
                  <img
                    src={MarkIcon}
                    height="100"
                    alt=""
                    className=" mr-3 ml-3 mt-4"
                  ></img>
                  <p className=" info-profits ml-3">
                    <span className="bold ">Descubra</span>
                    <br />
                    La diversidad en recursos de investigación que ha creado a
                    lo largo del tiempo en su institución.
                  </p>
                </Row>
                <Row>
                  <img
                    src={MarkIcon}
                    height="100"
                    alt=""
                    className=" mr-3 ml-3 mt-4"
                  ></img>
                  <p className=" info-profits ml-3">
                    <span className="bold ">Conecte</span>
                    <br />
                    Con sus colegas y pares en áreas puntuales de conocimiento e
                    investigación, encuentre sinergias y sume esfuerzos.
                  </p>
                </Row>
                <Row>
                  <img
                    src={MarkIcon}
                    height="100"
                    alt=""
                    className=" mr-3 ml-3 mt-4"
                  ></img>
                  <p className=" info-profits ml-3">
                    <span className="bold ">Comparta</span>
                    <br />
                    Los resultados de investigación y producción intelectual de
                    su institución con el mundo.
                  </p>
                </Row>
                <Row>
                  <img
                    src={MarkIcon}
                    height="100"
                    alt=""
                    className=" mr-3 ml-3 mt-4"
                  ></img>
                  <p className=" info-profits ml-3">
                    <span className="bold ">Proyecte</span>
                    <br />
                    Nuevos productos de conocimiento a partir de la base de
                    resultados de investigación identificado e indexado
                  </p>
                </Row>
              </div>
            </Row>
            <Footer />
          </Container>
        </div>
      )}
    </>
  );
};
