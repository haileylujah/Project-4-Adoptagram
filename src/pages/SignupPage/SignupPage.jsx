import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'
import userService from "../../utils/userService";
import { useNavigate } from "react-router-dom";


export default function SignUpPage(props) {

  const navigate = useNavigate()

  const [error, setError] = useState('')
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  })

  const [selectedFile, setSelectedFile] = useState('');

  async function handleSubmit(e){
    e.preventDefault()
    
    const formData = new FormData()
    formData.append('photo', selectedFile)
    
    for (let fieldName in state){
      console.log(fieldName, state[fieldName])
      formData.append(fieldName, state[fieldName])
    }
   
    try {
        console.log(formData.forEach((item) => console.log(item)))
        
        await userService.signup(formData);

      } catch (err) {

        console.log(err.message)
        setError(err.message)
      }
  }


  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  function handleFileInput(e){
    console.log(e.target.files)
    setSelectedFile(e.target.files[0])
  }


  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
   <Grid.Column style={{ maxWidth: 450 }}>
     <Header as="h2" color="teal" textAlign="center">
       <Image src="https://www.nicepng.com/png/detail/647-6472469_we-provide-emergency-shelter-and-affordable-housing-blue.png" /> Sign Up
     </Header>
     <Form autoComplete="off" onSubmit={handleSubmit}>
       <Segment stacked>
         <Form.Input
           name="username"
           placeholder="username"
           value={state.username}
           onChange={handleChange}
           required
         />
         <Form.Input
           type="email"
           name="email"
           placeholder="email"
           value={state.email}
           onChange={handleChange}
           required
         />
         <Form.Input
           name="password"
           type="password"
           placeholder="password"
           value={state.password}
           onChange={handleChange}
           required
         />
         <Form.Input
           name="passwordConfirm"
           type="password"
           placeholder="Confirm Password"
           value={state.passwordConfirm}
           onChange={handleChange}
           required
         />
         <Form.Field>
           <Form.Input
             type="file"
             name="photo"
             placeholder="upload image"
             onChange={handleFileInput}
           />
         </Form.Field>
         <Button color="pink" type="submit" className="btn">
           Signup
         </Button>
       </Segment>
       {error ? <ErrorMessage error={error} /> : null}
     </Form>
   </Grid.Column>
 </Grid>

   );
  }