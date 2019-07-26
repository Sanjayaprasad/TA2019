//Submit controller for userDetails
app.controller('submitForml',function($scope,$http,$location, savedService){
	//$scope.onlyNumbers = /^\d+$/;
	// $scope.form = { };
  $scope.save = function(){
    console.log($scope.form); 


    if($scope.userForm.$valid)
	    $http.post('/userdetails', $scope.form).then(function(res){
	      console.log(res);
	      savedService.set(res.data);
	      $location.path('/checkout');
	    });
	};

});