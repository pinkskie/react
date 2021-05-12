const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'hi,how are you?', likesCount:52},
        {id: 2, message: 'first post', likesCount:25}, 
        {id: 2, message: 'flowes', likesCount:64}, 
        {id: 2, message: 'hate tiktok', likesCount:12} 
      ], 
    newPostText: 'slash'
};

const profileReducer = (state = initialState,  action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id:5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };  
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state;
    }
} 

export const addPostActionCreator =  () => ({type: ADD_POST})
export const updateNewPostTextActionCreator =  (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})


export default profileReducer;