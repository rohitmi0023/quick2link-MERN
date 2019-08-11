import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Button, Alert, Input, Col, Row } from 'reactstrap';
import axios from 'axios';
import PasswordMask from 'react-password-mask';

const Login = props => {
	const [formData, setFormData] = useState({
		email: '',
		password: ''
	});

	const [handleErrors, setHandleErrors] = useState({
		currentErrors: []
	});

	const { email, password } = formData;

	const onChange = e =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const handleSubmit = async e => {
		e.preventDefault();
		const userCheck = {
			email,
			password
		};
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json'
				}
			};
			const body = JSON.stringify(userCheck);
			const res = await axios.post('/api/auth', body, config);
			// alert('User logged in successfully');
			console.log(res);
			console.log(res.data.token);
			console.log(props);
			props.history.push('/login');
		} catch (err) {
			const errors = err.response.data.errors;
			const msgs = errors.map(e => e.msg);
			setHandleErrors({ ...handleErrors, currentErrors: msgs });
		}
	};

	return (
		<Fragment>
			<br />
			<Alert color='danger'>
				{handleErrors.currentErrors.length > 0
					? handleErrors.currentErrors[0]
					: `Invalid credentials will be displayed here`}
			</Alert>
			<h3>Sign In</h3>
			<p> Sign Into Your Account</p>
			<Form onSubmit={e => handleSubmit(e)}>
				<Row form>
					<Col md={5}>
						<FormGroup>
							<Input
								type='email'
								placeholder='Email-address'
								name='email'
								onChange={e => onChange(e)}
								value={email}
							/>
						</FormGroup>
					</Col>
					<Col md={5}>
						<FormGroup>
							<PasswordMask
								type='password'
								placeholder='Password'
								name='password'
								onChange={e => onChange(e)}
								value={password}
							/>
						</FormGroup>
					</Col>
				</Row>
				<Button>Login</Button>
			</Form>
			<p>
				<br />
				Don't have an account? <Link to='/register'>Sign Up</Link>
			</p>
		</Fragment>
	);
};

export default Login;
