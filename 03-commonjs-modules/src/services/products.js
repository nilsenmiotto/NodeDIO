//todas as funções relacionadas a produtos ficam aqui, como por exemplo, criar um produto, listar os produtos, etc...
const apiUrl = "http://localhost:3000/api/products";

async function getFullName(codeId, productName){
    console.log(codeId + " - " + productName);
}

async function getProductLabel(productName){
    await doBreakLine();
    console.log("O nome do produto é: " + productName);
}

async function doBreakLine(){
    console.log("\n");
}


module.exports = {
    getFullName,
    getProductLabel
}
