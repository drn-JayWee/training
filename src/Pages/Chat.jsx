import React from 'react';
import {useSelector} from 'react-redux';
import {Link, Outlet} from 'react-router-dom'
import { chatsSelector } from '../Redux/reduser/chatReducer/chatsSelector';


const ChatPage = () => {
	const chats = useSelector( chatsSelector)
	return (
		<div>
			<div>
				{chats.map(chat => {
					return (
						<Link key={chat.id} to={`/message/${chat.id}`}>
							{chat.name}
						</Link>
					)
				})}
			</div>
			<div>
				<Outlet />
			</div>
		</div>
	)
};

export default ChatPage;