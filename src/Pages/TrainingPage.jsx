import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const TrainingPage = () => {
	return (
		<div className='menu'>
			<aside>
				<h3>Props</h3>
				<Link to='PropsExampleOne'>Пример 1</Link>
				<Link to='PropsExampleTwo'>Пример 2</Link>
				<Link to='PropsExampleThree'>Пример 3</Link>
				<h3>State</h3>
				<Link to='StateExampleOne'>Пример 1</Link>
				<Link to='StateExampleTwo'>Пример 2</Link>
				<Link to='StateExampleThree'>Пример 3</Link>
			</aside>
			<div className='info'>
				<Outlet />
			</div>
		</div>
	)
};

export default TrainingPage;