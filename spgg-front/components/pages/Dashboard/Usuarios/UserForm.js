import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Switch from '@mui/material/Switch';
import { 
  SelectType
} from './styles';

const UserForm = ({ onSubmit, initialValues, dataRoles }) => {
  const [formData, setFormData] = useState(initialValues);
  const [checked, setChecked] = useState(true);

  const router = useRouter();


  useEffect(() => {
    setFormData(initialValues);
  }, [initialValues]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };
  const handleBack =() => {
    router.push(`/usuarios/`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box className="mt-8 grid grid-cols-3 gap-8">
        <input type="hidden" id="id" name="id" value={formData?.id} />
          <TextField
                id="name"
                name="name"
                multiline
                rows={1}
                defaultValue={formData?.name}
                placeholder="Nombre"
                fullWidth
                label="Nombre"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChange}
            />
          <TextField
              id="last_name_1"
              name="last_name_1"
              multiline
              rows={1}
              defaultValue={formData?.last_name_1}
              placeholder="Apellido Paterno"
              fullWidth
              label="Apellido Paterno"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleChange}
          />
          <TextField
              id="last_name_2"
              name="last_name_2"
              multiline
              rows={1}
              defaultValue={formData?.last_name_2}
              placeholder="Apellido Materno"
              fullWidth
              label="Apellido Materno"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleChange}
          />
          <TextField
              id="email"
              name="email"
              multiline
              rows={1}
              defaultValue={formData?.email}
              placeholder="Correo electrónico"
              fullWidth
              label="Correo electrónico"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleChange}
          />
          <TextField
              id="password"
              name="password"
              multiline
              rows={1}
              defaultValue={formData?.password}
              placeholder="Password"
              fullWidth
              label="Password"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleChange}
          />

          <FormControl fullWidth className="">
            <SelectType required className="select-type w-full m-1" id="role_id" name="role_id" onChange={handleChange}>
              <option value="">
                Seleccione un usuario
              </option>);
              {dataRoles?.map((item) => {
                if (item.id == formData?.role_id){
                  return(
                  <option value={item.id} key={item.id} selected>
                    {item.name}
                  </option>);
                }else{
                  return(
                  <option value={item.id} key={item.id}>
                    {item.name}
                  </option>);
                }
              })}
            </SelectType>
          </FormControl>
      </Box>
        
      <Box className="mt-8 mb-8 grid grid-cols-2 gap-8">
        <Button className="bg-indigo-500" variant="contained" color="secondary" onClick={handleBack} exact="" key="backto">
          Regresar
        </Button>
        <Button className="bg-indigo-500" type="submit" variant="contained" color="secondary" exact="" key="saveto">
          Guardar Usuario
        </Button>
      </Box>
    </form>
  );
};

export default UserForm;
