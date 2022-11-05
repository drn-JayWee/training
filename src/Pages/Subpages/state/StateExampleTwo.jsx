import React, { useState } from 'react'
import classes from './State.module.scss'

const StateExampleTwo = () => {
	const [value, setValue] = useState('')
	const handleChange = event => {
		setValue(event.target.value)
	}

	return (
		<div className={classes.inputState}>
			<input type='text' value={value} onChange={handleChange} />
		</div>
	)
}

export default StateExampleTwo
