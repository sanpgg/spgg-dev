import React from 'react';
import Head from 'next/head';
import Login from 'components/pages/Login';

export default function Home() {
  return (
  	<>
			<Head>
				<title>Cms - Login</title>
				<meta name="description" content="Iniciar Sesion" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
		  <Login/>
    </>
  );
}
