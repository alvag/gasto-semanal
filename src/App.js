import React, { Component } from 'react';
import './css/App.css';
import Header from './components/header';

class App extends Component {
    render() {
        return (
            <div className="App container">
                < Header title="Gasto Semanal" />

                <div className="contenido-principal contenido">
                    <div className="row">
                        <div className="one-half columns">

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
