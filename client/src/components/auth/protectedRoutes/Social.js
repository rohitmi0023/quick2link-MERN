import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import AuthNavBar from '../../layout/AuthNavBar';

const Social = props => {
	if (props.isAuth === false) {
		return <Redirect to='/forbidden' />;
	}
	return (
		<Fragment>
			<AuthNavBar />
			<h3>This is a social page.</h3>
		</Fragment>
	);
};

export default Social;
