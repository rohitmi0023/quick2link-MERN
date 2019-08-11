import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Alert, Form, FormGroup, Button, Input, Col, Row } from 'reactstrap';
import PasswordMask from 'react-password-mask';
import NavBar from '../layout/NavBar';

const Register = ({ history }) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: ''
	});

	const [handleErrors, setHandleErrors] = useState({
		currentErrors: []
	});

	const { name, email, password, password2 } = formData;

	const onChange = e =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async e => {
		e.preventDefault();
		const newUser = {
			name,
			email,
			password,
			password2
		};
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json'
				}
			};
			const body = JSON.stringify(newUser);
			const res = await axios.post('/api/users', body, config);
			alert('User registered successfully!');
			console.log(res.data.token);
			history.push('/home');
		} catch (err) {
			const errors = err.response.data.errors;
			const msgs = errors.map(e => e.msg);
			setHandleErrors({ ...handleErrors, currentErrors: msgs });
		}
	};

	return (
		<Fragment>
			<NavBar />
			<br />
			<Alert color='danger'>
				{handleErrors.currentErrors.length > 0
					? handleErrors.currentErrors[0]
					: `Invalid credentials will be displayed here`}
			</Alert>
			<h3>Sign Up</h3>
			<p> Sign Up Your Account</p>
			<Form onSubmit={e => onSubmit(e)}>
				<Row form>
					<Col md={5}>
						<FormGroup>
							<Input
								type='text'
								placeholder='Name'
								name='name'
								value={name}
								onChange={e => onChange(e)}
							/>
						</FormGroup>
					</Col>
					<Col md={5}>
						<FormGroup>
							<Input
								type='email'
								placeholder='Email'
								name='email'
								value={email}
								onChange={e => onChange(e)}
							/>
						</FormGroup>
					</Col>
				</Row>
				<br />
				<Row form>
					<Col md={5}>
						<FormGroup>
							<PasswordMask
								type='password'
								id='password'
								placeholder='Password'
								name='password'
								value={password}
								onChange={e => onChange(e)}
							/>
						</FormGroup>
					</Col>
					<Col md={5}>
						<FormGroup>
							<PasswordMask
								type='password'
								id='password2'
								placeholder='Confirm Password'
								name='password2'
								value={password2}
								onChange={e => onChange(e)}
							/>
						</FormGroup>
					</Col>
				</Row>
				<br />
				<Button>Register</Button>
			</Form>
			<p>
				<br />
				Already have an account? <Link to='/login'>Sign In</Link>
			</p>
		</Fragment>
	);
};

export default Register;
