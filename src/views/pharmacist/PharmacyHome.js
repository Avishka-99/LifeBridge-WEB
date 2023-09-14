import React, {useState} from 'react';
import TextInput from '../../componets/TextInput';
import '../../css/pharmacy/pharmacyHome.css';
import Button from '../../componets/Button';
export default function PharmacyHome() {
	const [limit, setLimit] = useState(0);
	const [medicine, setMedicine] = useState();
	const [qty, setQty] = useState(0);
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
	const handleChange = (limit, id) => {
		console.log(limit);
		setLimit(limit);
		setMedicine(id);
	};
	const handleSubmit = () => {
		console.log(medicine);
		console.log(qty);
	};
	return (
		<div className='pharmacyBaseContainer'>
			<div className='topContainer'>
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
					onChange={(e) => setMedicine(e.target.value)}
				>
					<option value='' disabled>
						Select medicine
					</option>
					{medicines.map((medicine) => (
						<option value={medicine.medicineId}>{medicine.medicineName}</option>
					))}
				</select>
				<TextInput type='number' text='Quantity' onChange={setQty} height='50%' />
				<Button name='Issue' onClick={handleSubmit} />
				{/* <Card value={5} text={'Staff'} />
				<Card value={5} text={'Medicine'} /> */}
			</div>
			<div className='bottomContainer'></div>
		</div>
	);
}
