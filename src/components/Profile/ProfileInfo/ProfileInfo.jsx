import React from 'react';
import Profile from '../Profile';
import classes from './ProfileInfo.module.css'
const ProfileInfo = (props) => {
  // if (!props.profile.photos) {
  //   return <Profile/>
  // }
    return <div>
                <div>
                    <img className = {classes.img} src="https://cdn.hipwallpaper.com/i/9/24/Mhm1Ss.jpg"/>
                </div>
                <div className={classes.descriptionBlock}>
                    <img src={props.profile?.photos.large}/>
                    ava + description
                </div>
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
export default ProfileInfo;