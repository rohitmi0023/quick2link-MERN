import React from 'react';
import { Link } from 'react-router-dom';
import {
	Collapse,
	Navbar,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';

const Header = () => (
	<div>
		<Navbar color='light' light expand='md'>
			<NavbarBrand>
				<Link to='/'>Home</Link>
			</NavbarBrand>
			<Nav className='ml-auto' navbar>
				<NavItem>
					<NavLink>
						<Link to='/register'>Sign Up</Link>
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink>
						<Link to='/login'>Log In</Link>
					</NavLink>
				</NavItem>
			</Nav>
		</Navbar>
	</div>
);

export default Header;
