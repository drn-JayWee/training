import React from 'react';
import styles from './MyProps.model.scss'



// Премер 1
function Welcome(props) {
	return <h2>Hello {props.name}!</h2>
}

const MyProps = () => {
	return (
		<div>
			<h1 className='title'>Компоненты и пропсы</h1>
			<div className='logic-props'>
				<p className='text'>Пример 1</p>
				<Welcome name='Eva' />
				<Welcome name='Jack' />
			</div>
			<hr />
			<div>

			</div>
		</div>
	)
};


export default MyProps;