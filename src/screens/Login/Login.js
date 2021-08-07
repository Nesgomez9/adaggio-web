import React, { useState, useEffect } from 'react';

import { AuthRepository } from '../../repositories';
import * as FaIcons from 'react-icons/fa';
import { NavBar, Footer } from '../../components';
import * as ImIcons from 'react-icons/im';
import { Redirect } from 'react-router-dom';
import { Form, Button, InputGroup, Row } from 'react-bootstrap';
import logo from '../../assets/icons/ADAGGIO-red.png';
import './Login.scss';
export const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [userInformation, setUserInformation] = useState({});
  const [validated, setValidated] = useState(false);
  const [loged, setLoged] = useState(false);
  const [seePassword, setSeePassword] = useState(false);
  const Password = () => {
    setSeePassword(!seePassword);
  };
  const login = async () => {
    try {
      const response = await AuthRepository.login(user.email, user.password);
      setUserInformation(response);
      setLoged(true);
    } catch (error) {
      alert('Datos incorrectos, vuelvelo a intentar');
      setUser({ ...user, password: '' });
      setValidated(false);
    }
  };
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  useEffect(() => {
    if (validated) {
      login();
      if (loged) {
        localStorage.setItem('user', JSON.stringify(userInformation));
      }
    } else {
    }
  }, [validated, loged]);
  const onChange = (name, value) => {
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      {loged === true ? (
        <Redirect to={'/home'} />
      ) : (
        <div>
          <NavBar />
          <div className="container-login">
            <div>
              <Row>
                <div className="col-3 offset-1 login">
                  <img src={logo} height="60" alt="Nav-logo" className="logo" />
                  <p className="info">
                    <span className="bold">BIENVENIDO</span>
                  </p>
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Form.Group>
                      <Form.Label className="bold">Correo</Form.Label>
                      <InputGroup className="mb-4" hasValidation>
                        <InputGroup.Prepend>
                          <InputGroup.Text>@</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                          type="email"
                          placeholder="tu@ejemplo.com"
                          aria-describedby="inputGroupPrepend"
                          required
                          value={user.email}
                          onChange={(e) => {
                            onChange('email', e.target.value);
                          }}
                        />
                        <Form.Control.Feedback type="invalid">
                          El email es requerido
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                    <Form.Label className="bold">Contraseña</Form.Label>
                    <InputGroup hasValidation>
                      <InputGroup.Prepend>
                        <InputGroup.Text>
                          <FaIcons.FaKey />
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        type={seePassword === true ? 'input' : 'password'}
                        placeholder="Password"
                        required
                        value={user.password}
                        onChange={(e) => {
                          onChange('password', e.target.value);
                        }}
                      />

                      <InputGroup.Prepend>
                        <InputGroup.Text
                          className="cursor-pointer"
                          onClick={Password}
                        >
                          {seePassword === true ? (
                            <ImIcons.ImEyeBlocked />
                          ) : (
                            <ImIcons.ImEye />
                          )}
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control.Feedback type="invalid">
                        Por favor, ingrese una contraseña
                      </Form.Control.Feedback>
                    </InputGroup>

                    <Form.Group controlId="formBasicCheckbox">
                      <Row className="mt-2">
                        <Form.Check
                          type="checkbox"
                          label="Recordarme"
                          className="ml-3"
                        />
                        <p className="password">Olvidé mi contraseña</p>
                      </Row>
                    </Form.Group>

                    <hr />
                    <Button type="submit" className="mb-4 submit-login">
                      Iniciar sesion
                    </Button>
                  </Form>
                </div>
                <div className="col-6 offset-1 login-image">
                  <div className="content">
                    <span className="bold">
                      Beneficios para <br />
                    </span>
                    <h1 className="bold"> LOS EXPERTOS</h1>
                    <p>
                      <span className="bold">Conecte </span>
                      con sus colegas y pares en áreas puntuales de conocimiento
                      e investigación, encuentre sinergias y sume esfuerzos
                    </p>
                    <p>
                      <span className="bold">Comparta </span>
                      los resultados de investigacióny producción intelectual de
                      su institución con el mundo.
                    </p>
                    <h4 className="bold color-red">Y MUCHO MÁS </h4>
                  </div>
                </div>
              </Row>
            </div>
          </div>

          <Footer />
        </div>
      )}
    </>
  );
};
export default Login;
