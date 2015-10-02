
angular.module( 'myApp.services', [] )
	.service( 'ExceptionHandling', function( $http, $q ){

		return ({ 
			unableConnection: unableConnection,
		});
		
		function unableConnection()
		{
			return alert( 'Tidak dapat terhubung dengan server' );
		}

	} )