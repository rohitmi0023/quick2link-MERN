import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavLink, NavItem } from 'reactstrap';

const AuthNavBar = () => {
	const authLinks = (
		<Navbar color='primary' light expand='md'>
			<NavbarBrand>
				<Link to='/home'>Quick2Link</Link>
			</NavbarBrand>
			<Nav className='ml-auto'>
				<NavItem>
					<NavLink tag={Link} to='/Social'>
						Social
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink tag={Link} to='/movies'>
						Movies
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink tag={Link} to='/sports'>
						Sports
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink tag={Link} to='/music'>
						Music
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink tag={Link} to='/logout'>
						Logout
					</NavLink>
				</NavItem>
			</Nav>
		</Navbar>
	);
	return <div>{authLinks}</div>;
};

export default AuthNavBar;

// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import {
// 	Collapse,
// 	Navbar,
// 	NavbarToggler,
// 	NavbarBrand,
// 	Nav,
// 	NavLink,
// 	NavItem,
// 	UncontrolledDropdown,
// 	DropdownToggle,
// 	DropdownMenu,
// 	DropdownItem
// } from 'reactstrap';

// export class AuthNavBar extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.toggle = this.toggle.bind(this);
// 		this.state = {
// 			isOpen: false
// 		};
// 	}
// 	toggle() {
// 		this.setState({
// 			isOpen: !this.state.isOpen
// 		});
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<Navbar color='light' light expand='md'>
// 					<NavbarBrand href='/'>Quick2Link</NavbarBrand>
// 					<NavbarToggler onClick={this.toggle} />
// 					<Collapse isOpen={this.state.isOpen} navbar>
// 						<Nav className='ml-auto' navbar>
// 							<NavItem>
// 								**
// 								<NavLink tag={Link} to='/social'>
// 									Social
// 								</NavLink>
// 								**
// 							</NavItem>
// 							<UncontrolledDropdown nav inNavbar>
// 								<DropdownToggle nav caret>
// 									Movies
// 								</DropdownToggle>
// 								<DropdownMenu right>
// 									<DropdownItem>Music</DropdownItem>
// 									<DropdownItem>Sports</DropdownItem>
// 									<DropdownItem divider />
// 									<DropdownItem>Reset</DropdownItem>
// 								</DropdownMenu>
// 							</UncontrolledDropdown>
// 						</Nav>
// 					</Collapse>
// 				</Navbar>
// 			</div>
// 		);
// 	}
// }

// export default AuthNavBar;
