import React from 'react';
import { Row } from 'react-bootstrap';
import './Education.scss';
import { EducationCard } from '../Education-card/Education-card';
export const Education = ({ tittle, educations }) => {
  return (
    <div className="education">
      <h5>{tittle}</h5>

      <Row className=" mt-4 tittles">
        <div className="col-2 ml bold">Nivel</div>
        <div className="col-2 bold">Año</div>
        <div className="col-3 bold">Programa Academico</div>
        <div className="col-3 bold">Institución</div>
      </Row>
      <hr />
      <Row className="">
        {educations.map((education) => (
          <EducationCard key={education?.id} education={education} />
        ))}
      </Row>

      <p className="color-red bold see-more mt-4 "> Ver Más</p>
    </div>
  );
};
