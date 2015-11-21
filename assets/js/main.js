/**
 * Created by ashwin on 4/20/15.
 */
/**
 * Main AngularJS Web Application
 */
var app = angular.module('mywebsiteApp', [
    'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
        // Home
        .when("/", {templateUrl: "assets/parts/home.html", controller: "PageCtrl"})
        // Pages
        .when("/research", {templateUrl: "assets/parts/research.html", controller: "PageCtrl"})
        .when("/contact", {templateUrl: "assets/parts/contact.html", controller: "PageCtrl"})
        .when("/jobprofile", {templateUrl: "assets/parts/jobprofile.html", controller: "PageCtrl"})
        .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});

}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
    console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
    // Activates the Carousel
    $('.carousel').carousel({
        interval: 5000
    });

    // Activates Tooltips for Social Links
    $('.tooltip-social').tooltip({
        selector: "a[data-toggle=tooltip]"
    });
});
