//@ts-check
import React, { Component } from 'react';
import './css/App.css';
import swal from 'sweetalert2';
import Header from './components/Header';
import FormularioGasto from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

class App extends Component {

    state = {
        presupuesto: 0,
        restante: 0,
        gastos: []
    };


    componentDidMount() {
        this.obtenerPresupuesto();
    }

    obtenerPresupuesto = async () => {
        let { value: presupuesto } = await swal({
            title: 'Ingresa tu presupuesto',
            input: 'number',
            allowOutsideClick: false,
            allowEscapeKey: false,
            inputValidator: (value) => {
                return (!value || Number(value) <= 0) && 'Ingresa una cantidad mayor que 0';

            }
        });
        presupuesto = Number(presupuesto);
        this.setState({ presupuesto, restante: presupuesto });
    };

    crearGasto = (gasto) => {
        let gastos = this.state.gastos;
        gastos.push(gasto);
        this.restarPresupuesto(gasto.cantidadGasto);
        this.setState({ gastos });
    };

    restarPresupuesto = cantidad => {
        this.setState({
            restante: this.state.restante - Number(cantidad)
        });
    };

    render() {

        let a = 1;
        a = '2';
        return (
            <div className="container">
                < Header title="Gasto Semanal" />

                <div className="contenido-principal contenido">
                    <div className="row">
                        <div className="col-6">
                            <FormularioGasto crearGasto={this.crearGasto} />
                        </div>

                        <div className="col-6">
                            <Listado gastos={this.state.gastos} />

                            <ControlPresupuesto
                                presupuesto={this.state.presupuesto}
                                restante={this.state.restante}
                            />

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
