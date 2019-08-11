import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Landing from './components/layout/Landing';
import Home from './components/auth/protectedRoutes/Home';
import Logout from './components/auth/protectedRoutes/Logout';
import AuthContextProvider from './contexts/AuthContext';

const App = () => (
	<Fragment>
		<Router>
			<Switch>
				<Route exact path='/' component={Landing} />
				{/* <AuthContextProvider> */}
				<Route exact path='/home' component={Home} />
				{/* </AuthContextProvider> */}
				<Route exact path='/register' component={Register} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/logout' component={Logout} />
			</Switch>
		</Router>
	</Fragment>
);

export default App;
