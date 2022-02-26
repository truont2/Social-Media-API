const { ObjectId } = require('bson');
const {Schema, model} = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId, 
            default: () => new ObjectId()
        }, 
        reactionBody: {
            type: String, 
            required: true, 
            maxlength: 280
        }, 
        username: {
            type: String, 
            required: true
        }, 
        createdAt: {
            type: Date, 
            default: Date.now(),
            get: (timestamp) => moment(timestamp).format('MMMM Do YYYY [at] h:mm:ss a')
        }
    }
);

module.exports = reactionSchema;