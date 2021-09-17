import React from 'react'
import styled from 'styled-components'
export default function PizzaForm(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props


const onSubmit = evt => {
    evt.preventDefault()
    submit()
}

const onChange = evt => {
    const { name, value, checked, type } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
}

const StyledForm = styled.form`
display: flex;
justify-content: center;
background-color: #e8c476;
align-items: center;
flex-direction: column;
height: 80vh;

h2{
    font-size: 3rem;
    color: red;
}
button{
    width: 30%;
    height: 3vh;

}
input{
    width: 80%;
    display: flex;
    justify-content: spaced-evenly;
    font-size: 1.5rem;
}

`
    
const StyledWrapper = styled.div`
width: 50%

`

return (
        <StyledForm id='pizza-form' className='form-container' onSubmit={onSubmit}>
            <div className='form-submit' >
            <h2>Get Your Pizza</h2>
            
            

            <div className='errors'>
                <div>{errors.name}</div>
            </div>
        </div>
        
        <StyledWrapper className='inputs'>
        <label>Name:
            <input 
             value={values.name}
             id='name-input' 
             type='text'
             name='name'
             onChange={onChange}
             />
        </label>
        
        <div className='dropdown'>
        <label>Size:
        <select value={values.size} id='size-dropdown' type='' name='size' onChange={onChange} >
    
        <option value=''>-- Select a size --</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            <option value="X-Large">X-Large</option>
        
        </select>
        </label>
        </div>
        
        <div className='checkboxes'>
        
        <label>Toppings:  
        
        <label>Cheese
        <input
              type="checkbox"
              name="cheese"
              checked={values.cheese}
              onChange={onChange}
              />
        </label>
        <label>Olives
        <input
              type="checkbox"
              name="olives"
              checked={values.olives}
              onChange={onChange}
              />
        </label>
        <label>Bacon
        <input
              type="checkbox"
              name="bacon"
              checked={values.bacon}
              onChange={onChange}
              />
        </label>
        <label>Pepperoni
        <input
              type="checkbox"
              name="pepperoni"
              checked={values.pepperoni}
              onChange={onChange}
              />
        </label>

        <label>Special Instructions:
        <input 
        id='special-text' 
        type='text'
        name='specialinfo'
        value={values.specialinfo}
        onChange={onChange}
        />
        </label>
        
        </label>
        </div>
        <button id='order-button' disabled={disabled}>submit</button>
        </StyledWrapper>
        </StyledForm>
        
    )
}