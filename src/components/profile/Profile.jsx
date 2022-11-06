import React, {useState} from 'react';
import classes from './Profile.module.css'
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";
import {addPostAC, postChangeAC} from "../../redux/store";
const Profile = ({profilePage, dispatch}) => {
    return (
        <div>
            <div className={classes.app__content__img}>
                <img src="https://static-cse.canva.com/blob/572643/2.Freephotos.jpg" alt="bg"/>
            </div>
            <ProfileInfo/>
            <form onSubmit={(e) => {
                e.preventDefault();
                dispatch(addPostAC());
            }} className={classes.post__form}>
                <h4>My posts</h4>
                <input type="text" value={profilePage.newPostText} onChange={(e) => dispatch(postChangeAC(e.target.value))} placeholder='your news'/>
                <button>Send</button>
            </form>
        <MyPosts postData={profilePage.postData}/>
        </div>
    );
};

export default Profile;