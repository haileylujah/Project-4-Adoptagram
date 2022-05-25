import React from "react";
import { Link } from "react-router-dom";
import { Header, Segment, Image, Icon } from "semantic-ui-react";

export default function PageHeader({ user, handleLogout }) {
    console.log(user, 'user in header')
  return (
    <Segment clearing>

      <Header as="h1" floated="left">
        <Link to="/">
        <Image src="https://github.com/haileylujah/Project-4-Adoptagram/blob/master/public/logo.png?raw=true"></Image>
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
        <span> </span>
      <Link to="/addpet">
          <Icon 
          size="small"
          name="add">
          </Icon>
          {/* Add Pet */}
        </Link>


        <span> </span>
        <Link to="" onClick={handleLogout}>
        <Icon
        size="small"
        name="logout">
        </Icon>
        {/* Logout */}
        </Link>
      </Header>

    </Segment>
  );
}