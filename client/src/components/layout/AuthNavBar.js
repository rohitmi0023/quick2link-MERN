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
		fontSize: '20px',
		color: 'red'
	};
	const [collapsed, setIsCollapsed] = useState(true);
	const toggleNavbar = () => {
		setIsCollapsed(prevState => !prevState);
	};
	const authLinks = (
		<Fragment>
			<Navbar color='primary' light expand='md'>
				<NavbarToggler onClick={e => toggleNavbar(e)} className='mr-2' />
				<NavbarBrand
					className='ml-2'
					tag={Link}
					to='/home'
					className='nav-link'
				>
					Quick2Link
				</NavbarBrand>
				<Collapse isOpen={!collapsed} navbar>
					<Nav navbar>
						<NavItem>
							<NavLink
								className='nav-link'
								style={navLinkIcon}
								tag={Link}
								to='/social'
							>
								Social
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								className='nav-link'
								style={navLinkIcon}
								tag={Link}
								to='/movies'
							>
								Movies
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								className='nav-link'
								tag={Link}
								to='/sports'
								style={navLinkIcon}
							>
								Sports
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								className='nav-link'
								tag={Link}
								to='/music'
								style={navLinkIcon}
							>
								Music
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
				<Nav>
					<NavItem>
						<NavLink
							className='nav-link'
							style={logOutIcon}
							tag={Link}
							to='/logout'
						>
							Logout
						</NavLink>
					</NavItem>
				</Nav>
			</Navbar>
		</Fragment>
	);
	return <Fragment>{authLinks}</Fragment>;
};

NavbarToggler.propTypes = {
	type: PropTypes.string,
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

export default AuthNavBar;
