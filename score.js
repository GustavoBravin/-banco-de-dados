const express = require('express');
const db = require('./cono.js');

const router = express.Router();

// Registrar um novo resultado
router.post("/", async (req, res) => {
    let col = await db.collection('score');
    let out = col.insertOne(req.body);
    res.send(out).status(204);
});


// Pegar os 10 melhores resultados
router.get("/", async (req, res) => {
    console.log("Entrou")
    let col = await db.collection('score');
    let out = await col.find().sort({
        pontos : -1
    }).limit(10).toArray();
    res.send(out).status(200);
});

module.exports = router;