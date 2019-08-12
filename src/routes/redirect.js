const express = require('express');
const router = express.Router();

// hace llamado al esquema usuario
var http = require('http');
var fs = require('fs');

router.get('/:id', (req, res) => {
    res.json({ id });
});

// ruta que obtiene los datos almacenados en el esquema Usuario

module.exports = router;