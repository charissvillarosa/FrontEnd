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

    function FindLawyerController ($scope) {
        var self = this;



    }
}());


