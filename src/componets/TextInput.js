import React from 'react';

export default function (props) {
	return (
		<input
			type={props.type ? props.type : 'text'}
			placeholder={props.text}
			style={{
				outline: '4px solid #7eb693',
				width: props.width ? props.width : '15%',
				height: '70%',
				padding: '10px',
				fontStyle: 'normal',
				backgroundColor: 'white',
				borderRadius: '1em',
				lineHeight: '42px',
				fontSize: '20px',
				borderWidth: '0px',
			}}
			onChange={(event) => props.onChange(event.target.value)}
		></input>
	);
}
