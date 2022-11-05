import React, { useState } from 'react'
import classes from './State.module.scss'

const ExampleOne = () => {

	const [increment, setIncrement] = useState(0)
	const updateIncrement = () => {
		setIncrement(increment + 1)
	}
	const [decrement, setDecrement] = useState (0)
	const updateDecrement = () => {
		setDecrement(decrement -1)
	}

	return (
		<div className={classes.counter}>

			<span>{increment}</span>
			<button className={classes.counter__btn} onClick={updateIncrement}>
				+1
			</button>

			<span> {decrement}</span>
			<button className={classes.counter__btn} onClick={updateDecrement}>
				-1
			</button>

		</div>
	)
}

export default ExampleOne
