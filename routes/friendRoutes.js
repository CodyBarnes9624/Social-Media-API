const router = require('express').Router();
const User = require('../models/user');

// POST to add a new friend to a user's friend list
router.post('/:userId/friends/:friendId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const friend = await User.findById(req.params.friendId);

    if (!user || !friend) {
      return res.status(404).json({ message: 'User or friend not found' });
    }

    // Add friend to user's friend list
    user.friends.push(req.params.friendId);
    await user.save();

    // Add user to friend's friend list
    friend.friends.push(req.params.userId);
    await friend.save();

    res.json({ message: 'Friend added successfully', user });
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE to remove a friend from a user's friend list
router.delete('/:userId/friends/:friendId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const friend = await User.findById(req.params.friendId);

    if (!user || !friend) {
      return res.status(404).json({ message: 'User or friend not found' });
    }

    // Remove friend from user's friend list
    user.friends.pull(req.params.friendId);
    await user.save();

    // Remove user from friend's friend list
    friend.friends.pull(req.params.userId);
    await friend.save();

    res.json({ message: 'Friend removed successfully', user });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/:userID/friends', async (req, res) => {
    const { userID } = req.params;
    console.log(`Fetching reactions for thought ID: ${userID}`);
    
    try {
       
        res.send(`Reactions for thought ID: ${userID}`);
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
});


module.exports = router;