const moment = require("moment");
const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,  
            required: true, 
            minlength: 1, 
            maxlength: 280
        }, 
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => moment(timestamp).format('MMMM Do YYYY [at] h:mm:ss a')
          }, 
        username: [
            {
                type: String, 
                required: true
            }
        ], 
        reactions: [reactionSchema]
    }, 
    {
        toJson: {
            virtuals: true,
            getters: true
        }, 
        id: false
    }
); 

// Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query. // 

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
