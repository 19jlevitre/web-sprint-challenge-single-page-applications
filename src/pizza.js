import React from 'react'

function Pizza({ details }) {
  if (!details) {
    return <h3>Working fetching your Pizza details...</h3>
  }

  return (
    <div className='pizza container'>
      <h2>{details.name}</h2>
      <p>Special Info: {details.specialinfo}</p>
      <p>Bacon: {details.bacon.toString()}</p>
      <p>Olives: {details.olives.toString()}</p>
      <p>Cheese: {details.cheese.toString()}</p>
      <p>Pepperoni: {details.pepperoni.toString()}</p>
      <p>Size: {details.size}</p>
      
    </div>
  )
}

export default Pizza