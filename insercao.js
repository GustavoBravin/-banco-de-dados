const{MongoClient} = require('mongodb')
const endereco = "mongodb://127.0.0.1:27017";
const cliente = new MongoClient(endereco);

async function main() {

    try{
    const db = cliente.db('dbs')
    const lutadores = db.collection('lutadores')
   
   await lutadores.insertMany([{
        nome:"kakaroto",
        planeta:"Vegeta",
        poder:100000,
       equipe:"Defensores",
       jujubinhas: 50
      },
      {
        nome:"Raditz",
        planeta:"Vegeta",
        poder:50000,
       equipe:"Atacantes",
       jujubinhas: 25
      },
      {
        nome:"Frieza",
        planeta:"Desconhecido",
        poder:90000,
       equipe:"Atacantes",
       jujubinhas: 300
      },
      {
        nome:"Goku Black",
        planeta:"Desconhecido",
        poder:2500000,
       equipe:"Atacantes",
       jujubinhas: 1000
      },
      {
        nome:"Gohan",
        planeta:"Terra",
        poder:200000,
       equipe:"Defensores",
       jujubinhas: 30
      },
      {
        nome:"Arceus",
        planeta:"Desconhecido",
        poder:999999999999999999999,
       equipe:"Atacantes",
       jujubinhas: 999999999999999999
      },
      {
        nome:"Superman",
        planeta:"crypton",
        poder:20000,
       equipe:"Atacantes",
       jujubinhas: 10000
      },
      {
        nome:"Verdade",
        planeta:"Desconhecido",
        poder:999999999999999999999,
       equipe:"Neutro",
       jujubinhas: 999999999999999999
      },

    ]);

/* AQUI VAI MEU CODIGO */


}

 finally{
 await cliente.close();
}

}
main().catch(console.dir);





