import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
import { chatsSelector } from '../Redux/reduser/chatReducer/chatsSelector';

const ChatPage = () => {
	const chats = useSelector( chatsSelector)
	return (
		<div>
			{chats.map((chat) => {
				return (
					<Link key={chat.id} to={`/message/${chat.id}`}>
						{chat.name}
					</Link>
				)
			})}
		</div>
	);
};

export default ChatPage;