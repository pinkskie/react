import React from 'react';
import classes from '../MyPosts/MyPosts.module.css'
import Post from './Posts/Post'
const MyPosts = (props) => {

      // let posts = [
      //   {id: 1, message: 'hi,how are you?', likesCount:52},
      //   {id: 2, message: 'first post', likesCount:25}, 
      //   {id: 2, message: 'flowes', likesCount:64}, 
      //   {id: 2, message: 'hate tiktok', likesCount:12} 
      // ]

      let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>)


    return <div className={classes.postsBlock}>
      <h3>my posts</h3>
      <div>
        <div>
        <textarea></textarea>
        </div>
        <div>
        <button>Send</button>
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