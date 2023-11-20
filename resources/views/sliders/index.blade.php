<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Slider List</title>
</head>
<body>

    <h1>Slider List</h1>
    <a href="{{ route('sliders.create')}}">Add Slider</a>
    <table border="1">
        <thead>
            <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Header</th>
                <th>Body</th>
                <th>Button</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($sliders as $slider)
                <tr>
                    <td>{{ $slider->id }}</td>
                    <td><img src="{{ $slider->image }}" alt="Slider Image" style="max-width: 100px;"></td>
                    <td>{{ $slider->header }}</td>
                    <td>{{ $slider->body }}</td>
                    <td>{{ $slider->button }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>

</body>
</html>