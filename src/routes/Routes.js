import * as UserViews from '../constants/AllViews';
import React from 'react';
export const doctorRoutes = [{id: 1, path: '/home', element: <UserViews.DoctorHome />}];
export const pharmacyRoutes = [
	{id: 1, path: '/home', element: <UserViews.PharmacyHome />},
	{id: 2, path: '/medicine', element: <UserViews.Medicine />},
];
export const adminRoutes = [
	{id: 1, path: '/home', element: <UserViews.AdminHome />},
	{id: 2, path: '/staff', element: <UserViews.AddStaff />},
	{id: 3, path: '/doctor', element: <UserViews.AddDoctors />},
];
export const cashierRoutes = [
	{id: 1, path: '/home', element: <UserViews.CashierHome />},
	// {id: 2, path: '/appoinment', element: <UserViews.Appoinment />},
];
