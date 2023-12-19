/* eslint-disable no-shadow */
import Button from 'components/UI/Button';
import Input from 'components/UI/Input';
import React, { useState } from 'react';
import { postRecoverPassword } from 'utils/ApiFunctions';
import { LoginContent } from './data';
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
  Col_right,
  Col_left,
  Img
} from './styles';

export default function PasswordRequest(){
  const {
    title, description, submitButtonText, submitButtonTextLoading
  } = LoginContent;
  const hosts = constants.host;

  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  function validateFields() {
    let emailError = '';

    if (email === '') {
      emailError = 'No puede ser vacio.';
    }

    if (emailError) {
      setEmailError(emailError);

      return false;
    // eslint-disable-next-line no-else-return
    } else {
      setEmailError('');

      return true;
    }
  }

  function sendData() {
    setLoading(true);
    const isValid = validateFields();
    const data = {
      email
    };

    if (isValid) {
      try {
        postRecoverPassword(data).then((res) => {
          if (!res) {
            setTimeout(() => {
              setEmailError('');
              toast(res.message, 
                { 
                  hideProgressBar: true, 
                  autoClose: 5000, 
                  type: 'success',
                  position:'top-right',
                  onClose: () => {
                    
                    setLoading(false)
                  }
                }
              );
            }, 4000);
          } else {
            setTimeout(() => {
              toast(res.message, 
              { 
                hideProgressBar: true, 
                autoClose: 5000, 
                type: 'success',
                position:'top-right',
                onClose: () => {
                  
                  setLoading(false);
                }
              });
              //window.location.replace('/');
            }, 500);
          }
        }).catch((err) => {
          setLoading(false);
          toast(err.response.data.message, 
            { 
              hideProgressBar: true, 
              autoClose: 5000, 
              type: 'error',
              position:'top-right' 
            }
          );
          
        }).finally(() => {
          setLoading(false);
        });
      }catch (error) {
        
        throw new Error(error);
      }
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
            <DescriptionContainer>
              <Description className="text-black">{description}</Description>
            </DescriptionContainer>
            <Form>
              <Input
                type="text"
                placeholder="Correo Electrónico"
                label="Correo Electrónico"
                value={email}
                onChange={setEmail}
                alertText={emailError}
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
            <Link href={`${hosts}/`} passHref className="pt-6 inline-block">
              <i className="fa-solid fa-arrow-left text-[21px] pr-3"></i>
              Regresar
            </Link>
          </Container>
        </Col_right>
      </PageContainer>
    </>
  );
}
