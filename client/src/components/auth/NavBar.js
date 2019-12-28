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
import './Navbar.css';

const NavBar = () => {
	const [collapsed, setIsCollapsed] = useState(true);
	const toggleNavbar = () => {
		setIsCollapsed(prevState => !prevState);
	};
	const navLinkIcon = {
		fontSize: '25px',
		paddingLeft: '5px',
		paddingRight: '25px'
	};

	const guestLinks = (
		<Fragment>
			<Navbar light expand='md' color='primary'>
				<NavbarToggler onClick={e => toggleNavbar(e)} className='mr-2' />
				<NavbarBrand
					className='mr-auto linkItem'
					style={navLinkIcon}
					tag={Link}
					to='/'
				>
					Quick2Link
				</NavbarBrand>
				<Collapse isOpen={!collapsed} navbar>
					<Nav className='ml-auto' navbar>
						<NavItem className='navItem'>
							<NavLink
								tag={Link}
								to='/login'
								style={navLinkIcon}
								className='linkItem'
							>
								Log In
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								tag={Link}
								to='/register'
								style={navLinkIcon}
								className='linkItem'
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
