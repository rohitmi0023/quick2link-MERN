import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';

const NavBar = () => {
	const [isOpen, setIsOpen] = useState({ isOpen: false });

	const toggle = () => {
		setIsOpen({ ...isOpen, isOpen: !isOpen });
	};

	return (
		<Fragment>
			<Navbar color='danger' light expand='md'>
				<NavbarBrand>
					<Link to='/'>Quick2Link</Link>
				</NavbarBrand>
				<NavbarToggler onClick={e => toggle(e)} />
				<Collapse isOpen={isOpen} color='primary' navbar>
					<Nav className='ml-auto' navbar>
						<NavItem>
							<NavLink color='danger'>
								<Link to='/home'>Home</Link>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink color='danger'>
								<Link to='/register'>Sign Up</Link>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink>
								<Link to='/login'>Log In</Link>
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</Fragment>
	);
};

export default NavBar;
