import React from 'react';
import '../css/button.css';
export default function Button(props) {
	return (
		<div
			className='AddButton'
			style={{
				width: '10%',
				height: '100%',
				borderRadius: '35px',
				fontFamily: 'poppins-medium',
				display: 'flex',
				textAlign: 'center',
				alignItems: 'center',
				justifyContent: 'center',
				fontSize: props.textSize ? props.textSize : '2.3em',
				color: 'white',
			}}
			onClick={() => props.onClick()}
		>
			{props.name}
		</div>
	);
}
