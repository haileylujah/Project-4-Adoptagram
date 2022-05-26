import React, { useState } from "react";
import "./LoginPage.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import { useNavigate } from "react-router-dom";
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'
import HomeHeader from "../../components/HomeHeader/HomeHeader";



export default function LoginPage(props) {
  const [error, setError] = useState("");
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await userService.login(state);
      props.handleSignUpOrLogin();
      navigate("/pets");
    } catch (err) {
      setError(err.message);
    }
  }

  return (

      <Grid
        textAlign="center"
        verticalAlign="middle"
      >
                  <Grid.Row>
            <Grid.Column>
              <HomeHeader />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="blue" textAlign="center">
            <Image src="https://labellefoundation.org/wp-content/uploads/2022/03/cropped-Labelle_Logo_Desing_Only.png" /> Log-in to your
            account
          </Header>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Segment stacked>
              <Form.Input
                type="username"
                name="username"
                placeholder="Username"
                value={state.username}
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
              <Button
                color="blue"
                fluid
                size="large"
                type="submit"
                className="btn"
              >
                Login
              </Button>
            </Segment>
          </Form>
          {error ? <ErrorMessage error={error} /> : null}
        </Grid.Column>
        </Grid.Row>
      </Grid>

  );
}
