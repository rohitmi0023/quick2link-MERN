const express = require("express");
const User = require("../../models/User");
const Music = require("../../models/Music");
const auth = require("../../middleware/auth");
const router = express.Router();

// @route POST api/music
// desc music route
// access Private

router.post("/", [auth], async (req, res) => {
    try {
        let music = await Music.findOne({ user: req.user.id });
        music = await Music.findOneAndUpdate(
            { user: req.user.id },
            { $push: { lists: [req.body] } },
            { new: true, safe: true, upsert: true }
        );
        let user = await User.findOne({ _id: req.user.id });
        user = await User.findOneAndUpdate(
            { _id: req.user.id },
            { $push: { musicList: music.lists[music.lists.length - 1].id } },
            { new: true, safe: true, upsert: true }
        );
        return res.json(music);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Errors");
    }
});

// @route GET api/social
// desc social route
// access Private
router.get("/", [auth], async (req, res) => {
    const musicListUser = await Music.find({ user: req.user.id }).populate(
        "musicList"
    );
    return res.json(musicListUser);
});

module.exports = router;
