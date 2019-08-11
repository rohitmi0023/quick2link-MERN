import React, { Fragment, useState, useContext } from 'react';
import UserNavBar from './UserNavBar';
import axios from 'axios';
import { Button } from 'reactstrap';
import { withRouter } from 'react-router';

import AuthContext from '../../../contexts/AuthContext';

const Home = props => {
	const [userInfo, setUserInfo] = useState({});

	const { token } = useContext(AuthContext);

	const authentication = async () => {
		const config = {
			headers: {
				'x-auth-token': `${token}`
			}
		};
		try {
			const res = await axios.get('/api/auth', config);
			console.log(res.data);
			const { name, _id, avatar, email } = res.data;
			setUserInfo({ ...userInfo, name, _id, avatar, email });
		} catch (err) {
			console.log(err.response.data);
		}
	};

	return (
		<Fragment>
			{/* {console.log(props)} */}
			<UserNavBar />
			<br />
			<h3>This page will be accessed by registered users only !</h3>
			<Button onClick={authentication}>Click</Button>
			<br />
			<h4>Welcome {userInfo.email}</h4>
		</Fragment>
	);
};

export default withRouter(Home);
