import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const flyFrom = 'PRG';
  const flyTo = 'VLC';

  const partner = 'data4youcbp202106';
  const url = `https://api.skypicker.com/flights?fly_from=${flyFrom}&fly_to=${flyTo}&partner=${partner}`;

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

  }

  useEffect(() => {
    fetchData();
  }, [])


  return (
    <div className="App">
      <h1>flights is loading</h1>
    </div>
  );
}

export default App;
