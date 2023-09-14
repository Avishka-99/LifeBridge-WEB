import React from 'react';

export default function Card(props) {
	return (
		<div
			className='card'
			style={{
				borderRadius: '35px',
				backgroundColor: 'white',
				height: '90%',
				width: '30%',
				boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
			}}
		>
			<div
				style={{
					width: '100%',
					height: '60%',
					display: 'flex',
					justifyContent: 'center',
					fontFamily: 'poppins-regular',
				}}
			>
				<span
					style={{
						fontSize: '9em',
					}}
				>
					{props.value}
				</span>
			</div>
			<div
				style={{
					width: '100%',
					height: '40%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<span
					style={{
						fontSize: '2em',
					}}
				>
					{props.text}
				</span>
			</div>
		</div>
	);
}
