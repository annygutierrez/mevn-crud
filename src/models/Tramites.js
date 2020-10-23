// importa el paquete mongoose para el modelado del objeto Usuario
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



// {
//     "idTypeRequest": 2,
//     "name": "Gastos de Sepelio",
//     "idCategory": 1,
//     "nameCategory": "Categoria 1",
//     "description": "Descripcion de gastos de sepelio",
//     "descriptionLarge": null,
//     "informationImportant": "1",
//     "inBeneficiary": "1",
//     "inComplexity": "1",
//     "dateRegister": "2010-10-10",
//     "requirements": [
//         {
//             "idRequirement": 1,
//             "nameRequirement": "Requirimiento 1"
//         },
//         {
//             "idRequirement": 2,
//             "nameRequirement": "Requirimiento 2"
//         }
//     ],
//     "stages": [
//         {
//             "idStage": 1,
//             "nameStage": "estapa 1"
//         },
//         {
//             "idStage": 2,
//             "nameStage": "etapa 2"
//         }
//     ],
//     "documents": [
//         {
//             "idGroupDocument": 1,
//             "nameGroupDocument": "Grupo Documento 1",
//             "documents": [
//                 {
//                     "idDocument": 1,
//                     "nameDocument": "Documento 1"
//                 },
//                 {
//                     "idDocument": 3,
//                     "nameDocument": "Documento 3"
//                 }
//             ]
//         },
//         {
//             "idGroupDocument": 2,
//             "nameGroupDocument": "Grupo Documento 2",
//             "documents": [
//                 {
//                     "idDocument": 2,
//                     "nameDocument": "Documento 2"
//                 },
//                 {
//                     "idDocument": 3,
//                     "nameDocument": "Documento 3"
//                 }
//             ]
//         }
//     ],
//     "status": [
//         {
//             "idStatus": 1,
//             "nameStatus": "ACCEPTED",
//             "duration": 2
//         },
//         {
//             "idStatus": 2,
//             "nameStatus": "REGISTERED",
//             "duration": 5
//         }
//     ]
// }


/**
 * Se crea el esquema del modelo Usuario con sus propiedades 
 */
const Tramites = new Schema({
    idTypeRequest: { type: Number },
    name: { type: String},
    idCategory: { type: Number },
    nameCategory: { type: String},
    description: { type: String },
    descriptionLarge: { type: String },
    informationImportant: { type: String },
    inBeneficiary: { type: String },
    inComplexity: { type: String },
    dateRegister: { type: String },
    requirements: [
        {
            idRequirement: { type: Number },
            nameRequirement: { type: String }
        }
    ],
    stages: [
        {
            idStage: { type: Number },
            nameStage: { type: String }
        }
    ],
    documents: [
        {
            idGroupDocument: { type: Number },
            nameGroupDocument: { type: String },
            documents: [
                {
                    idDocument: { type: Number },
                    nameDocument: { type: String }
                }
            ]
        }
    ],
    status: [
        {
            idStatus: { type: Number },
            nameStatus: { type: String },
            duration: { type: Number }
        }
    ]
},{
    collection: 'tramites'
});

// Exporta el modelo del esquema Usuario para ser usado en la aplicación
module.exports = mongoose.model('Tramites', Tramites);