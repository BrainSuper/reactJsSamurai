import React from 'react';

const Profile = () => {
    return (
        <div className='app__content'>
            <div className='app__content__img'>
                <img src="https://static-cse.canva.com/blob/572643/2.Freephotos.jpg" alt="bg"/>
            </div>
            <div className='app__content__profile__info'>
                <img className='profile__info__logo'
                     src="https://as2.ftcdn.net/v2/jpg/02/29/75/83/1000_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
                     alt="user"/>
                <div className='profile__info__content'>
                    <h4>Name</h4>
                    <span>Birth</span>
                    <span>City</span>
                    <span>Education</span>
                    <span>Website</span>
                </div>
            </div>
            <form className='post__form'>
                <h4>My posts</h4>
                <input type="text" placeholder='your news'/>
                <button>Send</button>
            </form>
            <div className='app__posts'>
                <div className='app__post'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLP6xJXBY_W2tT5waakogfnpHk4uhpVTy7A&usqp=CAU" alt="postlogo"/>
                    <div className='app__post__descr'>Something post here</div>
                </div>
            </div>
        </div>
    );
};

export default Profile;