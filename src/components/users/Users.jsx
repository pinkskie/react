import React from  'react';
import styles from './users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png'

let  Users = (props) => {

    if (props.users.length === 0) {

    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
        props.setUsers(response.data.items)
    });
}
    // props.setUsers([
    //     {id: 1, photoUrl: 'https://a.d-cd.net/f54c761s-1920.jpg', followed: false, fullName: 'Vlados', status:'ne nu a 4e ?', location:{city:'Minsk', country:'Belarus'}},
    //     {id: 2, photoUrl: 'https://a.d-cd.net/f54c761s-1920.jpg', followed: false, fullName: 'Seryi', status:'old flex', location:{city:'Moscow', country:'Russian'}},
    //     {id: 3, photoUrl: 'https://a.d-cd.net/f54c761s-1920.jpg', followed: true, fullName: 'Tolyan', status:'stardart paren', location:{city:'Kiev', country:'Ukraine'}},
    //     {id: 4, photoUrl: 'https://a.d-cd.net/f54c761s-1920.jpg', followed: true, fullName: 'Madiyar', status:'love tiktok', location:{city:'Oskemen', country:'Kazakhstan'}} 
    // ])

    return <div>
       {
           props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed 
                            ? <button onClick={ () => {props.unfollow(u.id)}}>Unfollow</button> 
                            : <button onClick={ () => {props.follow(u.id)}}>Follow</button>}
                            
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
           </div>)
       }
    </div>
}

export default Users;