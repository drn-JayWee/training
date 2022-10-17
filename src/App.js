import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from './Pages/HomePage';
import ProfilePage from './Pages/ProfilePage';
import ChatPage from './Pages/ChatPage';





function App() {
	return (
		<BrowserRouter>

			<div className='Navbar'>
				<div className='Navbar__logo'>
					<p>LOGO</p>
				</div>
				<div className='Navbar__list'>
					<Link to='/'>Главная</Link>
					<Link to='profile'>Профиль</Link>
					<Link to='chat'>Чат</Link>
				</div>
			</div>

			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/profile' element={<ProfilePage />} />
				<Route path='chat' element={<ChatPage/>}/>
			</Routes>

		</BrowserRouter>
	);
}

export default App;
