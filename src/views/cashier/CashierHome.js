import React, {useState, useEffect} from 'react';
import TextInput from '../../componets/TextInput';
import Button from '../../componets/Button';
import '../../css/cashier/cashierHome.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Toast from '../../componets/Toast';
import * as ToastMessages from '../../componets/ToastMessages';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
import Axios from '../../api/Axios';
export default function CashierHome() {
	const [startDate, setStartDate] = useState(new Date());
	const [doctor, setDoctor] = useState(null);
	const [name, setName] = useState(null);
	const [age, setAge] = useState(null);
	const [date, setDate] = useState(null);
	const [consultants, setConsultants] = useState('');
	const [appoinments, setAppoinments] = useState(null);
	const appointments = [
		{
			id: 1,
			age: 25,
			patientName: 'Alice Johnson',
			doctorName: 'Dr. Anderson',
			appointmentDate: '2023-09-15',
		},
		{
			id: 2,
			age: 35,
			patientName: 'Bob Smith',
			doctorName: 'Dr. Baker',
			appointmentDate: '2023-09-16',
		},
		{
			id: 3,
			age: 40,
			patientName: 'Charlie Brown',
			doctorName: 'Dr. Carter',
			appointmentDate: '2023-09-17',
		},
		{
			id: 4,
			age: 28,
			patientName: 'David Lee',
			doctorName: 'Dr. Davis',
			appointmentDate: '2023-09-18',
		},
		{
			id: 5,
			age: 55,
			patientName: 'Eve Miller',
			doctorName: 'Dr. Evans',
			appointmentDate: '2023-09-19',
		},
		{
			id: 6,
			age: 33,
			patientName: 'Frank Wilson',
			doctorName: 'Dr. Foster',
			appointmentDate: '2023-09-20',
		},
		{
			id: 7,
			age: 47,
			patientName: 'Grace Taylor',
			doctorName: 'Dr. Garcia',
			appointmentDate: '2023-09-21',
		},
		{
			id: 8,
			age: 29,
			patientName: 'Hank Harris',
			doctorName: 'Dr. Hernandez',
			appointmentDate: '2023-09-22',
		},
		{
			id: 9,
			age: 38,
			patientName: 'Ivy Green',
			doctorName: 'Dr. Irwin',
			appointmentDate: '2023-09-23',
		},
		{
			id: 10,
			age: 42,
			patientName: 'Jackie Turner',
			doctorName: 'Dr. Johnson',
			appointmentDate: '2023-09-24',
		},
	];
	const doctors = [
		{
			doctorName: 'Dr. Smith',
			specialty: 'Cardiology',
			registrationNumber: '12345',
		},
		{
			doctorName: 'Dr. Johnson',
			specialty: 'Dermatology',
			registrationNumber: '23456',
		},
		{
			doctorName: 'Dr. Brown',
			specialty: 'Orthopedics',
			registrationNumber: '34567',
		},
		{
			doctorName: 'Dr. Wilson',
			specialty: 'Gastroenterology',
			registrationNumber: '45678',
		},
		{
			doctorName: 'Dr. Davis',
			specialty: 'Ophthalmology',
			registrationNumber: '56789',
		},
		{
			doctorName: 'Dr. Evans',
			specialty: 'Pediatrics',
			registrationNumber: '67890',
		},
		{
			doctorName: 'Dr. Garcia',
			specialty: 'Neurology',
			registrationNumber: '78901',
		},
		{
			doctorName: 'Dr. Hernandez',
			specialty: 'Oncology',
			registrationNumber: '89012',
		},
		{
			doctorName: 'Dr. Irwin',
			specialty: 'Psychiatry',
			registrationNumber: '90123',
		},
		{
			doctorName: 'Dr. Turner',
			specialty: 'Rheumatology',
			registrationNumber: '123456',
		},
	];
	const constants = [];
	useEffect(() => {
		Axios.post(API_ENDPOINTS.GET_DOCTORS).then((response) => {
			//console.log(response.data[0]._id);
			setConsultants(response.data);
			Axios.post(API_ENDPOINTS.GET_APPOINMENTS).then((response) => {
				console.log(response.data[0]);
				setAppoinments(response.data);
				//console.log(consultants);
				// dispatch(ALL_ACTIONS.setRestaurantAction(response.data));
			});
			//console.log(consultants);
			// dispatch(ALL_ACTIONS.setRestaurantAction(response.data));
		});
	}, []);
	const handleSubmit = () => {
		if (doctor == null || name == null || age == null) {
			ToastMessages.error('Please fill required fields');
		} else {
			try {
				Axios.post(API_ENDPOINTS.ADD_APPOINMENT_URL, {
					name: name,
					age: age,
					date: date,
					doctor: doctor,
				}).then((response) => {
					setAppoinments(response.data);
					//console.log(response);
				});
			} catch (e) {
				console.log('e.error');
			}
		}
	};
	return (
		<div className='cashierBaseContainer'>
			<div className='topContainer'>
				<span
					style={{
						height: '50%',
						fontFamily: 'poppins-medium',
						fontSize: '2em',
						padding: '10px',
					}}
				>
					Create an appoinment
				</span>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						width: '100%',
						height: '50%',
						justifyContent: 'space-evenly',
					}}
				>
					<TextInput text='Name' onChange={setName} />
					<TextInput text='Age' type='number' onChange={setAge} />
					<TextInput text='Age' type='date' onChange={setDate} />
					{/* <DatePicker dateFormat='Pp' selected={startDate} onChange={(date) => setStartDate(date)} /> */}
					<select
						name='doctor'
						id='cars'
						style={{
							outline: '4px solid #7eb693',
							width: '15%',
							padding: '10px',
							fontStyle: 'normal',
							backgroundColor: 'white',
							borderRadius: '1em',
							lineHeight: '42px',
							fontSize: '20px',
							borderWidth: '0px',
						}}
						onChange={(e) => setDoctor(e.target.value)}
					>
						<option selected disabled>
							Choose doctor
						</option>
						{consultants ? consultants.map((doctor) => <option value={doctor._id}>{doctor.name + '(' + doctor.speciality + ')'}</option>) : <></>}
						{/* <option value='phamacist'>Phamacist</option>
						<option value='cashier'>Cashier</option> */}
					</select>
					<Button name='Create' textSize='1.5em' onClick={handleSubmit} />
				</div>
			</div>
			<div className='bottomContainer'>
				<div className='AdminRow_1Row5'>
					<table>
						<thead>
							<tr>
								<th>Name</th>
								<th>Doctor</th>
								<th>Age</th>
								<th>Date</th>
							</tr>
						</thead>
						<tbody>
							{appoinments ? (
								appoinments.map((item) => (
									<tr>
										<td>{item.name}</td>
										<td>{item.dname}</td>
										<td>{item.age}</td>
										<td>{item.date}</td>
									</tr>
								))
							) : (
								<div></div>
							)}
						</tbody>
					</table>
				</div>
			</div>
			<Toast duration={3000} />
		</div>
	);
}
