var express = require('express');
var router = express.Router();
const apiCrown2Controller_24 = require("../controllers/apiCrown2Controller_24");

/* GET home page. */
router.get('/category_24', apiCrown2Controller_24.getCategories);

module.exports = router;