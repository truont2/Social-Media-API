const connection = require('../config/connection');

const {User, Thought} = require('../models');

connection.on('error', (err) => console.log(err));

connection.once('open', async () => {
    console.log('connected');

    // drop any existing users
    await User.deleteMany({});

    // drop any existing Thoughts
    await Thought.deleteMany({});

    await User.collection.insertOne({
        username: 'exampleUser', 
        email: 'example@example.com'
    })

    console.log(User)
    console.info('Seeding complete! 🌱')
    process.exit(0);
})