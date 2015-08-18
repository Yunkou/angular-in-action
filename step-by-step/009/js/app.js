var app = angular.module("superhero", []);

app.directive("superman", function() {
    return {
        restrict: "E",
        template: "<blockquote>Here I am to save the day</blockquote>"
    };
});