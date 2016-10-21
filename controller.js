(function () {
    angular.module('frontEnd.app',
        [
            'ngRoute',
            'ui.bootstrap',
            'ui.bootstrap.typeahead',
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
            
            $scope.showReview = function(clientReview) {
                $scope.selectedClientReview = clientReview;
                $scope.showPopup('client-review');
            };

        });
}());