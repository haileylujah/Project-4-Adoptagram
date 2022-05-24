import React, { useState } from 'react';
import { Button, Form, Grid, Segment } from 'semantic-ui-react'

export default function AddPetForm(props){
  const [selectedFile, setSelectedFile] = useState('')
  const [state, setState] = useState({
    petName: '',
    petSex: '',
    petAge: '',
    petBreed: '',
    petHealth: ''
  })

  function handleFileInput(e){
    setSelectedFile(e.target.files[0])
  }

  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
             
    const formData = new FormData()
    formData.append('photo', selectedFile)
    formData.append('petName', state.petName)
    formData.append('petSex', state.petSex)
    formData.append('petAge', state.petAge)
    formData.append('petBreed', state.petBreed)
    formData.append('petHealth', state.petHealth)
    props.handleAddPost(formData); 

  }

  return (
    
    <Grid textAlign='center' style={{ height: '25vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Segment>
        
            <Form  autoComplete="off" onSubmit={handleSubmit}>
            
              <Form.Input
                  className="form-control"
                  name="petName"
                  value={state.petName}
                  placeholder="Pet Name"
                  onChange={handleChange}
                  required
              />  
               <Form.Input
                  className="form-control"
                  name="petSex"
                  value={state.petSex}
                  placeholder="Sex"
                  onChange={handleChange}
                  required
              /> 
               <Form.Input
                  className="form-control"
                  name="petAge"
                  value={state.petAge}
                  placeholder="Age"
                  onChange={handleChange}
                  required
              /> 
               <Form.Input
                  className="form-control"
                  name="petBreed"
                  value={state.petBreed}
                  placeholder="Breed"
                  onChange={handleChange}
                  required
              /> 
               <Form.Input
                  className="form-control"
                  name="petHealth"
                  value={state.petHealth}
                  placeholder="Health Condition"
                  onChange={handleChange}
                  required
              />  
              <Form.Input
                className="form-control"
                type="file"
                name="photo"
                placeholder="upload image"
                onChange={handleFileInput}
              />   
              <Button
                color='blue'
                type="submit"
                className="btn"
              >
                ADD PET
              </Button>
            </Form>
          </Segment>
      </Grid.Column>
    </Grid>
   
  ); 
}