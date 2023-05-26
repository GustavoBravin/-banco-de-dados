const{MongoClient} = require('mongodb')
const endereço = "mongodb://localhost:27017";
const cliente = new MongoClient(endereço);

async function main() {

    try{
    const db = cliente.db('teste')
    const coleçao = db.collection('teste')
    console.log(await coleçao.findOne());
 }
 finally{
 await cliente.close();
}

}
main().catch(console.dir);








