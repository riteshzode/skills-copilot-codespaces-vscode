// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
 
// Import models
const Comment = require('../models/Comment');
const User = require('../models/User');
const Post = require('../models/Post');

// Import middleware
const auth = require('../middleware/auth');

// @route   POST api/comments
// @desc    Create a comment
// @access  Private
router.post('/', [auth, [
    check('text', 'Text is required').not().isEmpty(),
    check('post', 'Post is required').not().isEmpty()
]], async (req, res) => {}
);

// @route   GET api/comments
// @desc    Get all comments
// @access  Private
router.get('/', auth, async (req, res) => {
});


// @route   GET api/comments/:id
// @desc    Get comment by ID
// @access  Private
router.get('/:id', auth, async (req, res) => {
}    ); 

