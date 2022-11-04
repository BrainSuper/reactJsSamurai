import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = () => {
    const postData= [
        {id: 1, post: 'This is first post'},
        {id: 2, post: 'This is second post'},
        {id: 3, post: 'This is third post'},
    ]
    return (
        <div className={classes.app__posts}>
            <Post message={postData[0].post}/>
            <Post message={postData[1].post}/>
            <Post message={postData[2].post}/>

        </div>
    );
};

export default MyPosts;