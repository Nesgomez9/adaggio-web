import React from 'react';
import './Education-card.scss';
import BlackMarkIcon from '../../assets/icons/Huella-1.png';
import { Row } from 'react-bootstrap';
export const EducationCard = ({ education }) => {
  return (
    <Row className="mt-2 education-card  ">
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
      <div className="col-2 bold ">{education.education_type.name}</div>
      <div className="col-2">
        {education.start_date.split('-')[0]} -
        {education.end_date ? education.end_date.split('-')[0] : 'Actuliadad'}{' '}
      </div>
      <div className="col-3">{education.program.name}</div>
      <div className="col-3">{education.organization.name}</div>
    </Row>
  );
};
