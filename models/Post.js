// This is a mongoose model that allows me to perform CRUD operations to the 'Post' collection on my Mongo db

const { model, Schema } = require('mongoose');

const postSchema = new Schema({ 
    body: String,
    username: String,
    createdAt: String,
    comments: [
        {
            body: String,
            username: String,
            createdAt: String
        }
    ],
    likes: [
        {
            username: String,
            createdAt: String
        }
    ],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
});

module.exports = model('Post', postSchema);
