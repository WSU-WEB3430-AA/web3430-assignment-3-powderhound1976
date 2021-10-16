import React, { createContext, useContext, useEffect, useState } from 'react';

export function IrisDescription(props) {
	const average = array => array.reduce((a, b) => a + b) / array.length;
	console.log(average([1, 2, 3, 4, 5]));

	return (
		<div className='container'>
			<h2>The iris flower</h2>
		</div>
	);
}
