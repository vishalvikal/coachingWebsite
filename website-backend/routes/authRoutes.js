const express = require('express');
const router  = express.Router();
const {signin, signup} = require('../handlers/auth')
router.post('/signin',signin)

router.post('/signup', (req, res, next)=>{
  console.log("Got the request", req.body);
  next();
},signup )




module.exports = router;