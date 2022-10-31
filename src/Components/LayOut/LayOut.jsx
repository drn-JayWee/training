import React from 'react';
import {NavLink, Outlet } from 'react-router-dom';



const LayOut = () => {
	return (
		<>
			<div>
				<header>
					<div className='Navbar'>
						<div className='Navbar__logo'>
							<img src='../../assets/images/logo/Vector.png' alt='logo'/>
						</div>
						<div className='Navbar__list'>
							<NavLink to='/'>Главная</NavLink>
							<NavLink to='profile'>Профиль</NavLink>
							<NavLink to='chat'>Чат</NavLink>
							<NavLink to='training'>Обучение</NavLink>
						</div>
					</div>
				</header>

				<main className='container'>
					<Outlet />
				</main>

				<footer></footer>
			</div>
		</>
	)
};

export { LayOut }