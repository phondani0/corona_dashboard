import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <header>
          <h3>Corona Dashboard</h3>
        </header>
        <Dashboard />
      </Container>
    </div>
  );
}

export default App;
