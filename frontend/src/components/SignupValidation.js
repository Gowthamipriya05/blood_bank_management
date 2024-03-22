function SignupValidation(values)
{
  let error={}
  const contact_pattern=/[6789][0-9]{9}/
  const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const password_pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

  if(values.password ==="")
  {
    error.password="Name should not be empty"
  }
  else if(!password_pattern.test(values.password)) {
    error.password="Password didn't match"
  }
  else{
    error.password=""
  }

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

  if(values.email ==="")
  {
    error.email="Name should not be empty"
  }
  else if(!email_pattern.test(values.email)) {
    error.email="email didn't match"
  }
  else{
    error.email=""
  }

  if(values.fname ==="")
  {
    error.fname="Name should not be empty"
  }
  else{
    error.fname=""
  }

  if(values.lname ==="")
  {
    error.lname="Name should not be empty"
  }
  else{
    error.lname=""
  }

  if(values.address ==="")
  {
    error.address="Name should not be empty"
  }
  else{
    error.address=""
  }

  if(values.age ==="")
  {
    error.age="Name should not be empty"
  }
  else{
    error.age=""
  }

  if(values.bloodgroup ==="")
  {
    error.bloodgroup="Name should not be empty"
  }
  else{
    error.bloodgroup=""
  }

  if(values.gender ==="")
  {
    error.gender="Name should not be empty"
  }
  else{
    error.gender=""
  }
  return error;
}

export default SignupValidation;