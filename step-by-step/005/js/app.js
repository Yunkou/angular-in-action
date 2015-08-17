var myApp = angular.module('myApp', []);

myApp.factory('Data', function() {
    return {message: "I'm data from a service"};
});

function FirstCtrl(Data){
  first = this;
  first.data = Data;
}

function SecondCtrl(Data){
  var second = this;
  second.data = Data;

  second.reversedMessage = function(message) {
    return message.split("").reverse().join("");
  };
}

myApp.controller("FirstCtrl", FirstCtrl);

myApp.controller("SecondCtrl", SecondCtrl);