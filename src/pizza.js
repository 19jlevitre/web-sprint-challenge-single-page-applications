import React from 'react'
import styled from 'styled-components'

function Pizza({ details }) {
  const StyledPizza = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5%;
  background-color: #e8c476;

  h2{
      color: red;
  }
  `
  
    if (!details) {
    return <h3>Working fetching your Pizza details...</h3>
  }

  return (
    <StyledPizza className='pizza container'>
      <h2>{details.name}</h2>
      <p>Special Info: {details.specialinfo}</p>
      <p>Bacon: {details.bacon.toString()}</p>
      <p>Olives: {details.olives.toString()}</p>
      <p>Cheese: {details.cheese.toString()}</p>
      <p>Pepperoni: {details.pepperoni.toString()}</p>
      <p>Size: {details.size}</p>
      
    </StyledPizza>
  )
}

export default Pizza