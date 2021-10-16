import React, { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
export function Summary(props) {
  const history = useHistory();
	return (
		<div className='bglight'>
			<table className='table sidetable'>
				<thead>
					<tr>
						<th></th>
						<th
							style={{
								margin: '2rem 0 0 1rem',
							}}>
							<img
								src='../images/setosa.png'
								alt=''
								className='rounded'
							/>
						</th>
						<th
							style={{
								margin: '2rem 0 0 1rem',
							}}>
							<img
								src='../images/versicolor.png'
								alt=''
								className='rounded'
							/>
						</th>
						<th
							style={{
								margin: '2rem 0 0 1rem',
							}}>
							<img
								src='../images/virginica.png'
								alt=''
								className='rounded'
							/>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<strong>Name</strong>
						</td>
						<td>setosa</td>
						<td>versicolor</td>
						<td>virginica</td>
					</tr>
					<tr>
						<td>
							<strong>Count</strong>
						</td>
						<td>50</td>
						<td>50</td>
						<td>50</td>
					</tr>
					<tr>
						<td>
							<strong>Link</strong>
						</td>
						<td>
							<button className='purplebutton' onClick={() => history.push('/iris/setosa')}>See more</button>
						</td>
						<td>
							<button className='purplebutton' onClick={() => history.push('/iris/versicolor')}>See more</button>
						</td>
						<td>
							<button className='purplebutton' onClick={() => history.push('/iris/virginica')}>See more</button>
						</td>
					</tr>
				</tbody>
			</table>
			<div className='tableTitle text-center py-3'>Summary</div>
		</div>
	);
}
