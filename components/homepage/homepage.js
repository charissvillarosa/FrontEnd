(function () {
    'use strict';

    angular.module('frontend.homepage', [])
        .component('feHomepage', {
            templateUrl: 'components/homepage/homepage.html',
            controller: HomepageController,
            bindings: {
                showCategories: '&',
                showReview: '&',
                showFindLawyer: '&'
            }
        });

    function HomepageController ($scope) {
        var self = this;



    }
}());


