import React, { Fragment } from 'react';
import NavBar from '../../layout/NavBar';
import GetCarousel from './GetCarousel';
import './landing.css';

const Landing = () => {
	// src: 'https://i.ytimg.com/vi/pyBtwWDzacI/maxresdefault.jpg',
	// 'https://www.macworld.co.uk/cmsdata/features/3668897/apple-tv-app_thumb800.jpg',
	return (
		<Fragment>
			<div>
				<NavBar />
				<h3>Welcome to Quick2Link!</h3>
				<GetCarousel />
			</div>
		</Fragment>
	);
};

export default Landing;
