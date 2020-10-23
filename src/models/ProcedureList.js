// importa el paquete mongoose para el modelado del objeto Usuario
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// [
//     {
//         "idCategory": 1,
//         "name": "Categoria 1",
//         "typeRequests": [
//             {
//                 "idTypeRequest": 1,
//                 "name": "Tipo Tramite 1",
//                 "description": "Description 1",
//                 "abreviature": null
//             }
//         ]
//     }
// ]

// {
//     id: { type: Number},
//     name: { type: String},
//     subtitle: { type: String },
//     description: { type: String},
//     list: [{
//         type: String,
//         required: false
//     }],
//     information: [
//         {
//             title: { type: String},
//             description: { type: String },
//             list: [{
//                 type: String,
//                 required: false
//             }]
//         }
//     ]
// }

/**
 * Se crea el esquema del modelo Usuario con sus propiedades 
 */
const ProcedureList = new Schema({
    idCategory: { type: Number, required: false },
    name: { type: String, required: false },
    description: { type: String, required: false },
    typeRequests: [
        {
            idTypeRequest: { type: String, required: false },
            name: { type: String, required: false },
            description: { type: String, required: false },
            abreviature: { type: String, required: false },
        }
    ]
  },{
    collection: 'procedureList'
});

// Exporta el modelo del esquema Usuario para ser usado en la aplicación
module.exports = mongoose.model('ProcedureList', ProcedureList);






// [
//     {
//         "idCategory": 1,
//         "name": "Categoria 1",
//         "typeRequests": [
//             {
//                 "idTypeRequest": 1,
//                 "name": "Tipo Tramite 1",
//                 "description": "Description 1",
//                 "abreviature": null
//             }
//         ]
//     },
//     {
//         "idCategory": 2,
//         "name": "Categoria 2",
//         "typeRequests": [
//             {
//                 "idTypeRequest": 2,
//                 "name": "Tipo Tramite 2",
//                 "description": "Description 2",
//                 "abreviature": null
//             }
//         ]
//     },
//     {
//         "idCategory": 3,
//         "name": "Categoria 3",
//         "typeRequests": []
//     }
// ]