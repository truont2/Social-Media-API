const { User } = require('../models');

module.exports ={
    addFriend(req, res) {
        console.log('You are adding a friend');
        console.log(req.body);
        User.findOneAndUpdate(
          { _id: req.params.userId },
          // add to set is a complex command that is built in to mongoose
          { $addToSet: { friends: req.params.friendId } },
          { runValidators: true, new: true }
        )
          .then((friend) =>
            !friend
              ? res
                  .status(404)
                  .json({ message: 'No student found with that ID :(' })
              : res.json(friend)
          )
          .catch((err) => {
              console.log(err);
              res.status(500).json(err)
          });
      },
      removeFriend(req, res) {
        User.findOneAndUpdate(
          { _id: req.params.userId },
          { $pull: { friends: req.params.friendId  } },
          { runValidators: true, new: true }
        )
          .then((friend) =>
            !friend
              ? res
                  .status(404)
                  .json({ message: 'No friend found with that ID :(' })
              : res.json(friend)
          )
          .catch((err) => {
            console.log(err);
            res.status(500).json(err)
          });
      }
}