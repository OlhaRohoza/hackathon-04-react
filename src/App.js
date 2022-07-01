import logo from './logo.svg';



import './App.css';
import { useState, useEffect } from 'react';
import FlightTable from './FlightTable';

function App() {
  const [flights,setFlights] = useState ([]);
  const flyFrom = 'PRG';
  const flyTo = 'VLC';

  const partner = 'data4youcbp202106';
  const url = `https://api.skypicker.com/flights?fly_from=${flyFrom}&fly_to=${flyTo}&partner=${partner}`;

  async function fetchData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)
       return setFlights(data.data);
    } catch(err) {
      console.log(err);
    }
}
    

  useEffect(() => {
    fetchData(url);
  }, []);


  return (
    <div className="App">
      <h1>flights is loading</h1>
      
     
        <FlightTable  flights ={flights} /> 
        

       
      
    </div>
  );
}

export default App;
