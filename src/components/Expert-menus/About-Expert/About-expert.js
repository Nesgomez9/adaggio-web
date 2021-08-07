import React from 'react';
import {
  Announcement,
  Awards,
  CoAuthors,
  Contact,
  Education,
  SocialMedia,
  PrincipalInformation,
} from '../../../components';
import { Container, Row } from 'react-bootstrap';
export const AboutExpert = ({
  expertData,
  socialNetworks,
  areas,
  lines,
  educations,
  awards,
}) => {
  return (
    <>
      <Container fluid className="bg-gray">
        <div className="expert-body">
          <Row>
            <div className="col-3">
              <Contact
                country={expertData.country.nicename}
                email={expertData.email}
                phone={expertData.phone}
              />
              <Announcement />
              {socialNetworks ? (
                <SocialMedia networks={socialNetworks} />
              ) : null}
            </div>
            <div className="col-6">
              <PrincipalInformation
                tittle={'Areas de Investigación'}
                subjects={areas}
              />
              <PrincipalInformation
                tittle={'Lineas de Investigación'}
                subjects={lines}
              />
              <Education tittle={'Educación'} educations={educations} />
            </div>
            <div className="col-3">
              <Awards awards={awards} />
              <CoAuthors />
            </div>
          </Row>
        </div>
      </Container>
    </>
  );
};
