import React from "react";
import { Link } from "react-router-dom";
import { Header, Segment, Image, Icon } from "semantic-ui-react";

export default function HomeHeader(props) {
  return (
    <Segment clearing>

      <Header as="h1" floated="left">
        <Link to="/login">
        <Image src="https://github.com/haileylujah/Project-4-Adoptagram/blob/master/public/logo.png?raw=true"></Image>
        </Link>
      </Header>

      <Header as="h1" floated="right">
      <Link to="/signup">
        <Icon name="user plus"></Icon>
        </Link>
        <span> </span>
        <Link to="/login">
        <Icon name="sign-in"></Icon>
        </Link>

      </Header>

    </Segment>
  );
}