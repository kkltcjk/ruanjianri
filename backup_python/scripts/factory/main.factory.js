'use strict';

/**
 * get data factory
 */


var Base_URL;
var Grafana_URL;

angular.module('yardStickGui2App')
    .factory('mainFactory', ['$rootScope','$http', '$location', function($rootScope ,$http ,$location) {

        Base_URL = 'http://' + $location.host() + ':' + $location.port();
        Grafana_URL = 'http://' + $location.host();

        return {

        };
    }]);
