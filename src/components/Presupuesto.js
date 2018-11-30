import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Presupuesto extends Component {

    render() {
        return (
            <div className="alert alert-primary">
                Presupuesto: $ {this.props.presupuesto.toFixed(2)}
            </div>
        );
    }
}

Presupuesto.propTypes = {
    presupuesto: PropTypes.number.isRequired
};
