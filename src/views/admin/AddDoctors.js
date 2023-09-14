import React, {useState} from 'react';
import TextInput from '../../componets/TextInput';
import '../../css/admin/adminStaff.css';
import Button from '../../componets/Button';
import Axios from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';

export default function AddDoctors() {
	const [name, setName] = useState('');
	const [nic, setnic] = useState('');
	const [email, setemail] = useState('');
	const [address, setaddress] = useState('');
	const [regno, setregno] = useState('');
	const [speciality, setspeciality] = useState('');
	const handleSubmit = () => {
		console.log(name);
		console.log(nic);
		console.log(email);
		console.log(address);
		console.log(regno);
		console.log(speciality);
		try {
			Axios.post(API_ENDPOINTS.ADD_DOCTOR_URL, {
				name: name,
				nic: nic,
				email: email,
				address: address,
				regno: regno,
				speciality: speciality,
			}).then((response) => {
				console.log(response);
				// if (response.data.type) {
				// 	dispatch(SetUserAction(response.data.type));
				// 	localStorage.setItem('token', response.data.token);
				// 	localStorage.setItem('userId', JSON.parse(atob(localStorage.getItem('token').split('.')[1])).userId);
				// 	navigate('/home');
				// 	//window.location.reload(true);
				// } else if (response.data == 'Not verified') {
				// 	ToastMessages.warning('Please verify your account');
				// 	ToastMessages.info('Redirectiong to OTP verification');
				// 	//resetFormData();
				// 	setIsDisabled(true);
				// 	localStorage.setItem('otpemail', email);
				// 	setTimeout(function () {
				// 		navigate('/otp');
				// 	}, 3000);
				// } else {
				// 	ToastMessages.error(response.data);
				// }
				//console.log(response.data);
			});
		} catch (e) {
			console.log('e.error');
		}
	};
	const doctors = [
		{
			name: 'Dr. Alice Johnson',
			nic: '950802-5678B',
			address: '456 Elm Street, Townsville, NY 10001',
			email: 'alice.johnson@email.com',
			regno: 'MD123456',
			specialty: 'Cardiology',
		},
		{
			name: 'Dr. Bob Smith',
			nic: '891215-1234C',
			address: '789 Oak Avenue, Villagetown, TX 77002',
			email: 'bob.smith@email.com',
			regno: 'MD234567',
			specialty: 'Orthopedics',
		},
		{
			name: 'Dr. Charlie Brown',
			nic: '880530-9876D',
			address: '101 Pine Road, Hamletsville, IL 60603',
			email: 'charlie.brown@email.com',
			regno: 'MD345678',
			specialty: 'Pediatrics',
		},
		{
			name: 'Dr. David Wilson',
			nic: '910705-2345E',
			address: '321 Birch Lane, Suburbia, FL 33140',
			email: 'david.wilson@email.com',
			regno: 'MD456789',
			specialty: 'Dermatology',
		},
		{
			name: 'Dr. Emily Martinez',
			nic: '930619-8765F',
			address: '234 Maple Drive, Cityscape, CA 90210',
			email: 'emily.martinez@email.com',
			regno: 'MD567890',
			specialty: 'Oncology',
		},
		{
			name: 'Dr. Frank White',
			nic: '900415-3456G',
			address: '555 Cedar Road, Villageland, TX 77001',
			email: 'frank.white@email.com',
			regno: 'MD678901',
			specialty: 'Neurology',
		},
		{
			name: 'Dr. Grace Lee',
			nic: '970103-7890H',
			address: '789 Willow Lane, Townsville, NY 10002',
			email: 'grace.lee@email.com',
			regno: 'MD789012',
			specialty: 'Gastroenterology',
		},
		{
			name: 'Dr. Hannah Davis',
			nic: '940724-5678I',
			address: '999 Redwood Street, Villagetown, TX 77003',
			email: 'hannah.davis@email.com',
			regno: 'MD890123',
			specialty: 'Urology',
		},
		{
			name: 'Dr. Isaac Miller',
			nic: '891208-2345J',
			address: '123 Oak Avenue, Suburbia, FL 33141',
			email: 'isaac.miller@email.com',
			regno: 'MD901234',
			specialty: 'Psychiatry',
		},
		{
			name: 'Dr. Jennifer Johnson',
			nic: '920401-8765K',
			address: '777 Pine Road, Cityscape, CA 90211',
			email: 'jennifer.johnson@email.com',
			regno: 'MD012345',
			specialty: 'Ophthalmology',
		},
	];

	// Accessing object properties

	return (
		<div className='adminAddStaffBaseContainer'>
			<div className='topContainer'>
				<span
					style={{
						height: '50%',
						fontFamily: 'poppins-medium',
						fontSize: '2em',
						padding: '10px',
					}}
				>
					Add a doctor
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
					<TextInput text='Name' width='12%' onChange={setName} />
					<TextInput text='NIC' width='12%' onChange={setnic} />
					<TextInput text='Email' width='12%' onChange={setemail} />
					<TextInput text='Address' width='12%' onChange={setaddress} />
					<TextInput text='SLMC Reg no' width='12%' onChange={setregno} />
					<select
						name='cars'
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
						onChange={(e) => setspeciality(e.target.value)}
					>
						<option value='Allergy and Immunology' selected disabled>
							----Select speciality----
						</option>
						<option value='Allergy and Immunology'>Allergy and Immunology</option>
						<option value='Anesthesiology'>Anesthesiology</option>
						<option value='Cardiology'>Cardiology</option>
						<option value='Dermatology'>Dermatology</option>
						<option value='Emergency Medicine'>Emergency Medicine</option>
						<option value='Endocrinology'>Endocrinology</option>
						<option value='Family Medicine'>Family Medicine</option>
						<option value='Gastroenterology'>Gastroenterology</option>
						<option value='Geriatrics'>Geriatrics</option>
						<option value='Hematology'>Hematology</option>
						<option value='Infectious Disease'>Infectious Disease</option>
						<option value='Internal Medicine'>Internal Medicine</option>
						<option value='Nephrology'>Nephrology</option>
						<option value='Neurology'>Neurology</option>
						<option value='Obstetrics and Gynecology'>Obstetrics and Gynecology</option>
						<option value='Oncology'>Oncology</option>
						<option value='Ophthalmology'>Ophthalmology</option>
						<option value='Orthopedic Surgery'>Orthopedic Surgery</option>
						<option value='Otolaryngology (ENT)'>Otolaryngology (ENT)</option>
						<option value='Pain Medicine'>Pain Medicine</option>
						<option value='Pathology'>Pathology</option>
						<option value='Pediatrics'>Pediatrics</option>
						<option value='Physical Medicine and Rehabilitation'>Physical Medicine and Rehabilitation</option>
						<option value='Plastic Surgery'>Plastic Surgery</option>
						<option value='Psychiatry'>Psychiatry</option>
						<option value='Pulmonology'>Pulmonology</option>
						<option value='Radiology'>Radiology</option>
						<option value='Rheumatology'>Rheumatology</option>
						<option value='Sports Medicine'>Sports Medicine</option>
						<option value='Surgery'>Surgery</option>
						<option value='Urology'>Urology</option>
						<option value='Vascular Surgery'>Vascular Surgery</option>
					</select>
					<Button name='ADD' onClick={handleSubmit} />
				</div>
			</div>
			<div className='bottomContainer'>
				<div className='AdminRow_1Row5'>
					<table>
						<thead>
							<tr>
								<th>Name</th>
								<th>NIC</th>
								<th>Email</th>
								<th>Address</th>
								<th>Reg no</th>
								<th>Speciality</th>
							</tr>
						</thead>
						<tbody>
							{doctors.map((item) => (
								<tr>
									<td>{item.name}</td>
									<td>{item.nic}</td>
									<td>{item.email}</td>
									<td>{item.address}</td>
									<td>{item.regno}</td>
									<td>{item.specialty}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
