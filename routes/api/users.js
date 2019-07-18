const express = require('express');
const { check, validationResult } = require('express-validator');
const gravatar = require('gravatar');
const bccrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const User = require('../../models/User');

const router = express.Router();

//@route POST api/users
//@desc Registers User
//@access Public
router.post(
	'/',
	[
		check('name', `Name is required`)
			.not()
			.isEmpty(),
		check('email', `E-mail is required`).isEmail(),
		check(
			'password',
			`Please enter a password with 6 or more characters`
		).isLength({ min: 6 })
	],
	(req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		res.send(`User route`);
		// 	const { name, email, password } = req.body;
		// 	try {
		// 		let user = await User.findOne({ email });
		// 		if (user) {
		// 			return res
		// 				.status(400)
		// 				.json({ errors: [{ msg: `User already exists! ` }] });
		// 		}
		// 		const avatar = gravatar.url(email, {
		// 			s: '200',
		// 			r: 'pg',
		// 			d: 'mm'
		// 		});
		// 		user = new User({
		// 			name,
		// 			email,
		// 			password,
		// 			avatar
		// 		});
		// 	} catch (err) {
		// 		console.error(err.mesaage);
		// 		res.send(500).send(`Server Error..`);
		// 	}
	}
);

module.exports = router;
