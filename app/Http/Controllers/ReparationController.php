<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Reparation;

class ReparationController extends Controller
{

    public function index(Request $request)
    {
        // Obtener todas las reparaciones con relaciones de usuario
        $reparations = Reparation::with('user')->get();

        // Devolver la lista de reparaciones en formato JSON
        return response()->json(['reparations' => $reparations]);
    }
    public function search($brand = null, $model = null, $fail = null)
    {
        if($brand && $model && $fail){
            $reparations = Reparation::with('user')
            ->where('brand', 'like', '%' . $brand . '%')
            ->where('model', 'like', '%' . $model . '%')
            ->where('fail', 'like', '%' . $fail . '%')
            ->get();
        }else {
            $reparations = Reparation::with('user')->get();
        }

        // Devolver la lista de reparaciones en formato JSON
        return response()->json(['reparations' => $reparations]);
    }
    public function searchUser($id)
    {
        
        $reparations = Reparation::with('user')
        ->where('user_id', '=',  $id)
        ->get();
       

        // Devolver la lista de reparaciones en formato JSON
        return response()->json(['reparations' => $reparations]);
    }

    public function create(Request $request){
        
        $imgStatePath = null;
        $imgObservationPath = null;
        $imgSolutionPath = null;

        if ($request->hasFile('img_state')) {
            $imgStatePath = $request->file('img_state')->store('reparation_images');
        }

        if ($request->hasFile('img_observation')) {
            $imgObservationPath = $request->file('img_observation')->store('reparation_images');
        }

        if ($request->hasFile('img_solution')) {
            $imgSolutionPath = $request->file('img_solution')->store('reparation_images');
        }
        // Crear una nueva reparación en la base de datos
        $reparation = Reparation::create([
            'state' => $request->input('state'),
            'img_state' => $imgStatePath,
            'observation' => $request->input('observation'),
            'img_observation' => $imgObservationPath,
            'analysis' => $request->input('analysis'),
            'solution' => $request->input('solution'),
            'img_solution' => $imgSolutionPath,
            'user_id' => $request->input('user_id'),
            'brand' => $request->input('brand'),
            'model' => $request->input('model'),
            'fail' => $request->input('fail'),
            'user_id' => $request->input('userId')
        ]);

        $reparation->save();

        // Puedes devolver una respuesta de éxito
        return response()->json(['message' => 'Reparation created successfully'], 201);
    }

    public function show($id)
    {
        // Obtener todas las reparaciones con relaciones de usuario
        $reparations = Reparation::where('id', $id)->with('user')->first();

        // Devolver la lista de reparaciones en formato JSON
        return response()->json(['reparation' => $reparations]);
    }
}
