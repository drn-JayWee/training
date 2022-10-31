import React from 'react'

function Welcome(props) {
	return <h2>Hello {props.name}!</h2>
}
const PropsExampleOne = () => {
	return (
		<div>
			<h1 className='title'>Компоненты и пропсы</h1>{' '}
			<div className='logic-props'>
				<p className='text'>Пример 1</p>
				<Welcome name='Eva' />
				<Welcome name='Jack' />{' '}
			</div>
			<hr />
			<div> </div>
		</div>
	)
}

export default PropsExampleOne
