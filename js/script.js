angular.module('appPelis', [])
	.controller('ListaController', ['$scope', function($scope){

		$scope.peliculas = [{image1: 'caratulas/apolo-1.jpg',   image2:'caratulas/apolo-2.jpg' },
							{image1: 'caratulas/capitan-1.jpg', image2:'caratulas/capitan-2.jpg' },
							{image1: 'caratulas/popper-1.jpg',   image2:'caratulas/popper-2.jpg' },
							{image1: 'caratulas/ironman2-1.jpg',   image2:'caratulas/ironman2-2.jpg' },
							{image1: 'caratulas/rapido-1.jpg',   image2:'caratulas/rapido-2.jpg' },
							{image1: 'caratulas/linterna-1.jpg',   image2:'caratulas/linterna-2.jpg' }
		];
	}


	]);