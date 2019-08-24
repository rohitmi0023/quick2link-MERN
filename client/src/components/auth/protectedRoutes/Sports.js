import React from 'react';
import { Redirect } from 'react-router-dom';
import AuthNavBar from '../../layout/AuthNavBar';

const Sports = props => {
	if (props.isAuth === false) {
		return <Redirect to='/forbidden' />;
	}
	return (
		<div>
			<AuthNavBar />
			<h3>This is a Sports page.</h3>
		</div>
	);
};

export default Sports;
