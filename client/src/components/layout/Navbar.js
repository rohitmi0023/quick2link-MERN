import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
	<Fragment>
		<nav className='nav-extended'>
			<div className='nav-wrapper'>
				<Link to='/home' className='brand-logo'>
					Home
				</Link>
				<Link to='/home' data-target='mobile-demo' className='sidenav-trigger'>
					<i className='material-icons'>menu</i>
				</Link>
				<ul id='nav-mobile' className='right hide-on-med-and-down'>
					<li>
						<Link to='/register'>Sign-Up</Link>
					</li>
					<li>
						<Link to='/login'>Log In</Link>
					</li>
				</ul>
			</div>
			<div className='nav-content'>
				<ul className='tabs tabs-transparent'>
					<li className='tab disabled'>
						<a href='#test1'>Social</a>
					</li>
					<li className='tab disabled'>
						<a className='active' href='#test2'>
							Music
						</a>
					</li>
					<li className='tab disabled'>
						<a href='#test3'>Sports</a>
					</li>
					<li className='tab disabled'>
						<a href='#test4'>Movies</a>
					</li>
				</ul>
			</div>
		</nav>
		<ul className='sidenav' id='mobile-demo'>
			<li>
				<Link to='/register'>Sign-Up</Link>
			</li>
			<li>
				<Link to='/login'>Log In</Link>
			</li>
		</ul>
		{/* 
		<div id='test1' className='col s12'>
			Social
		</div>
		<div id='test2' className='col s12'>
			Music
		</div>
		<div id='test3' className='col s12'>
			Sports
		</div>
		<div id='test4' className='col s12'>
			Movies
		</div> */}
	</Fragment>
);

export default Navbar;
