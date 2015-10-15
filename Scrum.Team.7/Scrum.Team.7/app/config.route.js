(function () {
    'use strict';

    var app = angular.module('app');

    // Collect the routes
    app.constant('routes', getRoutes());
    
    // Configure the routes and route resolvers
    app.config(['$routeProvider', 'routes', routeConfigurator]);
    function routeConfigurator($routeProvider, routes) {

        routes.forEach(function (r) {
            $routeProvider.when(r.url, r.config);
        });
        $routeProvider.otherwise({ redirectTo: '/' });
    }

    // Define the routes 
    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: 'app/dashboard/dashboard.html',
                    title: 'dashboard',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-dashboard"></i> Dashboard'
                    }
                }
            }, {
                url: '/createsurvey',
                config: {
                    title: 'createsurvey',
                    templateUrl: 'app/createsurvey/createsurvey.html',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Create Survey'
                    }
                }
            }, {
                url: '/questionform',
                config: {
                    title: 'questionform',
                    templateUrl: 'app/questionform/questionform.html',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Question Form'
                    }
                }
            }, {
                url: '/answers',
                config: {
                    title: 'answers',
                    templateUrl: 'app/answers/answerform.html',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Answer Form'
                    }
                }
            }, {
                url: '/invitation',
                config: {
                    title: 'invitations',
                    templateUrl: 'app/invitation/invitation.html',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Invitations'
                    }
                }
            }, {
                url: '/preview',
                config: {
                    title: 'previews',
                    templateUrl: 'app/preview/preview.html',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Preview Survey'
                    }
                }
            }, {
                url: '/authorise',
                config: {
                    title: 'authorise',
                    templateUrl: 'app/authorise/authorise.html',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Authorise'
                    }
                }
            }, {
                url: '/takeSurvey',
                config: {
                    title: 'takeSurvey',
                    templateUrl: 'app/takeSurvey/takeSurvey.html',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-dashboard"></i> Take Survey'
                    }
                }
            }
        ];
    }
})();