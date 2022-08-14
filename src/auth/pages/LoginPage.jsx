import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import { login } from '../../store/auth/authSlice';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const iniciarSesion = () => {
    console.log('login');
    dispatch(login());
    console.log('finish login');
  };

  return (
    <div className="mx-auto col-3 border border-secondary border-2 p-3 mt-5">
      <h1>LoginPage</h1>

      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="email" placeholder="Correo" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>
      </Form>

      <Button className="mx-auto" onClick={iniciarSesion}>
        Iniciar Sesión
      </Button>
    </div>
  );
};
