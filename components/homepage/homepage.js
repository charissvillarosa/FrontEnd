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

        $scope.zipcode = null;
        $scope.zipCodeList = [
            'Nowheresville, XX 000000'
        ];

        $scope.category = null;
        $scope.categoryList = [
            'Category 1',
            'Category 2',
            'Category 3',
            'Category 4',
            'Category 5'
        ];

        $scope.onSelectCategory = function(category)
        {
            $scope.category = category;
            self.showFindLawyer();
        };

        $scope.clientReviews = [
            {
                name: 'Mitchel M.',
                address: 'Cherry Hill, NJ',
                category: 'Family Law',
                message: 'This lawyer exceeded my expectations. I found Attorney Mullen to be very reliable, courteous, prompt...',
                imageUrl: 'images/image1.png'
            },
            {
                name: 'J.C.',
                address: 'Little Rock, AR',
                category: 'Job & Employment Law',
                message: 'He is a kind of lawyer who would sit down and explain things on how things work in legal matter but he is...',
                imageUrl: 'images/image2.png'
            },
            {
                name: 'Brigida R.',
                address: 'Dallas, TX',
                category: 'Family Law',
                message: 'My initial feeling after speaking to Brigida was of relief, because I knew she was going to be the right lawy...',
                imageUrl: 'images/image3.png'
            }
        ];

    }
}());


