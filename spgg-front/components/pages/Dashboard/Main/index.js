/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import Button from "@mui/material/Button";
//import Chart from "chart.js/auto";
//import { Line } from 'react-chartjs-2';
import Layout from 'components/Layout';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsExporting from 'highcharts/modules/exporting'
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from "@material-tailwind/react";
import { setGraficas } from 'utils/ApiFunctions'; 
import {
  Collapse
} from "@material-tailwind/react";
import { 
  ContentRight,
  ContentCard,
  ContentFilter,
  Table 
} from './styles';

if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts)
}

export default function Main({dataChart, dataCards, dataInfo}) {
  const [isOpen, setIsOpen] = useState(false);
  const [openRight, setOpenRight] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectOption, setSelectOption] = useState('month');
  const [selectNameOption, setSelectNameOption] = useState('Último Mes');
  
  const [total, setTotal] = useState(0);
  const [chartOptions, setChartOptions] = useState({});

  const [chartOptions2, setChartOptions2] = useState({});

  const [openCard1, setOpenCard1] = useState(false);
  const handleOpenCard1 = () => {
    setOpenCard1(true);
  };

  const handleCloseCard1 = () => {
    setOpenCard1(false);
  };

  const [openCard2, setOpenCard2] = useState(false);
  const handleOpenCard2 = () => {
    setOpenCard2(true);
  };

  const handleCloseCard2 = () => {
    setOpenCard2(false);
  };


  useEffect(() => {
    setTotal(dataChart?.total);
    setChartOptions(
      {
        title: {
          text: 'Data 1'
        },
        yAxis: {
            title: {
                text: 'Número'
            }
        },
        xAxis: {
          categories: dataChart,
        },
        series: [
          { 
            data: dataChart,
            name: 'Gráfica 1' 
          }
        ],
      }
    )

    setChartOptions2(
      {
        chart: {
            type: 'column'
        },
        title: {
          text: 'Data 2'
        },
        yAxis: {
            title: {
                text: 'Número'
            }
        },
        xAxis: {
          categories: dataChart?.informes_sanciones?.categories,
        },
        series: [
          { 
            data: dataChart?.informes_sanciones?.data_x,
            colorByPoint: true,
            name: 'Gráfica 2' 
          }
        ],
      }
    )
  }, [dataChart]);


  const toggleOpen = () => setOpen((cur) => !cur);

  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  const handleGrafica = (select_option) => {
    let cat = [];
    let data_x = [];
    let total = 0;
    try{
      const options = { 'periodo': select_option };
      setGraficas(options).then((res) => {
        setTotal(res.total);
        setChartOptions(
          {
            xAxis: {
              categories: res,
            },
            series: [{ data: res }],
          }
        );

        setChartOptions2(
          {
            xAxis: {
              categories: res,
            },
            series: [{ data: res }],
          }
        );
      }); 
    } catch (error) {
      console.error(error);
    }
  };

  

  const handleSelect = (e) => {
    let select_option = e.currentTarget.dataset.date;
    let select_name = e.currentTarget.dataset.title;
    setSelectOption(select_option);
    setSelectNameOption(select_name);
  };

  const handleSubmit = (event) =>{
    event.preventDefault();
    handleGrafica(selectOption);
  };

  return (
    <>
      <SwipeableDrawer
        anchor='right'
        open={openRight}
        onClose={closeDrawerRight}
        onOpen={openDrawerRight}
      >
        <div className="mb-6 flex items-center justify-between">
          <nav className="p-5">
              {/*<div className="content-setting d-flex justify-content-end">
                  <a className="close-sidr"><i className='bx bx-x-circle'></i></a>
              </div>*/}

              <form className="w-80" onSubmit={handleSubmit}  id="form-filters">
                <input type="hidden" name="periodo" value={selectOption}/>
                <div className="content-filter position-relative">
                    <span className="removef"></span>
                    <a className="filter-date" onClick={toggleOpen}>
                        Periodo
                        <span id="periodo-selected">{selectNameOption}</span> <i className='bx bxs-calendar-alt'></i>
                    </a>
                    <Collapse open={open}>
                      <ul className="periodo" id="collapse-periodo">
                          <li onClick={handleSelect.bind(this)} data-date="today" data-title="Hoy">Hoy</li>
                          <li onClick={handleSelect.bind(this)} data-date="week" data-title="Una semana">Una semana</li>
                          <li onClick={handleSelect.bind(this)} data-date="month" data-title="Último mes">Último mes</li>
                          <li onClick={handleSelect.bind(this)} data-date="year" data-title="Por Año">Año</li>
                          {/*<li onClick={handleSelect.bind(this)} data-date="custom" data-title="Perzonalizado">
                              <a href="#custom-date">Perzonalizado</a>
                              <div id="custom-date" class="p-2 mt-2">
                                  <div class="mb-1">
                                      <label for="fecha-i" class="form-label">Fecha Inicial</label>
                                      <input type="date" name="fecha_i" className="form-control" id="fecha-i"/>
                                  </div>
                                  <div class="mb-1">
                                      <label for="fecha-i" class="form-label">Fecha Final</label>
                                      <input type="date" name="fecha_f" className="form-control" id="fecha-f"/>
                                  </div>
                              </div>
                          </li>*/}
                      </ul>
                    </Collapse>
                </div>

                <button onSubmit={handleSelect} type="submit" className="btn-aply-filter mt-4">Aplicar Filtros</button>
                {/*<button id="reset-filter" className="btn-delete-filter">Borrar Filtros</button>*/}
              </form>
          </nav>
        </div>
      </SwipeableDrawer>
      <Layout>
        <ContentRight>
          <ContentCard>
            <div className="grid grid-cols-3 grid-rows-1 gap-8 justify-center text-center">
              <div className="bg-white p-5 rounded-lg drop-shadow-lg relative">
                <h3>0</h3>
                <span>Indicador 1</span>
              </div>
              <div className="bg-white p-5 rounded-lg drop-shadow-lg">
                <h3>0</h3>
                <span>Indicador 2</span>
              </div>
              <div className="bg-white p-5 rounded-lg drop-shadow-lg">
                <h3>0</h3>
                <span>Indicador 3</span>
              </div>
            </div>
          </ContentCard>
          <ContentFilter>
            <div className="grid grid-cols-2 items-center grid-rows-1 gap-8">
              <div><strong>Perido:</strong> {selectNameOption} </div>
              <div className="text-end">
                <button onClick={openDrawerRight} className="py-2 px-6 rounded-full">Filtrar  <i className='bx bx-slider-alt'></i></button>
              </div>
            </div>
          </ContentFilter>
          <div className="grid grid-cols-2 grid-rows-1 gap-8">
            <div className="bg-white py-8 px-5 rounded-[35px] drop-shadow-lg">
              {/*<div className="grid grid-cols-3 grid-rows-1 gap-8 text-center pt-2 pb-5">
                  <span className="date mt-2">
                      <a><i className='bx bx-info-circle'></i></a>
                  </span>
                  <label className="text-[25px] font-bold">{total}</label>
                  <span className="porcentaje"></span>
              </div>
              <hr/>*/}
              <HighchartsReact
                highcharts={Highcharts}
                options={chartOptions}
              />
            </div>
            <div className="bg-white py-8 px-5 rounded-[35px] drop-shadow-lg">
              <HighchartsReact
                highcharts={Highcharts}
                options={chartOptions2}
              />
            </div>
          </div>
        </ContentRight>
      </Layout>
    </>
  );
}
