import React, { useState, useEffect } from 'react';
import { Footer, NavBar } from '../../components';
import { Form } from 'react-bootstrap';
import './Load.scss';
import { ExpertRepository } from '../../repositories';
export const Load = () => {
  const [csvArray, setCsvArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [radioValue, setRadioValue] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
  ]);

  const changRadioValue = (radioId) => {
    const tmpRadioValues = [false, false, false, false, false, false];
    tmpRadioValues[radioId] = true;
    setRadioValue(tmpRadioValues);
  };

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
      setLoading(true);
      let response = null;
      if (radioValue[0]) {
        response = await ExpertRepository.postExpertsBulk(csvArray);
      } else if (radioValue[4]) {
        response = await ExpertRepository.postExpertSocialNetworksBulk(
          csvArray
        );
      }
      console.log(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log(radioValue);
  }, [radioValue]);
  return (
    <>
      <NavBar />
      <div className="load">
        <div className="load-flex">
          <div className="load-title">Cargar Datos</div>
        </div>
        <div className="load-flex">
          {!loading ? (
            <div className="load-form">
              <Form>
                <Form.Check
                  type="radio"
                  label="Expertos"
                  name="group1"
                  checked={radioValue[0]}
                  value={radioValue[0]}
                  onChange={(e) => changRadioValue(0)}
                />
                <Form.Check
                  type="radio"
                  label="Organizaciones"
                  name="group1"
                  checked={radioValue[1]}
                  value={radioValue[1]}
                  onChange={(e) => changRadioValue(1)}
                />
                <Form.Check
                  type="radio"
                  label="Productos"
                  name="group1"
                  checked={radioValue[2]}
                  value={radioValue[2]}
                  onChange={(e) => changRadioValue(2)}
                />
                <Form.Check
                  type="radio"
                  label="Temas"
                  name="group1"
                  checked={radioValue[3]}
                  value={radioValue[3]}
                  onChange={(e) => changRadioValue(3)}
                />
                <Form.Check
                  type="radio"
                  label="Redes sociales expertos"
                  name="group1"
                  checked={radioValue[4]}
                  value={radioValue[4]}
                  onChange={(e) => changRadioValue(4)}
                />
                <Form.Check
                  type="radio"
                  label="Macro-Productos"
                  name="group1"
                  checked={radioValue[5]}
                  value={radioValue[5]}
                  onChange={(e) => changRadioValue(5)}
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
