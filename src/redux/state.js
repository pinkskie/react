import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state : {
    profilePage: {
        posts: [
            {id: 1, message: 'hi,how are you?', likesCount:52},
            {id: 2, message: 'first post', likesCount:25}, 
            {id: 2, message: 'flowes', likesCount:64}, 
            {id: 2, message: 'hate tiktok', likesCount:12} 
          ], 
        newPostText: 'slash'
    },
    dialogsPage: {
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
    }
    

  },
  getState(){
    return this._state;
  },
  _callBackSubscriber () {
    console.log('state')
  },

  subscribe (observer) {
    this._callBackSubscriber = observer;  // pattern  kek  
  },
  dispatch(action){

    this._state.profilePage = profileReducer( this._state.profilePage, action )
    this._state.dialogsPage = dialogsReducer( this._state.dialogsPage, action )
    
    this._callBackSubscriber(this._state);

  }
}

// export const addPostActionCreator =  () => {
//   return {
//     type: 'ADD-POST'
//   }
// }
// export const updateNewPostTextActionCreator =  (text) => {
//   return {
//     type: 'UPDATE-NEW-POST-TEXT', newText: text
//   }
// }

// export const sendMessageCreator  = () => ({type: SEND_MESSAGE})
// export const updateNewMessageBodyCreator = (body) => 
//       ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default store;

