import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: ''
	});
	const { email, password } = formData;

	const onChange = e =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	return (
		<Fragment>
			<p>
				<h3>Sign In</h3>
				Sign Into Your Account
			</p>
			<form>
				<div className='form-group'>
					<input
						type='email'
						placeholder='Email-address'
						name='email'
						onChange={e => onChange(e)}
						value={email}
						required
					/>
				</div>
				<div className='form-group'>
					<input
						type='password'
						placeholder='Password'
						name='password'
						onChange={e => onChange(e)}
						value={password}
						required
					/>
				</div>
				<br />
				<input type='submit' className='btn btn-primary' value='Login' />
			</form>
			<p>
				Don't have an account? <Link to='/register'>Sign Up</Link>
			</p>
		</Fragment>
	);
};

export default Login;
