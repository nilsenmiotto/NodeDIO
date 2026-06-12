const {getFullName, getProductLabel} = require('./services/products');
const products = require('./services/products');
const config = require('./services/config');
const database = require('./services/database');

async function main() {

    console.log("Olá meu nome é system!");
    // products.getFullName(1, 'Notebook');
    // products.getFullName(2, 'Mouse');
    // products.getProductLabel('Notebook');
    getFullName(1, 'Notebook');
    getProductLabel('Notebook');

    console.log(config.dev.production);
    console.log(config.dev.debug);

    database.connectToDatabase("MinhaBaseDeDados");
    database.disconnectFromDatabase();
}

main();