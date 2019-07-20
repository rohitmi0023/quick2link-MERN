import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/layout/Header';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

const App = () => (
	<Router>
		<Fragment>
			<Header />
			<section className='container'>
				<Switch>
					<Route exact path='/register' component={Register} />
					<Route exact path='/login' component={Login} />
				</Switch>
			</section>
		</Fragment>
	</Router>
);

export default App;
