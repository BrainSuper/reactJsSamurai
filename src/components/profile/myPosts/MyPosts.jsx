import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = ({postData}) => {

    return (
        <div className={classes.app__posts}>
            {postData.map(post => <Post message={post.post}/>)}
        </div>
    );
};

export default MyPosts;