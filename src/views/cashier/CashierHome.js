import React from 'react';
import TextInput from '../../componets/TextInput';
import Button from '../../componets/Button';
import '../../css/cashier/cashierHome.css';
export default function CashierHome() {
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
					<TextInput text='Name' />
					<TextInput text='Age' />
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
					>
						<option value='phamacist'>Phamacist</option>
						<option value='cashier'>Cashier</option>
					</select>
					<Button name='Create' textSize='1.5em' />
				</div>
			</div>
			<div className='bottomContainer'></div>
		</div>
	);
}
