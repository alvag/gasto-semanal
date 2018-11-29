import React, { Component } from 'react';
import './css/App.css';
import Header from './components/Header';
import FormularioGasto from './components/Formulario';

class App extends Component {
    render() {
        return (
            <div className="App container">
                < Header title="Gasto Semanal" />

                <div className="contenido-principal contenido">
                    <div className="row">
                        <div className="one-half columns">
                            <FormularioGasto />
                        </div>

                        <div className="one-half columns">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
