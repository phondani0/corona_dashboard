import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <header>
          <h2 style={{ color: 'red', textTransform: "uppercase" }}>Corona Dashboard</h2>
        </header>
        <Dashboard />
      </Container>
    </div>
  );
}

export default App;
