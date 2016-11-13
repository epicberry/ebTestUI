var app = angular.module('paramsingh', []);

app.controller('TestCaseController', function ($scope, $http) {

	$scope.search = "";
	$scope.order = "testCaseId";
	$scope.selectedIndex = null;
	$scope.selectedTestCase = null;

	$scope.selectTestCase = function (testCase, index) {
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

	$scope.runTestCases = function(testCases){
		console.log(testCases);
		// var testCasesToBeRun = $scope.testCases.filter(function(t){return t.includeInExecution == 'true';});
		var testCasesToBeRun = testCases.filter(function(t){return t.includeInExecution == 'true';});
		//console.log(testCasesToBeRun);
		console.log(JSON.stringify(testCasesToBeRun));
	};

	// Simple GET request example:
$http({
  method: 'GET',
  url: 'http://localhost:8082/data/all'
}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
		$scope.testCases = response.data;
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
			$scope.testCases = [
				{
		      "testCaseId" : "4",
					"testCategory": "cat1",
					"includeInExecution" : "true",
					"description" : "",
					"basic" : {
						"browser" : "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0",
			      "url" : "http://www.google.com",
					},
		      "steps" : {
						"testQuery" : "github",
		      }
		    },
				{
		      "testCaseId" : "5",
					"testCategory": "cat1",
					"includeInExecution" : "true",
					"description" : "",
					"basic" : {
						"browser" : "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0",
			      "url" : "http://www.google.com",
					},
		      "steps" : {
						"testQuery" : "github",
		      }
		    },
				{
		      "testCaseId" : "6",
					"testCategory": "cat2",
					"includeInExecution" : "false",
					"description" : "",
					"basic" : {
						"browser" : "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0",
			      "url" : "http://www.google.com",
					},
		      "steps" : {
						"testQuery" : "github",
		      }
		    },
			]
		});

  });

// 	$scope.testCases = [
// 		{
//       "testCaseId" : "1",
// 			"testCategory": "cat1",
// 			"includeInExecution" : "true",
// 			"description" : "",
// 			"basic" : {
// 				"browser" : "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0",
// 	      "url" : "http://www.google.com",
// 			},
//       "steps" : {
// 				"testQuery" : "github",
//       }
//     },
// 		{
//       "testCaseId" : "2",
// 			"testCategory": "cat1",
// 			"includeInExecution" : "true",
// 			"description" : "",
// 			"basic" : {
// 				"browser" : "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0",
// 	      "url" : "http://www.google.com",
// 			},
//       "steps" : {
// 				"testQuery" : "github",
//       }
//     },
// 		{
//       "testCaseId" : "3",
// 			"testCategory": "cat2",
// 			"includeInExecution" : "false",
// 			"description" : "",
// 			"basic" : {
// 				"browser" : "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0",
// 	      "url" : "http://www.google.com",
// 			},
//       "steps" : {
// 				"testQuery" : "github",
//       }
//     },
// 	]
// });
