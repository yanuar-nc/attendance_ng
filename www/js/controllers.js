
angular.module( 'myApp.controllers', [] )
	.controller( 'loginCtrl', function( $scope, $http, ExceptionHandling ){
		$scope.loader = true;
		$scope.login = function()
		{
			var username = $scope.username;
			var password = $scope.password;

			var url = api_url + 'users/login/' + username + '/' + password;
/*
			var request = $http( {
				method: 'post',
				url: api_url,
				params: {
					action: 'users/login'
				},
				data: {
					$scope.username + '/' $scope.password
				}
			} );

			return ( request.then( ))*/
			$scope.loader = false;
            $http.get( url )
            .success( function( data ) {
				
                if ( data.login == false )
                { 
                    alert( 'Harap periksa username atau password kembali' );
                } else {
	                window.localStorage.setItem( "username", username );
	                window.localStorage.setItem( 'auth_users', JSON.stringify(data) );
                	window.location = "index.html";
                }
                //alert( data.login );
                $scope.loader = true;
            } )
            .error( function( data, status, header, config ){
            	ExceptionHandling.unableConnection();
            	return false;
            } );			
		}
	})
	.controller( 'DashboardController', function( $scope, $http, ExceptionHandling ){
		$scope.loader = true;
		
	})
	.controller( 'ProfileController', function( $scope, $http, ExceptionHandling ){
		$scope.loader = true;
		
	})
	.controller( 'SchedulesController', function( $scope, $http, ExceptionHandling ){
		$scope.loader = true;
		
	})
	.controller( 'ScoresController', function( $scope, $http, ExceptionHandling ){
		$scope.loader = true;
		
	})
	.controller( 'HeaderController', function( $scope, $http, ExceptionHandling ){
		var snapper = new Snap({
		 	element: document.getElementById('content')
		});
		var auth_users = JSON.parse( window.localStorage.getItem("auth_users") );  

		$scope.ava_picture = dev_url + auth_users.picture_dir + auth_users.picture;
		$scope.display_name = auth_users.name;
		$scope.open = function()
		{
			if( snapper.state().state=="left" ){
				snapper.close();
			} else {
				snapper.open('left');
			}
			return false;			
		}
		$scope.close = function()
		{
			snapper.close();
		}
		$scope.logout = function()
		{
           window.localStorage.removeItem("username");
           window.localStorage.removeItem("password");
           window.localStorage.removeItem("auth_users");
           window.location = "login.html";			
		}
		$scope.selectedTab = 'columnOne';
	})
