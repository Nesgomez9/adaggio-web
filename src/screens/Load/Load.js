import React, { useState, useEffect } from 'react';
import { Footer, NavBar } from '../../components';
import { Form } from 'react-bootstrap';
import './Load.scss';
import {
  ExpertRepository,
  OrganizationRepository,
  SubjectsRepository,
  ProductRepository,
} from '../../repositories';
export const Load = () => {
  const [bigArray, setBigArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [radioValue, setRadioValue] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const changRadioValue = (radioId) => {
    const tmpRadioValues = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ];
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
        const values = row.split(/,(?! )/);
        const eachObject = headers.reduce((obj, header, i) => {
          values[i] = values[i].replace('|', ',');
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
      let arrayPart = [];
      let copyArray = [...newArray];
      let arrArray = [];
      while (copyArray.length > 0) {
        arrayPart = copyArray.slice(0, 50);
        arrArray = [...arrArray, arrayPart];
        copyArray.splice(0, 50);
      }
      setBigArray(arrArray);
    };
    reader.readAsText(file);
  };

  const makeRequest = async () => {
    try {
      setLoading(true);
      let response = null;
      for (const arr of bigArray) {
        if (radioValue[0]) {
          response = await ExpertRepository.postExpertsBulk(arr);
        } else if (radioValue[2]) {
          response = await ProductRepository.postProductsBulk(arr);
        } else if (radioValue[4]) {
          response = await ExpertRepository.postExpertSocialNetworksBulk(arr);
        } else if (radioValue[1]) {
          response = await OrganizationRepository.postOrganizationsBulk(arr);
        } else if (radioValue[6]) {
          response = await SubjectsRepository.postSubjectsBulk(arr);
        } else if (radioValue[7]) {
          response = await SubjectsRepository.postProgramsBulk(arr);
        } else if (radioValue[8]) {
          response = await ExpertRepository.postExpertEducationsBulk(arr);
        } else if (radioValue[9]) {
          response = await ExpertRepository.postExpertExperienceBulk(arr);
        } else if (radioValue[10]) {
          response = await ProductRepository.postProductContributorsBulk(arr);
        } else if (radioValue[11]) {
          response = await ProductRepository.postProductUrlsBulk(arr);
        } else if (radioValue[12]) {
          response = await ProductRepository.postProductSubjectsBulk(arr);
        } else if (radioValue[13]) {
          response = await ExpertRepository.postExpertSubjectsBulk(arr);
        }
      }
      setLoading(false);
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
          {!loading ? (
            <div className="load-form">
              <Form>
                <Form.Check
                  type="radio"
                  label="Experts"
                  name="group1"
                  checked={radioValue[0]}
                  value={radioValue[0]}
                  onChange={(e) => changRadioValue(0)}
                />
                <Form.Check
                  type="radio"
                  label="Experts subjects"
                  name="group1"
                  checked={radioValue[13]}
                  value={radioValue[13]}
                  onChange={(e) => changRadioValue(13)}
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
                  label="Product Contributors"
                  name="group1"
                  checked={radioValue[10]}
                  value={radioValue[10]}
                  onChange={(e) => changRadioValue(10)}
                />
                <Form.Check
                  type="radio"
                  label="Procut urls"
                  name="group1"
                  checked={radioValue[11]}
                  value={radioValue[11]}
                  onChange={(e) => changRadioValue(11)}
                />
                <Form.Check
                  type="radio"
                  label="Procut subjects"
                  name="group1"
                  checked={radioValue[12]}
                  value={radioValue[12]}
                  onChange={(e) => changRadioValue(12)}
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
                  label="Subjects"
                  name="group1"
                  checked={radioValue[6]}
                  value={radioValue[6]}
                  onChange={(e) => changRadioValue(6)}
                />
                <Form.Check
                  type="radio"
                  label="Programs"
                  name="group1"
                  checked={radioValue[7]}
                  value={radioValue[7]}
                  onChange={(e) => changRadioValue(7)}
                />
                <Form.Check
                  type="radio"
                  label="Expert Educations"
                  name="group1"
                  checked={radioValue[8]}
                  value={radioValue[8]}
                  onChange={(e) => changRadioValue(8)}
                />
                <Form.Check
                  type="radio"
                  label="Expert Experience"
                  name="group1"
                  checked={radioValue[9]}
                  value={radioValue[9]}
                  onChange={(e) => changRadioValue(9)}
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
