import React from 'react';
import './App.css';
import CacheForm from './components/CacheForm';
import FetchForm from './components/FetchForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Least Recently Used - Cache Management System</h1>
        <div className="forms-container">
          <CacheForm />
          <FetchForm />
        </div>
      </header>
    </div>
  );
}

export default App;
