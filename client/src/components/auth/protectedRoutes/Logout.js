import React, { Fragment, useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

const Logout = ({ history }) => {
	const { token } = useContext(AuthContext);
	return (
		<Fragment>
			{localStorage.removeItem(`${token}`)}
			{history.push('/')}
		</Fragment>
	);
};

export default Logout;
