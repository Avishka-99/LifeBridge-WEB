import React from 'react';
import Toast from '../../componets/Toast';
import AppoinmentCard from '../../componets/AppoinmentCard';
import * as ToastMessages from '../../componets/ToastMessages';
import '../../css/doctor/doctor.css';

export default function DoctorHome() {
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
	const handleSubmit = (id) => {};
	const date = getCurrentDate();

	const formattedDate = getFormattedDate();
	return (
		<div className='doctorBaseContainer'>
			<div className='topContainer'>
				<span style={{fontFamily: 'poppins-bold', fontSize: '3em'}}>Today - {formattedDate}</span>
				<span style={{marginTop: '1%', color: '#023047', fontFamily: 'poppins-extrabold', fontSize: '2em'}}>Appoinments</span>
			</div>
			<div className='bottomContainer'>
				{appointments.map((item) => (
					<AppoinmentCard details={item} onClick={handleSubmit} />
				))}
			</div>
			<Toast duration={3000} />
		</div>
	);
}
