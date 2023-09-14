import React from 'react';
import '../../css/admin/adminHome.css';
import Card from '../../componets/Card';
export default function AdminHome() {
	return (
		<div className='adminBaseContainer'>
			<div className='topContainer'>
				<Card value={5} text={'Doctors'} />
				<Card value={5} text={'Staff'} />
				<Card value={5} text={'Medicine'} />
			</div>
			<div className='bottomContainer'>
				<div
					className='title'
					style={{
						fontFamily: 'poppins-medium',
						fontSize: '2em',
						padding: '10px',
					}}
				>
					Medicine details
				</div>
				<div className='AdminRow_1Row5'>
					<table>
						<thead>
							<tr>
								<th>Name</th>
								<th>Reg no</th>
								<th>Unit price (Rs.)</th>
								<th>Quantity</th>
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
