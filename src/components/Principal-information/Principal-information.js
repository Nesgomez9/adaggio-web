import React from 'react';
import { InformationCard } from '../index';
import { Row } from 'react-bootstrap';
import './Principal-information.scss';
export const PrincipalInformation = ({ tittle, subjects }) => {
  return (
    <div className="investigation-areas">
      <h5>{tittle}</h5>
      <Row className="ml-1">
        {subjects
          ? subjects.map((subject) => (
              <InformationCard tittle={subject.subject.name} />
            ))
          : null}
      </Row>

      <p className="color-red bold see-more"> Ver Más</p>
    </div>
  );
};
