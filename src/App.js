import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

import { SearchBar } from './SearchBar';

function App() {
  // DateTime.fromMillis(datetimeFromREST * 1000).toFormat('hh:mm')

  const [results, setResults] = useState([]);

  const [flyFrom, setFlyfrom] = useState('PRG');
  const [flyTo, setFlyto] = useState('VLC');
  const [dateFrom, setDatefrom] = useState('01/07/2022');
  const [dateTo, setDateto] = useState('01/07/2022');
  const [directFlights, setDirectflights] = useState(false);
  const [limit, setLimit] = useState('5');

  // const flyFrom = 'PRG';
  // const flyTo = 'VLC';

  const partner = 'data4youcbp202106';
  const url = `https://api.skypicker.com/flights?fly_from=${flyFrom}&fly_to=${flyTo}&date_from=${dateFrom}&date_to=${dateTo}&direct_flights=${directFlights}&limit=${limit}&partner=${partner}`;

  // 

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

  }

  console.log(flyFrom);
  console.log(flyTo);
  console.log(dateFrom);
  console.log(dateTo);
  console.log(limit);
  console.log(directFlights);

  useEffect(() => {
    fetchData();
  }, [])


  return (
    <div className="App">
      {/* <h1>flights is loading</h1> */}
      <SearchBar setFlyfrom={setFlyfrom} setFlyto={setFlyto} setDatefrom={setDatefrom} setDateto={setDateto} directFlights={directFlights} setDirectflights={setDirectflights} setLimit={setLimit} fetchData={fetchData} />
    </div>
  );
}

export default App;
