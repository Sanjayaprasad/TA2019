//Submit controller for userDetails
app.controller('submitForml',function($scope,$http,$location, savedService, userDetailService){

	$scope.back = function(){
    	$location.path('/home');
    }

  	$scope.save = function(){
    	console.log($scope.form); 
		userDetailService.setData($scope.form);
		if($scope.userForm.$valid)
	    	$http.post('/userdetails', $scope.form).then(function(res){
	      		console.log(res);
	      		savedService.set(res.data);
	      		$location.path('/checkout');
	    	});
	};

});
