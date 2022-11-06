export let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, post: 'This is first post'},
                {id: 2, post: 'This is second post'},
                {id: 3, post: 'This is third post'},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Clyde'},
                {id: 2, name: 'Melina'},
                {id: 3, name: 'Ronda'},
                {id: 4, name: 'Charles'},

            ],
            messageData: [
                {id: 1, message: 'Abraabraabraabra'},
                {id: 2, message: 'SSKKKDLLFKKAKKSLLFKKS'},
                {id: 3, message: 'ASFLSFGSOE#%#FDGKDSGKDSLH'},
            ],
            newMessage: ''
        }
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            this._state.profilePage.postData.push({
                id: this._state.profilePage.postData.length + 1,
                post: this._state.profilePage.newPostText
            });
            this._state.profilePage.newPostText = '';
            this.rerenderEntireTree();
        } else if (action.type === ADD_MESSAGE) {
            this._state.dialogsPage.messageData.push({
                id: this._state.dialogsPage.messageData.length + 1,
                message: this._state.dialogsPage.newMessage
            });
            this._state.dialogsPage.newMessage = '';
            this.rerenderEntireTree();
        } else if (action.type === POST_CHANGE) {
            this._state.profilePage.newPostText = action.newPost;
            this.rerenderEntireTree();
        } else if (action.type === CHANGE_MESSAGE) {
            this._state.dialogsPage.newMessage = action.newMessage;
            this.rerenderEntireTree();
        }
    },
    rerenderEntireTree() {

    },
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    }
}
const ADD_POST = 'ADD_POST';
const ADD_MESSAGE = 'ADD_MESSAGE';
const POST_CHANGE = 'POST_CHANGE';
const CHANGE_MESSAGE = 'CHANGE_MESSAGE';
export const addPostAC = () => {
    return {
        type: ADD_POST
    }
};
export const addMessageAC = () => {
    return {
        type: ADD_MESSAGE
    }
};
export const postChangeAC = (newPost) => {
    return {
        type: POST_CHANGE,
        newPost
    }
};
export const messageChange = (newMessage) => {
    return {
        type: CHANGE_MESSAGE,
        newMessage
    }
};
