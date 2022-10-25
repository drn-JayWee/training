import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './Training.modal.scss';


const TrainingPage = () => {
	return (
		<div className='menu'>
			<aside className={styles}>
				<Link to='myprops'>Урок 1</Link>
				<Link to='mycounter'>Урок 2</Link>
			</aside>
			<div className='info'>
				<Outlet />
			</div>
		</div>
	)
};

export default TrainingPage;