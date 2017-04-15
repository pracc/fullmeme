<!DOCTYPE html>
<html>
<header>
    <?php include 'header.php'; ?>
</header>

<body ng-app="homepage" ng-controller="driversController" ng-init="recherche='illegal rare pepe'">
<div class="container">
    <div class="jumbotron">
        <nav>
            <a href="#!/home" class="btn btn-primary">Page d'accueil</a>
            <a href="#!/memeliste" class="btn btn-success">Page de contact</a>
            <a href="#!/connexion" class="btn btn-success">Connexion</a>
        </nav>
        <h1>{{title}}</h1>
        <div ng-view></div>
        <div class="footer">
            Développé par
            <div ng-repeat="auteur in auteursListe">
             {{auteur.identite.prenom}} {{auteur.identite.nom}}
            </div>
        </div>

    </div>

</div>
</body>

<script src="../js/angular.js"></script>
<script src="../controllers/controllers.js"></script>
<script src="../app.js"></script>
<script src="../js/angular-route.js"></script>
</html>