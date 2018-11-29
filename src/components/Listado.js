import React, { Component } from 'react';
import Gasto from './Gasto';

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
