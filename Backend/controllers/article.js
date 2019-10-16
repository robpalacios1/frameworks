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
                status: 'error',
                mensaje: 'Faltan datos por enviar'
            });
        }

        if(validate_title && validate_content){

            // Crear objeto a guardar
            var article = new Article();

            // Asignar valores
            article.title = params.title;
            article.content = params.content;
            article.image = null;

            // Guardar articulo
            article.save((err, articleStored) => {

                if(err || !articleStored){
                    return res.status(404).send({
                        status: 'error',
                        message: 'Ela articulo no se ha guardado'
                    });
                }

                // Devolver una respuesta
                return res.status(200).send({
                    status: 'success',
                    article: articleStored
                });
            });

        }else{
            return res.status(200).send({
                status: 'error',
                message: 'Los datos no son validos'
            });
        }
    },

    getArticles: (req, res) => {
        //Find
        Article.find({}).sort('-_id').exec((err, articles) => {

            if(err){
                return res.status(500).send({
                    status: "error",
                    message: "Error al devolver los articulos"
                });
            }

            if(!articles){
                return res.status(404).send({
                    status: "error",
                    message: "No hay articulos para mostrar"
                });
            }

            return res.status(200).send({
                status: "success",
                articles
            });
        });
    }
}; // end controller

module.exports = controller;