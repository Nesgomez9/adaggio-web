import React from 'react';
import { useHistory } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import BlackMarkIcon from '../../assets/icons/Huella-1.png';
import './Similary-Organizations.scss';
export const SimilaryOrganizations = ({ tittle, organizations }) => {
  const history = useHistory();
  const routeChange = (id) => {
    history.push(`/organizations/${id}`);
  };

  return (
    <div className="investigation-areas">
      <h5>{tittle}</h5>
      <Row className="ml-1">
        {organizations &&
          organizations.map((organization) => (
            <div
              className="university cursor-pointer"
              onClick={() => routeChange(organization.org_id)}
            >
              <div>
                {organization.image_url ? (
                  <img
                    alt="University"
                    src={organization.image_url}
                    className="university-icon"
                  />
                ) : (
                  <img
                    alt="University not defined"
                    src={BlackMarkIcon}
                    className="university-icon"
                  />
                )}
              </div>
              <span>
                {organization.name} <br />
                {organization.short_name ? (
                  <div>
                    {organization.short_name}
                    <br />
                  </div>
                ) : null}
                <span className="color-red">
                  {organization.country.nicename
                    ? organization.country.nicename
                    : null}
                </span>
              </span>
            </div>
          ))}
      </Row>
    </div>
  );
};
