import React, {useEffect, useState} from 'react';
import Toast from '../../componets/Toast';
import AppoinmentCard from '../../componets/AppoinmentCard';
import * as ToastMessages from '../../componets/ToastMessages';
import '../../css/doctor/doctor.css';
import Axios from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
export default function DoctorHome() {
	console.log(localStorage.getItem('id'));
	const [appoinments, setAppoinments] = useState(null);
	useEffect(() => {
		const today = new Date();
		const year = today.getFullYear();
		const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
		const day = String(today.getDate()).padStart(2, '0');

		const formattedDate = `${year}-${month}-${day}`;
		Axios.post(API_ENDPOINTS.GET_DOCTOR_APPOINMENTS, {
			id: localStorage.getItem('id'),
			date: formattedDate,
		}).then((response) => {
			console.log(response.data);
			if (!(response.data == 'nodata')) {
				setAppoinments(response.data);
			}

			//setstaff(response.data);
			// Axios.post(API_ENDPOINTS.GET_APPOINMENTS).then((response) => {
			// 	console.log(response.data[0]);
			// 	setAppoinments(response.data);
			// 	//console.log(consultants);
			// 	// dispatch(ALL_ACTIONS.setRestaurantAction(response.data));
			// });
			//console.log(consultants);
			// dispatch(ALL_ACTIONS.setRestaurantAction(response.data));
		});
	}, []);
	function getCurrentDate() {
		const today = new Date();
		const year = today.getFullYear();
		const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
		const day = String(today.getDate()).padStart(2, '0');

		const formattedDate = `${year}-${month}-${day}`;
		return formattedDate;
	}
	function getFormattedDate() {
		const currentDate = new Date();
		const day = currentDate.getDate();
		const monthName = new Intl.DateTimeFormat('en-US', {month: 'long'}).format(currentDate);
		const year = currentDate.getFullYear();
		return `${day} ${monthName} ${year}`;
	}
	const appointments = [
		{
			appointmentId: 1,
			patientName: 'Alice Johnson',
			age: 25,
		},
		{
			appointmentId: 2,
			patientName: 'Bob Smith',
			age: 35,
		},
		{
			appointmentId: 3,
			patientName: 'Charlie Brown',
			age: 40,
		},
		{
			appointmentId: 4,
			patientName: 'David Lee',
			age: 28,
		},
		{
			appointmentId: 5,
			patientName: 'Eve Miller',
			age: 55,
		},
		{
			appointmentId: 6,
			patientName: 'Frank Wilson',
			age: 33,
		},
		{
			appointmentId: 7,
			patientName: 'Grace Taylor',
			age: 47,
		},
		{
			appointmentId: 8,
			patientName: 'Hank Harris',
			age: 29,
		},
		{
			appointmentId: 9,
			patientName: 'Ivy Green',
			age: 38,
		},
		{
			appointmentId: 10,
			patientName: 'Jackie Turner',
			age: 42,
		},
		{
			appointmentId: 11,
			patientName: 'Karen Anderson',
			age: 31,
		},
		{
			appointmentId: 12,
			patientName: 'Liam Jackson',
			age: 48,
		},
	];

	const date = getCurrentDate();

	const formattedDate = getFormattedDate();
	return (
		<div className='doctorBaseContainer'>
			<div className='topContainer'>
				<span style={{fontFamily: 'poppins-bold', fontSize: '3em'}}>Today - {formattedDate}</span>
				<span style={{marginTop: '1%', color: '#023047', fontFamily: 'poppins-extrabold', fontSize: '2em'}}>Appoinments</span>
			</div>
			<div className='bottomContainer'>{appoinments ? appoinments.map((item) => <AppoinmentCard details={item} />) : <div></div>}</div>
			<Toast duration={3000} />
		</div>
	);
}
