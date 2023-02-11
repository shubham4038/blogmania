const express = require('express');
const blogController = require('../controller/blogController');

const router = express.Router();

router.route('/').get(blogController.getAllblogs).post();
router.route('/addblogs').post(blogController.addBlogs);

module.exports = router;