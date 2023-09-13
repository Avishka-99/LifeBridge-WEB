import React, {Component, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import Signin from './views/common/Signin';
import Signup from './views/common/Signup';
import * as UserRoutes from './routes/Routes';
import LandingPage from './views/common/LandingPage';
import ProtectedRoutes from './utils/ProtectedRoutes';
function App() {
	const [user, setUser] = useState('Admin');
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Signin />}></Route>
				<Route path='/signup' element={<Signup />}></Route>
				<Route element={<ProtectedRoutes isSignedIn={user} />}>
					{user == 'Doctor' ? (
						UserRoutes.doctorRoutes.map((item) => <Route key={item.id} path={item.path} element={item.element}></Route>)
					) : user == 'Pharmacy' ? (
						UserRoutes.pharmacyRoutes.map((item) => <Route key={item.key} path={item.path} element={item.element}></Route>)
					) : user == 'Admin' ? (
						UserRoutes.adminRoutes.map((item) => <Route key={item.key} path={item.path} element={item.element}></Route>)
					) : user == 'Cashier' ? (
						UserRoutes.cashierRoutes.map((item) => <Route key={item.key} path={item.path} element={item.element}></Route>)
					) : (
						<Route path='' element={<LandingPage />}></Route>
					)}
				</Route>
			</Routes>
		</div>
	);
}

export default App;
