/* eslint-disable no-else-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Main from 'components/pages/Dashboard/Main';
import { setGraficas, getCardsHome, getCardInfo } from 'utils/ApiFunctions'; 
function Home() {
  const [dataChart, setDataChart] = useState({});
  const [dataCards, setDataCards] = useState({});
  const [dataInfo, setDataInfo] = useState({});
  
  useEffect(() => {
    async function getData() { 
      const AllData = await setGraficas({ 'periodo': 'month' }); 
      setDataChart(AllData);

      const AllCards = await getCardsHome(); 
      setDataCards(AllCards);

      try {
        const fetchReporteFilter = (data) => getCardInfo(data); 
        fetchReporteFilter().then((res) => {
          if (res) {
            setDataInfo(res);
          }
        });
      } catch (error) {
        if (error.response) {
          console.error('Error de respuesta del servidor:', error.response.data);
        } else if (error.request) {
          console.error('No se recibió respuesta del servidor');
        } else {
          console.error('Error al realizar la solicitud:', error.message);
        }
      }
    }
    getData();
  }, []);
  
  return (
    <Main dataChart={dataChart} dataCards={dataCards} dataInfo={dataInfo}/>
  );
}

export default Home;
