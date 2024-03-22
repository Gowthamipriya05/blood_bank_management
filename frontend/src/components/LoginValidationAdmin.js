function LoginValidationAdmin(values)
{
  let error={}
  const contact_pattern=/[6789][0-9]{9}/
  const password_pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

  if(values.password ==="")
  {
    error.password="Password should not be empty"
  }
  else if(!password_pattern.test(values.password)) {
    error.password="Password didn't match"
  }
  else{
    error.password=""
  }

  if(values.contact ==="")
  {
    error.contact="Contact should not be empty"
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


  if(values.adminid ==="")
  {
    error.adminid="Id should not be empty"
  }
  else{
    error.adminid=""
  }

  return error;
}

export default LoginValidationAdmin;