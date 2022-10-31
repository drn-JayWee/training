import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { messagesSelector } from '../Redux/reduser/messageReducer/messagesSelector'


const Message = () => {
	const [text, setText] = useState('')
	const {id} = useParams();
	const messages = useSelector(messagesSelector);
	const dispatch = useDispatch();

	const handleAdd = () => {
		const obj = {
			id: Number(id),
			text: text
		}
		dispatch({type:'add', playload: obj})
	}

	return (
		<div>
			<input value={text} onChange={(e) => setText(e.target.value)}/>
			<button onClick={handleAdd}>Add</button>
			{messages.map((messages) => {
				return (
						<div key={Message.id}>
						{Message.text}
						<button onClick={() => dispatch({type: 'delete', playload: Message.id})}>Delete</button>	
						</div>
				)
			})}


		</div>
	)
}

export default Message;
