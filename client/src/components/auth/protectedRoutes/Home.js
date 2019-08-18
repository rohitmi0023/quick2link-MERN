import React, { Fragment, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';

const Home = () => {
	const token = localStorage.getItem('token');
	let isAuth;
	if (token) {
		isAuth = true;
	} else {
		isAuth = false;
	}
	// useEffect(() => {
	// 	onRender();

	// 	// return info;
	// }, []);
	if (isAuth === false) {
		return <Redirect to='/forbidden' />;
	}
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

	return (
		<Fragment>
			<h2>This page will be accessed by registered users only! </h2>
		</Fragment>
	);
};

export default Home;
