import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import NavBar from './components/layout/NavBar';
import Landing from './components/layout/Landing';
import Home from './components/auth/protectedRoutes/Home';

const App = () => (
	<Fragment>
		<Router>
			<NavBar />
			<section className='container'>
				<Switch>
					<Route exact path='/' component={Landing} />
					<Route exact path='/home' component={Home} />
					<Route exact path='/register' component={Register} />
					<Route exact path='/login' component={Login} />
				</Switch>
			</section>
		</Router>
	</Fragment>
);

export default App;
