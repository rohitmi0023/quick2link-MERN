import React, { useState } from 'react';

export const AuthContext = React.createContext();

const AuthContextProvider = props => {
	const [token, setToken] = useState({
		currentUserToken: ''
	});
	setToken({ ...token, currentUserToken: localStorage.getItem('token') });

	return (
		<AuthContext.Provider value={token.currentUserToken}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
