<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Role;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public $table= 'Users';
    public $module= 'Catálogo de usuarios';

    /**
     * Inicio de sesión y creación de token
     */
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email',
            'password' => 'required|string',
            'remember_me' => 'boolean'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'response' => $validator->messages()
            ], 422);
        } else {

            $user = User::where([['email',$request->email],['active','=',true]])->first();
            if($user) {
                $credentials = request(['email', 'password']);

                if (!Auth::attempt($credentials))
                    return response()->json([
                        'message' => 'No autorizado'
                    ], 401);

                $user = $request->user();
                $tokenResult = $user->createToken('Personal Access Token');

                $token = $tokenResult->token;
                if ($request->remember_me)
                    $token->expires_at = Carbon::now()->addWeeks(1);
                $token->save();
            }else{
                return response()->json([
                    'message' => 'Usuario no encontrado'
                ], 404);
            }
            $roles = Role::where('id',$user->role_id)->first();

            return response()->json([
                'id' => $user->id,
                'name' => $user->name,
                'last_name_1' => $user->last_name_1,
                'last_name_2' => $user->last_name_2,
                'email' => $user->email,
                'role_id' => $user->role_id,
                'role_name' => $roles->name,
                'access_token' => $tokenResult->accessToken,
                'token_type' => 'Bearer',
                'expires_at' => Carbon::parse($token->expires_at)->toDateTimeString()
            ]);
        }
    }

    /**
     * Cierre de sesión (borrar el token)
     */
    public function logout(Request $request)
    {
        $request->user()->token()->revoke();

        return response()->json([
            'message' => 'Sesión cerrada correctamente'
        ]);
    }

    public function index(){
        $data = array();
        $usuarios = User::all()->sortDesc();
        foreach ($usuarios  as $usuario) {
            $properties = array(
                "id" => $usuario->id,
                "name" => $usuario->name,
                "last_name_1" => $usuario->last_name_1,
                "last_name_2" => $usuario->last_name_2,
                "email" => $usuario->email,
                "active" => $usuario->active
            );
            array_push($data, $properties);
        }
        return response()->json($data);
    }


    public function show(Request $request){
        $id=$request->id;
        $user = User::find($id);
        if($user){
            return response()->json([
                'status'=>200,
                'response'=> $user
            ],200);
        }else{
            return response()->json([
                'status'=>404,
                'response'=> 'Usuario no encontrado'
            ],404);
        }
    }

    public function store(Request $request){
        $tmpPassword = $request->get('password');

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'last_name_1' => 'required',
            'last_name_2' => 'required',
            'email' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'response' => $validator->messages()
            ], 422);
        } else {

            $user = User::create([
                'name' => $request->get('name'),
                'last_name_1' => $request->get('last_name_1'),
                'last_name_2' => $request->get('last_name_2'),
                'email' => $request->get('email'),
                'password' => bcrypt($tmpPassword),
                'active' => $request->get('active'),
                'role_id' => $request->get('role_id')
            ]);

            if ($user) {
                return response()->json([
                    'status' => 200,
                    'response' => 'Usuario creado correctamente'
                ], 200);
            } else {
                return response()->json([
                    'status' => 500,
                    'response' => 'Error al crear al Usuario'
                ], 500);
            }
        }
    }

    public function update(Request $request){
        $id = $request->id;
        $validator= Validator::make($request->all(),[
            'name' => 'required',
            'email' => 'required|string|email'
        ]);

        if($validator->fails()){
            return response()->json([
                'status'=>422,
                'response'=>$validator->messages()
            ],422);
        }else{
            $user = User::find($id);
            if($user) {

                $userAuth = Auth::user();
                $userAuth = request()->user();
                $id_logged_user =  $userAuth->id;
                $tmpPassword = $request->get('password');

                $user->update([
                    'name' => $request->name,
                    'last_name_1' => $request->last_name_1,
                    'last_name_2' => $request->last_name_2,
                    'active' => $request->active,
                    'password' => bcrypt($tmpPassword),
                    'role_id' => $request->role_id
                ]);

                if ($user) {
                    return response()->json([
                        'status' => 200,
                        'response' => 'Usuario actualizado correctamente'
                    ], 200);
                } else {
                    return response()->json([
                        'status' => 500,
                        'response' => 'Error al actualizar Usuario'
                    ], 500);
                }
            }else{
                return response()->json([
                    'status' => 404,
                    'response' => 'No se encontró el registro de Usuario'
                ], 404);
            }
        }
    }


    public function destroy(Request $request){
        $id = $request->id;
        $user = User::find($id);
        if($user){

            $userAuth = Auth::user();
            $userAuth = request()->user();
            $id_logged_user =  $userAuth->id;

            $user->update([
                'active' => false
            ]);

            return response()->json([
                'status'=>200,
                'response'=>'Usuario eliminado correctamente',
                'response_logger'=>$response_logger
            ],200);
        }else{
            return response()->json([
                'status'=>404,
                'response'=>'Usuario no encontrado'
            ],404);
        }
    }
}