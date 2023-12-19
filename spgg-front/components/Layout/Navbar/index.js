import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container } from '../Grid/styles';
import { loggedOut } from 'utils/ApiFunctions';
import constants from 'utils/constants';
import { useRouter } from 'next/router';
import Cookies from 'universal-cookie';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  CenterContent,
  ContactSection,
  LeftContent,
  LogoImage,
  NavBarContainer,
  RightContent,
  NavBarTop,
  NavBarBottom
} from './styles';

const cookies = new Cookies();

function NavBar({ props }) {
  const [userData, setUserData] = useState();
  const [open, setOpen] = React.useState(0);
  const router = useRouter();
  const pathname = usePathname();
  const hosts = constants.host;
  
  useEffect(() => {
    const user_data = cookies.get('user_data');
    setUserData(user_data);
  }, []);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const signOut = () => {
    loggedOut();
  };

  console.log(userData);
  return (
    <>
    <NavBarContainer>
      <div className="card-perfil">
        <div className="content-perfil flex">
          <Image width={300} height={100} src={`${hosts}/assets/images/img-perfil.png`}/>
          <div className="perfil">
            <span className="nombre">{userData?.name} {userData?.last_name_1}</span><br/>
            <span className="rol">{userData?.role_name}</span>
          </div>
        </div>
      </div>
      <List>
        <ListItem>
          <Link className="block w-full px-6 py-3" href="/main" key="inicio"><i className="fa-solid fa-chart-simple pr-2"></i>  Inicio</Link>
        </ListItem>
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 px-6 py-3">
              <Typography color="blue-gray" className="mr-auto font-normal">
                <i className="fa-solid fa-user pr-2"></i> Usuarios
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1 px-6">
            <List className="p-0">
              <ul>
                <li>
                  <Link className={`py-2 rounded-full  px-3 block ${pathname == '/usuarios' ? 'text-cyan-600' : 'text-black'} hover:bg-gray-900 hover:text-white`} href="/usuarios">Ver Usuarios</Link>
                </li>
                <li>
                  <Link className={`py-2 rounded-full  px-3 block ${pathname == '/usuarios/nuevo' ? 'text-cyan-600' : 'text-black'} hover:bg-gray-900 hover:text-white`} href="/usuarios/nuevo">Crear Usuario</Link>
                </li>
              </ul>
            </List>
          </AccordionBody>
        </Accordion>
        <ListItem>
          <Link className="block w-full px-6 py-3" href="#" onClick={signOut} key="salir"><i className="fa-solid fa-arrow-right-from-bracket pr-2"></i>  Salir</Link>
        </ListItem>
      </List>
    </NavBarContainer>  
    </>
  );
};

export default NavBar;
