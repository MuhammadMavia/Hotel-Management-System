angular.module("app", ["ui.router", 'ui.bootstrap'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html'
            })
            .state('cashCounter', {
                url: '/cashCounter',
                templateUrl: 'templates/cashCounter.html',
                controller: 'CashCounter as vm'
            })
            .state('adminPanel', {
                url: '/adminPanel',
                abstract: true,
                templateUrl: 'templates/admin-panel.html',
                controller: 'Admin as vm'
            })
            .state('adminPanel.data', {
                url: '/data',
                views: {
                    'dataContent': {
                        templateUrl: 'templates/data.html'
                    }
                }
            })
            .state('adminPanel.users', {
                url: '/users',
                views: {
                    'usersContent': {
                        templateUrl: 'templates/users.html'
                    }
                }
            })
            .state('adminPanel.settings', {
                url: '/settings',
                views: {
                    'settingsContent': {
                        templateUrl: 'templates/settings.html',
                        controller: 'AdminSettings as vm'
                    }
                }
            });

        $urlRouterProvider.otherwise('/cashCounter');
    });