(function () {
    'use strict';

    angular.module('frontend.findLawyer', [])
        .component('feFindLawyer', {
            templateUrl: 'components/find-lawyer/find-lawyer.html',
            controller: FindLawyerController,
            bindings: {
                onClose: '&'
            }
        });

    function FindLawyerController ($scope, $timeout) {
        var self = this;

        $scope.findLawyer = function()
        {
            $scope.isProcessing = true;

            $timeout(function() {
                $scope.isProcessing = false;
            }, 2000);
        }
    }

}());


