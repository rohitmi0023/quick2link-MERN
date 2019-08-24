import React from 'react';
import { Redirect } from 'react-router-dom';
import AuthNavBar from '../../layout/AuthNavBar';

const Movies = props => {
	if (props.isAuth === false) {
		return <Redirect to='/forbidden' />;
	}
	return (
		<div>
			<AuthNavBar />
			<h3>This is Movies page.</h3>
		</div>
	);
};

export default Movies;
