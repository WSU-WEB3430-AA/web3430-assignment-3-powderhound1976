import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IrisContext } from './App';


export function Setosa(props) {
  let { iris, setIris } = useContext(IrisContext);
  const history = useHistory();
  
  
	return (
		<>
			<div className='container py-4'>
				<h2 className="text-center pb-4">The setosa iris flower</h2>
				<div className='row'>
					<div className='col-3'>
						<img src='../images/setosa.png' alt='' className="img-fluid"/>
					</div>
					<div className='col'>
						<table className="table">
							<thead>
								<tr>
									<th>Name</th>
                  <th>Value</th>
								</tr>
							</thead>
              <tbody>
                <tr>
                  <td><strong>Count</strong></td>
                  <td>50</td>
                </tr>
                <tr>
                  <td><strong>Sepal Length Avg.</strong></td>
                  <td>5.01</td>
                </tr>
                <tr>
                  <td><strong>Sepal Width Avg.</strong></td>
                  <td>3.43</td>
                </tr>
                <tr>
                  <td><strong>Petal Length Avg.</strong></td>
                  <td>1.46</td>
                </tr>
                <tr>
                  <td><strong>Petal Width Avg.</strong></td>
                  <td>0.25</td>
                </tr>
              </tbody>
						</table>
            <button className='my-3 purplebutton' onClick={() => history.push('/iris')}>Back to the main iris dataset page</button>
					</div>
				</div>
			</div>
		</>
	);
}
export function Versicolor() {
  const history = useHistory();
	return (
		<>
			<div className='container py-4'>
				<h2 className='text-center pb-4'>The versicolor iris flower</h2>
				<div className='row'>
					<div className='col-3'>
						<img
							src='../images/versicolor.png'
							alt=''
							className='img-fluid'
						/>
					</div>
					<div className='col'>
						<table className='table'>
							<thead>
								<tr>
									<th>Name</th>
									<th>Value</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Count</strong>
									</td>
									<td>50</td>
								</tr>
								<tr>
									<td>
										<strong>Sepal Length Avg.</strong>
									</td>
									<td>5.94</td>
								</tr>
								<tr>
									<td>
										<strong>Sepal Width Avg.</strong>
									</td>
									<td>2.77</td>
								</tr>
								<tr>
									<td>
										<strong>Petal Length Avg.</strong>
									</td>
									<td>4.26</td>
								</tr>
								<tr>
									<td>
										<strong>Petal Width Avg.</strong>
									</td>
									<td>1.33</td>
								</tr>
							</tbody>
						</table>
						<button
							className='my-3 purplebutton'
							onClick={() => history.push('/iris')}>
							Back to the main iris dataset page
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export function Virginica() {
  const history = useHistory();
	return (
		<>
			<div className='container py-4'>
				<h2 className='text-center pb-4'>The virginica iris flower</h2>
				<div className='row'>
					<div className='col-3'>
						<img
							src='../images/virginica.png'
							alt=''
							className='img-fluid'
						/>
					</div>
					<div className='col'>
						<table className='table'>
							<thead>
								<tr>
									<th>Name</th>
									<th>Value</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Count</strong>
									</td>
									<td>50</td>
								</tr>
								<tr>
									<td>
										<strong>Sepal Length Avg.</strong>
									</td>
									<td>6.59</td>
								</tr>
								<tr>
									<td>
										<strong>Sepal Width Avg.</strong>
									</td>
									<td>2.97</td>
								</tr>
								<tr>
									<td>
										<strong>Petal Length Avg.</strong>
									</td>
									<td>5.55</td>
								</tr>
								<tr>
									<td>
										<strong>Petal Width Avg.</strong>
									</td>
									<td>2.03</td>
								</tr>
							</tbody>
						</table>
						<button
							className='my-3 purplebutton'
							onClick={() => history.push('/iris')}>
							Back to the main iris dataset page
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
