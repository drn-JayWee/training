import {combineReducers, createStore} from 'redux';
import { chatsReducer } from './reduser/chatReducer/chatReduser';
import { messagesReduser } from './reduser/messageReducer/messagesReducer';

export const reducer = combineReducers ({
	messages: messagesReduser,
	chats: chatsReducer
})

export const store = createStore(reducer)