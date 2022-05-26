import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'
import userService from "../../utils/userService";
import { useNavigate } from "react-router-dom";
import HomeHeader from "../../components/HomeHeader/HomeHeader";


export default function SignUpPage(props) {

  const navigate = useNavigate()

  const [error, setError] = useState('')
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: ''
  })

  const [selectedFile, setSelectedFile] = useState('');


  function handleChange(e){
    setState({
      ...state, 
      [e.target.name]: e.target.value
    })
  }

  function handleFileInput(e){
    console.log(e.target.files);
    setSelectedFile(e.target.files[0]);
  }

  async function handleSubmit(e){
    e.preventDefault()
    
    const formData = new FormData();
    formData.append('photo', selectedFile);
    
    for (let fieldName in state){
      formData.append(fieldName, state[fieldName])
    }
   
    try {
        console.log(formData.forEach((item) => console.log(item)))
        
        await userService.signup(formData)
        props.handleSignUpOrLogin();
        navigate('/pets')

      } catch(err){
        console.log(err.message);
        setError(err.message)
      }
  
    }


return (
  <Grid
  textAlign="center"
  verticalAlign="middle"
>           <Grid.Row>
            <Grid.Column>
              <HomeHeader />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h2" color="blue" textAlign="center">
        <Image src="https://labellefoundation.org/wp-content/uploads/2022/03/cropped-Labelle_Logo_Desing_Only.png" /> Sign Up
      </Header>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Segment stacked>
          <Form.Input
            name="username"
            placeholder="Username"
            value={state.username}
            onChange={handleChange}
            required
          />
          <Form.Input
            type="email"
            name="email"
            placeholder="Email"
            value={state.email}
            onChange={handleChange}
            required
          />
          <Form.Input
            name="password"
            type="password"
            placeholder="Password"
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
          <Button color="blue" type="submit" className="btn">
            Signup
          </Button>
        </Segment>
        {error ? <ErrorMessage error={error} /> : null}
      </Form>
    </Grid.Column>
    </Grid.Row>
  </Grid>
);
}