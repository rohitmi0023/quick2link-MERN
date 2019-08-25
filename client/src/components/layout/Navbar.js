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
					<NavLink tag={Link} to='/login'>
						Log In
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink tag={Link} to='/register'>
						Sign Up
					</NavLink>
				</NavItem>
			</Nav>
		</Navbar>
	);

	return <Fragment>{guestLinks}</Fragment>;
};

export default NavBar;
