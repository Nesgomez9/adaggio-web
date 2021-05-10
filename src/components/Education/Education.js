import React from 'react';
import { InformationCard } from '../index';
import { Row } from 'react-bootstrap';
import './Education.scss';
import { EducationCard } from '../Education-card/Education-card';
export const Education = ({ tittle }) => {
  return (
    <div className="education">
      <h5>{tittle}</h5>

      <Row className=" mt-4 tittles">
        <div className="col-2 offset-2">Nivel</div>
        <div className="col-2">Año</div>
        <div className="col-3">Programa Academico</div>
        <div className="col-3">Institución</div>
      </Row>
      <hr />
      <Row className="">
        <EducationCard />
        <EducationCard />
        <EducationCard />
      </Row>

      <p className="color-red bold see-more mt-4 "> Ver Más</p>
    </div>
  );
};
