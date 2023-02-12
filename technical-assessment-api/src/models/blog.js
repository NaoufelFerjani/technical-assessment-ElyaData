const mongoose = require('mongoose')

const blogSchema = mongoose.Schema(
    {
        title: { type: String },
        content: { type: String },
        author: { type: String },
        upvote: { type: Number , default: 0 },
        downvote: { type: Number , default : 0},
    }
)

const Blogs = mongoose.model('blogs', blogSchema)

module.exports = Blogs