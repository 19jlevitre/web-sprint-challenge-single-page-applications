
import { Route, Link, Switch } from 'react-router-dom';
import Homepage from "./Homepage";
import PizzaForm from "./pizzaForm";
import React, {useState, useEffect } from 'react';
import axios from "axios";
import schema from './formSchema';
import * as yup from 'yup';
import Pizza from './pizza'
const initialFormValues = {
  name:'',
  specialinfo: '',
  bacon: false,
  olives: false,
  pepperoni: false,
  cheese: false,
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
      setPizza([res.data, ...pizza]);
      setFormValues(initialFormValues);
    }).catch(err => {
      console.error(err);
      setFormValues(initialFormValues);
    })
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
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
      toppings: ['cheese', 'olives', 'pepperoni', 'bacon'].filter(topping =>
        !!formValues[topping])
    }
    postNewPizza(newPizza)
  }

  useEffect(() => {
    
    schema.isValid(formValues).then
    (valid => setDisabled(!valid))
  }, [formValues])
  
  return (
    <div className='App'>
    
      <Route path='/'>
      <Homepage/>
    </Route>
    
    <Route path="/pizza">
      <PizzaForm
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      errors={formErrors}
      />
      
      {pizza.map(info => {
      return(
      <Pizza details={info}/>
      )
      })
      }
      
</Route>
      
    </div>
  );
};
export default App;
