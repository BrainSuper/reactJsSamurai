import React from 'react';
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
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
    );
};

export default ProfileInfo;