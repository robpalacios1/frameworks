import React, {Component} from 'react';
import Pelicula from './Pelicula'

class Peliculas extends Component{

    state = {
        peliculas: [
            { titulo: 'Batman vs Superman', image: 'https://i.blogs.es/7bf2a1/batman-v-superman-dawn-of-justice-poster-nuevo-blogdecine-imagen-2016/1366_2000.jpg'},
            { titulo: 'Gran Torino', image: 'https://static.iris.net.co/semana/upload/images/2009/3/14/208231_161457_1.jpg'},
            { titulo: 'Looper', image: 'https://cdn2.actitudfem.com/media/files/styles/big_img/public/images/2012/10/looper.jpg'}
        ],
        nombre: 'Roberto Palacios',
        favorita: {}
    };

    cambiarTitulo = () => {

        var {peliculas} = this.state;
        //var random = Math.floor(Math.random() * 3);
        peliculas[0].titulo = "Batman Begins";

        this.setState({
            peliculas: peliculas
        });
    }

    favorita = (pelicula, indice) =>{
        this.setState({
            favorita: pelicula
        });
    }

    render(){
        var pStyles = {
            background: 'green',
            color: 'white',
            padding: '10px'
        }
        return (
            <div id="content" className="peliculas">
                <h2 className="subheader">Peliculas</h2>
                <p>Seleccion de las peliculas favoritas de {this.state.nombre}</p>
                <p>
                    <button onClick={this.cambiarTitulo}>
                        Cambiar titulo de Batman
                    </button>
                </p>

                {this.state.favorita.titulo ? (
                    <p className="favorita" style={pStyles}>
                        <strong>La pelicula favorita es:</strong>
                        <span> {this.state.favorita.titulo} </span>
                    </p>
                    ) : (
                        <p>NO HAY PELICULA FAVORITA</p>
                    )
                }

                <div id="articles" className="peliculas" alt="{peliculas.titulo}">
                    {
                        this.state.peliculas.map((pelicula, i) => {
                            return (
                                <Pelicula
                                    key={i}
                                    pelicula={pelicula}
                                    indice = {i}
                                    marcarFavorita = {this.favorita}
                                />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Peliculas;