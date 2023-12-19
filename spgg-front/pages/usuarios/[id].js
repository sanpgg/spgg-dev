import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import UserForm from 'components/pages/Dashboard/Usuarios/UserForm';
import { getUsuario, getRolesAll, setUsuario } from 'utils/ApiFunctions'; 
import Layout from 'components/Layout';

const EditarUsuario = (props) => {
	const [usuarioData, setUsuarioData] = useState([]);
	const [AllRoles, setDataRoles] = useState([]);
	const router = useRouter();

  const handleSubmit = (formData) => {
    console.log('Usuarios editado:', id, formData);
    try{
      setUsuario(formData).then((res) => {
      if (res?.status == 200) {
        console.log(res);
        //notificacion("success", "El Usuario se guardo correctamente", "Mensaje");
      } else {
        //
      }
      }); 
    } catch (error) {
      console.error(error);
    }
    router.push('/usuarios');
  };

  useEffect(() => {
    async function getData() { 
      const fetcherUsuario = (id) => getUsuario(id);
      fetcherUsuario(props.id_usuario).then((res) => {
        if (res) {
          setUsuarioData(res.response);
        }
        console.log()
      });
      const AllRoles = await getRolesAll(); 
      setDataRoles(AllRoles);
    }
    getData();  
  }, [props]);
  console.log(usuarioData);
  return (
    <Layout>
      <div className="wrapper-seccion bg-white rounded-lg p-8">
        <h1>Editar Usuario</h1>
      	<UserForm onSubmit={handleSubmit} initialValues={usuarioData} dataRoles={AllRoles}/>
    	</div>
    </Layout>
  );
};

export async function getServerSideProps({query:{id}}) {
  try {
    const id_usuario = id;
    return {
      props: {
        id_usuario
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        id_usuario: 'error',
      },
    };
  }
}

export default EditarUsuario;