var app = angular.module('paramsingh', []);

app.controller('TestCaseController', function($scope, $http) {

    $scope.search = "";
    $scope.order = "testCaseId";
    $scope.selectedIndex = null;
    $scope.selectedTestCase = null;

    $http({
        method: 'GET',
				url: 'http://192.169.179.82:1111/data/all'
        //url: 'http://localhost:1111/data/all'
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        $scope.testCases = response.data;


    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        $scope.testCases = [{}]
    });

    $scope.selectTestCase = function(testCase, index) {
        $scope.selectedIndex = index;
        $scope.selectedTestCase = testCase;
    };

    $scope.sensitiveSearch = function(testCase) {
        if ($scope.search) {
            return testCase.testCaseId.indexOf($scope.search) == 0 ||
                testCase.testCategory.indexOf($scope.search) == 0;
        }
        return true;
    };

    $scope.runTestCases = function(testCases) {
        //console.log(testCases);
        // var testCasesToBeRun = $scope.testCases.filter(function(t){return t.includeInExecution == 'true';});
        var testCasesToBeRun = testCases.filter(function(t) {
            return t.includeInExecution == true;
        });
        //console.log(testCasesToBeRun);
        console.log(JSON.stringify(testCasesToBeRun));
    };
});
