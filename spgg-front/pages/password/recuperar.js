import React from 'react';

import Head from 'next/head';
import { CenterPageContainer } from 'components/Layout/Grid/styles';
import PasswordRequest from 'components/pages/Login/PasswordRequest';

export default function Home() {
  return (
    <CenterPageContainer>
      <Head>
        <title>Cms - Recuperar Password</title>
        <meta name="description" content="Iniciar Sesion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PasswordRequest />
    </CenterPageContainer>
  );
}
