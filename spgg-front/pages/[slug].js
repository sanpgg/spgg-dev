/* eslint-disable max-len */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable react/no-danger */
/* eslint-disable no-else-return */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import ErrorPage from 'next/error';
import { PageBody, PageLayout } from 'components/Layout/PageStructure';
import lazyLoader from 'components/LazyLoader';

const NavBar = lazyLoader(() => import('components/Layout/Navbar'));
const Footer = lazyLoader(() => import('components/Layout/Footer'));
const LandingPage = lazyLoader(() => import('components/LandingPage'));

function PageContainer({errorStatus}) {
  if (errorStatus) {
    return <ErrorPage statusCode={errorStatus} />;
  }

  return (
    <PageBody>
      <NavBar/>
      <PageLayout>
        <LandingPage/>
      </PageLayout>
      <Footer/>
    </PageBody>
  );
}
export default PageContainer;
