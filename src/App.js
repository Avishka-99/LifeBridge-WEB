import React, {Component, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import Signin from './views/common/Signin';
import Signup from './views/common/Signup';

function App() {
	const [user, setUser] = useState('');
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Signin />}></Route>
				<Route path='/signup' element={<Signup />}></Route>
			</Routes>
		</div>
	);
}

export default App;
