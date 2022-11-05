import './assets/styles/styles.css'

import React from 'react';
import { Routes, Route} from "react-router-dom";

import { LayOut } from './Components/LayOut/LayOut.jsx';
import HomePage from './Pages/HomePage';
import ProfilePage from './Pages/ProfilePage';

import ChatPage from './Pages/Chat';
import MessagePage from './Pages/Message';
import Api from './Pages/Api';

import TrainingPage from './Pages/TrainingPage';

import PropsExampleOne from './Pages/Subpages/props/PropsExampleOne';
import PropsExampleTwo from './Pages/Subpages/props/PropsExampleTwo';
import PropsExampleThree from './Pages/Subpages/props/PropsExampleThree';

import StateExampleOne from './Pages/Subpages/state/StateExampleOne.jsx';
import StateExampleTwo from './Pages/Subpages/state/StateExampleTwo.jsx';
import StateExampleThree from './Pages/Subpages/state/StateExampleThree.jsx';


function App() {
	return (
		<Routes>
			<Route path='/' element={<LayOut />}>
				<Route index element={<HomePage />} />
				<Route path='/profile' element={<ProfilePage />} />
				<Route path='chat' element={<ChatPage />}>
					<Route path='message/:id' element={<MessagePage />} />
				</Route>
				<Route path='api' element={<Api/>}/>
				<Route path='training' element={<TrainingPage />}>
					<Route path='PropsExampleOne' element={<PropsExampleOne />} />
					<Route path='PropsExampleTwo' element={<PropsExampleTwo />} />
					<Route path='PropsExampleThree' element={<PropsExampleThree />} />
					<Route path='stateexampleone' element={<StateExampleOne />} />
					<Route path='stateexampletwo' element={<StateExampleTwo />} />
					<Route path='stateexamplethree' element={<StateExampleThree />} />
				</Route>
			</Route>
		</Routes>
	)
}

export default App;
