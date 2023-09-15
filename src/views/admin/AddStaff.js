import React, {useState, useEffect} from 'react';
import TextInput from '../../componets/TextInput';
import '../../css/admin/adminStaff.css';
import Button from '../../componets/Button';
import Axios from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
export default function AddStaff() {
	const [name, setName] = useState('');
	const [nic, setnic] = useState('');
	const [email, setemail] = useState('');
	const [address, setaddress] = useState('');
	const [role, setrole] = useState('');
	const [staff, setstaff] = useState(null);
	useEffect(() => {
		Axios.post(API_ENDPOINTS.GET_STAFF).then((response) => {
			console.log(response.data);
			setstaff(response.data);
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
	const handleSubmit = () => {
		console.log(name);
		console.log(nic);
		console.log(email);
		console.log(address);
		console.log(role);
		try {
			Axios.post(API_ENDPOINTS.ADD_STAFF_URL, {
				name: name,
				nic: nic,
				email: email,
				address: address,
				role: role,
			}).then((response) => {
				setstaff(response.data);
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
	const employees = [
		{
			name: 'Alice Johnson',
			nic: '950802-5678B',
			address: '456 Elm Street, Townsville, NY 10001',
			email: 'alice.johnson@email.com',
			role: 'Pharmacy',
		},
		{
			name: 'Bob Smith',
			nic: '891215-1234C',
			address: '789 Oak Avenue, Villagetown, TX 77002',
			email: 'bob.smith@email.com',
			role: 'Cashier',
		},
		{
			name: 'Charlie Brown',
			nic: '880530-9876D',
			address: '101 Pine Road, Hamletsville, IL 60603',
			email: 'charlie.brown@email.com',
			role: 'Pharmacy',
		},
		{
			name: 'David Wilson',
			nic: '910705-2345E',
			address: '321 Birch Lane, Suburbia, FL 33140',
			email: 'david.wilson@email.com',
			role: 'Cashier',
		},
		{
			name: 'Emily Martinez',
			nic: '930619-8765F',
			address: '234 Maple Drive, Cityscape, CA 90210',
			email: 'emily.martinez@email.com',
			role: 'Pharmacy',
		},
		{
			name: 'Frank White',
			nic: '900415-3456G',
			address: '555 Cedar Road, Villageland, TX 77001',
			email: 'frank.white@email.com',
			role: 'Cashier',
		},
		{
			name: 'Grace Lee',
			nic: '970103-7890H',
			address: '789 Willow Lane, Townsville, NY 10002',
			email: 'grace.lee@email.com',
			role: 'Pharmacy',
		},
		{
			name: 'Hannah Davis',
			nic: '940724-5678I',
			address: '999 Redwood Street, Villagetown, TX 77003',
			email: 'hannah.davis@email.com',
			role: 'Cashier',
		},
		{
			name: 'Isaac Miller',
			nic: '891208-2345J',
			address: '123 Oak Avenue, Suburbia, FL 33141',
			email: 'isaac.miller@email.com',
			role: 'Pharmacy',
		},
		{
			name: 'Jennifer Johnson',
			nic: '920401-8765K',
			address: '777 Pine Road, Cityscape, CA 90211',
			email: 'jennifer.johnson@email.com',
			role: 'Cashier',
		},
	];
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
					Add a staff member
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
					<TextInput text='NIC' onChange={setnic} />
					<TextInput text='Email' onChange={setemail} />
					<TextInput text='Address' onChange={setaddress} />
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
						onChange={(e) => setrole(e.target.value)}
					>
						<option value='' selected disabled>
							---Select role---
						</option>
						<option value='phamacist'>Phamacist</option>
						<option value='cashier'>Cashier</option>
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
								<th>Role</th>
							</tr>
						</thead>
						<tbody>
							{staff ? (
								staff.map((item) => (
									<tr>
										<td>{item.name}</td>
										<td>{item.nic}</td>
										<td>{item.email}</td>
										<td>{item.address}</td>
										<td>{item.role}</td>
									</tr>
								))
							) : (
								<div></div>
							)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
