import React, { useContext, useEffect, useState } from 'react';
import _ from 'lodash';
import axios from 'axios';
import { IrisContext } from './App';

const pageSize = 10;

export function Table() {
  const {iris, setIris} = useContext(IrisContext)
	const [paginatedIriss, setpaginatedIriss] = useState();
	const [currentPage, setcurrentPage] = useState(1);
	useEffect(() => {
		axios.get('/iris.dat').then(res => {
			setpaginatedIriss(_(res.data).slice(0).take(pageSize).value());
		});
	}, []);

	const pageCount = iris ? Math.ceil(iris.length / pageSize) : 0;
	if (pageCount === 1) return null;
	const pages = _.range(1, pageCount + 1);

	const pagination = pageNo => {
		setcurrentPage(pageNo);
		const startIndex = (pageNo - 1) * pageSize;
		const paginatedIris = _(iris).slice(startIndex).take(pageSize).value();
    console.log(paginatedIris);
		setpaginatedIriss(paginatedIris);
    console.log(iris)
	};
	if (!paginatedIriss) return <p>Loading...</p>;
	return (
		<>
			<div className='container text-center'>
				<h2 className='tableTitle'>
					The whole dataset - 150 data examples
				</h2>
				<p className='tableSubtitle'>(page {currentPage} of 15)</p>
			</div>
			<table className='table'>
				<thead>
					<tr>
						<th>#</th>
						<th>Sepal Length</th>
						<th>Sepal Width</th>
						<th>Petal Length</th>
						<th>Petal Width</th>
						<th>Type</th>
					</tr>
				</thead>
				<tbody>
					{paginatedIriss.map((item, index) => (
						<tr key={index}>
							<td>{index + (currentPage * pageSize - 9)}</td>
							<td>{item.sepalLength}</td>
							<td>{item.sepalWidth}</td>
							<td>{item.petalLength}</td>
							<td>{item.petalWidth}</td>
							<td>{item.species}</td>
						</tr>
					))}
				</tbody>
			</table>
			<nav className='d-flex justify-content-center'>
				<ul className='pagination'>
					{pages.map(page => (
						<li
							className={
								page === currentPage
									? 'page-item active'
									: 'page-item'
							}>
							<p
								className='page-link'
								onClick={() => pagination(page)}>
								{page}
							</p>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
}