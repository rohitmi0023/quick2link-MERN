import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Landing from './components/layout/Landing';
import Home from './components/auth/protectedRoutes/Home';
import Forbidden from './components/layout/Forbidden';
import Social from './components/auth/protectedRoutes/Social';
import Sports from './components/auth/protectedRoutes/Sports';
import Music from './components/auth/protectedRoutes/Music';
import Movies from './components/auth/protectedRoutes/Movies';
import Logout from './components/auth/Logout';

import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCoffee,
	faCheckSquare,
	faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

library.add(faCoffee, faCheckSquare, faSignOutAlt);

const App = () => {
	const [isAuth, setIsAuth] = useState(false);
	useEffect(() => {
		let token = localStorage.getItem('token');
		if (token) {
			setIsAuth(true);
		}
	}, [isAuth]);

	return (
		<Fragment>
			<Router>
				<Switch>
					<Route exact path='/' component={Landing} />
					<Route
						exact
						path='/register'
						render={props => <Register {...props} isAuth={isAuth} />}
					/>
					<Route
						exact
						path='/home'
						render={props => <Home {...props} isAuth={isAuth} />}
					/>
					<Route
						exact
						path='/login'
						render={props => <Login {...props} isAuth={isAuth} />}
					/>
					<Route
						exact
						path='/social'
						render={props => <Social {...props} isAuth={isAuth} />}
					/>
					<Route
						exact
						path='/sports'
						render={props => <Sports {...props} isAuth={isAuth} />}
					/>
					<Route
						exact
						path='/music'
						render={props => <Music {...props} isAuth={isAuth} />}
					/>
					<Route
						exact
						path='/movies'
						render={props => <Movies {...props} isAuth={isAuth} />}
					/>
					<Route
						exact
						path='/logout'
						render={props => <Logout {...props} isAuth={isAuth} />}
					/>
					<Route exact path='/forbidden' component={Forbidden} />
				</Switch>
			</Router>
		</Fragment>
	);
};

export default App;
