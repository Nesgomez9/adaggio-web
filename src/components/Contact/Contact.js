import React from 'react';
import './Contact.scss';
import { BiWorld, BiEnvelope, BiPhone } from 'react-icons/bi';
export const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <h5>Contacto corporativo</h5>
        <div className="contact-info">
          <div className="mb-4">
            <BiWorld size={40} className="mr-3" /> Colombia
          </div>
          <div className="mb-4">
            <BiEnvelope size={40} className="mr-3" /> carmen.luisa@gmail.com
          </div>
          <div className="mb-4">
            <BiPhone size={40} className="mr-3" /> (+57) 3256458978 Ext 5498
          </div>
        </div>
      </div>
    </>
  );
};
