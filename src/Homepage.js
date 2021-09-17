import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Pizza from './Assets/Pizza.jpg';
export default function Homepage() {
  
  const history = useHistory();

  const routeToForm = () => {
    history.push('/pizza');
  }

  const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: grey;
  margin: 5% 10%;
  h2{
    font-size: 6rem;
    color: red;
  }
  `
  const ImageContain = styled.div`
  background-image: url("${Pizza}");
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  button{
      width: 20%;
      height: 5vh;
      button-radius: 15%;
      font-size: 1.5rem;

  }
  
  `
  return (
    <Wrapper className='home-wrapper'>
      <h2>PIZZA TIME??</h2>
      <ImageContain className="img-container">
      

      <button
        onClick={routeToForm}
        className='pizza-button'
        id='order-pizza'
      >
        Pizza?
      </button>
      </ImageContain>
    </Wrapper>
  )
}