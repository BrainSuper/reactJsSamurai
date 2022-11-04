import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = () => {
    return (
        <div className={classes.app__posts}>
            <Post message='This is first post'/>
            <Post message='This is second post'/>
            <Post message='This is third post'/>
        </div>
    );
};

export default MyPosts;