<?php
namespace App\Http\Controllers\Auth;

use App\Http\Controllers\BaseController as BaseController;
use App\Models\PasswordReset;
use App\Models\User;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Str;

class PasswordResetController extends BaseController
{
    public function create(Request $request)
    {
        $request->validate([ 'email' => 'required|string|email' ]);
        $user = User::where('email', $request->email)->first();

        if (!$user){
            return response()->json([
                'code'=>500,
                'message'=> 'Este E-mail no se encuentra registrado, por favor verifiquelo'
            ],500);
            //return $this->sendError('No podemos encontrar un usuario con ese correo electronico.' );
        }

        $passwordReset = PasswordReset::updateOrCreate( ['email' => $user->email], [ 'email' => $user->email, 'token' => Str::random(60)]);

        if ($user && $passwordReset){
            $url = getenv('APP_URL_FRONT').'/password/reset?token='.$passwordReset['token'];

            $details = [
                'url' => $url,
                'name' => $user->name
            ];

            \Mail::to($user->email)->send(new \App\Mail\SendMailResetPass($details));
        }

        return $this->sendResponse([], 'Se ha enviado un correo para restablecer la contraseña.!');
    }

    public function find($token)
    {
        $passwordReset = PasswordReset::where('token', $token)->first();
        if (!$passwordReset){
            return $this->sendError('El token para resetear el password, es invalido.');
        }

        if (Carbon::parse($passwordReset->updated_at)->addMinutes(720)->isPast()) {
            $passwordReset->delete();
            return $this->sendError('El token para resetear el password, es invalido.');
        }
        return $this->sendResponse($passwordReset, 'valid token.');
    }

    public function reset(Request $request)
    {
        $request->validate([ 'email' => 'required|string|email', 'password' => 'required|string|confirmed', 'token' => 'required|string']);
        $passwordReset = PasswordReset::where([ ['token', $request->token], ['email', $request->email] ])->first();

        if (!$passwordReset){
            return $this->sendError('El token para resetear el password, es invalido.');
        }

        $user = User::where('email', $passwordReset->email)->first();
        if (!$user){
            return response()->json([
                'status'=>500,
                'message'=> 'Este E-mail no se encuentra registrado, por favor verifiquelo'
            ],500);
            //return $this->sendError('Este E-mail no se encuentra registrado, por favor verifiquelo');
        }

        $user->password = bcrypt($request->password);
        $user->save();
        $passwordReset->delete();

        //TODO: enviar correo de password cambiado
        //app('App\Http\Controllers\API\SendGridController') ->passwordResetSuccess($user);

        return $this->sendResponse($user, 'reset success.');
    }

    public function createAll(Request $request){
        $users = $request->ids;
        if(!empty($users) && isset($users)){
            $users = User::whereIn('id', $users)->get();
        }else{
            $users = User::where('active', 1)->get();
        }

        foreach ($users as $user) {
            $passwordReset = PasswordReset::updateOrCreate( ['email' => $user->email], [ 'email' => $user->email, 'token' => Str::random(60)]);

            if ($user && $passwordReset){
                $url = getenv('APP_URL_FRONT').'/password/reset?token='.$passwordReset['token'];

                $details = [
                    'url' => $url,
                    'name' => $user->name
                ];

                \Mail::to($user->email)->send(new \App\Mail\SendMailWelcomePass($details));
            }
        }
        return response()->json([
            'status' => 200,
            'response' => 'Mensajes de bienvenida enviados exitosamente.'
        ], 200);
    }
}
