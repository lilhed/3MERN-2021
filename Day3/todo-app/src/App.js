import React from 'react';
import logo from './logo.svg';
import './App.css';
import Lists from './components/Lists'

class App extends React.Component {
  render(){
    return(
      <div className="App">
        <h1 className="App-title">
          Mes tâches à faire
        </h1>
        <Lists />
      </div>
    );
      
    
  }
}

export default App;
