import React from 'react'

import { DateTime } from 'luxon';
 import './Card.css';
function FlightTable({flights}) {
  return (
    <div>
     
      <table>
      <thead className="main">
        
        <th>Price</th>
        <th>Name of origin</th>
        <th>Code of the origin</th>
        <th>Destination city</th>
        <th>Destination</th>
        <th>Date and Time of Departure</th>
        <th>Date and Time of Arrival to Destination </th>
      </thead>
      <tbody>
      { flights && (flights.map((flight,i)=>( 
         <tr>
          
         <td>{flight.price} </td>
         <td>{flight.cityFrom} </td>
         <td>{flight.flyFrom} </td>
         <td>{flight.cityTo} </td>
         <td>{flight.flyTo} </td>
         <td>{DateTime.fromMillis(flight.dTime * 1000).toFormat('hh:mm')} </td>
         <td>{DateTime.fromMillis(flight.aTime * 1000).toFormat('hh:mm')}</td>
       </tr> 
        

       )))} 
        
      </tbody>
       
      </table>
        
      
    </div>
  )
}

export default FlightTable
