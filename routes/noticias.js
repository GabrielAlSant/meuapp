var express = require('express');
var router = express.Router();
var Noticia = require('../models/noticia')


router.get('/', async function(req, res, next) {
  dados = await Noticia.find();
  res.json(dados);
});

router.get('/visualizar', async function(req, res, next) {
  dado = await Noticia.findById(req.query.id)
  res.json(dado)
});

router.get('/contador', async function(req, res, next) {
  contador = await Noticia.count();
  res.json({quantidade:contador});
});




module.exports = router;
