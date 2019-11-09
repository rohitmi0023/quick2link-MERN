const express = require('express')
const User = require('../../models/User')
const Social = require('../../models/Social')
const auth = require('../../middleware/auth')
const router = express.Router()

// @route POST api/social
// desc social route
// access Private

router.post('/', [auth], async (req, res) => {
    try {
          let social = await Social.findOne({ user: req.user.id})
            social = await Social.findOneAndUpdate(
                {user: req.user.id},
                {$push: {"lists": [req.body]}},
                {new: true,"safe": true, upsert: true} 
                )
        let user = await User.findOne({ _id: req.user.id })
          user = await User.findOneAndUpdate(
            {_id: req.user.id},
            {$push: {"socialList": social.lists[social.lists.length - 1].id }},
            {new: true, "safe": true, upsert: true}
        )
          return res.json(social)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Errors')
    }
   }
)

// @route GET api/social
// desc social route
// access Private
router.get('/',[auth], async(req, res) => {
  const socialListUser = await Social.find({ user: req.user.id }).populate('socialList')
  return res.json(socialListUser)
})

module.exports = router
