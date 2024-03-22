

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginValidationDonar from './LoginValidationDonar';
import axios from 'axios';

function LoginDonar() {
  const [values, setValues] = useState({
    donarid: '',
    contact: '',
    password: '',
  });
  
  const [errors, setErrors] = useState({});
  const navigate=useNavigate();
  const handleInput = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(LoginValidationDonar(values));
    if(errors.name==="" && errors.contact===""&& errors.password===""&& errors.donarid==="")
    {
      axios.post('http://localhost:8081/logindonar',values)
      .then(res =>{
        console.log(res.data);
        if(res.data==="Success")
        {
          navigate('/donarinside');
        }
        else{
          alert("Please enter correct details");
        }
      } )
      .catch(err => console.log(err));
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className='bg-white p-3 rounded-lg shadow-lg w-50 ' style={{borderRadius:10}}>
      <h2 className=' text-center mb-3' style={{color:'green'}}>Donar Login </h2>
        <form className="mb-2 p-3"onSubmit={handleSubmit} style={{borderRadius:10}}>
        <div className='mb-3'>
            <label htmlFor='donarid'><strong>Donar Id</strong></label>
            <input
              type='text'
              id='donarid'
              placeholder='Enter Donar ID number'
              name='donarid'
              value={values.donarid}
              onChange={handleInput}
              className='form-control'
            />
            {errors.donarid && <div className='text-danger'>{errors.donarid}</div>}
          </div>

          <div className='mb-3'>
            <label htmlFor='contact'><strong>Mobile Number</strong></label>
            <input
              type='number'
              id='contact'
              placeholder='Enter mobile number'
              name='contact'
              value={values.contact}
              onChange={handleInput}
              className='form-control'
            />
            {errors.contact && <div className='text-danger'>{errors.contact}</div>}
          </div>

          <div className='mb-3'>
            <label htmlFor='password'><strong>Password</strong></label>
            <input
              type='password'
              id='password'
              placeholder='Enter password'
              name='password'
              value={values.password}
              onChange={handleInput}
              className='form-control'
            />
            {errors.password && <div className='text-danger'>{errors.password}</div>}
          </div>

          <button type='submit' className='btn btn-success w-100'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginDonar;

  


  

  

  