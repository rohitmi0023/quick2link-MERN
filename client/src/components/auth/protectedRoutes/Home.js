import React, { Fragment } from 'react';

const Home = props => {
	return (
		<Fragment>
			<br />
			{console.log(props)}
			<h3>This page will be accessed by registered users only !</h3>
		</Fragment>
	);
};

export default Home;
