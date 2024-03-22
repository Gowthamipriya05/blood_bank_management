import React, { useState } from 'react';
import LoginValidationPatient from './LoginValidationPatient';
import axios from "axios";
import {useNavigate} from 'react-router-dom';
function LoginPatient() {
  const [values, setValues] = useState({
    name: '',
    patientid: '',
    contact: '',
    password: '',
    age: ''
  });
  const [errors, setErrors] = useState({});
  const navigate=useNavigate();
  const handleInput = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(LoginValidationPatient(values));
    if(errors.name==="" && errors.patientid===""&& errors.contact ==="" && errors.password===""&& errors.age==="")
    {
      axios.post('http://localhost:8081/loginpatient',values)
      .then(res =>{
        console.log(res.data);
        navigate('/patientinside');
      } )
      .catch(err => console.log(err));
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className='bg-white p-3 rounded-lg shadow-lg w-50 ' style={{borderRadius:10}}>
      <h2 className=' text-center mb-3' style={{color:'red'}}> Patient Login </h2>
        <form className="mb-2 p-3"onSubmit={handleSubmit} style={{borderRadius:10}}>
        <div className='mb-3'>
            <label htmlFor='patientid'><strong>Patient Id</strong></label>
            <input
              type='text'
              id='patientid'
              placeholder='Enter patient ID number'
              name='patientid'
              value={values.patientid}
              onChange={handleInput}
              className='form-control'
            />
            {errors.patientid && <div className='text-danger'>{errors.patientid}</div>}
          </div>
          
          <div className='mb-3'>
            <label htmlFor='name'><strong>Patient Name</strong></label>
            <input
              type='text'
              id='name'
              placeholder='Enter patient name'
              name='name'
              value={values.name}
              onChange={handleInput}
              className='form-control'
            />
            {errors.name && <div className='text-danger'>{errors.name}</div>}
          </div>

          <div className='mb-3'>
            <label htmlFor='age'><strong>Patient Age</strong></label>
            <input
              type='number'
              id='age'
              placeholder='Enter patient age'
              name='age'
              value={values.age}
              onChange={handleInput}
              className='form-control'
            />
            {errors.age && <div className='text-danger'>{errors.age}</div>}
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

export default LoginPatient;

  


  

  

  