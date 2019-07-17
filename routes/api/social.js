const express = require('express');

const router = express.Router();

//@route GET api/auth
//@desc Auth route
//@access Public
router.get('/', (req, res) => {
	res.send(`Social Route`);
});

module.exports = router;
