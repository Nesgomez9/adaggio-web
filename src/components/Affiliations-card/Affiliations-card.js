import React, { useEffect } from 'react';
import './Affiliations-card.scss';
import { useHistory } from 'react-router-dom';
import BlackMarkIcon from '../../assets/icons/Huella-1.png';

export const AffiliationsCard = ({ object }) => {
  const history = useHistory();
  const routeChange = (id) => {
    history.push(`/experts/${id}`);
  };

  useEffect(() => {
    const changeDates = () => {
      let date = object.start_date.split('-');
      delete object.start_date;
      object.start_date = date[0];
    };
    changeDates();
  });
  return (
    <div
      className="affiliation-card cursor-pointer"
      onClick={() => routeChange(object.expert.exp_id)}
    >
      <div>
        {object.expert.image_url ? (
          <img alt="Profile" src={object.expert.image_url} className="icon" />
        ) : (
          <img
            alt="Profile  not defined"
            src={BlackMarkIcon}
            className="icon"
          />
        )}
      </div>
      <span>
        {object.expert.name}, {object.expert.last_name} <br />
        <span className="tiny-text">
          {object.program.name.toUpperCase()} <br />
        </span>
        <span className="tiny-text">
          {object.start_date} -{' '}
          {object.end_date ? object.end_date : 'Actualidad'}
        </span>
      </span>
    </div>
  );
};
