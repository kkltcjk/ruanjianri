'use strict';

angular.module('yardStickGui2App')
    .controller('ResultCtrl', ['$scope', '$state', '$stateParams', 'mainFactory', '$http',

        function($scope, $state, $stateParams, mainFactory, $http) {

            function get_uuid() {
                function S4() {
                    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
                }
                return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
            }

            $scope.user_id = $.cookie('user_id');
            if($scope.user_id == null){
                $.cookie('user_id', get_uuid());
                $scope.user_id = $.cookie('user_id');
            }

            $scope.gotoTest = function(){
                $state.go('app', {},{reload:true});
            }

            $http.get('/api/score/' + $scope.user_id).then(function(resp){
                $scope.score = resp.data;
            }, function(error){
            });
        }
    ]);
