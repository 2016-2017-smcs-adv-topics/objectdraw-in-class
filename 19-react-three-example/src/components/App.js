import React, {Component} from 'react';
import RenderContainer from '../containers/RenderContainer';
import {ProgressBar} from 'react-bootstrap';

class App extends Component {
    render() {
        return (
            <div>
                <div className="container page-header">
                    <h1>R3R/Bootstrap Test <small>Whee!</small></h1>
                </div>
                <div className="container">
                   <RenderContainer model="suzanne"/>
                </div>
            </div>
        );
    }
}

export default App;
