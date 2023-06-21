const{MongoClient} = require('mongodb')
const endereco = "mongodb://127.0.0.1:27017";
const cliente = new MongoClient(endereco);

async function main() {

    try{
    const db = cliente.db('dbs')
    const lutadores = db.collection('lutadores')

    /*cadê o goku? */ 
    let goku = await lutadores.findOne({
      nome: "kakaroto"
    });
  console .log(goku)
/* qual seria o poder do goku se ele dobrasse seu poder */
console.log(goku.poder * 2)


 }
 finally{
 await cliente.close();
}

}
main().catch(console.dir);