import React from 'react';
import logo from './logo.svg';
import Header from 'src/shared/ui/header/Header';
// eslint-disable-next-line import/no-unresolved
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        </div>
    );
}

export default App;
