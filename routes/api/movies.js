const express = require("express");
const User = require("../../models/User");
const Movies = require("../../models/Movies");
const auth = require("../../middleware/auth");
const router = express.Router();

// @route POST api/movies
// desc movies route
// access Private

router.post("/", [auth], async (req, res) => {
    try {
        let movies = await Movies.findOne({ user: req.user.id });
        movies = await Movies.findOneAndUpdate(
            { user: req.user.id },
            { $push: { lists: [req.body] } },
            { new: true, safe: true, upsert: true }
        );
        let user = await User.findOne({ _id: req.user.id });
        user = await User.findOneAndUpdate(
            { _id: req.user.id },
            { $push: { moviesList: movies.lists[movies.lists.length - 1].id } },
            { new: true, safe: true, upsert: true }
        );
        return res.json(movies);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Errors");
    }
});

// @route GET api/movies
// desc movies route
// access Private
router.get("/", [auth], async (req, res) => {
    const moviesListUser = await Movies.find({ user: req.user.id }).populate(
        "moviesList"
    );
    return res.json(moviesListUser);
});

module.exports = router;
