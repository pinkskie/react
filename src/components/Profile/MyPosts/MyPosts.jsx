import React from 'react';
import classes from '../MyPosts/MyPosts.module.css'
import Post from './Posts/Post'

import { addPostActionCreator, updateNewPostTextActionCreator } from './../../../redux/state';
// let addPostActionCreator =  () => {
//   return {
//     type: 'ADD-POST'
//   }
// }
// let updateNewPostTextActionCreator =  (text) => {
//   return {
//     type: 'UPDATE-NEW-POST-TEXT', newText: text
//   }
// }

const MyPosts = (props) => {

      let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>)
      
      let newPostElement = React.createRef();

      let addPost = () => {
        // let text = newPostElement.current.value; //  DELETE COMM
        props.dispatch(addPostActionCreator());
        newPostElement.current.value=''; // добавил сам потому что текстареа не обнуляется почему то в коде  ниже
        // props.updateNewPostText('');
      }

      let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        // props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});  // ваще ниче не понял  
        props.dispatch(action);
      }

    return <div className={classes.postsBlock}>
      <h3>my posts</h3>
      <div>
        <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        </div>
        <div>
        <button onClick={ addPost }>Add Post</button>
        </div>
      </div>
    {/* <div className={classes.posts}>
      <div className={classes.item}>
        <img src='https://yt3.ggpht.com/a/AATXAJyhnPR8phvdD_sMYVwmVDTQc63Dka94IzufP2QXtw=s900-c-k-c0xffffffff-no-rj-mo'/>
      </div>
      <div className={classes.item}>
        post 2
      </div>
      <div className={classes.item}>
        post 3
      </div>
      <div className={classes.item}>
        post 4
      </div>
     </div> */}
     <div className={classes.posts}>
       {postsElements}
     {/* <Post message={postData[0].message}
            likes={postData[0].likesCount}/>
     <Post message={postData[1].message}
            likes={postData[1].likesCount}/> */}
          </div>
    </div>


}
export default MyPosts;