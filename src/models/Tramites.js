// importa el paquete mongoose para el modelado del objeto Usuario
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


/**
 * Se crea el esquema del modelo Usuario con sus propiedades 
 */
const Tramites = new Schema({
    id: { type: Number},
    name: { type: String},
    subtitle: { type: String },
    description: { type: String},
    list: [{
        type: String,
        required: false
    }],
    information: [
        {
            title: { type: String},
            description: { type: String },
            list: [{
                type: String,
                required: false
            }]
        }
    ]
},{
    collection: 'tramites'
});

// Exporta el modelo del esquema Usuario para ser usado en la aplicación
module.exports = mongoose.model('Tramites', Tramites);