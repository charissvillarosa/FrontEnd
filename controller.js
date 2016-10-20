(function () {
    angular.module('frontEnd.app',
        [
            'ngRoute',
            'ui.bootstrap',
            'frontend.homepage',
            'frontend.findLawyer',
            'frontend.clientReview',
            'frontend.categoryList'
        ])

        .controller('FrontEndController', function ($scope) {

            $scope.showPopup = function(name) {
                $scope.popupView = name;
            };

            $scope.hidePopup = function() {
                $scope.popupView = '';
            };

        });
}());