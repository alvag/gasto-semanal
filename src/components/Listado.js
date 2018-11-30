import React, { Component } from 'react';
import Gasto from './Gasto';
import PropTypes from 'prop-types';

export default class Listado extends Component {

    render() {
        return (
            <div className="gastos-realizados">
                <h2>Listado</h2>
                {this.props.gastos.map((gasto, index) => (
                    <Gasto key={index} gasto={gasto} />
                ))}
            </div>
        );
    }
}

Listado.propTypes = {
    gastos: PropTypes.array.isRequired
};
