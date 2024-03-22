function LoginValidationAddBloodGroup(values)
{
  let error={}
  const contact_pattern=/[6789][0-9]{9}/

  if(values.contact ==="")
  {
    error.contact="Name should not be empty"
  }
  else if(!contact_pattern.test(values.contact)) {
    error.contact="contact didn't match"
  }
  else{
    error.contact=""
  }


  if(values.name ==="")
  {
    error.name="Name should not be empty"
  }
  else{
    error.name=""
  }


  if(values.address ==="")
  {
    error.address="Name should not be empty"
  }
  else{
    error.address=""
  }

  if(values.price ==="")
  {
    error.price="Name should not be empty"
  }
  else{
    error.price=""
  }

  if(values.quantity ==="")
  {
    error.quantity="Name should not be empty"
  }
  else{
    error.quantity=""
  }

  if(values.bloodgroup ==="")
  {
    error.bloodgroup="Name should not be empty"
  }
  else{
    error.bloodgroup=""
  }

  return error;
}

export default LoginValidationAddBloodGroup;