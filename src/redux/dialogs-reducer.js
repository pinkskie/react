const UPDATE_NEW_MESSAGE_BODY =  'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE =  'SEND_MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hey'},
        {id: 3, message: 'Hello'},
        {id: 4, message: 'Line'},
        {id: 5, message: 'Xio8'},
        {id: 6, message: 'Slojna'},
        {id: 6, message: 'Slojna'}
      ],
    dialogs: [
        {id: 1, name: 'Pok'},
        {id: 2, name: 'Spok'},
        {id: 3, name: 'Rok'},
        {id: 4, name: 'Line'},
        {id: 5, name: 'Xio8'},
        {id: 6, name: 'Slojna'}
      ],
    newMessageBody:''
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body  = state.newMessageBody;
           return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };
    default:
        return state;
    }
}

export const sendMessageCreator  = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => 
      ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;