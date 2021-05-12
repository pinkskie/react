import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Messages/Message';
import { updateNewMessageBodyCreator, updateNewPostTextActionCreator } from '../../redux/dialogs-reducer';
import { sendMessageCreator } from './../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

// const DialogItem = (props) => {
//     return <div className={classes.dialog + ' ' + classes.active}>
//     <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
// </div>
// }              


const DialogsContainer = (props) => {
        let  state  = props.store.getState().dialogsPage;

        let onSendMessageClick = () => {
            props.store.dispatch(sendMessageCreator());
        }
        let onNewMessageChange = (body) => {
            props.store.dispatch(updateNewMessageBodyCreator(body));
        }

    return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>
}

export default DialogsContainer;