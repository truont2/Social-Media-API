const router = require('express').Router();

// create all the database function actions in the controllers while in the routes folder you can define the routes
// usually everything is done in the controllers folder but this is another method of separating things out.

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