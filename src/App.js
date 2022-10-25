import './App.css';
import React from 'react';
import { Routes, Route} from "react-router-dom";

import { LayOut } from './Components/LayOut';
import HomePage from './Pages/HomePage';
import ProfilePage from './Pages/ProfilePage';
import ChatPage from './Pages/ChatPage';
import TrainingPage from './Pages/training/TrainingPage';


import MyProps from './UI/Props/MyProps';
import MyCounter from './UI/counter/MyCounter';



function App() {
	return (
		<Routes>
			<Route path='/' element={<LayOut />}>
				<Route index element={<HomePage />} />
				<Route path='/profile' element={<ProfilePage />} />
				<Route path='chat' element={<ChatPage />} />
				<Route path='training' element={<TrainingPage />}>
					<Route path='myprops' element={<MyProps />} />
					<Route path='mycounter' element={<MyCounter />} />
				</Route>
			</Route>
		</Routes>
	)
}

export default App;
