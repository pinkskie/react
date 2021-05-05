import classes from '../MyPosts/MyPosts.module.css'
import Post from './Posts/Post'
const MyPosts = () => {
    return <div>
      my posts
      <div>
        <textarea></textarea>
        <button>Send</button>
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
     <Post message='hi,how are you?'
            likes='20'/>
     <Post message='Its my first post'
            likes='40'/>
    </div>


}
export default MyPosts;