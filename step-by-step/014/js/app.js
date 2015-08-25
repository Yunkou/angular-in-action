var app = angular.module('choreApp', []);

app.directive('kid',function(){
    return {
        resrict: 'E',
        template: '<input type="text" ng-model="chore" />{{chore}}'
    }
});