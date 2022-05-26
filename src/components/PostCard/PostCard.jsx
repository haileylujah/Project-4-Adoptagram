import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
function PostCard({ post, isProfile, removeLike, addLike, user }) {
  // call the addLike or the removeLike when we click on the heart!

  // We need to know if the logged in user has liked this particular post!
  // we search the array of objects that is post.likes to see if the logged in users
  // id exists in that array of objects
  const likeIndex = post.likes.findIndex(
    (like) => like.username === user.username

  );
  console.log(likeIndex, "<-- WHAT IS THIS LIKEINDEX???");

  const clickHandler =
    likeIndex > -1
      ? () => removeLike(post.likes[likeIndex]._id)
      : () => addLike(post._id);

  // if the logged users id exists, the heart should be red, because the logged in user has liked the post
  // and the clicked handler should removeLike
  const likeColor = likeIndex > -1 ? "red" : "gray";

  // if the logged users id doesn't exist in the post.likes array, then the heart should be
  // grey, because the user hasn't liked the post, and the click handler should be addLike
  if(14){
    
    return (
    


    <Card key={0} raised>

      <Image src={`${post.photoUrl}`} wrapped ui={false} />
      <Card.Content>
        <Card.Description>
        <h2>{post.petName}</h2>
        <p>Sex: {post.petSex}</p>
        <p>Age: {post.petAge}</p>
        <p>Breed: {post.petBreed}</p>
        <p>Health Condition: {post.petHealth}</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra textAlign={"right"}>
      <p><h5>Like me if you think I am CUTE! :3</h5></p>
        <Icon
          name={"heart"}
          size="large"
          color={likeColor}
          onClick={clickHandler}
        />
        {post.likes.length} Likes
      </Card.Content>
    </Card>
  )};
}

export default PostCard;
