const express = require("express");
const router = express.Router();
const prodController = require('../controllers/prodController')
const verifyToken=require("../auth");


router.post('/create',verifyToken,prodController.create);
router.get('/getAll',verifyToken,prodController.getAll);
router.get('/getProduct/:id',verifyToken,prodController.getProduct)
router.get('/getProductByCategory/:id',verifyToken,prodController.getProductByCategory)
module.exports = router;