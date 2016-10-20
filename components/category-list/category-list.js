(function () {
    'use strict';

    angular.module('frontend.categoryList', [])
        .component('feCategoryList', {
            templateUrl: 'components/category-list/category-list.html',
            controller: CategoryListController,
            bindings: {
                onClose: '&'
            }
        });

    function CategoryListController ($scope) {
        var self = this;



    }
}());


