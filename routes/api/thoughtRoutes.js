const router = require('express').Router();

const {
    getThoughts, 
    getSingleThought, 
    createThought, 
    deleteThought, 
    updateThought
} = require("../../controllers/thoughtController");
const {
    createReaction,
    removeReaction
} = require("../../controllers/reactionController")

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);


router.route('/:thoughtId/reactions')
    .post(createReaction)
    
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);
module.exports = router;