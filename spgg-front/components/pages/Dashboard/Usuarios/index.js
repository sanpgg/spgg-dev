/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { palette } from 'components/Layout/ThemeProvider';
import { DataGrid, GridColDef, GridValueGetterParams, esES } from '@mui/x-data-grid';
import FormControl from '@mui/material/FormControl';
import Button from "@mui/material/Button";
import constants from 'utils/constants';
import Layout from 'components/Layout';

export default function Usuarios({dataUsuarios}) {
  const router = useRouter();
  const hosts = constants.host;
  
  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'name', headerName: 'Nombre', width: 150},
    { field: 'last_name_1', headerName: 'Apellido Paterno', width: 150},
    { field: 'last_name_2', headerName: 'Apellido Materno', width: 150},
    { field: 'email', headerName: 'Correo', width: 200},
    {
      field: 'action',
      headerName: 'Acciones',
      width: 100,
      sortable: false,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        const onClickEdit = (e) => {
          const currentRow = params.row;
          console.log(currentRow);
          router.push(`/usuarios/${params.id}`);
          //return alert(JSON.stringify(currentRow, null, 4));
        };
        return (
          <>
            <a className="px-3 block cursor-pointer " onClick={onClickEdit}><i className="text-lg fa-regular fa-pen-to-square"></i></a>
            
          </>
        );
      },
    }
  ];
  const rows = dataUsuarios;

  const handleEvent = (params) => {
    //router.push(`/reportes/${params.id}`);
  };

  const handleNuevo = () => {
     router.push(`/usuarios/nuevo`);
  };
  return (
    <>
      <Layout>
        <div className="wrapper-seccion bg-white rounded-lg p-8">
          <h1 className="mb-5">Ver Usuarios</h1>
          <FormControl className="mt-3 end mb-6">
            <Button className="bg-indigo-500" variant="contained" color="secondary" onClick={handleNuevo}>
              Nuevo Usuario
            </Button>
          </FormControl>

          <div className="container mx-auto" style={{ height: 550, width: '100%' }}>
            <DataGrid
              localeText={esES.components.MuiDataGrid.defaultProps.localeText}
              onRowClick={handleEvent}
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
            />
          </div>
        </div>
      </Layout>
    </>
  );
}
