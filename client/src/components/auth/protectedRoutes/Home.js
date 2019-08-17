import React, { Fragment, useEffect, useState } from 'react';
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
	// try {
	// 	const config = {
	// 		headers: {
	// 			'x-auth-token': `${token}`
	// 		}
	// 	};
	// 	Axios.get('/api/auth', config);
	// } catch (err) {
	// 	const errors = err.response;
	// 	console.log(errors);
	// }
	return <Fragment>{isAuth ? <h1>Hello </h1> : <Redirect to='/' />}</Fragment>;
};

export default Home;
