import { combineReducers, createStore } from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducers from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducers
});

let store = createStore(reducers);

export default store;