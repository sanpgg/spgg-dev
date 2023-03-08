/* eslint-disable no-shadow */
import constants from 'utils/constants';
import axios from 'axios';
import https from 'https';

axios.defaults.httpsAgent = new https.Agent({
  rejectUnauthorized: false
});

export const getNavBar = async () => {
  const route = await axios.get(
    `${constants.api}`,
    { headers: { 'Content-Type': 'application/json' } }
  ).then(({ data }) => data.data);
  return route;
};

export const getFooter = async () => {
  const route = await axios.get(
    `${constants.api}`,
    { headers: { 'Content-Type': 'application/json' } }
  ).then(({ data }) => data.data);
  return route;
};