import React, { useState}  from "react";
import { Link } from "react-router-dom";
import { Header, Segment, Image, Icon } from "semantic-ui-react";
import userService from '../../utils/userService';
export default function HomeHeader(props) {
    const [user, setUser] = useState(userService.getUser()) // getUser decodes our JWT token, into a javascript object
    // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like
    // this  const token = createJWT(user); // where user was the document we created from mongo
  
    function handleSignUpOrLogin(){
      setUser(userService.getUser()) // getting the user from localstorage decoding the jwt
    }
  
    function handleLogout() {
      userService.logout();
      setUser(null);
    }
    if(user) {

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
                <Link to="/" onClick={handleLogout}>
                <Icon
                size="mid"
                name="power off">
                </Icon>
                </Link>
              </Header>
        
            </Segment>
          );
     } 
     
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