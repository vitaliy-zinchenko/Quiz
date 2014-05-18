<!doctype html>
<html ng-app="app">
<head>
    <script src="/app/bower_components/angular/angular.js"></script>
    <script src="/app/bower_components/angular-route/angular-route.js"></script>
    <script src="/app/bower_components/angular-resource/angular-resource.js"></script>
    <script src="/app/bower_components/ng-file-upload/angular-file-upload.js"></script>
    <script src="/app/bower_components/jquery/dist/jquery.js"></script>
    <script src="/app/bower_components/bootstrap/js/modal.js"></script>

    <script src="/app/js/app.js"></script>
    <script src="/app/js/adminka/controllers/controllers.js"></script>
    <script src="/app/js/adminka/directives/directives.js"></script>
    <script src="/app/js/quiz/controllers/controllers.js"></script>
    <script src="/app/js/quiz/services.js"></script>
    <script src="/app/js/quiz/directives/directives.js"></script>
    <script src="/app/js/common/directives/directives.js"></script>

    <link href="app/styles/style.css" rel="stylesheet">
    <link href="app/styles/bootstrap.css" rel="stylesheet">
</head>
<body>
<div global-message></div>
<div class="main-content">
    <div ng-view></div>
</div>

</body>
</html>