/**
* app Module
*
* Description
*/
angular.module('app', ['ui.router'])
        .config(function config($stateProvider) {
            
            $stateProvider.state('index',{
                url: '',
                controller: 'FirstCtrl as first',
                templateUrl: 'tpl/first.tpl'
            });

            $stateProvider.state('second',{
                url: '/second',
                controller: 'SecondCtrl as second',
                templateUrl: 'tpl/second.tpl'
            });

        })
        .service('greeting', function Greeting(){
            var greeting = this;

            greeting.message = 'Default';
        })
        .controller('FirstCtrl', function FirstCtrl(greeting){
            var first = this;
            first.greeting = greeting;
        })
        .controller('SecondCtrl', function SecondCtrl(greeting){
            var second = this;
            second.greeting = greeting;
        });