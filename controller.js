(function () {
    angular.module('frontEnd.app',
        [
            'ngRoute',
            'ui.bootstrap',
            'frontend.homepage'
        ])

        .controller('FrontEndController', function ($scope) {
            $scope.view = 'homepage';

        });
}());