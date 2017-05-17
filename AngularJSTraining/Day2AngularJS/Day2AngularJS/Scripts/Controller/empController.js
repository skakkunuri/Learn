// <reference path="../angular.js" />
// <reference path="../Module/module.js" />
myApp.controller("myEmpCtrl", function ($scope, $rootScope) {
    var emp = { name: "Kakkunuri", salary: 444444, department: "Finance" };
    $scope.emp = emp;
    $rootScope.message = "Hi Srikanth"
});


myApp.controller("myEmpCtrl1", function ($scope) {
    var emp = { name: "Srikanth", salary: 324234, department: "Corporate" };
    $scope.emp = emp;
    
});



myApp.controller("myEmpCtrl2", function ($scope) {
    var employees = [{ name: "Srikanth", salary: 15000, department: "Finance" },
        { name: "Raju", salary: 23000, department: "Corporate" },
        { name: "Kumar", salary: 35000, department: "Security" },
        { name: "Arvind", salary: 50000, department: "Logistics" }];
    $scope.employees = employees;
    $scope.editMode = false;
    $scope.filterAccount = "";

});