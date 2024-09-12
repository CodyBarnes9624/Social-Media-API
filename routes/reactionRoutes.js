const express = require('express');
const router = express.Router();
const Thought = require('../models/Thought');
const mongoose = require('mongoose');

// POST to add a reaction to a thought
router.post('/:thoughtId/reactions', async (req, res) => {
  try {
    console.log('test');
    const { thoughtId } = req.params;
    const { reactionBody, username } = req.body;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(thoughtId)) {
      return res.status(400).json({ message: 'Invalid Thought ID' });
    }

    // Update the Thought by adding a new reaction
    const thought = await Thought.findByIdAndUpdate(
      thoughtId,
      {
        $push: { reactions: { reactionBody, username } }
      },
      { new: true, runValidators: true }
    );

    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }

    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE to remove a reaction from a thought
router.delete('/:thoughtId/reactions/:reactionId', async (req, res) => {
  try {
    const { thoughtId, reactionId } = req.params;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(thoughtId) || !mongoose.Types.ObjectId.isValid(reactionId)) {
      return res.status(400).json({ message: 'Invalid IDs' });
    }

    // Update the Thought by removing the reaction
    const thought = await Thought.findByIdAndUpdate(
      thoughtId,
      {
        $pull: { reactions: { _id: reactionId } }
      },
      { new: true }
    );

    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }

    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/:thoughtId/reactions', async (req, res) => {
    const { thoughtId } = req.params;
    console.log(`Fetching reactions for thought ID: ${thoughtId}`);
    
    try {
    
        res.send(`Reactions for thought ID: ${thoughtId}`);
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
});




module.exports = router;