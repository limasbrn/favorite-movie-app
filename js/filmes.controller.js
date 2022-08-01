angular.module("Filmes").controller("FilmesController", function($scope) {

    $scope.titulo = "Favorite movie List";

    $scope.filmes = [
        {
            id:"1",
            titulo:"Tudo em todo lugar ao mesmo tempo",
            ano: 2022,
            produtora:"Diamond Filmes",
            sinopse:"Cheio de ação e humor, conta a história de Evelyn Wang (Michelle Yeoh) uma mulher que se envolve por acaso em uma aventura multidimensional que coloca o destino de todos os universos em suas mãos - e também a faz questionar quem ela é para si mesma e sua família.",
            cartaz:"https://br.web.img2.acsta.net/pictures/22/05/16/17/59/5165498.jpg"
        }
    ];

});