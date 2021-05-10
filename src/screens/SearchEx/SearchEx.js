import React, { useState } from 'react';
import { Filter } from '../../components/Filter/Filter';
import './SearchEx.scss';
import {
  Container,
  Row,
  Button,
  Pagination,
  Dropdown,
  ButtonGroup,
} from 'react-bootstrap';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { TiArrowUnsorted } from 'react-icons/ti';
import { BiSearchAlt2 } from 'react-icons/bi';
import { Footer, NavBar } from '../../components';

export const SearchEx = () => {
  const [showText, setShowText] = useState('Show 10 Results');

  const [dropShow, setDropShow] = useState(true);

  const filters = [
    {
      name: 'Universidad',
      opts: {
        opt1: ['UNAL', 239],
        opt2: ['Los Andes', 54],
        opt3: ['Javeriana', 132],
      },
    },
    {
      name: 'Clasificación',
      opts: {
        opt1: ['Investigador Senior', 245],
        opt2: ['Investigador Asociado', 245],
        opt3: ['Investigador Emerito', 245],
        opt4: ['Investigador Junior', 245],
      },
    },
  ];

  return (
    <>
      <NavBar />
      <div className="init">
        <div className="init__title">
          <h2>Expertos</h2>
          <span>Ciencia, Tecnología e Innovación</span>
        </div>
        <div className="init__search">
          <BiSearchAlt2 size={40} />
          <input placeholder="Buscar Organizaciones" />
        </div>
      </div>
      <div className="mid">
        <div className="mid__prgrph">
          <p>
            Hemos logrado la confianza de Redes,
            <br />
            Universidades y Centros de I+D+i
          </p>
        </div>
        <div>
          <Button className="mid__btn">Quiero ser parte</Button>
        </div>
      </div>
      <Container fluid>
        <Row className="main">
          <div className="col-2 main__filters">
            <h3>Filtrar Resultados</h3>
            <div className="main__filters-list">
              {filters.map((filter) => (
                <Filter filter={filter} />
              ))}
            </div>
          </div>
          <div className="col-7 main__results">
            <div className="main__results-title">
              <div className="main__results-title-main">
                <div className="main__results-title-main-t">890 Resultados</div>
                <div>
                  Organizaciones <IoIosArrowForward size={10} /> Universidades
                </div>
              </div>
              <div className="main__results-title-c">
                {dropShow ? (
                  <div className="main__results-title-c-btn">
                    <div className="main__results-title-c-btn1">{showText}</div>
                    <div
                      className="main__results-title-c-btn2"
                      onClick={() => setDropShow(!dropShow)}
                    >
                      <TiArrowUnsorted
                        className="main__results-title-c-btn2i"
                        size={13}
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="main__results-title-c-btn">
                      <div className="main__results-title-c-btn1">
                        {showText}
                      </div>
                      <div
                        className="main__results-title-c-btn2"
                        onClick={() => setDropShow(!dropShow)}
                      >
                        <TiArrowUnsorted
                          className="main__results-title-c-btn2i"
                          size={13}
                        />
                      </div>
                    </div>
                    <div className="main__results-title-c-btno">
                      <div
                        className="main__results-title-c-btnos"
                        onClick={() => setShowText('Show 8 Results')}
                      >
                        Show 8 Results
                      </div>
                      <div
                        className="main__results-title-c-btnos"
                        onClick={() => setShowText('Show 10 Results')}
                      >
                        Show 10 Results
                      </div>
                      <div
                        className="main__results-title-c-btnos"
                        onClick={() => setShowText('Show 12 Results')}
                      >
                        Show 12 Results
                      </div>
                    </div>
                  </div>
                )}
                <div className="main__results-title-c-pag">
                  <div className="main__results-title-c-pag-i">
                    <IoIosArrowBack size={14} />
                  </div>
                  <div className="main__results-title-c-pag-b">1</div>
                  <div className="main__results-title-c-pag-b">2</div>
                  <div className="main__results-title-c-pag-b">3</div>
                  <div className="main__results-title-c-pag-b">4</div>
                  <div className="main__results-title-c-pag-b">5</div>
                  <div className="main__results-title-c-pag-i">
                    <IoIosArrowForward size={14} />
                  </div>
                </div>
              </div>
            </div>
            <div className="main__results-experts">
              <div className="main__results-experts-expert">
                <div className="main__results-experts-photo"></div>
                <div className="main__results-experts-dscrptn">
                  <p>
                    Rofriguez Garcia, Alvaro Martin
                    <br />
                    Grupo de Investigacion: ASEPTICOS
                  </p>
                </div>
              </div>
              <div className="main__results-experts-expert">
                <div className="main__results-experts-photo"></div>
                <div className="main__results-experts-dscrptn">
                  <p>
                    FirstL SecondL, FirstN SecondN
                    <br />
                    TypeGroupU, NameGroupU
                  </p>
                </div>
              </div>
              <div className="main__results-experts-expert">
                <div className="main__results-experts-photo"></div>
                <div className="main__results-experts-dscrptn">
                  <p>
                    FirstL SecondL, FirstN SecondN
                    <br />
                    TypeGroupU, NameGroupU
                  </p>
                </div>
              </div>
              <div className="main__results-experts-expert">
                <div className="main__results-experts-photo"></div>
                <div className="main__results-experts-dscrptn">
                  <p>
                    FirstL SecondL, FirstN SecondN
                    <br />
                    TypeGroupU, NameGroupU
                  </p>
                </div>
              </div>
              <div className="main__results-experts-expert">
                <div className="main__results-experts-photo"></div>
                <div className="main__results-experts-dscrptn">
                  <p>
                    FirstL SecondL, FirstN SecondN
                    <br />
                    TypeGroupU, NameGroupU
                  </p>
                </div>
              </div>
              <div className="main__results-experts-expert">
                <div className="main__results-experts-photo"></div>
                <div className="main__results-experts-dscrptn">
                  <p>
                    FirstL SecondL, FirstN SecondN
                    <br />
                    TypeGroupU, NameGroupU
                  </p>
                </div>
              </div>
              <div className="main__results-experts-expert">
                <div className="main__results-experts-photo"></div>
                <div className="main__results-experts-dscrptn">
                  <p>
                    FirstL SecondL, FirstN SecondN
                    <br />
                    TypeGroupU, NameGroupU
                  </p>
                </div>
              </div>
              <div className="main__results-experts-expert">
                <div className="main__results-experts-photo"></div>
                <div className="main__results-experts-dscrptn">
                  <p>
                    FirstL SecondL, FirstN SecondN
                    <br />
                    TypeGroupU, NameGroupU
                  </p>
                </div>
              </div>
              <div className="main__results-experts-expert">
                <div className="main__results-experts-photo"></div>
                <div className="main__results-experts-dscrptn">
                  <p>
                    FirstL SecondL, FirstN SecondN
                    <br />
                    TypeGroupU, NameGroupU
                  </p>
                </div>
              </div>
              <div className="main__results-experts-expert">
                <div className="main__results-experts-photo"></div>
                <div className="main__results-experts-dscrptn">
                  <p>
                    FirstL SecondL, FirstN SecondN
                    <br />
                    TypeGroupU, NameGroupU
                  </p>
                </div>
              </div>
            </div>
            <div className="main__results-end">
              {dropShow ? (
                <div className="main__results-title-c-btn">
                  <div className="main__results-title-c-btn1">{showText}</div>
                  <div
                    className="main__results-title-c-btn2"
                    onClick={() => setDropShow(!dropShow)}
                  >
                    <TiArrowUnsorted
                      className="main__results-title-c-btn2i"
                      size={13}
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <div className="main__results-title-c-btn">
                    <div className="main__results-title-c-btn1">{showText}</div>
                    <div
                      className="main__results-title-c-btn2"
                      onClick={() => setDropShow(!dropShow)}
                    >
                      <TiArrowUnsorted
                        className="main__results-title-c-btn2i"
                        size={13}
                      />
                    </div>
                  </div>
                  <div className="main__results-title-c-btno">
                    <div
                      className="main__results-title-c-btnos"
                      onClick={() => setShowText('Show 8 Results')}
                    >
                      Show 8 Results
                    </div>
                    <div
                      className="main__results-title-c-btnos"
                      onClick={() => setShowText('Show 10 Results')}
                    >
                      Show 10 Results
                    </div>
                    <div
                      className="main__results-title-c-btnos"
                      onClick={() => setShowText('Show 12 Results')}
                    >
                      Show 12 Results
                    </div>
                  </div>
                </div>
              )}
              <div className="main__results-title-c-pag">
                <div className="main__results-title-c-pag-i">
                  <IoIosArrowBack size={14} />
                </div>
                <div className="main__results-title-c-pag-b">1</div>
                <div className="main__results-title-c-pag-b">2</div>
                <div className="main__results-title-c-pag-b">3</div>
                <div className="main__results-title-c-pag-b">4</div>
                <div className="main__results-title-c-pag-b">5</div>
                <div className="main__results-title-c-pag-i">
                  <IoIosArrowForward size={14} />
                </div>
              </div>
            </div>
          </div>
          <div className="main__data">
            <div className="main__data-numbers">
              <h3>Cifras Asociadas</h3>
            </div>
            <div className="main__data-numbers-list">
              <div className="main__data-numbers-numberr">
                <div className="main__data-numbers-red">146.080</div>
                <div className="main__data-numbers-black">Expertos</div>
              </div>
              <div className="main__data-numbers-numberl">
                <div className="main__data-numbers-red">2.016.080</div>
                <div className="main__data-numbers-black">Publicaciones</div>
              </div>
              <div className="main__data-numbers-numberr">
                <div className="main__data-numbers-red">712</div>
                <div className="main__data-numbers-black">Clasificadas</div>
              </div>
              <div className="main__data-numbers-numberl">
                <div className="main__data-numbers-red">854</div>
                <div className="main__data-numbers-black">Patentes</div>
              </div>
              <div className="main__data-numbers-numberr">
                <div className="main__data-numbers-red">1.024</div>
                <div className="main__data-numbers-black">
                  Premios
                  <br />
                  Recibidos
                </div>
              </div>
              <div className="main__data-numbers-numberl">
                <div className="main__data-numbers-red">2.058</div>
                <div className="main__data-numbers-black">
                  Premios
                  <br />
                  Otorgados
                </div>
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
        <div className="featured__first">
          <h2>
            Expertos con mayor cantidad de artículos indexados en las mejores
            revistas del mundo &#62; FUENTE COMBINADA: SJR
          </h2>
          <div className="featured__first-list">
            <div className="featured__first-one">
              <div className="featured__first-one-dscrptn">
                <div className="featured__first-one-photo"></div>
                <div className="featured__first-one-text">
                  <div>NameGroupUniversity</div>
                  <div className="featured__first-one-text-red ">Where</div>
                </div>
              </div>
              <div className="center">
                <div className="featured__first-one-one"></div>
              </div>
              <div className="featured__first-one-dscrptn featured__between">
                <div className="featured__first-one-prg">
                  <div>FirstL SecondL, FN SN</div>
                  <div className="featured__first-one-text-red  ">
                    InvestigationGroup
                  </div>
                </div>
                <div className="featured__first-one-score">##</div>
              </div>
            </div>
            <div className="featured__first-one">
              <div className="featured__first-one-dscrptn">
                <div className="featured__first-one-photo"></div>
                <div className="featured__first-one-text">
                  <div>NameGroupUniversity</div>
                  <div className="featured__first-one-text-red ">Where</div>
                </div>
              </div>
              <div className="center">
                <div className="featured__first-one-one"></div>
              </div>
              <div className="featured__first-one-dscrptn featured__between">
                <div className="featured__first-one-prg">
                  <div>FirstL SecondL, FN SN</div>
                  <div className="featured__first-one-text-red  ">
                    InvestigationGroup
                  </div>
                </div>
                <div className="featured__first-one-score">##</div>
              </div>
            </div>
            <div className="featured__first-one">
              <div className="featured__first-one-dscrptn">
                <div className="featured__first-one-photo"></div>
                <div className="featured__first-one-text">
                  <div>NameGroupUniversity</div>
                  <div className="featured__first-one-text-red ">Where</div>
                </div>
              </div>
              <div className="center">
                <div className="featured__first-one-one"></div>
              </div>
              <div className="featured__first-one-dscrptn featured__between">
                <div className="featured__first-one-prg">
                  <div>FirstL SecondL, FN SN</div>
                  <div className="featured__first-one-text-red  ">
                    InvestigationGroup
                  </div>
                </div>
                <div className="featured__first-one-score">##</div>
              </div>
            </div>
            <div className="featured__first-one">
              <div className="featured__first-one-dscrptn">
                <div className="featured__first-one-photo"></div>
                <div className="featured__first-one-text">
                  <div>NameGroupUniversity</div>
                  <div className="featured__first-one-text-red ">Where</div>
                </div>
              </div>
              <div className="center">
                <div className="featured__first-one-one"></div>
              </div>
              <div className="featured__first-one-dscrptn featured__between">
                <div className="featured__first-one-prg">
                  <div>FirstL SecondL, FN SN</div>
                  <div className="featured__first-one-text-red  ">
                    InvestigationGroup
                  </div>
                </div>
                <div className="featured__first-one-score">##</div>
              </div>
            </div>
          </div>
          <div className="featured__first-container">
            <div className="featured__first-btn">Ver Más</div>
          </div>
        </div>
        <div className="featured__first">
          <h2>
            Expertos con mayor cantidad de artículos indexados en las mejores
            revistas del mundo &#62; FUENTE COMBINADA: SJR
          </h2>
          <div className="featured__first-list">
            <div className="featured__first-one">
              <div className="featured__first-one-dscrptn">
                <div className="featured__first-one-photo"></div>
                <div className="featured__first-one-text">
                  <div>NameGroupUniversity</div>
                  <div className="featured__first-one-text-red ">Where</div>
                </div>
              </div>
              <div className="center">
                <div className="featured__first-one-one"></div>
              </div>
              <div className="featured__first-one-dscrptn featured__between">
                <div className="featured__first-one-prg">
                  <div>
                    FirstL SecondL, FN SN
                    <div className="featured__first-one-text-red ">
                      InvestigationGroup1
                    </div>
                  </div>
                </div>
                <div className="featured__first-one-score">##</div>
              </div>
            </div>
            <div className="featured__first-one">
              <div className="featured__first-one-dscrptn">
                <div className="featured__first-one-photo"></div>
                <div className="featured__first-one-text">
                  <div>NameGroupUniversity</div>
                  <div className="featured__first-one-text-red ">Where</div>
                </div>
              </div>
              <div className="center">
                <div className="featured__first-one-one"></div>
              </div>
              <div className="featured__first-one-dscrptn featured__between">
                <div className="featured__first-one-prg">
                  <div>FirstL SecondL, FN SN</div>
                  <div className="featured__first-one-text-red  ">
                    InvestigationGroup
                  </div>
                </div>
                <div className="featured__first-one-score">##</div>
              </div>
            </div>

            <div className="featured__first-one">
              <div className="featured__first-one-dscrptn">
                <div className="featured__first-one-photo"></div>
                <div className="featured__first-one-text">
                  <div>NameGroupUniversity</div>
                  <div className="featured__first-one-text-red ">Where</div>
                </div>
              </div>
              <div className="center">
                <div className="featured__first-one-one"></div>
              </div>
              <div className="featured__first-one-dscrptn featured__between">
                <div className="featured__first-one-prg">
                  <div>FirstL SecondL, FN SN</div>
                  <div className="featured__first-one-text-red ">
                    InvestigationGroup
                  </div>
                </div>
                <div className="featured__first-one-score">##</div>
              </div>
            </div>
            <div className="featured__first-one">
              <div className="featured__first-one-dscrptn">
                <div className="featured__first-one-photo"></div>
                <div className="featured__first-one-text">
                  <div>NameGroupUniversity</div>
                  <div className="featured__first-one-text-red ">Where</div>
                </div>
              </div>
              <div className="center">
                <div className="featured__first-one-one"></div>
              </div>
              <div className="featured__first-one-dscrptn featured__between">
                <div className="featured__first-one-prg">
                  <div>FirstL SecondL, FN SN</div>
                  <div className="featured__first-one-text-red ">
                    InvestigationGroup
                  </div>
                </div>
                <div className="featured__first-one-score">##</div>
              </div>
            </div>
          </div>
          <div className="featured__first-container">
            <div className="featured__first-btn">Ver Más</div>
          </div>
        </div>
        <div className="featured__blue"></div>
      </div>
      <Footer />
    </>
  );
};
