var myApp = angular.module('myApp', []);

myApp.factory('Data', function() {
    return {message: "I'm data from a service"};
});

myApp.filter('reverse', function(Data) {
    return function (text) {
        return text.split("").reverse().join("") + ' | ' + Data.message;
    }
});

function FirstCtrl(Data){
  first = this;
  first.data = Data;
}

function SecondCtrl(Data){
  var second = this;
  second.data = Data;
}

myApp.controller("FirstCtrl", FirstCtrl);

myApp.controller("SecondCtrl", SecondCtrl);