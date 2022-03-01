import React, { useEffect } from 'react';
import './Affiliations-card.scss';
import { useHistory } from 'react-router-dom';
import BlackMarkIcon from '../../assets/icons/Huella-1.png';

export const AffiliationsCard = ({ object }) => {
  const history = useHistory();
  const routeChange = (id) => {
    history.push(`/experts/${id}`);
  };
  console.log(object);
  useEffect(() => {
    if (object.expert) {
      const changeDates = () => {
        let date = object.start_date.split('-');
        delete object.start_date;
        object.start_date = date[0];
      };
      changeDates();
    }
  });
  return (
    <div>
      {object.expert ? (
        <div
          className="affiliation-card cursor-pointer"
          onClick={() => routeChange(object.expert.exp_id)}
        >
          <div>
            {object.expert.image_url ? (
              <img
                alt="Profile"
                src={object.expert.image_url}
                className="icon"
              />
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
      ) : (
        <div
          className="affiliation-card cursor-pointer"
          onClick={() => routeChange(object.exp_id)}
        >
          <div>
            {object.image_url ? (
              <img alt="Profile" src={object.image_url} className="icon" />
            ) : (
              <img
                alt="Profile  not defined"
                src={BlackMarkIcon}
                className="icon"
              />
            )}
          </div>
          <span>
            {object.name}, {object.last_name} <br />
          </span>
        </div>
      )}
    </div>
  );
};
