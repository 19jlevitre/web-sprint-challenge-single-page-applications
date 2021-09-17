import React from 'react'
// We'll need React Router's own version of the History API
import { useHistory } from 'react-router-dom';

export default function Homepage() {
  // 👉 STEP 5 - Build a click handler that will imperatively
  // navigate us to <website base URL>/items-list
  const history = useHistory();

  const routeToForm = () => {
    history.push('/pizza');
  }

  return (
    <div className='home-wrapper'>
      <h1>Lambda Eats</h1>
      <img
        className='home-image'
         src='../Assets/Pizza.jpg'
        alt=''
      />

      <button
        onClick={routeToForm}
        className='pizza-button'
        id='order-pizza'
      >
        Pizza?
      </button>
    </div>
  )
}