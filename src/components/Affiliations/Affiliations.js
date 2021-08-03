import React from 'react';
import './Affiliations.scss';
import { AffiliationsCard } from '../';
export const Affiliations = ({ title, objects }) => {
  console.log(objects);
  return (
    <div className="affiliations">
      <div className="title">
        <h5>{title}</h5>
      </div>
      {objects &&
        objects.map((object) => (
          <div>
            <AffiliationsCard object={object} />
          </div>
        ))}
    </div>
  );
};
