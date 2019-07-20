import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
	<section>
		<div className='buttons'>
			<Link to='/register' className='btn btn-primary'>
				Sign Up!
			</Link>
			<Link to='/login' className='btn btn-light'>
				Login
			</Link>
		</div>
	</section>
);

export default Home;
