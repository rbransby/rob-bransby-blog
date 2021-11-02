import React from 'react';
import logo from './logo.svg';
import './App.css';
import ResponsiveDrawer from './components/ResponsiveDrawer';

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <h1 className="code-green">&lt;Rob-Bransby-Blog /&gt;</h1>     
      </header>
      <body>
        <ResponsiveDrawer />
      </body>
    </div>
  );
}

export default App;
