import React from "react";
import { Link } from "react-router-dom";
import { Header, Segment, Image, Icon } from "semantic-ui-react";

export default function PageHeader({ user, handleLogout }) {
    console.log(user, 'user in header')
  return (
    <Segment clearing>

      <Header as="h1" floated="left">
        <Link to="/pets">
        <Image src="https://github.com/haileylujah/Project-4-Adoptagram/blob/master/public/logo.png?raw=true"></Image>
        </Link>

      </Header>

      <Header as="h1" floated="right">
      <Link to={`/${user?.username}`}>
          <Image
          size="tiny"
            src={
              user?.photoUrl
                ? user?.photoUrl
                : "https://react.semantic-ui.com/images/wireframe/square-image.png"
            }
            avatar
          ></Image>
        </Link>
        <span> </span>
        <Link to="/likes">
          <Icon 
          size="mid"
          name="heart">
          </Icon>
        </Link>
        <span> </span>
      <Link to="/addpet">
          <Icon 
          size="mid"
          name="edit">
          </Icon>
        </Link>
        <span> </span>
        <Link to="/home" onClick={handleLogout}>
        <Icon
        size="mid"
        name="power off">
        </Icon>
        </Link>
      </Header>

    </Segment>
  );
}