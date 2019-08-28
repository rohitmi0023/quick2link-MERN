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
import PropTypes from 'prop-types';

const NavBar = () => {
	const navLinkIcon = {
		fontSize: '20px',
		paddingLeft: '25px',
		paddingRight: '25px'
	};
	const [collapsed, setIsCollapsed] = useState(true);
	const toggleNavbar = () => {
		setIsCollapsed(prevState => !prevState);
	};
	const guestLinks = (
		<Fragment>
			<Navbar color='primary' light expand='md'>
				<NavbarToggler onClick={e => toggleNavbar(e)} className='mr-2' />
				<NavbarBrand
					className='mr-auto'
					tag={Link}
					to='/'
					className='nav-link'
					activeclassname='active'
				>
					Quick2Link
				</NavbarBrand>
				<Collapse isOpen={!collapsed} navbar>
					<Nav className='ml-auto' navbar>
						<NavItem className='navItem'>
							<NavLink
								style={navLinkIcon}
								tag={Link}
								to='/login'
								className='nav-link'
								activeclassname='active'
							>
								Log In
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								style={navLinkIcon}
								tag={Link}
								to='/register'
								className='nav-link'
								activeclassname='active'
							>
								Sign Up
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
			<NavLink />
		</Fragment>
	);

	return <Fragment>{guestLinks}</Fragment>;
};

NavbarToggler.propTypes = {
	type: PropTypes.string,
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

export default NavBar;
