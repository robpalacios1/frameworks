import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Importar Componentes
import Header from './components/Header'
import Footer from './components/Footer';
import SeccionPruebas from './components/SeccionPruebas';
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
import Error from './components/Error';
import Home from './components/Home';
import Blog from './components/Blog';



class Router extends Component {
    render(){
        return(
            <BrowserRouter>

                <Header />

                <Switch>

                {/* CONFIGURAR RUTAS Y PAGINAS */}

                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/segunda-ruta" component={MiComponente} />

                    <Route exact path ="/pagina-1" render={() => (
                        <React.Fragment>
                            <h1>Hola Mundo desde la ruta: PAGINA 1</h1>
                            <MiComponente saludo="Hola Amigo"/>
                        </React.Fragment>
                    )} />

                    <Route exact path="/pruebas/:nombre/:apellidos?" render={(props) => {
                        var nombre = props.match.params.nombre;
                        var apellidos = props.match.params.apellidos;

                        return (
                            <div id="content">
                                <h2 className="subheader">Pagina de prueba</h2>
                                    {nombre && !apellidos &&
                                        <React.Fragment>
                                            {nombre}
                                        </React.Fragment>
                                    }
                                    {nombre && apellidos &&
                                        <React.Fragment>
                                            {nombre+ ' '+apellidos}
                                        </React.Fragment>
                                    }
                            </div>
                        );
                    }
                    } />

                    <Route component={Error} />
                </Switch>

                <div className="clearfix"></div>

            <Footer />

            </BrowserRouter>
        );
    }
}

export default Router;