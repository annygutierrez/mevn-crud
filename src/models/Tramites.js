// importa el paquete mongoose para el modelado del objeto Usuario
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



{/* 
        <MainTitle title={"Nombre del trámite"} />
        <Text>
          <span>{"Descripción larga del trámite. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend lacinia elit. Nullam consectetur orci ligula, quis malesuada tortor rhoncus et. In quis posuere odio, quis congue magna."}</span>
        </Text>

        <Accordion title={"Importante"}
          label={""}
          children={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend lacinia elit. Nullam consectetur orci ligula, quis malesuada tortor rhoncus et. In quis posuere odio, quis congue magna.'}
        />
        <Accordion title={"Etapas del proceso"}
          label={""}
          children={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend lacinia elit. Nullam consectetur orci ligula, quis malesuada tortor rhoncus et. In quis posuere odio, quis congue magna.'}
        />
        <Accordion title={"Requisitos para el trámite"}
          label={""}
          children={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend lacinia elit. Nullam consectetur orci ligula, quis malesuada tortor rhoncus et. In quis posuere odio, quis congue magna.'}
        />
        <Accordion title={"Documentos del afiliado que necesitas tener a la mano"}
          label={""}
          children={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend lacinia elit. Nullam consectetur orci ligula, quis malesuada tortor rhoncus et. In quis posuere odio, quis congue magna.'}
        />
        <Accordion title={"Documentos de los beneficiarios que necesitas tener a la mano"}
          label={""}
          children={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend lacinia elit. Nullam consectetur orci ligula, quis malesuada tortor rhoncus et. In quis posuere odio, quis congue magna.'}
        /> */}

/**
 * Se crea el esquema del modelo Usuario con sus propiedades 
 */
const Tramites = new Schema({
    id: { type: Number},
    name: { type: String},
    subtitle: { type: String },
    description: { type: String},
    information: [
        {
            title: { type: String},
            description: { type: String }
        }
    ]
},{
    collection: 'tramites'
});

// Exporta el modelo del esquema Usuario para ser usado en la aplicación
module.exports = mongoose.model('Tramites', Tramites);