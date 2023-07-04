//servidor do jogo Ultimate Dungeons
// importar as bibliotecas requeridas
require(__dirname + '/Resources/config.js');
var fs = require('fs');
var net = require('net');

//1 carregar inicializadores
let init_files = fs.readdirSync(__dirname + "/Initializers");
init_files.forEach(function(initFile){
    console.log('Carregando Inicializadores: ' + initFile);
    require(__dirname + "/Initializers/" + initFile);
});
//2 carregar modelos
let model_files = fs.readdirSync(__dirname + "/Models");
model_files.forEach(function(modelFile){
    console.log('Carregando Modelo: ' + modelFile);
    require(__dirname + "/Models/" + modelFile);
});

//3 carregar mapas
let maps = {};
let map_files = fs.readdirSync(config.data_paths.maps);
map_files.forEach(function(mapFile){
    console.log('Carregando Mapa: ' + mapFile);
    let map = require(config.data_paths.maps + mapFile);
    maps[map.room] = map;
});

console.log(maps);
// inicializar servidor e ouvir as internetes
        // carregar as lógicas e serviços do servidor