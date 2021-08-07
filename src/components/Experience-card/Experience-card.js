import React from 'react';

import './Experience-card.scss';
import BlackMarkIcon from '../../assets/icons/Huella-1.png';
import { Row } from 'react-bootstrap';
export const ExperienceCard = ({ education }) => {
  return (
    <Row className="mt-2 experience-card  ">
      <div className="ml-4">
        {education.organization.image_url ? (
          <img
            alt="Organization Profile"
            src={education.organization.image_url}
            className="logo"
          ></img>
        ) : (
          <img
            alt="Organization Profile not defined"
            src={BlackMarkIcon}
            className="logo"
          ></img>
        )}
      </div>
      <div className="col-3 bold ">{education.organization.name}</div>
      <div className="col-2 bold ">{education.position.name}</div>
      <div className="col-2  ml-5 ">{education.subject.name}</div>
      <div className="col-2 ml-3">
        {education.start_date.split('-')[0]} -
        {education.end_date ? education.end_date.split('-')[0] : 'Actuliadad'}
      </div>
    </Row>
  );
};
