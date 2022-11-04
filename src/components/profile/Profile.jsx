import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./myPosts/MyPosts";
const Profile = () => {
    return (
        <div>
            <div className={classes.app__content__img}>
                <img src="https://static-cse.canva.com/blob/572643/2.Freephotos.jpg" alt="bg"/>
            </div>
            <div className={classes.app__content__profile__info}>
                <img className={classes.profile__info__logo}
                     src="https://as2.ftcdn.net/v2/jpg/02/29/75/83/1000_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
                     alt="user"/>
                <div className={classes.profile__info__content}>
                    <h4>Name</h4>
                    <span>Birth</span>
                    <span>City</span>
                    <span>Education</span>
                    <span>Website</span>
                </div>
            </div>
            <form className={classes.post__form}>
                <h4>My posts</h4>
                <input type="text" placeholder='your news'/>
                <button>Send</button>
            </form>
        <MyPosts/>
        </div>
    );
};

export default Profile;