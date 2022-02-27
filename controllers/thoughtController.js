const { Thought, User } = require('../models');

module.exports = {
  // Get all courses
  getThoughts(req, res) {
    Thought.find()
      .then((courses) => res.json(courses))
      .catch((err) => res.status(500).json(err));
  },
  // Get a course
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err)
      });
  },
  // Create a course
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'Post created, but found no user with that ID' })
          : res.json('Created Thought 🎉')
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // Delete a course
  // delete not working in User
  // need to somehow update user array that the thought was deleted
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : User.findOneAndUpdate(
            { videos: req.params.thoughtId },
            { $pull: { thoughts: req.params.thoughtId } },
            { new: true }
          )
      )
      .then(() => res.json({ message: 'Thought deleted!' }))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err)
      });
  },
  // Update a course
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err)
      });
  },
};
