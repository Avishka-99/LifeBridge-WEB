import {flexbox} from '@mui/system';
import React, {useState, useEffect} from 'react';
import '../css/doctor/appoinmentCard.css';
import Axios from '../api/Axios';
import * as API_ENDPOINTS from '../api/ApiEndpoints';
export default function AppoinmentCard(props) {
	const id = props.details._id;
	const [postContent, setPostContent] = useState('');
	const handleSubmit = (id) => {
		Axios.post(API_ENDPOINTS.SET_PRESCRIPTION, {
			id: id,
			data: postContent,
		}).then((response) => {
			console.log(response.data);
		});
	};
	// useEffect(() => {
	// 	Axios.post(API_ENDPOINTS.SET_PRESCRIPTION, {
	// 		id: id,
	// 		data: postContent,
	// 	}).then((response) => {
	// 		console.log(response.data);
	// 	});
	// }, []);
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
					{props.details.name}
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
				<textarea onChange={(e) => setPostContent(e.target.value)} style={{width: '98%', height: '100%'}} />
			</div>
			<div style={{width: '100%', height: '20%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
				<div onClick={() => handleSubmit(id)} className='appoinmentRoundedButton' style={{width: '60%', height: '90%', borderRadius: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'poppins-medium', fontSize: '1.8em', color: 'white'}}>
					Submit
				</div>
			</div>
		</div>
	);
}
