var express = require('express');
var router = express.Router();
var Noticia = require('../models/noticia')


router.get('/', async function(req, res, next) {
  dados = await Noticia.find();
  res.json(dados);
});

router.get('/visualizar', async function(req, res, next) {
  dados = await Noticia.findById(req.query.id)
  res.render('noticias/visualizar', { noticia:dados });
});

module.exports = router;
