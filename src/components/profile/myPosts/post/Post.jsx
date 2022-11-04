import React from 'react';
import classes from "./Post.module.css";

const Post = ({message}) => {
    return (
        <div className={classes.app__post}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLP6xJXBY_W2tT5waakogfnpHk4uhpVTy7A&usqp=CAU" alt="postlogo"/>
            <div className={classes.app__post__descr}>{message}</div>
        </div>
    );
};

export default Post;