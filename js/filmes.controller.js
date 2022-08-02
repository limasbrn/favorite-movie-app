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
        },
        {
            id:"2",
            titulo:"Amizade de Férias",
            ano: 2021,
            produtora:"Star +",
            sinopse:" Marcus (Lil Rel Howery) e Emily (Yvonne Orji) está prestes a realizar o sonho de oficializar seu relacionamento até que uma surpresa não muito agradável aparece. Um casal (John Cena e Meredith Hagner) com quem fizeram amizade durante férias no México decidiram se convidar para cerimônia e acabam arruinando a festa e causando todo tipo de constrangimento.",
            cartaz:"https://m.media-amazon.com/images/M/MV5BZmI0YTY4YTYtODk4MS00ZWE3LWJjYzUtODAwOWM5YWY4MWUwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg"
        },
    ];

    $scope.novoFilme = {};

    $scope.removerFilme = function(id) {
        angular.forEach($scope.filmes, function(filme, i){
            if(filme.id == id){
                $scope.filmes.splice(i, 1);
            }
        
        });
    };

    $scope.adicionarFilme = function(){
        var filme = angular.copy($scope.novoFilme);

        $scope.filmes.push(filme);

        $scope.novoFilme = {};

    }
    
    $scope.menuActive = function(){
        $scope("container-form").addClass('active')
        $scope("btn-modal").addClass('inactive')
        
    }

});