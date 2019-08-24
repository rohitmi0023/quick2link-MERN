import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const NavBar = () => {
	const guestLinks = (
		<Navbar color='primary' light expand='md'>
			<NavbarBrand>
				<Link to='/'>Quick2Link</Link>
			</NavbarBrand>
			<Nav className='ml-auto' navbar>
				<NavItem className='navItem'>
					<NavLink>
						<Link to='/login'>Log In</Link>
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink>
						<Link to='/register'>Sign Up</Link>
					</NavLink>
				</NavItem>
			</Nav>
		</Navbar>
	);

	return <Fragment>{guestLinks}</Fragment>;
};

export default NavBar;
