exports.connectToDatabase = function(databaseName) {
    console.log("Conectando ao banco de dados..." + databaseName);
    console.log("Conexão estabelecida com sucesso!");
}

exports.disconnectFromDatabase = function() {
    console.log("Desconectando do banco de dados...");
    console.log("Desconexão realizada com sucesso!");
}