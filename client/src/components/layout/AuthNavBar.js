import React, { useState, Fragment } from 'react';
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

const AuthNavBar = () => {
	const navLinkIcon = {
		fontSize: '20px',
		paddingLeft: '25px',
		paddingRight: '25px'
	};
	const logOutIcon = {
		cssFloat: 'right',
		fontSize: '20px'
	};
	const [collapsed, setIsCollapsed] = useState(true);
	const toggleNavbar = () => {
		setIsCollapsed(prevState => !prevState);
	};
	const authLinks = (
		<Fragment>
			<Navbar color='primary' light expand='md'>
				<NavbarBrand
					className='mr-auto'
					tag={Link}
					to='/home'
					className='nav-link'
					activeclassname='active'
				>
					Quick2Link
				</NavbarBrand>
				<NavbarToggler onClick={e => toggleNavbar(e)} className='mr-2' />
				<Collapse isOpen={!collapsed} navbar>
					<Nav className='ml-auto' navbar>
						<NavItem>
							<NavLink
								style={navLinkIcon}
								tag={Link}
								to='/Social'
								className='nav-link'
								activeclassname='active'
							>
								Social
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								style={navLinkIcon}
								tag={Link}
								to='/movies'
								className='nav-link'
								activclassname='active'
							>
								Movies
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								style={navLinkIcon}
								tag={Link}
								to='/sports'
								className='nav-link'
								activeclassname='active'
							>
								Sports
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								style={navLinkIcon}
								tag={Link}
								to='/music'
								className='nav-link'
								activeclassname='active'
							>
								Music
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
			<NavLink
				style={logOutIcon}
				tag={Link}
				to='/logout'
				className='nav-link'
				activeclassname='active'
			>
				Logout
			</NavLink>
		</Fragment>
	);
	return <Fragment>{authLinks}</Fragment>;
};

NavbarToggler.propTypes = {
	type: PropTypes.string,
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

export default AuthNavBar;
