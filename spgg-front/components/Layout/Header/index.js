import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import constants from 'utils/constants';
import { 
  WrapperHeader, 
  PageTitle,
  ContentLogo 
} from './styles';

function Header({
  title,
  iconName,
  className,
  logs
}) {
  const [open, openModal] = useState(false);
  const hosts = constants.host;
  return (
    <>
      <WrapperHeader className="grid grid-cols-3 grid-rows-1 gap-3 items-center p-4 border-b border-gray-200">
        <PageTitle>
          SAN PEDRO GARZA GARCIA
        </PageTitle>
        <ContentLogo className="text-center">
          <Link className="inline-block" target="_parent" href="/main">
            <Image width={300} height={100} src={`${hosts}/assets/images/logo.svg`} alt="SPGG"/>
          </Link>
        </ContentLogo>
        <div className="text-right relative">
          <i className="fa-solid fa-magnifying-glass absolute rounded-full top-[2px] end-[3px] bg-zinc-100 p-2"></i>
          <input type="text" className="border rounded-full px-4 h-9 w-3/5 text-center" placeholder="Buscar por:"/>
        </div>
      </WrapperHeader>
    </>
  );
}

Header.propTypes = {
  /**
   * Wich style the PageHeading is going to be?
   */
};

Header.defaultProps = {
};

export default Header;
