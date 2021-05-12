import React from 'react';
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './Profle.module.css'
import { addPost } from './../../redux/state';
import MyPostsContainer from './MyPosts/MyPosts-container';


const Profile = (props) => {

  


    return <div>
      <ProfileInfo/>
    {/* <div>
    <img className = {classes.img} src="https://cdn.hipwallpaper.com/i/9/24/Mhm1Ss.jpg"/>
    </div>
    <div>
      ava + description
    </div> */}

    
    <MyPostsContainer />
    
    {/* <MyPostsContainer store={props.store} posts={props.profilePage.posts}
            newPostText={props.profilePagenewPostText}
            dispatch={props.dispatch}/> */}

    {/* <div>
      my posts
      <div>
        new  post
      </div>
    <div className='posts'>
      <div className={classes.item}>
        post 1
      </div>
      <div className={classes.item}>
        post 2
      </div>
     </div>
    </div> */}
    
</div>

}
export default Profile;