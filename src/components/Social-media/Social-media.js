import React from 'react';
import './Social-media.scss';
import { Row } from 'react-bootstrap';

export const SocialMedia = ({ networks }) => {
  return (
    <>
      <div className="social-media">
        <h5>Redes sociales y academicas</h5>
        <div className="info">
          <Row>
            {networks
              ? networks.map((network) => (
                  <div className="mr-4 ml-3 mb-4 networks">
                    <img
                      alt="Social Networks"
                      src={network.social_network.image_url}
                      height="40"
                      className="mr-2 "
                    />
                    <a target="_blank" rel="noreferrer" href={network.url}>
                      {network.social_network.name}
                    </a>
                  </div>
                ))
              : null}
          </Row>
        </div>
      </div>
    </>
  );
};
