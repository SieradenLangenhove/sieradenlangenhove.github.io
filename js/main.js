/**
 * Sieraden Langenhove
 * @author Arne Govaerts <arne.govaerts@telenet.be>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('sieraden', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Pages
    .when("/collectie", {templateUrl: "partials/collectie.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    //404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"})
}]);

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });
  
  $('.carousel').carousel({
                interval: 5000,
                pause: "hover",
                wrap: true
            })
            .on('click', '.carousel-control', handle_nav);

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  });
});

var handle_nav = function(e) {
        e.preventDefault();
        var nav = $(this);
        nav.parents('.carousel').carousel(nav.data('slide'));
  }
