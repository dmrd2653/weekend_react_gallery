import React from 'react';
import './App.css';

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>

        <div className="flex-container"> 

          <div className="gallery-images"> 
            <img src="images/art.jpg"/> 
          </div>
          
          <div className="gallery-images"> 
            <img src="images/baking.jpg"/> 
          </div>
          
          <div className="gallery-images"> 
            <img src="images/gardening.jpg"/> 
          </div>
          
          <div className="gallery-images"> 
            <img src="images/my_cat.jpg"/> 

          </div>
        </div>

      </div>
    );
}

export default App;
