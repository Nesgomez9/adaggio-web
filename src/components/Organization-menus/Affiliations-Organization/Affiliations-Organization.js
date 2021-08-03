import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Contact, Announcement, SocialMedia, Affiliations } from '../../';
import { OrganizationRepository } from '../../../repositories';
export const AffiliationsOrganization = ({ organizationData }) => {
  const [loading, setLoading] = useState(true);
  const [socialNetworks, setSocialNetworks] = useState({});
  const [educations, setEducations] = useState([]);
  const fetchSocialNetworks = async () => {
    const response =
      await OrganizationRepository.getSocialNetworksByOrganizations(
        organizationData.org_id
      );
    setSocialNetworks(response);
  };

  const fetchEducations = async () => {
    const response = await OrganizationRepository.getEducationInOrganization(
      organizationData.org_id
    );
    const data = Array.from(new Set(response.map((a) => a.expert.id))).map(
      (id) => {
        return response.find((a) => a.expert.id === id);
      }
    );
    setEducations(data);
  };

  const fetch = async () => {
    await fetchSocialNetworks();
    await fetchEducations();
    console.log(educations);
    setLoading(false);
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <div>
      {loading ? null : (
        <Container fluid className="bg-gray">
          <div className="expert-body">
            <Row>
              <div className="col-3">
                <Contact
                  country={organizationData.country.nicename}
                  email={organizationData.email}
                  phone={organizationData.phone}
                  site={organizationData.website}
                  minCienciasSite={organizationData.min_ciencias}
                  adaggio={organizationData.adaggio}
                  editorial={organizationData.editorial}
                  repository={organizationData.repository}
                  library={organizationData.library}
                />
                <Announcement />
                <SocialMedia networks={socialNetworks} />
              </div>
              <div className="col-9">
                <div className="row">
                  <div className="col-6">
                    <Affiliations
                      title={'Expertos Formados en esta organización'}
                      objects={educations}
                    />
                    <Affiliations
                      title={'Organizaciones de las que depende'}
                      objects={educations}
                    />
                  </div>
                  <div className="col-6">
                    <Affiliations
                      title={'Expertos vinculados a esta organizacion'}
                      objects={educations}
                    />
                    <Affiliations
                      title={'Organizaciones suscritas'}
                      objects={educations}
                    />
                  </div>
                </div>
              </div>
            </Row>
          </div>
        </Container>
      )}
    </div>
  );
};
