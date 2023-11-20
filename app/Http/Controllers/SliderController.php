<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Slider;
use App\Http\Requests\SliderRequest;

class SliderController extends Controller
{

    public function index()
    {
        $sliders = Slider::all();
        return view('sliders.index', compact('sliders'));
    }

    public function create()
    {
        return view('sliders.create');
    }

    public function store(SliderRequest $request)
    {

        
            $params=$request->all();

        $path = $request->file('fileUpload')->store('public/photos');

        $params['image'] = asset('storage/' . str_replace('public/', '', $path));


        Slider::create($params);

        return redirect()->route('sliders.index')->with('success', 'Slider added successfully.');
    } 
    
}