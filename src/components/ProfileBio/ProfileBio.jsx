import React from "react";
import { Image, Grid, Segment, Icon } from "semantic-ui-react";

function ProfileBio({ user }) {
  return (
    <Grid textAlign="center" columns={1}>
      <Grid.Row>
        <Grid.Column>
          <Image
            src={`${
              user.photoUrl
                ? user.photoUrl
                : "https://react.semantic-ui.com/images/wireframe/square-image.png"
            } `}
            avatar
            size="small"
          />
        </Grid.Column>
        <Grid.Column textAlign="center" style={{ maxWidth: 450 }}>
          <Segment vertical>
            <h3>{user.username}</h3>
          </Segment>
          <Segment>
            <span><h4><Icon name="heart"></Icon>My Cutie Pie Collection  <Icon name="heart"></Icon></h4></span>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default ProfileBio;
