const ADD_POST = 'ADD_POST';
const POST_CHANGE = 'POST_CHANGE';

export const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            state.postData.push({
                id: state.postData.length + 1,
                post: state.newPostText
            });
            state.newPostText = '';
            return state;
        case POST_CHANGE:
            state.newPostText = action.newPost;
            return state;
        default:
            return state;
    }
}

export const addPostAC = () => {
    return {
        type: ADD_POST
    }
};
export const postChangeAC = (newPost) => {
    return {
        type: POST_CHANGE,
        newPost
    }
};