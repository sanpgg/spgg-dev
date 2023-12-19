/* eslint-disable arrow-body-style */
import constants from 'utils/constants';
import axios from 'axios';
import https from 'https';
import { notify } from 'components/Layout/ThemeProvider';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const user_token = cookies.get('user_token');

axios.defaults.httpsAgent = new https.Agent({
  rejectUnauthorized: false
});

function responseSuccess(res) {
  const { message } = res.data;
  notify(message, 'success');
}

function responseError(res) {
  if (res.data) {
    const { message } = res.data;
    notify(message, 'error');
  } else {
    notify('Error al procesar la petición.', 'error');
  }
}

// USER
export const userLogin = (data) => axios.post(
  `${constants.api}/auth/login`,
  data,
  {
    headers: { 'Content-Type': 'application/json', 'X-Requested-With' : 'XMLHttpRequest' } 
  }
)
  .then((res) => {
    responseSuccess(res);
    return res.data;
  })
  .catch((error) => {
    console.log(error.response);
    responseError(error);
  });


//logout
export const loggedOut = () => axios
  .get(`${constants.api}/auth/logout`, {
    headers: { Authorization: `${user_token}` }
  }).then((res) => {
    window.location.replace(`${constants.host}`);
  }).catch((err) => {
    console.log(err);
    window.location.replace(`${constants.host}`);
});

export const postRecoverPassword = (data) => axios.post(
  `${constants.api}/password/create`,
  data,
  {
    headers: { 'Content-Type': 'application/json' }
  }
  )
  .then((res) => {
    responseSuccess(res);
    return res.data.data;
  });
  

export const getMailFromToken = (token) => axios
  .get(`${constants.api}/password/find/${token}`, {
    headers: { 'Content-Type': 'application/json' }
  })
  .then((res) => {
    // responseSuccess(res);
    return res.data;
  })
  .catch((err) => {
    console.log(err);
  });

export const newPassword = (data) => axios.post(
  `${constants.api}/password/reset`,
  data,
  {
    headers: { 'Content-Type': 'application/json' }
  }
)
  .then((res) => {
    responseSuccess(res);
    return res.data.data;
  })
  .catch((err) => {
    responseError(err);
  });


// Usuarios
export const getUsuarios = (data) => axios.get(
  `${constants.api}/auth/usuarios`, {
    params: data,
    headers: { Authorization: `${user_token}`, 'Content-Type': 'application/json', 'X-Requested-With' : 'XMLHttpRequest' } 
  }
).then((res) => {
  return res.data;
}).catch((err) => {
  console.log(err);
});

//Show usuario single 
export const getUsuario = (id) => axios.get(
  `${constants.api}/auth/usuarios/${id}`,
{
  headers: { 
    'Authorization': `${user_token}`, 
    'Content-Type': 'application/json',
    'withCredentials': true
  }
}).then((res) => {
  responseSuccess(res);
  return res.data;
}).catch((err) => {
  console.log(err);
  responseError(err);
});

// Get all roles on Usuario
export const getRolesAll = async () => {
  const roles = await axios.get(
    `${constants.api}/auth/roles`,
    { headers: { Authorization: `${user_token}` } }
  ).then(({ data }) => data);
  return roles;
};

//Editar usuario
export const setUsuario = (data) => axios.put(
  `${constants.api}/auth/usuarios`, data, {
      headers: { 
        'Authorization': `${user_token}`
      }
}).then((res) => {
  responseSuccess(res);
  return res.data;
});

//crear usuario
export const createUsuario = (data) => axios.post(
  `${constants.api}/auth/usuarios`, data, {
      headers: { 
        'Authorization': `${user_token}`
      }
}).then((res) => {
  responseSuccess(res);
  return res.data;
}).catch((err) => {
  responseError(err);
});

//Estadisticas
export const getCardsHome = () => axios.get(
  `${constants.api}/auth/estadisticas`,
{
  headers: { 
    'Authorization': `${user_token}`, 
    'Content-Type': 'application/json',
    'withCredentials': true
  }
}).then((res) => {
  responseSuccess(res);
  return res.data;
}).catch((err) => {
  console.log(err);
  responseError(err);
});

export const getCardInfo = () => axios.get(
  `${constants.api}/auth/dataCard`,
{
  headers: { 
    'Authorization': `${user_token}`, 
    'Content-Type': 'application/json',
    'withCredentials': true
  }
}).then((res) => {
  responseSuccess(res);
  return res.data;
}).catch((err) => {
  console.log(err);
  responseError(err);
});

export const setGraficas = (data) => axios.post(
  `${constants.api}/auth/graficas`, data, {
      headers: { Authorization: `${user_token}`}
}).then((res) => {
  responseSuccess(res);
  return res.data;
}).catch((err) => {
  responseError(err);
});

