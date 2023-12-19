/* eslint-disable no-shadow */
import Button from 'components/UI/Button';
import Input from 'components/UI/Input';
import React, { useState, useEffect } from 'react';
import { newPassword, userLogin } from 'utils/ApiFunctions';
import { LoginContent } from './data';
import Cookies from 'universal-cookie';
import constants from 'utils/constants';
import Link from "next/link";
import { palette } from 'components/Layout/ThemeProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  PageContainer,
  ContainerLogo,
  Container,
  Form,
  Title,
  TitleContainer,
  ButtonContainer,
  DescriptionContainer,
  Description,
  EmailContainer,
  Col_left,
  Col_right,
  Img
} from './styles';
import PropTypes from 'prop-types';

const cookies = new Cookies();

export default function PasswordReset({ email, token }) {
  const {
    title, description, submitButtonText, submitButtonTextLoading
  } = LoginContent;
  const hosts = constants.host;

  const [loading, setLoading] = useState(false);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  useEffect(() => {
    setPasswordsMatch(password === confirmPassword);
  }, [password, confirmPassword]);

  function validateFields() {
    let passwordError = '';
    let confirmPasswordError = '';

    if (password === '') {
      passwordError = 'No puede ser vacio.';
    }

    if (confirmPassword === '') {
      confirmPasswordError = 'No puede ser vacio.';
    }

    /*if (confirmPasswordError || passwordError) {
      setPasswordError(passwordError);
      setConfirmPasswordError(confirmPasswordError);

      return false;
    // eslint-disable-next-line no-else-return
    } else {
      setPasswordError('');
      setConfirmPasswordError('');

      return true;
    }*/
  }
  


  function sendData() {
    setLoading(true);
    const isValid = validateFields();
    const data = {
      email,
      password,
      password_confirmation: password,
      token
    };
    if (isValid || passwordsMatch) {
      newPassword(data).then((res) => {
        if (!res) {
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        } else {
          setTimeout(() => {
            setLoading(false);
          }, 1000);
          userLogin(data).then((res) => {
            if (res) {
              const fifteen_days = new Date();
              const today = new Date();
              fifteen_days.setDate(today.getDate() + 15);
              cookies.set('user_token', `Bearer ${res.access_token}`, {
                path: constants.path
              });
              const data = {
                id: res.id,
                name: res.name,
                last_name_1: res.last_name_1,
                last_name_2: res.last_name_2,
                email: res.email,
                role_id: res.role_id,
                role_name: res.role_name,
                id_secretaria: res.secretaria_id,
                id_direccion: res.direccion_id,
                permiso_descarga: res.permiso_descarga,
                /*image: (user.image ? user.image : [])*/

              };
              const user_data = JSON.stringify(data);

              cookies.set('user_data', user_data, {
                path: constants.path
              });

              setTimeout(() => {
                res.role_id === 1 ? window.location.replace(`${constants.host}/main`)
                  : window.location.replace(`${constants.host}/main`);
              }, 500);
            }
          });
        }
      });
    }else {
      setTimeout(() => {
        toast('Por favor verifique que la contraseña coicida', 
          { 
            hideProgressBar: true, 
            autoClose: 5000, 
            type: 'error',
            position:'top-right'
          }
        );
        setLoading(false);
      }, 1000);
    }
  }

  return (
    <>
      <ToastContainer/>
      <PageContainer>
        <Col_right className="flex items-center justify-center">
          <Container>
            <TitleContainer>
              <Title>
                {title}
              </Title>
            </TitleContainer>
            <DescriptionContainer>
              <Description className="text-black">
                {description}
                <EmailContainer>
                  {email || ''}
                </EmailContainer>
              </Description>
            </DescriptionContainer>
            
            <Form>
              <Input
                type="password"
                password
                label="Nueva Contraseña"
                placeholder=""
                value={password}
                onChange={setPassword}
                alertText={passwordError}
              />
              <Input
                type="password"
                password
                label="Confirmar Contraseña"
                placeholder=""
                value={confirmPassword}
                onChange={setConfirmPassword}
                alertText={confirmPasswordError}
              />
              <ButtonContainer>
                <Button
                  className="bg-black rounded-lg text-white"
                  onClick={() => { sendData(); }}
                  loading={loading}
                  label={loading ? submitButtonTextLoading : submitButtonText}
                />
              </ButtonContainer>
            </Form>
            <Link href={`${hosts}`} passHref className="pt-6 inline-block">
              <i className="fa-solid fa-arrow-left text-[21px] pr-3"></i>
              Iniciar sesión
            </Link>
          </Container>
        </Col_right>
      </PageContainer>
    </>
  );
}

PasswordReset.propTypes = {
  /**
   * Email value
   */
  email: PropTypes.string,
  /**
   * Token value
   */
  token: PropTypes.string
};
