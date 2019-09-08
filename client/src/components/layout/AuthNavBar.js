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
import './AuthNavBar.css';

const AuthNavBar = () => {
	const navLinkIcon = {
		fontSize: '20px',
		paddingLeft: '5px',
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
			<Navbar light expand='md'>
				<NavbarToggler onClick={e => toggleNavbar(e)} className='mr-2' />
				<NavbarBrand
					className='mr-auto linkItem'
					tag={Link}
					to='/home'
					style={navLinkIcon}
				>
					Quick2Link
				</NavbarBrand>
				<Collapse isOpen={!collapsed} navbar>
					<Nav className='ml-auto' navbar>
						<NavItem className='navItem'>
							<NavLink
								style={navLinkIcon}
								tag={Link}
								to='/social'
								className='linkItem'
							>
								Social
							</NavLink>
						</NavItem>
						<NavItem className='navItem'>
							<NavLink
								style={navLinkIcon}
								tag={Link}
								to='/movies'
								className='linkItem'
							>
								Movies
							</NavLink>
						</NavItem>
						<NavItem className='navItem'>
							<NavLink
								tag={Link}
								to='/sports'
								style={navLinkIcon}
								className='linkItem'
							>
								Sports
							</NavLink>
						</NavItem>
						<NavItem className='navItem'>
							<NavLink
								tag={Link}
								to='/music'
								style={navLinkIcon}
								className='linkItem'
							>
								Music
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
				<Nav>
					<NavItem className='navItem'>
						<NavLink
							style={logOutIcon}
							tag={Link}
							to='/logout'
							className='linkItem'
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
