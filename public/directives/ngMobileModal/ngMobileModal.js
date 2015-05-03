/*global define */
define(['angular', 'directives-module','bootstrap-3.2.0'], function(angular, directives) {
    'use strict';

    /* Directives  */

    directives.directive('ngMobileModal', [
        '$timeout',
        function($timeout) {
            return {
                priority:2001,
                restrict: 'E',
                replace: true,
                require: '?ngModel',
                transclude: true,
                template:
                    '<div class="ngMobileModal">'+
                    '<div class="closeMobileModal">X</div>'+
                    '<div ng-transclude class="inner"></div>'+
                    '</div>',

                compile: function (element, attr) {
                    var id = attr.id;
                    console.log("ID",id);
                    var trigger = attr.triggeredBy;

                    return function ($scope, $element, $attr) {
                        //$scope.$apply();
                        $scope.$on('$destroy', function () {

                        });
                    };
                }
            }

        }]);

    return directives;
});