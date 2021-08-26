import React, { useState, useEffect } from 'react';
import {
  AboutExpert,
  AffiliationsExpert,
  Footer,
  MetricsExpert,
  NavBar,
  ProductsExpert,
} from '../../components';
import { useParams } from 'react-router-dom';
import { Container, Row, Button, Form } from 'react-bootstrap';
import { BiLike, BiComment, BiShareAlt, BiPlus } from 'react-icons/bi';
import { FiLink } from 'react-icons/fi';
import { HiQrcode } from 'react-icons/hi';
import BlackMarkIcon from '../../assets/icons/Huella-1.png';
import { ExpertRepository } from '../../repositories';
import './Expert.scss';

export const Expert = (data) => {
  console.log(data);
  let { expertId } = useParams();
  const id = expertId ? expertId : data?.location.state.data;
  const [loading, setLoading] = useState(true);
  const [menus, setMenus] = useState([true, false, false, false, false, false]);
  const [expertData, setExpertData] = useState({});
  const [socialNetworks, setSocialNetworks] = useState({});
  const [awards, setAwards] = useState({});
  const [educations, setEducations] = useState({});
  const [lines, setLines] = useState({});
  const [areas, setAreas] = useState({});

  const fetchExpert = async () => {
    const response = await ExpertRepository.getExpertById(id);
    setExpertData(response);
  };
  const fetchExpertSocialNetworks = async () => {
    const response = await ExpertRepository.getExpertSocialNetworksById(id);
    setSocialNetworks(response);
  };
  const fetchExpertAwards = async () => {
    const response = await ExpertRepository.getExpertAwardsById(id);
    setAwards(response);
  };
  const fetchExpertEducations = async () => {
    const response = await ExpertRepository.getExpertEducationsById(id);
    setEducations(response);
  };
  const fetchExpertArea = async () => {
    const response = await ExpertRepository.getExpertSubjectsById(id, 1);
    setAreas(response);
  };
  const fetchExpertLines = async () => {
    const response = await ExpertRepository.getExpertSubjectsById(id, 2);
    setLines(response);
  };

  const changeMenus = async (menu) => {
    let tempMenus = [false, false, false, false, false, false];
    tempMenus[menu] = true;
    await setMenus(tempMenus);
  };
  const fetch = async () => {
    await fetchExpert();
    await fetchExpertSocialNetworks();
    await fetchExpertAwards();
    await fetchExpertEducations();
    await fetchExpertArea();
    await fetchExpertLines();
    setLoading(false);
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <>
      {loading ? (
        'cargando'
      ) : (
        <>
          <NavBar />
          <div className="profile">
            <div className="biography">
              <div className="profile-imgage-container">
                {expertData.image_url ? (
                  <img
                    alt="Expert Profile"
                    src={expertData.image_url}
                    className="profile-picture"
                  />
                ) : (
                  <img
                    alt="Expert Profile not defined"
                    src={BlackMarkIcon}
                    className="profile-picture"
                  />
                )}
              </div>
              <div>
                <p className="profile-name">
                  <span className="name">
                    {expertData.last_name}, {expertData.name}
                  </span>
                  <br />
                  <br />
                  <span>{expertData.resume ? expertData.resume : null}</span>
                  <br />
                  <br />
                  <span className="color-red bold">
                    INVESTIGADOR ASOCIADO, MINCIENCIAS
                  </span>
                </p>
              </div>
            </div>

            <div className="social-interactions">
              <div>
                {expertData.likes} <BiLike size={40} className="color-white" />
              </div>
              <div>
                0 <BiComment size={40} className="color-white" />
              </div>
              <div>
                <BiShareAlt size={40} className="color-white" />
              </div>
              <div className="column-follow">
                Seguir <BiPlus size={40} className="color-white" />
              </div>
            </div>
          </div>

          <div>
            <div className="sub-menu">
              <div>
                <span
                  className={
                    menus[0] ? 'selected cursor-pointer' : 'cursor-pointer'
                  }
                  onClick={() => changeMenus(0)}
                >
                  Acerca de
                </span>
              </div>
              <div>
                <span
                  className={
                    menus[1] ? 'selected cursor-pointer' : 'cursor-pointer'
                  }
                  onClick={() => changeMenus(1)}
                >
                  Metricas
                </span>
              </div>
              <div>
                <span
                  className={
                    menus[2] ? 'selected cursor-pointer' : 'cursor-pointer'
                  }
                  onClick={() => changeMenus(2)}
                >
                  Afiliaciones
                </span>
              </div>
              <div>
                <span
                  className={
                    menus[3] ? 'selected cursor-pointer' : 'cursor-pointer'
                  }
                  onClick={() => changeMenus(3)}
                >
                  Productos de I+d+i
                </span>
              </div>
              <div>
                <span
                  className={
                    menus[4] ? 'selected cursor-pointer' : 'cursor-pointer'
                  }
                  onClick={() => changeMenus(4)}
                >
                  Investigaciones y retos
                </span>
              </div>
              <div>
                <span
                  className={menus[5] ? 'selected cursor-pointer' : ''}
                  onClick={() => changeMenus(5)}
                >
                  Comunidades
                </span>
              </div>

              <div className="share-links">
                <HiQrcode size={25} /> <FiLink size={25} />
              </div>
            </div>
          </div>
          {menus[0] ? (
            <AboutExpert
              expertData={expertData}
              socialNetworks={socialNetworks ? socialNetworks : null}
              areas={areas}
              lines={lines}
              educations={educations}
              awards={awards}
            />
          ) : null}
          {menus[1] ? <MetricsExpert /> : null}
          {menus[2] ? (
            <AffiliationsExpert
              expertData={expertData}
              socialNetworks={socialNetworks}
              educations={educations}
            />
          ) : null}
          {menus[3] ? <ProductsExpert expertData={expertData} /> : null}
          {menus[4] ? <ProductsExpert expertData={expertData} /> : null}
          {menus[5] ? (
            <AboutExpert
              expertData={expertData}
              socialNetworks={socialNetworks}
              areas={areas}
              lines={lines}
              educations={educations}
              awards={awards}
            />
          ) : null}
          <Footer />
        </>
      )}
    </>
  );
};
