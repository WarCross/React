import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { ReactComponent as ClockIcon } from './clock.svg';
import { ReactComponent as CalenderIcon } from './calendar.svg';

export const App = () => {
	const [dateState, setDateState] = useState(new Date());
	useEffect(() => {
		setInterval(() => setDateState(new Date()), 30000);
	}, []);
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<CalenderIcon />
				<p>
					{' '}
					{dateState.toLocaleDateString('en-GB', {
						day: 'numeric',
						month: 'short',
						year: 'numeric',
					})}
				</p>
				<ClockIcon />
				<p>
					{dateState.toLocaleString('en-US', {
						hour: 'numeric',
						minute: 'numeric',
						hour12: true,
					})}
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
};
