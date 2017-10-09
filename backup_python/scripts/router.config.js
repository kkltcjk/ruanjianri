'use strict';

angular.module('yardStickGui2App')
    .run(
        ['$rootScope', '$state', '$stateParams',
            function($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;

            }
        ]
    )
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function($stateProvider, $urlRouterProvider, $locationProvider) {
            $urlRouterProvider
                .otherwise('main');

            $stateProvider

                .state('app', {
                    url: "/main",
                    controller: 'MainCtrl',
                    templateUrl: "views/main.html",
                    ncyBreadcrumb: {
                        label: 'Main'
                    }
                })
                .state('result', {
                    url: "/result",
                    controller: 'ResultCtrl',
                    templateUrl: "views/result.html",
                    ncyBreadcrumb: {
                        label: 'Result'
                    }
                })

        }
    ])
    .run();
