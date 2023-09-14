import React, {useState} from 'react';
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
	const handleSubmit = () => {
		console.log(name);
		console.log(nic);
		console.log(email);
		console.log(address);
		console.log(role);
		try {
			Axios.post(API_ENDPOINTS.ADD_DOCTOR_URL, {
				name: name,
				nic: nic,
				email: email,
				address: address,
				role: role,
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
							<tr>
								<td>Dewmini</td>
								<td>101</td>
								<td>Delivery</td>
								<td>COD</td>
							</tr>
							<tr>
								<td>Janadi</td>
								<td>103</td>
								<td>Delivery</td>
								<td>COD</td>
							</tr>
							<tr>
								<td>Tharindu</td>
								<td>104</td>
								<td>Delivery</td>
								<td>COD</td>
							</tr>
							<tr>
								<td>Tharindu</td>
								<td>104</td>
								<td>Delivery</td>
								<td>COD</td>
							</tr>
							<tr>
								<td>Tharindu</td>
								<td>104</td>
								<td>Delivery</td>
								<td>COD</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
