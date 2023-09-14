import React, {useState} from 'react';
import TextInput from '../../componets/TextInput';
import Button from '../../componets/Button';
import Toast from '../../componets/Toast';
import * as ToastMessages from '../../componets/ToastMessages';
import Axios from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
export default function Medicine() {
	const [price, setPrice] = useState();
	const [medicine, setMedicine] = useState();
	const [qty, setQty] = useState();
	const handleSubmit = () => {
		if (price == null || medicine == null || qty == null) {
			ToastMessages.error('Please fill required fields');
		} else {
			try {
				Axios.post(API_ENDPOINTS.ADD_MEDICINE_URL, {
					name: medicine,
					qty: qty,
					price: price,
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
		}
	};
	const medicines = [
		{
			medicineId: 1,
			medicineName: 'Aspirin',
			unitPrice: 5.99,
			quantity: 50,
		},
		{
			medicineId: 2,
			medicineName: 'Ibuprofen',
			unitPrice: 7.49,
			quantity: 30,
		},
		{
			medicineId: 3,
			medicineName: 'Paracetamol',
			unitPrice: 4.99,
			quantity: 60,
		},
		{
			medicineId: 4,
			medicineName: 'Amoxicillin',
			unitPrice: 12.99,
			quantity: 40,
		},
		{
			medicineId: 5,
			medicineName: 'Ciprofloxacin',
			unitPrice: 9.99,
			quantity: 25,
		},
		{
			medicineId: 6,
			medicineName: 'Loratadine',
			unitPrice: 6.79,
			quantity: 35,
		},
		{
			medicineId: 7,
			medicineName: 'Omeprazole',
			unitPrice: 8.59,
			quantity: 20,
		},
		{
			medicineId: 8,
			medicineName: 'Simvastatin',
			unitPrice: 11.49,
			quantity: 45,
		},
		{
			medicineId: 9,
			medicineName: 'Metformin',
			unitPrice: 5.29,
			quantity: 55,
		},
		{
			medicineId: 10,
			medicineName: 'Prednisone',
			unitPrice: 7.99,
			quantity: 28,
		},
		{
			medicineId: 11,
			medicineName: 'Hydrochlorothiazide',
			unitPrice: 6.19,
			quantity: 32,
		},
		{
			medicineId: 12,
			medicineName: 'Atorvastatin',
			unitPrice: 10.79,
			quantity: 38,
		},
		{
			medicineId: 13,
			medicineName: 'Diazepam',
			unitPrice: 9.29,
			quantity: 22,
		},
		{
			medicineId: 14,
			medicineName: 'Citalopram',
			unitPrice: 8.99,
			quantity: 18,
		},
		{
			medicineId: 15,
			medicineName: 'Sertraline',
			unitPrice: 7.69,
			quantity: 42,
		},
		{
			medicineId: 16,
			medicineName: 'Warfarin',
			unitPrice: 5.89,
			quantity: 48,
		},
		{
			medicineId: 17,
			medicineName: 'Furosemide',
			unitPrice: 6.49,
			quantity: 36,
		},
		{
			medicineId: 18,
			medicineName: 'Fluoxetine',
			unitPrice: 7.09,
			quantity: 26,
		},
		{
			medicineId: 19,
			medicineName: 'Levothyroxine',
			unitPrice: 6.99,
			quantity: 29,
		},
		{
			medicineId: 20,
			medicineName: 'Amlodipine',
			unitPrice: 8.39,
			quantity: 24,
		},
	];
	return (
		<div className='pharmacyBaseContainer'>
			<div className='topContainer'>
				<TextInput type='text' text='Name' onChange={setMedicine} height='50%' />
				<TextInput type='number' text='Unit price' onChange={setPrice} height='50%' />
				<TextInput type='number' text='Quantity' onChange={setQty} height='50%' />
				<Button name='Add' onClick={handleSubmit} />
				{/* <Card value={5} text={'Staff'} />
				<Card value={5} text={'Medicine'} /> */}
			</div>
			<div className='bottomContainer'>
				<div className='AdminRow_1Row5'>
					<table>
						<thead>
							<tr>
								<th>Name</th>
								<th>Unit price (Rs.)</th>
								<th>Quantity</th>
							</tr>
						</thead>
						<tbody>
							{medicines.map((item) => (
								<tr>
									<td>{item.medicineName}</td>
									<td>{item.unitPrice}</td>
									<td>{item.quantity}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
			<Toast duration={3000} />
		</div>
	);
}
