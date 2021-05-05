import React from 'react';
import classes from './Post.module.css'
const Post = (props) => {
    return <div className={classes.item}>
        <img src='https://yt3.ggpht.com/a/AATXAJyhnPR8phvdD_sMYVwmVDTQc63Dka94IzufP2QXtw=s900-c-k-c0xffffffff-no-rj-mo'/>
        {props.message}
        <div>
          <span>{props.likes} Likes</span>
        </div>
      </div>
     


}
export default Post;