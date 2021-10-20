var express = require('express');
var router = express.Router();
const crown2Controller_24 = require("../controllers/crown2Controller_24");

/* GET home page. */
router.get('/', crown2Controller_24.getCategories);

module.exports = router;