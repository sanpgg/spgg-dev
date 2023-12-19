import React from 'react';

import Head from 'next/head';
import { CenterPageContainer } from 'components/Layout/Grid/styles';
import PasswordReset from 'components/pages/Login/PasswordReset';
import { getMailFromToken } from 'utils/ApiFunctions';
import PropTypes from 'prop-types';

function Home({ token, email }) {
  // console.log(token, 'token');
  // console.log(email, 'email');
  return (
    <CenterPageContainer>
      <Head>
        <title>Cms - Cambiar password</title>
        <meta name="description" content="Iniciar Sesion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PasswordReset
        email={email}
        token={token}
      />
    </CenterPageContainer>
  );
}

Home.propTypes = {
  /**
   * Email value
   */
  email: PropTypes.string,
  /**
   * Token value
   */
  token: PropTypes.string
};

const fetcherMail = (token) => getMailFromToken(token);

export async function getServerSideProps(ctx) {
  const { token } = ctx.query;

  const res = await fetcherMail(token);
  if (!res?.data) {
    return {
      redirect: {
        permanent: false,
        destination: '/'
      }
    };
  }

  const { email } = res.data;

  return {
    props: {
      token,
      email
    }
  };
}

export default Home;
