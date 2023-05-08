/* eslint-disable array-callback-return */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable react/no-danger */
/* eslint-disable no-else-return */
/* eslint-disable react/prop-types */
import React from 'react';
import lazyLoader from 'components/LazyLoader';
import { PageBody, PageLayout } from 'components/Layout/PageStructure';

const NavBar = lazyLoader(() => import('components/Layout/Navbar'));
const Footer = lazyLoader(() => import('components/Layout/Footer'));
const LandingPage = lazyLoader(() => import('components/LandingPage'));

function PageContainer(props) {
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
