import React, { createContext, useContext, useEffect, useState } from 'react';

export function Footer() {
	return (
		<footer className='container'>
			<div className='row'>
				<div className='col-6'>
					<strong>Christopher Reynolds</strong>
				</div>
				<div className='col-6'>
					<p className='footRight'>&copy; 2021 All rights reserved</p>
				</div>
			</div>
		</footer>
	);
}
