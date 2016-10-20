(function () {
    'use strict';

    angular.module('frontend.clientReview', [])
        .component('feClientReview', {
            templateUrl: 'components/client-review/client-review.html',
            controller: ClientReviewController,
            bindings: {
                onClose: '&'
            }
        });

    function ClientReviewController ($scope) {
        var self = this;



    }
}());


