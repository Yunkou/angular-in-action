angular.module('myApp', [])
    .filter('reverseMsg',function(){
        return function(msg){
            return msg.split('').reverse().join('');
        }
    })
    .controller('appCtrl', ['$scope', function($scope){
        $scope.message = '';
    }]);
    