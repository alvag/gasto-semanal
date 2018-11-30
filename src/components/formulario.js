import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormularioGasto extends Component {

    nombreGasto = React.createRef();
    cantidadGasto = React.createRef();

    crearGasto = (e) => {
        e.preventDefault();

        const gasto = {
            cantidadGasto: this.cantidadGasto.current.value,
            nombreGasto: this.nombreGasto.current.value,
        };

        this.props.crearGasto(gasto);

        e.currentTarget.reset();
        this.nombreGasto.current.focus();

    }

    render() {
        return (
            <form onSubmit={this.crearGasto}>
                <h2>Agrega tus gastos aqui</h2>
                <div className="form-group">
                    <label htmlFor="name">Nombre del Gasto:</label>
                    <input ref={this.nombreGasto} className="form-control" id="name" type="text" placeholder="Ej. Transporte" />
                </div>

                <div className="form-group">
                    <label htmlFor="cantidad">Cantidad:</label>
                    <input ref={this.cantidadGasto} className="form-control" id="cantidad" type="number" placeholder="Ej. 300" />
                </div>

                <input className="btn btn-primary btn-block" type="submit" value="Agregar" />
            </form>
        );
    }
}

FormularioGasto.propTypes = {
    crearGasto: PropTypes.func.isRequired
};
