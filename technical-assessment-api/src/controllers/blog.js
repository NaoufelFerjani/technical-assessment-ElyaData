var Blog = require('../models/blog');

const addBlog = async (req, res) => {
    try{
        var blog = new Blog({
            title: req.body.title,
            content: req.body.content,
            author: req.body.author,          

        });
        blog.save();
        res.json(blog)
    } catch (error){
        res.json(error.message)
    }
    };

    const upVote = async (req, res) => {
        try{
            let blog = await Blog.findById(req.params)
            blog.upvote=blog.upvote+1;
            blog.save();
            res.json(blog)
        } catch (error){
            res.json(error.message)
        }
        };
        
        const downVote = async (req, res) => {
            try{
                let blog = await Blog.findById(req.params)
                blog.downvote=blog.downvote+1;
                blog.save();
                res.json(blog)
                
            } catch (error){
                res.json(error.message)
            }
            };

const displayBlog = async (req, res) => {
    try {
        let blog = await Blog.find()
    
        res.json(blog)
    } catch (error) {
        res.json(error.message)
    }

    };

    const displayBlogById = async (req, res) => {
        try {
            let blog = await Blog.findOne(req.params)
           res.json(blog)
        } catch (error) {
            res.json({message: error.message})
        }
    };

module.exports = {
    addBlog,
    displayBlog,
    displayBlogById,
    upVote,
    downVote
}