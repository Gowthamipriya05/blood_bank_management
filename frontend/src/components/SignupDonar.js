import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import SignupValidation from './SignupValidation';
import axios from "axios";


function SignupDonar() {
  const [values, setValues] = useState({
    fname: '',
    lname:'',
    contact:'',
    password: '',
    age: '',
    address:'',
    email:'',
    bloodgroup:'',
    gender:''
  });
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const navigate=useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(SignupValidation(values));
    if(errors.fname==="" && errors.lname==="" && errors.contact===""&& errors.password===""&& errors.age===""&& errors.address===""&& errors.email===""&& errors.bloodgroup===""&& errors.gender==="")
    {
      axios.post('http://localhost:8081/signup',values)
      .then(res =>{
        console.log(res.data);
        navigate('/donarinside');
      } )
      .catch(err => console.log(err));
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className='bg-white p-3 rounded-lg shadow-lg w-50 ' style={{borderRadius:10}}>
      <h2 className=' text-center mb-3' style={{color:'green'}}>Donar Sign Up </h2>
        <form className="mb-2 p-3"onSubmit={handleSubmit} style={{borderRadius:10}}>
          <div className='mb-3'>
            <label htmlFor='fname'><strong>Donar First Name</strong></label>
            <input
              type='text'
              id='fname'
              placeholder='Enter Donar first name'
              name='fname'
              value={values.fname}
              onChange={handleInput}
              className='form-control'
            />
            {errors.fname && <div className='text-danger'>{errors.fname}</div>}
          </div>
          <div className='mb-3'>
            <label htmlFor='lname'><strong>Donar Last Name</strong></label>
            <input
              type='text'
              id='lname'
              placeholder='Enter Donar last name'
              name='lname'
              value={values.lname}
              onChange={handleInput}
              className='form-control'
            />
            {errors.lname && <div className='text-danger'>{errors.lname}</div>}
          </div>


          <div className='mb-3'>
            <label htmlFor='email'><strong>Donar Email</strong></label>
            <input
              type='email'
              id='email'
              placeholder='Enter Donar Email'
              name='email'
              value={values.email}
              onChange={handleInput}
              className='form-control'
            />
            {errors.email && <div className='text-danger'>{errors.email}</div>}
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
          <div className='mb-3'>
            <label htmlFor='age'><strong>Donar Age</strong></label>
            <input
              type='number'
              id='age'
              placeholder='Enter Donar age'
              name='age'
              value={values.age}
              onChange={handleInput}
              className='form-control'
            />
            {errors.age && <div className='text-danger'>{errors.age}</div>}
          </div>

          <div className='mb-3'>
            <label htmlFor='gender'><strong>Donar Gender</strong></label>
            <input
              type='text'
              id='gender'
              placeholder='Enter Donar Blood Group'
              name='gender'
              value={values.gender}
              onChange={handleInput}
              className='form-control'
            />
            {errors.gender && <div className='text-danger'>{errors.gender}</div>}
          </div>
          <div className='mb-3'>
            <label htmlFor='bloodgroup'><strong>Donar Blood Group</strong></label>
            <input
              type='text'
              id='bloodgroup'
              placeholder='Enter Donar Blood Group'
              name='bloodgroup'
              value={values.bloodgroup}
              onChange={handleInput}
              className='form-control'
            />
            {errors.bloodgroup && <div className='text-danger'>{errors.bloodgroup}</div>}
          </div>

          <div className='mb-3'>
            <label htmlFor='address'><strong>Donar Address</strong></label>
            <input
              type='text'
              id='address'
              placeholder='Enter Donar address'
              name='address'
              value={values.address}
              onChange={handleInput}
              className='form-control'
            />
            {errors.address && <div className='text-danger'>{errors.address}</div>}
          </div>

          <button type='submit' className='btn btn-success w-100'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupDonar;

  


  

  

  