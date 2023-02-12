var express = require('express');
var router = express.Router();
const { addBlog, displayBlog, displayBlogById,upVote, downVote } = require('../controllers/blog');

router.post('/add', addBlog);
router.get('/display', displayBlog );
router.get('/displayById/:_id', displayBlogById);
router.post('/vote/:_id',upVote);
router.post('/dVote/:_id',downVote);


module.exports = router