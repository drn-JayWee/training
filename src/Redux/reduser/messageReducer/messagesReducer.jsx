

const initialState = {
	messages: []
}


export const messagesReduser = (state = initialState, action) => {
	switch (action.type) {
		case 'delete':
				return {
					...state,
					messages: state.messages.filter((messages) => messages.id !== action.playload)
				}
				case 'add':
					return {
						...state,
						messages: [...state.messages, action.playload]
					}
		default: 
				return state
	}
}
