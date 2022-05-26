import React, { useState, useEffect } from "react";
import PageHeader from "../../components/Header/Header";
import ProfileGallery from "../../components/ProfileGallery/ProfileGallery";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loading from "../../components/Loader/Loader";
import * as postsAPI from "../../utils/postApi";
import * as likesAPI from '../../utils/likeApi';
import { Grid, Segment, Icon } from "semantic-ui-react";


export default function Feed({user, handleLogout}) {
    console.log(postsAPI, " <-- postsAPI")
    const [posts, setPosts] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    async function addLike(postId){
        try {
          const data = await likesAPI.create(postId)
          console.log(data, ' <- the response from the server when we make a like');
          getPosts(); 
        } catch(err){
          console.log(err)
          setError(err.message)
        }
      }

      async function removeLike(likeId){
        try {
          const data = await likesAPI.removeLike(likeId);
          console.log(data, '<-  this is the response from the server when we remove a like')
          getPosts()
          
        } catch(err){
          console.log(err);
          setError(err.message);
        }
      }

      async function getPosts() {
        try {
          const data = await postsAPI.getAll();
          console.log(data, " this is data,");
          setPosts([...data.posts]);
          setLoading(false);
        } catch (err) {
          console.log(err.message, " this is the error");
          setError(err.message);
        }
      }

      useEffect(() => {
        getPosts();
      }, []);

      if (error) {
        return (
          <>
            <PageHeader handleLogout={handleLogout} user={user}/>
            <ErrorMessage error={error} />;
          </>
        );
      }
    
      if (loading) {
        return (
          <>
            <PageHeader handleLogout={handleLogout} user={user}/>
            <Loading />
          </>
        );
      } 
    
      return (
        <Grid centered>
          <Grid.Row>
            <Grid.Column>
              <PageHeader handleLogout={handleLogout} user={user}/>
            </Grid.Column>
          </Grid.Row>
          <Segment>
            <span><h4><Icon name="heart"></Icon>My Cutie Pie Collection  <Icon name="heart"></Icon></h4></span>
          </Segment>
          <Grid.Row>
            <Grid.Column style={{ maxWidth: 1500 }}>
              <ProfileGallery
                posts={posts}
                numPhotosCol={4}
                isProfile={false}
                loading={loading}
                addLike={addLike}
                removeLike={removeLike}
                user={user}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      );
    }
    