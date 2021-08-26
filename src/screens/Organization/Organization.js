import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  AboutOrganization,
  Footer,
  NavBar,
  AffiliationsOrganization,
  ProductsOrganization,
} from '../../components';
import { BiLike, BiComment, BiShareAlt, BiPlus } from 'react-icons/bi';
import { FiLink } from 'react-icons/fi';
import { HiQrcode } from 'react-icons/hi';
import BlackMarkIcon from '../../assets/icons/Huella-1.png';
import { OrganizationRepository } from '../../repositories';
import './Organization.scss';

export const Organization = () => {
  const { id: userId } = useParams();
  const [id, setId] = useState(userId);
  const [loading, setLoading] = useState(true);
  const [menus, setMenus] = useState([true, false, false, false, false, false]);
  const [organizationData, setOrganizationData] = useState({});
  const fetchOrganization = async () => {
    const response = await OrganizationRepository.getOrganizationById(id);
    setOrganizationData(response);
  };

  const changeMenus = async (menu) => {
    let tempMenus = [false, false, false, false, false, false];
    tempMenus[menu] = true;
    await setMenus(tempMenus);
  };
  const fetch = async () => {
    await fetchOrganization();
    setLoading(false);
  };
  useEffect(async () => {
    await setLoading(true);
    await setId(userId);
  }, [userId]);

  useEffect(async () => {
    await fetch();
  }, [id]);
  return (
    <>
      {loading ? (
        'cargando'
      ) : (
        <>
          <NavBar />
          <div className="profile-organization">
            {organizationData.image_url ? (
              <img
                alt="Organiaztion Profile"
                src={organizationData.image_url}
                className="profile-picture"
              />
            ) : (
              <img
                alt="Organiaztion Profile not defined"
                src={BlackMarkIcon}
                className="profile-picture"
              />
            )}

            <p className="profile-name">
              <span className="name">{organizationData.name}</span>
              <br />
              <br />
              <span>
                {organizationData.resume ? organizationData.resume : null}
              </span>
              <br />
              <br />
              <span className="color-red bold">Ver más</span>
            </p>

            <div className="social-interactions">
              <div>
                {organizationData.likes}
                <BiLike size={40} className="color-white" />
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
            <AboutOrganization organizationData={organizationData} />
          ) : null}
          {menus[1] ? (
            <AboutOrganization organizationData={organizationData} />
          ) : null}
          {menus[2] ? (
            <AffiliationsOrganization organizationData={organizationData} />
          ) : null}
          {menus[3] ? (
            <ProductsOrganization organizationData={organizationData} />
          ) : null}
          <Footer />
        </>
      )}
    </>
  );
};
