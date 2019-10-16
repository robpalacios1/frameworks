'use strict'

var validator = require('validator');
var Article = require('../models/article');

var controller = {

    datosCurso: (req, res) => {
        var hola = req.body.hola;

        return res.status(200).send({
            curso: 'Master En Javascript',
            autor: 'Roberto Palacios',
            URL: "robpalacios1.github.io"
        });
    },

    test: (req, res) => {
        return res.status(200).send({
            message: 'Soy la accion test de mi controlador de articulos'
        });
    },

    save: (req, res) => {
        // Recoger parametros por post
        var params = req.body;

        // Validar datos con (validator)
        try{
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content)

        }catch(err){
            return res.status(200).send({
                mensaje: 'Faltan datos por enviar'
            });
        }

        if(validate_title && validate_content){
           // Crear objeto a guardar

            // Asignar valores

            // Guardar articulo

            // Devolver una respuesta


            return res.status(200).send({
                article: params
            });
        }else{
            return res.status(200).send({
                message: 'Los datos no son validos'
            });
        }
    }
}; // end controller

module.exports = controller;