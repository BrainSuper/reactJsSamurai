import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";
const Profile = ({postData}) => {
    return (
        <div>
            <div className={classes.app__content__img}>
                <img src="https://static-cse.canva.com/blob/572643/2.Freephotos.jpg" alt="bg"/>
            </div>
            <ProfileInfo/>
            <form className={classes.post__form}>
                <h4>My posts</h4>
                <input type="text" placeholder='your news'/>
                <button>Send</button>
            </form>
        <MyPosts postData={postData}/>
        </div>
    );
};

export default Profile;