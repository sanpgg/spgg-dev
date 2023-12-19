<?php

namespace App\Http\Controllers;

use App\Models\Expediente;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use DateTime;
use Carbon\Carbon;


class EstadisticasController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Denunciante  $denunciante
     * @return \Illuminate\Http\Response
     */
    public function cardsDashboard(){
        $dataArray = array();
        $query = DB::table('expedientes')->count();
        $dataArray['recibidos'] = $query;

        $query2 = DB::table('expedientes')
                ->join('c_estado', 'expedientes.id_estado', '=', 'c_estado.id')
                ->whereNull('id_sancion')
                ->where('c_estado.id', 6) 
                ->count();
        $dataArray['pendientes_sancion'] = $query2;

        $query3 = DB::table('expedientes')
                ->join('c_estado', 'expedientes.id_estado', '=', 'c_estado.id')
                ->where('c_estado.id', 6) 
                ->count();
        $dataArray['resoluciones_dictadas'] = $query3;

        return $dataArray;
    }

    public function cardData(){
        $dataArray = array();
        $query2 = DB::table('expedientes')
                ->select('expedientes.id', 'n_expediente_administrativo', 'n_expediente_investigacion', 'fecha_recibido_informe', 'c_estado.nombre')
                ->join('c_estado', 'expedientes.id_estado', '=', 'c_estado.id')
                ->whereNull('id_sancion')
                ->where('c_estado.id', 6)->get();
        $dataArray['pendientes_sancion'] = $query2;

        $query3 = DB::table('expedientes')
                ->select('expedientes.id', 'n_expediente_administrativo', 'n_expediente_investigacion', 'fecha_recibido_informe', 'c_estado.nombre')
                ->join('c_estado', 'expedientes.id_estado', '=', 'c_estado.id')
                ->where('c_estado.id', 6)->get();
        $dataArray['resoluciones_dictadas'] = $query3;

        return $dataArray;
    }

    public function informe_Recibidos($fecha_i, $fecha_f){
        $informe_Recibidos = DB::select( DB::raw("select DATE(created_at) AS fecha, COUNT(expedientes.id) as total from expedientes where (expedientes.created_at between :starDate and :endDate) GROUP BY DATE(created_at) ORDER BY MIN(expedientes.created_at)"), array(
           'starDate' => $fecha_i." 00:00", 'endDate' => $fecha_f." 23:59"
        ));

        $categories = array();
        $data_x = array();
        $total = 0;
        for($i=0; $i<count($informe_Recibidos); $i++){
            array_push($categories, $informe_Recibidos[$i]->fecha); 
            array_push($data_x, $informe_Recibidos[$i]->total); 
            $total = $total + $informe_Recibidos[$i]->total;
        }

        $informe_recibidos = array(
            'categories' => $categories, 
            'data_x' => $data_x,
            'total' => $total
        );

        return $informe_recibidos;
    }

    public function informe_sanciones($fecha_i, $fecha_f){
        $informe_sanciones = DB::select( DB::raw("select sanciones.nombre, COUNT(expedientes.id) as total  from expedientes inner join sanciones on expedientes.id_sancion = sanciones.id where (expedientes.created_at between :starDate and :endDate) GROUP by sanciones.nombre"), array(
           'starDate' => $fecha_i." 00:00", 'endDate' => $fecha_f." 23:59"
        ));

        $categories = array();
        $data_x = array();
        $total = 0;
        for($i=0; $i<count($informe_sanciones); $i++){
            array_push($categories, $informe_sanciones[$i]->nombre); 
            array_push($data_x, $informe_sanciones[$i]->total); 
            $total = $total + $informe_sanciones[$i]->total;
        }

        $informe_sanciones = array(
            'categories' => $categories, 
            'data_x' => $data_x,
            'total' => $total
        );

        return $informe_sanciones;
    }

    public function graficas(Request $request){
        $dataArray = array();
        $periodo = $request->periodo;
        /*$from = '2023-09-01 00:00';
        $to = '2023-09-30 23:59';*/

        if(!empty($periodo) && isset($periodo)){
            if($periodo == 'today'){
                $today = Carbon::now();
                $from = $today->format('Y-m-d');
                $to = $today->format('Y-m-d');
            }
            if($periodo == 'week'){
                $today = Carbon::now();
                $startDate = $today->subDays(7);

                $today = Carbon::now();
                $from = $startDate->format('Y-m-d');
                $to = $today->format('Y-m-d');
            }
            if($periodo == 'month'){
                $today = Carbon::now();
                $startDate = $today->subMonth();

                $today = Carbon::now();
                $from = $startDate->format('Y-m-d');
                $to = $today->format('Y-m-d');
            }
            if($periodo == 'year'){
                $today = Carbon::now();
                $startDate = $today->subYear();

                $today = Carbon::now();
                $from = $startDate->format('Y-m-d');
                $to = $today->format('Y-m-d');
            }

            if($periodo == 'custom'){
                $inicial = Carbon::now($fecha_i);
                $final = Carbon::now($fecha_f);
                $diff = $final->diff($inicial)->format("%a");
                
                $diff = $diff * 2;
            }
            
        }

        //Informes recibidos
        $informe_recibidos = $this->informe_Recibidos($from, $to);

        //Informes Saciones
        $informes_sanciones = $this->informe_sanciones($periodo);

        /*$query = DB::table('expedientes')
        ->selectRaw('DATE(created_at) AS Fecha, COUNT(expedientes.id) as total')
        ->whereBetween('created_at', [ $from, $to ])
        ->groupByRaw('DATE(created_at)')
        ->orderByRaw('MIN(created_at)', 'DESC')
        ->get();*/

        

        $dataArray['informes_recibidos'] = $informe_recibidos;
        $dataArray['informes_sanciones'] = $informes_sanciones;
        return $dataArray;
    }
}
