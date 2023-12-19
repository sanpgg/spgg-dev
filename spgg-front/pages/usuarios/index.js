/* eslint-disable no-else-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Usuarios from 'components/pages/Dashboard/Usuarios';
import { getUsuarios } from 'utils/ApiFunctions'; 

function UsuariosPage() {
  const [AllUsuarios, setDataUsuarios] = useState([]);

  useEffect(() => {
    async function getData() { 
      const AllUsuarios = await getUsuarios(); 
      setDataUsuarios(AllUsuarios);
    }
    getData();
  }, []);

  return (
    <Usuarios dataUsuarios={AllUsuarios} />
  );
}

export default UsuariosPage;

