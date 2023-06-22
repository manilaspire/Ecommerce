const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController')
const verifyToken=require("../auth");

router.get('/getUser', verifyToken,userController.getAll);
router.post('/createUser', userController.create);
router.post('/signIn',userController.signIn);
module.exports = router;