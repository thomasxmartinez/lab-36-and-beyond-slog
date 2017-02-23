'use strict';

const angular = require('angular');
const uiRouter = require('angular-ui-router');
angular.module('slog', [uiRouter])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.when('', '/layout');

  let routes = [
    {
      name: 'layout',
      url: '/layout',
      template: '<layout> </layout>',
    },
    {
      name: 'admin',
      url: '/admin',
      template: '<admin> </admin>',
    },
    {
      name: 'dashboard',
      url: '/dashboard',
      template: '<h1> the dashboard </h1>',
    },
  ];

  routes.forEach(route => $stateProvider.state(route));
}]);


// load services
require('./service/admin-service.js');

//load containers
require('./container/admin');

//load components
require('./component/login');
require('./component/layout');
