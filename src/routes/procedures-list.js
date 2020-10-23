const express = require('express');
const router = express.Router();

// hace llamado al esquema usuario
const ProcedureList = require('../models/ProcedureList');

// ruta que devuelve la información del usuario por según el Id de usuario que quieren obtener
router.get('/:id', (req, res, next) => {
    ProcedureList.findById(req.params.id, function(err, tramite){
        if(err){
            res.status(500).json({message:'Se ha producido un error al obtener el trámite'})
        }
        else{
            res.json(tramite);
        }        
    })
});

// ruta que obtiene los datos almacenados en el esquema Usuario
router.get('/', (req, res) => {
    ProcedureList.find(function (err, procedures) {
        if(err) {            
            res.status(500).send({message: 'Error al listar los trámites'})
        }
        else {
            res.json(procedures);
        }
    })
});

// // ruta que agrega datos al esquema usuario por metodo POST /usuario - POST

router.post('/',(req, res) => {
    const tramite = new ProcedureList(req.body);
    tramite.save()
    .then(tramite => {
        res.status(201).json({message: ' El tramite ha sido agregado satisfactoriamente'})
    })
    .catch(err => {
        res.status(400).send({message: err})
    });
});

// // actualiza datos al esquema usuario por el método PUT que recibe como parametro el id del usuario
// router.put('/:id', (req, res, next) => {
//     User.findById(req.params.id, function (err, user){
//         if(!user) {
//             return res.status(404).send('No se ha encontrado el usuario');
//         } else {
//             user.name = req.body.name;
//             user.last_name = req.body.last_name;
//             user.address = req.body.address;
//             user.city = req.body.city;
//             user.state = req.body.state;
//             user.country = req.body.country;
//             user.phone = req.body.phone;
//             user.area_code = req.body.area_code;
//             user.birthdate = req.body.birthdate;

//             user.save()
//             .then(user => {
//                 res.status(200).json('Usuario Actualizado completamente');
//             })
//             .catch(err => {
//                 res.status(400).send('Se ha producido un error al actualizar los datos del usuario');
//             });
//         }
//     })
// });

// // elimina el dato usuario de la base de datos por el método PUT que recibe como parametro el id del usuario
// router.delete('/:id', (req, res, next) => {
//     User.findByIdAndRemove(req.params.id, function (err, user) {
//         if(err) {            
//             res.status(400).send('Se ha producido un error al eliminar el usuario');
//         }
//         else{
//             res.json('Usuario eliminado satisfactoriamente');            
//         }
//     });
// });

module.exports = router;