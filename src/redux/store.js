import {observe} from "web-vitals/dist/modules/lib/observe";

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
    addPost() {
        this._state.profilePage.postData.push({id: this._state.profilePage.postData.length + 1, post: this._state.profilePage.newPostText});
        this._state.profilePage.newPostText = '';
        this.rerenderEntireTree();
    },
    addMessage() {
        this._state.dialogsPage.messageData.push({id: this._state.dialogsPage.messageData.length + 1, message: this._state.dialogsPage.newMessage});
        this._state.dialogsPage.newMessage = '';
        this.rerenderEntireTree();
    },
    postChange(newPost) {
        this._state.profilePage.newPostText = newPost;
        this.rerenderEntireTree();
    },
    messageChange(newMessage) {
        this._state.dialogsPage.newMessage = newMessage;
        this.rerenderEntireTree();
    },
    rerenderEntireTree() {

    },
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    }
}
