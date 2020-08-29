import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Homepage from './Component/Homepage';





function App() {



  return (
    
    <BrowserRouter basename="/Entertainment/">
    <div className="App">
      <header className="App-header">
       
        <Homepage/>
        <a
className="App-link"
href="www.kbclearn.com"
target="_blank"
rel="noopener noreferrer"
>
Learn React
</a>
        
      </header>
    </div>
    </BrowserRouter>
    
  );
}

export default App;


