import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import UserForm from 'components/pages/Dashboard/Usuarios/UserForm';
import { getRolesAll, createUsuario } from 'utils/ApiFunctions';
import Layout from 'components/Layout';

const NuevoUsuario = () => {
  const [AllRoles, setDataRoles] = useState([]);
  const router = useRouter();

  const handleSubmit = (formData) => {
    console.log('Nuevo usuario enviado:', formData);
    try{
      createUsuario(formData).then((res) => {
        if (res?.status == 200) {
          console.log(res);
        } else {
        }
      }); 
      router.push('/usuarios');
    } catch (error) {
      console.error(error);
    }
    
  };

  const User = {
    name: '',
    last_name_1: '',
    last_name_2: '',
    email: '',
    active: true,
    password: ''
  };

  useEffect(() => {
    async function getData() { 
      const AllRoles = await getRolesAll(); 
      setDataRoles(AllRoles);
    }
    getData();  
  }, []);

  return (
    <Layout>
      <div className="wrapper-seccion bg-white rounded-lg p-8">
        <h1>Nuevo Usuario</h1>
        <UserForm onSubmit={handleSubmit} initialValues={User} dataRoles={AllRoles}/>
      </div>
    </Layout>
  );
};

export default NuevoUsuario;