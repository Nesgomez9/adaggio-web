import React, { useState, useRef } from 'react';
import Axios from 'axios';
import { Footer, NavBar } from '../../components';
import { Button, Form } from 'react-bootstrap';
import './Load.scss';
export const Load = () => {
  const [csvArray, setCsvArray] = useState([]);

  // const inputFile = useRef(null);

  // const onButtonClick = () => {
  //   inputFile.current.click();
  // };

  // const saveImg = (e) => {
  //   const excelFile = inputFile.current.files[0];
  //   const reader = new FileReader();
  //   reader.onload = (e) => {
  //     console.log(e.target.result);
  //   };
  // };
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (evt) => {
      const text = evt.target.result;
      const headers = text.slice(0, text.indexOf('\n')).split(',');
      const rows = text.slice(text.indexOf('\n') + 1).split('\n');
      const newArray = rows.map((row) => {
        const values = row.split(',');
        const eachObject = headers.reduce((obj, header, i) => {
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

  const makeRequest = () => {
    Axios.get('http://127.0.0.1:8080/api/experts')
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <NavBar />
      <div className="load">
        <div className="load-flex">
          <div className="load-title">Cargar Datos</div>
        </div>
        <div className="load-flex">
          <div className="load-form">
            <Form>
              <Form.Check type="radio" label="Expertos" name="group1" />
              <Form.Check type="radio" label="Organizaciones" name="group1" />
              <Form.Check type="radio" label="Productos" name="group1" />
              <Form.Check type="radio" label="Temas" name="group1" />
              <Form.Check type="radio" label="Macro-Productos" name="group1" />
            </Form>
            <div className="load-flex">
              {/* <label>
                <input
                  type="file"
                  className="load-flex-upload"
                  id="file-input"
                  ref={inputFile}
                  style={{ display: 'none' }}
                  onChange={saveImg}
                />
              </label> */}
              <input
                type="file"
                accept=".csv"
                className="load-flex-upload"
                onChange={handleFileUpload}
              />
              {/* <div className="load-flex-btn" onClick={onButtonClick}>
                Cargar
              </div> */}
              <div className="load-flex-btn" onClick={makeRequest}>
                Enviar
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
