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
            {id: 6, message: 'Slojna'}
          ],
          dialogs: [
            {id: 1, name: 'Pok'},
            {id: 2, name: 'Spok'},
            {id: 3, name: 'Rok'},
            {id: 4, name: 'Line'},
            {id: 5, name: 'Xio8'},
            {id: 6, name: 'Slojna'}
          ]
    }

  },
  getState(){
    return this._state;
  },
  _callBackSubscriber () {
    console.log('state')
  },
  // addPost () {
  //   let newPost = {
  //     id:5,
  //     message: this._state.profilePage.newPostText,
  //     likesCount: 0
  //   };
  //   this._state.profilePage.posts.push(newPost);
  //   this._state.profilePage.newPostText='';
  //   this._callBackSubscriber(this._state);
  // },
  // updateNewPostText (newText) {
  //   this._state.profilePage.newPostText = newText;
  //   this._callBackSubscriber(this._state);
  // },
  subscribe (observer) {
    this._callBackSubscriber = observer;  // pattern  kek  
  },
  dispatch(action){
    if(action.type === 'ADD-POST'){
      let newPost = {
        id:5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText='';
        this._callBackSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
        this._state.profilePage.newPostText = action.newText;
        this._callBackSubscriber(this._state);
    }
  }
}

export const addPostActionCreator =  () => {
  return {
    type: 'ADD-POST'
  }
}
export const updateNewPostTextActionCreator =  (text) => {
  return {
    type: 'UPDATE-NEW-POST-TEXT', newText: text
  }
}

// let rerenderEntireTree = () => {
//   console.log('state')
// }
// let state = {
//     profilePage: {
//         posts: [
//             {id: 1, message: 'hi,how are you?', likesCount:52},
//             {id: 2, message: 'first post', likesCount:25}, 
//             {id: 2, message: 'flowes', likesCount:64}, 
//             {id: 2, message: 'hate tiktok', likesCount:12} 
//           ], 
//         newPostText: 'slash'
//     },
//     dialogsPage: {
//         messages: [
//             {id: 1, message: 'Hi'},
//             {id: 2, message: 'Hey'},
//             {id: 3, message: 'Hello'},
//             {id: 4, message: 'Line'},
//             {id: 5, message: 'Xio8'},
//             {id: 6, message: 'Slojna'}
//           ],
//           dialogs: [
//             {id: 1, name: 'Pok'},
//             {id: 2, name: 'Spok'},
//             {id: 3, name: 'Rok'},
//             {id: 4, name: 'Line'},
//             {id: 5, name: 'Xio8'},
//             {id: 6, name: 'Slojna'}
//           ]
//     }

// }



// export const addPost = () => {
//   let newPost = {
//     id:5,
//     message: state.profilePage.newPostText,
//     likesCount: 0
//   };
//   state.profilePage.posts.push(newPost);
//   state.profilePage.newPostText='';
//   rerenderEntireTree(state);
// }

// export const updateNewPostText = (newText) => {
//   state.profilePage.newPostText = newText;
//   rerenderEntireTree(state);

// }
// export const subscribe =  (observer) => {
//   rerenderEntireTree = observer;  // pattern  kek  
// }
export default store;
// window.store=state;