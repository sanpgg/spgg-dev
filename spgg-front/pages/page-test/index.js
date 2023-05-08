/* eslint-disable react/no-danger */
/* eslint-disable no-else-return */
/* eslint-disable react/prop-types */
import React from 'react';
import lazyLoader from 'components/LazyLoader';
import { PageContent } from './styles';
import { Container } from 'components/Layout/Grid/styles';

const NavBar = lazyLoader(() => import('components/Layout/Navbar'));
const Footer = lazyLoader(() => import('components/Layout/Footer'));
const LandingPage = lazyLoader(() => import('components/LandingPage'));

function PageContainer() {
  return (
      <>
      <NavBar/>
        <Container>
          <PageContent>
              Pagina de prueba
          </PageContent>
        </Container>
      <Footer/>
      </>
  );
}
export default PageContainer;

