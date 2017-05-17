// <reference path="../angular.js" />
// <reference path="../Module/module.js" />

myApp.controller("newEmpController", function ($scope) {
    $scope.SaveForm = function (empForm) {
        if (empForm.$valid)
        {
            window.alert('submitted');
        }
    }
});