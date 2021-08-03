import React, { useState } from 'react';
import { Filter2 } from '../../components/Filter/Filter2';
import './Orgs.scss';
import { Container, Row, Button } from 'react-bootstrap';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { TiArrowUnsorted } from 'react-icons/ti';
import { BiSearchAlt2 } from 'react-icons/bi';
import { RiMedal2Fill } from 'react-icons/ri';
import { Footer, NavBar } from '../../components';

export const Orgs = () => {
  const [showText, setShowText] = useState('Show 10 Results');

  const [dropShow, setDropShow] = useState(true);

  const filters = [
    {
      name: 'Universidad',
      opts: [
        ['UNAL', 239],
        ['Los Andes', 54],
        ['Javeriana', 132],
      ],
    },
    {
      name: 'Clasificación',
      opts: [
        ['Investigador Senior', 245],
        ['Investigador Asociado', 245],
        ['Investigador Emerito', 245],
        ['Investigador Junior', 245],
      ],
    },
  ];

  const sites = [
    { name: 'Pontificia Universidad Javeriana: PUJ', where: 'Colombia' },
    { name: 'Fundación Universitaria del Area Andina', where: 'Colombia' },
    { name: 'Universidad Nacional de Colombia: UNAL', where: 'Colombia' },
    { name: 'Universidad Autónoma de Bucáramanga', where: 'Colombia' },
    { name: 'Universidad Autónoma de Occidente', where: 'Colombia' },
    { name: 'Universidad Industrial de Santander: UIS', where: 'Colombia' },
    { name: 'Universidad de los Andes', where: 'Colombia' },
    { name: 'Politecnico Gran Colombiano', where: 'Colombia' },
    { name: 'Universidad Complutense de Madrid', where: 'España' },
    { name: 'Fundación Universitaria de América', where: 'Colombia' },
    { name: 'Aalborg University', where: 'Denmark' },
    { name: 'Universidad de La Salle', where: 'Colombia' },
  ];

  return (
    <>
      <NavBar />
      <div className="init">
        <div className="init_title">
          <div className="init_title_main">Organizaciones</div>
          Ciencia, Tecnología e Innovación
        </div>
        <div className="init_search">
          <BiSearchAlt2 size={40} />
          <input placeholder="Buscar Organizaciones" />
        </div>
      </div>
      <div className="mid">
        <div className="mid_prgrph">
          Hemos logrado la confianza de Redes,
          <br />
          Universidades y Centros de I+D+i
        </div>
        <Button className="mid__btn">Quiero ser parte</Button>
      </div>
      <Container fluid>
        <Row className="main">
          <div className="col-2 main_filters">
            <div className="main_filters_title">Filtrar Por</div>
            <div className="main_filters_list">
              {filters.map((filter) => (
                <Filter2 filter={filter} />
              ))}
            </div>
          </div>
          <div className="col-6 main_results">
            <div className="main_results_top">
              <div>
                <div className="main_results_top_title">890 Resultados</div>
                Organizaciones <IoIosArrowForward size={10} /> Universidades
              </div>
              <div className="main_results_top_comp">
                {dropShow ? (
                  <div className="main_results_top_comp_btn">
                    <div className="main_results_top_comp_btn_show">
                      {showText}
                    </div>
                    <div
                      className="main_results_top_comp_btn_drop"
                      onClick={() => setDropShow(!dropShow)}
                    >
                      <TiArrowUnsorted size={13} />
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="main_results_top_comp_btn">
                      <div className="main_results_top_comp_btn_show">
                        {showText}
                      </div>
                      <div
                        className="main_results_top_comp_btn_drop"
                        onClick={() => setDropShow(!dropShow)}
                      >
                        <TiArrowUnsorted size={13} />
                      </div>
                    </div>
                    <div className="main_results_top_comp_btn_list">
                      <div
                        className="main_results_top_comp_btn_list_item"
                        onClick={() => setShowText('Show 8 Results')}
                      >
                        Show 8 Results
                      </div>
                      <div
                        className="main_results_top_comp_btn_list_item"
                        onClick={() => setShowText('Show 10 Results')}
                      >
                        Show 10 Results
                      </div>
                      <div
                        className="main_results_top_comp_btn_list_item"
                        onClick={() => setShowText('Show 12 Results')}
                      >
                        Show 12 Results
                      </div>
                    </div>
                  </div>
                )}
                <div className="main_results_top_comp_pag">
                  <div className="main_results_top_comp_pag_arrow">
                    <IoIosArrowBack size={14} />
                  </div>
                  <div className="main_results_top_comp_pag_num">1</div>
                  <div className="main_results_top_comp_pag_num">2</div>
                  <div className="main_results_top_comp_pag_num">3</div>
                  <div className="main_results_top_comp_pag_num">4</div>
                  <div className="main_results_top_comp_pag_num">5</div>
                  <div className="main_results_top_comp_pag_arrow">
                    <IoIosArrowForward size={14} />
                  </div>
                </div>
              </div>
            </div>
            <div className="main_results_experts">
              {sites.map((site) => (
                <div className="main_results_experts_expert">
                  <div className="main_results_experts_photo"></div>
                  <div className="main_results_experts_dscrptn">
                    {site.name}
                    <div className="main_results_experts_dscrptn_red">
                      {site.where}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="main_results_end">
              {dropShow ? (
                <div className="main_results_top_comp_btn">
                  <div className="main_results_top_comp_btn_show">
                    {showText}
                  </div>
                  <div
                    className="main_results_top_comp_btn_drop"
                    onClick={() => setDropShow(!dropShow)}
                  >
                    <TiArrowUnsorted size={13} />
                  </div>
                </div>
              ) : (
                <div>
                  <div className="main_results_top_comp_btn">
                    <div className="main_results_top_comp_btn_show">
                      {showText}
                    </div>
                    <div
                      className="main_results_top_comp_btn_drop"
                      onClick={() => setDropShow(!dropShow)}
                    >
                      <TiArrowUnsorted size={13} />
                    </div>
                  </div>
                  <div className="main_results_top_comp_btn_list">
                    <div
                      className="main_results_top_comp_btn_list_item"
                      onClick={() => setShowText('Show 8 Results')}
                    >
                      Show 8 Results
                    </div>
                    <div
                      className="main_results_top_comp_btn_list_item"
                      onClick={() => setShowText('Show 10 Results')}
                    >
                      Show 10 Results
                    </div>
                    <div
                      className="main_results_top_comp_btn_list_item"
                      onClick={() => setShowText('Show 12 Results')}
                    >
                      Show 12 Results
                    </div>
                  </div>
                </div>
              )}
              <div className="main_results_top_comp_pag">
                <div className="main_results_top_comp_pag_arrow">
                  <IoIosArrowBack size={14} />
                </div>
                <div className="main_results_top_comp_pag_num">1</div>
                <div className="main_results_top_comp_pag_num">2</div>
                <div className="main_results_top_comp_pag_num">3</div>
                <div className="main_results_top_comp_pag_num">4</div>
                <div className="main_results_top_comp_pag_num">5</div>
                <div className="main_results_top_comp_pag_arrow">
                  <IoIosArrowForward size={14} />
                </div>
              </div>
            </div>
          </div>
          <div className="main_data col-3">
            <div className="main_data_title">
              Cifras Asociadas a la Selección
            </div>
            <div className="main_data_list">
              <div className="main_data_numberr">
                <div className="main_data_red">146.080</div>
                Expertos
              </div>
              <div className="main_data_numberl">
                <div className="main_data_red">2.016.080</div>
                Publicaciones
              </div>
              <div className="main_data_numberr">
                <div className="main_data_red">712</div>
                Clasificadas
              </div>
              <div className="main_data_numberl">
                <div className="main_data_red">854</div>
                Patentes
              </div>
              <div className="main_data_numberr">
                <div className="main_data_red">1.024</div>
                Premios
                <br />
                Recibidos
              </div>
              <div className="main_data_numberl">
                <div className="main_data_red">2.058</div>
                Premios
                <br />
                Otorgados
              </div>
            </div>
            <div className="main__data-where">
              <div>Ubicación de la Selección</div>
              <div className="main__data-where-map"></div>
            </div>
            <div className="main__data-filters">
              <div className="main__data-filters-title">
                Principales Áreas de I+d+i
              </div>
              <div className="main__data-filters-list">
                <div className="main__data-filters-mar">Tuberculosis</div>
                <div className="main__data-filters-mar">Infection</div>
                <div className="main__data-filters-mar">Food Safety</div>
              </div>
              <div className="main__data-filters-list1">
                <div className="main__data-filters-mar">Epidemiology</div>
                <div className="main__data-filters-mar">Public Health</div>
              </div>
              <div className="main__data-filters-list2">
                <div className="main__data-filters-mar">Tropical Diseases</div>
                <div className="main__data-filters-btn">Ver Más</div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
      <div className="featured">
        <div className="featured__blue"></div>
        <div className="featured__first">
          <h2>
            Organizaciones con mayor cantidad de artículosindexados en las
            mejores revistas del mundo &#62; FUENTE COMBINADA: SJR + PUBLINDEX
          </h2>
          <div className="featured__first-list">
            <div className="featured__first-one">
              <div className="featured__first-one-dscrptn">
                <div className="featured__first-one-photo"></div>
                <div className="featured__first-one-text">
                  <div>NameGroupUniversity</div>
                  <div className="featured__first-one-text-red">Where</div>
                </div>
              </div>
              <div className="featured__first-one-u"></div>
              <div className="featured__first-one-dscrptn2">
                <div className="featured__first-one-medal">
                  Ver Score <RiMedal2Fill size={40} />
                </div>
              </div>
            </div>
            <div className="featured__first-one">
              <div className="featured__first-one-dscrptn">
                <div className="featured__first-one-photo"></div>
                <div className="featured__first-one-text">
                  <div>NameGroupUniversity</div>
                  <div className="featured__first-one-text-red">Where</div>
                </div>
              </div>
              <div className="featured__first-one-u"></div>
              <div className="featured__first-one-dscrptn2">
                <div className="featured__first-one-medal">
                  Ver Score <RiMedal2Fill size={40} />
                </div>
              </div>
            </div>
            <div className="featured__first-one">
              <div className="featured__first-one-dscrptn">
                <div className="featured__first-one-photo"></div>
                <div className="featured__first-one-text">
                  <div>NameGroupUniversity</div>
                  <div className="featured__first-one-text-red">Where</div>
                </div>
              </div>
              <div className="featured__first-one-u"></div>
              <div className="featured__first-one-dscrptn2">
                <div className="featured__first-one-medal">
                  Ver Score <RiMedal2Fill size={40} />
                </div>
              </div>
            </div>
            <div className="featured__first-one">
              <div className="featured__first-one-dscrptn">
                <div className="featured__first-one-photo"></div>
                <div className="featured__first-one-text">
                  <div>NameGroupUniversity</div>
                  <div className="featured__first-one-text-red">Where</div>
                </div>
              </div>
              <div className="featured__first-one-u"></div>
              <div className="featured__first-one-dscrptn2">
                <div className="featured__first-one-medal">
                  Ver Score <RiMedal2Fill size={40} />
                </div>
              </div>
            </div>
          </div>
          <div className="featured__first-container">
            <div className="featured__first-btn">Ver Más</div>
          </div>
        </div>
        <div className="featured__first">
          <h2>
            Organizaciones con mejor calificadas en Ránkings Internacionales
            &#62; SI + QS STAR + USAPIENS
          </h2>
          <div className="featured__first-list">
            <div className="featured__first-one">
              <div className="featured__first-one-dscrptn">
                <div className="featured__first-one-photo"></div>
                <div className="featured__first-one-text">
                  <div>NameGroupUniversity</div>
                  <div className="featured__first-one-text-red">Where</div>
                </div>
              </div>
              <div className="featured__first-one-u"></div>
              <div className="featured__first-one-dscrptn2">
                <div className="featured__first-one-medal">
                  Ver Score <RiMedal2Fill size={40} />
                </div>
              </div>
            </div>
            <div className="featured__first-one">
              <div className="featured__first-one-dscrptn">
                <div className="featured__first-one-photo"></div>
                <div className="featured__first-one-text">
                  <div>NameGroupUniversity</div>
                  <div className="featured__first-one-text-red">Where</div>
                </div>
              </div>
              <div className="featured__first-one-u"></div>
              <div className="featured__first-one-dscrptn2">
                <div className="featured__first-one-medal">
                  Ver Score <RiMedal2Fill size={40} />
                </div>
              </div>
            </div>
            <div className="featured__first-one">
              <div className="featured__first-one-dscrptn">
                <div className="featured__first-one-photo"></div>
                <div className="featured__first-one-text">
                  <div>NameGroupUniversity</div>
                  <div className="featured__first-one-text-red">Where</div>
                </div>
              </div>
              <div className="featured__first-one-u"></div>
              <div className="featured__first-one-dscrptn2">
                <div className="featured__first-one-medal">
                  Ver Score <RiMedal2Fill size={40} />
                </div>
              </div>
            </div>
            <div className="featured__first-one">
              <div className="featured__first-one-dscrptn">
                <div className="featured__first-one-photo"></div>
                <div className="featured__first-one-text">
                  <div>NameGroupUniversity</div>
                  <div className="featured__first-one-text-red">Where</div>
                </div>
              </div>
              <div className="featured__first-one-u"></div>
              <div className="featured__first-one-dscrptn2">
                <div className="featured__first-one-medal">
                  Ver Score <RiMedal2Fill size={40} />
                </div>
              </div>
            </div>
          </div>
          <div className="featured__first-container">
            <div className="featured__first-btn">Ver Más</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
