/* eslint-disable no-shadow */
import Button from "@mui/material/Button";
import Input from 'components/UI/Input';
import React, { useState } from 'react';
import { LoginContent } from './data';
import { userLogin } from 'utils/ApiFunctions';
import { ToastContainer } from 'react-toastify';
import Cookies from 'universal-cookie';
import {
  PageContainer,
  Col_left,
  Col_right,
  ContainerLogo,
  RecoverLabel,
  Container,
  Form,
  Title,
  TitleContainer,
  ButtonContainer
} from './styles';

const cookies = new Cookies();

export default function Login() {
  const {
    title, submitButtonText, submitButtonTextLoading
  } = LoginContent;

  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  function validateFields() {
    let emailError = '';
    let passwordError = '';

    if (email === '') {
      emailError = 'No puede ser vacio.';
    }

    if (password === '') {
      passwordError = 'No puede ser vacio.';
    }

    if (emailError || passwordError) {
      setEmailError(emailError);
      setPasswordError(passwordError);

      return false;
    } else {
      setEmailError('');
      setPasswordError('');

      return true;
    }
  }

  function sendData() {
    setLoading(true);
    const isValid = validateFields();
    const data = {
      email,
      password
    };

    if (isValid) {
      userLogin(data).then((res) => {
        if (!res) {
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        } else {
          setTimeout(() => {
            setLoading(false);
          }, 1000);

          const fifteen_days = new Date();
          const today = new Date();
          fifteen_days.setDate(today.getDate() + 15);
          cookies.set('user_token', `Bearer ${res.access_token}`, {
            path: '/'
          });
          const data = {
            id: res.id,
            name: res.name,
            last_name_1: res.last_name_1,
            last_name_2: res.last_name_2,
            email: res.email,
            role_id: res.role_id,
            role_name: res.role_name
            /*image: (user.image ? user.image : [])*/

          };
          const user_data = JSON.stringify(data);

          cookies.set('user_data', user_data, {
            path: '/'
          });

          setTimeout(() => {
            res.rol_id === 1 ? window.location.replace('/main')
              : window.location.replace('/main');
          }, 500);
        }
      });
    } else {
      setTimeout(() => {
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
            <Form>
              <Input
                type="text"
                placeholder="Correo Electrónico"
                label="Correo Electrónico"
                value={email}
                onChange={setEmail}
                alertText={emailError}
              />
              <Input
                type="password"
                password
                recover
                label="Contraseña"
                placeholder=""
                value={password}
                onChange={setPassword}
                alertText={passwordError}
              />
              <RecoverLabel
                className="label cursor-pointer hover:text-black"
                href='/password/recuperar'
              >
                ¿Olvido su contraseña?
              </RecoverLabel>
              <ButtonContainer>
                <Button
                  className="bg-black text-white px-3 hover:bg-slate-400 hover:text-black"
                  onClick={() => { sendData(); }}
                >
                Enviar
                </Button>
              </ButtonContainer>
            </Form>
          </Container>
        </Col_right>
      </PageContainer>
    </>
  );
}
