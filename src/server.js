//
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');

const app = express();

const { DB } = require('./config/DB');


//Ruta del usuario
const usuarioRoutes = require('./routes/usuario');
const redirectRoutes = require('./routes/redirect');
const magnaRoutes = require('./routes/magna');
const procedureListRoutes = require('./routes/procedures-list');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect (DB,{useMongoClient : true})
    .then(() => console.log('db connected'))
    .catch(err => console.log(err));

// configuración del puerto del servidor
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(cors());
app.use(bodyParser.json());

// routes
app.use('/user', usuarioRoutes);
app.use('/procedure', magnaRoutes);
app.use('/redirect', redirectRoutes);
app.use('/procedure-list', procedureListRoutes);


// ruta para los archivos staticos
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
} );