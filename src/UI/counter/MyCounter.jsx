import React from 'react';
import styles from './MyCounter.model.scss'


const MyCounter = () => {
	return (
		<div className='counter'>
			<h1 className='counter__title'>State</h1>
			<div className='counter__info'>
				<span className='counter__Num'>0</span>
				<button className='counter__Btn'>Click!</button>
			</div>
		</div>
	)
};

export default MyCounter;