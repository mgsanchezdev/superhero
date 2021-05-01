import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../validations/auth';
import { useAuth } from '../../context/auth';
import { errorAlert, messageAlert } from '../../utils/alerts';
import './auth.css';

export const Auth = () => {
  const { login } = useAuth();
  const history = useHistory();
  
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const handleLogin = async ({
    loginEmail: email,
    loginPassword: password,
  }) => {
    const url = 'http://challenge-react.alkemy.org/';
    const data = {
      // eslint-disable-next-line object-shorthand
      email: email,
      // eslint-disable-next-line object-shorthand
      password: password,
    };

    fetch(url, {
      method: 'POST', 
      body: JSON.stringify(data), 
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .catch((error) => errorAlert(error))
      .then((response) => {
        reset();
        if (response.error !== 'Please provide valid email and password') {
          messageAlert('success', 'Acabas de iniciar sesión').then(() => {
            login(response);
            history.push('/home');
          });
        } else {
          messageAlert('error', 'Usuario o cantraseña incorreta');
        }
      });
  };
  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit(handleLogin)}>
        <h3 className="form-title">Iniciar Sesión</h3>

        <label htmlFor="loginEmail" className="form-label">
          Correo Electronico
          <input
            type="email"
            id="loginEmail"
            name="loginEmail"
            className="form-input"
            ref={register}
          />
        </label>
        <div className="form-error">{errors.loginEmail?.message}</div>

        <label htmlFor="loginPassword" className="form-label">
          Contraseña{' '}
          <input
            type="password"
            id="loginPassword"
            name="loginPassword"
            className="form-input"
            ref={register}
          />
        </label>
        <div className="form-error">{errors.loginPassword?.message}</div>

        <button type="submit" className="button form-button">
          Ingresar
        </button>
      </form>
    </div>
  );
};
