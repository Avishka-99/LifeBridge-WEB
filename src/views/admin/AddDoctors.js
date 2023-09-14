import React from 'react';
import TextInput from '../../componets/TextInput';
import '../../css/admin/adminStaff.css';
import Button from '../../componets/Button';
export default function AddDoctors() {
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
					<TextInput text='Name' width='12%' />
					<TextInput text='NIC' width='12%' />
					<TextInput text='Email' width='12%' />
					<TextInput text='Address' width='12%' />
					<TextInput text='SLMC Reg no' width='12%' />
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
					>
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
					<Button name='ADD' />
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
