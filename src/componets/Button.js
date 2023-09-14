import React from 'react';

export default function Button(props) {
	return (
		<div
			className='StaffAddButton'
			style={{
				width: '10%',
				height: '100%',
				backgroundColor: 'dodgerblue',
				borderRadius: '35px',
				fontFamily: 'poppins-medium',
				display: 'flex',
				textAlign: 'center',
				alignItems: 'center',
				justifyContent: 'center',
				fontSize: props.textSize ? props.textSize : '2.3em',
				color: 'white',
			}}
		>
			{props.name}
		</div>
	);
}
