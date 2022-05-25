import React from "react";
import { Link } from "react-router-dom";
import { Header, Segment, Image, Icon } from "semantic-ui-react";

export default function PageHeader({ user, handleLogout }) {
    console.log(user, 'user in header')
  return (
    <Segment clearing>
      <Header as="h1" floated="left">
        <Link to="/">
          <Icon 
            size="large" 
            name="paw"
            color="blue"></Icon>
        </Link>
        <Link to="/addpet">
          <Icon name="add"></Icon>
          {/* <h2>Add Pets</h2> */}
        </Link>
      </Header>
      {/* <Header>ADOPTAGRAM</Header> */}
      <Header as="h1" floated="right">
        <Link to={`/${user?.username}`}>
          <Image
            src={
              user?.photoUrl
                ? user?.photoUrl
                : "https://react.semantic-ui.com/images/wireframe/square-image.png"
            }
            avatar
          ></Image>
        </Link>
        <Link to="" onClick={handleLogout}>
          <sec>Logout</sec>
        </Link>
      </Header>
    </Segment>
  );
}