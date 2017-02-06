/**
* Main AngularJS Web Application
*/
var app = angular.module('sieradenLangehove', [
'ngRoute'
]);

/**
* Configure the Routes
*/
app.config(['$routeProvider', function ($routeProvider) {
$routeProvider
// Home
.when("/", {templateUrl: "partials/home.html", <span class="highlight">controller: "PageCtrl"</span>})
// Pages
.when("/about", {templateUrl: "partials/about.html", <span class="highlight">controller: "PageCtrl"</span>})
.when("/collecties", {templateUrl: "partials/collecties.html", <span class="highlight">controller: "PageCtrl"</span>})
.when("/contact", {templateUrl: "partials/contact.html", <span class="highlight">controller: "PageCtrl"</span>})
// else 404
.otherwise("/404", {templateUrl: "partials/404.html", <span class="highlight">controller: "PageCtrl"</span>});
}]);

/**
* Controls all Pages
*/
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
console.log("Page Controller reporting for duty.");

// Activates the Carousel
$('.carousel').carousel({
interval: 5000
});

// Activates Tooltips for Social Links
$('.tooltip-social').tooltip({
selector: "a[data-toggle=tooltip]"
})
});</pre>`</div>
