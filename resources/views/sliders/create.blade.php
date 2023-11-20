<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="{{asset('assets/css/styles.css')}}" />

    </head>
    <body class="antialiased">
    <h2>Slider</h2>
    
<!-- Upload  -->
<form action="{{ route('sliders.store') }}" method="POST" enctype="multipart/form-data" id="file-upload-form" class="uploader">
@csrf

  <input id="file-upload" type="file" name="fileUpload" accept="image/*" />

  <label for="file-upload" id="file-drag">
    <img id="file-image" src="#" alt="Preview" class="hidden">
    <div id="start">
      <i class="fa fa-download" aria-hidden="true"></i>
      <div>Select a file or drag here</div>
      <div id="notimage" class="hidden">Please select an image</div>
      <span id="file-upload-btn" class="btn btn-primary">Select a file</span>
    </div>
    <div id="response" class="hidden">
      <div id="messages"></div>
      <progress class="progress" id="file-progress" value="0">
        <span>0</span>%
      </progress>
    </div>
  </label>
  <h3>  Header:</h3>
<input type="text" name="header"/>

<h3>  Body:</h3>
<input type="text" name="body"/>

<h3>  button:</h3>
<input type="text" name="button"/>
<br>
  <button type="submit" class="btn btn-primary">save</button>
</form>
<script src="{{ asset('assets/js/main.js') }}"></script>

    </body>
</html>
