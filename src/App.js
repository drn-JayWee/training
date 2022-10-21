import './App.css';
import React from 'react';
import { Routes, Route} from "react-router-dom";

import { LayOut } from './Components/LayOut';
import HomePage from './Pages/HomePage';
import ProfilePage from './Pages/ProfilePage';
import ChatPage from './Pages/ChatPage';


function App() {
	return (
			<Routes>
				<Route path='/' element={<LayOut/>}>
					<Route index element={<HomePage />} />
					<Route path='/profile' element={<ProfilePage />} />
					<Route path='chat' element={<ChatPage />} />
				</Route>
			</Routes>
	)
}

export default App;
