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
    .otherwise({
        redirectTo: function() {
            window.location = "/404.html";
        }
    });
}]);

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
                interval: 5000,
                pause: "hover",
                wrap: true
            })
            .on('click', '.carousel-control', handle_the_slides);

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  });
});

var handle_the_slides = function(e) {
        e.preventDefault();
        var handler_of_slides = $(this);
        handler_of_slides.parents('.carousel').carousel(handler_of_slides.data('slide'));
  }
