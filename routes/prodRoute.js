const express = require("express");
const router = express.Router();
const prodController = require('../controllers/prodController')


router.get('/show', prodController.getAllProducts);
router.get('/getCategories',prodController.getCategories);
router.get('/getAllProducts',prodController.getAllProducts);
module.exports = router;