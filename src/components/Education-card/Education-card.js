import React from 'react';
import './Education-card.scss';
import { Row } from 'react-bootstrap';
export const EducationCard = ({ tittle }) => {
  return (
    <Row className="mt-2 education-card  ">
      <div className="ml-5">
        <div className="logo"></div>
      </div>
      <div className="col-2 bold ">Doctorado</div>
      <div className="col-2">2017 - </div>
      <div className="col-3">Informatica Educativa</div>
      <div className="col-3">Fundación Universitaria del area Andina</div>
    </Row>
  );
};
