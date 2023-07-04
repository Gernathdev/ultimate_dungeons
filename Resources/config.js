//arquivo geral de configurações do servidor e dos ambientes de desenvolvimento

//importando bibliotecas requeridas
var args = require('minimist')(process.argv.slice(2));
var extend = require('extend');

//definindo a variável de ambiente do servidor (teste ou produção)
var environment = args.env || "test";

//console.log(environment);

//definindo configurações comuns do servidor e do jogo
var common_conf = {
    name: "Ultimate Dungeon Server",
    version:"0.0.1a",
    environment: environment,
    max_player: 100,
    data_paths: {
        items: __dirname + "\\Game Data\\" + "Items\\",
        maps: __dirname + "\\Game Data\\" + "Maps\\"
    },
    starting_zone: "start_map_01"
};

//definindo configurações específicas de ambiente
var conf = {
    production: {
        ip: args.ip || "0.0.0.0",
        port: args.port || 8081,
        database: "mongodb://127.0.0.1:27017/udsrvr_prod"
    },
    test: {
        ip: args.ip || "0.0.0.0",
        port: args.port || 8082,
        database: "mongodb://127.0.0.1:27017/udsrvr_test"
    }
};

extend(false, conf.production, common_conf);
extend(false, conf.test, common_conf);

module.exports = config = conf[environment];