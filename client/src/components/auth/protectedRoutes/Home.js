import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import AuthNavBar from '../../layout/AuthNavBar';
// import Axios from 'axios';

const Home = props => {
	if (props.isAuth === false) {
		return <Redirect to='/forbidden' />;
	}

	return (
		<Fragment>
			<AuthNavBar />
			<h2>This page will be accessed by registered users only! </h2>
		</Fragment>
	);
};

export default Home;

// const onRender = async () => {
// 	try {
// 		const config = {
// 			headers: {
// 				'x-auth-token': `${token}`
// 			}
// 		};
// 		const res = await Axios.get('/api/auth', config);
// 		// console.log(res);
// 		return res;
// 	} catch (err) {
// 		const errors = err.response;
// 		console.log(errors);
// 	}
// };
