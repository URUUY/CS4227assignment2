import React from 'react';
import './App.css';
import ResearchInput from './components/ResearchInput';
import ResearchList from './components/ResearchList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>RMS</h1>
        <ResearchInput />
        <ResearchList />
      </header>
    </div>
  );
}

export default App;