import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const AuthNavBar = () => {
	const authLinks = (
		<Navbar color='danger' light expand='md'>
			<NavbarBrand>
				<Link to='/home'>Quick2Link</Link>
			</NavbarBrand>
			<Nav className='ml-auto'>
				<NavItem>
					<NavLink>
						<Link to='/Social'>Social</Link>
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink>
						<Link to='/movies'>Movies</Link>
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink>
						<Link to='/sports'>Sports</Link>
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink>
						<Link to='/music'>Music</Link>
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink>
						<Link to='/logout'>Logout</Link>
					</NavLink>
				</NavItem>
			</Nav>
		</Navbar>
	);
	return <div>{authLinks}</div>;
};

export default AuthNavBar;
