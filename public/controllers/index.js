
'use strict';

define(['angular',
    'controllers-module',

], function(angular, controllers) {

    // Controller definition
    controllers.controller("indexCtrl", ["$scope", "$rootScope", function($scope, $rootScope) {
        $scope.user = {
            name : "Fabio Almeida"
        }

        $scope.buttons=[{
            label:'Skills',
            show:true
        }];

        //roleList1 to treeview
        $scope.roleList = $scope.roleList1;

    }]);
});