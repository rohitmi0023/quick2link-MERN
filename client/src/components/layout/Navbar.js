import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown
} from 'reactstrap';

export default class NavBar extends React.Component {
	state = {
		isOpen: false
	};

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	};
	render() {
		return (
			<Fragment>
				<Navbar color='danger' light expand='md'>
					<NavbarBrand>
						<Link to='/home'>Home</Link>
					</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} color='primary' navbar>
						<Nav className='ml-auto' navbar>
							<NavItem>
								<NavLink color='danger'>
									<Link to='/register'>Sign-Up</Link>
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink>
									<Link to='/login'>Log In</Link>
								</NavLink>
							</NavItem>
							<UncontrolledDropdown nav inNavbar />
						</Nav>
					</Collapse>
				</Navbar>
			</Fragment>
		);
	}
}
