import React, { createContext, useContext, useEffect, useState } from 'react';

export function Header() {
	return (
		<header className='container text-center pb-4'>
			<i className='fa fa-envira '></i>
			<h1 className='title py-3'>The IRIS Dataset</h1>
			<p>
				The posts flower data set or Fisher's posts data set is a
				multivariate data set introduced by the British statistician and
				biologist Ronald Fisher in his 1936 paper
				<strong>
					The use of multiple measurements in taxonomic problems as an
					example of linear discriminant analysis.
				</strong>
				It is one of the most commonly used datasets in statistics and
				machine learning.
			</p>
			<p>
				The data set consists of 50 examples (rows) from each of three
				species of posts (setosa, versicolor, and virginica). Four
				features were measured from each sample: the length and the
				width of the sepals and petals, in centimeters.
			</p>
		</header>
	);
}