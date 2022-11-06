import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";

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
        profileReducer(this._state.profilePage, action);
        dialogsReducer(this._state.dialogsPage, action);
        this.rerenderEntireTree();
    },
    rerenderEntireTree() {

    },
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    }
}




