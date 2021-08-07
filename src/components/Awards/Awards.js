import React, { useEffect } from 'react';
import './Awards.scss';
import ColCiencias from '../../assets/icons/social-networks/colciencias.png';
export const Awards = ({ awards, type }) => {
  const changeDates = async () => {
    await awards.map((award) => {
      let date = award.start_date.split('-');
      delete award.start_date;
      award.start_date = date[0];
    });
  };
  useEffect(() => {
    changeDates();
  }, []);
  return (
    <>
      <div className="award">
        <div>
          {type === 1 ? (
            <h5>Premios y reconocimientos otorgados</h5>
          ) : (
            <h5>Premios y reconocimientos recibidos</h5>
          )}
        </div>
        {awards.map((award) => (
          <div key={award?.id}>
            {type === 1 ? (
              <div className=" pl-2 mr-3 awards">
                <div className="contact-info">
                  {award.award_type.name} <br />
                  conferred on {award.expert.last_name}, {award.expert.name},{' '}
                  {award.start_date}
                </div>
              </div>
            ) : (
              <div className="awards">
                <img atl="ColCiencias" src={ColCiencias} className="logo"></img>
                <div className="contact-info ">
                  {award.award_type.name} <br />
                  conferred by Minciencias, {award.start_date} -{' '}
                  {award.end_date}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
