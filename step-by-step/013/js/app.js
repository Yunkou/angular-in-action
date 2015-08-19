var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', function(){
    var appCtrl = this;
    
    appCtrl.loadMoreTweets = function() {
        alert("Loading tweets!");
    };

    appCtrl.deleteTweets = function() {
        alert("deleting tweets");
    };
})

myApp.directive("enter", function() {
    return function(scope, element, attrs) {
        element.bind("mouseenter", function() {
            scope.$apply(attrs.enter);
        });
    };
});
