import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { ReactComponent as ClockIcon } from './clock.svg';
import { ReactComponent as CalenderIcon } from './calendar.svg';

export const App = () => {
	const [dateState, setDateState] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => setDateState(new Date()), 30000);
		return () => clearInterval(interval); // Очищаем интервал при размонтировании компонента
	}, []);

	return React.createElement(
		'div',
		{ className: 'App' },
		React.createElement(
			'header',
			{ className: 'App-header' },
			React.createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
			React.createElement(CalenderIcon),
			React.createElement(
				'p',
				null,
				' ',
				dateState.toLocaleDateString('en-GB', {
					day: 'numeric',
					month: 'short',
					year: 'numeric',
				}),
			),
			React.createElement(ClockIcon),
			React.createElement(
				'p',
				null,
				dateState.toLocaleString('en-US', {
					hour: 'numeric',
					minute: 'numeric',
					hour12: true,
				}),
			),
			React.createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
		),
	);
};
