import React from 'react';
import './Experience.scss';
import { Row } from 'react-bootstrap';
import { ExperienceCard } from '..';
export const Experience = ({ educations, tittle }) => {
  return (
    <div className="experience">
      <h5 className="bold">{tittle}</h5>
      <hr />
      <Row className="">
        {educations.map((education) => (
          <ExperienceCard education={education} />
        ))}
      </Row>
    </div>
  );
};
