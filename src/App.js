import React, { Component } from 'react';
import './css/App.css';
import Header from './components/Header';
import FormularioGasto from './components/Formulario';
import Listado from './components/Listado';

class App extends Component {

    state = {
        presupuesto: 0,
        restante: 0,
        gastos: []
    }

    crearGasto = (gasto) => {
        const gastos = this.state.gastos
        gastos.push(gasto);
        this.setState({ gastos });
    }

    render() {
        return (
            <div className="App container">
                < Header title="Gasto Semanal" />

                <div className="contenido-principal contenido">
                    <div className="row">
                        <div className="one-half column">
                            <FormularioGasto crearGasto={this.crearGasto} />
                        </div>

                        <div className="one-half column">
                            <Listado gastos={this.state.gastos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
