import React from 'react';
import { Footer, NavBar } from '../../components';
import { Button, Form } from 'react-bootstrap';
import './Load.scss';
export const Load = () => {
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
              <Form.Check type="radio" label="Experts" name="group1" />
              <Form.Check type="radio" label="Organizations" name="group1" />
              <Form.Check type="radio" label="Products" name="group1" />
              <Form.Check type="radio" label="Subjects" name="group1" />
            </Form>
            <div className="load-flex">
              <input type="file" className="load-flex-upload" />
              <div className="load-flex-btn">Enviar</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
