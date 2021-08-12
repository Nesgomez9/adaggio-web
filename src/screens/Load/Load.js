import React, { useState, useRef } from 'react';
import Axios from 'axios';
import { Footer, NavBar } from '../../components';
import { Form } from 'react-bootstrap';
import './Load.scss';
import { ExpertRepository } from '../../repositories';
import { RiContactsBookUploadFill } from 'react-icons/ri';
export const Load = () => {
  const [csvArray, setCsvArray] = useState([]);
  const [sendState, setSendState] = useState(false);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (evt) => {
      const text = evt.target.result;
      const headers = text.slice(0, text.indexOf('\r')).split(',');
      const rows = text.slice(text.indexOf('\n') + 1).split('\r\n');
      const newArray = rows.map((row) => {
        const values = row.split(',');
        const eachObject = headers.reduce((obj, header, i) => {
          if (values[i] === '') {
            values[i] = null;
          } else if (
            Number(values[i]) &&
            header != 'cvlac_id' &&
            header != 'likes' &&
            header != 'phone' &&
            header != 'document_number'
          ) {
            values[i] = Number(values[i]);
          }
          obj[header] = values[i];
          return obj;
        }, {});
        return eachObject;
      });
      setCsvArray(newArray);
      console.log(newArray);
    };
    reader.readAsText(file);
  };

  const makeRequest = async () => {
    try {
      setSendState(true);
      const response = await ExpertRepository.postExpertsBulk(csvArray);
      setSendState(false);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="load">
        <div className="load-flex">
          <div className="load-title">Cargar Datos</div>
        </div>
        <div className="load-flex">
          {!sendState ? (
            <div className="load-form">
              <Form>
                <Form.Check type="radio" label="Expertos" name="group1" />
                <Form.Check type="radio" label="Organizaciones" name="group1" />
                <Form.Check type="radio" label="Productos" name="group1" />
                <Form.Check type="radio" label="Temas" name="group1" />
                <Form.Check
                  type="radio"
                  label="Macro-Productos"
                  name="group1"
                />
              </Form>
              <div className="load-flex">
                <input
                  type="file"
                  accept=".csv"
                  className="load-flex-upload"
                  onChange={handleFileUpload}
                />
                <div className="load-flex-btn" onClick={makeRequest}>
                  Enviar
                </div>
              </div>
            </div>
          ) : (
            <div className="load-loader">
              <div>Cargando...</div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
