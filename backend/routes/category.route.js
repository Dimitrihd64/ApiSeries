const express = require('express');
const categoryCtrl = require('../controllers/category.controller');
const router = express.Router();

router.get('/', categoryCtrl.getCategories);
router.get('/cat/:cat', categoryCtrl.getCategory);
router.post('/', categoryCtrl.addCategory);

module.exports = router;