
import { Route, Link, Switch } from 'react-router-dom';
import Homepage from "./Homepage";
import PizzaForm from "./pizzaForm";
import React, {useState, useEffect } from 'react';
import axios from "axios";
import formSchema from './formSchema';
import * as yup from 'yup';
import Pizza from './pizza'
import styled from 'styled-components';
const initialFormValues = {
  name:'',
  specialinfo: '',
  cheese: false,
  bacon: false,
  olives: false,
  pepperoni: false,
  size: '',
}
const initialFormErrors = {
  name: '',
}
const initialPizza = []
const initialDisabled = true
const App = () => {
  const [pizza, setPizza] = useState(initialPizza)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewPizza = newPizza => {
    
    axios.post('https://reqres.in/api/orders', newPizza)
    .then(res => {
      console.log(res.data);
      const data = res.data;
      setPizza([...pizza , data]);
      setFormValues(initialFormValues);
    }).catch(err => {
      console.error(err);
      setFormValues(initialFormValues);
    })
  }

  const validate = (name, value) => {
    yup.reach(formSchema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: ''}))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] })
    )
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({ 
      ...formValues, 
      [name]: value 
    })
  }

  const formSubmit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      specialinfo: formValues.specialinfo.trim(),
      cheese: formValues.cheese,
      bacon:formValues.bacon,
      olives: formValues.olives,
      pepperoni: formValues.pepperoni,
      size: formValues.size
    }
    postNewPizza(newPizza)
  }

  useEffect(() => {
    
    formSchema.isValid(formValues).then
    (valid => setDisabled(!valid))
  }, [formValues])
  
  const HeaderStyle = styled.nav`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h1{
    font-size: 4rem;
    color: red;
  }
  
  `
  return (
    <div className='App'>
    <HeaderStyle>
      <h1 className='page-header'>Lambda Eats</h1>
      <div className='nav-links'>
        <Link to='/'>Home</Link>
  
      </div>
    </HeaderStyle>
      <Switch>
      
    
    <Route path="/pizza">
      <PizzaForm
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      errors={formErrors}
      />
      
      {
      pizza.map(info => {
      return(
      <Pizza key={info.id} details={info}/>
      )
      })
      }

</Route>
<Route path='/'>
      <Homepage/>
    </Route>
      </Switch>
    </div>
  );
};
export default App;
