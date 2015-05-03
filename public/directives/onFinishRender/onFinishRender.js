/*global define */
define(['angular', 'directives-module'], function(angular, directives) {
    'use strict';

    /* Directives  */

    directives.directive('onFinishRender',
        function($timeout) {
            return {
                restrict:'A',
                link: function (scope, element, attr) {
                    if (scope.$last === true) {
                        $timeout(function () {
                            scope.$emit(attr.onFinishRender);
                        });
                    }
                }

            }

        });

    return directives;
});