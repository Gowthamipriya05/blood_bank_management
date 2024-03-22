import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import LoginValidationAddBloodGroup from './LoginValidationAddBloodGroup';

function AddBloodGroup() {

  const [values, setValues] = useState({
    name: "",
    address:"",
    contact:"",
    bloodgroup: "",
    quantity:"",
    price:""
  });

  const [errors, setErrors] = useState({});
  const navigate=useNavigate();

  const handleInput = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(LoginValidationAddBloodGroup(values));
    if(errors.name===""&& errors.address===""&& errors.contact===""&& errors.bloodgroup===""&& errors.quantity===""&& errors.price==="")
    {
      axios.post('http://localhost:8081/insertbloodgroups',values)
      .then(res =>{
        console.log(res.data);
        navigate('/donarinside');
      } )
      .catch(err => console.log(err));
    }
  };

  return (
    <div className='container-fluid'>
      <div className='row justify-content-center align-items-center vh-100'>
        <div className='col-md-6'>
          <div className='bg-white p-3 rounded-lg shadow-lg' style={{borderRadius:10}}>
            <h2 className='text-center mb-3' style={{color:'green'}}>Add Blood Group </h2>
            <form onSubmit={handleSubmit} style={{borderRadius:10}}>
              <div className='mb-3'>
                <label htmlFor='name'><strong>Blood Bank Name</strong></label>
                <input
                  type='text'
                  id='name'
                  placeholder='Enter blood bank name'
                  name='name'
                  value={values.name}
                  onChange={handleInput}
                  className='form-control'
                />
                {errors.name && <div className='text-danger'>{errors.name}</div>}
              </div>

              <div className='mb-3'>
                <label htmlFor='address'><strong>Blood Bank Address</strong></label>
                <input
                  type='text'
                  id='address'
                  placeholder='Enter blood bank address'
                  name='address'
                  value={values.address}
                  onChange={handleInput}
                  className='form-control'
                />
                {errors.address && <div className='text-danger'>{errors.address}</div>}
              </div>

              <div className='mb-3'>
                <label htmlFor='contact'><strong>Mobile Number</strong></label>
                <input
                  type='number'
                  id='contact'
                  placeholder='Enter blood bank mobile number'
                  name='contact'
                  value={values.contact}
                  onChange={handleInput}
                  className='form-control'
                />
                {errors.contact && <div className='text-danger'>{errors.contact}</div>}
              </div>

              <div className='mb-3'>
                <label htmlFor='bloodgroup'><strong>Blood Group Available</strong></label>
                <input
                  type='text'
                  id='bloodgroup'
                  placeholder='Enter blood group available'
                  name='bloodgroup'
                  value={values.bloodgroup}
                  onChange={handleInput}
                  className='form-control'
                />
                {errors.bloodgroup && <div className='text-danger'>{errors.bloodgroup}</div>}
              </div>

              <div className='mb-3'>
                <label htmlFor='quantity'><strong>Blood Group Quantity Available in Packets</strong></label>
                <input
                  type='number'
                  id='quantity'
                  placeholder='Enter blood group quantity available in packets'
                  name='quantity'
                  value={values.quantity}
                  onChange={handleInput}
                  className='form-control'
                />
                {errors.quantity && <div className='text-danger'>{errors.quantity}</div>}
              </div>

              <div className='mb-3'>
                <label htmlFor='price'><strong>Blood Group Packet Price</strong></label>
                <input
                  type='number'
                  id='price'
                  placeholder='Enter blood group packet price'
                  name='price'
                  value={values.price}
                  onChange={handleInput}
                  className='form-control'
                />
                {errors.price && <div className='text-danger'>{errors.price}</div>}
              </div>

              <button type='submit' className='btn btn-success w-100'>
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBloodGroup;
