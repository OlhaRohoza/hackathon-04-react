import React from 'react'

import { DateTime } from 'luxon';
import './Card.css';
function FlightTable({ flights }) {
  return (
    <div>
     
      <table>
        <thead>
          <tr>
            <th>Price</th>
            <th>Name of origin</th>
            <th>Code of the origin</th>
            <th>Destination city</th>
            <th>Destination</th>
            <th>Date and Time of Departure</th>
            <th>Date and Time of Arrival to Destination </th>
            <th>Routes </th>
            <th>Total Duration </th>
          </tr>
        </thead>
        <tbody>
          {flights && (flights.map((flight, i) => (
            <tr key={i}>
              <td>{flight.price} </td>
              <td>{flight.cityFrom} </td>
              <td>{flight.flyFrom} </td>
              <td>{flight.cityTo} </td>
              <td>{flight.flyTo} </td>
              <td>{DateTime.fromMillis(flight.dTime * 1000).toFormat('hh:mm')} </td>
              <td>{DateTime.fromMillis(flight.aTime * 1000).toFormat('hh:mm')}</td>
              <td>
              {flight.route.map((route,i) =>(
                <p key={i}>Fly  from {route.cityFrom} to {route.cityTo} </p>
              ))}
              </td>
              <td> {DateTime.fromMillis(flight.duration.total * 1000).toFormat('hh:mm')}hr</td>
            </tr>
            


          )))}

        </tbody>

      </table>


    </div>
  )
}

export default FlightTable
