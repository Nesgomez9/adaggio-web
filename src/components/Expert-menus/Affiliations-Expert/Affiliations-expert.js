import React, { useState, useEffect } from 'react';
import {
  Announcement,
  Contact,
  SocialMedia,
  Asociations,
} from '../../../components';
import { Container, Row } from 'react-bootstrap';
import { Experience } from '../../Experience/Experience';
import { ExpertRepository } from '../../../repositories';
export const AffiliationsExpert = ({ expertData, socialNetworks }) => {
  const [loading, setLoading] = useState(true);
  const [laboralExperience, setLaboralExperience] = useState({});
  const [educationalExperience, setEducationalExperience] = useState({});
  const [invetigativeExperience, setInvetigativeExperience] = useState({});
  const fetchExpertLaboralExperience = async () => {
    const response = await ExpertRepository.getExpertExperienceById(
      expertData.exp_id,
      1
    );
    setLaboralExperience(response);
  };
  const fetchExpertEducationalExperience = async () => {
    const response = await ExpertRepository.getExpertExperienceById(
      expertData.exp_id,
      3
    );
    setEducationalExperience(response);
  };
  const fetchExpertInvestigativeExperience = async () => {
    const response = await ExpertRepository.getExpertExperienceById(
      expertData.exp_id,
      2
    );
    setInvetigativeExperience(response);
  };
  const fetch = async () => {
    await fetchExpertLaboralExperience();
    await fetchExpertEducationalExperience();
    await fetchExpertInvestigativeExperience();

    setLoading(false);
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <>
      {loading ? null : (
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
                <SocialMedia networks={socialNetworks} />
              </div>
              <div className="col-6">
                <Experience
                  tittle={'Experiencia en grupos de investigación'}
                  educations={invetigativeExperience}
                />
                <Experience
                  tittle={'Experiencia en Educación'}
                  educations={educationalExperience}
                />
                <Experience
                  tittle={'Experiencia Profesional y Laboral'}
                  educations={laboralExperience}
                />
              </div>
              <div className="col-3">
                <Asociations />
              </div>
            </Row>
          </div>
        </Container>
      )}
    </>
  );
};
