import {flexbox} from '@mui/system';
import React from 'react';
import '../css/doctor/appoinmentCard.css';
export default function AppoinmentCard(props) {
	return (
		<div
			style={{
				width: '70%',
				height: '60%',
				backgroundColor: 'white',
				borderRadius: '35px',
				boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
				marginBottom: '2%',
				marginLeft: '15%',
			}}
		>
			<div
				style={{
					width: '100%',
					height: '20%',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<span
					style={{
						marginLeft: '5%',
						fontFamily: 'poppins-medium',
						fontSize: '1.2em',
					}}
				>
					{props.details.patientName}
				</span>
				<span
					style={{
						marginRight: '5%',
						fontFamily: 'poppins-medium',
						fontSize: '1.2em',
					}}
				>
					Age-{props.details.age}y
				</span>
			</div>
			<div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60%'}}>
				<textarea style={{width: '98%', height: '100%'}} />
			</div>
			<div style={{width: '100%', height: '20%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
				<div className='appoinmentRoundedButton' style={{width: '60%', height: '90%', borderRadius: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'poppins-medium', fontSize: '1.8em', color: 'white'}}>
					Submit
				</div>
			</div>
		</div>
	);
}
