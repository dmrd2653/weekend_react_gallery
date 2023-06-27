import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import { GalleryList } from '../GalleryList/GalleryList';

function App() {

  let [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    getGalleryData()
    }, []);

  const getGalleryData = () => {
    fetch('/gallery')
      .then(response => response.json())
      .then(data => {
        setGalleryData(data)
      })
      .catch(error => {
        console.error(error);
      })
}


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryList galleryData={galleryData}
      getGalleryData={getGalleryData}/>
    </div>
    );
}

export default App;
