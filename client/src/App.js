import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Home from './components/layout/Home';
import NavBar from './components/layout/NavBar';

const App = () => (
	<Router>
		<Fragment>
			<NavBar />
			<section className='container'>
				<Switch>
					<Route exact path='/home' component={Home} />
					<Route exact path='/register' component={Register} />
					<Route exact path='/login' component={Login} />
				</Switch>
			</section>
		</Fragment>
	</Router>
);

export default App;
