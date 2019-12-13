import React, {Component} from 'react';
import MiComponente from './MiComponente';
import Peliculas from './Peliculas';

class SeccionPruebas extends Component {

    // var HolaMundo = () => {}
    HolaMundo(nombre,edad){
        var presentacion = (
          <div>
            <h2>Hola, soy {nombre}</h2>
            <h3>Tengo {edad} años</h3>
          </div>
        );
        return presentacion;
      }
    render(){
        var nombre = "Roberto Palacios";
        return(
            <section id="content">
                <h2 className="subheader">Ultimos articulos</h2>
                <p>
                    Hola bienvenido al curso de react de Roberto Palacios!!
                </p>

                {this.HolaMundo(nombre,12)}

                <section className="componentes">

                <MiComponente />
                <Peliculas />

                </section>
            </section>
        );
    }
}

export default SeccionPruebas;