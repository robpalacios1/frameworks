import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

// Importar Componentes
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas'
import header from './components/Header'
import Header from './components/Header';

function HolaMundo(nombre,edad){
  var presentacion = (
    <div>
      <h2>Hola, soy {nombre}</h2>
      <h3>Tengo {edad} años</h3>
    </div>
  );
  return presentacion;
}

function App() {
  var nombre = "Roberto Palacios";

  return (
    <div className="App">
      <Header />


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola bienvenido al curso de react de Roberto Palacios!!
        </p>
          {HolaMundo(nombre,12)}
          <section className="componentes">
            <MiComponente />
            <Peliculas />
          </section>
        </header>
    </div>
  );
}

export default App;