import React, {Component} from 'react';
import MensajeEstatico from './MensajeEstatico'

class Peliculas extends Component{

    render(){
        return (
            <React.Fragment>
                <h4>Soy en Componente de Peliculas</h4>
                <MensajeEstatico />
                <hr/>
            </React.Fragment>
        );
    }
}

export default Peliculas;