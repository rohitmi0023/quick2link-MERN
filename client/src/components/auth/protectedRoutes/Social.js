import React from 'react';
import { Redirect } from 'react-router-dom';
import AuthNavBar from '../../layout/AuthNavBar';

const Social = props => {
	if (props.isAuth === false) {
		return <Redirect to='/forbidden' />;
	}
	return (
		<div>
			<AuthNavBar />
			<h3>This is a social page.</h3>
		</div>
	);
};

export default Social;
