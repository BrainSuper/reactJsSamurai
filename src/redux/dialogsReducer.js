const ADD_MESSAGE = 'ADD_MESSAGE';

const CHANGE_MESSAGE = 'CHANGE_MESSAGE';


export const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            state.messageData.push({
                id: state.messageData.length + 1,
                message: state.newMessage
            });
            state.newMessage = '';
            return state;
        case CHANGE_MESSAGE:
            state.newMessage = action.newMessage;
            return state;
        default:
            return state;
    }
}


export const addMessageAC = () => {
    return {
        type: ADD_MESSAGE
    }
};

export const messageChange = (newMessage) => {
    return {
        type: CHANGE_MESSAGE,
        newMessage
    }
};