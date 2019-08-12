const express = require('express');
const router = express.Router();

// hace llamado al esquema usuario
var http = require('http');
var fs = require('fs');

router.get('/:url', (req, res) => {
    // res.json({ url: req.params.url });
    // let urlParam = encodeURIComponent(req.params.url);
    res.redirect(req.params.url);
});

// ruta que obtiene los datos almacenados en el esquema Usuario

module.exports = router;