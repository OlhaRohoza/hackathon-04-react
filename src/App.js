import logo from './logo.svg';


import image from './image.jpg';
import './App.css';
import { useState, useEffect } from 'react';
import FlightTable from './FlightTable';
import { SearchBar } from './SearchBar';

function App() {
  const [flights, setFlights] = useState([]);

  const [flyFrom, setFlyfrom] = useState('PRG');
  const [flyTo, setFlyto] = useState('VLC');
  const [dateFrom, setDatefrom] = useState('01/07/2022');
  const [dateTo, setDateto] = useState('01/07/2022');
  const [directFlights, setDirectflights] = useState(false);
  const [limit, setLimit] = useState(5);
  const [offset, setOffset] = useState(0);
  const [numberFlights, setNumberflights] = useState(0);
  const [fetched, setFetched] = useState(false);

  // const flyFrom = 'PRG';
  // const flyTo = 'VLC';

  const partner = 'data4youcbp202106';
  const url = `https://api.skypicker.com/flights?fly_from=${flyFrom}&fly_to=${flyTo}&date_from=${dateFrom}&date_to=${dateTo}&direct_flights=${directFlights}&offset=${offset}&limit=${limit}&partner=${partner}`;

  async function fetchData() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      console.log(data._results);
      setFetched(true);
      setNumberflights(data._results);
      return setFlights(data.data);

    } catch (err) {
      console.log(err);
    }

  }

  console.log(flyFrom);
  console.log(flyTo);
  console.log(dateFrom);
  console.log(dateTo);
  console.log(limit);
  console.log(directFlights);
  console.log(offset);

  useEffect(() => {
    fetched && fetchData();
  }, [offset]);


  return (
    <div className="App">
      <div>
        <main className="span" >
          <img src={image} alt="" />
          <h1>Find and Compare cheap <span>Flights</span></h1>
        </main>
      </div>
      {/* <h1>flights is loading</h1> */}
      <>
        <SearchBar setFlyfrom={setFlyfrom} setFlyto={setFlyto} setDatefrom={setDatefrom} setDateto={setDateto} directFlights={directFlights} setDirectflights={setDirectflights} setLimit={setLimit} fetchData={fetchData} />
        <br />
        {fetched && (!!flights.length
          ? <><FlightTable flights={flights} />
            <div className='buttons--add-more'>

              <br />
              <button disabled={offset == 0} onClick={() => setOffset(offset === 0 ? offset : Number(offset) - Number(limit))}>Previous</button>
              <button disabled={(Number(offset) + Number(limit)) >= numberFlights} onClick={() => setOffset(Number(offset) + Number(limit))}>Next</button>
            </div></>

          : <p>No flights are found on the selected route</p>)}
      </>

    </div >
  );
}

export default App;
