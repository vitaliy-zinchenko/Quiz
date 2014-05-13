<!doctype html>
<html ng-app="myApp">
<head>
    <script src="/libs/angular.js"></script>
    <script src="/libs/angular-route.js"></script>
    <script src="/libs/angular-resource.js"></script>
    <script src="/libs/angular-file-upload.js"></script>
    <%--<script src="/app/bower_components/jquery/dist/jquery.js"></script>--%>

    <script src="/libs/jsdifflib.js"></script>

    <script src="/src/app.js"></script>
    <script src="/src/adminka/controllers.js"></script>
    <script src="/src/adminka/directives.js"></script>
    <script src="/src/controllers.js"></script>
    <script src="/src/services.js"></script>
    <script src="/src/directives.js"></script>

    <link href="styles/style.css" rel="stylesheet">
    <link href="styles/bootstrap.css" rel="stylesheet">
</head>
<body>
<div global-message></div>
<div class="main-content">
    <div ng-view></div>
</div>

</body>
</html>