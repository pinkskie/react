import MyPosts from './MyPosts/MyPosts'
import classes from './Profle.module.css'
const Profile = () => {
    return <div className={classes.content}>
    <div>
    <img className = {classes.img} src="https://cdn.hipwallpaper.com/i/9/24/Mhm1Ss.jpg"/>
    </div>
    <div>
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
    <MyPosts/>
</div>

}
export default Profile;