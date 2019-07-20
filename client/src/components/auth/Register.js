import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: ''
	});
	const { name, email, password, password2 } = formData;

	return (
		<Fragment>
			<h1 className='large text-primary'>Sign Up</h1>
			<p className='lead'>
				<i className='fas fa-user' /> Create Your Account
			</p>
			<form>
				<input type='text' />
				<input type='email' />
				<input type='password' />
				<input type='password2' />
				<input type='submit' />
			</form>
			<p>
				Already have an account? <Link to='/login'>Sign In</Link>
			</p>
		</Fragment>
	);
};

export default Register;
