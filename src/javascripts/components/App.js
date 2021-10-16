import React, { createContext, useContext, useEffect, useState } from 'react';
import { Summary } from './Summary';
import { Header } from './Header';
import { Table } from './Table';
import { Footer } from './Footer';
import { Setosa, Versicolor, Virginica } from './Pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const IrisContext = createContext();
export function App(props) {
	const [iris, setIris] = useState();
	return (
		<IrisContext.Provider value={{ iris, setIris }}>
			<Router >
				<Header />
				<div className='container'>
					<Switch>
						<Route exact path='/'>
							<div className='row'>
								<div className='col-7'>
									<Table />
								</div>
								<div className='container col-5 py-4'>
									<Summary />
								</div>
							</div>
						</Route>
						<Route path='/iris/setosa'>
							<Setosa />
						</Route>
						<Route path='/iris/versicolor'>
							<Versicolor />
						</Route>
						<Route path='/iris/virginica'>
							<Virginica />
						</Route>
					</Switch>
				</div>
				<Footer />
			</Router>
		</IrisContext.Provider>
	);
}