import React from 'react';
import OnBoard from './components/onboard/onboard'
import Dashboard from './components/dashboard/dashboard'
import './App.css';

function App() {
  return (
    <div className="App">
      I am the App component.
      <OnBoard />
      <br/>
      <Dashboard />
    </div>
  );
}

export default App;
