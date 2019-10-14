const angular = require('angular');
require('angular-material');
require('angular-aria');
require('angular-messages');
require('angular-animate');
require('angular-material/angular-material.css');
require('./static/main.css');

const ngModule = angular.module('portfolio', ['ngMaterial']);

require('./directives')(ngModule);
