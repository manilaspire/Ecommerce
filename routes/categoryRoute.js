const express = require("express");
const router = express.Router();
const categoryController=require("../controllers/categoryController");
const verifyToken=require("../auth");



router.post('/create',verifyToken,categoryController.create);
router.get('/getAll',verifyToken,categoryController.getAll);
router.get('/getCategory/:id',verifyToken,categoryController.getCategory);

module.exports=router;