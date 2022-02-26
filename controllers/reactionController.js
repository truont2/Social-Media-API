const { Thought, Reaction } = require('../models');
const thoughtController = require('./thoughtController');

module.exports = {
    createReaction( req, res) {
        Reaction.create(req.body) 
            .then((dbReactionData) => res.json(dbReactionData))
            .catch((err) => res.status(500).json(err));
    }, 
    removeReaction(req, res) {
        Thought.findOneAndUpdate(
          { _id: req.params.studentId },
          { $pull: { assignment: { assignmentId: req.params.assignmentId } } },
          { runValidators: true, new: true }
        )
          .then((student) =>
            !student
              ? res
                  .status(404)
                  .json({ message: 'No student found with that ID :(' })
              : res.json(student)
          )
          .catch((err) => res.status(500).json(err));
      }
}