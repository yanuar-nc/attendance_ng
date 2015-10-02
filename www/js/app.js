var IP      = 'http://localhost:90/';
var IP      = 'http://192.168.43.179:90/';
var api_url = IP + 'api.attendance/';
var dev_url = IP + 'attendance_dev/';   

angular.module('myApp', ['ui.router','myApp.controllers', 'myApp.services'])

.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/dashboard');
    
    $stateProvider
        
        /*
         * Dashboard View 
         */
        .state('dashboard', {
            url: '/dashboard',
            views: { 
                content: {
                    controller: 'DashboardController',
                    templateUrl: 'templates/dashboard.html',
                },
                /*
                'columnOne@dashboard': {
                    templateUrl: 'templates/dashboard.columnOne.html',
                },
                'columnTwo@dashboard': {
                    templateUrl: 'templates/dashboard.columnTwo.html'
                },
                'columnThree@dashboard': {
                    templateUrl: 'templates/dashboard.columnOne.html'
                },*/
                sidebar: {
                    controller: 'HeaderController',
                    templateUrl: 'elements/menus.html'
                }
            },
            data : { pageTitle: 'Dashboard' }
        })
        .state('dashboard/columnOne', {
            url: '/dashboard/columnOne',
            views: {
                header: {
                    templateUrl: 'elements/header.dashboard.html',
                    controller: 'HeaderController',
                },
                content: {
                    controller: 'DashboardController',
                    templateUrl: 'templates/dashboard.columnOne.html',
                },
                sidebar: {
                    controller: 'HeaderController',
                    templateUrl: 'elements/menus.html'
                }
            }
        })        
        .state('dashboard/columnTwo', {
            url: '/dashboard/columnTwo',
            views: {
                header: {
                    templateUrl: 'elements/header.dashboard.html',
                    controller: 'HeaderController',
                },
                content: {
                    controller: 'DashboardController',
                    templateUrl: 'templates/dashboard.columnTwo.html',
                },
                sidebar: {
                    controller: 'HeaderController',
                    templateUrl: 'elements/menus.html'
                }
            },
            data : { pageTitle: 'Dashboard' }
        })        
        .state('dashboard/columnThree', {
            url: '/dashboard/columnThree',
            views: {
                header: {
                    templateUrl: 'elements/header.dashboard.html',
                    controller: 'HeaderController',
                },
                content: {
                    controller: 'DashboardController',
                    templateUrl: 'templates/dashboard.columnThree.html',
                },
                sidebar: {
                    controller: 'HeaderController',
                    templateUrl: 'elements/menus.html'
                }
            },
            data : { pageTitle: 'Dashboard' }
        })        

        /*
         * Schedule View 
         */
        .state('schedules', {
            url: '/schedules',
            views: {
                header: {
                    templateUrl: 'elements/header.default.html',
                    controller: 'HeaderController',
                },
                content: {
                    controller: 'SchedulesController',
                    templateUrl: 'templates/schedules.html',
                },
                sidebar: {
                    controller: 'HeaderController',
                    templateUrl: 'elements/menus.html'
                }
            },
            data : { pageTitle: 'Jadwal Matakuliah' }
        })
        /*
         * Schedule View 
         */
        .state('scores', {
            url: '/scores',
            views: {
                header: {
                    templateUrl: 'elements/header.default.html',
                    controller: 'HeaderController',
                },
                content: {
                    controller: 'ScoresController',
                    templateUrl: 'templates/scores.html',
                },
                sidebar: {
                    controller: 'HeaderController',
                    templateUrl: 'elements/menus.html'
                }
            },
            data : { pageTitle: 'Nilai Matakuliah' }
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            // we'll get to this in a bit       
        });
        
})
.run([ '$rootScope', '$state', '$stateParams',
function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}])