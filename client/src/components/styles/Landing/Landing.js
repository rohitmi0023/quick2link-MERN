import React, { Fragment } from 'react';
import GetCarousel from './GetCarousel';
import NavBar from '../../auth/NavBar';

const Landing = () => {
	return (
		<Fragment>
			<div>
			 	<NavBar/>
				<h3 style={{textAlign:'center',fontSize:'40px'}}>Welcome to Quick2Link!</h3>
				<br/>
				<GetCarousel />
				<br/>
				<h3 style={{textAlign:'center'}}>About the Developer</h3>
			</div>
		</Fragment>
	);
};

export default Landing;
