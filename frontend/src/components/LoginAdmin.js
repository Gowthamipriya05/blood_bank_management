import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../index.css";
import LoginValidationAdmin from './LoginValidationAdmin';

function LoginAdmin() {

  const [values, setValues] = useState({
    adminid: "",
    name:"",
    contact:"",
    Password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate=useNavigate();

  const handleInput = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(LoginValidationAdmin(values));
    if(errors.adminid===""&& errors.password==="")
    {
      axios.post('http://localhost:8081/loginadmin',values)
      .then(res =>{
        console.log(res.data);
        if(res.data="Success"){
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
      <h2 className=' text-center mb-3' style={{color:'green'}}>Admin Login </h2>
        <form className="mb-2 p-3"onSubmit={handleSubmit} style={{borderRadius:10}}>
        <div className='mb-3'>
            <label htmlFor='adminid'><strong>Admin Id</strong></label>
            <input
              type='text'
              id='adminid'
              placeholder='Enter admin ID number'
              name='adminid'
              value={values.adminid}
              onChange={handleInput}
              className='form-control'
            />
            {errors.adminid && <div className='text-danger'>{errors.adminid}</div>}
          </div>

          <div className='mb-3'>
            <label htmlFor='name'><strong>Admin Name</strong></label>
            <input
              type='text'
              id='name'
              placeholder='Enter admin name'
              name='name'
              value={values.name}
              onChange={handleInput}
              className='form-control'
            />
            {errors.name && <div className='text-danger'>{errors.name}</div>}
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

export default LoginAdmin;

  


  

  

  