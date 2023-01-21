<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Stepup Academy</title>
        <link rel="icon" type="image/ico" href="img/logo.jpg" />
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <script src="https://kit.fontawesome.com/a076d05399.js"></script>

        @if(config('app.env') == 'local')
            <link rel="stylesheet" href="{{ mix('css/app.css') }}">
        @endif
        <script src="https://smtpjs.com/v3/smtp.js"></script>
    </head>
    <body>
        <div id="app">
            <v-app>
                <main-home></main-home>
            </v-app>
        </div>
        @if(config('app.env') == 'local')
            <script src="{{ mix('js/app.js') }}"></script>
        @endif
    </body>
</html>
