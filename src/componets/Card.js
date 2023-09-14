import React from 'react';

export default function Card(props) {
	const styles = {
		borderRadius: '12px',
		backgroundColor: 'red',
	};
	return (
		<div
			className='card'
			style={{
				borderRadius: '35px',
				backgroundColor: 'red',
				height: '90%',
				width: '30%',
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
						fontSize: '4em',
					}}
				>
					{props.text}
				</span>
			</div>
		</div>
	);
}
