const User = require('../models/User');

module.exports = {
    getUsers(req, res) {
        User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    }, 
    getSingleUser(req, res) {
        User.find( {_id: req.params.userId})
        .select('-__v')
        .populate('thought')
        .populate('reactions')
        .then((user) => 
            !user
                ? res.status(404).json({ message: 'No user with that ID' })
                : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    }, 
    // create a new user
    createUser(req, res) {
        User.create(req.body)
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.status(500).json(err));
    }, 
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId }, 
            { $set: req.body }, 
            { runValidators: true, new: true }
        )
            .then((user) => 
                !user
                    ? res.status(404).json({ message: 'No user with this id!' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));

    }, 
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
          .then((course) =>
            !course
              ? res.status(404).json({ message: 'No course with that ID' })
              : Student.deleteMany({ _id: { $in: course.students } })
          )
          .then(() => res.json({ message: 'Course and students deleted!' }))
          .catch((err) => res.status(500).json(err));
      }
};