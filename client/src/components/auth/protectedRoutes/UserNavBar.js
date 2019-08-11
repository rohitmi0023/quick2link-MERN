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

const UserNavBar = () => {
	const [isOpen, setIsOpen] = useState({ isOpen: false });

	const toggle = () => {
		setIsOpen({ ...isOpen, isOpen: !isOpen });
	};

	return (
		<Fragment>
			<Navbar color='danger' light expand='md'>
				<NavbarBrand>
					<Link to='/home'>Home</Link>
				</NavbarBrand>
				<NavbarToggler onClick={e => toggle(e)} />
				<Collapse isOpen={isOpen} color='primary' navbar>
					<Nav className='ml-auto' navbar>
						<NavItem>
							<NavLink color='danger'>
								<Link to='/logout'>Logout</Link>
								{/* <img
									src='//www.gravatar.com/avatar/a4523bbe3f0eefb435c2507d3afdd7df?s=200&r=pg&d=mm'
									alt='user'
									height='40px'
									width='40px'
								/> */}
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</Fragment>
	);
};

export default UserNavBar;
