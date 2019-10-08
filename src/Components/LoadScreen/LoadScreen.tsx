import React from 'react';
import logo from '../../Assets/logos/kaleidoscope-2.svg';

const LoadScreen: React.FC = () => 
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Starting Up The Streams...</p>
    </header>

export default LoadScreen;