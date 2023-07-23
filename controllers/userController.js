const express = require('express');
const Joi = require('joi');

const validateRequest = require('../Middleware/validate-request');
const Role = require('../Enum/role');
const userService = require('../services/userService');

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
// routes
const dotenv = require('dotenv');

exports.getAll =async(req, res, next)=> {
    userService.getAll()
        .then(users => res.json(users))
        .catch(next);
}


exports.signIn =async(req, res, next)=> {
    const { email, password } = req.body;
    userService.getUserByEmail(email)
        .then(user =>{
            if (!user) {
                return res.status(404).send({ message: "User Not found." });
              }
              var passwordIsValid = bcrypt.compareSync(
                password,
                user.PasswordHash
              );
              if (!passwordIsValid) {
                return res.status(401).send({
                  accessToken: null,
                  message: "Invalid Password!"
                });
              }
              else{
                var token = jwt.sign({payload: { id: user.id, username: user.email}}, process.env.JWT_SECRET, {
                  expiresIn: 86400 // 24 hours
                });
                res.status(200).send({              
                  accessToken: token
                });
  
              }              
        }
            )
        .catch(next);
}
exports.create=async(req, res, next)=> {
    userService.create(req.body)
        .then(() => res.json({ message: 'User created' }))
        .catch(next);
}
