import React, { useState, Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Alert, Form, FormGroup, Button } from 'reactstrap';

const Register = () => {
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
			await axios.post('/api/users', body, config);
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
			<h3>Sign Up</h3>
			<p> Sign Up Your Account</p>
			<Form onSubmit={e => onSubmit(e)}>
				<FormGroup>
					<input
						type='text'
						placeholder='Name'
						name='name'
						value={name}
						onChange={e => onChange(e)}
					/>
				</FormGroup>
				<FormGroup>
					<input
						type='email'
						placeholder='Email-address'
						name='email'
						value={email}
						onChange={e => onChange(e)}
					/>
				</FormGroup>
				<FormGroup>
					<input
						type='password'
						placeholder='Password'
						name='password'
						value={password}
						onChange={e => onChange(e)}
					/>
				</FormGroup>
				<FormGroup>
					<input
						type='password'
						placeholder='Confirm Password'
						name='password2'
						value={password2}
						onChange={e => onChange(e)}
					/>
				</FormGroup>
				<br />
				<Button type='submit'>Register</Button>
			</Form>
			<p>
				<br />
				Already have an account? <Link to='/login'>Sign In</Link>
			</p>
		</Fragment>
	);
};

export default Register;
