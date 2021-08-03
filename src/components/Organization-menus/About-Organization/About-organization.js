import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import {
  Contact,
  Announcement,
  SocialMedia,
  PrincipalInformation,
  Awards,
  SimilaryOrganizations,
} from '../../';
import { OrganizationRepository } from '../../../repositories';

export const AboutOrganization = ({ organizationData }) => {
  const [socialNetworks, setSocialNetworks] = useState({});
  const [areas, setAreas] = useState({});
  const [lines, setLines] = useState({});
  const [givenAwards, setGivenAwards] = useState({});
  const [receivedAwards, setReceivedAwards] = useState({});
  const [SimilaryOrganization, setSimilaryOrganization] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchSocialNetworks = async () => {
    const response =
      await OrganizationRepository.getSocialNetworksByOrganizations(
        organizationData.org_id
      );
    setSocialNetworks(response);
  };
  const fetchAreas = async () => {
    const response = await OrganizationRepository.getSubjectsByOrganization(
      organizationData.org_id,
      1
    );
    setAreas(response);
  };
  const fetchLines = async () => {
    const response = await OrganizationRepository.getSubjectsByOrganization(
      organizationData.org_id,
      2
    );
    setLines(response);
  };
  const fetchGivenAwards = async () => {
    const response = await OrganizationRepository.getGivenAwardsByOrganization(
      organizationData.org_id
    );
    setGivenAwards(response);
  };
  const fetchReceivedAwards = async () => {
    const response =
      await OrganizationRepository.getReceivedAwardsByOrganization(
        organizationData.org_id
      );
    setReceivedAwards(response);
  };
  const fetchSimilaryOrganizations = async () => {
    const response =
      await OrganizationRepository.getSimilaryOrganizationsByType(
        organizationData.organization_type.id
      );
    setSimilaryOrganization(response);
  };
  const fetch = async () => {
    await fetchSocialNetworks();
    await fetchAreas();
    await fetchLines();
    await fetchGivenAwards();
    await fetchReceivedAwards();
    await fetchSimilaryOrganizations();
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
              <div className="col-6">
                <PrincipalInformation
                  tittle={'Areas de Investigación'}
                  subjects={areas}
                />
                <PrincipalInformation
                  tittle={'Lineas de Investigación'}
                  subjects={lines}
                />
                <SimilaryOrganizations
                  tittle={'Organizaciones similares'}
                  organizations={SimilaryOrganization}
                />
              </div>
              <div className="col-3">
                <Awards awards={receivedAwards} />
                <Awards awards={givenAwards} type={1} />
              </div>
            </Row>
          </div>
        </Container>
      )}
    </div>
  );
};
