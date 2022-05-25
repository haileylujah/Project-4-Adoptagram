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
            {/* <sec>Pet List</sec> */}
        </Link>
        <Link to="/addpet">
          {/* <Icon name="plus"></Icon> */}
          Add Pets
        </Link>

      </Header>
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
          <sec>Adios</sec>
        </Link>
      </Header>
    </Segment>
  );
}