import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Messages/Message';

// const DialogItem = (props) => {
//     return <div className={classes.dialog + ' ' + classes.active}>
//     <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
// </div>
// }              


const Dialogs = (props) => {


        let dialogsElements = props.dialogs.map(  d =>  <DialogItem name={d.name} id={d.id}/>) 
        
        
        let messagesElements = props.messages.map ( m => <Message message={m.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                {dialogsElements}

                {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[2].id}/> */}
                
                {/* <DialogItem name="Rok" id="3"/>
                <DialogItem name="Line" id="4"/>
                <DialogItem name="Xio8" id="5"/>
                <DialogItem name="Slojna" id="6"/> */}
                {/* <div className={classes.dialog}>
                <NavLink to="/dialogs/2">Spok</NavLink>
                </div>
                <div className={classes.dialog}>
                <NavLink to="/dialogs/3">Rok</NavLink>
                </div>
                <div className={classes.dialog}>
                <NavLink to="/dialogs/4">Line</NavLink>
                </div>
                <div className={classes.dialog}>
                <NavLink to="/dialogs/5">Xio8</NavLink>
                </div>
                <div className={classes.dialog}>
                <NavLink to="/dialogs/6">Slojna</NavLink>
                </div> */}
            </div>


            <div className={classes.messages}>
                {messagesElements}
                {/* <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/> */}
               
            </div>
        </div>
    )
}

export default Dialogs;