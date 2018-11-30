import React, { Component } from 'react';
import { revisarPresupuesto } from '../helpers/helper';

export default class Restante extends Component {

    render() {
        let presupuesto = this.props.presupuesto;
        let restante = this.props.restante;
        return (
            <div className={revisarPresupuesto(presupuesto, restante)}>
                Restante $ {restante.toFixed(2)}
            </div>
        );
    }
}
