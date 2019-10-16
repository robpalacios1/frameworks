'use strict'

// Cargar modulos de node para crear servidor
var express = require('express');
var bodyParser = require('body-parser');

// Ejecutar express (http)
var app = express();

// Cargar ficheros rutas

// Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// CORS

//Anadir prefijo a rutas

//Ruta o metodo de prueba para la API REST
app.get('/probando', (req, res) => {

    return res.status(200).send({
       curso: 'Master En Javascript',
       autor: 'Roberto Palacios',
       URL: "robpalacios1.github.io"
    })
});

//Exportar modulo (fichero actual)
module.exports = app;