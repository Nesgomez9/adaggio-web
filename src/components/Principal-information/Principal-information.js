import React from 'react';
import { InformationCard } from '../index';
import { Row } from 'react-bootstrap';
import './Principal-information.scss';
export const PrincipalInformation = ({ tittle }) => {
  return (
    <div className="investigation-areas">
      <h5>{tittle}</h5>
      <Row className="ml-1">
        <InformationCard tittle={'CIENCIAS DE LA SALUD'} />
        <InformationCard tittle={'ENFERMERIA'} />
        <InformationCard tittle={'VULNERAVILIDAD Y SALUD PUBLICA'} />
        <InformationCard tittle={'CIENCIAS DE LA SALUD'} />
        <InformationCard tittle={'ENFERMERIA'} />
        <InformationCard tittle={'VULNERAVILIDAD Y SALUD PUBLICA'} />
        <InformationCard tittle={'CIENCIAS DE LA SALUD'} />
        <InformationCard tittle={'ENFERMERIA'} />
        <InformationCard tittle={'VULNERAVILIDAD Y SALUD PUBLICA'} />
      </Row>

      <p className="color-red bold see-more"> Ver Más</p>
    </div>
  );
};
