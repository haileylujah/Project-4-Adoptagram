import React, { useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import Feed from '../Feed/Feed'; 
import ProfilePage from '../ProfilePage/ProfilePage';
import LikePage from '../LikePage/LikePage';
import AddPostPage from '../AddPostPage/AddPostPage';
import HomePage from '../HomePage/HomePage'; 

function App() {
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
      <Routes>
        <Route
          path="/pets"
          element={<Feed user={user} handleLogout={handleLogout} />}
        />

        <Route
          path="/login"
          element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route
          path="/signup"
          element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route
          path="/addpet"
          element={<AddPostPage user={user} handleLogout={handleLogout} />}
        />
        <Route 
          path="/:username" 
          element={<ProfilePage user={user} handleLogout={handleLogout}  />}
         />
        <Route 
          path="/likes" 
          element={<LikePage user={user} handleLogout={handleLogout}  />}
         />
      </Routes>
      )
    }

    return (
      <Routes>
        <Route
          path="/login"
          element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route
          path="/signup"
          element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route
          path="/"
          element={<HomePage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        {/* <Route path="/*" element={<Navigate to="/login" />} /> */}
      </Routes>
    );
  }
  
  
  export default App;
