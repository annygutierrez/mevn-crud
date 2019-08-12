const express = require('express');
const router = express.Router();

// hace llamado al esquema usuario
var http = require('http');
var fs = require('fs');

router.get('/:url', (req, res) => {
    res.json({ url: req.params.url });
    // res.redirect(req.params.id);
    // response.writeHead(302, {
    //     'Location': req.params.id
        //add other headers here...
    //   });
    //   response.end();
});

// ruta que obtiene los datos almacenados en el esquema Usuario

module.exports = router;