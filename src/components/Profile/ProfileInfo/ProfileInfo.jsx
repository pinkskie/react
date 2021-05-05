import React from 'react';
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return <div>
                <div>
                    <img className = {classes.img} src="https://cdn.hipwallpaper.com/i/9/24/Mhm1Ss.jpg"/>
                </div>
                <div className={classes.descriptionBlock}>
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