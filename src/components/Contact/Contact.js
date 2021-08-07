import React from 'react';
import './Contact.scss';
import { BiWorld, BiEnvelope, BiPhone } from 'react-icons/bi';
import ColCiencias from '../../assets/icons/social-networks/colciencias.png';
import logo from '../../assets/icons/ADAGGIO-red.png';
import { FaHome } from 'react-icons/fa';
import { ImLibrary, ImBooks } from 'react-icons/im';
import { RiGitRepositoryFill } from 'react-icons/ri';
export const Contact = ({
  country,
  email,
  phone,
  site,
  minCienciasSite,
  adaggio,
  editorial,
  repository,
  library,
}) => {
  return (
    <>
      <div className="contact-container">
        <h5>Contacto corporativo</h5>
        <div className="contact-info">
          <div className="mb-4">
            <BiWorld size={40} className="mr-3" />
            <span> {country}</span>
          </div>
          <div className="mb-4">
            <BiEnvelope size={40} className="mr-3" /> {email}
          </div>
          {phone ? (
            <div className="mb-4">
              <BiPhone size={40} className="mr-3" /> (+57) {phone}
            </div>
          ) : null}
          {site ? (
            <div className="mb-4">
              <FaHome size={40} className="mr-3" />
              <a href={site} target="_blank" rel="noreferrer">
                Sitio de la universidad
              </a>
            </div>
          ) : null}
          {minCienciasSite ? (
            <div className="mb-4">
              <img
                alt="ColCiencias"
                src={ColCiencias}
                className="col-ciencias mr-3"
              ></img>
              <a href={minCienciasSite} target="_blank" rel="noreferrer">
                Perfil de minciencias{' '}
              </a>
            </div>
          ) : null}
          {adaggio ? (
            <div className="mb-4">
              <img alt="Adaggio" src={logo} className="col-ciencias mr-3"></img>
              <a href={adaggio} target="_blank" rel="noreferrer">
                {' '}
                Adaggio unite{' '}
              </a>
            </div>
          ) : null}
          {editorial ? (
            <div className="mb-4">
              <ImBooks size={40} className="mr-3" />
              <a href={editorial} target="_blank" rel="noreferrer">
                {' '}
                Gestion editorial de revistas{' '}
              </a>
            </div>
          ) : null}
          {repository ? (
            <div className="mb-4">
              <RiGitRepositoryFill size={40} className="mr-3" />
              <a href={repository} target="_blank" rel="noreferrer">
                Repositorio digital intitucional{' '}
              </a>
            </div>
          ) : null}
          {library ? (
            <div className="mb-4">
              <ImLibrary size={40} className="mr-3" />
              <a href={library} target="_blank" rel="noreferrer">
                {' '}
                Biblioteca digital{' '}
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};
